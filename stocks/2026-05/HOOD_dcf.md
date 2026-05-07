# HOOD — DCF 估值報告

as_of_date：2026-05-07  
projection_years：5 年

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $3.012B（TTM） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/hood/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/M（歷史 FCF 含負值，CAGR 不具可比性） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/hood/financials/cash-flow-statement/) |
| FCF 成長率 proxy | 18.64%（5Y revenue growth forecast） | [StockAnalysis Statistics](https://stockanalysis.com/stocks/hood/statistics/) |
| Beta | 2.29 | [StockAnalysis Overview](https://stockanalysis.com/stocks/hood/) |
| Cash / Total Debt | $19.27B / $13.61B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/hood/statistics/) |
| Net Debt | -$5.66B（net cash） | [StockAnalysis Statistics](https://stockanalysis.com/stocks/hood/statistics/) |
| 流通股數 | 900.51M | [StockAnalysis Overview](https://stockanalysis.com/stocks/hood/) |
| 無風險利率 (10Y) | 4.36%（U.S. Treasury 2026-05-06 最新可得日資料） | [U.S. Treasury Daily Treasury Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value_month=202605) |
| Base WACC | 16.96% | 計算：4.36% + 2.29 × 5.5% |
| 現價 | $79.06 | [StockAnalysis Overview](https://stockanalysis.com/stocks/hood/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 11.18% | 1.5% | 17.46% | $36.68 | $79.06 | -53.6%（高估） |
| 基準 | 18.64% | 2.5% | 16.96% | $49.21 | $79.06 | -37.8%（高估） |
| 樂觀 | 26.10% | 3.5% | 16.46% | $67.40 | $79.06 | -14.7%（高估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：HOOD 近年 FCF 波動大且多年度為負，5yr FCF CAGR 不具可比性；本模型改用公開頁面列示的 5Y revenue growth forecast 18.64% 作為基準 FCF 成長 proxy。
- WACC 組成：無風險利率 4.36% + Beta 2.29 x 5.5% ERP = 16.96%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：59.3%（基準情境）。
- 終值佔比未超過 70%，但 HOOD 的估值仍高度依賴 FCF 穩定性、交易量、利率、crypto 與新業務收入假設。

## 結論

基準情境下，HOOD 估算內在價值為 $49.21/股，較 $79.06 現價低約 37.8%，模型顯示安全邊際不足。主要不確定因子是 FCF 的高度波動、成長率 proxy 是否能轉化為可持續自由現金流，以及高 Beta 導致的折現率敏感度。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
