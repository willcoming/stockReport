# OCS — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A（FCF 為負，未採用） | 1.5% | 6.19% | N/A | $30.29 | N/A |
| 基準 | N/A（FCF 為負，未採用） | 2.5% | 5.69% | N/A | $30.29 | N/A |
| 樂觀 | N/A（FCF 為負，未採用） | 3.5% | 5.19% | N/A | $30.29 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| as_of_date | 2026-05-17；美股最近收盤為 2026-05-15 | 使用者輸入；[StockAnalysis OCS](https://stockanalysis.com/stocks/ocs/) |
| 最近一年 FCF | -CHF 66.61M（FY2025） | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/ocs/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（FY2021-FY2025 皆為負 FCF） | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/ocs/financials/cash-flow-statement/)；計算 |
| TTM FCF | -$85.59M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ocs/statistics/) |
| TTM EBITDA | -$102.81M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ocs/statistics/) |
| Beta | 0.20 | [StockAnalysis OCS](https://stockanalysis.com/stocks/ocs/) |
| Cash & Equivalents | $268.63M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ocs/statistics/) |
| Total Debt | $2.92M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ocs/statistics/) |
| Net Debt | -$265.72M（net cash） | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ocs/statistics/)；計算 |
| 流通股數 | 59.17M | [StockAnalysis OCS](https://stockanalysis.com/stocks/ocs/) |
| 無風險利率 (10Y) | 4.59% | [Slickcharts / Treasury.gov data](https://www.slickcharts.com/treasury/10-year) |
| WACC | 悲觀 6.19%；基準 5.69%；樂觀 5.19% | 計算 |
| 現價 | $30.29 | [StockAnalysis OCS](https://stockanalysis.com/stocks/ocs/) |

## 關鍵假設說明

- FCF 成長率來源：OCS FY2021-FY2025 annual FCF 皆為負值，因此無法計算有經濟意義的 5yr FCF CAGR；DCF 主模型不適用。
- WACC 組成：無風險利率 4.59% + Beta 0.20 x 5.5% ERP = 5.69%（基準情境）；悲觀/樂觀情境分別加減 0.5%。
- EV/EBITDA fallback：FCF 有 5/5 年為負，觸發 fallback；但 TTM EBITDA 為 -$102.81M，因此 EV/EBITDA multiple-based fallback 也不具可解釋性。
- 終值佔總估值比重：N/A（基準情境未產生有效 DCF 估值）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀；本次因 DCF 不適用，未計算終值佔比。

## 結論

基準情境下，OCS 因歷史 FCF 與 EBITDA 皆為負，無法用傳統 DCF 或 EV/EBITDA fallback 推導可靠的每股內在價值，因此安全邊際為 N/A。對 OCS 的估值主要取決於臨床試驗、核准機率、商業化時程與未來融資稀釋，而非目前現金流折現結果。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
