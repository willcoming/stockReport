# StockLoop PEI 批次摘要 2026-07-01 - TW K-line

- 產出時間：2026-07-01 12:53:11
- 標的池檔數：46
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 46 檔標的；來源為 reports/twStock/2026-07-01-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：46 檔。
- 研究狀態 missing：46 檔。
- 期限 underwrite missing（未提供期限 underwrite）：46 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- missing: 46

## 風控狀態

- missing: 46

## 期限 underwrite

- missing（未提供期限 underwrite）: 46

## Decision-ready gate

- 否: 46

## 下一步 PEI workflow

- investment_horizon_not_complete: 46
- market_data_not_complete: 46
- official_validation_not_complete: 46
- research_status_not_complete: 46
- risk_status_not_complete: 46
- valuation_status_not_complete: 46

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 00632R | 元大台灣50反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00632R/summary.html) |
| 00653L | 富邦印度正2 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00653L/summary.html) |
| 00676R | 富邦臺灣加權反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00676R/summary.html) |
| 00684R | 期元大美元指反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00684R/summary.html) |
| 00965 | 元大航太防衛科技 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00965/summary.html) |
| 009812 | 野村日本東證 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-009812/summary.html) |
| 1225 | 福懋油 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1225/summary.html) |
| 1413 | 宏洲 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1413/summary.html) |
| 1419 | 新紡 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1419/summary.html) |
| 1453 | 大將 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1453/summary.html) |
| 1506 | 正道 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1506/summary.html) |
| 1512 | 瑞利 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1512/summary.html) |
| 1521 | 大億 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1521/summary.html) |
| 1527 | 鑽全 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1527/summary.html) |
| 1540 | 喬福 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1540/summary.html) |
| 1721 | 三晃 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1721/summary.html) |
| 1733 | 五鼎 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1733/summary.html) |
| 2106 | 建大 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2106/summary.html) |
| 2312 | 金寶 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2312/summary.html) |
| 2383 | 台光電 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2383/summary.html) |
| 2449 | 京元電子 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2449/summary.html) |
| 2455 | 全新 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2455/summary.html) |
| 2482 | 連宇 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2482/summary.html) |
| 2607 | 榮運 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2607/summary.html) |
| 3008 | 大立光 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3008/summary.html) |
| 3014 | 聯陽 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3014/summary.html) |
| 3045 | 台灣大 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3045/summary.html) |
| 3164 | 景岳 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3164/summary.html) |
| 3447 | 展達 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3447/summary.html) |
| 3591 | 艾笛森 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3591/summary.html) |
| 4133 | 亞諾法 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4133/summary.html) |
| 4942 | 嘉彰 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4942/summary.html) |
| 5203 | 訊連 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5203/summary.html) |
| 6165 | 浪凡 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6165/summary.html) |
| 6201 | 亞弘電 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6201/summary.html) |
| 6235 | 華孚 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6235/summary.html) |
| 6641 | 基士德-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6641/summary.html) |
| 6742 | 澤米 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6742/summary.html) |
| 6838 | 台新藥 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6838/summary.html) |
| 6885 | 全福生技 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6885/summary.html) |
| 6919 | 康霈* | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6919/summary.html) |
| 7732 | 金興精密 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-7732/summary.html) |
| 8103 | 瀚荃 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8103/summary.html) |
| 8442 | 威宏-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8442/summary.html) |
| 8488 | 吉源-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8488/summary.html) |
| 9933 | 中鼎 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9933/summary.html) |
