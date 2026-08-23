// Generated from the official TI TIDA-010076 Altium source files (TIDM619).
// Run `npm run generate` after refreshing work/records/*.json.

export type TidaPin = { label: string; net: string | null }

export type TidaPart = {
  name: string
  kind: "chip" | "resistor" | "capacitor" | "inductor" | "diode" | "led" | "testpoint" | "jumper" | "nettie" | "connector" | "mosfet" | "crystal" | "fiducial"
  libraryReference: string
  description: string
  value: string
  partNumber: string
  packageReference: string
  schX: number
  schY: number
  schRotation: "0deg" | "90deg"
  pins: Record<string, TidaPin>
}

export type TidaSheet = {
  name: string
  title: string
  source: string
  parts: TidaPart[]
}

export const tida010076Stats = {
  "sheets": 15,
  "components": 365,
  "connectedPins": 1101,
  "pins": 1101
} as const

export const tida010076Sheets: TidaSheet[] = [
  {
    "name": "02_card_top",
    "title": "2 - Card top level",
    "source": "T1_Card_Top.SchDoc",
    "parts": [
      {
        "name": "C1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 µF, 16 V,+/- 5%, X7R, AEC-Q200 Grade 1, 0402",
        "value": "0.1uF",
        "partNumber": "GCM155R71C104JA55D",
        "packageReference": "0402",
        "schX": -9.47,
        "schY": 5.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_RST"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "I2C",
        "kind": "jumper",
        "libraryReference": "Header_3x1",
        "description": "Header, 2.54mm, 3x1, Gold, TH",
        "value": "SL1111203G",
        "partNumber": "SL 11 112 03G",
        "packageReference": "TH, 3-Leads, Body 2.5x7.62mm, Pitch 2.54mm",
        "schX": -1.07,
        "schY": 2.93,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_02_card_top_N38"
          },
          "pin3": {
            "label": "3",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "J1",
        "kind": "jumper",
        "libraryReference": "Header_3x1",
        "description": "Header, 2.54mm, 3x1, Gold, TH",
        "value": "SL1111203G",
        "partNumber": "SL 11 112 03G",
        "packageReference": "TH, 3-Leads, Body 2.5x7.62mm, Pitch 2.54mm",
        "schX": -10.53,
        "schY": -5.73,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N31"
          },
          "pin2": {
            "label": "2",
            "net": "NET_02_card_top_N32"
          },
          "pin3": {
            "label": "3",
            "net": "NET_02_card_top_N33"
          }
        }
      },
      {
        "name": "J2",
        "kind": "connector",
        "libraryReference": "Header_20x6",
        "description": "Header(shrouded), 1.27mm, 20x6, Gold, SMT",
        "value": "SEAM-20-03.0-S-06-2-A-K-TR",
        "partNumber": "SEAM-20-03.0-S-06-2-A-K-TR",
        "packageReference": "Header(shrouded), 1.27mm, 20x6, SMT",
        "schX": -8,
        "schY": -1.73,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_External_3V3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_External_3V3"
          },
          "pin3": {
            "label": "3",
            "net": "NET_02_card_top_N17"
          },
          "pin4": {
            "label": "4",
            "net": "NET_AGND"
          },
          "pin5": {
            "label": "5",
            "net": "NET_5"
          },
          "pin6": {
            "label": "6",
            "net": "NET_02_card_top_N18"
          },
          "pin7": {
            "label": "7",
            "net": "NET_External_3V3"
          },
          "pin8": {
            "label": "8",
            "net": "NET_External_3V3"
          },
          "pin9": {
            "label": "9",
            "net": "NET_02_card_top_N19"
          },
          "pin10": {
            "label": "10",
            "net": "NET_AGND"
          },
          "pin11": {
            "label": "11",
            "net": "NET_11"
          },
          "pin12": {
            "label": "12",
            "net": "NET_02_card_top_N20"
          },
          "pin13": {
            "label": "13",
            "net": "NET_13"
          },
          "pin14": {
            "label": "14",
            "net": "NET_14"
          },
          "pin15": {
            "label": "15",
            "net": "NET_15"
          },
          "pin16": {
            "label": "16",
            "net": "NET_PRU0_MII_RX_D0_1"
          },
          "pin17": {
            "label": "17",
            "net": "NET_PRU0_MII_RX_D0_2"
          },
          "pin18": {
            "label": "18",
            "net": "NET_18"
          },
          "pin19": {
            "label": "19",
            "net": "NET_19"
          },
          "pin20": {
            "label": "20",
            "net": "NET_20"
          },
          "pin21": {
            "label": "21",
            "net": "NET_21"
          },
          "pin22": {
            "label": "22",
            "net": "NET_PRU0_MII_RX_D1_1"
          },
          "pin23": {
            "label": "23",
            "net": "NET_PRU0_MII_RX_D1_2"
          },
          "pin24": {
            "label": "24",
            "net": "NET_24"
          },
          "pin25": {
            "label": "25",
            "net": "NET_25"
          },
          "pin26": {
            "label": "26",
            "net": "NET_26"
          },
          "pin27": {
            "label": "27",
            "net": "NET_27"
          },
          "pin28": {
            "label": "28",
            "net": "NET_PRU0_MII_RX_D2_1"
          },
          "pin29": {
            "label": "29",
            "net": "NET_PRU0_MII_RX_D2_2"
          },
          "pin30": {
            "label": "30",
            "net": "NET_AGND"
          },
          "pin31": {
            "label": "31",
            "net": "NET_31"
          },
          "pin32": {
            "label": "32",
            "net": "NET_32"
          },
          "pin33": {
            "label": "33",
            "net": "NET_33"
          },
          "pin34": {
            "label": "34",
            "net": "NET_PRU0_MII_RX_D3_1"
          },
          "pin35": {
            "label": "35",
            "net": "NET_PRU0_MII_RX_D3_2"
          },
          "pin36": {
            "label": "36",
            "net": "NET_02_card_top_N21"
          },
          "pin37": {
            "label": "37",
            "net": "NET_37"
          },
          "pin38": {
            "label": "38",
            "net": "NET_38"
          },
          "pin39": {
            "label": "39",
            "net": "NET_AGND"
          },
          "pin40": {
            "label": "40",
            "net": "NET_PRU0_MII_RXDV1"
          },
          "pin41": {
            "label": "41",
            "net": "NET_PRU0_MII_RXDV2"
          },
          "pin42": {
            "label": "42",
            "net": "NET_02_card_top_N22"
          },
          "pin43": {
            "label": "43",
            "net": "NET_AGND"
          },
          "pin44": {
            "label": "44",
            "net": "NET_AGND"
          },
          "pin45": {
            "label": "45",
            "net": "NET_45"
          },
          "pin46": {
            "label": "46",
            "net": "NET_PRU0_MII_RXER1"
          },
          "pin47": {
            "label": "47",
            "net": "NET_PRU0_MII_RXER2"
          },
          "pin48": {
            "label": "48",
            "net": "NET_PRU0_MII_INH2"
          },
          "pin49": {
            "label": "49",
            "net": "NET_49"
          },
          "pin50": {
            "label": "50",
            "net": "NET_I2C_SCL0"
          },
          "pin51": {
            "label": "51",
            "net": "NET_51"
          },
          "pin52": {
            "label": "52",
            "net": "NET_PRU0_MII_RX_CLK1"
          },
          "pin53": {
            "label": "53",
            "net": "NET_PRU0_MII_RX_CLK2"
          },
          "pin54": {
            "label": "54",
            "net": "NET_PRU0_MII_INH1"
          },
          "pin55": {
            "label": "55",
            "net": "NET_55"
          },
          "pin56": {
            "label": "56",
            "net": "NET_I2C_SDA0"
          },
          "pin57": {
            "label": "57",
            "net": "NET_AGND"
          },
          "pin58": {
            "label": "58",
            "net": "NET_PRU0_MII_RXLINK1"
          },
          "pin59": {
            "label": "59",
            "net": "NET_PRU0_MII_RXLINK2"
          },
          "pin60": {
            "label": "60",
            "net": "NET_PRU0_MII_INT2"
          },
          "pin61": {
            "label": "61",
            "net": "NET_61"
          },
          "pin62": {
            "label": "62",
            "net": "NET_AGND"
          },
          "pin63": {
            "label": "63",
            "net": "NET_63"
          },
          "pin64": {
            "label": "64",
            "net": "NET_PRU0_MII_TX_D0_2"
          },
          "pin65": {
            "label": "65",
            "net": "NET_PRU0_MII_TX_D0_1"
          },
          "pin66": {
            "label": "66",
            "net": "NET_PRU0_MII_INT1"
          },
          "pin67": {
            "label": "67",
            "net": "NET_67"
          },
          "pin68": {
            "label": "68",
            "net": "NET_68"
          },
          "pin69": {
            "label": "69",
            "net": "NET_69"
          },
          "pin70": {
            "label": "70",
            "net": "NET_PRU0_MII_TX_D1_2"
          },
          "pin71": {
            "label": "71",
            "net": "NET_PRU0_MII_TX_D1_1"
          },
          "pin72": {
            "label": "72",
            "net": "NET_PRU0_MII_RESETn2"
          },
          "pin73": {
            "label": "73",
            "net": "NET_73"
          },
          "pin74": {
            "label": "74",
            "net": "NET_74"
          },
          "pin75": {
            "label": "75",
            "net": "NET_AGND"
          },
          "pin76": {
            "label": "76",
            "net": "NET_PRU0_MII_TX_D2_2"
          },
          "pin77": {
            "label": "77",
            "net": "NET_PRU0_MII_TX_D2_1"
          },
          "pin78": {
            "label": "78",
            "net": "NET_PRU0_MII_RESETn1"
          },
          "pin79": {
            "label": "79",
            "net": "NET_AGND"
          },
          "pin80": {
            "label": "80",
            "net": "NET_80"
          },
          "pin81": {
            "label": "81",
            "net": "NET_81"
          },
          "pin82": {
            "label": "82",
            "net": "NET_PRU0_MII_TX_D3_2"
          },
          "pin83": {
            "label": "83",
            "net": "NET_PRU0_MII_TX_D3_1"
          },
          "pin84": {
            "label": "84",
            "net": "NET_84"
          },
          "pin85": {
            "label": "85",
            "net": "NET_85"
          },
          "pin86": {
            "label": "86",
            "net": "NET_86"
          },
          "pin87": {
            "label": "87",
            "net": "NET_87"
          },
          "pin88": {
            "label": "88",
            "net": "NET_88"
          },
          "pin89": {
            "label": "89",
            "net": "NET_89"
          },
          "pin90": {
            "label": "90",
            "net": "NET_90"
          },
          "pin91": {
            "label": "91",
            "net": "NET_91"
          },
          "pin92": {
            "label": "92",
            "net": "NET_AGND"
          },
          "pin93": {
            "label": "93",
            "net": "NET_93"
          },
          "pin94": {
            "label": "94",
            "net": "NET_94"
          },
          "pin95": {
            "label": "95",
            "net": "NET_95"
          },
          "pin96": {
            "label": "96",
            "net": "NET_96"
          },
          "pin97": {
            "label": "97",
            "net": "NET_97"
          },
          "pin98": {
            "label": "98",
            "net": "NET_98"
          },
          "pin99": {
            "label": "99",
            "net": "NET_99"
          },
          "pin100": {
            "label": "100",
            "net": "NET_PRU0_MII_TX_EN2"
          },
          "pin101": {
            "label": "101",
            "net": "NET_PRU0_MII_TX_EN1"
          },
          "pin102": {
            "label": "102",
            "net": "NET_AGND"
          },
          "pin103": {
            "label": "103",
            "net": "NET_103"
          },
          "pin104": {
            "label": "104",
            "net": "NET_104"
          },
          "pin105": {
            "label": "105",
            "net": "NET_105"
          },
          "pin106": {
            "label": "106",
            "net": "NET_PRU0_MII_TX_CLK2"
          },
          "pin107": {
            "label": "107",
            "net": "NET_PRU0_MII_TX_CLK1"
          },
          "pin108": {
            "label": "108",
            "net": "NET_AGND"
          },
          "pin109": {
            "label": "109",
            "net": "NET_AGND"
          },
          "pin110": {
            "label": "110",
            "net": "NET_AGND"
          },
          "pin111": {
            "label": "111",
            "net": "NET_AGND"
          },
          "pin112": {
            "label": "112",
            "net": "NET_AGND"
          },
          "pin113": {
            "label": "113",
            "net": "NET_AGND"
          },
          "pin114": {
            "label": "114",
            "net": "NET_AGND"
          },
          "pin115": {
            "label": "115",
            "net": "NET_AGND"
          },
          "pin116": {
            "label": "116",
            "net": "NET_AGND"
          },
          "pin117": {
            "label": "117",
            "net": "NET_AGND"
          },
          "pin118": {
            "label": "118",
            "net": "NET_AGND"
          },
          "pin119": {
            "label": "119",
            "net": "NET_AGND"
          },
          "pin120": {
            "label": "120",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "J3",
        "kind": "connector",
        "libraryReference": "Header_3x2",
        "description": "Header, 2.54mm, 3x2, Gold, Black, SMT",
        "value": "GBC03DABN-M30",
        "partNumber": "GBC03DABN-M30",
        "packageReference": "Header, 2.54mm, 3x2, SMT",
        "schX": -3.07,
        "schY": -3.47,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N23"
          },
          "pin2": {
            "label": "2",
            "net": "NET_02_card_top_N24"
          },
          "pin3": {
            "label": "3",
            "net": "NET_AGND"
          },
          "pin4": {
            "label": "4",
            "net": "NET_AGND"
          },
          "pin5": {
            "label": "5",
            "net": "NET_02_card_top_N25"
          },
          "pin6": {
            "label": "6",
            "net": "NET_02_card_top_N26"
          }
        }
      },
      {
        "name": "J4",
        "kind": "connector",
        "libraryReference": "SYM-09452812800",
        "description": "T1 Industrial jack AH IP20",
        "value": "09452812800",
        "partNumber": "09452812800",
        "packageReference": "HDR2",
        "schX": -1.6,
        "schY": -1.6,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N27"
          },
          "pin2": {
            "label": "2",
            "net": "NET_02_card_top_N28"
          },
          "pin3": {
            "label": "GND",
            "net": "NET_AGND"
          },
          "pin4": {
            "label": "GND",
            "net": "NET_AGND"
          },
          "pin5": {
            "label": "GND",
            "net": "NET_AGND"
          },
          "pin6": {
            "label": "GND",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "J5",
        "kind": "connector",
        "libraryReference": "SYM-09452812800",
        "description": "T1 Industrial jack AH IP20",
        "value": "09452812800",
        "partNumber": "09452812800",
        "packageReference": "HDR2",
        "schX": 7.07,
        "schY": -1.6,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N29"
          },
          "pin2": {
            "label": "2",
            "net": "NET_02_card_top_N30"
          },
          "pin3": {
            "label": "GND",
            "net": "NET_AGND"
          },
          "pin4": {
            "label": "GND",
            "net": "NET_AGND"
          },
          "pin5": {
            "label": "GND",
            "net": "NET_AGND"
          },
          "pin6": {
            "label": "GND",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "J6",
        "kind": "connector",
        "libraryReference": "Receptacle_2x1",
        "description": "Conn Term Block, 2POS, 3.5mm, TH",
        "value": "1751248",
        "partNumber": "1751248",
        "packageReference": "11x8.5x7.3mm",
        "schX": 7.47,
        "schY": 1.6,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N34"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "J7",
        "kind": "connector",
        "libraryReference": "Receptacle_2x1",
        "description": "Conn Term Block, 2POS, 3.5mm, TH",
        "value": "1751248",
        "partNumber": "1751248",
        "packageReference": "11x8.5x7.3mm",
        "schX": 7.47,
        "schY": 2.27,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N35"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "J8",
        "kind": "connector",
        "libraryReference": "Receptacle_2x1",
        "description": "Conn Term Block, 2POS, 3.5mm, TH",
        "value": "1751248",
        "partNumber": "1751248",
        "packageReference": "11x8.5x7.3mm",
        "schX": 7.47,
        "schY": 2.93,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N36"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "J9",
        "kind": "connector",
        "libraryReference": "Receptacle_2x1",
        "description": "Conn Term Block, 2POS, 3.5mm, TH",
        "value": "1751248",
        "partNumber": "1751248",
        "packageReference": "11x8.5x7.3mm",
        "schX": 7.47,
        "schY": 3.6,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N37"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "J10",
        "kind": "jumper",
        "libraryReference": "Header_3x1",
        "description": "Header, 2.54mm, 3x1, Gold, TH",
        "value": "SL1111203G",
        "partNumber": "SL 11 112 03G",
        "packageReference": "TH, 3-Leads, Body 2.5x7.62mm, Pitch 2.54mm",
        "schX": -6.53,
        "schY": 4.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N14"
          },
          "pin2": {
            "label": "2",
            "net": "NET_02_card_top_N15"
          },
          "pin3": {
            "label": "3",
            "net": "NET_02_card_top_N16"
          }
        }
      },
      {
        "name": "J11",
        "kind": "connector",
        "libraryReference": "Header_7x2",
        "description": "Header (shrouded), 100 mil, 7x2, Gold, TH",
        "value": "SBH11-PBPC-D07-ST-BK",
        "partNumber": "SBH11-PBPC-D07-ST-BK",
        "packageReference": "7x2 Shrouded Header",
        "schX": -7.87,
        "schY": 5.07,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_02_card_top_N2"
          },
          "pin3": {
            "label": "3",
            "net": "NET_02_card_top_N3"
          },
          "pin4": {
            "label": "4",
            "net": "NET_02_card_top_N4"
          },
          "pin5": {
            "label": "5",
            "net": "NET_02_card_top_N5"
          },
          "pin6": {
            "label": "6",
            "net": "NET_02_card_top_N6"
          },
          "pin7": {
            "label": "7",
            "net": "NET_TEST"
          },
          "pin8": {
            "label": "8",
            "net": "NET_02_card_top_N7"
          },
          "pin9": {
            "label": "9",
            "net": "NET_02_card_top_N8"
          },
          "pin10": {
            "label": "10",
            "net": "NET_02_card_top_N9"
          },
          "pin11": {
            "label": "11",
            "net": "NET_02_card_top_N10"
          },
          "pin12": {
            "label": "12",
            "net": "NET_02_card_top_N11"
          },
          "pin13": {
            "label": "13",
            "net": "NET_02_card_top_N12"
          },
          "pin14": {
            "label": "14",
            "net": "NET_02_card_top_N13"
          }
        }
      },
      {
        "name": "R1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -4.53,
        "schY": -4.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_02_card_top_N22"
          }
        }
      },
      {
        "name": "R2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "49.9k",
        "partNumber": "CRCW040249K9FKED",
        "packageReference": "0402",
        "schX": -9.47,
        "schY": 4.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_MSP_3V3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_RST"
          }
        }
      },
      {
        "name": "TP1",
        "kind": "testpoint",
        "libraryReference": "5001",
        "description": "Test Point, Miniature, Black, TH",
        "value": "5001",
        "partNumber": "5001",
        "packageReference": "Black Miniature Testpoint",
        "schX": 8.67,
        "schY": 5.47,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "TP2",
        "kind": "testpoint",
        "libraryReference": "5001",
        "description": "Test Point, Miniature, Black, TH",
        "value": "5001",
        "partNumber": "5001",
        "packageReference": "Black Miniature Testpoint",
        "schX": 9.73,
        "schY": 5.47,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "TP10",
        "kind": "testpoint",
        "libraryReference": "5001",
        "description": "Test Point, Miniature, Black, TH",
        "value": "5001",
        "partNumber": "5001",
        "packageReference": "Black Miniature Testpoint",
        "schX": 8.13,
        "schY": 5.47,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "TP11",
        "kind": "testpoint",
        "libraryReference": "5001",
        "description": "Test Point, Miniature, Black, TH",
        "value": "5001",
        "partNumber": "5001",
        "packageReference": "Black Miniature Testpoint",
        "schX": 10.27,
        "schY": 5.47,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      }
    ]
  },
  {
    "name": "03_power_top",
    "title": "3 - Power top level",
    "source": "T1_Power_Top_Level.SchDoc",
    "parts": [
      {
        "name": "C2",
        "kind": "capacitor",
        "libraryReference": "Cap_Polarized",
        "description": "CAP, TA, 10 uF, 63 V, +/- 10%, 1 ohm, SMD",
        "value": "10uF",
        "partNumber": "293D106X9063E2TE3",
        "packageReference": "3216-18",
        "schX": 6.93,
        "schY": -3.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "+",
            "net": "NET_48V_Vout1"
          },
          "pin2": {
            "label": "-",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "C3",
        "kind": "capacitor",
        "libraryReference": "Cap_Polarized",
        "description": "CAP, TA, 10 uF, 63 V, +/- 10%, 1 ohm, SMD",
        "value": "10uF",
        "partNumber": "293D106X9063E2TE3",
        "packageReference": "3216-18",
        "schX": -7.07,
        "schY": -3.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "+",
            "net": "NET_48V_Vin"
          },
          "pin2": {
            "label": "-",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "C4",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 16 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71C104KA01D",
        "packageReference": "0603",
        "schX": 0.67,
        "schY": 1.47,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_MSP_3V3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "C5",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 µF, 16 V,+/- 5%, X7R, AEC-Q200 Grade 1, 0402",
        "value": "0.1uF",
        "partNumber": "GCM155R71C104JA55D",
        "packageReference": "0402",
        "schX": -6.67,
        "schY": 4.4,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_03_power_top_N9"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "C50",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.01 uF, 16 V, +/- 10%, X7R, 0402",
        "value": "0.01uF",
        "partNumber": "GRM155R71C103KA01D",
        "packageReference": "0402",
        "schX": -5.6,
        "schY": 4.4,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_03_power_top_N8"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "D1",
        "kind": "diode",
        "libraryReference": "Diode_TVS_Bi",
        "description": "Diode, TVS, Bi, 48 V, 77.4 Vc, 1500 W, 20 A, SMC (No Polarity Mark)",
        "value": "48V",
        "partNumber": "SMCJ48CA-TR",
        "packageReference": "SMC (No Polarity Mark)",
        "schX": 2.4,
        "schY": -5.47,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Supply_In"
          },
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "D2",
        "kind": "diode",
        "libraryReference": "Diode_TVS_Uni",
        "description": "Diode, TVS, Uni, 48 V, 77.4 Vc, 1500 W, 20 A, SMC",
        "value": "48V",
        "partNumber": "SMCJ48A-TR",
        "packageReference": "SMC",
        "schX": 4.53,
        "schY": -3.33,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_GND"
          },
          "pin1": {
            "label": "K",
            "net": "NET_48V_Vout1"
          }
        }
      },
      {
        "name": "D3",
        "kind": "diode",
        "libraryReference": "Diode_TVS_Uni",
        "description": "Diode, TVS, Uni, 48 V, 77.4 Vc, 1500 W, 20 A, SMC",
        "value": "48V",
        "partNumber": "SMCJ48A-TR",
        "packageReference": "SMC",
        "schX": 5.6,
        "schY": -3.33,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_GND"
          },
          "pin1": {
            "label": "K",
            "net": "NET_48V_Vout1"
          }
        }
      },
      {
        "name": "D4",
        "kind": "diode",
        "libraryReference": "Diode_TVS_Bi",
        "description": "Diode, TVS, Bi, 48 V, 77.4 Vc, 1500 W, 20 A, SMC (No Polarity Mark)",
        "value": "48V",
        "partNumber": "SMCJ48CA-TR",
        "packageReference": "SMC (No Polarity Mark)",
        "schX": -5.07,
        "schY": -3.2,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "D5",
        "kind": "diode",
        "libraryReference": "Diode_TVS_Bi",
        "description": "Diode, TVS, Bi, 48 V, 77.4 Vc, 1500 W, 20 A, SMC (No Polarity Mark)",
        "value": "48V",
        "partNumber": "SMCJ48CA-TR",
        "packageReference": "SMC (No Polarity Mark)",
        "schX": -4,
        "schY": -3.2,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "D25",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Blue, SMD",
        "value": "150060BS75000",
        "partNumber": "150060BS75000",
        "packageReference": "LED_0603",
        "schX": 3.47,
        "schY": -5.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_03_power_top_N18"
          },
          "pin1": {
            "label": "K",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "D26",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Blue, SMD",
        "value": "150060BS75000",
        "partNumber": "150060BS75000",
        "packageReference": "LED_0603",
        "schX": -5.73,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_03_power_top_N16"
          },
          "pin1": {
            "label": "K",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "D27",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Blue, SMD",
        "value": "150060BS75000",
        "partNumber": "150060BS75000",
        "packageReference": "LED_0603",
        "schX": 6.27,
        "schY": -2.93,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_03_power_top_N20"
          },
          "pin1": {
            "label": "K",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "D28",
        "kind": "diode",
        "libraryReference": "DIODE",
        "description": "Diode, Switching, 100 V, 0.15 A, 0603 Diode",
        "value": "100V",
        "partNumber": "CD0603-S01575",
        "packageReference": "0603 Diode",
        "schX": 4.4,
        "schY": -5.6,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_48V_Supply_In"
          },
          "pin1": {
            "label": "K",
            "net": "NET_03_power_top_N19"
          }
        }
      },
      {
        "name": "D29",
        "kind": "diode",
        "libraryReference": "DIODE",
        "description": "Diode, Switching, 100 V, 0.15 A, 0603 Diode",
        "value": "100V",
        "partNumber": "CD0603-S01575",
        "packageReference": "0603 Diode",
        "schX": -6.53,
        "schY": -3.47,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "K",
            "net": "NET_03_power_top_N17"
          }
        }
      },
      {
        "name": "L1",
        "kind": "inductor",
        "libraryReference": "Inductor_Iron",
        "description": "Inductor, 330 nH, 5.5 A, 0.014 ohm, SMD",
        "value": "330nH",
        "partNumber": "744383360033",
        "packageReference": "SMD, 2-Leads, Body 3.2x3.2mm",
        "schX": 8.8,
        "schY": -4,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_03_power_top_N14"
          },
          "pin2": {
            "label": "2",
            "net": "NET_Power_OUTPUT_P"
          }
        }
      },
      {
        "name": "L2",
        "kind": "inductor",
        "libraryReference": "Inductor_Iron",
        "description": "Inductor, 330 nH, 5.5 A, 0.014 ohm, SMD",
        "value": "330nH",
        "partNumber": "744383360033",
        "packageReference": "SMD, 2-Leads, Body 3.2x3.2mm",
        "schX": -8.93,
        "schY": -3.87,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_Power_INPUT_P"
          },
          "pin2": {
            "label": "2",
            "net": "NET_03_power_top_N12"
          }
        }
      },
      {
        "name": "L3",
        "kind": "chip",
        "libraryReference": "SYM-7448991068",
        "description": "Shielded 2 Coil Inductor Array  Inductance - Connected in Series 6.8µH Inductance - Connected in Parallel 44mOhm DC Resistance (DCR) - Parallel 5A Nonstandard",
        "value": "7448991068",
        "partNumber": "7448991068",
        "packageReference": "SMT_10MM0_10MM0",
        "schX": 7.6,
        "schY": -2.8,
        "schRotation": "90deg",
        "pins": {
          "pin4": {
            "label": "4",
            "net": "NET_48V_Vout1"
          },
          "pin3": {
            "label": "3",
            "net": "NET_03_power_top_N14"
          },
          "pin2": {
            "label": "2",
            "net": "NET_03_power_top_N15"
          },
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "L4",
        "kind": "chip",
        "libraryReference": "SYM-7448991068",
        "description": "Shielded 2 Coil Inductor Array  Inductance - Connected in Series 6.8µH Inductance - Connected in Parallel 44mOhm DC Resistance (DCR) - Parallel 5A Nonstandard",
        "value": "7448991068",
        "partNumber": "7448991068",
        "packageReference": "SMT_10MM0_10MM0",
        "schX": -8.13,
        "schY": -3.6,
        "schRotation": "90deg",
        "pins": {
          "pin4": {
            "label": "4",
            "net": "NET_03_power_top_N13"
          },
          "pin3": {
            "label": "3",
            "net": "NET_GND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "1",
            "net": "NET_03_power_top_N12"
          }
        }
      },
      {
        "name": "L5",
        "kind": "inductor",
        "libraryReference": "Inductor_Iron",
        "description": "Inductor, 330 nH, 5.5 A, 0.014 ohm, SMD",
        "value": "330nH",
        "partNumber": "744383360033",
        "packageReference": "SMD, 2-Leads, Body 3.2x3.2mm",
        "schX": 8.8,
        "schY": -2.4,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_03_power_top_N15"
          },
          "pin2": {
            "label": "2",
            "net": "NET_Power_OUTPUT_N"
          }
        }
      },
      {
        "name": "L6",
        "kind": "inductor",
        "libraryReference": "Inductor_Iron",
        "description": "Inductor, 330 nH, 5.5 A, 0.014 ohm, SMD",
        "value": "330nH",
        "partNumber": "744383360033",
        "packageReference": "SMD, 2-Leads, Body 3.2x3.2mm",
        "schX": -8.93,
        "schY": -2.27,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_Power_INPUT_N"
          },
          "pin2": {
            "label": "2",
            "net": "NET_03_power_top_N13"
          }
        }
      },
      {
        "name": "NT2",
        "kind": "nettie",
        "libraryReference": "Net-Tie",
        "description": "Single point connection between nets.",
        "value": "Net-Tie",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -0.27,
        "schY": -4.67,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PGND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "R3",
        "kind": "chip",
        "libraryReference": "Resistor_Kelvin",
        "description": "RES, 0.02, 1%, 0.5 W, 1206 sense",
        "value": "0.02",
        "partNumber": "LVK12R020FER",
        "packageReference": "1206 sense",
        "schX": 1.33,
        "schY": -0.67,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_03_power_top_N1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_24Vor12V_out"
          },
          "pin4": {
            "label": "4",
            "net": "NET_03_power_top_N2"
          },
          "pin3": {
            "label": "3",
            "net": "NET_03_power_top_N3"
          }
        }
      },
      {
        "name": "R4",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 562 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "562k",
        "partNumber": "CRCW0402562KFKED",
        "packageReference": "0402",
        "schX": -6,
        "schY": 3.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "1",
            "net": "NET_03_power_top_N9"
          }
        }
      },
      {
        "name": "R5",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 24.9 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "24.9k",
        "partNumber": "CRCW040224K9FKED",
        "packageReference": "0402",
        "schX": -6,
        "schY": 4.4,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_03_power_top_N9"
          },
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "R107",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.1 W, 0603",
        "value": "49.9k",
        "partNumber": "CRCW060349K9FKEA",
        "packageReference": "0603",
        "schX": 3.73,
        "schY": -5.6,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_03_power_top_N18"
          },
          "pin1": {
            "label": "1",
            "net": "NET_03_power_top_N19"
          }
        }
      },
      {
        "name": "R108",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.1 W, 0603",
        "value": "49.9k",
        "partNumber": "CRCW060349K9FKEA",
        "packageReference": "0603",
        "schX": -6.13,
        "schY": -3.07,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_03_power_top_N17"
          },
          "pin1": {
            "label": "1",
            "net": "NET_03_power_top_N16"
          }
        }
      },
      {
        "name": "R109",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.1 W, 0603",
        "value": "49.9k",
        "partNumber": "CRCW060349K9FKEA",
        "packageReference": "0603",
        "schX": 6.27,
        "schY": -3.73,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vout1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_03_power_top_N20"
          }
        }
      },
      {
        "name": "TP3",
        "kind": "testpoint",
        "libraryReference": "5000",
        "description": "Test Point, Miniature, Red, TH",
        "value": "5000",
        "partNumber": "5000",
        "packageReference": "Red Miniature Testpoint",
        "schX": -7.4,
        "schY": -4,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vin"
          }
        }
      },
      {
        "name": "TP4",
        "kind": "testpoint",
        "libraryReference": "5000",
        "description": "Test Point, Miniature, Red, TH",
        "value": "5000",
        "partNumber": "5000",
        "packageReference": "Red Miniature Testpoint",
        "schX": 0.93,
        "schY": -0.8,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_03_power_top_N1"
          }
        }
      },
      {
        "name": "TP5",
        "kind": "testpoint",
        "libraryReference": "5000",
        "description": "Test Point, Miniature, Red, TH",
        "value": "5000",
        "partNumber": "5000",
        "packageReference": "Red Miniature Testpoint",
        "schX": 1.6,
        "schY": -0.8,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_24Vor12V_out"
          }
        }
      },
      {
        "name": "TP9",
        "kind": "testpoint",
        "libraryReference": "5000",
        "description": "Test Point, Miniature, Red, TH",
        "value": "5000",
        "partNumber": "5000",
        "packageReference": "Red Miniature Testpoint",
        "schX": 5.33,
        "schY": -4.13,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vout1"
          }
        }
      },
      {
        "name": "U1",
        "kind": "chip",
        "libraryReference": "MSP430G2332",
        "description": "Enhanced Product Mixed Signal Microcontroller, PW0020A (TSSOP-20)",
        "value": "MSP430G2332QPW2REP",
        "partNumber": "MSP430G2332QPW2REP",
        "packageReference": "PW0020A",
        "schX": -0.93,
        "schY": 4,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "DVCC",
            "net": "NET_MSP_3V3"
          },
          "pin10": {
            "label": "P2.2",
            "net": "NET_03_power_top_N4"
          },
          "pin11": {
            "label": "P2.3",
            "net": "NET_03_power_top_N5"
          },
          "pin12": {
            "label": "P2.4",
            "net": "NET_03_power_top_N6"
          },
          "pin13": {
            "label": "P2.5",
            "net": "NET_03_power_top_N7"
          },
          "pin14": {
            "label": "P1.6/TA0.1/SDO/SCL/A6/TDI/TCLK",
            "net": "NET_SCL"
          },
          "pin2": {
            "label": "P1.0/TA0CLK/ACLK/A0",
            "net": "NET_IMON1"
          },
          "pin3": {
            "label": "P1.1/TA0.0/A1",
            "net": "NET_IMON2"
          },
          "pin4": {
            "label": "P1.2/TA0.1/A2",
            "net": "NET_03_power_top_N8"
          },
          "pin5": {
            "label": "P1.3/ADC10CLK/VREF-/VEREF-/A3",
            "net": "NET_03_power_top_N9"
          },
          "pin6": {
            "label": "P1.4/TA0.2/SMCLK/A4/VREF+/VEREF+/TCK",
            "net": "NET_SHDN1"
          },
          "pin7": {
            "label": "P1.5/TA0.0/SCLK/A5/TMS",
            "net": "NET_SHDN2"
          },
          "pin8": {
            "label": "P2.0",
            "net": "NET_PG1"
          },
          "pin9": {
            "label": "P2.1",
            "net": "NET_PG2"
          },
          "pin15": {
            "label": "P1.7/SDI/SDA/A7/TDO/TDI",
            "net": "NET_SDA"
          },
          "pin16": {
            "label": "R\\S\\T\\/NMI/SBWTDIO",
            "net": "NET_RST"
          },
          "pin17": {
            "label": "TEST/SBWTCK",
            "net": "NET_TEST"
          },
          "pin18": {
            "label": "XOUT/P2.7",
            "net": "NET_03_power_top_N10"
          },
          "pin19": {
            "label": "XIN/TA0.1/P2.6",
            "net": "NET_03_power_top_N11"
          },
          "pin20": {
            "label": "DVSS",
            "net": "NET_GND"
          }
        }
      }
    ]
  },
  {
    "name": "04_ideal_diode",
    "title": "4 - LM74700 ideal diode",
    "source": "LM74700.SchDoc",
    "parts": [
      {
        "name": "C6",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.022 uF, 100 V, +/- 10%, X7R, 0805",
        "value": "0.022uF",
        "partNumber": "GRM21BR72A223KA01L",
        "packageReference": "0805",
        "schX": -2.13,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Supply_In"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "C7",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 2.2 uF, 100 V, +/- 10%, X7R, 1206_190",
        "value": "2.2uF",
        "partNumber": "GRM31CR72A225KA73L",
        "packageReference": "1206_190",
        "schX": 2.67,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vin"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "C8",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 1 uF, 25 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "1uF",
        "partNumber": "GCM188R71E105KA64D",
        "packageReference": "0603",
        "schX": -0.27,
        "schY": 0.27,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_04_ideal_diode_N2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_48V_Supply_In"
          }
        }
      },
      {
        "name": "Q1",
        "kind": "mosfet",
        "libraryReference": "MOSFET_N_D56789G4S123",
        "description": "MOSFET, N-CH, 60 V, 15 A, AEC-Q101, 8-PowerVDFN",
        "value": "60V",
        "partNumber": "DMT6007LFG-13",
        "packageReference": "8-PowerVDFN",
        "schX": 0,
        "schY": -3.2,
        "schRotation": "90deg",
        "pins": {
          "pin5": {
            "label": "D",
            "net": "NET_48V_Vin"
          },
          "pin4": {
            "label": "G",
            "net": "NET_04_ideal_diode_N1"
          },
          "pin1": {
            "label": "S",
            "net": "NET_48V_Supply_In"
          },
          "pin2": {
            "label": "S",
            "net": "NET_48V_Supply_In"
          },
          "pin3": {
            "label": "S",
            "net": "NET_48V_Supply_In"
          },
          "pin6": {
            "label": "D",
            "net": "NET_48V_Vin"
          },
          "pin7": {
            "label": "D",
            "net": "NET_48V_Vin"
          },
          "pin8": {
            "label": "D",
            "net": "NET_48V_Vin"
          },
          "pin9": {
            "label": "D",
            "net": "NET_48V_Vin"
          }
        }
      },
      {
        "name": "U2",
        "kind": "chip",
        "libraryReference": "LM74700DDC",
        "description": "Low Iq Always ON Smart Diode Controller, DBV0006A (SOT-23-6)",
        "value": "LM74700QDBVRQ1",
        "partNumber": "LM74700QDBVRQ1",
        "packageReference": "DBV0006A",
        "schX": 0,
        "schY": -0.8,
        "schRotation": "90deg",
        "pins": {
          "pin5": {
            "label": "GATE",
            "net": "NET_04_ideal_diode_N1"
          },
          "pin4": {
            "label": "CATHODE",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "VCAP",
            "net": "NET_04_ideal_diode_N2"
          },
          "pin3": {
            "label": "EN",
            "net": "NET_48V_Supply_In"
          },
          "pin2": {
            "label": "GND",
            "net": "NET_GND"
          },
          "pin6": {
            "label": "ANODE",
            "net": "NET_48V_Supply_In"
          }
        }
      }
    ]
  },
  {
    "name": "05_efuse_f1",
    "title": "5 - TPS2663 eFuse F1",
    "source": "TPS2663.SchDoc",
    "parts": [
      {
        "name": "C9_F1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 1 uF, 100 V, +/- 10%, X7R, 1206",
        "value": "1uF",
        "partNumber": "GRM31CR72A105KA01L",
        "packageReference": "1206",
        "schX": -7.2,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vin"
          },
          "pin2": {
            "label": "2",
            "net": "NET_SGND_F1"
          }
        }
      },
      {
        "name": "C10_F1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.47 uF, 100 V, +/- 10%, X7R, 0805",
        "value": "0.47uF",
        "partNumber": "GRM21BR72A474KA73L",
        "packageReference": "0805",
        "schX": 6.4,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vout_F1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_SGND_F1"
          }
        }
      },
      {
        "name": "C11_F1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 uF, 100 V, +/- 10%, X7S, 1210",
        "value": "4.7uF",
        "partNumber": "GRM32DC72A475KE01L",
        "packageReference": "1210",
        "schX": 6.93,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vout_F1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_SGND_F1"
          }
        }
      },
      {
        "name": "C12_F1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 uF, 100 V, +/- 10%, X7S, 1210",
        "value": "4.7uF",
        "partNumber": "GRM32DC72A475KE01L",
        "packageReference": "1210",
        "schX": 7.6,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vout_F1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_SGND_F1"
          }
        }
      },
      {
        "name": "C13_F1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.022 uF, 16 V, +/- 10%, X7R, 0402",
        "value": "0.022uF",
        "partNumber": "GRM155R71C223KA01D",
        "packageReference": "0402",
        "schX": -4.93,
        "schY": 0.27,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f1_N6"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "C71_F1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 µF, 16 V,+/- 5%, X7R, AEC-Q200 Grade 1, 0402",
        "value": "0.1uF",
        "partNumber": "GCM155R71C104JA55D",
        "packageReference": "0402",
        "schX": 5.87,
        "schY": 0.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_IMON_F1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_SGND_F1"
          }
        }
      },
      {
        "name": "D6_F1",
        "kind": "diode",
        "libraryReference": "DIODE",
        "description": "Diode, Switching, 100 V, 0.15 A, 0603 Diode",
        "value": "100V",
        "partNumber": "CD0603-S01575",
        "packageReference": "0603 Diode",
        "schX": -1.33,
        "schY": -5.87,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_05_efuse_f1_N13"
          },
          "pin1": {
            "label": "K",
            "net": "NET_48V_Vin"
          }
        }
      },
      {
        "name": "D7_F1",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Red, SMD",
        "value": "150060RS75000",
        "partNumber": "150060RS75000",
        "packageReference": "LED_0603",
        "schX": 0.53,
        "schY": -5.87,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_05_efuse_f1_N14"
          },
          "pin1": {
            "label": "K",
            "net": "NET_05_efuse_f1_N13"
          }
        }
      },
      {
        "name": "D8_F1",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Red, SMD",
        "value": "150060RS75000",
        "partNumber": "150060RS75000",
        "packageReference": "LED_0603",
        "schX": 0.53,
        "schY": -4.93,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "K",
            "net": "NET_05_efuse_f1_N12"
          }
        }
      },
      {
        "name": "D9_F1",
        "kind": "diode",
        "libraryReference": "DIODE_SCHOTTKY",
        "description": "Diode, Schottky, 60 V, 2 A, SMB",
        "value": "60V",
        "partNumber": "B260-13-F",
        "packageReference": "SMB",
        "schX": 8.8,
        "schY": -1.2,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_SGND_F1"
          },
          "pin1": {
            "label": "K",
            "net": "NET_48V_Vout_F1"
          }
        }
      },
      {
        "name": "D10_F1",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Green, SMD",
        "value": "150060GS75000",
        "partNumber": "150060GS75000",
        "packageReference": "LED_0603",
        "schX": 2.93,
        "schY": 0.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_PG_F1"
          },
          "pin1": {
            "label": "K",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "J12_F1",
        "kind": "jumper",
        "libraryReference": "Header_2x1",
        "description": "Header, 100mil, 2x1, Gold, TH",
        "value": "PBC02SAAN",
        "partNumber": "PBC02SAAN",
        "packageReference": "Sullins 100mil, 1x2, 230 mil above insulator",
        "schX": -3.07,
        "schY": 0.53,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f1_N10"
          },
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f1_N11"
          }
        }
      },
      {
        "name": "Q2_F1",
        "kind": "mosfet",
        "libraryReference": "MOSFET_N_D56789G4S123",
        "description": "MOSFET, N-CH, 100 V, 50 A, DQG0008A (VSON-CLIP-8)",
        "value": "100V",
        "partNumber": "CSD19537Q3",
        "packageReference": "DQG0008A",
        "schX": -1.87,
        "schY": -3.87,
        "schRotation": "90deg",
        "pins": {
          "pin5": {
            "label": "D",
            "net": "NET_05_efuse_f1_N1"
          },
          "pin4": {
            "label": "G",
            "net": "NET_05_efuse_f1_N2"
          },
          "pin1": {
            "label": "S",
            "net": "NET_48V_Vin"
          },
          "pin2": {
            "label": "S",
            "net": "NET_48V_Vin"
          },
          "pin3": {
            "label": "S",
            "net": "NET_48V_Vin"
          },
          "pin6": {
            "label": "D",
            "net": "NET_05_efuse_f1_N1"
          },
          "pin7": {
            "label": "D",
            "net": "NET_05_efuse_f1_N1"
          },
          "pin8": {
            "label": "D",
            "net": "NET_05_efuse_f1_N1"
          },
          "pin9": {
            "label": "D",
            "net": "NET_05_efuse_f1_N1"
          }
        }
      },
      {
        "name": "Q3_F1",
        "kind": "mosfet",
        "libraryReference": "MOSFET_N_D3G1S2",
        "description": "MOSFET, N-CH, 50 V, 0.22 A, SOT-23",
        "value": "50V",
        "partNumber": "BSS138",
        "packageReference": "SOT-23",
        "schX": -1.73,
        "schY": -2.8,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "G",
            "net": "NET_05_efuse_f1_N3"
          },
          "pin2": {
            "label": "S",
            "net": "NET_48V_Vin"
          },
          "pin3": {
            "label": "D",
            "net": "NET_05_efuse_f1_N2"
          }
        }
      },
      {
        "name": "R6_F1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.1 W, 0603",
        "value": "49.9k",
        "partNumber": "CRCW060349K9FKEA",
        "packageReference": "0603",
        "schX": 2.4,
        "schY": -5.87,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f1_N14"
          },
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vout_F1"
          }
        }
      },
      {
        "name": "R7_F1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.1 W, 0603",
        "value": "49.9k",
        "partNumber": "CRCW060349K9FKEA",
        "packageReference": "0603",
        "schX": 2.93,
        "schY": -2.8,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vout_F1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PG_F1"
          }
        }
      },
      {
        "name": "R8_F1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.1 W, 0603",
        "value": "49.9k",
        "partNumber": "CRCW060349K9FKEA",
        "packageReference": "0603",
        "schX": 4,
        "schY": -2.8,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f1_N12"
          },
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f1_N8"
          }
        }
      },
      {
        "name": "R9_F1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 715 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "715k",
        "partNumber": "CRCW0402715KFKED",
        "packageReference": "0402",
        "schX": 4.53,
        "schY": -2.53,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vout_F1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f1_N9"
          }
        }
      },
      {
        "name": "R10_F1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 976 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "976k",
        "partNumber": "CRCW0402976KFKED",
        "packageReference": "0402",
        "schX": -6,
        "schY": -1.87,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f1_N4"
          }
        }
      },
      {
        "name": "R11_F1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 10.0 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "10.0k",
        "partNumber": "CRCW040210K0FKED",
        "packageReference": "0402",
        "schX": -6,
        "schY": -0.8,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f1_N4"
          },
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f1_N5"
          }
        }
      },
      {
        "name": "R12_F1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 24.3 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "24.3k",
        "partNumber": "CRCW040224K3FKED",
        "packageReference": "0402",
        "schX": 4.53,
        "schY": 0,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f1_N9"
          },
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "R13_F1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 17.8 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "17.8k",
        "partNumber": "CRCW040217K8FKED",
        "packageReference": "0402",
        "schX": 5.2,
        "schY": 0,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_IMON_F1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_SGND_F1"
          }
        }
      },
      {
        "name": "R14_F1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 24.3 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "24.3k",
        "partNumber": "CRCW040224K3FKED",
        "packageReference": "0402",
        "schX": -6,
        "schY": 0.13,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f1_N5"
          },
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "TP6_F1",
        "kind": "testpoint",
        "libraryReference": "5002",
        "description": "Test Point, Miniature, White, TH",
        "value": "5002",
        "partNumber": "5002",
        "packageReference": "White Miniature Testpoint",
        "schX": 4.93,
        "schY": -0.93,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_IMON_F1"
          }
        }
      },
      {
        "name": "TP7_F1",
        "kind": "testpoint",
        "libraryReference": "5002",
        "description": "Test Point, Miniature, White, TH",
        "value": "5002",
        "partNumber": "5002",
        "packageReference": "White Miniature Testpoint",
        "schX": -1.07,
        "schY": -0.8,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_ILIM_F1"
          }
        }
      },
      {
        "name": "U3_F1",
        "kind": "chip",
        "libraryReference": "TPS26630_1",
        "description": "4.5V - 60V, 6A 29mO eFuse with Reverse Polarity Protection, RGE0024H (VQFN-24)",
        "value": "TPS26631RGER",
        "partNumber": "TPS26631RGER",
        "packageReference": "RGE0024H",
        "schX": 0.53,
        "schY": -1.73,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "IN",
            "net": "NET_05_efuse_f1_N1"
          },
          "pin2": {
            "label": "IN",
            "net": "NET_05_efuse_f1_N1"
          },
          "pin3": {
            "label": "B_GATE",
            "net": "NET_05_efuse_f1_N2"
          },
          "pin4": {
            "label": "DRV",
            "net": "NET_05_efuse_f1_N3"
          },
          "pin5": {
            "label": "IN_SYS",
            "net": "NET_48V_Vin"
          },
          "pin6": {
            "label": "UVLO",
            "net": "NET_05_efuse_f1_N4"
          },
          "pin7": {
            "label": "OVP",
            "net": "NET_05_efuse_f1_N5"
          },
          "pin8": {
            "label": "GND",
            "net": "NET_GND"
          },
          "pin9": {
            "label": "DVDT",
            "net": "NET_05_efuse_f1_N6"
          },
          "pin10": {
            "label": "ILIM",
            "net": "NET_ILIM_F1"
          },
          "pin11": {
            "label": "MODE",
            "net": "NET_05_efuse_f1_N7"
          },
          "pin12": {
            "label": "S\\H\\D\\N\\",
            "net": "NET_SHDN_F1"
          },
          "pin13": {
            "label": "IMON",
            "net": "NET_IMON_F1"
          },
          "pin14": {
            "label": "F\\L\\T\\",
            "net": "NET_05_efuse_f1_N8"
          },
          "pin15": {
            "label": "PGTH",
            "net": "NET_05_efuse_f1_N9"
          },
          "pin16": {
            "label": "PGOOD",
            "net": "NET_PG_F1"
          },
          "pin17": {
            "label": "OUT",
            "net": "NET_48V_Vout_F1"
          },
          "pin18": {
            "label": "OUT",
            "net": "NET_48V_Vout_F1"
          },
          "pin19": {
            "label": "NC",
            "net": "NET_GND"
          },
          "pin20": {
            "label": "NC",
            "net": "NET_GND"
          },
          "pin21": {
            "label": "NC",
            "net": "NET_GND"
          },
          "pin22": {
            "label": "NC",
            "net": "NET_GND"
          },
          "pin23": {
            "label": "NC",
            "net": "NET_GND"
          },
          "pin25": {
            "label": "PAD",
            "net": "NET_GND"
          },
          "pin24": {
            "label": "NC",
            "net": "NET_GND"
          }
        }
      }
    ]
  },
  {
    "name": "05_efuse_f2",
    "title": "5 - TPS2663 eFuse F2",
    "source": "TPS2663.SchDoc",
    "parts": [
      {
        "name": "C9_F2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 1 uF, 100 V, +/- 10%, X7R, 1206",
        "value": "1uF",
        "partNumber": "GRM31CR72A105KA01L",
        "packageReference": "1206",
        "schX": -7.2,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vin"
          },
          "pin2": {
            "label": "2",
            "net": "NET_SGND_F2"
          }
        }
      },
      {
        "name": "C10_F2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.47 uF, 100 V, +/- 10%, X7R, 0805",
        "value": "0.47uF",
        "partNumber": "GRM21BR72A474KA73L",
        "packageReference": "0805",
        "schX": 6.4,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vout_F2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_SGND_F2"
          }
        }
      },
      {
        "name": "C11_F2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 uF, 100 V, +/- 10%, X7S, 1210",
        "value": "4.7uF",
        "partNumber": "GRM32DC72A475KE01L",
        "packageReference": "1210",
        "schX": 6.93,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vout_F2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_SGND_F2"
          }
        }
      },
      {
        "name": "C12_F2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 uF, 100 V, +/- 10%, X7S, 1210",
        "value": "4.7uF",
        "partNumber": "GRM32DC72A475KE01L",
        "packageReference": "1210",
        "schX": 7.6,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vout_F2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_SGND_F2"
          }
        }
      },
      {
        "name": "C13_F2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.022 uF, 16 V, +/- 10%, X7R, 0402",
        "value": "0.022uF",
        "partNumber": "GRM155R71C223KA01D",
        "packageReference": "0402",
        "schX": -4.93,
        "schY": 0.27,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f2_N6"
          },
          "pin2": {
            "label": "2",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "C71_F2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 µF, 16 V,+/- 5%, X7R, AEC-Q200 Grade 1, 0402",
        "value": "0.1uF",
        "partNumber": "GCM155R71C104JA55D",
        "packageReference": "0402",
        "schX": 5.87,
        "schY": 0.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_IMON_F2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_SGND_F2"
          }
        }
      },
      {
        "name": "D6_F2",
        "kind": "diode",
        "libraryReference": "DIODE",
        "description": "Diode, Switching, 100 V, 0.15 A, 0603 Diode",
        "value": "100V",
        "partNumber": "CD0603-S01575",
        "packageReference": "0603 Diode",
        "schX": -1.33,
        "schY": -5.87,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_05_efuse_f2_N13"
          },
          "pin1": {
            "label": "K",
            "net": "NET_48V_Vin"
          }
        }
      },
      {
        "name": "D7_F2",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Red, SMD",
        "value": "150060RS75000",
        "partNumber": "150060RS75000",
        "packageReference": "LED_0603",
        "schX": 0.53,
        "schY": -5.87,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_05_efuse_f2_N14"
          },
          "pin1": {
            "label": "K",
            "net": "NET_05_efuse_f2_N13"
          }
        }
      },
      {
        "name": "D8_F2",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Red, SMD",
        "value": "150060RS75000",
        "partNumber": "150060RS75000",
        "packageReference": "LED_0603",
        "schX": 0.53,
        "schY": -4.93,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "K",
            "net": "NET_05_efuse_f2_N12"
          }
        }
      },
      {
        "name": "D9_F2",
        "kind": "diode",
        "libraryReference": "DIODE_SCHOTTKY",
        "description": "Diode, Schottky, 60 V, 2 A, SMB",
        "value": "60V",
        "partNumber": "B260-13-F",
        "packageReference": "SMB",
        "schX": 8.8,
        "schY": -1.2,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_SGND_F2"
          },
          "pin1": {
            "label": "K",
            "net": "NET_48V_Vout_F2"
          }
        }
      },
      {
        "name": "D10_F2",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Green, SMD",
        "value": "150060GS75000",
        "partNumber": "150060GS75000",
        "packageReference": "LED_0603",
        "schX": 2.93,
        "schY": 0.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_PG_F2"
          },
          "pin1": {
            "label": "K",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "J12_F2",
        "kind": "jumper",
        "libraryReference": "Header_2x1",
        "description": "Header, 100mil, 2x1, Gold, TH",
        "value": "PBC02SAAN",
        "partNumber": "PBC02SAAN",
        "packageReference": "Sullins 100mil, 1x2, 230 mil above insulator",
        "schX": -3.07,
        "schY": 0.53,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f2_N10"
          },
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f2_N11"
          }
        }
      },
      {
        "name": "Q2_F2",
        "kind": "mosfet",
        "libraryReference": "MOSFET_N_D56789G4S123",
        "description": "MOSFET, N-CH, 100 V, 50 A, DQG0008A (VSON-CLIP-8)",
        "value": "100V",
        "partNumber": "CSD19537Q3",
        "packageReference": "DQG0008A",
        "schX": -1.87,
        "schY": -3.87,
        "schRotation": "90deg",
        "pins": {
          "pin5": {
            "label": "D",
            "net": "NET_05_efuse_f2_N1"
          },
          "pin4": {
            "label": "G",
            "net": "NET_05_efuse_f2_N2"
          },
          "pin1": {
            "label": "S",
            "net": "NET_48V_Vin"
          },
          "pin2": {
            "label": "S",
            "net": "NET_48V_Vin"
          },
          "pin3": {
            "label": "S",
            "net": "NET_48V_Vin"
          },
          "pin6": {
            "label": "D",
            "net": "NET_05_efuse_f2_N1"
          },
          "pin7": {
            "label": "D",
            "net": "NET_05_efuse_f2_N1"
          },
          "pin8": {
            "label": "D",
            "net": "NET_05_efuse_f2_N1"
          },
          "pin9": {
            "label": "D",
            "net": "NET_05_efuse_f2_N1"
          }
        }
      },
      {
        "name": "Q3_F2",
        "kind": "mosfet",
        "libraryReference": "MOSFET_N_D3G1S2",
        "description": "MOSFET, N-CH, 50 V, 0.22 A, SOT-23",
        "value": "50V",
        "partNumber": "BSS138",
        "packageReference": "SOT-23",
        "schX": -1.73,
        "schY": -2.8,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "G",
            "net": "NET_05_efuse_f2_N3"
          },
          "pin2": {
            "label": "S",
            "net": "NET_48V_Vin"
          },
          "pin3": {
            "label": "D",
            "net": "NET_05_efuse_f2_N2"
          }
        }
      },
      {
        "name": "R6_F2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.1 W, 0603",
        "value": "49.9k",
        "partNumber": "CRCW060349K9FKEA",
        "packageReference": "0603",
        "schX": 2.4,
        "schY": -5.87,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f2_N14"
          },
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vout_F2"
          }
        }
      },
      {
        "name": "R7_F2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.1 W, 0603",
        "value": "49.9k",
        "partNumber": "CRCW060349K9FKEA",
        "packageReference": "0603",
        "schX": 2.93,
        "schY": -2.8,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vout_F2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PG_F2"
          }
        }
      },
      {
        "name": "R8_F2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.1 W, 0603",
        "value": "49.9k",
        "partNumber": "CRCW060349K9FKEA",
        "packageReference": "0603",
        "schX": 4,
        "schY": -2.8,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f2_N12"
          },
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f2_N8"
          }
        }
      },
      {
        "name": "R9_F2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 715 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "715k",
        "partNumber": "CRCW0402715KFKED",
        "packageReference": "0402",
        "schX": 4.53,
        "schY": -2.53,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vout_F2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f2_N9"
          }
        }
      },
      {
        "name": "R10_F2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 976 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "976k",
        "partNumber": "CRCW0402976KFKED",
        "packageReference": "0402",
        "schX": -6,
        "schY": -1.87,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f2_N4"
          }
        }
      },
      {
        "name": "R11_F2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 10.0 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "10.0k",
        "partNumber": "CRCW040210K0FKED",
        "packageReference": "0402",
        "schX": -6,
        "schY": -0.8,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f2_N4"
          },
          "pin1": {
            "label": "1",
            "net": "NET_05_efuse_f2_N5"
          }
        }
      },
      {
        "name": "R12_F2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 24.3 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "24.3k",
        "partNumber": "CRCW040224K3FKED",
        "packageReference": "0402",
        "schX": 4.53,
        "schY": 0,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f2_N9"
          },
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "R13_F2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 17.8 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "17.8k",
        "partNumber": "CRCW040217K8FKED",
        "packageReference": "0402",
        "schX": 5.2,
        "schY": 0,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_IMON_F2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_SGND_F2"
          }
        }
      },
      {
        "name": "R14_F2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 24.3 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "24.3k",
        "partNumber": "CRCW040224K3FKED",
        "packageReference": "0402",
        "schX": -6,
        "schY": 0.13,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_05_efuse_f2_N5"
          },
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          }
        }
      },
      {
        "name": "TP6_F2",
        "kind": "testpoint",
        "libraryReference": "5002",
        "description": "Test Point, Miniature, White, TH",
        "value": "5002",
        "partNumber": "5002",
        "packageReference": "White Miniature Testpoint",
        "schX": 4.93,
        "schY": -0.93,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_IMON_F2"
          }
        }
      },
      {
        "name": "TP7_F2",
        "kind": "testpoint",
        "libraryReference": "5002",
        "description": "Test Point, Miniature, White, TH",
        "value": "5002",
        "partNumber": "5002",
        "packageReference": "White Miniature Testpoint",
        "schX": -1.07,
        "schY": -0.8,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_ILIM_F2"
          }
        }
      },
      {
        "name": "U3_F2",
        "kind": "chip",
        "libraryReference": "TPS26630_1",
        "description": "4.5V - 60V, 6A 29mO eFuse with Reverse Polarity Protection, RGE0024H (VQFN-24)",
        "value": "TPS26631RGER",
        "partNumber": "TPS26631RGER",
        "packageReference": "RGE0024H",
        "schX": 0.53,
        "schY": -1.73,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "IN",
            "net": "NET_05_efuse_f2_N1"
          },
          "pin2": {
            "label": "IN",
            "net": "NET_05_efuse_f2_N1"
          },
          "pin3": {
            "label": "B_GATE",
            "net": "NET_05_efuse_f2_N2"
          },
          "pin4": {
            "label": "DRV",
            "net": "NET_05_efuse_f2_N3"
          },
          "pin5": {
            "label": "IN_SYS",
            "net": "NET_48V_Vin"
          },
          "pin6": {
            "label": "UVLO",
            "net": "NET_05_efuse_f2_N4"
          },
          "pin7": {
            "label": "OVP",
            "net": "NET_05_efuse_f2_N5"
          },
          "pin8": {
            "label": "GND",
            "net": "NET_GND"
          },
          "pin9": {
            "label": "DVDT",
            "net": "NET_05_efuse_f2_N6"
          },
          "pin10": {
            "label": "ILIM",
            "net": "NET_ILIM_F2"
          },
          "pin11": {
            "label": "MODE",
            "net": "NET_05_efuse_f2_N7"
          },
          "pin12": {
            "label": "S\\H\\D\\N\\",
            "net": "NET_SHDN_F2"
          },
          "pin13": {
            "label": "IMON",
            "net": "NET_IMON_F2"
          },
          "pin14": {
            "label": "F\\L\\T\\",
            "net": "NET_05_efuse_f2_N8"
          },
          "pin15": {
            "label": "PGTH",
            "net": "NET_05_efuse_f2_N9"
          },
          "pin16": {
            "label": "PGOOD",
            "net": "NET_PG_F2"
          },
          "pin17": {
            "label": "OUT",
            "net": "NET_48V_Vout_F2"
          },
          "pin18": {
            "label": "OUT",
            "net": "NET_48V_Vout_F2"
          },
          "pin19": {
            "label": "NC",
            "net": "NET_GND"
          },
          "pin20": {
            "label": "NC",
            "net": "NET_GND"
          },
          "pin21": {
            "label": "NC",
            "net": "NET_GND"
          },
          "pin22": {
            "label": "NC",
            "net": "NET_GND"
          },
          "pin23": {
            "label": "NC",
            "net": "NET_GND"
          },
          "pin25": {
            "label": "PAD",
            "net": "NET_GND"
          },
          "pin24": {
            "label": "NC",
            "net": "NET_GND"
          }
        }
      }
    ]
  },
  {
    "name": "06_48v_buck",
    "title": "6 - LM76003 48 V buck",
    "source": "LM76003.SchDoc",
    "parts": [
      {
        "name": "C14",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 2.2 uF, 10 V, +/- 10%, X7R, 0603",
        "value": "2.2uF",
        "partNumber": "GRM188R71A225KE15D",
        "packageReference": "0603",
        "schX": -1.47,
        "schY": -3.47,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_06_48v_buck_N11"
          },
          "pin2": {
            "label": "2",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "C15",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.47 uF, 25 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "0.47uF",
        "partNumber": "GCM188R71E474KA64D",
        "packageReference": "0603",
        "schX": 1.2,
        "schY": -2.4,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_06_48v_buck_N10"
          },
          "pin2": {
            "label": "2",
            "net": "NET_06_48v_buck_N1"
          }
        }
      },
      {
        "name": "C16",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 pF, 50 V, +/- 5%, C0G/NP0, 0603",
        "value": "4.7pF",
        "partNumber": "06035A4R7CAT2A",
        "packageReference": "0603",
        "schX": 4.67,
        "schY": -2.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_24V12Vout"
          },
          "pin2": {
            "label": "2",
            "net": "NET_06_48v_buck_N3"
          }
        }
      },
      {
        "name": "C17",
        "kind": "capacitor",
        "libraryReference": "Cap_Polarized",
        "description": "CAP, TA, 10 uF, 35 V, +/- 10%, 0.3 ohm, SMD",
        "value": "10uF",
        "partNumber": "593D106X9035D2TE3",
        "packageReference": "7343-31",
        "schX": 7.87,
        "schY": -1.47,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "+",
            "net": "NET_24V12Vout"
          },
          "pin2": {
            "label": "-",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "C18",
        "kind": "capacitor",
        "libraryReference": "Cap_Polarized",
        "description": "CAP, TA, 10 uF, 35 V, +/- 10%, 0.3 ohm, SMD",
        "value": "10uF",
        "partNumber": "593D106X9035D2TE3",
        "packageReference": "7343-31",
        "schX": 8.53,
        "schY": -1.47,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "+",
            "net": "NET_24V12Vout"
          },
          "pin2": {
            "label": "-",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "C19",
        "kind": "capacitor",
        "libraryReference": "Cap_Polarized",
        "description": "CAP, TA, 10 uF, 35 V, +/- 10%, 0.3 ohm, SMD",
        "value": "10uF",
        "partNumber": "593D106X9035D2TE3",
        "packageReference": "7343-31",
        "schX": 9.2,
        "schY": -1.47,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "+",
            "net": "NET_24V12Vout"
          },
          "pin2": {
            "label": "-",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "C20",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.47 uF, 50 V, +/- 10%, X7R, 0805",
        "value": "0.47uF",
        "partNumber": "GRM21BR71H474KA88L",
        "packageReference": "0805",
        "schX": 5.87,
        "schY": -1.47,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_24V12Vout"
          },
          "pin2": {
            "label": "2",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "C21",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 µF, 50 V,+/- 10%, X7R, 1210",
        "value": "10uF",
        "partNumber": "GRJ32ER71H106KE11L",
        "packageReference": "1210",
        "schX": 6.53,
        "schY": -1.47,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_24V12Vout"
          },
          "pin2": {
            "label": "2",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "C22",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 µF, 50 V,+/- 10%, X7R, 1210",
        "value": "10uF",
        "partNumber": "GRJ32ER71H106KE11L",
        "packageReference": "1210",
        "schX": 7.2,
        "schY": -1.47,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_24V12Vout"
          },
          "pin2": {
            "label": "2",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "C23",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 µF, 100 V,+/- 10%, X7S, AEC-Q200 Grade 1, 1210",
        "value": "4.7uF",
        "partNumber": "GCM32DC72A475KE02L",
        "packageReference": "1210",
        "schX": -7.33,
        "schY": -1.33,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vin"
          },
          "pin2": {
            "label": "2",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "C24",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 µF, 100 V,+/- 10%, X7S, AEC-Q200 Grade 1, 1210",
        "value": "4.7uF",
        "partNumber": "GCM32DC72A475KE02L",
        "packageReference": "1210",
        "schX": -6.4,
        "schY": -1.33,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vin"
          },
          "pin2": {
            "label": "2",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "C25",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.47 uF, 100 V, +/- 10%, X7R, 0805",
        "value": "0.47uF",
        "partNumber": "GRM21BR72A474KA73L",
        "packageReference": "0805",
        "schX": -5.6,
        "schY": -1.33,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_48V_Vin"
          },
          "pin2": {
            "label": "2",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "D11",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Green, SMD",
        "value": "150060GS75000",
        "partNumber": "150060GS75000",
        "packageReference": "LED_0603",
        "schX": -2.8,
        "schY": -0.13,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_PG_24V12V"
          },
          "pin1": {
            "label": "K",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "J13",
        "kind": "jumper",
        "libraryReference": "Header_2x1",
        "description": "Header, 100mil, 2x1, Gold, TH",
        "value": "PBC02SAAN",
        "partNumber": "PBC02SAAN",
        "packageReference": "Sullins 100mil, 1x2, 230 mil above insulator",
        "schX": 4.27,
        "schY": -0.93,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_06_48v_buck_N12"
          },
          "pin2": {
            "label": "2",
            "net": "NET_06_48v_buck_N13"
          }
        }
      },
      {
        "name": "L7",
        "kind": "inductor",
        "libraryReference": "Inductor_Iron",
        "description": "Inductor, Shielded Drum Core, Powdered Iron, 10 uH, 3 A, 0.075 ohm, SMD",
        "value": "10uH",
        "partNumber": "74437346100",
        "packageReference": "7.30x2.80x6.60mm",
        "schX": 2.4,
        "schY": -3.2,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_06_48v_buck_N10"
          },
          "pin2": {
            "label": "2",
            "net": "NET_24V12Vout"
          }
        }
      },
      {
        "name": "NT3",
        "kind": "nettie",
        "libraryReference": "Net-Tie",
        "description": "Single point connection between nets.",
        "value": "Net-Tie",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -8,
        "schY": 0.67,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "R15",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 100 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "100k",
        "partNumber": "CRCW0402100KFKED",
        "packageReference": "0402",
        "schX": 4,
        "schY": -2.13,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_24V12Vout"
          },
          "pin1": {
            "label": "1",
            "net": "NET_06_48v_buck_N3"
          }
        }
      },
      {
        "name": "R16",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 49.9 k, 1%, 0.1 W, 0603",
        "value": "49.9k",
        "partNumber": "CRCW060349K9FKEA",
        "packageReference": "0603",
        "schX": -2.8,
        "schY": -1.87,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PG_24V12V"
          }
        }
      },
      {
        "name": "R17",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 243 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "243k",
        "partNumber": "CRCW0402243KFKED",
        "packageReference": "0402",
        "schX": -4.67,
        "schY": -1.73,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_48V_Vin"
          },
          "pin1": {
            "label": "1",
            "net": "NET_06_48v_buck_N2"
          }
        }
      },
      {
        "name": "R18",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 10.0 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "10.0k",
        "partNumber": "CRCW040210K0FKED",
        "packageReference": "0402",
        "schX": -4.67,
        "schY": -0.53,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_06_48v_buck_N2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "R19",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 60.4 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "60.4k",
        "partNumber": "CRCW040260K4FKED",
        "packageReference": "0402",
        "schX": -1.6,
        "schY": -0.4,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_06_48v_buck_N8"
          },
          "pin1": {
            "label": "1",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "R20",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 8.25 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "8.25k",
        "partNumber": "CRCW04028K25FKED",
        "packageReference": "0402",
        "schX": 4,
        "schY": 0,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_06_48v_buck_N14"
          },
          "pin1": {
            "label": "1",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "R21",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 9.09 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "9.09k",
        "partNumber": "CRCW04029K09FKED",
        "packageReference": "0402",
        "schX": 4.93,
        "schY": 0,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_06_48v_buck_N3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_BUCK_GND"
          }
        }
      },
      {
        "name": "U4",
        "kind": "chip",
        "libraryReference": "LM76003",
        "description": "SIMPLE SWITCHER 3.5V to 60V 3.5A Synchronous Step-Down Voltage Regulator, RNP0030B (WQFN-30)",
        "value": "LM76003RNPR",
        "partNumber": "LM76003RNPR",
        "packageReference": "RNP0030B",
        "schX": 0.27,
        "schY": -1.6,
        "schRotation": "0deg",
        "pins": {
          "pin13": {
            "label": "AGND",
            "net": "NET_BUCK_GND"
          },
          "pin14": {
            "label": "AGND",
            "net": "NET_BUCK_GND"
          },
          "pin15": {
            "label": "AGND",
            "net": "NET_BUCK_GND"
          },
          "pin9": {
            "label": "BIAS",
            "net": "NET_BUCK_GND"
          },
          "pin6": {
            "label": "CBOOT",
            "net": "NET_06_48v_buck_N1"
          },
          "pin18": {
            "label": "EN",
            "net": "NET_06_48v_buck_N2"
          },
          "pin12": {
            "label": "FB",
            "net": "NET_06_48v_buck_N3"
          },
          "pin7": {
            "label": "NC",
            "net": "NET_06_48v_buck_N4"
          },
          "pin19": {
            "label": "NC",
            "net": "NET_06_48v_buck_N5"
          },
          "pin23": {
            "label": "NC",
            "net": "NET_06_48v_buck_N6"
          },
          "pin27": {
            "label": "NC",
            "net": "NET_06_48v_buck_N7"
          },
          "pin28": {
            "label": "NC",
            "net": "NET_BUCK_GND"
          },
          "pin29": {
            "label": "NC",
            "net": "NET_BUCK_GND"
          },
          "pin30": {
            "label": "NC",
            "net": "NET_BUCK_GND"
          },
          "pin31": {
            "label": "PAD",
            "net": "NET_BUCK_GND"
          },
          "pin26": {
            "label": "PGND",
            "net": "NET_BUCK_GND"
          },
          "pin24": {
            "label": "PGND",
            "net": "NET_BUCK_GND"
          },
          "pin25": {
            "label": "PGND",
            "net": "NET_BUCK_GND"
          },
          "pin16": {
            "label": "PGOOD",
            "net": "NET_PG_24V12V"
          },
          "pin20": {
            "label": "PVIN",
            "net": "NET_48V_Vin"
          },
          "pin21": {
            "label": "PVIN",
            "net": "NET_48V_Vin"
          },
          "pin22": {
            "label": "PVIN",
            "net": "NET_48V_Vin"
          },
          "pin10": {
            "label": "RT",
            "net": "NET_06_48v_buck_N8"
          },
          "pin11": {
            "label": "SS/TRK",
            "net": "NET_06_48v_buck_N9"
          },
          "pin5": {
            "label": "SW",
            "net": "NET_06_48v_buck_N10"
          },
          "pin1": {
            "label": "SW",
            "net": "NET_06_48v_buck_N10"
          },
          "pin2": {
            "label": "SW",
            "net": "NET_06_48v_buck_N10"
          },
          "pin3": {
            "label": "SW",
            "net": "NET_06_48v_buck_N10"
          },
          "pin4": {
            "label": "SW",
            "net": "NET_06_48v_buck_N10"
          },
          "pin17": {
            "label": "SYNC/MODE",
            "net": "NET_BUCK_GND"
          },
          "pin8": {
            "label": "VCC",
            "net": "NET_06_48v_buck_N11"
          }
        }
      }
    ]
  },
  {
    "name": "07_5v_supply",
    "title": "7 - LMZM33603 5 V supply",
    "source": "LMZM33603.SchDoc",
    "parts": [
      {
        "name": "C26",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 100 pF, 100 V, +/- 5%, C0G/NP0, 0603",
        "value": "100pF",
        "partNumber": "GRM1885C2A101JA01D",
        "packageReference": "0603",
        "schX": 0.8,
        "schY": -4.53,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_5V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_07_5v_supply_N6"
          }
        }
      },
      {
        "name": "C27",
        "kind": "capacitor",
        "libraryReference": "Cap_Polarized",
        "description": "CAP, TA, 10 uF, 35 V, +/- 10%, 0.3 ohm, SMD",
        "value": "10uF",
        "partNumber": "593D106X9035D2TE3",
        "packageReference": "7343-31",
        "schX": -8.13,
        "schY": -4.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "+",
            "net": "NET_24or12V_out"
          },
          "pin2": {
            "label": "-",
            "net": "NET_LMZM33603_GND"
          }
        }
      },
      {
        "name": "C28",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 uF, 50 V, +/- 10%, X7R, 1210",
        "value": "4.7uF",
        "partNumber": "GRM32ER71H475KA88L",
        "packageReference": "1210",
        "schX": -7.47,
        "schY": -4.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_24or12V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LMZM33603_GND"
          }
        }
      },
      {
        "name": "C29",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 16 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71C104KA01D",
        "packageReference": "0603",
        "schX": 1.33,
        "schY": -4.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_5V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LMZM33603_GND"
          }
        }
      },
      {
        "name": "C30",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 22 uF, 10 V, +/- 20%, X7R, 0805",
        "value": "22uF",
        "partNumber": "GRM21BZ71A226ME15L",
        "packageReference": "0805",
        "schX": 2,
        "schY": -4.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_5V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LMZM33603_GND"
          }
        }
      },
      {
        "name": "C31",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 22 uF, 10 V, +/- 20%, X7R, 0805",
        "value": "22uF",
        "partNumber": "GRM21BZ71A226ME15L",
        "packageReference": "0805",
        "schX": 2.67,
        "schY": -4.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_5V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LMZM33603_GND"
          }
        }
      },
      {
        "name": "C32",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 22 uF, 10 V, +/- 20%, X7R, 0805",
        "value": "22uF",
        "partNumber": "GRM21BZ71A226ME15L",
        "packageReference": "0805",
        "schX": 3.33,
        "schY": -4.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_5V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LMZM33603_GND"
          }
        }
      },
      {
        "name": "C33",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 22 uF, 10 V, +/- 20%, X7R, 0805",
        "value": "22uF",
        "partNumber": "GRM21BZ71A226ME15L",
        "packageReference": "0805",
        "schX": 4,
        "schY": -4.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_5V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LMZM33603_GND"
          }
        }
      },
      {
        "name": "D12",
        "kind": "led",
        "libraryReference": "LED_A2_K1",
        "description": "LED, Green, SMD",
        "value": "150060GS75000",
        "partNumber": "150060GS75000",
        "packageReference": "LED_0603",
        "schX": -5.6,
        "schY": -3.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_PG_5V"
          },
          "pin1": {
            "label": "K",
            "net": "NET_LMZM33603_GND"
          }
        }
      },
      {
        "name": "NT4",
        "kind": "nettie",
        "libraryReference": "Net-Tie",
        "description": "Single point connection between nets.",
        "value": "Net-Tie",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -8.4,
        "schY": -2.13,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LMZM33603_GND"
          }
        }
      },
      {
        "name": "R22",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 24.3 k, 1%, 0.1 W, 0603",
        "value": "24.3k",
        "partNumber": "CRCW060324K3FKEA",
        "packageReference": "0603",
        "schX": -5.6,
        "schY": -4.8,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_24or12V_out"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PG_5V"
          }
        }
      },
      {
        "name": "R23",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 100 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "100k",
        "partNumber": "CRCW0402100KFKED",
        "packageReference": "0402",
        "schX": -4.4,
        "schY": -4.8,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_24or12V_out"
          },
          "pin1": {
            "label": "1",
            "net": "NET_07_5v_supply_N3"
          }
        }
      },
      {
        "name": "R24",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 40.2 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "40.2k",
        "partNumber": "CRCW040240K2FKED",
        "packageReference": "0402",
        "schX": 0,
        "schY": -4.53,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_5V_out"
          },
          "pin1": {
            "label": "1",
            "net": "NET_07_5v_supply_N6"
          }
        }
      },
      {
        "name": "R25",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 20.5 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "20.5k",
        "partNumber": "CRCW040220K5FKED",
        "packageReference": "0402",
        "schX": -4.4,
        "schY": -3.33,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_07_5v_supply_N3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_LMZM33603_GND"
          }
        }
      },
      {
        "name": "R26",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 88.7 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "88.7k",
        "partNumber": "CRCW040288K7FKED",
        "packageReference": "0402",
        "schX": -3.87,
        "schY": -3.2,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_07_5v_supply_N4"
          },
          "pin1": {
            "label": "1",
            "net": "NET_07_5v_supply_N5"
          }
        }
      },
      {
        "name": "R27",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 10.0 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "10.0k",
        "partNumber": "CRCW040210K0FKED",
        "packageReference": "0402",
        "schX": 0.4,
        "schY": -3.2,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_07_5v_supply_N6"
          },
          "pin1": {
            "label": "1",
            "net": "NET_07_5v_supply_N5"
          }
        }
      },
      {
        "name": "U5",
        "kind": "chip",
        "libraryReference": "LMZM3360x",
        "description": "4V to 36V, 2A Step-Down DC/DC Power Module in Compact 7x9x4mm QFN Package, RLR0018A (B3QFN-18)",
        "value": "LMZM33603RLRR",
        "partNumber": "LMZM33603RLRR",
        "packageReference": "RLR0018A",
        "schX": -1.87,
        "schY": -4.53,
        "schRotation": "0deg",
        "pins": {
          "pin4": {
            "label": "VIN",
            "net": "NET_24or12V_out"
          },
          "pin5": {
            "label": "PGND",
            "net": "NET_LMZM33603_GND"
          },
          "pin12": {
            "label": "DNC",
            "net": "NET_07_5v_supply_N1"
          },
          "pin13": {
            "label": "DNC",
            "net": "NET_07_5v_supply_N2"
          },
          "pin17": {
            "label": "PGOOD",
            "net": "NET_PG_5V"
          },
          "pin2": {
            "label": "EN/SYNC",
            "net": "NET_07_5v_supply_N3"
          },
          "pin3": {
            "label": "RT",
            "net": "NET_07_5v_supply_N4"
          },
          "pin1": {
            "label": "AGND",
            "net": "NET_07_5v_supply_N5"
          },
          "pin18": {
            "label": "PGND",
            "net": "NET_LMZM33603_GND"
          },
          "pin14": {
            "label": "PGND",
            "net": "NET_LMZM33603_GND"
          },
          "pin15": {
            "label": "PGND",
            "net": "NET_LMZM33603_GND"
          },
          "pin16": {
            "label": "FB",
            "net": "NET_07_5v_supply_N6"
          },
          "pin9": {
            "label": "SW",
            "net": "NET_07_5v_supply_N7"
          },
          "pin10": {
            "label": "SW",
            "net": "NET_07_5v_supply_N7"
          },
          "pin11": {
            "label": "SW",
            "net": "NET_07_5v_supply_N7"
          },
          "pin6": {
            "label": "VOUT",
            "net": "NET_5V_out"
          },
          "pin7": {
            "label": "VOUT",
            "net": "NET_5V_out"
          },
          "pin8": {
            "label": "VOUT",
            "net": "NET_5V_out"
          }
        }
      }
    ]
  },
  {
    "name": "08_phy_supply",
    "title": "8 - LMZ10500 PHY supply",
    "source": "LMZ10500.SchDoc",
    "parts": [
      {
        "name": "C34",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": -4.4,
        "schY": 0.27,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_5V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "C35",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 16 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71C104KA01D",
        "packageReference": "0603",
        "schX": -3.87,
        "schY": 0.27,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_5V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "C36",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 16 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71C104KA01D",
        "packageReference": "0603",
        "schX": 0.4,
        "schY": 0.27,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_Local_3V3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "C37",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 uF, 16 V,+/- 10%, X7R, 0603",
        "value": "4.7uF",
        "partNumber": "GRM188Z71C475KE21D",
        "packageReference": "0603",
        "schX": 0.93,
        "schY": 0.27,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_Local_3V3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "C38",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": 1.47,
        "schY": 0.27,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_Local_3V3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "C39",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 470 pF, 50 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0402",
        "value": "470pF",
        "partNumber": "GCM155R71H471KA37D",
        "packageReference": "0402",
        "schX": -2.67,
        "schY": 0.93,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_08_phy_supply_N2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_SGNDa"
          }
        }
      },
      {
        "name": "C40",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": -4.4,
        "schY": -2.8,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_5V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "C41",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 16 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71C104KA01D",
        "packageReference": "0603",
        "schX": -3.87,
        "schY": -2.8,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_5V_out"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "C42",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 16 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71C104KA01D",
        "packageReference": "0603",
        "schX": 0.4,
        "schY": -2.8,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_Local_1V"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "C43",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 uF, 16 V,+/- 10%, X7R, 0603",
        "value": "4.7uF",
        "partNumber": "GRM188Z71C475KE21D",
        "packageReference": "0603",
        "schX": 0.93,
        "schY": -2.8,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_Local_1V"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "C44",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": 1.47,
        "schY": -2.8,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_Local_1V"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "C45",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 470 pF, 50 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0402",
        "value": "470pF",
        "partNumber": "GCM155R71H471KA37D",
        "packageReference": "0402",
        "schX": -2.67,
        "schY": -2.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_08_phy_supply_N5"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_SGNDb"
          }
        }
      },
      {
        "name": "D13",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Green, SMD",
        "value": "Green",
        "partNumber": "LTST-C190KGKT",
        "packageReference": "1.6x0.8x0.8mm",
        "schX": 2.27,
        "schY": 0.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_PG_Local_3V3"
          },
          "pin2": {
            "label": "K",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "NT6",
        "kind": "nettie",
        "libraryReference": "Net-Tie",
        "description": "Single point connection between nets.",
        "value": "Net-Tie",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -4.4,
        "schY": 2.53,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_GND"
          }
        }
      },
      {
        "name": "NT7a",
        "kind": "nettie",
        "libraryReference": "Net-Tie",
        "description": "Single point connection between nets.",
        "value": "Net-Tie",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -2.93,
        "schY": 2.53,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_LM10500_GND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_SGNDa"
          }
        }
      },
      {
        "name": "NT7b",
        "kind": "nettie",
        "libraryReference": "Net-Tie",
        "description": "Single point connection between nets.",
        "value": "Net-Tie",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -2.93,
        "schY": 2.13,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_LM10500_GND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LM10500_SGNDb"
          }
        }
      },
      {
        "name": "R28",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 432, 1%, 0.1 W, AEC-Q200 Grade 0, 0603",
        "value": "432",
        "partNumber": "CRCW0603432RFKEA",
        "packageReference": "0603",
        "schX": 2.27,
        "schY": -0.13,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_Local_3V3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PG_Local_3V3"
          }
        }
      },
      {
        "name": "R29",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 118 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "118k",
        "partNumber": "CRCW0402118KFKED",
        "packageReference": "0402",
        "schX": -3.2,
        "schY": 0.13,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_08_phy_supply_N3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_08_phy_supply_N2"
          }
        }
      },
      {
        "name": "R30",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 150 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "150k",
        "partNumber": "CRCW0402150KFKED",
        "packageReference": "0402",
        "schX": -3.2,
        "schY": 0.8,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_08_phy_supply_N2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_LM10500_SGNDa"
          }
        }
      },
      {
        "name": "R31",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 86.6 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "86.6k",
        "partNumber": "CRCW040286K6FKED",
        "packageReference": "0402",
        "schX": -3.2,
        "schY": -2.93,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_08_phy_supply_N6"
          },
          "pin1": {
            "label": "1",
            "net": "NET_08_phy_supply_N5"
          }
        }
      },
      {
        "name": "R32",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 18.7 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "18.7k",
        "partNumber": "CRCW040218K7FKED",
        "packageReference": "0402",
        "schX": -3.2,
        "schY": -2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_08_phy_supply_N5"
          },
          "pin1": {
            "label": "1",
            "net": "NET_LM10500_SGNDb"
          }
        }
      },
      {
        "name": "TP8",
        "kind": "testpoint",
        "libraryReference": "5000",
        "description": "Test Point, Miniature, Red, TH",
        "value": "5000",
        "partNumber": "5000",
        "packageReference": "Red Miniature Testpoint",
        "schX": 2.27,
        "schY": -3.87,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_Local_1V"
          }
        }
      },
      {
        "name": "U6",
        "kind": "chip",
        "libraryReference": "LMZ10501",
        "description": "2.7V to 5.5V, 650mA High Density Nano Module, SIL0008A (USIP-8)",
        "value": "LMZ10500SILR",
        "partNumber": "LMZ10500SILR",
        "packageReference": "SIL0008A",
        "schX": -1.47,
        "schY": -0.13,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "EN",
            "net": "NET_08_phy_supply_N1"
          },
          "pin2": {
            "label": "VCON",
            "net": "NET_08_phy_supply_N2"
          },
          "pin3": {
            "label": "FB",
            "net": "NET_Local_3V3"
          },
          "pin4": {
            "label": "SGND",
            "net": "NET_LM10500_SGNDa"
          },
          "pin5": {
            "label": "VOUT",
            "net": "NET_Local_3V3"
          },
          "pin6": {
            "label": "PGND",
            "net": "NET_LM10500_GND"
          },
          "pin7": {
            "label": "VIN",
            "net": "NET_5V_out"
          },
          "pin8": {
            "label": "VREF",
            "net": "NET_08_phy_supply_N3"
          },
          "pin9": {
            "label": "PAD",
            "net": "NET_LM10500_SGNDa"
          }
        }
      },
      {
        "name": "U7",
        "kind": "chip",
        "libraryReference": "LMZ10501",
        "description": "2.7V to 5.5V, 650mA High Density Nano Module, SIL0008A (USIP-8)",
        "value": "LMZ10500SILR",
        "partNumber": "LMZ10500SILR",
        "packageReference": "SIL0008A",
        "schX": -1.47,
        "schY": -3.2,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "EN",
            "net": "NET_08_phy_supply_N4"
          },
          "pin2": {
            "label": "VCON",
            "net": "NET_08_phy_supply_N5"
          },
          "pin3": {
            "label": "FB",
            "net": "NET_Local_1V"
          },
          "pin4": {
            "label": "SGND",
            "net": "NET_LM10500_SGNDb"
          },
          "pin5": {
            "label": "VOUT",
            "net": "NET_Local_1V"
          },
          "pin6": {
            "label": "PGND",
            "net": "NET_LM10500_GND"
          },
          "pin7": {
            "label": "VIN",
            "net": "NET_5V_out"
          },
          "pin8": {
            "label": "VREF",
            "net": "NET_08_phy_supply_N6"
          },
          "pin9": {
            "label": "PAD",
            "net": "NET_LM10500_SGNDb"
          }
        }
      }
    ]
  },
  {
    "name": "09_msp_supply",
    "title": "9 - LP2951 MSP supply",
    "source": "LP2951.SchDoc",
    "parts": [
      {
        "name": "C46",
        "kind": "capacitor",
        "libraryReference": "Cap_Polarized",
        "description": "CAP, TA, 1 uF, 35 V, +/- 10%, 5 ohm, SMD",
        "value": "1uF",
        "partNumber": "293D105X9035B2TE3",
        "packageReference": "3528-21",
        "schX": -2,
        "schY": -0.27,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "+",
            "net": "NET_09_msp_supply_N4"
          },
          "pin2": {
            "label": "-",
            "net": "NET_LP2951_GND"
          }
        }
      },
      {
        "name": "C47",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": 2,
        "schY": -0.27,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_MSP_3V3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_LP2951_GND"
          }
        }
      },
      {
        "name": "D14",
        "kind": "diode",
        "libraryReference": "Zener",
        "description": "Diode, Zener, 30 V, 1 W, PowerDI123",
        "value": "30V",
        "partNumber": "DFLZ30-7",
        "packageReference": "PowerDI123",
        "schX": -3.07,
        "schY": -1.07,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "A",
            "net": "NET_09_msp_supply_N4"
          },
          "pin1": {
            "label": "K",
            "net": "NET_48V_Vin"
          }
        }
      },
      {
        "name": "D15",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Green, SMD",
        "value": "Green",
        "partNumber": "LTST-C190KGKT",
        "packageReference": "1.6x0.8x0.8mm",
        "schX": 2.93,
        "schY": 0.27,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_09_msp_supply_N5"
          },
          "pin2": {
            "label": "K",
            "net": "NET_LP2951_GND"
          }
        }
      },
      {
        "name": "R33",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 1.00, 1%, 0.1 W, 0603",
        "value": "1.00",
        "partNumber": "CRCW06031R00FKEA",
        "packageReference": "0603",
        "schX": 1.6,
        "schY": -1.07,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_09_msp_supply_N1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_MSP_3V3"
          }
        }
      },
      {
        "name": "R34",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 432, 1%, 0.1 W, AEC-Q200 Grade 0, 0603",
        "value": "432",
        "partNumber": "CRCW0603432RFKEA",
        "packageReference": "0603",
        "schX": 2.93,
        "schY": -0.53,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_MSP_3V3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_09_msp_supply_N5"
          }
        }
      },
      {
        "name": "U8",
        "kind": "chip",
        "libraryReference": "TI-LP2951-DRG8",
        "description": "Single Output LDO, 100 mA, Fixed 3.3 V Output, 3.7 to 30 V Input, -40 to 125 degC, 8-Pin SON (DRG), RoHS, Tape and Reel",
        "value": "LP2951-33DRGR",
        "partNumber": "LP2951-33DRGR",
        "packageReference": "DRG0008A",
        "schX": 0,
        "schY": -0.67,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "OUTPUT",
            "net": "NET_09_msp_supply_N1"
          },
          "pin2": {
            "label": "SENSE",
            "net": "NET_09_msp_supply_N1"
          },
          "pin3": {
            "label": "SHUTDOWN",
            "net": "NET_LP2951_GND"
          },
          "pin4": {
            "label": "GND",
            "net": "NET_LP2951_GND"
          },
          "pin5": {
            "label": "E\\R\\R\\O\\R\\",
            "net": "NET_09_msp_supply_N2"
          },
          "pin6": {
            "label": "VTAP",
            "net": "NET_09_msp_supply_N3"
          },
          "pin7": {
            "label": "FEEDBACK",
            "net": "NET_09_msp_supply_N3"
          },
          "pin8": {
            "label": "INPUT",
            "net": "NET_09_msp_supply_N4"
          },
          "pin9": {
            "label": "EP",
            "net": "NET_LP2951_GND"
          }
        }
      }
    ]
  },
  {
    "name": "10_current_sense",
    "title": "10 - INA180 current sense",
    "source": "INA180.SchDoc",
    "parts": [
      {
        "name": "C48",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 16 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "0.1uF",
        "partNumber": "GCM188R71C104KA37J",
        "packageReference": "0603",
        "schX": -1.87,
        "schY": -1.2,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_10_current_sense_N1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_INA_GND"
          }
        }
      },
      {
        "name": "C49",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4.7 uF, 16 V, +/- 20%, X5R, 0402",
        "value": "4.7uF",
        "partNumber": "GRM155R61C475ME15",
        "packageReference": "0402",
        "schX": -4.27,
        "schY": -0.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_10_current_sense_N3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_10_current_sense_N4"
          }
        }
      },
      {
        "name": "NT9",
        "kind": "nettie",
        "libraryReference": "Net-Tie",
        "description": "Single point connection between nets.",
        "value": "Net-Tie",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -0.4,
        "schY": 0.53,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_GND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_INA_GND"
          }
        }
      },
      {
        "name": "R35",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 4.75, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "4.75",
        "partNumber": "CRCW04024R75FKED",
        "packageReference": "0402",
        "schX": -4.8,
        "schY": -0.67,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_10_current_sense_N3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_IN"
          }
        }
      },
      {
        "name": "R36",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 1.00 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "1.00k",
        "partNumber": "CRCW04021K00FKED",
        "packageReference": "0402",
        "schX": 1.47,
        "schY": -0.67,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_Local_I"
          },
          "pin1": {
            "label": "1",
            "net": "NET_10_current_sense_N2"
          }
        }
      },
      {
        "name": "R37",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 4.75, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "4.75",
        "partNumber": "CRCW04024R75FKED",
        "packageReference": "0402",
        "schX": -4.8,
        "schY": 0.27,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_10_current_sense_N4"
          },
          "pin1": {
            "label": "1",
            "net": "NET_IN"
          }
        }
      },
      {
        "name": "R106",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 4.75, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "4.75",
        "partNumber": "CRCW04024R75FKED",
        "packageReference": "0402",
        "schX": -2.27,
        "schY": -0.67,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_10_current_sense_N1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_MSP_3V3"
          }
        }
      },
      {
        "name": "U9",
        "kind": "chip",
        "libraryReference": "INA180",
        "description": "Low- and High-Side Measurement, Multichannel, Voltage Output, Current-Sense Amplifier, DBV0005A (SOT-5)",
        "value": "INA180A2IDBV",
        "partNumber": "INA180A2IDBV",
        "packageReference": "DBV0005A",
        "schX": -0.27,
        "schY": -0.4,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "OUT",
            "net": "NET_10_current_sense_N2"
          },
          "pin2": {
            "label": "GND",
            "net": "NET_INA_GND"
          },
          "pin3": {
            "label": "IN+",
            "net": "NET_10_current_sense_N3"
          },
          "pin4": {
            "label": "IN-",
            "net": "NET_10_current_sense_N4"
          },
          "pin5": {
            "label": "VS",
            "net": "NET_10_current_sense_N1"
          }
        }
      }
    ]
  },
  {
    "name": "11_led_driver",
    "title": "11 - TLC6C598-Q1 LED driver",
    "source": "TLC6C598_Q1.SchDoc",
    "parts": [
      {
        "name": "C51",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 16 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71C104KA01D",
        "packageReference": "0603",
        "schX": -1.2,
        "schY": 1.33,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_U12_3V3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_ILIM_GND"
          }
        }
      },
      {
        "name": "D16",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Green, SMD",
        "value": "Green",
        "partNumber": "LTST-C190KGKT",
        "packageReference": "1.6x0.8x0.8mm",
        "schX": -5.73,
        "schY": 2.13,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_11_led_driver_N6"
          },
          "pin2": {
            "label": "K",
            "net": "NET_ILIM_GND"
          }
        }
      },
      {
        "name": "J14",
        "kind": "jumper",
        "libraryReference": "Header_3x1",
        "description": "Header, 2.54mm, 3x1, Gold, TH",
        "value": "SL1111203G",
        "partNumber": "SL 11 112 03G",
        "packageReference": "TH, 3-Leads, Body 2.5x7.62mm, Pitch 2.54mm",
        "schX": -5.47,
        "schY": -1.33,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_11_led_driver_N3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_11_led_driver_N4"
          },
          "pin3": {
            "label": "3",
            "net": "NET_11_led_driver_N5"
          }
        }
      },
      {
        "name": "R38",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 7.50 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "7.50k",
        "partNumber": "CRCW04027K50FKED",
        "packageReference": "0402",
        "schX": 3.6,
        "schY": -2.4,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_ILIM1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_I1_1"
          }
        }
      },
      {
        "name": "R39",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 15.0 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "15.0k",
        "partNumber": "CRCW040215K0FKED",
        "packageReference": "0402",
        "schX": 3.6,
        "schY": -2,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_ILIM1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_I1_2"
          }
        }
      },
      {
        "name": "R40",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 30.1 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "30.1k",
        "partNumber": "CRCW040230K1FKED",
        "packageReference": "0402",
        "schX": 3.6,
        "schY": -1.6,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_ILIM1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_I1_3"
          }
        }
      },
      {
        "name": "R41",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 60.4 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "60.4k",
        "partNumber": "CRCW040260K4FKED",
        "packageReference": "0402",
        "schX": 3.6,
        "schY": -1.2,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_ILIM1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_I1_4"
          }
        }
      },
      {
        "name": "R42",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 60.4 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "60.4k",
        "partNumber": "CRCW040260K4FKED",
        "packageReference": "0402",
        "schX": 3.6,
        "schY": -0.8,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_ILIM1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_ILIM_GND"
          }
        }
      },
      {
        "name": "R43",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 11.3 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "11.3k",
        "partNumber": "CRCW040211K3FKED",
        "packageReference": "0402",
        "schX": 3.6,
        "schY": 0.13,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_ILIM2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_I1_5"
          }
        }
      },
      {
        "name": "R44",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22.6 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22.6k",
        "partNumber": "CRCW040222K6FKED",
        "packageReference": "0402",
        "schX": 3.6,
        "schY": 0.53,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_ILIM2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_I1_6"
          }
        }
      },
      {
        "name": "R45",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 45.3 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "45.3k",
        "partNumber": "CRCW040245K3FKED",
        "packageReference": "0402",
        "schX": 3.6,
        "schY": 0.93,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_ILIM2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_I1_7"
          }
        }
      },
      {
        "name": "R46",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 90.9 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "90.9k",
        "partNumber": "CRCW040290K9FKED",
        "packageReference": "0402",
        "schX": 3.6,
        "schY": 1.33,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_ILIM2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_I1_8"
          }
        }
      },
      {
        "name": "R47",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 432, 1%, 0.1 W, AEC-Q200 Grade 0, 0603",
        "value": "432",
        "partNumber": "CRCW0603432RFKEA",
        "packageReference": "0603",
        "schX": -5.73,
        "schY": 1.33,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_SER_IN"
          },
          "pin1": {
            "label": "1",
            "net": "NET_11_led_driver_N6"
          }
        }
      },
      {
        "name": "R48",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 90.9 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "90.9k",
        "partNumber": "CRCW040290K9FKED",
        "packageReference": "0402",
        "schX": 3.6,
        "schY": 1.73,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_ILIM2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_ILIM_GND"
          }
        }
      },
      {
        "name": "R105",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 432, 1%, 0.1 W, AEC-Q200 Grade 0, 0603",
        "value": "432",
        "partNumber": "CRCW0603432RFKEA",
        "packageReference": "0603",
        "schX": -2.4,
        "schY": 0.4,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_MSP_3V3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_U12_3V3"
          }
        }
      },
      {
        "name": "U10",
        "kind": "chip",
        "libraryReference": "SW_BCD_P36",
        "description": "Switch, Rotary dip, 10POS, BCD, 24V, SMT",
        "value": "P36S101",
        "partNumber": "P36S101",
        "packageReference": "Switch, 7.4x3.8x7.4mm",
        "schX": -1.07,
        "schY": -3.87,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_I1_4"
          },
          "pin2": {
            "label": "2",
            "net": "NET_I1_3"
          },
          "pin4": {
            "label": "4",
            "net": "NET_I1_2"
          },
          "pin8": {
            "label": "8",
            "net": "NET_I1_1"
          },
          "pin9": {
            "label": "C1",
            "net": "NET_ILIM_GND"
          },
          "pin10": {
            "label": "C2",
            "net": "NET_ILIM_GND"
          }
        }
      },
      {
        "name": "U11",
        "kind": "chip",
        "libraryReference": "SW_BCD_P36",
        "description": "Switch, Rotary dip, 10POS, BCD, 24V, SMT",
        "value": "P36S101",
        "partNumber": "P36S101",
        "packageReference": "Switch, 7.4x3.8x7.4mm",
        "schX": 2,
        "schY": -3.87,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_I1_8"
          },
          "pin2": {
            "label": "2",
            "net": "NET_I1_7"
          },
          "pin4": {
            "label": "4",
            "net": "NET_I1_6"
          },
          "pin8": {
            "label": "8",
            "net": "NET_I1_5"
          },
          "pin9": {
            "label": "C1",
            "net": "NET_ILIM_GND"
          },
          "pin10": {
            "label": "C2",
            "net": "NET_ILIM_GND"
          }
        }
      },
      {
        "name": "U12",
        "kind": "chip",
        "libraryReference": "TI-TLC6C598-Q1-16",
        "description": "Automotive Power Logic 8-Bit Shift Register LED Driver, PW0016A, LARGE T&R",
        "value": "TLC6C598QPWRQ1",
        "partNumber": "TLC6C598QPWRQ1",
        "packageReference": "PW0016A",
        "schX": 0.27,
        "schY": -0.27,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "VCC",
            "net": "NET_U12_3V3"
          },
          "pin10": {
            "label": "RCK",
            "net": "NET_RCK"
          },
          "pin11": {
            "label": "DRAIN4",
            "net": "NET_I1_5"
          },
          "pin12": {
            "label": "DRAIN5",
            "net": "NET_I1_6"
          },
          "pin13": {
            "label": "DRAIN6",
            "net": "NET_I1_7"
          },
          "pin14": {
            "label": "DRAIN7",
            "net": "NET_I1_8"
          },
          "pin15": {
            "label": "SRCK",
            "net": "NET_SRCK"
          },
          "pin16": {
            "label": "GND",
            "net": "NET_ILIM_GND"
          },
          "pin2": {
            "label": "SER IN",
            "net": "NET_SER_IN"
          },
          "pin3": {
            "label": "DRAIN0",
            "net": "NET_I1_1"
          },
          "pin4": {
            "label": "DRAIN1",
            "net": "NET_I1_2"
          },
          "pin5": {
            "label": "DRAIN2",
            "net": "NET_I1_3"
          },
          "pin6": {
            "label": "DRAIN3",
            "net": "NET_I1_4"
          },
          "pin7": {
            "label": "C\\L\\R\\",
            "net": "NET_U12_3V3"
          },
          "pin8": {
            "label": "G\\",
            "net": "NET_11_led_driver_N1"
          },
          "pin9": {
            "label": "SER OUT",
            "net": "NET_11_led_driver_N2"
          }
        }
      }
    ]
  },
  {
    "name": "12_data_top",
    "title": "12 - Data top level",
    "source": "T1_Data_Top_Level.SchDoc",
    "parts": [
      {
        "name": "C52",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 27 pF, 50 V, +/- 5%, C0G/NP0, 0603",
        "value": "27pF",
        "partNumber": "GRM1885C1H270JA01D",
        "packageReference": "0603",
        "schX": 7.07,
        "schY": -1.2,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_XO1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C53",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 27 pF, 50 V, +/- 5%, C0G/NP0, 0603",
        "value": "27pF",
        "partNumber": "GRM1885C1H270JA01D",
        "packageReference": "0603",
        "schX": 7.73,
        "schY": -1.2,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_12_data_top_N1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "D17",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Green, SMD",
        "value": "Green",
        "partNumber": "LG L29K-G2J1-24-Z",
        "packageReference": "1.7x0.65x0.8mm",
        "schX": -4.13,
        "schY": 2.93,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_12_data_top_N2"
          },
          "pin2": {
            "label": "K",
            "net": "NET_PRU0_MII_RXLINK1"
          }
        }
      },
      {
        "name": "D18",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Yellow, SMD",
        "value": "Yellow",
        "partNumber": "LY L29K-J1K2-26-Z",
        "packageReference": "LED, 1.3x0.65x0.8mm",
        "schX": -2.8,
        "schY": 2.93,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_12_data_top_N5"
          },
          "pin2": {
            "label": "K",
            "net": "NET_PHY_LED1_1"
          }
        }
      },
      {
        "name": "D19",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Green, SMD",
        "value": "Green",
        "partNumber": "LG L29K-G2J1-24-Z",
        "packageReference": "1.7x0.65x0.8mm",
        "schX": 6,
        "schY": 2.93,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_12_data_top_N6"
          },
          "pin2": {
            "label": "K",
            "net": "NET_PRU0_MII_RXLINK2"
          }
        }
      },
      {
        "name": "D20",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Yellow, SMD",
        "value": "Yellow",
        "partNumber": "LY L29K-J1K2-26-Z",
        "packageReference": "LED, 1.3x0.65x0.8mm",
        "schX": 7.33,
        "schY": 2.93,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_12_data_top_N9"
          },
          "pin2": {
            "label": "K",
            "net": "NET_PHY_LED1_2"
          }
        }
      },
      {
        "name": "D21",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Green, SMD",
        "value": "Green",
        "partNumber": "LG L29K-G2J1-24-Z",
        "packageReference": "1.7x0.65x0.8mm",
        "schX": -4.13,
        "schY": 4,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_PRU0_MII_RXLINK1"
          },
          "pin2": {
            "label": "K",
            "net": "NET_12_data_top_N3"
          }
        }
      },
      {
        "name": "D22",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Yellow, SMD",
        "value": "Yellow",
        "partNumber": "LY L29K-J1K2-26-Z",
        "packageReference": "LED, 1.3x0.65x0.8mm",
        "schX": -2.8,
        "schY": 4,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_PHY_LED1_1"
          },
          "pin2": {
            "label": "K",
            "net": "NET_12_data_top_N4"
          }
        }
      },
      {
        "name": "D23",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Green, SMD",
        "value": "Green",
        "partNumber": "LG L29K-G2J1-24-Z",
        "packageReference": "1.7x0.65x0.8mm",
        "schX": 6,
        "schY": 4,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_PRU0_MII_RXLINK2"
          },
          "pin2": {
            "label": "K",
            "net": "NET_12_data_top_N7"
          }
        }
      },
      {
        "name": "D24",
        "kind": "led",
        "libraryReference": "LED",
        "description": "LED, Yellow, SMD",
        "value": "Yellow",
        "partNumber": "LY L29K-J1K2-26-Z",
        "packageReference": "LED, 1.3x0.65x0.8mm",
        "schX": 7.33,
        "schY": 4,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "A",
            "net": "NET_PHY_LED1_2"
          },
          "pin2": {
            "label": "K",
            "net": "NET_12_data_top_N8"
          }
        }
      },
      {
        "name": "R49",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 0, 5%, 0.063 W, 0402",
        "value": "0",
        "partNumber": "CRCW04020000Z0ED",
        "packageReference": "0402",
        "schX": 7.07,
        "schY": -2.53,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_12_data_top_N1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_XI1"
          }
        }
      },
      {
        "name": "R50",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 6.4,
        "schY": -1.2,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_CLKOUT2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R51",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -8.13,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXDV1"
          }
        }
      },
      {
        "name": "R52",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -7.47,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXER1"
          }
        }
      },
      {
        "name": "R53",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -6.8,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D0_1"
          }
        }
      },
      {
        "name": "R54",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -6.13,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D1_1"
          }
        }
      },
      {
        "name": "R55",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -5.47,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D2_1"
          }
        }
      },
      {
        "name": "R56",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -4.8,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXLINK1"
          }
        }
      },
      {
        "name": "R57",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 560, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "560",
        "partNumber": "CRCW0402560RJNED",
        "packageReference": "0402",
        "schX": -4.13,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_12_data_top_N2"
          }
        }
      },
      {
        "name": "R58",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -3.47,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PHY_LED1_1"
          }
        }
      },
      {
        "name": "R59",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 560, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "560",
        "partNumber": "CRCW0402560RJNED",
        "packageReference": "0402",
        "schX": -2.8,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_12_data_top_N5"
          }
        }
      },
      {
        "name": "R60",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 2,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXDV2"
          }
        }
      },
      {
        "name": "R61",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 2.67,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXER2"
          }
        }
      },
      {
        "name": "R62",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 3.33,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D0_2"
          }
        }
      },
      {
        "name": "R63",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 4,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D1_2"
          }
        }
      },
      {
        "name": "R64",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 4.67,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D2_2"
          }
        }
      },
      {
        "name": "R65",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 5.33,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXLINK2"
          }
        }
      },
      {
        "name": "R66",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 560, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "560",
        "partNumber": "CRCW0402560RJNED",
        "packageReference": "0402",
        "schX": 6,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_12_data_top_N6"
          }
        }
      },
      {
        "name": "R67",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 6.67,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PHY_LED1_2"
          }
        }
      },
      {
        "name": "R68",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 560, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "560",
        "partNumber": "CRCW0402560RJNED",
        "packageReference": "0402",
        "schX": 7.33,
        "schY": 2.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_12_data_top_N9"
          }
        }
      },
      {
        "name": "R69",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -8.13,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RXDV1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R70",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -7.47,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RXER1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R71",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -6.8,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RX_D0_1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R72",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -6.13,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RX_D1_1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R73",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -5.47,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RX_D2_1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R74",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -4.8,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RXLINK1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R75",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 560, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "560",
        "partNumber": "CRCW0402560RJNED",
        "packageReference": "0402",
        "schX": -4.13,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_12_data_top_N3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R76",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -3.47,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_LED1_1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R77",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 560, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "560",
        "partNumber": "CRCW0402560RJNED",
        "packageReference": "0402",
        "schX": -2.8,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_12_data_top_N4"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R78",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 2,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RXDV2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R79",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 2.67,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RXER2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R80",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 3.33,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RX_D0_2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R81",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 4,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RX_D1_2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R82",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 4.67,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RX_D2_2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R83",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 5.33,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PRU0_MII_RXLINK2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R84",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 560, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "560",
        "partNumber": "CRCW0402560RJNED",
        "packageReference": "0402",
        "schX": 6,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_12_data_top_N7"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R85",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 6.67,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_LED1_2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R86",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 560, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "560",
        "partNumber": "CRCW0402560RJNED",
        "packageReference": "0402",
        "schX": 7.33,
        "schY": 4.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_12_data_top_N8"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "Y1",
        "kind": "crystal",
        "libraryReference": "Xtal",
        "description": "Crystal, 25 MHz, 18 pF, SMD",
        "value": "ABM3-25.000MHZ-D2Y-T",
        "partNumber": "ABM3-25.000MHZ-D2Y-T",
        "packageReference": "ABM3",
        "schX": 7.33,
        "schY": -2,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "OSC1",
            "net": "NET_XO1"
          },
          "pin2": {
            "label": "OSC2",
            "net": "NET_12_data_top_N1"
          }
        }
      }
    ]
  },
  {
    "name": "13_phy_p1",
    "title": "13 - 100BASE-T1 PHY P1",
    "source": "T1_PHY.SchDoc",
    "parts": [
      {
        "name": "C54_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": -6.53,
        "schY": -3.87,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_VDDIO"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C55_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 1 uF, 25 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "1uF",
        "partNumber": "GCM188R71E105KA64D",
        "packageReference": "0603",
        "schX": -6,
        "schY": -3.87,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_VDDIO"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C56_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 25 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71E104KA01D",
        "packageReference": "0603",
        "schX": -5.47,
        "schY": -3.87,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_VDDIO"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C57_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.01 uF, 50 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "0.01uF",
        "partNumber": "GCM188R71H103KA37D",
        "packageReference": "0603",
        "schX": -4.93,
        "schY": -3.87,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_VDDIO"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C58_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 47 pF, 50 V, +/- 5%, C0G/NP0, AEC-Q200 Grade 1, 0603",
        "value": "47pF",
        "partNumber": "CGA3E2C0G1H470J080AA",
        "packageReference": "0603",
        "schX": 4.13,
        "schY": -3.2,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N18"
          }
        }
      },
      {
        "name": "C59_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": -6.53,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C60_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 1 uF, 25 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "1uF",
        "partNumber": "GCM188R71E105KA64D",
        "packageReference": "0603",
        "schX": -6,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C61_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 25 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71E104KA01D",
        "packageReference": "0603",
        "schX": -5.47,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C62_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.01 uF, 50 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "0.01uF",
        "partNumber": "GCM188R71H103KA37D",
        "packageReference": "0603",
        "schX": -4.93,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C63_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 22 pF, 100 V, +/- 5%, C0G/NP0, 0603",
        "value": "22pF",
        "partNumber": "GRM1885C2A220JA01D",
        "packageReference": "0603",
        "schX": 3.6,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N18"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D_P_P1"
          }
        }
      },
      {
        "name": "C64_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 100 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R72A104KA35J",
        "packageReference": "0603",
        "schX": 7.2,
        "schY": -2.27,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PHY_P_P1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D1B_P_P1"
          }
        }
      },
      {
        "name": "C65_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": -5.47,
        "schY": -1.6,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C66_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 25 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71E104KA01D",
        "packageReference": "0603",
        "schX": -4.93,
        "schY": -1.6,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C67_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 100 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R72A104KA35J",
        "packageReference": "0603",
        "schX": 7.2,
        "schY": -1.07,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PHY_N_P1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D1B_N_P1"
          }
        }
      },
      {
        "name": "C68_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 22 pF, 100 V, +/- 5%, C0G/NP0, 0603",
        "value": "22pF",
        "partNumber": "GRM1885C2A220JA01D",
        "packageReference": "0603",
        "schX": 3.6,
        "schY": -0.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_D_N_P1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N19"
          }
        }
      },
      {
        "name": "C69_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 47 pF, 50 V, +/- 5%, C0G/NP0, AEC-Q200 Grade 1, 0603",
        "value": "47pF",
        "partNumber": "CGA3E2C0G1H470J080AA",
        "packageReference": "0603",
        "schX": 4.13,
        "schY": 0,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N19"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C70_P1",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4700 pF, 100 V,+/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "4700pF",
        "partNumber": "GCM188R72A472KA37D",
        "packageReference": "0603",
        "schX": 8,
        "schY": 0.53,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N17"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "J15_P1",
        "kind": "jumper",
        "libraryReference": "Header_3x1",
        "description": "Header, 2.54 mm, 3x1, Gold, TH",
        "value": "61300311121",
        "partNumber": "61300311121",
        "packageReference": "Header, 2.54mm, 3x1, TH",
        "schX": 7.6,
        "schY": -3.6,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N20"
          },
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N21"
          },
          "pin3": {
            "label": "3",
            "net": "NET_13_phy_p1_N22"
          }
        }
      },
      {
        "name": "L8_P1",
        "kind": "inductor",
        "libraryReference": "Ferrite_Bead",
        "description": "Ferrite Bead, 1000 ohm @ 100 MHz, 0.2 A, 0402",
        "value": "1000ohm",
        "partNumber": "742792796",
        "packageReference": "0402",
        "schX": -7.07,
        "schY": -4.27,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_VDDIO"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PHY_VDD"
          }
        }
      },
      {
        "name": "L9_P1",
        "kind": "inductor",
        "libraryReference": "Ferrite_Bead",
        "description": "Ferrite Bead, 1000 ohm @ 100 MHz, 0.2 A, 0402",
        "value": "1000ohm",
        "partNumber": "742792796",
        "packageReference": "0402",
        "schX": -7.07,
        "schY": -3.07,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PHY_VDD"
          }
        }
      },
      {
        "name": "L10_P1",
        "kind": "inductor",
        "libraryReference": "Inductor_Iron",
        "description": "Inductor, Multilayer, Air Core, 120 nH, 0.15 A, 1.3 ohm, SMD",
        "value": "120nH",
        "partNumber": "LQG15HSR12J02D",
        "packageReference": "0402 polarized",
        "schX": 4.13,
        "schY": -2.27,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_D_P_P1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D1A_P_P1"
          }
        }
      },
      {
        "name": "L11_P1",
        "kind": "inductor",
        "libraryReference": "Ferrite_Bead",
        "description": "Ferrite Bead, 1000 ohm @ 100 MHz, 0.2 A, 0402",
        "value": "1000ohm",
        "partNumber": "742792796",
        "packageReference": "0402",
        "schX": -6.13,
        "schY": -2,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PHY_VDD_1V"
          }
        }
      },
      {
        "name": "L12_P1",
        "kind": "chip",
        "libraryReference": "SYM-DLW32MH201XK2",
        "description": "200µH @ 100kHz 2 Line Common Mode Choke Surface Mount 70mA DCR 4.8 Ohm",
        "value": "DLW32MH201XK2",
        "partNumber": "DLW32MH201XK2",
        "packageReference": "1210",
        "schX": 5.73,
        "schY": -1.47,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_D1A_P_P1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D1B_P_P1"
          },
          "pin3": {
            "label": "3",
            "net": "NET_D1B_N_P1"
          },
          "pin4": {
            "label": "4",
            "net": "NET_D1A_N_P1"
          }
        }
      },
      {
        "name": "L13_P1",
        "kind": "inductor",
        "libraryReference": "Inductor_Iron",
        "description": "Inductor, Multilayer, Air Core, 120 nH, 0.15 A, 1.3 ohm, SMD",
        "value": "120nH",
        "partNumber": "LQG15HSR12J02D",
        "packageReference": "0402 polarized",
        "schX": 4.13,
        "schY": -1.07,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_D_N_P1"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D1A_N_P1"
          }
        }
      },
      {
        "name": "R87_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 27.0, 1%, 0.1 W, 0603",
        "value": "27.0",
        "partNumber": "RC0603FR-0727RL",
        "packageReference": "0603",
        "schX": 4.67,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N18"
          },
          "pin1": {
            "label": "1",
            "net": "NET_D1A_P_P1"
          }
        }
      },
      {
        "name": "R88_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -0.13,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_INH_P1"
          }
        }
      },
      {
        "name": "R89_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 0.27,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_INT_P1"
          }
        }
      },
      {
        "name": "R90_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 0.67,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RESETn_P1"
          }
        }
      },
      {
        "name": "R91_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 1.07,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N1"
          }
        }
      },
      {
        "name": "R92_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 0, 5%, 0.063 W, 0402",
        "value": "0",
        "partNumber": "CRCW04020000Z0ED",
        "packageReference": "0402",
        "schX": -4.13,
        "schY": -0.67,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N16"
          },
          "pin1": {
            "label": "1",
            "net": "NET_VDDIO"
          }
        }
      },
      {
        "name": "R93_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 27.0, 1%, 0.1 W, 0603",
        "value": "27.0",
        "partNumber": "RC0603FR-0727RL",
        "packageReference": "0603",
        "schX": 4.67,
        "schY": -0.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_D1A_N_P1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N19"
          }
        }
      },
      {
        "name": "R94_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": -0.53,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N15"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_TX_CLK_P1"
          }
        }
      },
      {
        "name": "R95_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 1.00 k, 1%, 0.1 W, AEC-Q200 Grade 0, 0603",
        "value": "1.00k",
        "partNumber": "CRCW06031K00FKEA",
        "packageReference": "0603",
        "schX": 7.6,
        "schY": -0.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_N_P1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N17"
          }
        }
      },
      {
        "name": "R96_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 1.00 k, 1%, 0.1 W, AEC-Q200 Grade 0, 0603",
        "value": "1.00k",
        "partNumber": "CRCW06031K00FKEA",
        "packageReference": "0603",
        "schX": 8,
        "schY": -0.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_P_P1"
          },
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p1_N17"
          }
        }
      },
      {
        "name": "R97_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 100 k, 1%, 0.25 W, AEC-Q200 Grade 0, 1206",
        "value": "100k",
        "partNumber": "CRCW1206100KFKEA",
        "packageReference": "1206",
        "schX": 7.6,
        "schY": 0.4,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N17"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R98_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 0.67,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N4"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXER_P1"
          }
        }
      },
      {
        "name": "R99_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 0.8,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N5"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXDV_P1"
          }
        }
      },
      {
        "name": "R100_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 0.93,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N14"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_CLK_P1"
          }
        }
      },
      {
        "name": "R101_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 1.33,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N13"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D0_P1"
          }
        }
      },
      {
        "name": "R102_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 1.47,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N12"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D1_P1"
          }
        }
      },
      {
        "name": "R103_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 1.6,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N11"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D2_P1"
          }
        }
      },
      {
        "name": "R104_P1",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 1.73,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p1_N10"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D3_P1"
          }
        }
      },
      {
        "name": "TP9_P1",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -7.47,
        "schY": -0.67,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_TX_CLK_P1"
          }
        }
      },
      {
        "name": "TP10_P1",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -7.2,
        "schY": -0.53,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_TX_EN_P1"
          }
        }
      },
      {
        "name": "TP11_P1",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -6.93,
        "schY": -0.27,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_TX_D0_P1"
          }
        }
      },
      {
        "name": "TP12_P1",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -7.47,
        "schY": 0.53,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXER_P1"
          }
        }
      },
      {
        "name": "TP13_P1",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -7.2,
        "schY": 0.67,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXDV_P1"
          }
        }
      },
      {
        "name": "TP14_P1",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -6.93,
        "schY": 0.8,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_CLK_P1"
          }
        }
      },
      {
        "name": "TP15_P1",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -6.8,
        "schY": 1.2,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D0_P1"
          }
        }
      },
      {
        "name": "U13_P1",
        "kind": "chip",
        "libraryReference": "DP83TC811-Q1",
        "description": "DP83TC811Q1, RND0036A (VQFNP-36)",
        "value": "DP83TC811RNDQ1",
        "partNumber": "DP83TC811RNDQ1",
        "packageReference": "RND0036A",
        "schX": -2.13,
        "schY": 0,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "MDC",
            "net": "NET_PRU0_MDC_P1"
          },
          "pin2": {
            "label": "\\INT",
            "net": "NET_PRU0_MII_INT_P1"
          },
          "pin3": {
            "label": "\\RESET",
            "net": "NET_PRU0_MII_RESETn_P1"
          },
          "pin4": {
            "label": "XO",
            "net": "NET_XO_P1"
          },
          "pin5": {
            "label": "XI",
            "net": "NET_XI_P1"
          },
          "pin6": {
            "label": "LED_1/GPIO_1",
            "net": "NET_PHY_LED1_P1"
          },
          "pin7": {
            "label": "EN",
            "net": "NET_13_phy_p1_N1"
          },
          "pin8": {
            "label": "WAKE",
            "net": "NET_13_phy_p1_N1"
          },
          "pin9": {
            "label": "NC",
            "net": "NET_13_phy_p1_N2"
          },
          "pin10": {
            "label": "INH",
            "net": "NET_PRU0_MII_INH_P1"
          },
          "pin11": {
            "label": "VDDA",
            "net": "NET_13_phy_p1_N3"
          },
          "pin12": {
            "label": "TRD_P",
            "net": "NET_D_P_P1"
          },
          "pin13": {
            "label": "TRD_N",
            "net": "NET_D_N_P1"
          },
          "pin14": {
            "label": "RX_ER",
            "net": "NET_13_phy_p1_N4"
          },
          "pin15": {
            "label": "RX_DV",
            "net": "NET_13_phy_p1_N5"
          },
          "pin16": {
            "label": "CLKOUT",
            "net": "NET_CLKOUT_P1"
          },
          "pin17": {
            "label": "TCK",
            "net": "NET_13_phy_p1_N6"
          },
          "pin18": {
            "label": "TDO",
            "net": "NET_13_phy_p1_N7"
          },
          "pin19": {
            "label": "TMS",
            "net": "NET_13_phy_p1_N8"
          },
          "pin20": {
            "label": "TDI",
            "net": "NET_13_phy_p1_N9"
          },
          "pin21": {
            "label": "NC",
            "net": "NET_13_phy_p1_N2"
          },
          "pin22": {
            "label": "VDDIO",
            "net": "NET_VDDIO"
          },
          "pin23": {
            "label": "RX_D3",
            "net": "NET_13_phy_p1_N10"
          },
          "pin24": {
            "label": "RX_D2",
            "net": "NET_13_phy_p1_N11"
          },
          "pin25": {
            "label": "RX_D1",
            "net": "NET_13_phy_p1_N12"
          },
          "pin26": {
            "label": "RX_D0",
            "net": "NET_13_phy_p1_N13"
          },
          "pin27": {
            "label": "RX_CLK",
            "net": "NET_13_phy_p1_N14"
          },
          "pin28": {
            "label": "TX_CLK",
            "net": "NET_13_phy_p1_N15"
          },
          "pin29": {
            "label": "TX_EN",
            "net": "NET_PRU0_MII_TX_EN_P1"
          },
          "pin30": {
            "label": "TX_D3",
            "net": "NET_PRU0_MII_TX_D3_P1"
          },
          "pin31": {
            "label": "TX_D2",
            "net": "NET_PRU0_MII_TX_D2_P1"
          },
          "pin32": {
            "label": "TX_D1",
            "net": "NET_PRU0_MII_TX_D1_P1"
          },
          "pin33": {
            "label": "TX_D0",
            "net": "NET_PRU0_MII_TX_D0_P1"
          },
          "pin34": {
            "label": "TX_ER",
            "net": "NET_13_phy_p1_N16"
          },
          "pin35": {
            "label": "LED_0/GPIO_0",
            "net": "NET_PRU0_MII_RXLINK_P1"
          },
          "pin36": {
            "label": "MDIO",
            "net": "NET_PRU0_MDIO_P1"
          },
          "pin37": {
            "label": "GND",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "U14_P1",
        "kind": "chip",
        "libraryReference": "TPD2E2U06-Q1",
        "description": "Automotive Dual-Channel High-Speed ESD Protection Device, DCK0003A (SOT-SC70-3)",
        "value": "TPD2E2U06QDCKRQ1",
        "partNumber": "TPD2E2U06QDCKRQ1",
        "packageReference": "DCK0003A",
        "schX": 5.73,
        "schY": 0,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "IO1",
            "net": "NET_D1A_P_P1"
          },
          "pin2": {
            "label": "IO2",
            "net": "NET_D1A_N_P1"
          },
          "pin3": {
            "label": "GND",
            "net": "NET_AGND"
          }
        }
      }
    ]
  },
  {
    "name": "13_phy_p2",
    "title": "13 - 100BASE-T1 PHY P2",
    "source": "T1_PHY.SchDoc",
    "parts": [
      {
        "name": "C54_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": -6.53,
        "schY": -3.87,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_VDDIO"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C55_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 1 uF, 25 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "1uF",
        "partNumber": "GCM188R71E105KA64D",
        "packageReference": "0603",
        "schX": -6,
        "schY": -3.87,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_VDDIO"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C56_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 25 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71E104KA01D",
        "packageReference": "0603",
        "schX": -5.47,
        "schY": -3.87,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_VDDIO"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C57_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.01 uF, 50 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "0.01uF",
        "partNumber": "GCM188R71H103KA37D",
        "packageReference": "0603",
        "schX": -4.93,
        "schY": -3.87,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_VDDIO"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C58_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 47 pF, 50 V, +/- 5%, C0G/NP0, AEC-Q200 Grade 1, 0603",
        "value": "47pF",
        "partNumber": "CGA3E2C0G1H470J080AA",
        "packageReference": "0603",
        "schX": 4.13,
        "schY": -3.2,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          },
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N18"
          }
        }
      },
      {
        "name": "C59_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": -6.53,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C60_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 1 uF, 25 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "1uF",
        "partNumber": "GCM188R71E105KA64D",
        "packageReference": "0603",
        "schX": -6,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C61_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 25 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71E104KA01D",
        "packageReference": "0603",
        "schX": -5.47,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C62_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.01 uF, 50 V, +/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "0.01uF",
        "partNumber": "GCM188R71H103KA37D",
        "packageReference": "0603",
        "schX": -4.93,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N3"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C63_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 22 pF, 100 V, +/- 5%, C0G/NP0, 0603",
        "value": "22pF",
        "partNumber": "GRM1885C2A220JA01D",
        "packageReference": "0603",
        "schX": 3.6,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N18"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D_P_P2"
          }
        }
      },
      {
        "name": "C64_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 100 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R72A104KA35J",
        "packageReference": "0603",
        "schX": 7.2,
        "schY": -2.27,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PHY_P_P2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D1B_P_P2"
          }
        }
      },
      {
        "name": "C65_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 10 uF, 10 V, +/- 20%, X7R, 0603",
        "value": "10uF",
        "partNumber": "GRM188Z71A106MA73D",
        "packageReference": "0603",
        "schX": -5.47,
        "schY": -1.6,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C66_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 25 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R71E104KA01D",
        "packageReference": "0603",
        "schX": -4.93,
        "schY": -1.6,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C67_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 0.1 uF, 100 V, +/- 10%, X7R, 0603",
        "value": "0.1uF",
        "partNumber": "GRM188R72A104KA35J",
        "packageReference": "0603",
        "schX": 7.2,
        "schY": -1.07,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PHY_N_P2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D1B_N_P2"
          }
        }
      },
      {
        "name": "C68_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 22 pF, 100 V, +/- 5%, C0G/NP0, 0603",
        "value": "22pF",
        "partNumber": "GRM1885C2A220JA01D",
        "packageReference": "0603",
        "schX": 3.6,
        "schY": -0.67,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_D_N_P2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N19"
          }
        }
      },
      {
        "name": "C69_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 47 pF, 50 V, +/- 5%, C0G/NP0, AEC-Q200 Grade 1, 0603",
        "value": "47pF",
        "partNumber": "CGA3E2C0G1H470J080AA",
        "packageReference": "0603",
        "schX": 4.13,
        "schY": 0,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N19"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "C70_P2",
        "kind": "capacitor",
        "libraryReference": "Capacitor",
        "description": "CAP, CERM, 4700 pF, 100 V,+/- 10%, X7R, AEC-Q200 Grade 1, 0603",
        "value": "4700pF",
        "partNumber": "GCM188R72A472KA37D",
        "packageReference": "0603",
        "schX": 8,
        "schY": 0.53,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N17"
          },
          "pin2": {
            "label": "2",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "J15_P2",
        "kind": "jumper",
        "libraryReference": "Header_3x1",
        "description": "Header, 2.54 mm, 3x1, Gold, TH",
        "value": "61300311121",
        "partNumber": "61300311121",
        "packageReference": "Header, 2.54mm, 3x1, TH",
        "schX": 7.6,
        "schY": -3.6,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N20"
          },
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N21"
          },
          "pin3": {
            "label": "3",
            "net": "NET_13_phy_p2_N22"
          }
        }
      },
      {
        "name": "L8_P2",
        "kind": "inductor",
        "libraryReference": "Ferrite_Bead",
        "description": "Ferrite Bead, 1000 ohm @ 100 MHz, 0.2 A, 0402",
        "value": "1000ohm",
        "partNumber": "742792796",
        "packageReference": "0402",
        "schX": -7.07,
        "schY": -4.27,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_VDDIO"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PHY_VDD"
          }
        }
      },
      {
        "name": "L9_P2",
        "kind": "inductor",
        "libraryReference": "Ferrite_Bead",
        "description": "Ferrite Bead, 1000 ohm @ 100 MHz, 0.2 A, 0402",
        "value": "1000ohm",
        "partNumber": "742792796",
        "packageReference": "0402",
        "schX": -7.07,
        "schY": -3.07,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N3"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PHY_VDD"
          }
        }
      },
      {
        "name": "L10_P2",
        "kind": "inductor",
        "libraryReference": "Inductor_Iron",
        "description": "Inductor, Multilayer, Air Core, 120 nH, 0.15 A, 1.3 ohm, SMD",
        "value": "120nH",
        "partNumber": "LQG15HSR12J02D",
        "packageReference": "0402 polarized",
        "schX": 4.13,
        "schY": -2.27,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_D_P_P2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D1A_P_P2"
          }
        }
      },
      {
        "name": "L11_P2",
        "kind": "inductor",
        "libraryReference": "Ferrite_Bead",
        "description": "Ferrite Bead, 1000 ohm @ 100 MHz, 0.2 A, 0402",
        "value": "1000ohm",
        "partNumber": "742792796",
        "packageReference": "0402",
        "schX": -6.13,
        "schY": -2,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PHY_VDD_1V"
          }
        }
      },
      {
        "name": "L12_P2",
        "kind": "chip",
        "libraryReference": "SYM-DLW32MH201XK2",
        "description": "200µH @ 100kHz 2 Line Common Mode Choke Surface Mount 70mA DCR 4.8 Ohm",
        "value": "DLW32MH201XK2",
        "partNumber": "DLW32MH201XK2",
        "packageReference": "1210",
        "schX": 5.73,
        "schY": -1.47,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_D1A_P_P2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D1B_P_P2"
          },
          "pin3": {
            "label": "3",
            "net": "NET_D1B_N_P2"
          },
          "pin4": {
            "label": "4",
            "net": "NET_D1A_N_P2"
          }
        }
      },
      {
        "name": "L13_P2",
        "kind": "inductor",
        "libraryReference": "Inductor_Iron",
        "description": "Inductor, Multilayer, Air Core, 120 nH, 0.15 A, 1.3 ohm, SMD",
        "value": "120nH",
        "partNumber": "LQG15HSR12J02D",
        "packageReference": "0402 polarized",
        "schX": 4.13,
        "schY": -1.07,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_D_N_P2"
          },
          "pin2": {
            "label": "2",
            "net": "NET_D1A_N_P2"
          }
        }
      },
      {
        "name": "R87_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 27.0, 1%, 0.1 W, 0603",
        "value": "27.0",
        "partNumber": "RC0603FR-0727RL",
        "packageReference": "0603",
        "schX": 4.67,
        "schY": -2.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N18"
          },
          "pin1": {
            "label": "1",
            "net": "NET_D1A_P_P2"
          }
        }
      },
      {
        "name": "R88_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": -0.13,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_INH_P2"
          }
        }
      },
      {
        "name": "R89_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 0.27,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_INT_P2"
          }
        }
      },
      {
        "name": "R90_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 0.67,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RESETn_P2"
          }
        }
      },
      {
        "name": "R91_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 2.49 k, 1%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "2.49k",
        "partNumber": "CRCW04022K49FKED",
        "packageReference": "0402",
        "schX": 1.07,
        "schY": -1.07,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_VDD"
          },
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N1"
          }
        }
      },
      {
        "name": "R92_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 0, 5%, 0.063 W, 0402",
        "value": "0",
        "partNumber": "CRCW04020000Z0ED",
        "packageReference": "0402",
        "schX": -4.13,
        "schY": -0.67,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N16"
          },
          "pin1": {
            "label": "1",
            "net": "NET_VDDIO"
          }
        }
      },
      {
        "name": "R93_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 27.0, 1%, 0.1 W, 0603",
        "value": "27.0",
        "partNumber": "RC0603FR-0727RL",
        "packageReference": "0603",
        "schX": 4.67,
        "schY": -0.67,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_D1A_N_P2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N19"
          }
        }
      },
      {
        "name": "R94_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": -0.53,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N15"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_TX_CLK_P2"
          }
        }
      },
      {
        "name": "R95_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 1.00 k, 1%, 0.1 W, AEC-Q200 Grade 0, 0603",
        "value": "1.00k",
        "partNumber": "CRCW06031K00FKEA",
        "packageReference": "0603",
        "schX": 7.6,
        "schY": -0.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_N_P2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N17"
          }
        }
      },
      {
        "name": "R96_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 1.00 k, 1%, 0.1 W, AEC-Q200 Grade 0, 0603",
        "value": "1.00k",
        "partNumber": "CRCW06031K00FKEA",
        "packageReference": "0603",
        "schX": 8,
        "schY": -0.27,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_PHY_P_P2"
          },
          "pin1": {
            "label": "1",
            "net": "NET_13_phy_p2_N17"
          }
        }
      },
      {
        "name": "R97_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 100 k, 1%, 0.25 W, AEC-Q200 Grade 0, 1206",
        "value": "100k",
        "partNumber": "CRCW1206100KFKEA",
        "packageReference": "1206",
        "schX": 7.6,
        "schY": 0.4,
        "schRotation": "90deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N17"
          },
          "pin1": {
            "label": "1",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "R98_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 0.67,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N4"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXER_P2"
          }
        }
      },
      {
        "name": "R99_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 0.8,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N5"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXDV_P2"
          }
        }
      },
      {
        "name": "R100_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 0.93,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N14"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_CLK_P2"
          }
        }
      },
      {
        "name": "R101_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 1.33,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N13"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D0_P2"
          }
        }
      },
      {
        "name": "R102_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 1.47,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N12"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D1_P2"
          }
        }
      },
      {
        "name": "R103_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 1.6,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N11"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D2_P2"
          }
        }
      },
      {
        "name": "R104_P2",
        "kind": "resistor",
        "libraryReference": "Resistor",
        "description": "RES, 22, 5%, 0.063 W, AEC-Q200 Grade 0, 0402",
        "value": "22",
        "partNumber": "CRCW040222R0JNED",
        "packageReference": "0402",
        "schX": -5.73,
        "schY": 1.73,
        "schRotation": "0deg",
        "pins": {
          "pin2": {
            "label": "2",
            "net": "NET_13_phy_p2_N10"
          },
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D3_P2"
          }
        }
      },
      {
        "name": "TP9_P2",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -7.47,
        "schY": -0.67,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_TX_CLK_P2"
          }
        }
      },
      {
        "name": "TP10_P2",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -7.2,
        "schY": -0.53,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_TX_EN_P2"
          }
        }
      },
      {
        "name": "TP11_P2",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -6.93,
        "schY": -0.27,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_TX_D0_P2"
          }
        }
      },
      {
        "name": "TP12_P2",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -7.47,
        "schY": 0.53,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXER_P2"
          }
        }
      },
      {
        "name": "TP13_P2",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -7.2,
        "schY": 0.67,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RXDV_P2"
          }
        }
      },
      {
        "name": "TP14_P2",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -6.93,
        "schY": 0.8,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_CLK_P2"
          }
        }
      },
      {
        "name": "TP15_P2",
        "kind": "testpoint",
        "libraryReference": "TESTPOINT",
        "description": "TEST POINT.  No entry in BOM.",
        "value": "TESTPOINT123",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -6.8,
        "schY": 1.2,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "1",
            "net": "NET_PRU0_MII_RX_D0_P2"
          }
        }
      },
      {
        "name": "U13_P2",
        "kind": "chip",
        "libraryReference": "DP83TC811-Q1",
        "description": "DP83TC811Q1, RND0036A (VQFNP-36)",
        "value": "DP83TC811RNDQ1",
        "partNumber": "DP83TC811RNDQ1",
        "packageReference": "RND0036A",
        "schX": -2.13,
        "schY": 0,
        "schRotation": "0deg",
        "pins": {
          "pin1": {
            "label": "MDC",
            "net": "NET_PRU0_MDC_P2"
          },
          "pin2": {
            "label": "\\INT",
            "net": "NET_PRU0_MII_INT_P2"
          },
          "pin3": {
            "label": "\\RESET",
            "net": "NET_PRU0_MII_RESETn_P2"
          },
          "pin4": {
            "label": "XO",
            "net": "NET_XO_P2"
          },
          "pin5": {
            "label": "XI",
            "net": "NET_XI_P2"
          },
          "pin6": {
            "label": "LED_1/GPIO_1",
            "net": "NET_PHY_LED1_P2"
          },
          "pin7": {
            "label": "EN",
            "net": "NET_13_phy_p2_N1"
          },
          "pin8": {
            "label": "WAKE",
            "net": "NET_13_phy_p2_N1"
          },
          "pin9": {
            "label": "NC",
            "net": "NET_13_phy_p2_N2"
          },
          "pin10": {
            "label": "INH",
            "net": "NET_PRU0_MII_INH_P2"
          },
          "pin11": {
            "label": "VDDA",
            "net": "NET_13_phy_p2_N3"
          },
          "pin12": {
            "label": "TRD_P",
            "net": "NET_D_P_P2"
          },
          "pin13": {
            "label": "TRD_N",
            "net": "NET_D_N_P2"
          },
          "pin14": {
            "label": "RX_ER",
            "net": "NET_13_phy_p2_N4"
          },
          "pin15": {
            "label": "RX_DV",
            "net": "NET_13_phy_p2_N5"
          },
          "pin16": {
            "label": "CLKOUT",
            "net": "NET_CLKOUT_P2"
          },
          "pin17": {
            "label": "TCK",
            "net": "NET_13_phy_p2_N6"
          },
          "pin18": {
            "label": "TDO",
            "net": "NET_13_phy_p2_N7"
          },
          "pin19": {
            "label": "TMS",
            "net": "NET_13_phy_p2_N8"
          },
          "pin20": {
            "label": "TDI",
            "net": "NET_13_phy_p2_N9"
          },
          "pin21": {
            "label": "NC",
            "net": "NET_13_phy_p2_N2"
          },
          "pin22": {
            "label": "VDDIO",
            "net": "NET_VDDIO"
          },
          "pin23": {
            "label": "RX_D3",
            "net": "NET_13_phy_p2_N10"
          },
          "pin24": {
            "label": "RX_D2",
            "net": "NET_13_phy_p2_N11"
          },
          "pin25": {
            "label": "RX_D1",
            "net": "NET_13_phy_p2_N12"
          },
          "pin26": {
            "label": "RX_D0",
            "net": "NET_13_phy_p2_N13"
          },
          "pin27": {
            "label": "RX_CLK",
            "net": "NET_13_phy_p2_N14"
          },
          "pin28": {
            "label": "TX_CLK",
            "net": "NET_13_phy_p2_N15"
          },
          "pin29": {
            "label": "TX_EN",
            "net": "NET_PRU0_MII_TX_EN_P2"
          },
          "pin30": {
            "label": "TX_D3",
            "net": "NET_PRU0_MII_TX_D3_P2"
          },
          "pin31": {
            "label": "TX_D2",
            "net": "NET_PRU0_MII_TX_D2_P2"
          },
          "pin32": {
            "label": "TX_D1",
            "net": "NET_PRU0_MII_TX_D1_P2"
          },
          "pin33": {
            "label": "TX_D0",
            "net": "NET_PRU0_MII_TX_D0_P2"
          },
          "pin34": {
            "label": "TX_ER",
            "net": "NET_13_phy_p2_N16"
          },
          "pin35": {
            "label": "LED_0/GPIO_0",
            "net": "NET_PRU0_MII_RXLINK_P2"
          },
          "pin36": {
            "label": "MDIO",
            "net": "NET_PRU0_MDIO_P2"
          },
          "pin37": {
            "label": "GND",
            "net": "NET_AGND"
          }
        }
      },
      {
        "name": "U14_P2",
        "kind": "chip",
        "libraryReference": "TPD2E2U06-Q1",
        "description": "Automotive Dual-Channel High-Speed ESD Protection Device, DCK0003A (SOT-SC70-3)",
        "value": "TPD2E2U06QDCKRQ1",
        "partNumber": "TPD2E2U06QDCKRQ1",
        "packageReference": "DCK0003A",
        "schX": 5.73,
        "schY": 0,
        "schRotation": "90deg",
        "pins": {
          "pin1": {
            "label": "IO1",
            "net": "NET_D1A_P_P2"
          },
          "pin2": {
            "label": "IO2",
            "net": "NET_D1A_N_P2"
          },
          "pin3": {
            "label": "GND",
            "net": "NET_AGND"
          }
        }
      }
    ]
  },
  {
    "name": "14_hardware",
    "title": "14 - Hardware",
    "source": "Hardware.SchDoc",
    "parts": [
      {
        "name": "!PCB1",
        "kind": "chip",
        "libraryReference": "PCB",
        "description": "Printed Circuit Board",
        "value": "PrintedCircuitBoard",
        "partNumber": "=PRJ_Number",
        "packageReference": "",
        "schX": -9.6,
        "schY": -2.8,
        "schRotation": "0deg",
        "pins": {}
      },
      {
        "name": "FID1",
        "kind": "fiducial",
        "libraryReference": "Fiducial",
        "description": "Fiducial mark.  There is nothing to buy or mount.",
        "value": "Fiducial",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -10.4,
        "schY": -3.87,
        "schRotation": "0deg",
        "pins": {}
      },
      {
        "name": "FID2",
        "kind": "fiducial",
        "libraryReference": "Fiducial",
        "description": "Fiducial mark.  There is nothing to buy or mount.",
        "value": "Fiducial",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -9.73,
        "schY": -3.87,
        "schRotation": "0deg",
        "pins": {}
      },
      {
        "name": "FID3",
        "kind": "fiducial",
        "libraryReference": "Fiducial",
        "description": "Fiducial mark.  There is nothing to buy or mount.",
        "value": "Fiducial",
        "partNumber": "N/A",
        "packageReference": "N/A",
        "schX": -9.07,
        "schY": -3.87,
        "schRotation": "0deg",
        "pins": {}
      },
      {
        "name": "LBL1",
        "kind": "chip",
        "libraryReference": "CMP-0003625-1",
        "description": "Thermal Transfer Printable Labels, 0.650\" W x 0.200\" H - 10,000 per roll",
        "value": "THT-14-423-10",
        "partNumber": "THT-14-423-10",
        "packageReference": "PCB Label 0.650 x 0.200 inch",
        "schX": -9.87,
        "schY": 0,
        "schRotation": "0deg",
        "pins": {}
      },
      {
        "name": "Logo3",
        "kind": "chip",
        "libraryReference": "CMP-0074847-1",
        "description": "FCC_disclaimer",
        "value": "FCCdisclaimer",
        "partNumber": "FCC disclaimer",
        "packageReference": "",
        "schX": -5.07,
        "schY": -2.8,
        "schRotation": "0deg",
        "pins": {}
      },
      {
        "name": "Logo4",
        "kind": "chip",
        "libraryReference": "CMP-0074769-1",
        "description": "WEEE logo",
        "value": "WEEElogo",
        "partNumber": "WEEE logo",
        "packageReference": "",
        "schX": -3.87,
        "schY": -2.8,
        "schRotation": "0deg",
        "pins": {}
      }
    ]
  }
]
