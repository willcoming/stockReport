# CBRS — DCF 估值報告 (2026-05-09)

## DCF 估值結果

CBRS 最近一年 FCF 為負，且公開 IPO 財務資料僅涵蓋 2024-2025，無法計算 3 年或 5 年 FCF CAGR；因此依 skill 規則，以下採用 **EV/EBITDA multiple-based fallback，不是標準 DCF**。計算已透過 Bash `python3` 執行。

| 情境 | 方法 | EV/EBITDA 假設 | WACC | 內在價值/股 | 現價 / 參考價 | 安全邊際 |
|------|------|----------------|------|------------|---------------|----------|
| 悲觀 | EV/EBITDA fallback | 13.22x | N/A | $22.61 | $120.00 IPO midpoint | -81.2% (高估) |
| 基準 | EV/EBITDA fallback | 18.89x | N/A | $30.04 | $120.00 IPO midpoint | -75.0% (高估) |
| 樂觀 | EV/EBITDA fallback | 24.56x | N/A | $37.47 | $120.00 IPO midpoint | -68.8% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 公司 | Cerebras Systems Inc. | [StockAnalysis / SEC S-1 資料](https://stockanalysis.com/stocks/cbrs/financials/) |
| 最近一年 FCF | -$392.79M | [StockAnalysis Cash Flow；來源標示為 SEC S-1/S-1A](https://stockanalysis.com/stocks/cbrs/financials/cash-flow-statement/) |
| 2024 FCF | $428.54M | [StockAnalysis Cash Flow；來源標示為 SEC S-1/S-1A](https://stockanalysis.com/stocks/cbrs/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 資料不足 | CBRS 僅有 2024-2025 IPO 財務資料，且 2025 FCF 轉負 |
| Revenue | $509.99M | [StockAnalysis Income Statement](https://stockanalysis.com/stocks/cbrs/financials/) |
| EBITDA | $279.34M | [StockAnalysis Income Statement](https://stockanalysis.com/stocks/cbrs/financials/) |
| Beta | 資料不足；模型預設 1.00 | [StockAnalysis Statistics 顯示 Beta n/a](https://stockanalysis.com/stocks/cbrs/statistics/) |
| Total Debt | $215.96M | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/cbrs/financials/balance-sheet/) |
| Cash & Cash Equivalents | $1.337B | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/cbrs/financials/balance-sheet/) |
| Net Debt | -$1.121B | 計算：$215.96M - $1.337B |
| 流通股數 | 212.97M | [Webull IPO 資料](https://www.webull.com/quote/nasdaq-cbrs) |
| 無風險利率 (10Y) | 4.364% | [Investing.com，美債 10Y 於 2026-05-08 收盤；2026-05-09 為週六](https://www.investing.com/rates-bonds/u.s.-10-year-bond-yield-historical-data) |
| WACC | 悲觀 10.36% / 基準 9.86% / 樂觀 9.36% | 計算：risk-free + Beta 1.00 x 5.5% ERP，並依 skill 加減 0.5% |
| 現價 | 資料不足；尚未上市交易 | [StockAnalysis 顯示 IPO Price Range $115-$125](https://stockanalysis.com/stocks/cbrs/financials/) |
| IPO 參考價 | $120.00 midpoint | [Yahoo Finance / Bloomberg：$115-$125 IPO range](https://finance.yahoo.com/markets/stocks/articles/cerebras-ipo-roadshow-targets-115-114502679.html) |
| 同業 EV/EBITDA median | Technology sector 18.89x | [Westmount Fundamentals 2026 sector EV/EBITDA](https://westmountfundamentals.com/ev-ebitda-sectors) |

## 關鍵假設說明

- FCF 成長率來源：資料不足。CBRS 只有 2024-2025 公開 IPO 財務資料，且 2025 FCF 為 -$392.79M，無法合理推導 3 年或 5 年 FCF CAGR。
- WACC 組成：無風險利率 4.364% + Beta 1.00 x 5.5% ERP = 9.86%（基準情境）；但 fallback 估值使用 EV/EBITDA，未直接使用 WACC 折現。
- fallback multiple：基準情境使用 Technology sector median EV/EBITDA 18.89x；悲觀與樂觀分別使用 0.7x / 1.3x 的情境折減與溢價。
- 終值佔總估值比重：N/A。因未使用 Gordon Growth terminal value，本次沒有終值佔比；估值敏感度主要來自 EV/EBITDA multiple 與 EBITDA 可持續性。
- CBRS 於 as_of_date 仍未正式上市交易，沒有可用現價；本表以 IPO range midpoint $120 作為比較參考，不等同二級市場成交價。

## 結論

在基準 EV/EBITDA fallback 下，CBRS 估算內在價值約 $30.04/股，較 $120 IPO midpoint 低約 75.0%；主要不確定性在於 2025 EBITDA 是否可持續、FCF 轉負是否為短期資本開支週期，以及 IPO 後市場是否願意給予 AI 基礎設施公司遠高於同業中位數的估值倍數。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
