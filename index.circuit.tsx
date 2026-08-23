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
    schFacingDirection?: "left" | "right"
    schPinStyle?: Record<
      string,
      {
        topMargin?: number
        bottomMargin?: number
      }
    >
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
    schFacingDirection: "right",
    schPinArrangement: { rightSide: [1, 2, 3, 4, 5, 6] },
    schPinStyle: {
      pin2: { topMargin: 0.2 },
      pin3: { topMargin: 0.4 },
      pin4: { topMargin: 0.2 },
      pin5: { topMargin: 0.2 },
      pin6: { topMargin: 0.2 },
    },
  },
  J5: {
    schWidth: 0.75,
    schHeight: 2.9,
    schFacingDirection: "left",
    schPinArrangement: { leftSide: [1, 2, 3, 4, 5, 6] },
    schPinStyle: {
      pin1: { bottomMargin: 0.2 },
      pin2: { bottomMargin: 0.4 },
      pin3: { bottomMargin: 0.2 },
      pin4: { bottomMargin: 0.2 },
      pin5: { bottomMargin: 0.2 },
    },
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

const powerTopPinNames = [
  "SCL",
  "SDA",
  "Power_INPUT_P",
  "Power_INPUT_N",
  "GND",
  "Power_OUTPUT_P",
  "Power_OUTPUT_N",
  "48V_Vout2",
  "RST",
  "TEST",
  "24Vor12V_out",
  "5V_out",
  "48V_Supply_In",
  "MSP_3V3",
  "Local_3V3",
  "Local_1V",
]

const dataTopPinNames = [
  "PHY_P1",
  "PHY_P2",
  "PHY_N1",
  "PHY_N2",
  "AGND",
  "PHY_VDD",
  "PRU0_MII_TX_D0_2",
  "PRU0_MII_TX_EN2",
  "PRU0_MII_TX_CLK1",
  "PRU0_MII_TX_D1_1",
  "PRU0_MII_TX_D1_2",
  "PRU0_MII_TX_CLK2",
  "PRU0_MII_TX_D0_1",
  "PRU0_MII_TX_EN1",
  "PRU0_MII_TX_D3_1",
  "PRU0_MII_TX_D3_2",
  "PRU0_MII_TX_D2_1",
  "PRU0_MII_TX_D2_2",
  "PRU0_MII_RXDV2",
  "PRU0_MII_RX_D2_1",
  "PRU0_MII_RXDV1",
  "PRU0_MII_RX_D0_1",
  "PRU0_MII_RX_D2_2",
  "PRU0_MII_RX_D3_1",
  "PRU0_MII_RX_D3_2",
  "PRU0_MII_RX_CLK1",
  "PRU0_MII_RX_D1_1",
  "PRU0_MII_RX_D1_2",
  "PRU0_MII_RXER1",
  "PRU0_MII_RX_D0_2",
  "PRU0_MII_RX_CLK2",
  "PRU0_MII_RXER2",
  "PRU0_MII_INT2",
  "PRU0_MII_INH1",
  "PRU0_MDC",
  "PRU0_MII_INH2",
  "PRU0_MII_RESETn2",
  "PRU0_MII_RXLINK2",
  "PRU0_MDIO",
  "PRU0_MII_RXLINK1",
  "PRU0_MII_INT1",
  "PRU0_MII_RESETn1",
  "PHY_VDD_1V",
]

const pinLabelsFromNames = (names: string[]) =>
  Object.fromEntries(names.map((name, index) => [`pin${index + 1}`, name]))

const powerTopPinLabels = pinLabelsFromNames(powerTopPinNames)
const dataTopPinLabels = pinLabelsFromNames(dataTopPinNames)

const hierarchyNetNameByPinName: Record<string, string> = {
  SCL: "I2C_SCL0",
  SDA: "I2C_SDA0",
  PHY_VDD_1V: "Local_1V",
}

const connectionsFromPinNames = (
  names: string[],
  excludedPins: number[] = [],
) =>
  Object.fromEntries(
    names
      .map((name, index) => ({ name, pin: index + 1 }))
      .filter(({ pin }) => !excludedPins.includes(pin))
      .map(({ name, pin }) => [
        `pin${pin}`,
        `net.NET_${hierarchyNetNameByPinName[name] ?? name}`,
      ]),
  )

const powerTopConnections = connectionsFromPinNames(
  powerTopPinNames,
  [3, 4, 6, 7, 8, 11, 12, 13],
)
const dataTopConnections = connectionsFromPinNames(
  dataTopPinNames,
  [1, 2, 3, 4],
)

const cardTopHierarchyBoxes = (
  <>
    <schematicbox
      name="U1_T1_Data_Top_Level"
      chipRef=".U1_T1_Data_Top_Level"
      pinLabels={dataTopPinLabels}
      schPinArrangement={{
        leftSide: [
          9, 12, 14, 8, 13, 7, 10, 11, 17, 18, 15, 16, 29, 32, 21, 19, 26, 31,
          22, 30, 27, 28, 20, 23, 24, 25, 6, 43, 3, 1,
        ],
        rightSide: [40, 38, 35, 39, 34, 36, 41, 33, 42, 37, 5, 4, 2],
      }}
      schX={3.827}
      schY={4.543}
      width={5.04}
      height={7.54}
    />
    <schematicbox
      name="U1_T1_Power_Top_Level"
      chipRef=".U1_T1_Power_Top_Level"
      pinLabels={powerTopPinLabels}
      schPinArrangement={{
        leftSide: [4, 3, 14, 2, 1, 9, 10],
        rightSide: [15, 16, 7, 6, 13, 8, 11, 12, 5],
      }}
      schX={3.827}
      schY={-3.383}
      width={5.04}
      height={6.767}
    />
  </>
)

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
                schPinArrangement: { rightSide: [3, 2, 1] },
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
    // Pin headers expose schFacingDirection; generic connectors do not. The
    // two mirrored industrial jacks must face inward toward the hierarchy
    // blocks so their connection side matches the TI schematic.
    if (cardTopStyle?.schFacingDirection) {
      return (
        <pinheader
          {...common}
          {...cardTopStyle}
          pinCount={Object.keys(part.pins).length}
          pinLabels={pinLabels}
          manufacturerPartNumber={part.partNumber || part.libraryReference}
        />
      )
    }
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
      <>
        {cardTopHierarchyBoxes}
        {/* Altium records 393-399: explicit local rail labels and short wire
            stubs for J1. The importer otherwise treats them as anonymous nets. */}
        <netlabel
          net="NET_Local_3V3"
          connection=".J1 > .pin1"
          schX={-14.052}
          schY={8.1085}
          anchorSide="left"
        />
        <netlabel
          net="NET_PHY_VDD"
          connection=".J1 > .pin2"
          schX={-14.052}
          schY={8.3085}
          anchorSide="left"
        />
        <netlabel
          net="NET_External_3V3"
          connection=".J1 > .pin3"
          schX={-14.052}
          schY={8.5085}
          anchorSide="left"
        />
        <trace from=".U1_T1_Power_Top_Level > .pin3" to=".J4 > .pin1" />
        <trace from=".U1_T1_Power_Top_Level > .pin4" to=".J4 > .pin2" />
        <trace from=".U1_T1_Power_Top_Level > .pin6" to=".J5 > .pin1" />
        <trace from=".U1_T1_Power_Top_Level > .pin7" to=".J5 > .pin2" />
        <trace from=".U1_T1_Power_Top_Level > .pin8" to=".J7 > .pin1" />
        <trace from=".U1_T1_Power_Top_Level > .pin11" to=".J8 > .pin1" />
        <trace from=".U1_T1_Power_Top_Level > .pin12" to=".J9 > .pin1" />
        <trace from=".U1_T1_Power_Top_Level > .pin13" to=".J6 > .pin1" />
        <trace from=".U1_T1_Data_Top_Level > .pin1" to=".J4 > .pin2" />
        <trace from=".U1_T1_Data_Top_Level > .pin2" to=".J5 > .pin2" />
        <trace from=".U1_T1_Data_Top_Level > .pin3" to=".J4 > .pin1" />
        <trace from=".U1_T1_Data_Top_Level > .pin4" to=".J5 > .pin1" />
        <trace from=".J2 > .pin42" to=".R1 > .pin1" />
      </>
    )}
  </schematicsheet>
)

export default () => (
  <board width="10mm" height="10mm" routingDisabled schRelative>
    <net name="NET_AGND" isGroundNet />
    <chip
      name="U1_T1_Power_Top_Level"
      manufacturerPartNumber="T1_Power_Top_Level.SchDoc"
      pinLabels={powerTopPinLabels}
      connections={powerTopConnections}
    />
    <chip
      name="U1_T1_Data_Top_Level"
      manufacturerPartNumber="T1_Data_Top_Level.SchDoc"
      pinLabels={dataTopPinLabels}
      connections={dataTopConnections}
    />
    {tida010076Sheets.map((sheet, sheetIndex) => (
      <Sheet key={sheet.name} sheet={sheet} sheetIndex={sheetIndex + 1} />
    ))}
  </board>
)
