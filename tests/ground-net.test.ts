import { expect, test } from "bun:test"
import { loadCircuitJson } from "./render-comparison"

const elements = (await loadCircuitJson()) as any[]

const expectedGroundNetNames = [
  "NET_AGND",
  "NET_BUCK_GND",
  "NET_GND",
  "NET_ILIM_GND",
  "NET_INA_GND",
  "NET_LM10500_GND",
  "NET_LM10500_SGNDa",
  "NET_LM10500_SGNDb",
  "NET_LMZM33603_GND",
  "NET_LP2951_GND",
  "NET_PGND",
  "NET_SGND_F1",
  "NET_SGND_F2",
]

test("every ground rail is declared as a ground net", () => {
  const groundNets = elements
    .filter(
      (element) =>
        element.type === "source_net" &&
        expectedGroundNetNames.includes(element.name),
    )
    .sort((left, right) => left.name.localeCompare(right.name))

  expect(groundNets.map((net) => net.name)).toEqual(expectedGroundNetNames)
  expect(groundNets.every((net) => net.is_ground === true)).toBe(true)
})

test("NET_AGND renders eligible labels as ground symbols", () => {
  const groundNet = elements.find(
    (element) =>
      element.type === "source_net" && element.name === "NET_AGND",
  )

  expect(groundNet?.is_ground).toBe(true)

  const downwardGroundLabels = elements.filter(
    (element) =>
      element.type === "schematic_net_label" &&
      element.source_net_id === groundNet?.source_net_id &&
      element.anchor_side === "top",
  )

  expect(downwardGroundLabels.length).toBeGreaterThan(0)
  expect(
    downwardGroundLabels.every((label) => label.symbol_name === "rail_down"),
  ).toBe(true)
})
