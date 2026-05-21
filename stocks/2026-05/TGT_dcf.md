# TGT — DCF 估值報告 (2026-05-21)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -19.0% | 1.5% | 10.63% | $-3.67 | $122.33 | -103.0% (高估) |
| 基準 | -13.6% | 2.5% | 10.13% | $10.10 | $122.33 | -91.7% (高估) |
| 樂觀 | -8.1% | 3.5% | 9.63% | $33.10 | $122.33 | -72.9% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF (TTM) | $3.031B | [Target Q1 FY2026 Earnings Release](https://corporate.target.com/press/release/2026/05/target-corporation-reports-first-quarter-earnings)、[Target FY2025 Annual Report](https://corporate.target.com/investors/annual/2025-annual-report/10-k-report/10-k-part-ii/item-8-financial-statements-and-supplementary-data)、計算 |
| FY2025 FCF | $2.835B = OCF $6.562B - CapEx $3.727B | [Target FY2025 Annual Report](https://corporate.target.com/investors/annual/2025-annual-report/10-k-report/10-k-part-ii/item-8-financial-statements-and-supplementary-data) |
| 5 個年度 FCF | FY2021 $5.081B、FY2022 $-1.510B、FY2023 $3.815B、FY2024 $4.476B、FY2025 $2.835B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/tgt/financials/cash-flow-statement/) |
| 5yr FCF CAGR | -13.6% | 計算：FY2021 $5.081B 至 FY2025 $2.835B |
| Beta | 1.01 | [StockAnalysis Overview](https://stockanalysis.com/stocks/tgt/) |
| Net Debt | $15.297B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/tgt/statistics/)、計算：Debt $18.831B - Cash $3.534B |
| 流通股數 | 454.177M | [Target Q1 FY2026 Earnings Release](https://corporate.target.com/press/release/2026/05/target-corporation-reports-first-quarter-earnings) |
| Revenue (TTM) | $106.38B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/tgt/statistics/) |
| 無風險利率 (10Y) | 4.57% | [Slickcharts / Treasury.gov data](https://www.slickcharts.com/treasury/10-year) |
| WACC | 悲觀 10.63%、基準 10.13%、樂觀 9.63% | 計算 |
| 現價 | $122.33 | [StockAnalysis Overview](https://stockanalysis.com/stocks/tgt/) |

## 關鍵假設說明

- FCF 成長率來源：使用 5 個年度 FCF 樣本計算 CAGR；因基準 CAGR 為負，為維持情境語義，悲觀採較深衰退（base_rate x 1.4），樂觀採較淺衰退（base_rate x 0.6）。
- WACC 組成：無風險利率 4.57% + Beta 1.01 x 5.5% ERP = 10.13%；悲觀/樂觀分別加減 0.50 個百分點。
- 預測期間：5 年。
- 終值佔總估值比重：61.0%（基準情境）；樂觀情境為 69.7%，接近 70%。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。

## 結論

基準情境下，TGT 的 DCF 內在價值為每股 $10.10，較 $122.33 現價低 91.7%，模型結果顯示高估。主要不確定因子是 TGT 近年 FCF 受庫存、CapEx 與營運資金週期影響很大，若未來 FCF 回到較高常態水準，估值會大幅改變。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
