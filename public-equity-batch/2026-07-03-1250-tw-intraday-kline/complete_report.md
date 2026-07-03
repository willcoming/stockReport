# StockLoop PEI 完整批次報告 2026-07-03 - TW K-line

- 產出時間：2026-07-03 12:52:08
- 標的池檔數：54
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-03-1250_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

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

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 54 |
| 分類 | 現在可以買名單 | 54 |
| 研究標籤 | missing | 54 |
| 研究狀態 | missing | 54 |
| 估值狀態 | missing | 54 |
| 風控狀態 | missing | 54 |
| 期限 underwrite | missing（未提供期限 underwrite） | 54 |
| 決策就緒 | 否 | 54 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 54 |
| market_data_not_complete | 54 |
| official_validation_not_complete | 54 |
| research_status_not_complete | 54 |
| risk_status_not_complete | 54 |
| valuation_status_not_complete | 54 |

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
| 006205 | 富邦上証 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-006205/summary.html) | [風險](companies/tw-006205/risk_plan.html) | [啟動報告](companies/tw-006205/initiation.html) |
| 00632R | 元大台灣50反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00632R/summary.html) | [風險](companies/tw-00632R/risk_plan.html) | [啟動報告](companies/tw-00632R/initiation.html) |
| 00641R | 富邦日本反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00641R/summary.html) | [風險](companies/tw-00641R/risk_plan.html) | [啟動報告](companies/tw-00641R/initiation.html) |
| 00657K | 國泰日經225+U | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00657K/summary.html) | [風險](companies/tw-00657K/risk_plan.html) | [啟動報告](companies/tw-00657K/initiation.html) |
| 00664R | 國泰臺灣加權反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00664R/summary.html) | [風險](companies/tw-00664R/risk_plan.html) | [啟動報告](companies/tw-00664R/initiation.html) |
| 00676R | 富邦臺灣加權反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00676R/summary.html) | [風險](companies/tw-00676R/risk_plan.html) | [啟動報告](companies/tw-00676R/initiation.html) |
| 00684R | 期元大美元指反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00684R/summary.html) | [風險](companies/tw-00684R/risk_plan.html) | [啟動報告](companies/tw-00684R/initiation.html) |
| 00686R | 群益臺灣加權反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00686R/summary.html) | [風險](companies/tw-00686R/risk_plan.html) | [啟動報告](companies/tw-00686R/initiation.html) |
| 00707R | 期元大S&P日圓反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00707R/summary.html) | [風險](companies/tw-00707R/risk_plan.html) | [啟動報告](companies/tw-00707R/initiation.html) |
| 1103 | 嘉泥 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1103/summary.html) | [風險](companies/tw-1103/risk_plan.html) | [啟動報告](companies/tw-1103/initiation.html) |
| 1323 | 永裕 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1323/summary.html) | [風險](companies/tw-1323/risk_plan.html) | [啟動報告](companies/tw-1323/initiation.html) |
| 1341 | 富林-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1341/summary.html) | [風險](companies/tw-1341/risk_plan.html) | [啟動報告](companies/tw-1341/initiation.html) |
| 1512 | 瑞利 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1512/summary.html) | [風險](companies/tw-1512/risk_plan.html) | [啟動報告](companies/tw-1512/initiation.html) |
| 1538 | 正峰 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1538/summary.html) | [風險](companies/tw-1538/risk_plan.html) | [啟動報告](companies/tw-1538/initiation.html) |
| 1618 | 合機 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1618/summary.html) | [風險](companies/tw-1618/risk_plan.html) | [啟動報告](companies/tw-1618/initiation.html) |
| 1725 | 元禎 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1725/summary.html) | [風險](companies/tw-1725/risk_plan.html) | [啟動報告](companies/tw-1725/initiation.html) |
| 2027 | 大成鋼 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2027/summary.html) | [風險](companies/tw-2027/risk_plan.html) | [啟動報告](companies/tw-2027/initiation.html) |
| 2233 | 宇隆 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2233/summary.html) | [風險](companies/tw-2233/risk_plan.html) | [啟動報告](companies/tw-2233/initiation.html) |
| 2321 | 東訊 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2321/summary.html) | [風險](companies/tw-2321/risk_plan.html) | [啟動報告](companies/tw-2321/initiation.html) |
| 2349 | 錸德 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2349/summary.html) | [風險](companies/tw-2349/risk_plan.html) | [啟動報告](companies/tw-2349/initiation.html) |
| 2353 | 宏碁 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2353/summary.html) | [風險](companies/tw-2353/risk_plan.html) | [啟動報告](companies/tw-2353/initiation.html) |
| 2428 | 興勤 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2428/summary.html) | [風險](companies/tw-2428/risk_plan.html) | [啟動報告](companies/tw-2428/initiation.html) |
| 2429 | 銘旺科 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2429/summary.html) | [風險](companies/tw-2429/risk_plan.html) | [啟動報告](companies/tw-2429/initiation.html) |
| 2442 | 新美齊 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2442/summary.html) | [風險](companies/tw-2442/risk_plan.html) | [啟動報告](companies/tw-2442/initiation.html) |
| 2455 | 全新 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2455/summary.html) | [風險](companies/tw-2455/risk_plan.html) | [啟動報告](companies/tw-2455/initiation.html) |
| 2497 | 怡利電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2497/summary.html) | [風險](companies/tw-2497/risk_plan.html) | [啟動報告](companies/tw-2497/initiation.html) |
| 2498 | 宏達電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2498/summary.html) | [風險](companies/tw-2498/risk_plan.html) | [啟動報告](companies/tw-2498/initiation.html) |
| 2538 | 基泰 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2538/summary.html) | [風險](companies/tw-2538/risk_plan.html) | [啟動報告](companies/tw-2538/initiation.html) |
| 2542 | 興富發 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2542/summary.html) | [風險](companies/tw-2542/risk_plan.html) | [啟動報告](companies/tw-2542/initiation.html) |
| 2605 | 新興 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2605/summary.html) | [風險](companies/tw-2605/risk_plan.html) | [啟動報告](companies/tw-2605/initiation.html) |
| 2615 | 萬海 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2615/summary.html) | [風險](companies/tw-2615/risk_plan.html) | [啟動報告](companies/tw-2615/initiation.html) |
| 2889 | 國票金 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2889/summary.html) | [風險](companies/tw-2889/risk_plan.html) | [啟動報告](companies/tw-2889/initiation.html) |
| 3050 | 鈺德 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3050/summary.html) | [風險](companies/tw-3050/risk_plan.html) | [啟動報告](companies/tw-3050/initiation.html) |
| 3130 | 一零四 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3130/summary.html) | [風險](companies/tw-3130/risk_plan.html) | [啟動報告](companies/tw-3130/initiation.html) |
| 3167 | 大量 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3167/summary.html) | [風險](companies/tw-3167/risk_plan.html) | [啟動報告](companies/tw-3167/initiation.html) |
| 3450 | 聯鈞 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3450/summary.html) | [風險](companies/tw-3450/risk_plan.html) | [啟動報告](companies/tw-3450/initiation.html) |
| 3530 | 晶相光 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3530/summary.html) | [風險](companies/tw-3530/risk_plan.html) | [啟動報告](companies/tw-3530/initiation.html) |
| 4108 | 懷特 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4108/summary.html) | [風險](companies/tw-4108/risk_plan.html) | [啟動報告](companies/tw-4108/initiation.html) |
| 4736 | 泰博 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4736/summary.html) | [風險](companies/tw-4736/risk_plan.html) | [啟動報告](companies/tw-4736/initiation.html) |
| 4737 | 華廣 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4737/summary.html) | [風險](companies/tw-4737/risk_plan.html) | [啟動報告](companies/tw-4737/initiation.html) |
| 4770 | 上品 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4770/summary.html) | [風險](companies/tw-4770/risk_plan.html) | [啟動報告](companies/tw-4770/initiation.html) |
| 5306 | 桂盟 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5306/summary.html) | [風險](companies/tw-5306/risk_plan.html) | [啟動報告](companies/tw-5306/initiation.html) |
| 6183 | 關貿 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6183/summary.html) | [風險](companies/tw-6183/risk_plan.html) | [啟動報告](companies/tw-6183/initiation.html) |
| 6225 | 天瀚 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6225/summary.html) | [風險](companies/tw-6225/risk_plan.html) | [啟動報告](companies/tw-6225/initiation.html) |
| 6550 | 北極星藥業-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6550/summary.html) | [風險](companies/tw-6550/risk_plan.html) | [啟動報告](companies/tw-6550/initiation.html) |
| 6657 | 華安 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6657/summary.html) | [風險](companies/tw-6657/risk_plan.html) | [啟動報告](companies/tw-6657/initiation.html) |
| 6715 | 嘉基 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6715/summary.html) | [風險](companies/tw-6715/risk_plan.html) | [啟動報告](companies/tw-6715/initiation.html) |
| 6794 | 向榮生技 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6794/summary.html) | [風險](companies/tw-6794/risk_plan.html) | [啟動報告](companies/tw-6794/initiation.html) |
| 6796 | 晉弘 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6796/summary.html) | [風險](companies/tw-6796/risk_plan.html) | [啟動報告](companies/tw-6796/initiation.html) |
| 6969 | 成信實業*-創 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6969/summary.html) | [風險](companies/tw-6969/risk_plan.html) | [啟動報告](companies/tw-6969/initiation.html) |
| 8429 | 金麗-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8429/summary.html) | [風險](companies/tw-8429/risk_plan.html) | [啟動報告](companies/tw-8429/initiation.html) |
| 8499 | 鼎炫-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8499/summary.html) | [風險](companies/tw-8499/risk_plan.html) | [啟動報告](companies/tw-8499/initiation.html) |
| 9902 | 台火 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9902/summary.html) | [風險](companies/tw-9902/risk_plan.html) | [啟動報告](companies/tw-9902/initiation.html) |
| 9938 | 百和 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9938/summary.html) | [風險](companies/tw-9938/risk_plan.html) | [啟動報告](companies/tw-9938/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 006205 | [摘要](companies/tw-006205/summary.html) | [公司摘要](companies/tw-006205/tearsheet.html) | [啟動報告](companies/tw-006205/initiation.html) | [風險](companies/tw-006205/risk_plan.html) |
| 00632R | [摘要](companies/tw-00632R/summary.html) | [公司摘要](companies/tw-00632R/tearsheet.html) | [啟動報告](companies/tw-00632R/initiation.html) | [風險](companies/tw-00632R/risk_plan.html) |
| 00641R | [摘要](companies/tw-00641R/summary.html) | [公司摘要](companies/tw-00641R/tearsheet.html) | [啟動報告](companies/tw-00641R/initiation.html) | [風險](companies/tw-00641R/risk_plan.html) |
| 00657K | [摘要](companies/tw-00657K/summary.html) | [公司摘要](companies/tw-00657K/tearsheet.html) | [啟動報告](companies/tw-00657K/initiation.html) | [風險](companies/tw-00657K/risk_plan.html) |
| 00664R | [摘要](companies/tw-00664R/summary.html) | [公司摘要](companies/tw-00664R/tearsheet.html) | [啟動報告](companies/tw-00664R/initiation.html) | [風險](companies/tw-00664R/risk_plan.html) |
| 00676R | [摘要](companies/tw-00676R/summary.html) | [公司摘要](companies/tw-00676R/tearsheet.html) | [啟動報告](companies/tw-00676R/initiation.html) | [風險](companies/tw-00676R/risk_plan.html) |
| 00684R | [摘要](companies/tw-00684R/summary.html) | [公司摘要](companies/tw-00684R/tearsheet.html) | [啟動報告](companies/tw-00684R/initiation.html) | [風險](companies/tw-00684R/risk_plan.html) |
| 00686R | [摘要](companies/tw-00686R/summary.html) | [公司摘要](companies/tw-00686R/tearsheet.html) | [啟動報告](companies/tw-00686R/initiation.html) | [風險](companies/tw-00686R/risk_plan.html) |
| 00707R | [摘要](companies/tw-00707R/summary.html) | [公司摘要](companies/tw-00707R/tearsheet.html) | [啟動報告](companies/tw-00707R/initiation.html) | [風險](companies/tw-00707R/risk_plan.html) |
| 1103 | [摘要](companies/tw-1103/summary.html) | [公司摘要](companies/tw-1103/tearsheet.html) | [啟動報告](companies/tw-1103/initiation.html) | [風險](companies/tw-1103/risk_plan.html) |
| 1323 | [摘要](companies/tw-1323/summary.html) | [公司摘要](companies/tw-1323/tearsheet.html) | [啟動報告](companies/tw-1323/initiation.html) | [風險](companies/tw-1323/risk_plan.html) |
| 1341 | [摘要](companies/tw-1341/summary.html) | [公司摘要](companies/tw-1341/tearsheet.html) | [啟動報告](companies/tw-1341/initiation.html) | [風險](companies/tw-1341/risk_plan.html) |
| 1512 | [摘要](companies/tw-1512/summary.html) | [公司摘要](companies/tw-1512/tearsheet.html) | [啟動報告](companies/tw-1512/initiation.html) | [風險](companies/tw-1512/risk_plan.html) |
| 1538 | [摘要](companies/tw-1538/summary.html) | [公司摘要](companies/tw-1538/tearsheet.html) | [啟動報告](companies/tw-1538/initiation.html) | [風險](companies/tw-1538/risk_plan.html) |
| 1618 | [摘要](companies/tw-1618/summary.html) | [公司摘要](companies/tw-1618/tearsheet.html) | [啟動報告](companies/tw-1618/initiation.html) | [風險](companies/tw-1618/risk_plan.html) |
| 1725 | [摘要](companies/tw-1725/summary.html) | [公司摘要](companies/tw-1725/tearsheet.html) | [啟動報告](companies/tw-1725/initiation.html) | [風險](companies/tw-1725/risk_plan.html) |
| 2027 | [摘要](companies/tw-2027/summary.html) | [公司摘要](companies/tw-2027/tearsheet.html) | [啟動報告](companies/tw-2027/initiation.html) | [風險](companies/tw-2027/risk_plan.html) |
| 2233 | [摘要](companies/tw-2233/summary.html) | [公司摘要](companies/tw-2233/tearsheet.html) | [啟動報告](companies/tw-2233/initiation.html) | [風險](companies/tw-2233/risk_plan.html) |
| 2321 | [摘要](companies/tw-2321/summary.html) | [公司摘要](companies/tw-2321/tearsheet.html) | [啟動報告](companies/tw-2321/initiation.html) | [風險](companies/tw-2321/risk_plan.html) |
| 2349 | [摘要](companies/tw-2349/summary.html) | [公司摘要](companies/tw-2349/tearsheet.html) | [啟動報告](companies/tw-2349/initiation.html) | [風險](companies/tw-2349/risk_plan.html) |
| 2353 | [摘要](companies/tw-2353/summary.html) | [公司摘要](companies/tw-2353/tearsheet.html) | [啟動報告](companies/tw-2353/initiation.html) | [風險](companies/tw-2353/risk_plan.html) |
| 2428 | [摘要](companies/tw-2428/summary.html) | [公司摘要](companies/tw-2428/tearsheet.html) | [啟動報告](companies/tw-2428/initiation.html) | [風險](companies/tw-2428/risk_plan.html) |
| 2429 | [摘要](companies/tw-2429/summary.html) | [公司摘要](companies/tw-2429/tearsheet.html) | [啟動報告](companies/tw-2429/initiation.html) | [風險](companies/tw-2429/risk_plan.html) |
| 2442 | [摘要](companies/tw-2442/summary.html) | [公司摘要](companies/tw-2442/tearsheet.html) | [啟動報告](companies/tw-2442/initiation.html) | [風險](companies/tw-2442/risk_plan.html) |
| 2455 | [摘要](companies/tw-2455/summary.html) | [公司摘要](companies/tw-2455/tearsheet.html) | [啟動報告](companies/tw-2455/initiation.html) | [風險](companies/tw-2455/risk_plan.html) |
| 2497 | [摘要](companies/tw-2497/summary.html) | [公司摘要](companies/tw-2497/tearsheet.html) | [啟動報告](companies/tw-2497/initiation.html) | [風險](companies/tw-2497/risk_plan.html) |
| 2498 | [摘要](companies/tw-2498/summary.html) | [公司摘要](companies/tw-2498/tearsheet.html) | [啟動報告](companies/tw-2498/initiation.html) | [風險](companies/tw-2498/risk_plan.html) |
| 2538 | [摘要](companies/tw-2538/summary.html) | [公司摘要](companies/tw-2538/tearsheet.html) | [啟動報告](companies/tw-2538/initiation.html) | [風險](companies/tw-2538/risk_plan.html) |
| 2542 | [摘要](companies/tw-2542/summary.html) | [公司摘要](companies/tw-2542/tearsheet.html) | [啟動報告](companies/tw-2542/initiation.html) | [風險](companies/tw-2542/risk_plan.html) |
| 2605 | [摘要](companies/tw-2605/summary.html) | [公司摘要](companies/tw-2605/tearsheet.html) | [啟動報告](companies/tw-2605/initiation.html) | [風險](companies/tw-2605/risk_plan.html) |
| 2615 | [摘要](companies/tw-2615/summary.html) | [公司摘要](companies/tw-2615/tearsheet.html) | [啟動報告](companies/tw-2615/initiation.html) | [風險](companies/tw-2615/risk_plan.html) |
| 2889 | [摘要](companies/tw-2889/summary.html) | [公司摘要](companies/tw-2889/tearsheet.html) | [啟動報告](companies/tw-2889/initiation.html) | [風險](companies/tw-2889/risk_plan.html) |
| 3050 | [摘要](companies/tw-3050/summary.html) | [公司摘要](companies/tw-3050/tearsheet.html) | [啟動報告](companies/tw-3050/initiation.html) | [風險](companies/tw-3050/risk_plan.html) |
| 3130 | [摘要](companies/tw-3130/summary.html) | [公司摘要](companies/tw-3130/tearsheet.html) | [啟動報告](companies/tw-3130/initiation.html) | [風險](companies/tw-3130/risk_plan.html) |
| 3167 | [摘要](companies/tw-3167/summary.html) | [公司摘要](companies/tw-3167/tearsheet.html) | [啟動報告](companies/tw-3167/initiation.html) | [風險](companies/tw-3167/risk_plan.html) |
| 3450 | [摘要](companies/tw-3450/summary.html) | [公司摘要](companies/tw-3450/tearsheet.html) | [啟動報告](companies/tw-3450/initiation.html) | [風險](companies/tw-3450/risk_plan.html) |
| 3530 | [摘要](companies/tw-3530/summary.html) | [公司摘要](companies/tw-3530/tearsheet.html) | [啟動報告](companies/tw-3530/initiation.html) | [風險](companies/tw-3530/risk_plan.html) |
| 4108 | [摘要](companies/tw-4108/summary.html) | [公司摘要](companies/tw-4108/tearsheet.html) | [啟動報告](companies/tw-4108/initiation.html) | [風險](companies/tw-4108/risk_plan.html) |
| 4736 | [摘要](companies/tw-4736/summary.html) | [公司摘要](companies/tw-4736/tearsheet.html) | [啟動報告](companies/tw-4736/initiation.html) | [風險](companies/tw-4736/risk_plan.html) |
| 4737 | [摘要](companies/tw-4737/summary.html) | [公司摘要](companies/tw-4737/tearsheet.html) | [啟動報告](companies/tw-4737/initiation.html) | [風險](companies/tw-4737/risk_plan.html) |
| 4770 | [摘要](companies/tw-4770/summary.html) | [公司摘要](companies/tw-4770/tearsheet.html) | [啟動報告](companies/tw-4770/initiation.html) | [風險](companies/tw-4770/risk_plan.html) |
| 5306 | [摘要](companies/tw-5306/summary.html) | [公司摘要](companies/tw-5306/tearsheet.html) | [啟動報告](companies/tw-5306/initiation.html) | [風險](companies/tw-5306/risk_plan.html) |
| 6183 | [摘要](companies/tw-6183/summary.html) | [公司摘要](companies/tw-6183/tearsheet.html) | [啟動報告](companies/tw-6183/initiation.html) | [風險](companies/tw-6183/risk_plan.html) |
| 6225 | [摘要](companies/tw-6225/summary.html) | [公司摘要](companies/tw-6225/tearsheet.html) | [啟動報告](companies/tw-6225/initiation.html) | [風險](companies/tw-6225/risk_plan.html) |
| 6550 | [摘要](companies/tw-6550/summary.html) | [公司摘要](companies/tw-6550/tearsheet.html) | [啟動報告](companies/tw-6550/initiation.html) | [風險](companies/tw-6550/risk_plan.html) |
| 6657 | [摘要](companies/tw-6657/summary.html) | [公司摘要](companies/tw-6657/tearsheet.html) | [啟動報告](companies/tw-6657/initiation.html) | [風險](companies/tw-6657/risk_plan.html) |
| 6715 | [摘要](companies/tw-6715/summary.html) | [公司摘要](companies/tw-6715/tearsheet.html) | [啟動報告](companies/tw-6715/initiation.html) | [風險](companies/tw-6715/risk_plan.html) |
| 6794 | [摘要](companies/tw-6794/summary.html) | [公司摘要](companies/tw-6794/tearsheet.html) | [啟動報告](companies/tw-6794/initiation.html) | [風險](companies/tw-6794/risk_plan.html) |
| 6796 | [摘要](companies/tw-6796/summary.html) | [公司摘要](companies/tw-6796/tearsheet.html) | [啟動報告](companies/tw-6796/initiation.html) | [風險](companies/tw-6796/risk_plan.html) |
| 6969 | [摘要](companies/tw-6969/summary.html) | [公司摘要](companies/tw-6969/tearsheet.html) | [啟動報告](companies/tw-6969/initiation.html) | [風險](companies/tw-6969/risk_plan.html) |
| 8429 | [摘要](companies/tw-8429/summary.html) | [公司摘要](companies/tw-8429/tearsheet.html) | [啟動報告](companies/tw-8429/initiation.html) | [風險](companies/tw-8429/risk_plan.html) |
| 8499 | [摘要](companies/tw-8499/summary.html) | [公司摘要](companies/tw-8499/tearsheet.html) | [啟動報告](companies/tw-8499/initiation.html) | [風險](companies/tw-8499/risk_plan.html) |
| 9902 | [摘要](companies/tw-9902/summary.html) | [公司摘要](companies/tw-9902/tearsheet.html) | [啟動報告](companies/tw-9902/initiation.html) | [風險](companies/tw-9902/risk_plan.html) |
| 9938 | [摘要](companies/tw-9938/summary.html) | [公司摘要](companies/tw-9938/tearsheet.html) | [啟動報告](companies/tw-9938/initiation.html) | [風險](companies/tw-9938/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
