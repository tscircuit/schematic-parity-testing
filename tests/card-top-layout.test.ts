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

test("J1 has all three TI rail connections and visible local wire stubs", () => {
  const j1 = component("J1")
  const ports = elements.filter(
    (element) =>
      element.type === "schematic_port" &&
      element.schematic_component_id === j1.schematic_component_id,
  )
  const expectedNetByPin = new Map([
    [1, "NET_Local_3V3"],
    [2, "NET_PHY_VDD"],
    [3, "NET_External_3V3"],
  ])

  expect(ports).toHaveLength(3)
  expect(ports.every((port) => port.is_connected)).toBe(true)

  for (const port of ports) {
    const sourceTrace = elements.find(
      (element) =>
        element.type === "source_trace" &&
        element.connected_source_port_ids?.includes(port.source_port_id),
    )
    const sourceNet = elements.find(
      (element) =>
        element.type === "source_net" &&
        sourceTrace?.connected_source_net_ids?.includes(element.source_net_id),
    )
    const localLabel = elements.find(
      (element) =>
        element.type === "schematic_net_label" &&
        element.schematic_sheet_id === "schematic_sheet_0" &&
        element.source_net_id === sourceNet?.source_net_id &&
        Math.abs(element.anchor_position.x - port.center.x) < 0.2 &&
        Math.abs(element.anchor_position.y - port.center.y) < 0.001,
    )
    const localTrace = elements.find(
      (element) =>
        element.type === "schematic_trace" &&
        element.source_trace_id === sourceTrace?.source_trace_id,
    )

    expect(sourceNet?.name).toBe(expectedNetByPin.get(port.pin_number))
    expect(localLabel?.text).toBe(expectedNetByPin.get(port.pin_number))
    expect(localTrace?.edges.length).toBeGreaterThan(0)
  }
})

test("J4 and J5 face inward toward the hierarchy boxes", () => {
  const portDirections = (name: string) => {
    const schematicComponent = component(name)
    return elements
      .filter(
        (element) =>
          element.type === "schematic_port" &&
          element.schematic_component_id ===
            schematicComponent.schematic_component_id,
      )
      .map((port) => ({
        side: port.side_of_component,
        direction: port.facing_direction,
      }))
  }

  expect(portDirections("J4")).toEqual(
    Array(6).fill({ side: "right", direction: "right" }),
  )
  expect(portDirections("J5")).toEqual(
    Array(6).fill({ side: "left", direction: "left" }),
  )
})

test("J4 and J5 spread the signal and ground pins like the TI jacks", () => {
  const pinGaps = (name: string) => {
    const schematicComponent = component(name)
    expect(
      Object.values(schematicComponent.pin_styles ?? {}).some(
        (style: any) => style.top_margin || style.bottom_margin,
      ),
    ).toBe(true)
    const ports = elements
      .filter(
        (element) =>
          element.type === "schematic_port" &&
          element.schematic_component_id ===
            schematicComponent.schematic_component_id,
      )
      .sort((left, right) => left.pin_number - right.pin_number)

    return ports.slice(1).map((port, index) =>
      Number(Math.abs(ports[index].center.y - port.center.y).toFixed(3)),
    )
  }

  expect(pinGaps("J4")).toEqual([0.4, 0.6, 0.4, 0.4, 0.4])
  expect(pinGaps("J5")).toEqual([0.4, 0.6, 0.4, 0.4, 0.4])
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

test("page 2 includes the referenced power and data hierarchy boxes", () => {
  const expectedBoxes = [
    {
      name: "U1_T1_Power_Top_Level",
      width: 5.04,
      height: 6.767,
      pinCount: 16,
      leftPins: 7,
      rightPins: 9,
    },
    {
      name: "U1_T1_Data_Top_Level",
      width: 5.04,
      height: 7.54,
      pinCount: 43,
      leftPins: 30,
      rightPins: 13,
    },
  ]

  for (const expected of expectedBoxes) {
    const hierarchyBox = component(expected.name)
    const ports = elements.filter(
      (element) =>
        element.type === "schematic_port" &&
        element.schematic_component_id === hierarchyBox.schematic_component_id,
    )

    expect(hierarchyBox.is_box_with_pins).toBe(true)
    expect(hierarchyBox.size.width).toBeCloseTo(expected.width)
    expect(hierarchyBox.size.height).toBeCloseTo(expected.height)
    expect(ports).toHaveLength(expected.pinCount)
    expect(
      ports.filter((port) => port.side_of_component === "left"),
    ).toHaveLength(expected.leftPins)
    expect(
      ports.filter((port) => port.side_of_component === "right"),
    ).toHaveLength(expected.rightPins)
  }
})
