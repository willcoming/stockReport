# CRDO — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 32.37% | 1.5% | 22.40% | $27.81 | $189.36 | -85.3% (高估) |
| 基準 | 53.95% | 2.5% | 21.90% | $49.43 | $189.36 | -73.9% (高估) |
| 樂觀 | 75.53% | 3.5% | 21.40% | $89.72 | $189.36 | -52.6% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 估值基準日 | 2026-05-14 | 使用者輸入 |
| 最近一年 FCF | $283.69M（TTM，截至 2026-01-31） | [StockAnalysis CRDO Cash Flow](https://stockanalysis.com/stocks/crdo/financials/cash-flow-statement/) |
| FY2025 FCF | $29.02M | [StockAnalysis CRDO Cash Flow](https://stockanalysis.com/stocks/crdo/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（FY2021-FY2025 有 3 年負 FCF，傳統 CAGR 不適用） | [StockAnalysis CRDO Cash Flow](https://stockanalysis.com/stocks/crdo/financials/cash-flow-statement/) / 計算 |
| Base FCF growth assumption | 53.95% | [StockAnalysis CRDO Statistics - Analyst Forecast](https://stockanalysis.com/stocks/crdo/statistics/) |
| Beta | 3.17 | [StockAnalysis CRDO Statistics](https://stockanalysis.com/stocks/crdo/statistics/) |
| Cash & equivalents / short-term investments | $1.301B | [StockAnalysis CRDO Balance Sheet](https://stockanalysis.com/stocks/crdo/financials/balance-sheet/) |
| Total Debt | $16.28M | [StockAnalysis CRDO Statistics](https://stockanalysis.com/stocks/crdo/statistics/) |
| Net Debt | -$1.285B | 計算：$16.28M - $1.301B |
| 流通股數 | 184.45M | [StockAnalysis CRDO Statistics](https://stockanalysis.com/stocks/crdo/statistics/) |
| 無風險利率 (10Y) | 4.46% | [yieldcurve.pro U.S. Treasury 10 Yr Yield](https://www.yieldcurve.pro/yields/10-year) |
| WACC | 21.90%（基準） | 計算：4.46% + 3.17 x 5.5% |
| 現價 | $189.36（2026-05-13 收盤，EDT） | [StockAnalysis CRDO Statistics](https://stockanalysis.com/stocks/crdo/statistics/) |

## 關鍵假設說明

- FCF 成長率來源：歷史 FCF 因早期年度為負而無法計算可靠 5yr CAGR；基準情境改用公開分析師 5 年收入成長預測 53.95%，悲觀/樂觀分別套用 0.6x / 1.4x。
- WACC 組成：無風險利率 4.46% + Beta 3.17 x 5.5% ERP = 21.90%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：61.5%（基準情境）。
- 終值佔比未超過 70%，但 CRDO 的估值仍高度依賴高成長率能否延續，請謹慎解讀。

## 結論

基準情境下，CRDO 的 DCF 內在價值約為 $49.43/股，較 $189.36 現價低約 73.9%，顯示目前價格已反映非常高的成長預期。最主要的不確定因子是 TTM FCF 是否能在未來 5 年維持高增長，以及高 Beta 導致的折現率壓力。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
