# StockLoop PEI 批次摘要 2026-06-26 - TW K-line

- 產出時間：2026-06-26 13:45:29
- 標的池檔數：32
- 已具備目前價格與研究狀態的列數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 32 檔標的；來源為 reports/twStock/2026-06-26-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：32 檔。
- 研究狀態 missing：32 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- missing: 32

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 00625K | 富邦上証+R | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00625K/summary.html) |
| 00632R | 元大台灣50反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00632R/summary.html) |
| 00634R | 富邦上証反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00634R/summary.html) |
| 00638R | 元大滬深300反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00638R/summary.html) |
| 00641R | 富邦日本反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00641R/summary.html) |
| 00664R | 國泰臺灣加權反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00664R/summary.html) |
| 00671R | 富邦NASDAQ反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00671R/summary.html) |
| 00676R | 富邦臺灣加權反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00676R/summary.html) |
| 00686R | 群益臺灣加權反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00686R/summary.html) |
| 00972 | 野村日本動能高息 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00972/summary.html) |
| 1316 | 上曜 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1316/summary.html) |
| 1447 | 力鵬 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1447/summary.html) |
| 1470 | 大統新創 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1470/summary.html) |
| 2072 | 世紀風電 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2072/summary.html) |
| 2236 | 百達-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2236/summary.html) |
| 2248 | 華勝-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2248/summary.html) |
| 2424 | 隴華 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2424/summary.html) |
| 2480 | 敦陽科 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2480/summary.html) |
| 2910 | 統領 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2910/summary.html) |
| 4106 | 雃博 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-4106/summary.html) |
| 4439 | 冠星-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-4439/summary.html) |
| 4545 | 銘鈺 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-4545/summary.html) |
| 4581 | 光隆精密-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-4581/summary.html) |
| 5515 | 建國 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-5515/summary.html) |
| 6464 | 台數科 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-6464/summary.html) |
| 6743 | 安普新 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-6743/summary.html) |
| 7732 | 金興精密 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-7732/summary.html) |
| 8150 | 南茂 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-8150/summary.html) |
| 9912 | 偉聯 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-9912/summary.html) |
| 9914 | 美利達 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-9914/summary.html) |
| 9937 | 全國 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-9937/summary.html) |
| 9939 | 宏全 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-9939/summary.html) |
