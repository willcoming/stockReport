# StockLoop PEI 批次摘要 2026-07-03 - TW K-line

- 產出時間：2026-07-03 12:52:08
- 標的池檔數：54
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 54 檔標的；來源為 reports/twStock/2026-07-03-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：54 檔。
- 研究狀態 missing：54 檔。
- 期限 underwrite missing（未提供期限 underwrite）：54 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- missing: 54

## 風控狀態

- missing: 54

## 期限 underwrite

- missing（未提供期限 underwrite）: 54

## Decision-ready gate

- 否: 54

## 下一步 PEI workflow

- investment_horizon_not_complete: 54
- market_data_not_complete: 54
- official_validation_not_complete: 54
- research_status_not_complete: 54
- risk_status_not_complete: 54
- valuation_status_not_complete: 54

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 006205 | 富邦上証 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-006205/summary.html) |
| 00632R | 元大台灣50反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00632R/summary.html) |
| 00641R | 富邦日本反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00641R/summary.html) |
| 00657K | 國泰日經225+U | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00657K/summary.html) |
| 00664R | 國泰臺灣加權反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00664R/summary.html) |
| 00676R | 富邦臺灣加權反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00676R/summary.html) |
| 00684R | 期元大美元指反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00684R/summary.html) |
| 00686R | 群益臺灣加權反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00686R/summary.html) |
| 00707R | 期元大S&P日圓反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00707R/summary.html) |
| 1103 | 嘉泥 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1103/summary.html) |
| 1323 | 永裕 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1323/summary.html) |
| 1341 | 富林-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1341/summary.html) |
| 1512 | 瑞利 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1512/summary.html) |
| 1538 | 正峰 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1538/summary.html) |
| 1618 | 合機 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1618/summary.html) |
| 1725 | 元禎 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1725/summary.html) |
| 2027 | 大成鋼 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2027/summary.html) |
| 2233 | 宇隆 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2233/summary.html) |
| 2321 | 東訊 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2321/summary.html) |
| 2349 | 錸德 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2349/summary.html) |
| 2353 | 宏碁 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2353/summary.html) |
| 2428 | 興勤 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2428/summary.html) |
| 2429 | 銘旺科 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2429/summary.html) |
| 2442 | 新美齊 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2442/summary.html) |
| 2455 | 全新 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2455/summary.html) |
| 2497 | 怡利電 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2497/summary.html) |
| 2498 | 宏達電 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2498/summary.html) |
| 2538 | 基泰 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2538/summary.html) |
| 2542 | 興富發 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2542/summary.html) |
| 2605 | 新興 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2605/summary.html) |
| 2615 | 萬海 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2615/summary.html) |
| 2889 | 國票金 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2889/summary.html) |
| 3050 | 鈺德 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3050/summary.html) |
| 3130 | 一零四 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3130/summary.html) |
| 3167 | 大量 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3167/summary.html) |
| 3450 | 聯鈞 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3450/summary.html) |
| 3530 | 晶相光 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3530/summary.html) |
| 4108 | 懷特 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4108/summary.html) |
| 4736 | 泰博 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4736/summary.html) |
| 4737 | 華廣 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4737/summary.html) |
| 4770 | 上品 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4770/summary.html) |
| 5306 | 桂盟 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5306/summary.html) |
| 6183 | 關貿 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6183/summary.html) |
| 6225 | 天瀚 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6225/summary.html) |
| 6550 | 北極星藥業-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6550/summary.html) |
| 6657 | 華安 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6657/summary.html) |
| 6715 | 嘉基 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6715/summary.html) |
| 6794 | 向榮生技 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6794/summary.html) |
| 6796 | 晉弘 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6796/summary.html) |
| 6969 | 成信實業*-創 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6969/summary.html) |
| 8429 | 金麗-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8429/summary.html) |
| 8499 | 鼎炫-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8499/summary.html) |
| 9902 | 台火 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9902/summary.html) |
| 9938 | 百和 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9938/summary.html) |
