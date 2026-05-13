# PPA — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 9.80% | N/A | $167.44 | N/A |
| 基準 | N/A | 2.5% | 9.30% | N/A | $167.44 | N/A |
| 樂觀 | N/A | 3.5% | 8.80% | N/A | $167.44 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

PPA 是 Invesco Aerospace & Defense ETF，不是單一營運公司；Yahoo Finance 現金流量表、損益表與資產負債表未提供可用的 ETF issuer-level FCF、Total Debt、Cash 與公司層級 EBITDA。因此，本次不能在不捏造數字的前提下完成標準 DCF 或 EV/EBITDA fallback。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | 資料不足 | Yahoo Finance `PPA` financials / cash flow 透過 `yfinance` 查詢為空表 |
| 5yr FCF CAGR | 資料不足 | 因 ETF 無 issuer-level FCF，無法計算 |
| Beta | 0.88 | Yahoo Finance quote API / `yfinance`，`beta3Year` |
| Net Debt | 資料不足 | Yahoo Finance balance sheet 透過 `yfinance` 查詢為空表 |
| 流通股數 | 47.56M | Kraken PPA quote：Shares outstanding 47.56M，https://www.kraken.com/stocks/ppa |
| 無風險利率 (10Y) | 4.46% | U.S. Treasury Daily Treasury Rates，2026-05-12 10 Yr，https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve |
| WACC | 悲觀 9.80% / 基準 9.30% / 樂觀 8.80% | 計算：4.46% + 0.88 x 5.5%，並依情境加減 0.5% |
| 現價 | $167.44 | Yahoo Finance quote API / `yfinance`，regular market price as of 2026-05-13 13:52 UTC |
| ETF 結構 | ETF，追蹤 SPADE Defense Index | ETFdb PPA profile，https://etfdb.com/etf/PPA/；Invesco fact sheet search result |

## 關鍵假設說明

- FCF 成長率來源：N/A。PPA 為 ETF，沒有可直接折現的 issuer-level Free Cash Flow；若要估值，需建立 look-through holdings DCF，對各持股逐一估值後按權重加總，這超出此單一 ticker 標準 DCF 模型。
- WACC 組成：無風險利率 4.46% + Beta 0.88 x 5.5% ERP = 9.30%（基準情境）；悲觀情境加 0.50%，樂觀情境減 0.50%。
- 終值佔總估值比重：N/A（基準情境未能計算）。
- DCF 計算已透過 Python 執行；由於 `fcf_base`、`growth_rate`、`net_debt` 缺失，三情境內在價值結果均為 `null`，未輸出估值數字以避免捏造。

## 結論

基準情境下，PPA 無法用標準單一公司 DCF 得出可靠的每股內在價值，因此也無法計算安全邊際。主要不確定因子不是折現率，而是 ETF 缺少公司層級 FCF 與資本結構資料；合理做法是改用 look-through holdings valuation 或 ETF 相對估值框架。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
