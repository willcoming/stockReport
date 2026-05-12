# DTC — DCF 估值報告

**as_of_date：2026-05-07**  
**projection_years：5 年**  
**公司識別：DTC 為 Solo Brands 舊 ticker；公開報價與財務頁目前多以 SBDS 顯示。**

## DCF 估值結果

DTC / SBDS 最近 5 年 FCF 為：2025 -$58.65M、2024 -$4.00M、2023 $53.33M、2022 $23.15M、2021 -$20.89M。因 5 年中有 3 年 FCF 為負，依 skill 規則改用 **EV/EBITDA multiple-based fallback**；下表不是標準 FCF DCF，而是 distressed / multiple fallback 估值。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 估值方法 | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|----------|-----------|------|---------|
| 悲觀 | N/A | N/A | 31.89% | 12.34x EV/EBITDA | -$68.65 | $5.35 | -1,383%（高估） |
| 基準 | N/A | N/A | 31.39% | 15.43x EV/EBITDA | -$62.19 | $5.35 | -1,262%（高估） |
| 樂觀 | N/A | N/A | 30.89% | 18.52x EV/EBITDA | -$55.72 | $5.35 | -1,141%（高估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$58.65M | [StockAnalysis Cash Flow](https://stockanalysis.com/quote/otc/SBDS/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（5 年中 3 年 FCF 為負，CAGR 不具解釋力） | [StockAnalysis Cash Flow](https://stockanalysis.com/quote/otc/SBDS/financials/cash-flow-statement/) |
| FY2025 EBITDA | $5.37M | [StockAnalysis Income Statement](https://stockanalysis.com/quote/otc/SBDS/financials/) |
| Beta | 4.92 | [MarketBeat](https://www.marketbeat.com/stocks/NYSE/SBDS/) |
| Total Debt | $262.27M | [StockAnalysis Balance Sheet](https://stockanalysis.com/quote/otc/SBDS/financials/balance-sheet/) |
| Cash & Equivalents | $20.03M | [StockAnalysis Balance Sheet](https://stockanalysis.com/quote/otc/SBDS/financials/balance-sheet/) |
| Net Debt | $242.24M | 計算：$262.27M - $20.03M |
| 流通股數 | 2.563M | [MarketBeat](https://www.marketbeat.com/stocks/NYSE/SBDS/) |
| 無風險利率 (10Y) | 4.332% | [MarketScreener / Reuters US 10Y Cash](https://www.marketscreener.com/news/u-s-treasury-yields-hold-declines-after-data-yield-on-10-year-treasury-note-last-down-2-2-basis-po-ce7f58d3de88f020) |
| Base WACC | 31.39% | 計算：4.332% + 4.92 × 5.5% |
| 現價 | $5.35 | [MarketBeat](https://www.marketbeat.com/stocks/NYSE/SBDS/) |
| Consumer Cyclical median EV/EBITDA | 15.43x | [Westmount Fundamentals 2026 EV/EBITDA](https://westmountfundamentals.com/ev-ebitda-sectors) |

## 關鍵假設說明

- FCF 成長率來源：不適用；最近 5 年 FCF 有 3 年為負，且最近一年 FCF 為 -$58.65M，因此未使用 FCF CAGR 作為 DCF 成長率。
- WACC 組成：無風險利率 4.332% + Beta 4.92 × 5.5% ERP = 31.39%；悲觀 / 樂觀情境分別加減 0.5 個百分點。
- Fallback multiple：以 Consumer Cyclical 2026 median EV/EBITDA 15.43x 作為基準；悲觀為 0.8× median，樂觀為 1.2× median。
- 終值佔總估值比重：N/A（本次未使用 FCF terminal value DCF）。
- 主要敏感因子：淨負債 $242.24M 遠高於 FY2025 EBITDA $5.37M；即使套用 18.52x EV/EBITDA，模型推導 equity value 仍為負值。

## 結論

基準 fallback 估值下，DTC / SBDS 的模型內在價值為 -$62.19/股，顯示以 FY2025 EBITDA 與目前淨負債結構計算，普通股沒有可見安全邊際。最主要的不確定因子是公司能否讓 FCF 持續轉正、提高 EBITDA，並降低或重組高額債務負擔。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
