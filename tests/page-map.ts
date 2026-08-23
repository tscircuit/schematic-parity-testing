export type PageMapping = {
  page: number
  slug: string
  tiLabel: string
  sheetId: string | null
  tscircuitLabel: string
}

export const pageMappings: PageMapping[] = [
  {
    page: 1,
    slug: "block-diagram",
    tiLabel: "TI original - page 1 - block diagram",
    sheetId: null,
    tscircuitLabel: "No recreated sheet - source block diagram",
  },
  {
    page: 2,
    slug: "card-top",
    tiLabel: "TI original - page 2 - card top",
    sheetId: "schematic_sheet_0",
    tscircuitLabel: "tscircuit - 2 - Card top level",
  },
  {
    page: 3,
    slug: "power-top",
    tiLabel: "TI original - page 3 - power top",
    sheetId: "schematic_sheet_1",
    tscircuitLabel: "tscircuit - 3 - Power top level",
  },
  {
    page: 4,
    slug: "ideal-diode",
    tiLabel: "TI original - page 4 - LM74700 ideal diode",
    sheetId: "schematic_sheet_2",
    tscircuitLabel: "tscircuit - 4 - LM74700 ideal diode",
  },
  {
    page: 5,
    slug: "efuse-f1",
    tiLabel: "TI original - page 5 - TPS2663 eFuse F1",
    sheetId: "schematic_sheet_3",
    tscircuitLabel: "tscircuit - 5 - TPS2663 eFuse F1",
  },
  {
    page: 6,
    slug: "efuse-f2",
    tiLabel: "TI original - page 6 - TPS2663 eFuse F2",
    sheetId: "schematic_sheet_4",
    tscircuitLabel: "tscircuit - 5 - TPS2663 eFuse F2",
  },
  {
    page: 7,
    slug: "48v-buck",
    tiLabel: "TI original - page 7 - LM76003 48 V buck",
    sheetId: "schematic_sheet_5",
    tscircuitLabel: "tscircuit - 6 - LM76003 48 V buck",
  },
  {
    page: 8,
    slug: "5v-supply",
    tiLabel: "TI original - page 8 - LMZM33603 5 V supply",
    sheetId: "schematic_sheet_6",
    tscircuitLabel: "tscircuit - 7 - LMZM33603 5 V supply",
  },
  {
    page: 9,
    slug: "phy-supply",
    tiLabel: "TI original - page 9 - LMZ10500 PHY supply",
    sheetId: "schematic_sheet_7",
    tscircuitLabel: "tscircuit - 8 - LMZ10500 PHY supply",
  },
  {
    page: 10,
    slug: "msp-supply",
    tiLabel: "TI original - page 10 - LP2951 MSP supply",
    sheetId: "schematic_sheet_8",
    tscircuitLabel: "tscircuit - 9 - LP2951 MSP supply",
  },
  {
    page: 11,
    slug: "current-sense",
    tiLabel: "TI original - page 11 - INA180 current sense",
    sheetId: "schematic_sheet_9",
    tscircuitLabel: "tscircuit - 10 - INA180 current sense",
  },
  {
    page: 12,
    slug: "led-driver",
    tiLabel: "TI original - page 12 - TLC6C598-Q1 LED driver",
    sheetId: "schematic_sheet_10",
    tscircuitLabel: "tscircuit - 11 - TLC6C598-Q1 LED driver",
  },
  {
    page: 13,
    slug: "data-top",
    tiLabel: "TI original - page 13 - data top",
    sheetId: "schematic_sheet_11",
    tscircuitLabel: "tscircuit - 12 - Data top level",
  },
  {
    page: 14,
    slug: "phy-p1",
    tiLabel: "TI original - page 14 - 100BASE-T1 PHY P1",
    sheetId: "schematic_sheet_12",
    tscircuitLabel: "tscircuit - 13 - 100BASE-T1 PHY P1",
  },
  {
    page: 15,
    slug: "phy-p2",
    tiLabel: "TI original - page 15 - 100BASE-T1 PHY P2",
    sheetId: "schematic_sheet_13",
    tscircuitLabel: "tscircuit - 13 - 100BASE-T1 PHY P2",
  },
  {
    page: 16,
    slug: "hardware",
    tiLabel: "TI original - page 16 - hardware",
    sheetId: "schematic_sheet_14",
    tscircuitLabel: "tscircuit - 14 - Hardware",
  },
  {
    page: 17,
    slug: "legal-notice",
    tiLabel: "TI original - page 17 - legal notice",
    sheetId: null,
    tscircuitLabel: "No recreated sheet - source legal notice",
  },
]
