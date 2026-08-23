import fs from "node:fs"
import path from "node:path"

const projectRoot = path.resolve(import.meta.dirname, "..")
const recordsDir = path.join(projectRoot, "work", "records")
const outputFile = path.join(
  projectRoot,
  "src",
  "generated",
  "tida010076-data.ts",
)

const sheetInstances = [
  { source: "T1_Card_Top", name: "02_card_top", title: "2 - Card top level" },
  {
    source: "T1_Power_Top_Level",
    name: "03_power_top",
    title: "3 - Power top level",
  },
  { source: "LM74700", name: "04_ideal_diode", title: "4 - LM74700 ideal diode" },
  {
    source: "TPS2663",
    name: "05_efuse_f1",
    title: "5 - TPS2663 eFuse F1",
    instanceSuffix: "_F1",
    isolateNamedNets: true,
  },
  {
    source: "TPS2663",
    name: "05_efuse_f2",
    title: "5 - TPS2663 eFuse F2",
    instanceSuffix: "_F2",
    isolateNamedNets: true,
  },
  { source: "LM76003", name: "06_48v_buck", title: "6 - LM76003 48 V buck" },
  {
    source: "LMZM33603",
    name: "07_5v_supply",
    title: "7 - LMZM33603 5 V supply",
  },
  { source: "LMZ10500", name: "08_phy_supply", title: "8 - LMZ10500 PHY supply" },
  { source: "LP2951", name: "09_msp_supply", title: "9 - LP2951 MSP supply" },
  { source: "INA180", name: "10_current_sense", title: "10 - INA180 current sense" },
  {
    source: "TLC6C598_Q1",
    name: "11_led_driver",
    title: "11 - TLC6C598-Q1 LED driver",
  },
  {
    source: "T1_Data_Top_Level",
    name: "12_data_top",
    title: "12 - Data top level",
  },
  {
    source: "T1_PHY",
    name: "13_phy_p1",
    title: "13 - 100BASE-T1 PHY P1",
    instanceSuffix: "_P1",
    isolateNamedNets: true,
  },
  {
    source: "T1_PHY",
    name: "13_phy_p2",
    title: "13 - 100BASE-T1 PHY P2",
    instanceSuffix: "_P2",
    isolateNamedNets: true,
  },
  { source: "Hardware", name: "14_hardware", title: "14 - Hardware" },
]

const sharedNets = new Set([
  "GND",
  "AGND",
  "BUCK_GND",
  "FILTER_GND",
  "LMZM33603_GND",
  "PHY_GND",
  "PHY_VDD",
  "PHY_VDD_1V",
  "VDDIO",
  "5V_out",
  "MSP_3V3",
  "Local_3V3",
  "External_3V3",
  "48V_Vin",
  "24or12V_out",
  "24V12Vout",
])

const keyForPoint = (point) =>
  `${Math.round(point.x * 1000) / 1000},${Math.round(point.y * 1000) / 1000}`

const coordinate = (fields, axis, prefix = "LOCATION") => {
  const whole = Number(fields[`${prefix}.${axis}`] ?? fields[`${axis}`] ?? 0)
  const fraction = Number(
    fields[`${prefix}.${axis}_FRAC`] ?? fields[`${axis}_FRAC`] ?? 0,
  )
  return whole + fraction / 100000
}

const pointFrom = (fields, prefix = "LOCATION") => ({
  x: coordinate(fields, "X", prefix),
  y: coordinate(fields, "Y", prefix),
})

const pinConnectionPoint = (fields) => {
  const point = pointFrom(fields)
  const length = Number(fields.PINLENGTH ?? 0)
  const direction = Number(fields.PINCONGLOMERATE ?? 0) & 3
  if (direction === 0) point.x += length
  else if (direction === 1) point.y += length
  else if (direction === 2) point.x -= length
  else if (direction === 3) point.y -= length
  return point
}

const isPointOnSegment = (point, a, b) => {
  const cross = (point.x - a.x) * (b.y - a.y) - (point.y - a.y) * (b.x - a.x)
  if (Math.abs(cross) > 0.002) return false
  const dot = (point.x - a.x) * (b.x - a.x) + (point.y - a.y) * (b.y - a.y)
  if (dot < -0.002) return false
  const lengthSquared = (b.x - a.x) ** 2 + (b.y - a.y) ** 2
  return dot <= lengthSquared + 0.002
}

class DisjointSet {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, index) => index)
    this.rank = Array(size).fill(0)
  }

  find(index) {
    if (this.parent[index] !== index) this.parent[index] = this.find(this.parent[index])
    return this.parent[index]
  }

  union(a, b) {
    let rootA = this.find(a)
    let rootB = this.find(b)
    if (rootA === rootB) return
    if (this.rank[rootA] < this.rank[rootB]) [rootA, rootB] = [rootB, rootA]
    this.parent[rootB] = rootA
    if (this.rank[rootA] === this.rank[rootB]) this.rank[rootA] += 1
  }
}

const safeIdentifier = (value) => {
  const clean = String(value ?? "")
    .replaceAll("#", "n")
    .replace(/[^A-Za-z0-9_]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "")
  return clean || "unnamed"
}

const normalizeValue = (value) =>
  String(value ?? "")
    .trim()
    .replaceAll("µ", "u")
    .replaceAll("μ", "u")
    .replaceAll("Ω", "ohm")
    .replace(/\s+/g, "")

const getRecordIndex = (record) => record.sourceLocation?.recordIndex ?? -1

const deriveSheet = (instance) => {
  const recordsPath = path.join(recordsDir, `${instance.source}.json`)
  const records = JSON.parse(fs.readFileSync(recordsPath, "utf8"))
  const recordsByOwner = new Map()

  for (const record of records) {
    const owner = record.fields?.OWNERINDEX
    if (owner === undefined) continue
    const ownerRecords = recordsByOwner.get(String(owner)) ?? []
    ownerRecords.push(record)
    recordsByOwner.set(String(owner), ownerRecords)
  }

  const componentRecords = records.filter(
    (record) => record.type === "schematic-component-record",
  )
  const pinRecords = []
  const componentsByDesignator = new Map()

  for (const componentRecord of componentRecords) {
    // Binary SchDoc OWNERINDEX values are zero-based while recordIndex is one-based.
    const ownerKey = String(getRecordIndex(componentRecord) - 1)
    const owned = recordsByOwner.get(ownerKey) ?? []
    const designatorRecord = owned.find(
      (record) => record.type === "schematic-designator-record",
    )
    const designator = designatorRecord?.fields?.TEXT
    if (!designator) continue

    const parameters = Object.fromEntries(
      owned
        .filter((record) => record.type === "schematic-parameter-record")
        .filter((record) => record.fields?.NAME)
        .map((record) => [record.fields.NAME, record.fields.TEXT ?? ""]),
    )
    const ownedPins = owned.filter((record) => record.type === "schematic-pin-record")
    pinRecords.push(...ownedPins)

    const merged = componentsByDesignator.get(designator) ?? {
      designator,
      libraryReference: componentRecord.fields.LIBREFERENCE ?? "Component",
      description: componentRecord.fields.COMPONENTDESCRIPTION ?? "",
      value:
        parameters.ValueDisplayed || parameters.Value || parameters.Comment || "",
      partNumber: parameters.PartNumber || parameters.Comment || "",
      packageReference: parameters.PackageReference || "",
      x: coordinate(componentRecord.fields, "X"),
      y: coordinate(componentRecord.fields, "Y"),
      orientation: Number(componentRecord.fields.ORIENTATION ?? 0),
      pins: [],
    }

    for (const pinRecord of ownedPins) {
      const number = String(pinRecord.fields.DESIGNATOR ?? pinRecord.fields.NAME ?? "")
      if (!number) continue
      if (merged.pins.some((pin) => pin.number === number)) continue
      merged.pins.push({
        number,
        label: String(pinRecord.fields.NAME ?? number),
        point: pinConnectionPoint(pinRecord.fields),
      })
    }
    componentsByDesignator.set(designator, merged)
  }

  const wireRecords = records.filter((record) => record.type === "schematic-wire-record")
  const markerRecords = records.filter((record) =>
    [
      "schematic-net-label-record",
      "schematic-power-port-record",
      "schematic-port-record",
      "schematic-junction-record",
    ].includes(record.type),
  )

  const wireSegments = []
  const wireVertices = []
  for (const wireRecord of wireRecords) {
    const count = Number(wireRecord.fields.LOCATIONCOUNT ?? 0)
    const vertices = []
    for (let index = 1; index <= count; index += 1) {
      vertices.push({
        x: coordinate(wireRecord.fields, `X${index}`, ""),
        y: coordinate(wireRecord.fields, `Y${index}`, ""),
      })
    }
    wireVertices.push(...vertices)
    for (let index = 0; index < vertices.length - 1; index += 1) {
      wireSegments.push([vertices[index], vertices[index + 1]])
    }
  }

  const markerPoint = (marker) => {
    const location = pointFrom(marker.fields)
    if (marker.type !== "schematic-port-record") return location
    const width = coordinate(marker.fields, "WIDTH", "")
    const candidates = [
      location,
      { x: location.x + width, y: location.y },
      { x: location.x - width, y: location.y },
    ]
    return (
      candidates.find((candidate) =>
        wireSegments.some(([a, b]) => isPointOnSegment(candidate, a, b)),
      ) ?? location
    )
  }

  const points = []
  const pointIndexByKey = new Map()
  const ensurePoint = (point) => {
    const key = keyForPoint(point)
    const existing = pointIndexByKey.get(key)
    if (existing !== undefined) return existing
    const index = points.length
    points.push(point)
    pointIndexByKey.set(key, index)
    return index
  }

  for (const pinRecord of pinRecords) ensurePoint(pinConnectionPoint(pinRecord.fields))
  for (const marker of markerRecords) ensurePoint(markerPoint(marker))
  for (const vertex of wireVertices) ensurePoint(vertex)

  const dsu = new DisjointSet(points.length)
  for (const [a, b] of wireSegments) {
    const onSegment = []
    for (let index = 0; index < points.length; index += 1) {
      if (isPointOnSegment(points[index], a, b)) onSegment.push(index)
    }
    for (let index = 1; index < onSegment.length; index += 1) {
      dsu.union(onSegment[0], onSegment[index])
    }
  }

  const namesByRoot = new Map()
  const markerPriority = {
    "schematic-net-label-record": 3,
    "schematic-power-port-record": 2,
    "schematic-port-record": 1,
  }
  for (const marker of markerRecords) {
    const rawName = marker.fields.TEXT ?? marker.fields.NAME
    if (!rawName || marker.type === "schematic-junction-record") continue
    const pointIndex = pointIndexByKey.get(keyForPoint(markerPoint(marker)))
    if (pointIndex === undefined) continue
    const root = dsu.find(pointIndex)
    const names = namesByRoot.get(root) ?? []
    names.push({ name: String(rawName), priority: markerPriority[marker.type] ?? 0 })
    namesByRoot.set(root, names)
  }

  const unnamedByRoot = new Map()
  let unnamedIndex = 1
  const netForPoint = (point) => {
    const pointIndex = pointIndexByKey.get(keyForPoint(point))
    if (pointIndex === undefined) return null
    const root = dsu.find(pointIndex)
    const named = [...(namesByRoot.get(root) ?? [])].sort(
      (a, b) => b.priority - a.priority,
    )[0]?.name
    let rawName = named
    if (!rawName) {
      rawName = unnamedByRoot.get(root)
      if (!rawName) {
        rawName = `${instance.name}_N${unnamedIndex}`
        unnamedByRoot.set(root, rawName)
        unnamedIndex += 1
      }
    }
    if (
      instance.isolateNamedNets &&
      !sharedNets.has(rawName) &&
      !rawName.startsWith(`${instance.name}_N`)
    ) {
      rawName += instance.instanceSuffix
    }
    return `NET_${safeIdentifier(rawName)}`
  }

  const parts = [...componentsByDesignator.values()]
    .map((component) => {
      const numericPinNumbers = component.pins
        .map((pin) => (/^\d+$/.test(pin.number) ? Number(pin.number) : null))
        .filter((pin) => pin !== null)
      let nextSyntheticPin = Math.max(0, ...numericPinNumbers) + 1
      const pinNumberMap = new Map()
      for (const pin of component.pins) {
        if (/^\d+$/.test(pin.number)) pinNumberMap.set(pin.number, pin.number)
        else {
          pinNumberMap.set(pin.number, String(nextSyntheticPin))
          nextSyntheticPin += 1
        }
      }
      const pins = Object.fromEntries(
        component.pins.map((pin) => [
          `pin${pinNumberMap.get(pin.number)}`,
          {
            label: pin.label,
            net: netForPoint(pin.point),
          },
        ]),
      )
      const name = `${component.designator}${instance.instanceSuffix ?? ""}`
      const pinCount = Object.keys(pins).length
      const refPrefix = component.designator.match(/^[A-Za-z]+/)?.[0]?.toUpperCase() ?? ""
      const libraryReference = component.libraryReference.toUpperCase()
      const jumperDesignators = new Set(["I2C", "J1", "J10", "J12", "J13", "J14", "J15"])
      let kind = "chip"
      if (/^TP$/.test(refPrefix)) kind = "testpoint"
      else if (refPrefix === "NT" && pinCount === 2) kind = "nettie"
      else if (
        jumperDesignators.has(component.designator.toUpperCase()) &&
        (pinCount === 2 || pinCount === 3)
      ) {
        kind = "jumper"
      }
      else if (refPrefix === "J") kind = "connector"
      else if (refPrefix === "FID") kind = "fiducial"
      else if (refPrefix === "Q") kind = "mosfet"
      else if (refPrefix === "Y" && pinCount === 2) kind = "crystal"
      else if (pinCount === 2 && /^R/.test(refPrefix)) kind = "resistor"
      else if (pinCount === 2 && /^C/.test(refPrefix)) kind = "capacitor"
      else if (pinCount === 2 && /^(L|FB)/.test(refPrefix)) kind = "inductor"
      else if (pinCount === 2 && /^D/.test(refPrefix)) {
        kind = libraryReference.startsWith("LED") ? "led" : "diode"
      }

      return {
        name,
        kind,
        libraryReference: component.libraryReference,
        description: component.description,
        value: normalizeValue(component.value),
        partNumber: component.partNumber,
        packageReference: component.packageReference,
        schX: Math.round(((component.x - 850) / 75) * 100) / 100,
        schY: Math.round(((component.y - 550) / -75) * 100) / 100,
        schRotation: component.orientation % 2 === 1 ? "90deg" : "0deg",
        pins,
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))

  return {
    name: instance.name,
    title: instance.title,
    source: `${instance.source}.SchDoc`,
    parts,
  }
}

const sheets = sheetInstances.map(deriveSheet)
const stats = {
  sheets: sheets.length,
  components: sheets.reduce((sum, sheet) => sum + sheet.parts.length, 0),
  connectedPins: sheets.reduce(
    (sum, sheet) =>
      sum +
      sheet.parts.reduce(
        (partSum, part) =>
          partSum + Object.values(part.pins).filter((pin) => pin.net).length,
        0,
      ),
    0,
  ),
  pins: sheets.reduce(
    (sum, sheet) =>
      sum + sheet.parts.reduce((partSum, part) => partSum + Object.keys(part.pins).length, 0),
    0,
  ),
}

const generated = `// Generated from the official TI TIDA-010076 Altium source files (TIDM619).\n// Run \`npm run generate\` after refreshing work/records/*.json.\n\nexport type TidaPin = { label: string; net: string | null }\n\nexport type TidaPart = {\n  name: string\n  kind: "chip" | "resistor" | "capacitor" | "inductor" | "diode" | "led" | "testpoint" | "jumper" | "nettie" | "connector" | "mosfet" | "crystal" | "fiducial"\n  libraryReference: string\n  description: string\n  value: string\n  partNumber: string\n  packageReference: string\n  schX: number\n  schY: number\n  schRotation: "0deg" | "90deg"\n  pins: Record<string, TidaPin>\n}\n\nexport type TidaSheet = {\n  name: string\n  title: string\n  source: string\n  parts: TidaPart[]\n}\n\nexport const tida010076Stats = ${JSON.stringify(stats, null, 2)} as const\n\nexport const tida010076Sheets: TidaSheet[] = ${JSON.stringify(sheets, null, 2)}\n`

fs.mkdirSync(path.dirname(outputFile), { recursive: true })
fs.writeFileSync(outputFile, generated)
console.log(JSON.stringify(stats, null, 2))
