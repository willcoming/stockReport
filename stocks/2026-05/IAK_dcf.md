# IAK — DCF 估值報告 (2026-05-06)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的性質 | ETF；追蹤由美國保險業股票組成的指數 | [BlackRock / iShares IAK](https://www.blackrock.com/us/individual/products/239515/ishares-u-s-insurance-etf) |
| 最近一年 FCF | 資料不足 / 不適用 | IAK 為 ETF，Yahoo Finance financials / cash flow 無單一公司 FCF；Macrotrends fallback 未找到 IAK FCF |
| 5yr FCF CAGR | N/A | 因 FCF 不適用，無法計算 |
| Beta | 0.53 | [BlackRock / iShares：Equity Beta (3y), as of 2026-03-31](https://www.blackrock.com/us/individual/products/239515/ishares-u-s-insurance-etf) |
| Net Debt | 資料不足 / 不適用 | ETF 不揭露單一公司 Total Debt / Cash 結構 |
| 流通股數 | 2.75M ETF shares | [BlackRock / iShares：Shares Outstanding, as of 2026-05-05](https://www.blackrock.com/us/individual/products/239515/ishares-u-s-insurance-etf) |
| 無風險利率 (10Y) | 4.35% | [Yahoo Finance ^TNX historical data, 2026-05-06 close](https://finance.yahoo.com/quote/%5ETNX/history) |
| WACC | 悲觀 7.77% / 基準 7.27% / 樂觀 6.77% | 計算：4.352% + 0.53 × 5.5% ERP ± 0.5% |
| 現價 | $131.79 | [Investing.com IAK historical data, 2026-05-06 close](https://ca.investing.com/etfs/ishares-djsu-insurance-historical-data) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 7.77% | N/A | $131.79 | N/A |
| 基準 | N/A | 2.5% | 7.27% | N/A | $131.79 | N/A |
| 樂觀 | N/A | 3.5% | 6.77% | N/A | $131.79 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：IAK 是 iShares U.S. Insurance ETF，不是營運公司；沒有可直接折現的單一企業 FCF，因此 5 年 FCF CAGR 無法計算。
- WACC 組成：無風險利率 4.35% + Beta 0.53 x 5.5% ERP = 7.27%（基準情境）；悲觀 / 樂觀情境分別加減 0.5%。
- 終值佔總估值比重：N/A（基準情境），因沒有可用 FCF base，無法建立 terminal value。
- EV/EBITDA fallback：不適用；IAK 為 ETF，沒有單一公司 EBITDA、Enterprise Value 或 Net Debt，可用的 P/E、P/B 屬於基金持倉組合特徵，不能直接替代單一企業 DCF。
- 已透過 Bash / Python calculation 執行三情境模型；因 `fcf_base`、`growth`、`net_debt` 均為 N/A，三情境輸出皆為 N/A，未捏造內在價值。

## 結論

基準情境下，IAK 無法用單一公司 DCF 合理估算內在價值，因其為 ETF，缺少 DCF 必需的企業層級 FCF、Net Debt 與 EBITDA。對 IAK 較合適的研究框架應是 ETF 持倉、費用率、追蹤指數、估值倍數、NAV 折溢價與產業曝險分析，而不是單一企業 DCF。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
