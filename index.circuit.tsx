import type { TidaPart } from "./src/generated/tida010076-data"
import { tida010076Sheets } from "./src/generated/tida010076-data"

const netConnections = (part: TidaPart, sheetName: string) =>
  Object.fromEntries(
    Object.entries(part.pins)
      .filter(
        ([, pin]) =>
          pin.net &&
          !(
            sheetName === "02_card_top" &&
            /^NET_02_card_top_N\d+$/.test(pin.net)
          ),
      )
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

const cardTopSectionByPart: Record<string, string> = {
  C1: "msp430_programming",
  J10: "msp430_programming",
  J11: "msp430_programming",
  R2: "msp430_programming",
}

const cardTopPlacementOffsetByPart: Record<
  string,
  { x?: number; y?: number }
> = {
  // The J4/J5 Altium origins sit at the upper inner corner rather than the
  // center of their tall connector bodies.
  J4: { x: -0.75, y: -1.06 },
  J5: { x: 0.75, y: -1.06 },
}

const j2LeftPins = Array.from({ length: 20 }, (_, row) => [
  row * 6 + 1,
  row * 6 + 2,
  row * 6 + 3,
]).flat()
const j2RightPins = Array.from({ length: 20 }, (_, row) => [
  row * 6 + 6,
  row * 6 + 5,
  row * 6 + 4,
]).flat()

const cardTopConnectorStyleByPart: Record<
  string,
  {
    schWidth: number
    schHeight: number
    schPinArrangement: {
      leftSide?: number[]
      rightSide?: number[]
    }
  }
> = {
  J2: {
    schWidth: 2.2,
    schHeight: 11.8,
    schPinArrangement: { leftSide: j2LeftPins, rightSide: j2RightPins },
  },
  J3: {
    schWidth: 0.75,
    schHeight: 1.15,
    schPinArrangement: { leftSide: [1, 3, 5], rightSide: [2, 4, 6] },
  },
  J4: {
    schWidth: 0.75,
    schHeight: 2.9,
    schPinArrangement: { leftSide: [1, 2, 3, 4, 5, 6] },
  },
  J5: {
    schWidth: 0.75,
    schHeight: 2.9,
    schPinArrangement: { rightSide: [1, 2, 3, 4, 5, 6] },
  },
  J6: {
    schWidth: 0.4,
    schHeight: 0.6,
    schPinArrangement: { leftSide: [1, 2] },
  },
  J7: {
    schWidth: 0.4,
    schHeight: 0.6,
    schPinArrangement: { leftSide: [1, 2] },
  },
  J8: {
    schWidth: 0.4,
    schHeight: 0.6,
    schPinArrangement: { leftSide: [1, 2] },
  },
  J9: {
    schWidth: 0.4,
    schHeight: 0.6,
    schPinArrangement: { leftSide: [1, 2] },
  },
  J11: {
    schWidth: 0.6,
    schHeight: 1.6,
    schPinArrangement: {
      leftSide: [1, 3, 5, 7, 9, 11, 13],
      rightSide: [2, 4, 6, 8, 10, 12, 14],
    },
  },
}

const Part = ({
  part,
  sheetName,
}: {
  part: TidaPart
  sheetName: string
}) => {
  const isCardTop = sheetName === "02_card_top"
  const cardTopOffset = cardTopPlacementOffsetByPart[part.name] ?? {}
  const placement = {
    name: part.name,
    // Altium's page origin is at the lower left. The first import used the
    // opposite Y sign and an overly compressed scale for this ANSI-B sheet.
    schX: isCardTop
      ? part.schX * 1.4 + (cardTopOffset.x ?? 0)
      : part.schX,
    schY: isCardTop
      ? part.schY * -1.45 + (cardTopOffset.y ?? 0)
      : part.schY,
    schRotation: part.schRotation,
    schSectionName: isCardTop
      ? (cardTopSectionByPart[part.name] ?? "card_top_unboxed")
      : undefined,
  }
  const common = {
    ...placement,
    connections: netConnections(part, sheetName),
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
          {...(sheetName === "02_card_top" && part.name === "J1"
            ? {
                schWidth: 0.3,
                schHeight: 0.4,
                schPinArrangement: { rightSide: [1, 2, 3] },
              }
            : {})}
          internallyConnectedPins={
            part.kind === "nettie" ? [["pin1", "pin2"]] : undefined
          }
        />
      )
    }
  }
  if (part.kind === "connector") {
    const cardTopStyle =
      sheetName === "02_card_top"
        ? cardTopConnectorStyleByPart[part.name]
        : undefined
    return (
      <connector
        {...common}
        {...cardTopStyle}
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
    {sheet.name === "02_card_top" && (
      <>
        <schematicsection name="msp430_programming" />
        <schematicpath
          points={[
            { x: -15.31, y: 10.05 },
            { x: -15.31, y: -4.25 },
            { x: -6.35, y: -4.25 },
            { x: -6.35, y: 3.48 },
            { x: -1.87, y: 3.48 },
            { x: -1.87, y: 10.05 },
            { x: -15.31, y: 10.05 },
          ]}
          strokeWidth={0.03}
          strokeColor="#000000"
        />
        <schematictext
          text="Connect with K2GICE expansion connector"
          schX={-10.08}
          schY={9.67}
          fontSize={0.28}
        />
        <schematicbox
          name="msp430_programming_outline"
          schX={-10.83}
          schY={-6.96}
          width={8.96}
          height={5.03}
          title="MSP430 Programming Connector"
          titleAlignment="top_center"
          titleInside
          titleFontSize={0.28}
        />
      </>
    )}
    {sheet.parts.map((part) => (
      <Part key={part.name} part={part} sheetName={sheet.name} />
    ))}
    {sheet.name === "02_card_top" && (
      <trace from=".J2 > .pin42" to=".R1 > .pin1" />
    )}
  </schematicsheet>
)

export default () => (
  <board width="10mm" height="10mm" routingDisabled schRelative>
    {tida010076Sheets.map((sheet, sheetIndex) => (
      <Sheet key={sheet.name} sheet={sheet} sheetIndex={sheetIndex + 1} />
    ))}
  </board>
)
