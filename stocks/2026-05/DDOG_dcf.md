# DDOG — DCF 估值報告 (2026-05-08)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 22.9% | 1.5% | 11.99% | $67.24 | $188.73 | -64.4% (高估) |
| 基準 | 38.2% | 2.5% | 11.49% | $122.47 | $188.73 | -35.1% (高估) |
| 樂觀 | 53.5% | 3.5% | 10.99% | $229.53 | $188.73 | +21.6% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $914.7M | [Datadog FY2025 Form 10-K](https://investors.datadoghq.com/static-files/5b3df1c8-8a56-4bee-8b2d-2e2f70239c36) |
| FCF 序列 | 2021 $250.5M；2022 $353.5M；2023 $597.5M；2024 $775.1M；2025 $914.7M | [Datadog FY2021 results](https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-fourth-quarter-and-fiscal-year-2021-financial/)、[FY2022 results](https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-fourth-quarter-and-fiscal-year-2022-financial/)、[FY2024 10-K](https://investors.datadoghq.com/static-files/bf7296e6-b2cd-4464-973a-5f36abefa033)、[FY2025 10-K](https://investors.datadoghq.com/static-files/5b3df1c8-8a56-4bee-8b2d-2e2f70239c36) |
| 2021-2025 FCF CAGR | 38.2% | 以上 FCF 序列計算 |
| Beta | 1.29 | [StockAnalysis DDOG quote](https://stockanalysis.com/stocks/ddog/) |
| Net Debt | -$3.49B | [Datadog FY2025 Form 10-K](https://investors.datadoghq.com/static-files/5b3df1c8-8a56-4bee-8b2d-2e2f70239c36)；$0.98B convertible notes - $4.47B cash & marketable securities |
| 流通股數 | 352.5M | [Datadog FY2025 Form 10-K](https://investors.datadoghq.com/static-files/5b3df1c8-8a56-4bee-8b2d-2e2f70239c36) |
| 無風險利率 (10Y) | 4.39% | [Trading Economics US 10Y, May 8 2026](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 悲觀 11.99%；基準 11.49%；樂觀 10.99% | 計算：10Y yield + Beta x 5.5% ERP，悲觀/樂觀各加減 0.5% |
| 現價 | $188.73 | [StockAnalysis DDOG quote](https://stockanalysis.com/stocks/ddog/)；美股 2026-05-07 收盤價 |

## 關鍵假設說明

- FCF 成長率來源：使用 Datadog 定義的 free cash flow（operating cash flow - property/equipment capex - capitalized software development costs），以 2021-2025 的 FCF 從 $250.5M 成長至 $914.7M 計算 CAGR，基準情境為 38.2%。
- WACC 組成：無風險利率 4.39% + Beta 1.29 x 5.5% ERP = 11.49%（基準）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：69.8%（悲觀）、77.0%（基準）、82.7%（樂觀）。
- 基準與樂觀情境終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- 本模型已用 Bash/Python 依 skill 指定的 DCF 結構計算；單位除每股價格外均為 USD millions。

## 結論

基準情境下，DDOG 的 DCF 內在價值約為 $122.47/股，較 $188.73 現價低約 35.1%，顯示目前價格對未來高成長與終值假設的要求偏高。最主要的不確定因子是 2021-2025 FCF CAGR 是否能在未來 5 年延續，以及終值佔比偏高造成的估值敏感度。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
