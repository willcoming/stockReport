# StockLoop PEI 批次摘要 2026-07-06 - TW K-line

- 產出時間：2026-07-06 12:51:55
- 標的池檔數：31
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 31 檔標的；來源為 reports/twStock/2026-07-06-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：31 檔。
- 研究狀態 missing：31 檔。
- 期限 underwrite missing（未提供期限 underwrite）：31 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- missing: 31

## 風控狀態

- missing: 31

## 期限 underwrite

- missing（未提供期限 underwrite）: 31

## Decision-ready gate

- 否: 31

## 下一步 PEI workflow

- investment_horizon_not_complete: 31
- market_data_not_complete: 31
- official_validation_not_complete: 31
- research_status_not_complete: 31
- risk_status_not_complete: 31
- valuation_status_not_complete: 31

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0061 | 元大寶滬深 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-0061/summary.html) |
| 006207 | 復華滬深 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-006207/summary.html) |
| 00625K | 富邦上証+R | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00625K/summary.html) |
| 00680L | 元大美債20正2 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00680L/summary.html) |
| 00682U | 期元大美元指數 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00682U/summary.html) |
| 00688L | 國泰20年美債正2 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00688L/summary.html) |
| 00707R | 期元大S&P日圓反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00707R/summary.html) |
| 00712 | 復華富時不動產 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00712/summary.html) |
| 00949 | 復華日本龍頭 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00949/summary.html) |
| 1215 | 卜蜂 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1215/summary.html) |
| 1538 | 正峰 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1538/summary.html) |
| 1560 | 中砂 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1560/summary.html) |
| 1808 | 潤隆 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1808/summary.html) |
| 2321 | 東訊 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2321/summary.html) |
| 2351 | 順德 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2351/summary.html) |
| 2362 | 藍天 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2362/summary.html) |
| 2399 | 映泰 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2399/summary.html) |
| 2402 | 毅嘉 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2402/summary.html) |
| 2436 | 偉詮電 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2436/summary.html) |
| 2467 | 志聖 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2467/summary.html) |
| 2498 | 宏達電 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2498/summary.html) |
| 2939 | 永邑-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2939/summary.html) |
| 3028 | 增你強 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3028/summary.html) |
| 3257 | 虹冠電 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3257/summary.html) |
| 3592 | 瑞鼎 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3592/summary.html) |
| 5906 | 台南-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5906/summary.html) |
| 6005 | 群益證 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6005/summary.html) |
| 6282 | 康舒 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6282/summary.html) |
| 6438 | 迅得 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6438/summary.html) |
| 8150 | 南茂 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8150/summary.html) |
| 8996 | 高力 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8996/summary.html) |
