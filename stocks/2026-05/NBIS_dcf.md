# NBIS — DCF 估值報告

## DCF 估值結果

估值基準日：2026-05-15；投影年數：5 年。NBIS 近五個年度 FCF 中有 3 年為負，因此依 skill 規則改採 **EV/EBITDA fallback**；下表是 multiple-based fallback，**不是標準 DCF 終值模型**。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | EV/Adj. EBITDA 倍數 | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-------------------|-----------|------|---------|
| 悲觀 | N/A | N/A | 11.80% | 15.0x | $29.57 | $221.15 | -86.63% (高估) |
| 基準 | N/A | N/A | 11.30% | 22.7x | $45.15 | $221.15 | -79.58% (高估) |
| 樂觀 | N/A | N/A | 10.80% | 30.0x | $59.92 | $221.15 | -72.90% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近 TTM FCF | -$3.155B | [StockAnalysis — Cash Flow Statement](https://stockanalysis.com/stocks/nbis/financials/cash-flow-statement/) |
| FY2021-FY2025 FCF | -$472.35M、+$682.4M、+$746.9M、-$561.9M、-$3.681B | [StockAnalysis — Cash Flow Statement](https://stockanalysis.com/stocks/nbis/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（FCF 跨正負且 3/5 年為負） | 依上述 FCF 計算 |
| Q1 2026 Adjusted EBITDA | $129.5M | [Nebius Q1 2026 results](https://nebius.com/newsroom/nebius-reports-first-quarter-2026-financial-results) |
| Run-rate Adjusted EBITDA | $518.0M | $129.5M x 4，依 [Nebius Q1 2026 results](https://nebius.com/newsroom/nebius-reports-first-quarter-2026-financial-results) 計算 |
| Beta | 1.24 | [StockAnalysis — Statistics](https://stockanalysis.com/stocks/nbis/statistics/) |
| Total Debt | $9.496B | [StockAnalysis — Balance Sheet](https://stockanalysis.com/stocks/nbis/financials/balance-sheet/) |
| Cash & Equivalents | $9.298B | [StockAnalysis — Balance Sheet](https://stockanalysis.com/stocks/nbis/financials/balance-sheet/) |
| Net Debt | $0.198B | 依 Total Debt - Cash 計算 |
| 流通股數 | 256.04M | [StockAnalysis — Statistics](https://stockanalysis.com/stocks/nbis/statistics/) |
| 無風險利率 (10Y) | 4.48% | [Yahoo Finance — 10-year Treasury yield report](https://finance.yahoo.com/news/10-year-treasury-yield-rises-to-highest-level-in-10-months-on-hotter-than-expected-inflation-data-152901840.html/) |
| WACC | 11.30%（基準） | 4.48% + 1.24 x 5.5% |
| 現價 | $221.15 | [StockAnalysis — Statistics](https://stockanalysis.com/stocks/nbis/statistics/) |
| 基準 EV/EBITDA peer multiple | 22.7x | [Houlihan Lokey Digital Infrastructure Industry Update](https://cdn.hl.com/pdf/2025/digital-infrastructure-industry-update-q2-2025.pdf) |

## 關鍵假設說明

- FCF 成長率來源：NBIS 最近五年 FCF 跨正負且 3 年為負，5 年 FCF CAGR 不具可解釋性，因此依 skill 規則使用 EV/EBITDA fallback。
- WACC 組成：無風險利率 4.48% + Beta 1.24 x 5.5% ERP = 11.30%；悲觀 / 樂觀情境分別加減 0.5 個百分點。
- EBITDA 使用 Q1 2026 Adjusted EBITDA $129.5M 年化為 $518.0M；這是非 GAAP 指標，因此估值敏感度高。
- 終值佔總估值比重：N/A。本次未使用標準 DCF 終值模型，因為 FCF 基礎為負且不穩定。

## 結論

基準情境下，NBIS 的 fallback 內在價值約為 $45.15/股，較 $221.15 現價低約 79.58%，安全邊際不足。主要不確定因子是 AI 基礎設施需求、資本支出強度、GPU/電力供應、以及 Adjusted EBITDA 能否快速轉化為可持續正 FCF。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
