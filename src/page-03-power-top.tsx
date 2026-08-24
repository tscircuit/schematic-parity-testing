const P = (part: string, pin: number) => `${part} > .pin${pin}`

export function Page03PowerTop() {
  return (
    <>
      <schematicsection name="page_03_content" displayName="" />

      {/* Input connector, EMI filter, and surge protection */}
      <inductor
        name="L2"
        inductance="330nH"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-12.35}
        schY={5.336}
        schOrientation="horizontal"
      />
      <inductor
        name="L6"
        inductance="330nH"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-12.35}
        schY={2.734}
        schOrientation="horizontal"
      />
      <chip
        name="L4"
        displayName="L4"
        manufacturerPartNumber="6.8uH coupled inductor"
        pinLabels={{ pin1: "P1", pin2: "P2", pin3: "N1", pin4: "N2" }}
        schPinArrangement={{ leftSide: [1, 3], rightSide: [2, 4] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-10.85}
        schY={4.035}
        schWidth={0.868}
        schHeight={1.984}
      />
      <testpoint
        name="TP3"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-9.802}
        schY={5.639}
      />
      <capacitor
        name="C3"
        displayName="C3"
        capacitance="10uF"
        maxVoltageRating="63V"
        schShowRatings
        polarized
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-9.35}
        schY={4.035}
        schOrientation="vertical"
      />
      <diode
        name="D29"
        displayName="D29"
        manufacturerPartNumber="CD0603-S01575"
        symbolName="filled_diode"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-7.95}
        schY={4.75}
        schRotation="270deg"
      />
      <resistor
        name="R108"
        resistance="49.9k"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-7.2}
        schY={3.85}
        schRotation="0deg"
      />
      <led
        name="D26"
        displayName="D26"
        manufacturerPartNumber="150060BS75000"
        color="blue"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-6.4}
        schY={2.9}
        schRotation="270deg"
      />
      <diode
        name="D4"
        displayName="D4"
        manufacturerPartNumber="SMCJ48CA-TR"
        variant="tvs"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-5.55}
        schY={4.35}
        schRotation="270deg"
      />
      <diode
        name="D5"
        displayName="D5"
        manufacturerPartNumber="SMCJ48CA-TR"
        variant="tvs"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-4.1}
        schY={4.35}
        schRotation="270deg"
      />

      <trace name="Power_INPUT_P" from="net.Power_INPUT_P" to={P(".L2", 1)} />
      <trace from={P(".L2", 2)} to={P(".L4", 1)} />
      <trace name="Power_INPUT_N" from="net.Power_INPUT_N" to={P(".L6", 1)} />
      <trace from={P(".L6", 2)} to={P(".L4", 3)} />
      <trace name="48V_Vin" from={P(".L4", 2)} to={P(".U_REPEAT", 1)} />
      <trace from={P(".L4", 4)} to="net.GND" />
      <trace from={P(".TP3", 1)} to={P(".L4", 2)} />
      <trace from={P(".C3", 1)} to={P(".L4", 2)} />
      <trace from={P(".C3", 2)} to="net.GND" />
      <trace from={P(".D29", 1)} to={P(".L4", 2)} />
      <trace from={P(".D29", 2)} to={P(".R108", 1)} />
      <trace from={P(".R108", 2)} to={P(".D26", 1)} />
      <trace from={P(".D26", 2)} to="net.GND" />
      <trace from={P(".D4", 1)} to={P(".L4", 2)} />
      <trace from={P(".D4", 2)} to="net.GND" />
      <trace from={P(".D5", 1)} to={P(".L4", 2)} />
      <trace from={P(".D5", 2)} to="net.GND" />

      {/* Ideal-diode controller and eFuse/repeater */}
      <chip
        name="U_LM74700"
        displayName="U_LM74700 LM74700.SchDoc"
        pinLabels={{ pin1: "48V_Vin", pin2: "48V_Supply_In", pin3: "GND" }}
        schPinArrangement={{ leftSide: [1], rightSide: [2, 3] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-0.348}
        schY={8.966}
        schWidth={3.348}
        schHeight={0.992}
      />
      <chip
        name="NT2"
        displayName="NT2 Net-Tie"
        pinLabels={{ pin1: "1", pin2: "2" }}
        schPinArrangement={{ leftSide: [1], rightSide: [2] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-0.348}
        schY={6.939}
        schWidth={1.736}
        schHeight={0.496}
      />
      <chip
        name="U_REPEAT"
        displayName="REPEAT(F,1,2) TPS2663.SchDoc"
        pinLabels={{
          pin1: "48V_Vin",
          pin2: "REPEAT_IMON",
          pin3: "REPEAT_SHDN",
          pin4: "REPEAT_ILIM",
          pin5: "REPEAT_PG",
          pin6: "REPEAT_48V_Vout",
          pin7: "SGND",
          pin8: "GND",
        }}
        schPinArrangement={{ leftSide: [1, 2, 3, 4, 5], rightSide: [6, 7, 8] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={0.464}
        schY={4.731}
        schWidth={4.03}
        schHeight={1.6}
      />
      <diode
        name="D1"
        displayName="D1"
        manufacturerPartNumber="SMCJ48CA-TR"
        variant="tvs"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={3.886}
        schY={8.058}
        schRotation="270deg"
      />
      <resistor
        name="R107"
        resistance="49.9k"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={5.65}
        schY={8.3}
        schRotation="0deg"
      />
      <diode
        name="D28"
        displayName="D28"
        manufacturerPartNumber="CD0603-S01575"
        symbolName="filled_diode"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={6.9}
        schY={8.3}
        schRotation="180deg"
      />
      <led
        name="D25"
        displayName="D25"
        manufacturerPartNumber="150060BS75000"
        color="blue"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={5.11}
        schY={7.363}
        schRotation="270deg"
      />

      <trace name="48V_Vin" from={P(".U_LM74700", 1)} to={P(".U_REPEAT", 1)} />
      <trace from={P(".U_LM74700", 3)} to="net.GND" />
      <trace from={P(".NT2", 1)} to="net.PGND" />
      <trace from={P(".NT2", 2)} to="net.GND" />
      <trace from={P(".D1", 1)} to={P(".U_LM74700", 2)} />
      <trace from={P(".D1", 2)} to="net.GND" />
      <trace from={P(".R107", 1)} to={P(".D25", 1)} />
      <trace name="GND" from={P(".D25", 2)} to="net.GND" />
      <trace name="48V_Supply_In" from={P(".D28", 1)} to={P(".U_LM74700", 2)} />
      <trace from={P(".D28", 2)} to={P(".R107", 2)} />
      <trace name="IMON1,2" from={P(".U_REPEAT", 2)} to={P(".U_MSP430", 6)} />
      <trace name="SHDN1,2" from={P(".U_REPEAT", 3)} to={P(".U_MSP430", 7)} />
      <trace name="ILIM1,2" from={P(".U_REPEAT", 4)} to={P(".U_TLC6C598", 7)} />
      <trace name="PG1,2" from={P(".U_REPEAT", 5)} to={P(".U_MSP430", 18)} />
      <trace from={P(".U_REPEAT", 7)} to="net.SGND" />
      <trace from={P(".U_REPEAT", 8)} to="net.GND" />

      {/* 48 V protected output and output EMI filter */}
      <testpoint
        name="TP9"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={7.569}
        schY={5.548}
      />
      <diode
        name="D2"
        displayName="D2"
        manufacturerPartNumber="SMCJ48A-TR"
        symbolName="avalanche_diode"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={5.7}
        schY={4.2}
        schRotation="270deg"
      />
      <diode
        name="D3"
        displayName="D3"
        manufacturerPartNumber="SMCJ48A-TR"
        symbolName="avalanche_diode"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={6.9}
        schY={4.2}
        schRotation="270deg"
      />
      <resistor
        name="R109"
        resistance="49.9k"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={8.05}
        schY={4.731}
        schRotation="270deg"
      />
      <led
        name="D27"
        displayName="D27"
        manufacturerPartNumber="150060BS75000"
        color="blue"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={8.05}
        schY={3.45}
        schRotation="270deg"
      />
      <capacitor
        name="C2"
        displayName="C2"
        capacitance="10uF"
        maxVoltageRating="63V"
        schShowRatings
        polarized
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={9.7}
        schY={4.126}
        schOrientation="vertical"
      />
      <chip
        name="L3"
        displayName="L3"
        manufacturerPartNumber="6.8uH coupled inductor"
        pinLabels={{ pin1: "P1", pin2: "P2", pin3: "N1", pin4: "N2" }}
        schPinArrangement={{ leftSide: [1, 3], rightSide: [2, 4] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={11.9}
        schY={4.035}
        schWidth={0.868}
        schHeight={1.984}
      />
      <inductor
        name="L1"
        inductance="330nH"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={13.35}
        schY={5.336}
        schOrientation="horizontal"
      />
      <inductor
        name="L5"
        inductance="330nH"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={13.55}
        schY={3.2}
        schOrientation="horizontal"
      />

      <trace from={P(".L3", 1)} to={P(".C2", 1)} />
      <trace name="48V_Vout1" from={P(".U_REPEAT", 6)} to={P(".TP9", 1)} />
      <trace from={P(".D2", 1)} to={P(".U_REPEAT", 6)} />
      <trace from={P(".D2", 2)} to="net.GND" />
      <trace from={P(".D3", 1)} to={P(".U_REPEAT", 6)} />
      <trace from={P(".D3", 2)} to="net.GND" />
      <trace from={P(".R109", 1)} to={P(".U_REPEAT", 6)} />
      <trace from={P(".R109", 2)} to={P(".D27", 1)} />
      <trace from={P(".D27", 2)} to="net.GND" />
      <trace from={P(".C2", 1)} to={P(".R109", 1)} />
      <trace from={P(".C2", 2)} to={P(".D27", 2)} />
      <trace from={P(".L3", 3)} to={P(".C2", 2)} />
      <trace from={P(".L3", 2)} to={P(".L1", 1)} />
      <trace name="Power_OUTPUT_P" from={P(".L1", 2)} to="net.Power_OUTPUT_P" />
      <trace from={P(".L3", 4)} to={P(".L5", 1)} />
      <trace name="Power_OUTPUT_N" from={P(".L5", 2)} to="net.Power_OUTPUT_N" />
      <trace name="48V_Vout2" from={P(".TP9", 1)} to="net.V48_Vout2" />

      {/* DC/DC converters, LDO, and current sense */}
      <chip
        name="U_LM76003"
        displayName="U_LM76003 LM76003.SchDoc"
        pinLabels={{
          pin1: "48V_Vin",
          pin2: "PG_24V12V",
          pin3: "24V12Vout",
          pin4: "GND",
        }}
        schPinArrangement={{ leftSide: [1, 2], rightSide: [3, 4] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-1.044}
        schY={0.254}
        schWidth={2.728}
        schHeight={1.054}
      />
      <testpoint
        name="TP4"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={1}
        schY={0.5263}
      />
      <resistor
        name="R3"
        resistance="0.02"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={2.05}
        schY={0.5263}
        schOrientation="horizontal"
      />
      <testpoint
        name="TP5"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={3.1}
        schY={0.5263}
      />
      <chip
        name="U_LMZM33603"
        displayName="U_LMZM33603 LMZM33603.SchDoc"
        pinLabels={{
          pin1: "24or12V_out",
          pin2: "PG_5V",
          pin3: "5V_out",
          pin4: "GND",
        }}
        schPinArrangement={{ leftSide: [1, 2], rightSide: [3, 4] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={5.3}
        schY={0.254}
        schWidth={2.728}
        schHeight={1.054}
      />
      <chip
        name="U_INA180"
        displayName="U_INA180 INA180.SchDoc"
        pinLabels={{
          pin1: "IN_NEG",
          pin2: "IN_POS",
          pin3: "MSP_3V3",
          pin4: "Local_I",
          pin5: "GND",
        }}
        schPinArrangement={{ leftSide: [1, 2, 3], rightSide: [4, 5] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={3.94}
        schY={-1.75}
        schWidth={2.728}
        schHeight={1.302}
      />
      <chip
        name="U_LMZ10500"
        displayName="U_LMZ10500 LMZ10500.SchDoc"
        pinLabels={{
          pin1: "5V_out",
          pin2: "PG_Local_3V3",
          pin3: "Local_3V3",
          pin4: "Local_1V",
          pin5: "GND",
          pin6: "PGND",
        }}
        schPinArrangement={{ leftSide: [1, 2], rightSide: [3, 4, 5, 6] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={9.56}
        schY={-1.5}
        schWidth={2.728}
        schHeight={1.364}
      />
      <chip
        name="U_LP2951"
        displayName="U_LP2951 LP2951.SchDoc"
        pinLabels={{ pin1: "48V_Vin", pin2: "MSP_3V3", pin3: "GND" }}
        schPinArrangement={{ leftSide: [1], rightSide: [2, 3] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-1.044}
        schY={-2.469}
        schWidth={2.728}
        schHeight={1.054}
      />
      <capacitor
        name="C4"
        displayName="C4"
        capacitance="100nF"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={1.2}
        schY={-3.5}
        schOrientation="vertical"
      />

      <trace name="48V_Vin" from={P(".U_LM76003", 1)} to={P(".U_REPEAT", 1)} />
      <trace name="24V12Vout" from={P(".U_LM76003", 3)} to={P(".R3", 1)} />
      <trace from={P(".U_LM76003", 4)} to="net.GND" />
      <trace
        name="PG_24V12V"
        from={P(".U_LM76003", 2)}
        to={P(".U_MSP430", 5)}
      />
      <trace from={P(".TP4", 1)} to={P(".R3", 1)} />
      <trace from={P(".R3", 2)} to={P(".TP5", 1)} />
      <trace from={P(".R3", 2)} to={P(".U_LMZM33603", 1)} />
      <trace
        name="24or12V_out"
        from={P(".U_LMZM33603", 1)}
        to="net.V24or12V_out"
      />
      <trace
        name="5V_out"
        from={P(".U_LMZM33603", 3)}
        to={P(".U_LMZ10500", 1)}
      />
      <trace name="5V_out" from={P(".U_LMZM33603", 3)} to="net.V5_out" />
      <trace name="PG_5V" from={P(".U_LMZM33603", 2)} to={P(".U_MSP430", 4)} />
      <trace from={P(".U_LMZM33603", 4)} to="net.GND" />
      <trace from={P(".R3", 1)} to={P(".U_INA180", 1)} />
      <trace from={P(".R3", 2)} to={P(".U_INA180", 2)} />
      <trace name="MSP_3V3" from={P(".U_INA180", 3)} to={P(".U_LP2951", 2)} />
      <trace name="I_sense" from={P(".U_INA180", 4)} to={P(".U_MSP430", 3)} />
      <trace from={P(".U_INA180", 5)} to="net.GND" />
      <trace name="Local_3V3" from={P(".U_LMZ10500", 3)} to="net.Local_3V3" />
      <trace name="Local_1V" from={P(".U_LMZ10500", 4)} to="net.Local_1V" />
      <trace name="PG_3V3" from={P(".U_LMZ10500", 2)} to={P(".U_MSP430", 2)} />
      <trace from={P(".U_LMZ10500", 5)} to="net.AGND" />
      <trace from={P(".U_LMZ10500", 6)} to="net.GND" />
      <trace name="48V_Vin" from={P(".U_LP2951", 1)} to={P(".U_REPEAT", 1)} />
      <trace name="MSP_3V3" from={P(".U_LP2951", 2)} to="net.MSP_3V3" />
      <trace from={P(".U_LP2951", 3)} to="net.GND" />
      <trace from={P(".C4", 1)} to={P(".U_LP2951", 2)} />
      <trace from={P(".C4", 2)} to="net.GND" />

      {/* MSP430 control and TLC6C598 current-limit programming */}
      <chip
        name="U_MSP430"
        displayName="U1 MSP430G2332QPW20REP"
        pinLabels={{
          pin1: "DVCC",
          pin2: "P1_0_TA0CLK_ACLK_A0",
          pin3: "P1_1_TA0_0_A1",
          pin4: "P1_2_TA0_1_A2",
          pin5: "P1_3_ADC10CLK_VREF_NEG_A3",
          pin6: "P1_4_TA0_2_SMCLK_A4_VREF_POS_TCK",
          pin7: "P1_5_TA0_0_SCLK_A5_TMS",
          pin8: "P1_6_TA0_1_SDO_SCL_A6_TDI_TCLK",
          pin9: "P1_7_SDI_SDA_A7_TDO_TDI",
          pin10: "RST_NMI_SBWTDIO",
          pin11: "TEST_SBWTCK",
          pin12: "P2_0",
          pin13: "P2_1",
          pin14: "P2_2",
          pin15: "P2_3",
          pin16: "P2_4",
          pin17: "P2_5",
          pin18: "XIN_TA0_1_P2_6",
          pin19: "XOUT_P2_7",
          pin20: "DVSS",
        }}
        schPinStyle={{
          pin2: { marginTop: 0.1 },
          pin3: { marginTop: 0.1 },
          pin4: { marginTop: 0.1 },
          pin5: { marginTop: 0.1 },
          pin6: { marginTop: 0.1 },
          pin7: { marginTop: 0.1 },
          pin8: { marginTop: 0.1 },
          pin9: { marginTop: 0.1 },
          pin10: { marginTop: 0.1 },
          pin11: { marginTop: 0.1 },
          pin13: { marginTop: 0.1 },
          pin14: { marginTop: 0.1 },
          pin15: { marginTop: 0.1 },
          pin16: { marginTop: 0.1 },
          pin17: { marginTop: 0.1 },
          pin18: { marginTop: 0.1 },
          pin19: { marginTop: 0.1 },
          pin20: { marginTop: 0.1 },
        }}
        schPinArrangement={{
          leftSide: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          rightSide: [12, 13, 14, 15, 16, 17, 18, 19, 20],
        }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-0.696}
        schY={-6.462}
        schWidth={8.06}
        schHeight={4}
      />
      <chip
        name="U_TLC6C598"
        displayName="U_TLC6C598_Q1 TLC6C598_Q1.SchDoc"
        pinLabels={{
          pin1: "MSP_3V3",
          pin2: "SER_IN",
          pin3: "SRCK",
          pin4: "RCK",
          pin5: "GND",
          pin6: "ILIM1",
          pin7: "ILIM2",
        }}
        schPinArrangement={{ leftSide: [1, 2, 3, 4, 5], rightSide: [6, 7] }}
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={7.1}
        schY={-6.35}
        schWidth={3.224}
        schHeight={1.488}
      />
      <resistor
        name="R4"
        resistance="562k"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-8}
        schY={-5.8}
        schRotation="270deg"
      />
      <resistor
        name="R5"
        resistance="24.9k"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-8}
        schY={-7.75}
        schRotation="270deg"
      />
      <capacitor
        name="C5"
        displayName="C5"
        capacitance="0.1uF"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-9.2}
        schY={-7.75}
        schOrientation="vertical"
      />
      <capacitor
        name="C50"
        displayName="C50"
        capacitance="0.01uF"
        schSectionName="page_03_content"
        schSheetName="page_03"
        schX={-6.8}
        schY={-7.75}
        schOrientation="vertical"
      />

      <trace name="MSP_3V3" from={P(".U_MSP430", 1)} to={P(".U_LP2951", 2)} />
      <trace from={P(".U_MSP430", 20)} to="net.GND" />
      <trace name="V_sense" from={P(".U_MSP430", 2)} to={P(".R4", 1)} />
      <trace from={P(".R4", 2)} to="net.GND" />
      <trace from={P(".R5", 1)} to={P(".U_MSP430", 1)} />
      <trace from={P(".R5", 2)} to="net.GND" />
      <trace from={P(".C5", 1)} to={P(".U_MSP430", 1)} />
      <trace from={P(".C5", 2)} to="net.GND" />
      <trace from={P(".C50", 1)} to={P(".U_MSP430", 2)} />
      <trace from={P(".C50", 2)} to="net.GND" />
      <trace name="SCL" from="net.SCL" to={P(".U_MSP430", 8)} />
      <trace name="SDA" from="net.SDA" to={P(".U_MSP430", 9)} />
      <trace name="RST" from="net.RST" to={P(".U_MSP430", 10)} />
      <trace name="TEST" from="net.TEST" to={P(".U_MSP430", 11)} />
      <trace name="PG1" from={P(".U_MSP430", 12)} to={P(".U_TLC6C598", 2)} />
      <trace name="PG2" from={P(".U_MSP430", 13)} to={P(".U_TLC6C598", 3)} />
      <trace name="SER_IN" from={P(".U_MSP430", 14)} to={P(".U_TLC6C598", 2)} />
      <trace name="SRCK" from={P(".U_MSP430", 15)} to={P(".U_TLC6C598", 3)} />
      <trace name="RCK" from={P(".U_MSP430", 16)} to={P(".U_TLC6C598", 4)} />
      <trace name="MSP_3V3" from={P(".U_TLC6C598", 1)} to={P(".U_LP2951", 2)} />
      <trace from={P(".U_TLC6C598", 5)} to="net.PGND" />
      <trace name="ILIM1" from={P(".U_TLC6C598", 6)} to={P(".U_REPEAT", 4)} />
      <trace name="ILIM2" from={P(".U_TLC6C598", 7)} to={P(".U_REPEAT", 4)} />

      {/* Reference annotations and title */}
      <group schSheetName="page_03" schAutoLayoutEnabled={false}>
        <schematictext
          text="4.5A current path"
          schX={6.65}
          schY={9.48}
          fontSize={0.24}
          color="#e21b16"
        />
        <schematictext
          text="4.5A current path"
          schX={8.75}
          schY={5.92}
          fontSize={0.24}
          color="#e21b16"
        />
        <schematictext
          text="3.5A current path"
          schX={9.4}
          schY={2.12}
          fontSize={0.24}
          color="#e21b16"
        />
        <schematictext
          text="Place LP2951 closer to MCU"
          schX={-1.8}
          schY={-1.05}
          fontSize={0.28}
          color="#e21b16"
        />
        <schematictext
          text="C5 and C50 Place close to MSP"
          schX={-9.8}
          schY={-6.65}
          fontSize={0.24}
          color="#e21b16"
        />
        <schematictext
          text="Power Management MSP430"
          schX={-0.696}
          schY={-9.3}
          fontSize={0.55}
          color="#111111"
        />
        <schematictext
          text="Put MAC Address in MSP"
          schX={-0.696}
          schY={-9.75}
          fontSize={0.26}
          color="#e21b16"
        />
      </group>
    </>
  )
}
