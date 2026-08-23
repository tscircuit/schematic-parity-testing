import { expect, test } from "bun:test"
import { loadCircuitJson } from "./render-comparison"

const elements = (await loadCircuitJson()) as any[]
const sourceNameById = new Map(
  elements
    .filter((element) => element.type === "source_component")
    .map((element) => [element.source_component_id, element.name]),
)

const component = (name: string) => {
  const result = elements.find(
    (element) =>
      element.type === "schematic_component" &&
      element.schematic_sheet_id === "schematic_sheet_0" &&
      sourceNameById.get(element.source_component_id) === name,
  )
  if (!result) throw new Error(`Missing page-2 schematic component ${name}`)
  return result
}

test("page 2 components do not overlap", () => {
  const components = elements.filter(
    (element) =>
      element.type === "schematic_component" &&
      element.schematic_sheet_id === "schematic_sheet_0",
  )
  const overlaps: string[] = []

  for (let leftIndex = 0; leftIndex < components.length; leftIndex += 1) {
    for (
      let rightIndex = leftIndex + 1;
      rightIndex < components.length;
      rightIndex += 1
    ) {
      const left = components[leftIndex]
      const right = components[rightIndex]
      const overlapX =
        Math.min(
          left.center.x + left.size.width / 2,
          right.center.x + right.size.width / 2,
        ) -
        Math.max(
          left.center.x - left.size.width / 2,
          right.center.x - right.size.width / 2,
        )
      const overlapY =
        Math.min(
          left.center.y + left.size.height / 2,
          right.center.y + right.size.height / 2,
        ) -
        Math.max(
          left.center.y - left.size.height / 2,
          right.center.y - right.size.height / 2,
        )

      if (overlapX > 0 && overlapY > 0) {
        overlaps.push(
          `${sourceNameById.get(left.source_component_id)} overlaps ${sourceNameById.get(right.source_component_id)}`,
        )
      }
    }
  }

  expect(overlaps).toEqual([])
})

test("J1 uses the thin three-pin header body", () => {
  const j1 = component("J1")
  expect(j1.size.width).toBeLessThanOrEqual(0.3)
  expect(j1.size.height).toBeLessThanOrEqual(0.4)
})

test("J4 and J5 preserve the mirrored Altium pin sides", () => {
  const portSides = (name: string) => {
    const schematicComponent = component(name)
    return elements
      .filter(
        (element) =>
          element.type === "schematic_port" &&
          element.schematic_component_id ===
            schematicComponent.schematic_component_id,
      )
      .map((port) => port.side_of_component)
  }

  expect(portSides("J4")).toEqual(Array(6).fill("left"))
  expect(portSides("J5")).toEqual(Array(6).fill("right"))
})

test("J11 remains inside the lower-left MSP430 section", () => {
  const j11 = component("J11")
  const sectionBox = elements.find(
    (element) =>
      element.type === "schematic_box" &&
      element.schematic_sheet_id === "schematic_sheet_0",
  )
  if (!sectionBox) throw new Error("Missing MSP430 schematic section box")

  expect(j11.center.x).toBeGreaterThan(sectionBox.x)
  expect(j11.center.x).toBeLessThan(sectionBox.x + sectionBox.width)
  expect(j11.center.y).toBeGreaterThan(sectionBox.y)
  expect(j11.center.y).toBeLessThan(sectionBox.y + sectionBox.height)
})
