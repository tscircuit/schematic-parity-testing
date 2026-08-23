import { expect, test } from "bun:test"
import { loadCircuitJson } from "./render-comparison"

const elements = (await loadCircuitJson()) as any[]

test("NET_AGND is declared as ground and renders eligible labels as symbols", () => {
  const groundNets = elements.filter(
    (element) =>
      element.type === "source_net" && element.name === "NET_AGND",
  )

  expect(groundNets).toHaveLength(1)
  expect(groundNets[0].is_ground).toBe(true)

  const downwardGroundLabels = elements.filter(
    (element) =>
      element.type === "schematic_net_label" &&
      element.source_net_id === groundNets[0].source_net_id &&
      element.anchor_side === "top",
  )

  expect(downwardGroundLabels.length).toBeGreaterThan(0)
  expect(
    downwardGroundLabels.every((label) => label.symbol_name === "rail_down"),
  ).toBe(true)
})
