# CSCO — DCF 估值報告

## DCF 估值結果

as_of_date：2026-05-15；projection_years：5 年。估值由 Bash/Python 依下方輸入計算。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -3.6% | 1.5% | 9.99% | $24.93 | $115.53 | -78.4% (高估) |
| 基準 | -2.6% | 2.5% | 9.49% | $31.34 | $115.53 | -72.9% (高估) |
| 樂觀 | -1.6% | 3.5% | 8.99% | $41.25 | $115.53 | -64.3% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $11.79B | [StockAnalysis Cash Flow：TTM FCF $11.788B](https://stockanalysis.com/stocks/csco/financials/cash-flow-statement/) |
| FY2021-FY2025 FCF | $14.762B, $12.749B, $19.037B, $10.210B, $13.288B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/csco/financials/cash-flow-statement/) |
| 5yr FCF CAGR | -2.6% | 以上 FY2021-FY2025 FCF 計算 |
| Beta | 0.91 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/csco/statistics/) |
| Net Debt | $14.66B | [StockAnalysis Statistics / Balance Sheet](https://stockanalysis.com/stocks/csco/statistics/) |
| 流通股數 | 3.95B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/csco/statistics/) |
| 無風險利率 (10Y) | 4.47% | [U.S. Treasury Daily Treasury Rates，2026-05-14 10Y](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 9.49%（基準） | 計算：4.47% + 0.91 x 5.5% |
| 現價 | $115.53 | [StockAnalysis：2026-05-14 close](https://stockanalysis.com/stocks/csco/statistics/) |

## 關鍵假設說明

- FCF 成長率來源：使用 FY2021-FY2025 年度 FCF CAGR（-2.6%）作為基準情境；因 CAGR 為負，悲觀/樂觀情境以較差/較佳的負成長區間呈現。
- WACC 組成：無風險利率 4.47% + Beta 0.91 x 5.5% ERP = 9.49%（基準情境）；悲觀加 0.50%，樂觀減 0.50%。
- 終值佔總估值比重：69.6%（基準情境）。
- 樂觀情境終值佔比為 75.3%，超過 70%；結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。

## 結論

基準情境下，CSCO 的 DCF 內在價值約為 $31.34/股，較 $115.53 現價低約 72.9%。本模型的主要不確定因子是 FCF 是否能從 TTM 下滑中恢復、Splunk 整合後的現金流品質，以及高終值比重對折現率假設的敏感性。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
