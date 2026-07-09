# StockLoop PEI 完整批次報告 2026-07-09 - TW K-line

- 產出時間：2026-07-09 12:52:30
- 標的池檔數：56
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-09-1250_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

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

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 56 |
| 分類 | 現在可以買名單 | 56 |
| 研究標籤 | missing | 56 |
| 研究狀態 | missing | 56 |
| 估值狀態 | missing | 56 |
| 風控狀態 | missing | 56 |
| 期限 underwrite | missing（未提供期限 underwrite） | 56 |
| 決策就緒 | 否 | 56 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 56 |
| market_data_not_complete | 56 |
| official_validation_not_complete | 56 |
| research_status_not_complete | 56 |
| risk_status_not_complete | 56 |
| valuation_status_not_complete | 56 |

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
| 006205 | 富邦上証 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-006205/summary.html) | [風險](companies/tw-006205/risk_plan.html) | [啟動報告](companies/tw-006205/initiation.html) |
| 00625K | 富邦上証+R | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00625K/summary.html) | [風險](companies/tw-00625K/risk_plan.html) | [啟動報告](companies/tw-00625K/initiation.html) |
| 00640L | 富邦日本正2 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00640L/summary.html) | [風險](companies/tw-00640L/risk_plan.html) | [啟動報告](companies/tw-00640L/initiation.html) |
| 00645 | 富邦日本 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00645/summary.html) | [風險](companies/tw-00645/risk_plan.html) | [啟動報告](companies/tw-00645/initiation.html) |
| 00682U | 期元大美元指數 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00682U/summary.html) | [風險](companies/tw-00682U/risk_plan.html) | [啟動報告](companies/tw-00682U/initiation.html) |
| 00684R | 期元大美元指反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00684R/summary.html) | [風險](companies/tw-00684R/risk_plan.html) | [啟動報告](companies/tw-00684R/initiation.html) |
| 00736 | 國泰新興市場 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00736/summary.html) | [風險](companies/tw-00736/risk_plan.html) | [啟動報告](companies/tw-00736/initiation.html) |
| 00875 | 國泰網路資安 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00875/summary.html) | [風險](companies/tw-00875/risk_plan.html) | [啟動報告](companies/tw-00875/initiation.html) |
| 00971 | 野村美國研發龍頭 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00971/summary.html) | [風險](companies/tw-00971/risk_plan.html) | [啟動報告](companies/tw-00971/initiation.html) |
| 009805 | 新光美國電力基建 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-009805/summary.html) | [風險](companies/tw-009805/risk_plan.html) | [啟動報告](companies/tw-009805/initiation.html) |
| 1337 | 再生-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1337/summary.html) | [風險](companies/tw-1337/risk_plan.html) | [啟動報告](companies/tw-1337/initiation.html) |
| 1536 | 和大 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1536/summary.html) | [風險](companies/tw-1536/risk_plan.html) | [啟動報告](companies/tw-1536/initiation.html) |
| 1537 | 廣隆 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1537/summary.html) | [風險](companies/tw-1537/risk_plan.html) | [啟動報告](companies/tw-1537/initiation.html) |
| 1623 | 大東電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1623/summary.html) | [風險](companies/tw-1623/risk_plan.html) | [啟動報告](companies/tw-1623/initiation.html) |
| 2034 | 允強 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2034/summary.html) | [風險](companies/tw-2034/risk_plan.html) | [啟動報告](companies/tw-2034/initiation.html) |
| 2324 | 仁寶 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2324/summary.html) | [風險](companies/tw-2324/risk_plan.html) | [啟動報告](companies/tw-2324/initiation.html) |
| 2330 | 台積電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2348 | 海悅 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2348/summary.html) | [風險](companies/tw-2348/risk_plan.html) | [啟動報告](companies/tw-2348/initiation.html) |
| 2375 | 凱美 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2375/summary.html) | [風險](companies/tw-2375/risk_plan.html) | [啟動報告](companies/tw-2375/initiation.html) |
| 2431 | 聯昌 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2431/summary.html) | [風險](companies/tw-2431/risk_plan.html) | [啟動報告](companies/tw-2431/initiation.html) |
| 2482 | 連宇 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2482/summary.html) | [風險](companies/tw-2482/risk_plan.html) | [啟動報告](companies/tw-2482/initiation.html) |
| 2646 | 星宇航空 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2646/summary.html) | [風險](companies/tw-2646/risk_plan.html) | [啟動報告](companies/tw-2646/initiation.html) |
| 2849 | 安泰銀 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2849/summary.html) | [風險](companies/tw-2849/risk_plan.html) | [啟動報告](companies/tw-2849/initiation.html) |
| 2910 | 統領 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2910/summary.html) | [風險](companies/tw-2910/risk_plan.html) | [啟動報告](companies/tw-2910/initiation.html) |
| 3006 | 晶豪科 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3006/summary.html) | [風險](companies/tw-3006/risk_plan.html) | [啟動報告](companies/tw-3006/initiation.html) |
| 3041 | 揚智 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3041/summary.html) | [風險](companies/tw-3041/risk_plan.html) | [啟動報告](companies/tw-3041/initiation.html) |
| 3047 | 訊舟 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3047/summary.html) | [風險](companies/tw-3047/risk_plan.html) | [啟動報告](companies/tw-3047/initiation.html) |
| 3060 | 銘異 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3060/summary.html) | [風險](companies/tw-3060/risk_plan.html) | [啟動報告](companies/tw-3060/initiation.html) |
| 3356 | 奇偶 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3356/summary.html) | [風險](companies/tw-3356/risk_plan.html) | [啟動報告](companies/tw-3356/initiation.html) |
| 3432 | 台端 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3432/summary.html) | [風險](companies/tw-3432/risk_plan.html) | [啟動報告](companies/tw-3432/initiation.html) |
| 3443 | 創意 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3443/summary.html) | [風險](companies/tw-3443/risk_plan.html) | [啟動報告](companies/tw-3443/initiation.html) |
| 3504 | 揚明光 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3504/summary.html) | [風險](companies/tw-3504/risk_plan.html) | [啟動報告](companies/tw-3504/initiation.html) |
| 3530 | 晶相光 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3530/summary.html) | [風險](companies/tw-3530/risk_plan.html) | [啟動報告](companies/tw-3530/initiation.html) |
| 4934 | 太極 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4934/summary.html) | [風險](companies/tw-4934/risk_plan.html) | [啟動報告](companies/tw-4934/initiation.html) |
| 4958 | 臻鼎-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4958/summary.html) | [風險](companies/tw-4958/risk_plan.html) | [啟動報告](companies/tw-4958/initiation.html) |
| 5234 | 達興材料 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5234/summary.html) | [風險](companies/tw-5234/risk_plan.html) | [啟動報告](companies/tw-5234/initiation.html) |
| 5306 | 桂盟 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5306/summary.html) | [風險](companies/tw-5306/risk_plan.html) | [啟動報告](companies/tw-5306/initiation.html) |
| 5521 | 工信 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5521/summary.html) | [風險](companies/tw-5521/risk_plan.html) | [啟動報告](companies/tw-5521/initiation.html) |
| 6141 | 柏承 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6141/summary.html) | [風險](companies/tw-6141/risk_plan.html) | [啟動報告](companies/tw-6141/initiation.html) |
| 6197 | 佳必琪 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6197/summary.html) | [風險](companies/tw-6197/risk_plan.html) | [啟動報告](companies/tw-6197/initiation.html) |
| 6285 | 啟碁 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6285/summary.html) | [風險](companies/tw-6285/risk_plan.html) | [啟動報告](companies/tw-6285/initiation.html) |
| 6449 | 鈺邦 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6449/summary.html) | [風險](companies/tw-6449/risk_plan.html) | [啟動報告](companies/tw-6449/initiation.html) |
| 6579 | 研揚 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6579/summary.html) | [風險](companies/tw-6579/risk_plan.html) | [啟動報告](companies/tw-6579/initiation.html) |
| 6695 | 芯鼎 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6695/summary.html) | [風險](companies/tw-6695/risk_plan.html) | [啟動報告](companies/tw-6695/initiation.html) |
| 6743 | 安普新 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6743/summary.html) | [風險](companies/tw-6743/risk_plan.html) | [啟動報告](companies/tw-6743/initiation.html) |
| 6781 | AES-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6781/summary.html) | [風險](companies/tw-6781/risk_plan.html) | [啟動報告](companies/tw-6781/initiation.html) |
| 6789 | 采鈺 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6789/summary.html) | [風險](companies/tw-6789/risk_plan.html) | [啟動報告](companies/tw-6789/initiation.html) |
| 6921 | 嘉雨思-創 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6921/summary.html) | [風險](companies/tw-6921/risk_plan.html) | [啟動報告](companies/tw-6921/initiation.html) |
| 6962 | 奕力-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6962/summary.html) | [風險](companies/tw-6962/risk_plan.html) | [啟動報告](companies/tw-6962/initiation.html) |
| 8021 | 尖點 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8021/summary.html) | [風險](companies/tw-8021/risk_plan.html) | [啟動報告](companies/tw-8021/initiation.html) |
| 8028 | 昇陽半導體 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8028/summary.html) | [風險](companies/tw-8028/risk_plan.html) | [啟動報告](companies/tw-8028/initiation.html) |
| 8039 | 台虹 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8039/summary.html) | [風險](companies/tw-8039/risk_plan.html) | [啟動報告](companies/tw-8039/initiation.html) |
| 8081 | 致新 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8081/summary.html) | [風險](companies/tw-8081/risk_plan.html) | [啟動報告](companies/tw-8081/initiation.html) |
| 8103 | 瀚荃 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8103/summary.html) | [風險](companies/tw-8103/risk_plan.html) | [啟動報告](companies/tw-8103/initiation.html) |
| 9918 | 欣天然 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9918/summary.html) | [風險](companies/tw-9918/risk_plan.html) | [啟動報告](companies/tw-9918/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 0052 | [摘要](companies/tw-0052/summary.html) | [公司摘要](companies/tw-0052/tearsheet.html) | [啟動報告](companies/tw-0052/initiation.html) | [風險](companies/tw-0052/risk_plan.html) |
| 006205 | [摘要](companies/tw-006205/summary.html) | [公司摘要](companies/tw-006205/tearsheet.html) | [啟動報告](companies/tw-006205/initiation.html) | [風險](companies/tw-006205/risk_plan.html) |
| 00625K | [摘要](companies/tw-00625K/summary.html) | [公司摘要](companies/tw-00625K/tearsheet.html) | [啟動報告](companies/tw-00625K/initiation.html) | [風險](companies/tw-00625K/risk_plan.html) |
| 00640L | [摘要](companies/tw-00640L/summary.html) | [公司摘要](companies/tw-00640L/tearsheet.html) | [啟動報告](companies/tw-00640L/initiation.html) | [風險](companies/tw-00640L/risk_plan.html) |
| 00645 | [摘要](companies/tw-00645/summary.html) | [公司摘要](companies/tw-00645/tearsheet.html) | [啟動報告](companies/tw-00645/initiation.html) | [風險](companies/tw-00645/risk_plan.html) |
| 00682U | [摘要](companies/tw-00682U/summary.html) | [公司摘要](companies/tw-00682U/tearsheet.html) | [啟動報告](companies/tw-00682U/initiation.html) | [風險](companies/tw-00682U/risk_plan.html) |
| 00684R | [摘要](companies/tw-00684R/summary.html) | [公司摘要](companies/tw-00684R/tearsheet.html) | [啟動報告](companies/tw-00684R/initiation.html) | [風險](companies/tw-00684R/risk_plan.html) |
| 00736 | [摘要](companies/tw-00736/summary.html) | [公司摘要](companies/tw-00736/tearsheet.html) | [啟動報告](companies/tw-00736/initiation.html) | [風險](companies/tw-00736/risk_plan.html) |
| 00875 | [摘要](companies/tw-00875/summary.html) | [公司摘要](companies/tw-00875/tearsheet.html) | [啟動報告](companies/tw-00875/initiation.html) | [風險](companies/tw-00875/risk_plan.html) |
| 00971 | [摘要](companies/tw-00971/summary.html) | [公司摘要](companies/tw-00971/tearsheet.html) | [啟動報告](companies/tw-00971/initiation.html) | [風險](companies/tw-00971/risk_plan.html) |
| 009805 | [摘要](companies/tw-009805/summary.html) | [公司摘要](companies/tw-009805/tearsheet.html) | [啟動報告](companies/tw-009805/initiation.html) | [風險](companies/tw-009805/risk_plan.html) |
| 1337 | [摘要](companies/tw-1337/summary.html) | [公司摘要](companies/tw-1337/tearsheet.html) | [啟動報告](companies/tw-1337/initiation.html) | [風險](companies/tw-1337/risk_plan.html) |
| 1536 | [摘要](companies/tw-1536/summary.html) | [公司摘要](companies/tw-1536/tearsheet.html) | [啟動報告](companies/tw-1536/initiation.html) | [風險](companies/tw-1536/risk_plan.html) |
| 1537 | [摘要](companies/tw-1537/summary.html) | [公司摘要](companies/tw-1537/tearsheet.html) | [啟動報告](companies/tw-1537/initiation.html) | [風險](companies/tw-1537/risk_plan.html) |
| 1623 | [摘要](companies/tw-1623/summary.html) | [公司摘要](companies/tw-1623/tearsheet.html) | [啟動報告](companies/tw-1623/initiation.html) | [風險](companies/tw-1623/risk_plan.html) |
| 2034 | [摘要](companies/tw-2034/summary.html) | [公司摘要](companies/tw-2034/tearsheet.html) | [啟動報告](companies/tw-2034/initiation.html) | [風險](companies/tw-2034/risk_plan.html) |
| 2324 | [摘要](companies/tw-2324/summary.html) | [公司摘要](companies/tw-2324/tearsheet.html) | [啟動報告](companies/tw-2324/initiation.html) | [風險](companies/tw-2324/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2348 | [摘要](companies/tw-2348/summary.html) | [公司摘要](companies/tw-2348/tearsheet.html) | [啟動報告](companies/tw-2348/initiation.html) | [風險](companies/tw-2348/risk_plan.html) |
| 2375 | [摘要](companies/tw-2375/summary.html) | [公司摘要](companies/tw-2375/tearsheet.html) | [啟動報告](companies/tw-2375/initiation.html) | [風險](companies/tw-2375/risk_plan.html) |
| 2431 | [摘要](companies/tw-2431/summary.html) | [公司摘要](companies/tw-2431/tearsheet.html) | [啟動報告](companies/tw-2431/initiation.html) | [風險](companies/tw-2431/risk_plan.html) |
| 2482 | [摘要](companies/tw-2482/summary.html) | [公司摘要](companies/tw-2482/tearsheet.html) | [啟動報告](companies/tw-2482/initiation.html) | [風險](companies/tw-2482/risk_plan.html) |
| 2646 | [摘要](companies/tw-2646/summary.html) | [公司摘要](companies/tw-2646/tearsheet.html) | [啟動報告](companies/tw-2646/initiation.html) | [風險](companies/tw-2646/risk_plan.html) |
| 2849 | [摘要](companies/tw-2849/summary.html) | [公司摘要](companies/tw-2849/tearsheet.html) | [啟動報告](companies/tw-2849/initiation.html) | [風險](companies/tw-2849/risk_plan.html) |
| 2910 | [摘要](companies/tw-2910/summary.html) | [公司摘要](companies/tw-2910/tearsheet.html) | [啟動報告](companies/tw-2910/initiation.html) | [風險](companies/tw-2910/risk_plan.html) |
| 3006 | [摘要](companies/tw-3006/summary.html) | [公司摘要](companies/tw-3006/tearsheet.html) | [啟動報告](companies/tw-3006/initiation.html) | [風險](companies/tw-3006/risk_plan.html) |
| 3041 | [摘要](companies/tw-3041/summary.html) | [公司摘要](companies/tw-3041/tearsheet.html) | [啟動報告](companies/tw-3041/initiation.html) | [風險](companies/tw-3041/risk_plan.html) |
| 3047 | [摘要](companies/tw-3047/summary.html) | [公司摘要](companies/tw-3047/tearsheet.html) | [啟動報告](companies/tw-3047/initiation.html) | [風險](companies/tw-3047/risk_plan.html) |
| 3060 | [摘要](companies/tw-3060/summary.html) | [公司摘要](companies/tw-3060/tearsheet.html) | [啟動報告](companies/tw-3060/initiation.html) | [風險](companies/tw-3060/risk_plan.html) |
| 3356 | [摘要](companies/tw-3356/summary.html) | [公司摘要](companies/tw-3356/tearsheet.html) | [啟動報告](companies/tw-3356/initiation.html) | [風險](companies/tw-3356/risk_plan.html) |
| 3432 | [摘要](companies/tw-3432/summary.html) | [公司摘要](companies/tw-3432/tearsheet.html) | [啟動報告](companies/tw-3432/initiation.html) | [風險](companies/tw-3432/risk_plan.html) |
| 3443 | [摘要](companies/tw-3443/summary.html) | [公司摘要](companies/tw-3443/tearsheet.html) | [啟動報告](companies/tw-3443/initiation.html) | [風險](companies/tw-3443/risk_plan.html) |
| 3504 | [摘要](companies/tw-3504/summary.html) | [公司摘要](companies/tw-3504/tearsheet.html) | [啟動報告](companies/tw-3504/initiation.html) | [風險](companies/tw-3504/risk_plan.html) |
| 3530 | [摘要](companies/tw-3530/summary.html) | [公司摘要](companies/tw-3530/tearsheet.html) | [啟動報告](companies/tw-3530/initiation.html) | [風險](companies/tw-3530/risk_plan.html) |
| 4934 | [摘要](companies/tw-4934/summary.html) | [公司摘要](companies/tw-4934/tearsheet.html) | [啟動報告](companies/tw-4934/initiation.html) | [風險](companies/tw-4934/risk_plan.html) |
| 4958 | [摘要](companies/tw-4958/summary.html) | [公司摘要](companies/tw-4958/tearsheet.html) | [啟動報告](companies/tw-4958/initiation.html) | [風險](companies/tw-4958/risk_plan.html) |
| 5234 | [摘要](companies/tw-5234/summary.html) | [公司摘要](companies/tw-5234/tearsheet.html) | [啟動報告](companies/tw-5234/initiation.html) | [風險](companies/tw-5234/risk_plan.html) |
| 5306 | [摘要](companies/tw-5306/summary.html) | [公司摘要](companies/tw-5306/tearsheet.html) | [啟動報告](companies/tw-5306/initiation.html) | [風險](companies/tw-5306/risk_plan.html) |
| 5521 | [摘要](companies/tw-5521/summary.html) | [公司摘要](companies/tw-5521/tearsheet.html) | [啟動報告](companies/tw-5521/initiation.html) | [風險](companies/tw-5521/risk_plan.html) |
| 6141 | [摘要](companies/tw-6141/summary.html) | [公司摘要](companies/tw-6141/tearsheet.html) | [啟動報告](companies/tw-6141/initiation.html) | [風險](companies/tw-6141/risk_plan.html) |
| 6197 | [摘要](companies/tw-6197/summary.html) | [公司摘要](companies/tw-6197/tearsheet.html) | [啟動報告](companies/tw-6197/initiation.html) | [風險](companies/tw-6197/risk_plan.html) |
| 6285 | [摘要](companies/tw-6285/summary.html) | [公司摘要](companies/tw-6285/tearsheet.html) | [啟動報告](companies/tw-6285/initiation.html) | [風險](companies/tw-6285/risk_plan.html) |
| 6449 | [摘要](companies/tw-6449/summary.html) | [公司摘要](companies/tw-6449/tearsheet.html) | [啟動報告](companies/tw-6449/initiation.html) | [風險](companies/tw-6449/risk_plan.html) |
| 6579 | [摘要](companies/tw-6579/summary.html) | [公司摘要](companies/tw-6579/tearsheet.html) | [啟動報告](companies/tw-6579/initiation.html) | [風險](companies/tw-6579/risk_plan.html) |
| 6695 | [摘要](companies/tw-6695/summary.html) | [公司摘要](companies/tw-6695/tearsheet.html) | [啟動報告](companies/tw-6695/initiation.html) | [風險](companies/tw-6695/risk_plan.html) |
| 6743 | [摘要](companies/tw-6743/summary.html) | [公司摘要](companies/tw-6743/tearsheet.html) | [啟動報告](companies/tw-6743/initiation.html) | [風險](companies/tw-6743/risk_plan.html) |
| 6781 | [摘要](companies/tw-6781/summary.html) | [公司摘要](companies/tw-6781/tearsheet.html) | [啟動報告](companies/tw-6781/initiation.html) | [風險](companies/tw-6781/risk_plan.html) |
| 6789 | [摘要](companies/tw-6789/summary.html) | [公司摘要](companies/tw-6789/tearsheet.html) | [啟動報告](companies/tw-6789/initiation.html) | [風險](companies/tw-6789/risk_plan.html) |
| 6921 | [摘要](companies/tw-6921/summary.html) | [公司摘要](companies/tw-6921/tearsheet.html) | [啟動報告](companies/tw-6921/initiation.html) | [風險](companies/tw-6921/risk_plan.html) |
| 6962 | [摘要](companies/tw-6962/summary.html) | [公司摘要](companies/tw-6962/tearsheet.html) | [啟動報告](companies/tw-6962/initiation.html) | [風險](companies/tw-6962/risk_plan.html) |
| 8021 | [摘要](companies/tw-8021/summary.html) | [公司摘要](companies/tw-8021/tearsheet.html) | [啟動報告](companies/tw-8021/initiation.html) | [風險](companies/tw-8021/risk_plan.html) |
| 8028 | [摘要](companies/tw-8028/summary.html) | [公司摘要](companies/tw-8028/tearsheet.html) | [啟動報告](companies/tw-8028/initiation.html) | [風險](companies/tw-8028/risk_plan.html) |
| 8039 | [摘要](companies/tw-8039/summary.html) | [公司摘要](companies/tw-8039/tearsheet.html) | [啟動報告](companies/tw-8039/initiation.html) | [風險](companies/tw-8039/risk_plan.html) |
| 8081 | [摘要](companies/tw-8081/summary.html) | [公司摘要](companies/tw-8081/tearsheet.html) | [啟動報告](companies/tw-8081/initiation.html) | [風險](companies/tw-8081/risk_plan.html) |
| 8103 | [摘要](companies/tw-8103/summary.html) | [公司摘要](companies/tw-8103/tearsheet.html) | [啟動報告](companies/tw-8103/initiation.html) | [風險](companies/tw-8103/risk_plan.html) |
| 9918 | [摘要](companies/tw-9918/summary.html) | [公司摘要](companies/tw-9918/tearsheet.html) | [啟動報告](companies/tw-9918/initiation.html) | [風險](companies/tw-9918/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
