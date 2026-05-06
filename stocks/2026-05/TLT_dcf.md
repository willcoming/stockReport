# TLT — DCF 估值報告 (2026-05-06)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的類型 | ETF；追蹤 20+ 年期美國公債指數 | [iShares / BlackRock](https://www.blackrock.com/us/individual/products/239454/ishares-20%2B-year-treasury-bond-etf), [StockAnalysis](https://stockanalysis.com/etf/tlt/) |
| 最近一年 FCF | 資料不足 / 不適用 | [Yahoo Finance Financials](https://finance.yahoo.com/quote/TLT/financials)；TLT 為固定收益 ETF，非營運公司，無可用企業 FCF |
| 5yr FCF CAGR | N/A | 因 FCF 不適用，無法計算 |
| Beta | 0.52 | [StockAnalysis](https://stockanalysis.com/etf/tlt/) |
| Net Debt | 資料不足 / 不適用 | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/TLT/balance-sheet)；ETF 不適用企業 Net Debt DCF 架構 |
| 流通股數 | 497.50M | [StockAnalysis](https://stockanalysis.com/etf/tlt/) |
| 無風險利率 (10Y) | 4.367% | WebSearch：[May 6, 2026 10-year yield reference](https://www.reddit.com/r/MortgageBrokerRates/comments/1t5bnp1/mortgage_market_update_may_6_2026_bonds_rally_on/) |
| WACC | 基準 7.23% | 計算：4.367% + 0.52 × 5.5% |
| 現價 | $86.09 | [StockAnalysis](https://stockanalysis.com/etf/tlt/)；2026-05-06 12:32 PM EDT intraday |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 7.73% | N/A | $86.09 | N/A |
| 基準 | N/A | 2.5% | 7.23% | N/A | $86.09 | N/A |
| 樂觀 | N/A | 3.5% | 6.73% | N/A | $86.09 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：資料不足 / 不適用。TLT 是 iShares 20+ Year Treasury Bond ETF，持有長天期美國公債，非營運公司，沒有可用來做企業 DCF 的 Free Cash Flow、EBITDA 或 Net Debt。
- WACC 組成：無風險利率 4.367% + Beta 0.52 x 5.5% ERP = 7.23%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：N/A（基準情境）。因 FCF 與 Net Debt 不適用，Python DCF calculation 回傳 N/A。
- EV/EBITDA fallback：不適用。TLT 為 ETF，沒有企業 EBITDA；multiple-based fallback 也無法合理套用。

## 結論

TLT 無法用企業 DCF 模型估算每股內在價值，因為它不是產生營運自由現金流的公司，而是追蹤長天期美國公債的固定收益 ETF。對 TLT 的估值更適合使用 NAV、持倉債券殖利率、duration、利率情境與折溢價分析，而不是公司 DCF。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
