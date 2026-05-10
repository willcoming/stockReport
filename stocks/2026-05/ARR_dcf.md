# ARR — DCF 估值報告

as_of_date: 2026-05-10  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $179.083M（TTM, period ending 2025-09-30） | [FinanceCharts](https://www.financecharts.com/stocks/ARR/growth/free-cash-flow) |
| 5yr FCF CAGR | 22.87% | [FinanceCharts](https://www.financecharts.com/stocks/ARR/growth/free-cash-flow) |
| Beta | 1.41 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/arr/statistics/) |
| Total Debt | $18.48B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/arr/statistics/) |
| Cash & Cash Equivalents | $1.87B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/arr/statistics/) |
| Net Debt | $16.61B | 計算：Total Debt - Cash |
| 流通股數 | 124.05M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/arr/statistics/) |
| 無風險利率 (10Y) | 4.38%（2026-05-08） | [U.S. Treasury Daily Yield Curve](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026) |
| WACC（基準） | 12.13% | 計算：4.38% + 1.41 x 5.5% |
| 現價 | $17.55（最新可驗證收盤價：2026-05-07） | [StockAnalysis Price History](https://stockanalysis.com/stocks/arr/history/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 13.72% | 1.5% | 12.63% | -$112.66 | $17.55 | -741.9%（高估 / 模型輸出為負） |
| 基準 | 22.87% | 2.5% | 12.13% | -$100.06 | $17.55 | -670.2%（高估 / 模型輸出為負） |
| 樂觀 | 32.02% | 3.5% | 11.63% | -$79.14 | $17.55 | -550.9%（高估 / 模型輸出為負） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：採用 FinanceCharts 公布的 5yr FCF CAGR 22.87%；悲觀/基準/樂觀分別為 base_rate x 0.6、base_rate、base_rate x 1.4。
- WACC 組成：無風險利率 4.38% + Beta 1.41 x 5.5% ERP = 12.13%（基準情境）；悲觀加 0.5%，樂觀減 0.5%。
- 終值佔總估值比重：基準情境約 71.7%。
- 終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- ARR 是 mortgage REIT，repo debt / securities funding 使傳統 FCFF DCF 的 net debt 扣除項極大；本模型按 skill 規則計算，但對 mREIT 的經濟價值解釋力有限。

## 結論

基準情境下，傳統 DCF 輸出為每股 -$100.06，主要原因是 $16.61B net debt 遠高於模型估算的營運現金流現值。此結果更像是在提示「傳統企業 FCFF DCF 不適合直接套用於高槓桿 mortgage REIT」，而不是單純的價格判斷。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
