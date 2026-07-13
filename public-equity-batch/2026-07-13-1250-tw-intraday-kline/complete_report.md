# StockLoop PEI 完整批次報告 2026-07-13 - TW K-line

- 產出時間：2026-07-13 13:24:54
- 標的池檔數：60
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-13-1250_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 60 檔標的；來源為 reports/twStock/2026-07-13-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：60 檔。
- 研究狀態 missing：60 檔。
- 期限 underwrite missing（未提供期限 underwrite）：60 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 60 |
| 分類 | 現在可以買名單 | 60 |
| 研究標籤 | missing | 60 |
| 研究狀態 | missing | 60 |
| 估值狀態 | missing | 60 |
| 風控狀態 | missing | 60 |
| 期限 underwrite | missing（未提供期限 underwrite） | 60 |
| 決策就緒 | 否 | 60 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 60 |
| market_data_not_complete | 60 |
| official_validation_not_complete | 60 |
| research_status_not_complete | 60 |
| risk_status_not_complete | 60 |
| valuation_status_not_complete | 60 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- 未記錄共同缺失研究證據。

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0052 | 富邦科技 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-0052/summary.html) | [風險](companies/tw-0052/risk_plan.html) | [啟動報告](companies/tw-0052/initiation.html) |
| 00640L | 富邦日本正2 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00640L/summary.html) | [風險](companies/tw-00640L/risk_plan.html) | [啟動報告](companies/tw-00640L/initiation.html) |
| 00641R | 富邦日本反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00641R/summary.html) | [風險](companies/tw-00641R/risk_plan.html) | [啟動報告](companies/tw-00641R/initiation.html) |
| 00669R | 國泰美國道瓊反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00669R/summary.html) | [風險](companies/tw-00669R/risk_plan.html) | [啟動報告](companies/tw-00669R/initiation.html) |
| 00707R | 期元大S&P日圓反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00707R/summary.html) | [風險](companies/tw-00707R/risk_plan.html) | [啟動報告](companies/tw-00707R/initiation.html) |
| 00938 | 凱基優選30 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00938/summary.html) | [風險](companies/tw-00938/risk_plan.html) | [啟動報告](companies/tw-00938/initiation.html) |
| 00951 | 台新日本半導體 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00951/summary.html) | [風險](companies/tw-00951/risk_plan.html) | [啟動報告](companies/tw-00951/initiation.html) |
| 00954 | 中信日本半導體 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00954/summary.html) | [風險](companies/tw-00954/risk_plan.html) | [啟動報告](companies/tw-00954/initiation.html) |
| 1323 | 永裕 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1323/summary.html) | [風險](companies/tw-1323/risk_plan.html) | [啟動報告](companies/tw-1323/initiation.html) |
| 1339 | 昭輝 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1339/summary.html) | [風險](companies/tw-1339/risk_plan.html) | [啟動報告](companies/tw-1339/initiation.html) |
| 1441 | 大東 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1441/summary.html) | [風險](companies/tw-1441/risk_plan.html) | [啟動報告](companies/tw-1441/initiation.html) |
| 1517 | 利奇 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1517/summary.html) | [風險](companies/tw-1517/risk_plan.html) | [啟動報告](companies/tw-1517/initiation.html) |
| 1541 | 錩泰 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1541/summary.html) | [風險](companies/tw-1541/risk_plan.html) | [啟動報告](companies/tw-1541/initiation.html) |
| 1615 | 大山 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1615/summary.html) | [風險](companies/tw-1615/risk_plan.html) | [啟動報告](companies/tw-1615/initiation.html) |
| 1623 | 大東電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1623/summary.html) | [風險](companies/tw-1623/risk_plan.html) | [啟動報告](companies/tw-1623/initiation.html) |
| 1773 | 勝一 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1773/summary.html) | [風險](companies/tw-1773/risk_plan.html) | [啟動報告](companies/tw-1773/initiation.html) |
| 1903 | 士紙 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1903/summary.html) | [風險](companies/tw-1903/risk_plan.html) | [啟動報告](companies/tw-1903/initiation.html) |
| 1909 | 榮成 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1909/summary.html) | [風險](companies/tw-1909/risk_plan.html) | [啟動報告](companies/tw-1909/initiation.html) |
| 2049 | 上銀 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2049/summary.html) | [風險](companies/tw-2049/risk_plan.html) | [啟動報告](companies/tw-2049/initiation.html) |
| 2062 | 橋椿 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2062/summary.html) | [風險](companies/tw-2062/risk_plan.html) | [啟動報告](companies/tw-2062/initiation.html) |
| 2103 | 台橡 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2103/summary.html) | [風險](companies/tw-2103/risk_plan.html) | [啟動報告](companies/tw-2103/initiation.html) |
| 2109 | 華豐 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2109/summary.html) | [風險](companies/tw-2109/risk_plan.html) | [啟動報告](companies/tw-2109/initiation.html) |
| 2330 | 台積電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2340 | 台亞 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2340/summary.html) | [風險](companies/tw-2340/risk_plan.html) | [啟動報告](companies/tw-2340/initiation.html) |
| 2357 | 華碩 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2357/summary.html) | [風險](companies/tw-2357/risk_plan.html) | [啟動報告](companies/tw-2357/initiation.html) |
| 2406 | 國碩 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2406/summary.html) | [風險](companies/tw-2406/risk_plan.html) | [啟動報告](companies/tw-2406/initiation.html) |
| 2426 | 鼎元 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2426/summary.html) | [風險](companies/tw-2426/risk_plan.html) | [啟動報告](companies/tw-2426/initiation.html) |
| 2431 | 聯昌 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2431/summary.html) | [風險](companies/tw-2431/risk_plan.html) | [啟動報告](companies/tw-2431/initiation.html) |
| 2460 | 建通 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2460/summary.html) | [風險](companies/tw-2460/risk_plan.html) | [啟動報告](companies/tw-2460/initiation.html) |
| 2467 | 志聖 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2467/summary.html) | [風險](companies/tw-2467/risk_plan.html) | [啟動報告](companies/tw-2467/initiation.html) |
| 2705 | 六福 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2705/summary.html) | [風險](companies/tw-2705/risk_plan.html) | [啟動報告](companies/tw-2705/initiation.html) |
| 2880 | 華南金 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2880/summary.html) | [風險](companies/tw-2880/risk_plan.html) | [啟動報告](companies/tw-2880/initiation.html) |
| 2897 | 王道銀行 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2897/summary.html) | [風險](companies/tw-2897/risk_plan.html) | [啟動報告](companies/tw-2897/initiation.html) |
| 2904 | 匯僑 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2904/summary.html) | [風險](companies/tw-2904/risk_plan.html) | [啟動報告](companies/tw-2904/initiation.html) |
| 2912 | 統一超 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2912/summary.html) | [風險](companies/tw-2912/risk_plan.html) | [啟動報告](companies/tw-2912/initiation.html) |
| 3031 | 佰鴻 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3031/summary.html) | [風險](companies/tw-3031/risk_plan.html) | [啟動報告](companies/tw-3031/initiation.html) |
| 3040 | 遠見 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3040/summary.html) | [風險](companies/tw-3040/risk_plan.html) | [啟動報告](companies/tw-3040/initiation.html) |
| 3041 | 揚智 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3041/summary.html) | [風險](companies/tw-3041/risk_plan.html) | [啟動報告](companies/tw-3041/initiation.html) |
| 3047 | 訊舟 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3047/summary.html) | [風險](companies/tw-3047/risk_plan.html) | [啟動報告](companies/tw-3047/initiation.html) |
| 3257 | 虹冠電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3257/summary.html) | [風險](companies/tw-3257/risk_plan.html) | [啟動報告](companies/tw-3257/initiation.html) |
| 3450 | 聯鈞 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3450/summary.html) | [風險](companies/tw-3450/risk_plan.html) | [啟動報告](companies/tw-3450/initiation.html) |
| 3481 | 群創 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3481/summary.html) | [風險](companies/tw-3481/risk_plan.html) | [啟動報告](companies/tw-3481/initiation.html) |
| 3530 | 晶相光 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3530/summary.html) | [風險](companies/tw-3530/risk_plan.html) | [啟動報告](companies/tw-3530/initiation.html) |
| 4532 | 瑞智 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4532/summary.html) | [風險](companies/tw-4532/risk_plan.html) | [啟動報告](companies/tw-4532/initiation.html) |
| 4912 | 聯德控股-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4912/summary.html) | [風險](companies/tw-4912/risk_plan.html) | [啟動報告](companies/tw-4912/initiation.html) |
| 4919 | 新唐 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4919/summary.html) | [風險](companies/tw-4919/risk_plan.html) | [啟動報告](companies/tw-4919/initiation.html) |
| 6133 | 金橋 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6133/summary.html) | [風險](companies/tw-6133/risk_plan.html) | [啟動報告](companies/tw-6133/initiation.html) |
| 6139 | 亞翔 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6139/summary.html) | [風險](companies/tw-6139/risk_plan.html) | [啟動報告](companies/tw-6139/initiation.html) |
| 6277 | 宏正 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6277/summary.html) | [風險](companies/tw-6277/risk_plan.html) | [啟動報告](companies/tw-6277/initiation.html) |
| 6438 | 迅得 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6438/summary.html) | [風險](companies/tw-6438/risk_plan.html) | [啟動報告](companies/tw-6438/initiation.html) |
| 6464 | 台數科 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6464/summary.html) | [風險](companies/tw-6464/risk_plan.html) | [啟動報告](companies/tw-6464/initiation.html) |
| 6504 | 南六 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6504/summary.html) | [風險](companies/tw-6504/risk_plan.html) | [啟動報告](companies/tw-6504/initiation.html) |
| 6579 | 研揚 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6579/summary.html) | [風險](companies/tw-6579/risk_plan.html) | [啟動報告](companies/tw-6579/initiation.html) |
| 6614 | 資拓宏宇 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6614/summary.html) | [風險](companies/tw-6614/risk_plan.html) | [啟動報告](companies/tw-6614/initiation.html) |
| 6794 | 向榮生技 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6794/summary.html) | [風險](companies/tw-6794/risk_plan.html) | [啟動報告](companies/tw-6794/initiation.html) |
| 6914 | 阜爾運通 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6914/summary.html) | [風險](companies/tw-6914/risk_plan.html) | [啟動報告](companies/tw-6914/initiation.html) |
| 6988 | 威力暘-創 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6988/summary.html) | [風險](companies/tw-6988/risk_plan.html) | [啟動報告](companies/tw-6988/initiation.html) |
| 7740 | 熙特爾-創 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-7740/summary.html) | [風險](companies/tw-7740/risk_plan.html) | [啟動報告](companies/tw-7740/initiation.html) |
| 8162 | 微矽電子-創 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8162/summary.html) | [風險](companies/tw-8162/risk_plan.html) | [啟動報告](companies/tw-8162/initiation.html) |
| 8499 | 鼎炫-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8499/summary.html) | [風險](companies/tw-8499/risk_plan.html) | [啟動報告](companies/tw-8499/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 0052 | [摘要](companies/tw-0052/summary.html) | [公司摘要](companies/tw-0052/tearsheet.html) | [啟動報告](companies/tw-0052/initiation.html) | [風險](companies/tw-0052/risk_plan.html) |
| 00640L | [摘要](companies/tw-00640L/summary.html) | [公司摘要](companies/tw-00640L/tearsheet.html) | [啟動報告](companies/tw-00640L/initiation.html) | [風險](companies/tw-00640L/risk_plan.html) |
| 00641R | [摘要](companies/tw-00641R/summary.html) | [公司摘要](companies/tw-00641R/tearsheet.html) | [啟動報告](companies/tw-00641R/initiation.html) | [風險](companies/tw-00641R/risk_plan.html) |
| 00669R | [摘要](companies/tw-00669R/summary.html) | [公司摘要](companies/tw-00669R/tearsheet.html) | [啟動報告](companies/tw-00669R/initiation.html) | [風險](companies/tw-00669R/risk_plan.html) |
| 00707R | [摘要](companies/tw-00707R/summary.html) | [公司摘要](companies/tw-00707R/tearsheet.html) | [啟動報告](companies/tw-00707R/initiation.html) | [風險](companies/tw-00707R/risk_plan.html) |
| 00938 | [摘要](companies/tw-00938/summary.html) | [公司摘要](companies/tw-00938/tearsheet.html) | [啟動報告](companies/tw-00938/initiation.html) | [風險](companies/tw-00938/risk_plan.html) |
| 00951 | [摘要](companies/tw-00951/summary.html) | [公司摘要](companies/tw-00951/tearsheet.html) | [啟動報告](companies/tw-00951/initiation.html) | [風險](companies/tw-00951/risk_plan.html) |
| 00954 | [摘要](companies/tw-00954/summary.html) | [公司摘要](companies/tw-00954/tearsheet.html) | [啟動報告](companies/tw-00954/initiation.html) | [風險](companies/tw-00954/risk_plan.html) |
| 1323 | [摘要](companies/tw-1323/summary.html) | [公司摘要](companies/tw-1323/tearsheet.html) | [啟動報告](companies/tw-1323/initiation.html) | [風險](companies/tw-1323/risk_plan.html) |
| 1339 | [摘要](companies/tw-1339/summary.html) | [公司摘要](companies/tw-1339/tearsheet.html) | [啟動報告](companies/tw-1339/initiation.html) | [風險](companies/tw-1339/risk_plan.html) |
| 1441 | [摘要](companies/tw-1441/summary.html) | [公司摘要](companies/tw-1441/tearsheet.html) | [啟動報告](companies/tw-1441/initiation.html) | [風險](companies/tw-1441/risk_plan.html) |
| 1517 | [摘要](companies/tw-1517/summary.html) | [公司摘要](companies/tw-1517/tearsheet.html) | [啟動報告](companies/tw-1517/initiation.html) | [風險](companies/tw-1517/risk_plan.html) |
| 1541 | [摘要](companies/tw-1541/summary.html) | [公司摘要](companies/tw-1541/tearsheet.html) | [啟動報告](companies/tw-1541/initiation.html) | [風險](companies/tw-1541/risk_plan.html) |
| 1615 | [摘要](companies/tw-1615/summary.html) | [公司摘要](companies/tw-1615/tearsheet.html) | [啟動報告](companies/tw-1615/initiation.html) | [風險](companies/tw-1615/risk_plan.html) |
| 1623 | [摘要](companies/tw-1623/summary.html) | [公司摘要](companies/tw-1623/tearsheet.html) | [啟動報告](companies/tw-1623/initiation.html) | [風險](companies/tw-1623/risk_plan.html) |
| 1773 | [摘要](companies/tw-1773/summary.html) | [公司摘要](companies/tw-1773/tearsheet.html) | [啟動報告](companies/tw-1773/initiation.html) | [風險](companies/tw-1773/risk_plan.html) |
| 1903 | [摘要](companies/tw-1903/summary.html) | [公司摘要](companies/tw-1903/tearsheet.html) | [啟動報告](companies/tw-1903/initiation.html) | [風險](companies/tw-1903/risk_plan.html) |
| 1909 | [摘要](companies/tw-1909/summary.html) | [公司摘要](companies/tw-1909/tearsheet.html) | [啟動報告](companies/tw-1909/initiation.html) | [風險](companies/tw-1909/risk_plan.html) |
| 2049 | [摘要](companies/tw-2049/summary.html) | [公司摘要](companies/tw-2049/tearsheet.html) | [啟動報告](companies/tw-2049/initiation.html) | [風險](companies/tw-2049/risk_plan.html) |
| 2062 | [摘要](companies/tw-2062/summary.html) | [公司摘要](companies/tw-2062/tearsheet.html) | [啟動報告](companies/tw-2062/initiation.html) | [風險](companies/tw-2062/risk_plan.html) |
| 2103 | [摘要](companies/tw-2103/summary.html) | [公司摘要](companies/tw-2103/tearsheet.html) | [啟動報告](companies/tw-2103/initiation.html) | [風險](companies/tw-2103/risk_plan.html) |
| 2109 | [摘要](companies/tw-2109/summary.html) | [公司摘要](companies/tw-2109/tearsheet.html) | [啟動報告](companies/tw-2109/initiation.html) | [風險](companies/tw-2109/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2340 | [摘要](companies/tw-2340/summary.html) | [公司摘要](companies/tw-2340/tearsheet.html) | [啟動報告](companies/tw-2340/initiation.html) | [風險](companies/tw-2340/risk_plan.html) |
| 2357 | [摘要](companies/tw-2357/summary.html) | [公司摘要](companies/tw-2357/tearsheet.html) | [啟動報告](companies/tw-2357/initiation.html) | [風險](companies/tw-2357/risk_plan.html) |
| 2406 | [摘要](companies/tw-2406/summary.html) | [公司摘要](companies/tw-2406/tearsheet.html) | [啟動報告](companies/tw-2406/initiation.html) | [風險](companies/tw-2406/risk_plan.html) |
| 2426 | [摘要](companies/tw-2426/summary.html) | [公司摘要](companies/tw-2426/tearsheet.html) | [啟動報告](companies/tw-2426/initiation.html) | [風險](companies/tw-2426/risk_plan.html) |
| 2431 | [摘要](companies/tw-2431/summary.html) | [公司摘要](companies/tw-2431/tearsheet.html) | [啟動報告](companies/tw-2431/initiation.html) | [風險](companies/tw-2431/risk_plan.html) |
| 2460 | [摘要](companies/tw-2460/summary.html) | [公司摘要](companies/tw-2460/tearsheet.html) | [啟動報告](companies/tw-2460/initiation.html) | [風險](companies/tw-2460/risk_plan.html) |
| 2467 | [摘要](companies/tw-2467/summary.html) | [公司摘要](companies/tw-2467/tearsheet.html) | [啟動報告](companies/tw-2467/initiation.html) | [風險](companies/tw-2467/risk_plan.html) |
| 2705 | [摘要](companies/tw-2705/summary.html) | [公司摘要](companies/tw-2705/tearsheet.html) | [啟動報告](companies/tw-2705/initiation.html) | [風險](companies/tw-2705/risk_plan.html) |
| 2880 | [摘要](companies/tw-2880/summary.html) | [公司摘要](companies/tw-2880/tearsheet.html) | [啟動報告](companies/tw-2880/initiation.html) | [風險](companies/tw-2880/risk_plan.html) |
| 2897 | [摘要](companies/tw-2897/summary.html) | [公司摘要](companies/tw-2897/tearsheet.html) | [啟動報告](companies/tw-2897/initiation.html) | [風險](companies/tw-2897/risk_plan.html) |
| 2904 | [摘要](companies/tw-2904/summary.html) | [公司摘要](companies/tw-2904/tearsheet.html) | [啟動報告](companies/tw-2904/initiation.html) | [風險](companies/tw-2904/risk_plan.html) |
| 2912 | [摘要](companies/tw-2912/summary.html) | [公司摘要](companies/tw-2912/tearsheet.html) | [啟動報告](companies/tw-2912/initiation.html) | [風險](companies/tw-2912/risk_plan.html) |
| 3031 | [摘要](companies/tw-3031/summary.html) | [公司摘要](companies/tw-3031/tearsheet.html) | [啟動報告](companies/tw-3031/initiation.html) | [風險](companies/tw-3031/risk_plan.html) |
| 3040 | [摘要](companies/tw-3040/summary.html) | [公司摘要](companies/tw-3040/tearsheet.html) | [啟動報告](companies/tw-3040/initiation.html) | [風險](companies/tw-3040/risk_plan.html) |
| 3041 | [摘要](companies/tw-3041/summary.html) | [公司摘要](companies/tw-3041/tearsheet.html) | [啟動報告](companies/tw-3041/initiation.html) | [風險](companies/tw-3041/risk_plan.html) |
| 3047 | [摘要](companies/tw-3047/summary.html) | [公司摘要](companies/tw-3047/tearsheet.html) | [啟動報告](companies/tw-3047/initiation.html) | [風險](companies/tw-3047/risk_plan.html) |
| 3257 | [摘要](companies/tw-3257/summary.html) | [公司摘要](companies/tw-3257/tearsheet.html) | [啟動報告](companies/tw-3257/initiation.html) | [風險](companies/tw-3257/risk_plan.html) |
| 3450 | [摘要](companies/tw-3450/summary.html) | [公司摘要](companies/tw-3450/tearsheet.html) | [啟動報告](companies/tw-3450/initiation.html) | [風險](companies/tw-3450/risk_plan.html) |
| 3481 | [摘要](companies/tw-3481/summary.html) | [公司摘要](companies/tw-3481/tearsheet.html) | [啟動報告](companies/tw-3481/initiation.html) | [風險](companies/tw-3481/risk_plan.html) |
| 3530 | [摘要](companies/tw-3530/summary.html) | [公司摘要](companies/tw-3530/tearsheet.html) | [啟動報告](companies/tw-3530/initiation.html) | [風險](companies/tw-3530/risk_plan.html) |
| 4532 | [摘要](companies/tw-4532/summary.html) | [公司摘要](companies/tw-4532/tearsheet.html) | [啟動報告](companies/tw-4532/initiation.html) | [風險](companies/tw-4532/risk_plan.html) |
| 4912 | [摘要](companies/tw-4912/summary.html) | [公司摘要](companies/tw-4912/tearsheet.html) | [啟動報告](companies/tw-4912/initiation.html) | [風險](companies/tw-4912/risk_plan.html) |
| 4919 | [摘要](companies/tw-4919/summary.html) | [公司摘要](companies/tw-4919/tearsheet.html) | [啟動報告](companies/tw-4919/initiation.html) | [風險](companies/tw-4919/risk_plan.html) |
| 6133 | [摘要](companies/tw-6133/summary.html) | [公司摘要](companies/tw-6133/tearsheet.html) | [啟動報告](companies/tw-6133/initiation.html) | [風險](companies/tw-6133/risk_plan.html) |
| 6139 | [摘要](companies/tw-6139/summary.html) | [公司摘要](companies/tw-6139/tearsheet.html) | [啟動報告](companies/tw-6139/initiation.html) | [風險](companies/tw-6139/risk_plan.html) |
| 6277 | [摘要](companies/tw-6277/summary.html) | [公司摘要](companies/tw-6277/tearsheet.html) | [啟動報告](companies/tw-6277/initiation.html) | [風險](companies/tw-6277/risk_plan.html) |
| 6438 | [摘要](companies/tw-6438/summary.html) | [公司摘要](companies/tw-6438/tearsheet.html) | [啟動報告](companies/tw-6438/initiation.html) | [風險](companies/tw-6438/risk_plan.html) |
| 6464 | [摘要](companies/tw-6464/summary.html) | [公司摘要](companies/tw-6464/tearsheet.html) | [啟動報告](companies/tw-6464/initiation.html) | [風險](companies/tw-6464/risk_plan.html) |
| 6504 | [摘要](companies/tw-6504/summary.html) | [公司摘要](companies/tw-6504/tearsheet.html) | [啟動報告](companies/tw-6504/initiation.html) | [風險](companies/tw-6504/risk_plan.html) |
| 6579 | [摘要](companies/tw-6579/summary.html) | [公司摘要](companies/tw-6579/tearsheet.html) | [啟動報告](companies/tw-6579/initiation.html) | [風險](companies/tw-6579/risk_plan.html) |
| 6614 | [摘要](companies/tw-6614/summary.html) | [公司摘要](companies/tw-6614/tearsheet.html) | [啟動報告](companies/tw-6614/initiation.html) | [風險](companies/tw-6614/risk_plan.html) |
| 6794 | [摘要](companies/tw-6794/summary.html) | [公司摘要](companies/tw-6794/tearsheet.html) | [啟動報告](companies/tw-6794/initiation.html) | [風險](companies/tw-6794/risk_plan.html) |
| 6914 | [摘要](companies/tw-6914/summary.html) | [公司摘要](companies/tw-6914/tearsheet.html) | [啟動報告](companies/tw-6914/initiation.html) | [風險](companies/tw-6914/risk_plan.html) |
| 6988 | [摘要](companies/tw-6988/summary.html) | [公司摘要](companies/tw-6988/tearsheet.html) | [啟動報告](companies/tw-6988/initiation.html) | [風險](companies/tw-6988/risk_plan.html) |
| 7740 | [摘要](companies/tw-7740/summary.html) | [公司摘要](companies/tw-7740/tearsheet.html) | [啟動報告](companies/tw-7740/initiation.html) | [風險](companies/tw-7740/risk_plan.html) |
| 8162 | [摘要](companies/tw-8162/summary.html) | [公司摘要](companies/tw-8162/tearsheet.html) | [啟動報告](companies/tw-8162/initiation.html) | [風險](companies/tw-8162/risk_plan.html) |
| 8499 | [摘要](companies/tw-8499/summary.html) | [公司摘要](companies/tw-8499/tearsheet.html) | [啟動報告](companies/tw-8499/initiation.html) | [風險](companies/tw-8499/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
