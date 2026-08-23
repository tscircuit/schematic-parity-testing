import { describe, expect, test } from "bun:test"
import { pageMappings } from "./page-map"
import {
  loadCircuitJson,
  renderComparison,
  renderSheetSvg,
} from "./render-comparison"

const circuitJson = await loadCircuitJson()

describe("TI TIDA-010076 schematic parity", () => {
  for (const mapping of pageMappings) {
    const pageName = `page-${String(mapping.page).padStart(2, "0")}-${mapping.slug}`

    test(`${pageName} paired PNG`, async () => {
      const comparison = await renderComparison(circuitJson, mapping)
      await expect(comparison).toMatchPngSnapshot(import.meta.path, pageName)
    })

    if (mapping.sheetId) {
      test(`${pageName} tscircuit SVG`, async () => {
        const svg = renderSheetSvg(circuitJson, mapping.sheetId!)
        await expect(svg).toMatchSvgSnapshot(import.meta.path, pageName)
      })
    }
  }
})
