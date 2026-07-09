# StockLoop PEI 批次摘要 2026-07-09 - TW K-line

- 產出時間：2026-07-09 12:52:30
- 標的池檔數：56
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 56 檔標的；來源為 reports/twStock/2026-07-09-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：56 檔。
- 研究狀態 missing：56 檔。
- 期限 underwrite missing（未提供期限 underwrite）：56 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- missing: 56

## 風控狀態

- missing: 56

## 期限 underwrite

- missing（未提供期限 underwrite）: 56

## Decision-ready gate

- 否: 56

## 下一步 PEI workflow

- investment_horizon_not_complete: 56
- market_data_not_complete: 56
- official_validation_not_complete: 56
- research_status_not_complete: 56
- risk_status_not_complete: 56
- valuation_status_not_complete: 56

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0052 | 富邦科技 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-0052/summary.html) |
| 006205 | 富邦上証 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-006205/summary.html) |
| 00625K | 富邦上証+R | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00625K/summary.html) |
| 00640L | 富邦日本正2 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00640L/summary.html) |
| 00645 | 富邦日本 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00645/summary.html) |
| 00682U | 期元大美元指數 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00682U/summary.html) |
| 00684R | 期元大美元指反1 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00684R/summary.html) |
| 00736 | 國泰新興市場 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00736/summary.html) |
| 00875 | 國泰網路資安 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00875/summary.html) |
| 00971 | 野村美國研發龍頭 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00971/summary.html) |
| 009805 | 新光美國電力基建 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-009805/summary.html) |
| 1337 | 再生-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1337/summary.html) |
| 1536 | 和大 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1536/summary.html) |
| 1537 | 廣隆 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1537/summary.html) |
| 1623 | 大東電 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1623/summary.html) |
| 2034 | 允強 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2034/summary.html) |
| 2324 | 仁寶 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2324/summary.html) |
| 2330 | 台積電 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2330/summary.html) |
| 2348 | 海悅 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2348/summary.html) |
| 2375 | 凱美 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2375/summary.html) |
| 2431 | 聯昌 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2431/summary.html) |
| 2482 | 連宇 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2482/summary.html) |
| 2646 | 星宇航空 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2646/summary.html) |
| 2849 | 安泰銀 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2849/summary.html) |
| 2910 | 統領 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2910/summary.html) |
| 3006 | 晶豪科 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3006/summary.html) |
| 3041 | 揚智 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3041/summary.html) |
| 3047 | 訊舟 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3047/summary.html) |
| 3060 | 銘異 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3060/summary.html) |
| 3356 | 奇偶 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3356/summary.html) |
| 3432 | 台端 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3432/summary.html) |
| 3443 | 創意 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3443/summary.html) |
| 3504 | 揚明光 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3504/summary.html) |
| 3530 | 晶相光 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3530/summary.html) |
| 4934 | 太極 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4934/summary.html) |
| 4958 | 臻鼎-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4958/summary.html) |
| 5234 | 達興材料 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5234/summary.html) |
| 5306 | 桂盟 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5306/summary.html) |
| 5521 | 工信 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5521/summary.html) |
| 6141 | 柏承 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6141/summary.html) |
| 6197 | 佳必琪 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6197/summary.html) |
| 6285 | 啟碁 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6285/summary.html) |
| 6449 | 鈺邦 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6449/summary.html) |
| 6579 | 研揚 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6579/summary.html) |
| 6695 | 芯鼎 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6695/summary.html) |
| 6743 | 安普新 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6743/summary.html) |
| 6781 | AES-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6781/summary.html) |
| 6789 | 采鈺 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6789/summary.html) |
| 6921 | 嘉雨思-創 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6921/summary.html) |
| 6962 | 奕力-KY | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6962/summary.html) |
| 8021 | 尖點 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8021/summary.html) |
| 8028 | 昇陽半導體 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8028/summary.html) |
| 8039 | 台虹 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8039/summary.html) |
| 8081 | 致新 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8081/summary.html) |
| 8103 | 瀚荃 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8103/summary.html) |
| 9918 | 欣天然 | 現在可以買名單 |   |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9918/summary.html) |
