# QQQ — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 11.60% | N/A | $701.53 | N/A（資料不足） |
| 基準 | N/A | 2.5% | 11.10% | N/A | $701.53 | N/A（資料不足） |
| 樂觀 | N/A | 3.5% | 10.60% | N/A | $701.53 | N/A（資料不足） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | 資料不足 / 不適用 | [Yahoo Finance Financials](https://finance.yahoo.com/quote/QQQ/financials) |
| 5yr FCF CAGR | N/A | 因 QQQ 為 ETF，未揭露公司型 FCF，無法計算 |
| Beta | 1.18（3yr beta） | [Yahoo Finance Summary](https://finance.yahoo.com/quote/QQQ) |
| Net Debt | 資料不足 / 不適用 | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/QQQ/balance-sheet) |
| 流通股數 | 393.1M | [Yahoo Finance Summary](https://finance.yahoo.com/quote/QQQ) |
| 淨資產 | $440.26B | [Yahoo Finance Summary](https://finance.yahoo.com/quote/QQQ) |
| 無風險利率 (10Y) | 4.61%（FRED 最新可得值：2026-05-18） | [FRED DGS10](https://fred.stlouisfed.org/series/DGS10) |
| WACC | 11.10%（基準情境） | 計算：4.61% + 1.18 x 5.5% |
| 現價 | $701.53 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/QQQ) |

## 關鍵假設說明

- FCF 成長率來源：資料不足。QQQ 是 ETF，不是營運公司；Yahoo Finance 未提供可用於公司 DCF 的 Free Cash Flow、營收、公司債務與 EBITDA。
- WACC 組成：無風險利率 4.61% + Beta 1.18 x 5.5% ERP = 11.10%（基準情境）。
- projection_years：5 年。
- 終值佔總估值比重：N/A（基準情境未能計算 DCF 終值）。
- EV/EBITDA fallback：不適用。QQQ 為 ETF，沒有公司型 EBITDA 與企業價值結構，不能用單一公司 multiple-based fallback 替代 DCF。

## 結論

基準情境下，QQQ 無法產生有效 DCF 內在價值/股，因此安全邊際為 N/A。主要限制是 QQQ 作為 ETF 不揭露公司型 FCF、net debt 與 EBITDA；若要估值，較合理的方法是對底層持股做 look-through 估值或以 NAV / 指數估值倍數分析。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
