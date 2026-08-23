import { expect, test } from "bun:test"
import { stackSvgsVertically } from "stack-svgs"
import { pageMappings } from "./page-map"
import {
  loadCircuitJson,
  normalizeSvgSnapshot,
  renderSheetSvg,
} from "./render-comparison"

test("all recreated sheets stacked vertically", async () => {
  const circuitJson = await loadCircuitJson()
  const sheets = pageMappings
    .filter((mapping) => mapping.sheetId)
    .map((mapping) => renderSheetSvg(circuitJson, mapping.sheetId!))
  const overview = normalizeSvgSnapshot(stackSvgsVertically(sheets, {
    gap: 16,
    normalizeSize: true,
    targetSize: 600,
    rootAttributes: {
      role: "img",
      "aria-label": "All TIDA-010076 tscircuit schematic sheets",
    },
  }))

  await expect(overview).toMatchSvgSnapshot(import.meta.path, "all-sheets")
})
