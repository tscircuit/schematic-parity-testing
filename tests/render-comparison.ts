import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import type { AnyCircuitElement } from "circuit-json"
import { readFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import sharp from "sharp"
import type { PageMapping } from "./page-map"
import { PANEL_HEIGHT, PANEL_WIDTH, stackPngsHorizontally } from "./stack-pngs"

const circuitJsonPath = fileURLToPath(
  new URL("../dist/index/circuit.json", import.meta.url),
)

export const loadCircuitJson = async () =>
  JSON.parse(await readFile(circuitJsonPath, "utf8")) as AnyCircuitElement[]

export const normalizeSvgSnapshot = (svg: string) =>
  `${svg.replace(/[\t ]+$/gm, "").trimEnd()}\n`

export const renderSheetSvg = (
  circuitJson: AnyCircuitElement[],
  sheetId: string,
) =>
  normalizeSvgSnapshot(convertCircuitJsonToSchematicSvg(circuitJson, {
    schematicSheetId: sheetId,
    width: PANEL_WIDTH,
    height: PANEL_HEIGHT,
    includeVersion: false,
    showErrorsInTextOverlay: false,
  }))

const placeholderSvg = (label: string) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${PANEL_WIDTH}" height="${PANEL_HEIGHT}" viewBox="0 0 ${PANEL_WIDTH} ${PANEL_HEIGHT}">
    <rect width="100%" height="100%" fill="#ffffff"/>
    <rect x="170" y="250" width="860" height="276" rx="16" fill="#f8fafc" stroke="#94a3b8" stroke-width="3" stroke-dasharray="12 10"/>
    <text x="600" y="365" text-anchor="middle" fill="#334155" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="600">No corresponding tscircuit sheet</text>
    <text x="600" y="415" text-anchor="middle" fill="#64748b" font-family="Arial, Helvetica, sans-serif" font-size="22">${label}</text>
  </svg>
`

export async function renderComparison(
  circuitJson: AnyCircuitElement[],
  mapping: PageMapping,
) {
  const pageFile = `page-${String(mapping.page).padStart(2, "0")}.png`
  const tiPagePath = fileURLToPath(
    new URL(`./fixtures/ti-pages/${pageFile}`, import.meta.url),
  )
  const tiPng = await readFile(tiPagePath)
  const currentSvg = mapping.sheetId
    ? renderSheetSvg(circuitJson, mapping.sheetId)
    : placeholderSvg(mapping.tscircuitLabel)
  const currentPng = await sharp(Buffer.from(currentSvg)).png().toBuffer()

  return stackPngsHorizontally(tiPng, currentPng, {
    left: mapping.tiLabel,
    right: mapping.tscircuitLabel,
  })
}
