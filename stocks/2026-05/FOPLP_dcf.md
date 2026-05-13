# FOPLP — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 資料不足 | 1.5% | 資料不足 | N/A | N/A | N/A |
| 基準 | 資料不足 | 2.5% | 資料不足 | N/A | N/A | N/A |
| 樂觀 | 資料不足 | 3.5% | 資料不足 | N/A | N/A | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| Ticker 驗證 | 未能確認 `FOPLP` 為可估值上市股票 ticker | Yahoo Finance `https://finance.yahoo.com/quote/FOPLP/`；SEC company tickers `https://www.sec.gov/files/company_tickers.json` |
| 最近一年 FCF | 資料不足 | Yahoo Finance `FOPLP` 無可用 quote/financials |
| 5yr FCF CAGR | 資料不足 | 缺少可驗證 FCF 歷史資料，無法計算 |
| Beta | 資料不足 | Yahoo Finance `FOPLP` 無可用 summary data |
| Net Debt | 資料不足 | Yahoo Finance `FOPLP` 無可用 balance sheet data |
| 流通股數 | 資料不足 | Yahoo Finance `FOPLP` 無可用 shares outstanding data |
| 無風險利率 (10Y) | 4.46% | U.S. Treasury Daily Treasury Yield Curve，2026-05-12 最新可得 10Y |
| WACC | 資料不足 | 缺少可驗證 Beta 與公司資料，未計算可用 WACC |
| 現價 | 資料不足 | Yahoo Finance `FOPLP` 無可用 quote price |
| 計算方式 | Python calculation 已執行，但必要輸入缺失，三情境皆輸出 N/A | Bash / Python DCF guard calculation |

## 關鍵假設說明

- FCF 成長率來源：資料不足；未能取得 `FOPLP` 的公開年度 FCF，不能計算 3yr/5yr FCF CAGR。
- WACC 組成：無風險利率可取得為 4.46%，但 `FOPLP` 的 Beta 不可驗證，因此未產生可用 WACC。
- 終值佔總估值比重：N/A；因 FCF、WACC、net debt、shares outstanding、現價皆不足，無法計算 enterprise value 或 terminal value。
- `FOPLP` 亦常見作為 Fan-Out Panel-Level Packaging 技術縮寫，而非明確上市公司 ticker；因此本次不進行替代公司推測。

## 結論

基準情境下無法判斷 `FOPLP` 被高估或低估，因為缺少可驗證的上市 ticker、FCF、股數、淨負債與現價。依 skill 規則，不能捏造數字，因此本報告將 DCF 估值結果標示為 N/A。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
