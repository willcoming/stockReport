# NVO — DCF 估值報告

as_of_date: 2026-05-08  
projection_years: 5

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 2.9% | 1.5% | 6.82% | $39.20 | $45.80 | -14.4% (高估) |
| 基準 | 4.9% | 2.5% | 6.31% | $59.83 | $45.80 | +30.6% (低估) |
| 樂觀 | 6.9% | 3.5% | 5.82% | $107.03 | $45.80 | +133.7% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $9.50B | [StockAnalysis NVO Statistics](https://stockanalysis.com/stocks/nvo/statistics/)；FCF 口徑為 operating cash flow minus capex |
| FY2021-FY2025 FCF | DKK 48.665B、66.741B、83.102B、73.804B、58.962B | [StockAnalysis NVO Cash Flow Statement](https://stockanalysis.com/stocks/nvo/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 4.9% | 以 FY2021-FY2025 FCF 計算 |
| Beta | 0.35 | [StockAnalysis NVO Statistics](https://stockanalysis.com/stocks/nvo/statistics/) |
| Net Debt | $19.25B | [StockAnalysis NVO Statistics](https://stockanalysis.com/stocks/nvo/statistics/) |
| 流通股數 | 4.44B | [StockAnalysis NVO Statistics](https://stockanalysis.com/stocks/nvo/statistics/) |
| 無風險利率 (10Y) | 4.39% | [Trading Economics — US 10Y Treasury](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 悲觀 6.82% / 基準 6.31% / 樂觀 5.82% | 計算：risk-free + Beta x 5.5% ERP，並依情境加減 0.5% |
| 現價 | $45.80 | [StockAnalysis NVO Overview](https://stockanalysis.com/stocks/nvo/) |
| ADR 比例 | 1 ADR = 1 Novo Nordisk B share | [Novo Nordisk Form 20-F 2025, SEC](https://www.sec.gov/Archives/edgar/data/353278/000035327826000012/nvo-20251231.htm) |

## 關鍵假設說明

- FCF 成長率來源：FY2021-FY2025 FCF CAGR = 4.9%；悲觀 / 基準 / 樂觀分別套用 base_rate x 0.6、base_rate、base_rate x 1.4。
- WACC 組成：無風險利率 4.39% + Beta 0.35 x 5.5% ERP = 6.31%（基準情境）。
- DCF 使用最近一年 FCF $9.50B、net debt $19.25B、shares outstanding 4.44B，並透過 Bash 執行 Python DCF 計算。
- 終值佔總估值比重：84.0%（基準情境）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。

## 結論

基準情境下，NVO 的估算內在價值為 $59.83/股，較 $45.80 現價約有 +30.6% 安全邊際。主要不確定因子是終值假設與未來 FCF 成長率，尤其基準情境終值佔比達 84.0%，估值對 WACC 與 terminal growth 非常敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
