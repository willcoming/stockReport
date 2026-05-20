# SAP — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 6.7% | 1.5% | 9.07% | $140.22 | $178.80 | -21.6% (高估) |
| 基準 | 11.1% | 2.5% | 8.57% | $204.18 | $178.80 | +14.2% (低估) |
| 樂觀 | 15.6% | 3.5% | 8.07% | $316.94 | $178.80 | +77.3% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 估值基準日 | 2026-05-20 | 使用者輸入 |
| 最近一年 FCF | €8.417B | [StockAnalysis SAP Cash Flow Statement](https://stockanalysis.com/stocks/sap/financials/cash-flow-statement/)、[Yahoo Finance Cash Flow](https://finance.yahoo.com/quote/SAP/cash-flow/) |
| 5yr FCF CAGR | 11.1% | 以 FY2021 €5.522B 至 FY2025 €8.417B 計算 |
| Beta | 0.709 | [Yahoo Finance SAP](https://finance.yahoo.com/quote/SAP/) |
| Net Debt | -€0.744B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/SAP/balance-sheet/)：Total Debt €7.476B - Cash & Equivalents €8.220B |
| 流通股數 | 1.168B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/SAP/balance-sheet/) |
| 無風險利率 (10Y) | 4.67% | [U.S. Treasury Daily Treasury Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026)，2026-05-19 最新可得 10Y |
| WACC | 8.57% | 計算：4.67% + 0.709 x 5.5% |
| EUR/USD | 1.1602 | [Yahoo Finance EUR/USD](https://finance.yahoo.com/quote/EURUSD=X/) |
| 現價 | $178.80 | [Yahoo Finance SAP](https://finance.yahoo.com/quote/SAP/) |

## 關鍵假設說明

- FCF 成長率來源：以 FY2021-FY2025 的 Free Cash Flow CAGR 11.1% 作為基準情境；悲觀為基準 x 0.6，樂觀為基準 x 1.4。
- WACC 組成：無風險利率 4.67% + Beta 0.709 x 5.5% ERP = 8.57%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：78.0%（基準情境）。
- 終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- SAP 財務數據以 EUR 表示；內在價值先以 EUR 計算，再用 EUR/USD 1.1602 轉換為 ADR 美元價格比較。

## 結論

基準情境下，SAP 的 DCF 內在價值約為 $204.18/股，較現價 $178.80 高約 14.2%。主要不確定因子是 FY2025 FCF 是否可持續，以及終值成長率與 WACC 對估值的高敏感度。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
