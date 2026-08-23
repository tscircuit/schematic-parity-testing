import type { TidaPart } from "./src/generated/tida010076-data"
import { tida010076Sheets } from "./src/generated/tida010076-data"

const netConnections = (part: TidaPart) =>
  Object.fromEntries(
    Object.entries(part.pins)
      .filter(([, pin]) => pin.net)
      .map(([pin, data]) => [pin, `net.${data.net}`]),
  )

const normalizeResistance = (value: string) => {
  const normalized = value
    .replace(/^(\d+)[Rr](\d+)$/, "$1.$2")
    .replace(/^(\d+)[Kk](\d+)$/, "$1.$2k")
    .replace(/^(\d+)[Mm](\d+)$/, "$1.$2M")
    .replace(/^(\d+(?:\.\d+)?)[Rr]$/, "$1")
  return /^\d+(?:\.\d+)?(?:[pnumkMGT])?(?:ohm)?$/.test(normalized)
    ? normalized
    : "0ohm"
}

const normalizeCapacitance = (value: string) =>
  /^\d+(?:\.\d+)?(?:pF|nF|uF|mF|F)$/.test(value) ? value : "1nF"

const normalizeInductance = (value: string) =>
  /^\d+(?:\.\d+)?(?:pH|nH|uH|mH|H)$/.test(value) ? value : "1uH"

const normalizePinLabel = (label: string) => {
  const normalized = label
    .replace(/\\/g, "n")
    .replace(/[^A-Za-z0-9_]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "")
  return normalized || "PIN"
}

const connectionForPin = (part: TidaPart, pin: string) => {
  const net = part.pins[pin]?.net
  return net ? `net.${net}` : undefined
}

const connectionForLabel = (part: TidaPart, label: string) => {
  const net = Object.values(part.pins).find(
    (pin) => pin.label.toUpperCase() === label,
  )?.net
  return net ? `net.${net}` : undefined
}

const getDiodeVariant = (part: TidaPart) => {
  const libraryReference = part.libraryReference.toUpperCase()
  if (libraryReference.includes("SCHOTTKY")) return "schottky" as const
  if (libraryReference.includes("ZENER")) return "zener" as const
  if (libraryReference.includes("TVS")) return "tvs" as const
  return "standard" as const
}

const Part = ({ part }: { part: TidaPart }) => {
  const placement = {
    name: part.name,
    schX: part.schX,
    schY: part.schY,
    schRotation: part.schRotation,
  }
  const common = {
    ...placement,
    connections: netConnections(part),
  }
  const pinLabels = Object.fromEntries(
    Object.entries(part.pins).map(([pin, data]) => [
      pin,
      normalizePinLabel(data.label),
    ]),
  )

  if (part.kind === "resistor") {
    return <resistor {...common} resistance={normalizeResistance(part.value)} />
  }
  if (part.kind === "capacitor") {
    return <capacitor {...common} capacitance={normalizeCapacitance(part.value)} />
  }
  if (part.kind === "inductor") {
    return <inductor {...common} inductance={normalizeInductance(part.value)} />
  }
  if (part.kind === "diode") {
    return <diode {...common} variant={getDiodeVariant(part)} />
  }
  if (part.kind === "led") {
    const color = /blue/i.test(part.description)
      ? "blue"
      : /red/i.test(part.description)
        ? "red"
        : /yellow/i.test(part.description)
          ? "yellow"
          : "green"
    return <led {...common} color={color} />
  }
  if (part.kind === "testpoint") {
    const testpointNet = part.pins.pin1?.net
    return (
      <testpoint
        {...placement}
        connections={
          testpointNet ? { pin1: `net.${testpointNet}` } : undefined
        }
      />
    )
  }
  if (part.kind === "jumper" || part.kind === "nettie") {
    const pinCount = Object.keys(part.pins).length
    if (pinCount === 2 || pinCount === 3) {
      return (
        <jumper
          {...common}
          pinCount={pinCount}
          pinLabels={pinLabels}
          internallyConnectedPins={
            part.kind === "nettie" ? [["pin1", "pin2"]] : undefined
          }
        />
      )
    }
  }
  if (part.kind === "connector") {
    return (
      <connector
        {...common}
        pinCount={Object.keys(part.pins).length}
        pinLabels={pinLabels}
        manufacturerPartNumber={part.partNumber || part.libraryReference}
      />
    )
  }
  if (part.kind === "mosfet") {
    const drain = connectionForLabel(part, "D")
    const source = connectionForLabel(part, "S")
    const gate = connectionForLabel(part, "G")
    return (
      <mosfet
        {...placement}
        channelType="n"
        mosfetMode="enhancement"
        connections={{
          ...(drain ? { drain } : {}),
          ...(source ? { source } : {}),
          ...(gate ? { gate } : {}),
        }}
      />
    )
  }
  if (part.kind === "crystal") {
    const pin1 = connectionForPin(part, "pin1")
    const pin2 = connectionForPin(part, "pin2")
    return (
      <crystal
        {...placement}
        frequency="25MHz"
        loadCapacitance="18pF"
        manufacturerPartNumber={part.partNumber}
        connections={{
          ...(pin1 ? { pin1 } : {}),
          ...(pin2 ? { pin2 } : {}),
        }}
      />
    )
  }
  if (part.kind === "fiducial") {
    return <fiducial {...placement} padDiameter="1mm" />
  }

  return (
    <chip
      {...common}
      manufacturerPartNumber={part.partNumber || part.libraryReference}
      pinLabels={pinLabels}
    />
  )
}

const Sheet = ({
  sheet,
  sheetIndex,
}: {
  sheet: (typeof tida010076Sheets)[number]
  sheetIndex: number
}) => (
  <schematicsheet
    name={sheet.name}
    displayName={sheet.title}
    sheetIndex={sheetIndex}
  >
    {sheet.parts.map((part) => (
      <Part key={part.name} part={part} />
    ))}
  </schematicsheet>
)

export default () => (
  <board width="10mm" height="10mm" routingDisabled schRelative>
    {tida010076Sheets.map((sheet, sheetIndex) => (
      <Sheet key={sheet.name} sheet={sheet} sheetIndex={sheetIndex + 1} />
    ))}
  </board>
)
