import { expect, test } from "bun:test"
import type {
  AnyCircuitElement,
  SchematicComponent,
  SchematicSheet,
  SchematicTrace,
} from "circuit-json"
import { loadCircuitJson } from "./render-comparison"

const isSchematicSheet = (
  element: AnyCircuitElement,
): element is SchematicSheet => element.type === "schematic_sheet"

const isSchematicComponent = (
  element: AnyCircuitElement,
): element is SchematicComponent => element.type === "schematic_component"

const isSchematicTrace = (
  element: AnyCircuitElement,
): element is SchematicTrace => element.type === "schematic_trace"

const circuitJson = await loadCircuitJson()
const powerTopSheet = circuitJson
  .filter(isSchematicSheet)
  .find((sheet) => sheet.name === "page_03")

if (!powerTopSheet) throw new Error("page_03 schematic sheet is missing")

const powerTopComponents = circuitJson
  .filter(isSchematicComponent)
  .filter(
    (component) =>
      component.schematic_sheet_id === powerTopSheet.schematic_sheet_id,
  )
const powerTopTraces = circuitJson
  .filter(isSchematicTrace)
  .filter(
    (trace) => trace.schematic_sheet_id === powerTopSheet.schematic_sheet_id,
  )

test("page 3 preserves the complete hand-tuned schematic", () => {
  expect(powerTopComponents).toHaveLength(41)
  expect(powerTopTraces).toHaveLength(60)
})

test("page 3 uses the requested polarized and avalanche symbols", () => {
  expect(
    powerTopComponents.filter(
      (component) => component.symbol_name === "capacitor_polarized_down",
    ),
  ).toHaveLength(2)
  expect(
    powerTopComponents.filter(
      (component) => component.symbol_name === "avalanche_diode_down",
    ),
  ).toHaveLength(2)
})
