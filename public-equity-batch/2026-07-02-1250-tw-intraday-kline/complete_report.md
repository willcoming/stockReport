# StockLoop PEI 完整批次報告 2026-07-02 - TW K-line

- 產出時間：2026-07-02 12:53:12
- 標的池檔數：66
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-02-1250_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 66 檔標的；來源為 reports/twStock/2026-07-02-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：66 檔。
- 研究狀態 missing：66 檔。
- 期限 underwrite missing（未提供期限 underwrite）：66 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 66 |
| 分類 | 現在可以買名單 | 66 |
| 研究標籤 | missing | 66 |
| 研究狀態 | missing | 66 |
| 估值狀態 | missing | 66 |
| 風控狀態 | missing | 66 |
| 期限 underwrite | missing（未提供期限 underwrite） | 66 |
| 決策就緒 | 否 | 66 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 66 |
| market_data_not_complete | 66 |
| official_validation_not_complete | 66 |
| research_status_not_complete | 66 |
| risk_status_not_complete | 66 |
| valuation_status_not_complete | 66 |

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
| 00625K | 富邦上証+R | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00625K/summary.html) | [風險](companies/tw-00625K/risk_plan.html) | [啟動報告](companies/tw-00625K/initiation.html) |
| 00633L | 富邦上証正2 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00633L/summary.html) | [風險](companies/tw-00633L/risk_plan.html) | [啟動報告](companies/tw-00633L/initiation.html) |
| 00637L | 元大滬深300正2 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00637L/summary.html) | [風險](companies/tw-00637L/risk_plan.html) | [啟動報告](companies/tw-00637L/initiation.html) |
| 00850 | 元大臺灣ESG永續 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00850/summary.html) | [風險](companies/tw-00850/risk_plan.html) | [啟動報告](companies/tw-00850/initiation.html) |
| 00904 | 新光臺灣半導體30 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00904/summary.html) | [風險](companies/tw-00904/risk_plan.html) | [啟動報告](companies/tw-00904/initiation.html) |
| 00905 | FT臺灣Smart | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00905/summary.html) | [風險](companies/tw-00905/risk_plan.html) | [啟動報告](companies/tw-00905/initiation.html) |
| 00913 | 兆豐台灣晶圓製造 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00913/summary.html) | [風險](companies/tw-00913/risk_plan.html) | [啟動報告](companies/tw-00913/initiation.html) |
| 009804 | 聯邦台精彩50 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-009804/summary.html) | [風險](companies/tw-009804/risk_plan.html) | [啟動報告](companies/tw-009804/initiation.html) |
| 009816 | 凱基台灣TOP50 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-009816/summary.html) | [風險](companies/tw-009816/risk_plan.html) | [啟動報告](companies/tw-009816/initiation.html) |
| 1413 | 宏洲 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1413/summary.html) | [風險](companies/tw-1413/risk_plan.html) | [啟動報告](companies/tw-1413/initiation.html) |
| 1445 | 大宇 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1445/summary.html) | [風險](companies/tw-1445/risk_plan.html) | [啟動報告](companies/tw-1445/initiation.html) |
| 1452 | 宏益 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1452/summary.html) | [風險](companies/tw-1452/risk_plan.html) | [啟動報告](companies/tw-1452/initiation.html) |
| 1453 | 大將 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1453/summary.html) | [風險](companies/tw-1453/risk_plan.html) | [啟動報告](companies/tw-1453/initiation.html) |
| 1503 | 士電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1503/summary.html) | [風險](companies/tw-1503/risk_plan.html) | [啟動報告](companies/tw-1503/initiation.html) |
| 1513 | 中興電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1513/summary.html) | [風險](companies/tw-1513/risk_plan.html) | [啟動報告](companies/tw-1513/initiation.html) |
| 1538 | 正峰 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1538/summary.html) | [風險](companies/tw-1538/risk_plan.html) | [啟動報告](companies/tw-1538/initiation.html) |
| 1560 | 中砂 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1560/summary.html) | [風險](companies/tw-1560/risk_plan.html) | [啟動報告](companies/tw-1560/initiation.html) |
| 1702 | 南僑 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1702/summary.html) | [風險](companies/tw-1702/risk_plan.html) | [啟動報告](companies/tw-1702/initiation.html) |
| 1810 | 和成 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1810/summary.html) | [風險](companies/tw-1810/risk_plan.html) | [啟動報告](companies/tw-1810/initiation.html) |
| 1909 | 榮成 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1909/summary.html) | [風險](companies/tw-1909/risk_plan.html) | [啟動報告](companies/tw-1909/initiation.html) |
| 2017 | 官田鋼 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2017/summary.html) | [風險](companies/tw-2017/risk_plan.html) | [啟動報告](companies/tw-2017/initiation.html) |
| 2207 | 和泰車 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2207/summary.html) | [風險](companies/tw-2207/risk_plan.html) | [啟動報告](companies/tw-2207/initiation.html) |
| 2321 | 東訊 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2321/summary.html) | [風險](companies/tw-2321/risk_plan.html) | [啟動報告](companies/tw-2321/initiation.html) |
| 2344 | 華邦電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2344/summary.html) | [風險](companies/tw-2344/risk_plan.html) | [啟動報告](companies/tw-2344/initiation.html) |
| 2359 | 所羅門 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2359/summary.html) | [風險](companies/tw-2359/risk_plan.html) | [啟動報告](companies/tw-2359/initiation.html) |
| 2404 | 漢唐 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2404/summary.html) | [風險](companies/tw-2404/risk_plan.html) | [啟動報告](companies/tw-2404/initiation.html) |
| 2417 | 圓剛 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2417/summary.html) | [風險](companies/tw-2417/risk_plan.html) | [啟動報告](companies/tw-2417/initiation.html) |
| 2453 | 凌群 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2453/summary.html) | [風險](companies/tw-2453/risk_plan.html) | [啟動報告](companies/tw-2453/initiation.html) |
| 2471 | 資通 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2471/summary.html) | [風險](companies/tw-2471/risk_plan.html) | [啟動報告](companies/tw-2471/initiation.html) |
| 2474 | 可成 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2474/summary.html) | [風險](companies/tw-2474/risk_plan.html) | [啟動報告](companies/tw-2474/initiation.html) |
| 2476 | 鉅祥 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2476/summary.html) | [風險](companies/tw-2476/risk_plan.html) | [啟動報告](companies/tw-2476/initiation.html) |
| 2486 | 一詮 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2486/summary.html) | [風險](companies/tw-2486/risk_plan.html) | [啟動報告](companies/tw-2486/initiation.html) |
| 2867 | 三商壽 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2867/summary.html) | [風險](companies/tw-2867/risk_plan.html) | [啟動報告](companies/tw-2867/initiation.html) |
| 2897 | 王道銀行 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2897/summary.html) | [風險](companies/tw-2897/risk_plan.html) | [啟動報告](companies/tw-2897/initiation.html) |
| 2912 | 統一超 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2912/summary.html) | [風險](companies/tw-2912/risk_plan.html) | [啟動報告](companies/tw-2912/initiation.html) |
| 3003 | 健和興 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3003/summary.html) | [風險](companies/tw-3003/risk_plan.html) | [啟動報告](companies/tw-3003/initiation.html) |
| 3060 | 銘異 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3060/summary.html) | [風險](companies/tw-3060/risk_plan.html) | [啟動報告](companies/tw-3060/initiation.html) |
| 3312 | 弘憶股 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3312/summary.html) | [風險](companies/tw-3312/risk_plan.html) | [啟動報告](companies/tw-3312/initiation.html) |
| 3530 | 晶相光 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3530/summary.html) | [風險](companies/tw-3530/risk_plan.html) | [啟動報告](companies/tw-3530/initiation.html) |
| 3653 | 健策 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3653/summary.html) | [風險](companies/tw-3653/risk_plan.html) | [啟動報告](companies/tw-3653/initiation.html) |
| 3665 | 貿聯-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3665/summary.html) | [風險](companies/tw-3665/risk_plan.html) | [啟動報告](companies/tw-3665/initiation.html) |
| 3673 | TPK-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3673/summary.html) | [風險](companies/tw-3673/risk_plan.html) | [啟動報告](companies/tw-3673/initiation.html) |
| 3715 | 定穎投控 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3715/summary.html) | [風險](companies/tw-3715/risk_plan.html) | [啟動報告](companies/tw-3715/initiation.html) |
| 4133 | 亞諾法 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4133/summary.html) | [風險](companies/tw-4133/risk_plan.html) | [啟動報告](companies/tw-4133/initiation.html) |
| 4739 | 康普 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4739/summary.html) | [風險](companies/tw-4739/risk_plan.html) | [啟動報告](companies/tw-4739/initiation.html) |
| 4766 | 南寶 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4766/summary.html) | [風險](companies/tw-4766/risk_plan.html) | [啟動報告](companies/tw-4766/initiation.html) |
| 4942 | 嘉彰 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4942/summary.html) | [風險](companies/tw-4942/risk_plan.html) | [啟動報告](companies/tw-4942/initiation.html) |
| 4952 | 凌通 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4952/summary.html) | [風險](companies/tw-4952/risk_plan.html) | [啟動報告](companies/tw-4952/initiation.html) |
| 4976 | 佳凌 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4976/summary.html) | [風險](companies/tw-4976/risk_plan.html) | [啟動報告](companies/tw-4976/initiation.html) |
| 5469 | 瀚宇博 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5469/summary.html) | [風險](companies/tw-5469/risk_plan.html) | [啟動報告](companies/tw-5469/initiation.html) |
| 5471 | 松翰 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5471/summary.html) | [風險](companies/tw-5471/risk_plan.html) | [啟動報告](companies/tw-5471/initiation.html) |
| 5608 | 四維航 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5608/summary.html) | [風險](companies/tw-5608/risk_plan.html) | [啟動報告](companies/tw-5608/initiation.html) |
| 6431 | 光麗-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6431/summary.html) | [風險](companies/tw-6431/risk_plan.html) | [啟動報告](companies/tw-6431/initiation.html) |
| 6491 | 晶碩 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6491/summary.html) | [風險](companies/tw-6491/risk_plan.html) | [啟動報告](companies/tw-6491/initiation.html) |
| 6504 | 南六 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6504/summary.html) | [風險](companies/tw-6504/risk_plan.html) | [啟動報告](companies/tw-6504/initiation.html) |
| 6515 | 穎崴 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6515/summary.html) | [風險](companies/tw-6515/risk_plan.html) | [啟動報告](companies/tw-6515/initiation.html) |
| 6591 | 動力-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6591/summary.html) | [風險](companies/tw-6591/risk_plan.html) | [啟動報告](companies/tw-6591/initiation.html) |
| 6715 | 嘉基 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6715/summary.html) | [風險](companies/tw-6715/risk_plan.html) | [啟動報告](companies/tw-6715/initiation.html) |
| 6838 | 台新藥 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6838/summary.html) | [風險](companies/tw-6838/risk_plan.html) | [啟動報告](companies/tw-6838/initiation.html) |
| 6885 | 全福生技 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6885/summary.html) | [風險](companies/tw-6885/risk_plan.html) | [啟動報告](companies/tw-6885/initiation.html) |
| 6908 | 宏碁遊戲-創 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6908/summary.html) | [風險](companies/tw-6908/risk_plan.html) | [啟動報告](companies/tw-6908/initiation.html) |
| 6921 | 嘉雨思-創 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6921/summary.html) | [風險](companies/tw-6921/risk_plan.html) | [啟動報告](companies/tw-6921/initiation.html) |
| 6952 | 大武山 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6952/summary.html) | [風險](companies/tw-6952/risk_plan.html) | [啟動報告](companies/tw-6952/initiation.html) |
| 8104 | 錸寶 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8104/summary.html) | [風險](companies/tw-8104/risk_plan.html) | [啟動報告](companies/tw-8104/initiation.html) |
| 9136 | 巨騰-DR | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9136/summary.html) | [風險](companies/tw-9136/risk_plan.html) | [啟動報告](companies/tw-9136/initiation.html) |
| 9912 | 偉聯 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9912/summary.html) | [風險](companies/tw-9912/risk_plan.html) | [啟動報告](companies/tw-9912/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 00625K | [摘要](companies/tw-00625K/summary.html) | [公司摘要](companies/tw-00625K/tearsheet.html) | [啟動報告](companies/tw-00625K/initiation.html) | [風險](companies/tw-00625K/risk_plan.html) |
| 00633L | [摘要](companies/tw-00633L/summary.html) | [公司摘要](companies/tw-00633L/tearsheet.html) | [啟動報告](companies/tw-00633L/initiation.html) | [風險](companies/tw-00633L/risk_plan.html) |
| 00637L | [摘要](companies/tw-00637L/summary.html) | [公司摘要](companies/tw-00637L/tearsheet.html) | [啟動報告](companies/tw-00637L/initiation.html) | [風險](companies/tw-00637L/risk_plan.html) |
| 00850 | [摘要](companies/tw-00850/summary.html) | [公司摘要](companies/tw-00850/tearsheet.html) | [啟動報告](companies/tw-00850/initiation.html) | [風險](companies/tw-00850/risk_plan.html) |
| 00904 | [摘要](companies/tw-00904/summary.html) | [公司摘要](companies/tw-00904/tearsheet.html) | [啟動報告](companies/tw-00904/initiation.html) | [風險](companies/tw-00904/risk_plan.html) |
| 00905 | [摘要](companies/tw-00905/summary.html) | [公司摘要](companies/tw-00905/tearsheet.html) | [啟動報告](companies/tw-00905/initiation.html) | [風險](companies/tw-00905/risk_plan.html) |
| 00913 | [摘要](companies/tw-00913/summary.html) | [公司摘要](companies/tw-00913/tearsheet.html) | [啟動報告](companies/tw-00913/initiation.html) | [風險](companies/tw-00913/risk_plan.html) |
| 009804 | [摘要](companies/tw-009804/summary.html) | [公司摘要](companies/tw-009804/tearsheet.html) | [啟動報告](companies/tw-009804/initiation.html) | [風險](companies/tw-009804/risk_plan.html) |
| 009816 | [摘要](companies/tw-009816/summary.html) | [公司摘要](companies/tw-009816/tearsheet.html) | [啟動報告](companies/tw-009816/initiation.html) | [風險](companies/tw-009816/risk_plan.html) |
| 1413 | [摘要](companies/tw-1413/summary.html) | [公司摘要](companies/tw-1413/tearsheet.html) | [啟動報告](companies/tw-1413/initiation.html) | [風險](companies/tw-1413/risk_plan.html) |
| 1445 | [摘要](companies/tw-1445/summary.html) | [公司摘要](companies/tw-1445/tearsheet.html) | [啟動報告](companies/tw-1445/initiation.html) | [風險](companies/tw-1445/risk_plan.html) |
| 1452 | [摘要](companies/tw-1452/summary.html) | [公司摘要](companies/tw-1452/tearsheet.html) | [啟動報告](companies/tw-1452/initiation.html) | [風險](companies/tw-1452/risk_plan.html) |
| 1453 | [摘要](companies/tw-1453/summary.html) | [公司摘要](companies/tw-1453/tearsheet.html) | [啟動報告](companies/tw-1453/initiation.html) | [風險](companies/tw-1453/risk_plan.html) |
| 1503 | [摘要](companies/tw-1503/summary.html) | [公司摘要](companies/tw-1503/tearsheet.html) | [啟動報告](companies/tw-1503/initiation.html) | [風險](companies/tw-1503/risk_plan.html) |
| 1513 | [摘要](companies/tw-1513/summary.html) | [公司摘要](companies/tw-1513/tearsheet.html) | [啟動報告](companies/tw-1513/initiation.html) | [風險](companies/tw-1513/risk_plan.html) |
| 1538 | [摘要](companies/tw-1538/summary.html) | [公司摘要](companies/tw-1538/tearsheet.html) | [啟動報告](companies/tw-1538/initiation.html) | [風險](companies/tw-1538/risk_plan.html) |
| 1560 | [摘要](companies/tw-1560/summary.html) | [公司摘要](companies/tw-1560/tearsheet.html) | [啟動報告](companies/tw-1560/initiation.html) | [風險](companies/tw-1560/risk_plan.html) |
| 1702 | [摘要](companies/tw-1702/summary.html) | [公司摘要](companies/tw-1702/tearsheet.html) | [啟動報告](companies/tw-1702/initiation.html) | [風險](companies/tw-1702/risk_plan.html) |
| 1810 | [摘要](companies/tw-1810/summary.html) | [公司摘要](companies/tw-1810/tearsheet.html) | [啟動報告](companies/tw-1810/initiation.html) | [風險](companies/tw-1810/risk_plan.html) |
| 1909 | [摘要](companies/tw-1909/summary.html) | [公司摘要](companies/tw-1909/tearsheet.html) | [啟動報告](companies/tw-1909/initiation.html) | [風險](companies/tw-1909/risk_plan.html) |
| 2017 | [摘要](companies/tw-2017/summary.html) | [公司摘要](companies/tw-2017/tearsheet.html) | [啟動報告](companies/tw-2017/initiation.html) | [風險](companies/tw-2017/risk_plan.html) |
| 2207 | [摘要](companies/tw-2207/summary.html) | [公司摘要](companies/tw-2207/tearsheet.html) | [啟動報告](companies/tw-2207/initiation.html) | [風險](companies/tw-2207/risk_plan.html) |
| 2321 | [摘要](companies/tw-2321/summary.html) | [公司摘要](companies/tw-2321/tearsheet.html) | [啟動報告](companies/tw-2321/initiation.html) | [風險](companies/tw-2321/risk_plan.html) |
| 2344 | [摘要](companies/tw-2344/summary.html) | [公司摘要](companies/tw-2344/tearsheet.html) | [啟動報告](companies/tw-2344/initiation.html) | [風險](companies/tw-2344/risk_plan.html) |
| 2359 | [摘要](companies/tw-2359/summary.html) | [公司摘要](companies/tw-2359/tearsheet.html) | [啟動報告](companies/tw-2359/initiation.html) | [風險](companies/tw-2359/risk_plan.html) |
| 2404 | [摘要](companies/tw-2404/summary.html) | [公司摘要](companies/tw-2404/tearsheet.html) | [啟動報告](companies/tw-2404/initiation.html) | [風險](companies/tw-2404/risk_plan.html) |
| 2417 | [摘要](companies/tw-2417/summary.html) | [公司摘要](companies/tw-2417/tearsheet.html) | [啟動報告](companies/tw-2417/initiation.html) | [風險](companies/tw-2417/risk_plan.html) |
| 2453 | [摘要](companies/tw-2453/summary.html) | [公司摘要](companies/tw-2453/tearsheet.html) | [啟動報告](companies/tw-2453/initiation.html) | [風險](companies/tw-2453/risk_plan.html) |
| 2471 | [摘要](companies/tw-2471/summary.html) | [公司摘要](companies/tw-2471/tearsheet.html) | [啟動報告](companies/tw-2471/initiation.html) | [風險](companies/tw-2471/risk_plan.html) |
| 2474 | [摘要](companies/tw-2474/summary.html) | [公司摘要](companies/tw-2474/tearsheet.html) | [啟動報告](companies/tw-2474/initiation.html) | [風險](companies/tw-2474/risk_plan.html) |
| 2476 | [摘要](companies/tw-2476/summary.html) | [公司摘要](companies/tw-2476/tearsheet.html) | [啟動報告](companies/tw-2476/initiation.html) | [風險](companies/tw-2476/risk_plan.html) |
| 2486 | [摘要](companies/tw-2486/summary.html) | [公司摘要](companies/tw-2486/tearsheet.html) | [啟動報告](companies/tw-2486/initiation.html) | [風險](companies/tw-2486/risk_plan.html) |
| 2867 | [摘要](companies/tw-2867/summary.html) | [公司摘要](companies/tw-2867/tearsheet.html) | [啟動報告](companies/tw-2867/initiation.html) | [風險](companies/tw-2867/risk_plan.html) |
| 2897 | [摘要](companies/tw-2897/summary.html) | [公司摘要](companies/tw-2897/tearsheet.html) | [啟動報告](companies/tw-2897/initiation.html) | [風險](companies/tw-2897/risk_plan.html) |
| 2912 | [摘要](companies/tw-2912/summary.html) | [公司摘要](companies/tw-2912/tearsheet.html) | [啟動報告](companies/tw-2912/initiation.html) | [風險](companies/tw-2912/risk_plan.html) |
| 3003 | [摘要](companies/tw-3003/summary.html) | [公司摘要](companies/tw-3003/tearsheet.html) | [啟動報告](companies/tw-3003/initiation.html) | [風險](companies/tw-3003/risk_plan.html) |
| 3060 | [摘要](companies/tw-3060/summary.html) | [公司摘要](companies/tw-3060/tearsheet.html) | [啟動報告](companies/tw-3060/initiation.html) | [風險](companies/tw-3060/risk_plan.html) |
| 3312 | [摘要](companies/tw-3312/summary.html) | [公司摘要](companies/tw-3312/tearsheet.html) | [啟動報告](companies/tw-3312/initiation.html) | [風險](companies/tw-3312/risk_plan.html) |
| 3530 | [摘要](companies/tw-3530/summary.html) | [公司摘要](companies/tw-3530/tearsheet.html) | [啟動報告](companies/tw-3530/initiation.html) | [風險](companies/tw-3530/risk_plan.html) |
| 3653 | [摘要](companies/tw-3653/summary.html) | [公司摘要](companies/tw-3653/tearsheet.html) | [啟動報告](companies/tw-3653/initiation.html) | [風險](companies/tw-3653/risk_plan.html) |
| 3665 | [摘要](companies/tw-3665/summary.html) | [公司摘要](companies/tw-3665/tearsheet.html) | [啟動報告](companies/tw-3665/initiation.html) | [風險](companies/tw-3665/risk_plan.html) |
| 3673 | [摘要](companies/tw-3673/summary.html) | [公司摘要](companies/tw-3673/tearsheet.html) | [啟動報告](companies/tw-3673/initiation.html) | [風險](companies/tw-3673/risk_plan.html) |
| 3715 | [摘要](companies/tw-3715/summary.html) | [公司摘要](companies/tw-3715/tearsheet.html) | [啟動報告](companies/tw-3715/initiation.html) | [風險](companies/tw-3715/risk_plan.html) |
| 4133 | [摘要](companies/tw-4133/summary.html) | [公司摘要](companies/tw-4133/tearsheet.html) | [啟動報告](companies/tw-4133/initiation.html) | [風險](companies/tw-4133/risk_plan.html) |
| 4739 | [摘要](companies/tw-4739/summary.html) | [公司摘要](companies/tw-4739/tearsheet.html) | [啟動報告](companies/tw-4739/initiation.html) | [風險](companies/tw-4739/risk_plan.html) |
| 4766 | [摘要](companies/tw-4766/summary.html) | [公司摘要](companies/tw-4766/tearsheet.html) | [啟動報告](companies/tw-4766/initiation.html) | [風險](companies/tw-4766/risk_plan.html) |
| 4942 | [摘要](companies/tw-4942/summary.html) | [公司摘要](companies/tw-4942/tearsheet.html) | [啟動報告](companies/tw-4942/initiation.html) | [風險](companies/tw-4942/risk_plan.html) |
| 4952 | [摘要](companies/tw-4952/summary.html) | [公司摘要](companies/tw-4952/tearsheet.html) | [啟動報告](companies/tw-4952/initiation.html) | [風險](companies/tw-4952/risk_plan.html) |
| 4976 | [摘要](companies/tw-4976/summary.html) | [公司摘要](companies/tw-4976/tearsheet.html) | [啟動報告](companies/tw-4976/initiation.html) | [風險](companies/tw-4976/risk_plan.html) |
| 5469 | [摘要](companies/tw-5469/summary.html) | [公司摘要](companies/tw-5469/tearsheet.html) | [啟動報告](companies/tw-5469/initiation.html) | [風險](companies/tw-5469/risk_plan.html) |
| 5471 | [摘要](companies/tw-5471/summary.html) | [公司摘要](companies/tw-5471/tearsheet.html) | [啟動報告](companies/tw-5471/initiation.html) | [風險](companies/tw-5471/risk_plan.html) |
| 5608 | [摘要](companies/tw-5608/summary.html) | [公司摘要](companies/tw-5608/tearsheet.html) | [啟動報告](companies/tw-5608/initiation.html) | [風險](companies/tw-5608/risk_plan.html) |
| 6431 | [摘要](companies/tw-6431/summary.html) | [公司摘要](companies/tw-6431/tearsheet.html) | [啟動報告](companies/tw-6431/initiation.html) | [風險](companies/tw-6431/risk_plan.html) |
| 6491 | [摘要](companies/tw-6491/summary.html) | [公司摘要](companies/tw-6491/tearsheet.html) | [啟動報告](companies/tw-6491/initiation.html) | [風險](companies/tw-6491/risk_plan.html) |
| 6504 | [摘要](companies/tw-6504/summary.html) | [公司摘要](companies/tw-6504/tearsheet.html) | [啟動報告](companies/tw-6504/initiation.html) | [風險](companies/tw-6504/risk_plan.html) |
| 6515 | [摘要](companies/tw-6515/summary.html) | [公司摘要](companies/tw-6515/tearsheet.html) | [啟動報告](companies/tw-6515/initiation.html) | [風險](companies/tw-6515/risk_plan.html) |
| 6591 | [摘要](companies/tw-6591/summary.html) | [公司摘要](companies/tw-6591/tearsheet.html) | [啟動報告](companies/tw-6591/initiation.html) | [風險](companies/tw-6591/risk_plan.html) |
| 6715 | [摘要](companies/tw-6715/summary.html) | [公司摘要](companies/tw-6715/tearsheet.html) | [啟動報告](companies/tw-6715/initiation.html) | [風險](companies/tw-6715/risk_plan.html) |
| 6838 | [摘要](companies/tw-6838/summary.html) | [公司摘要](companies/tw-6838/tearsheet.html) | [啟動報告](companies/tw-6838/initiation.html) | [風險](companies/tw-6838/risk_plan.html) |
| 6885 | [摘要](companies/tw-6885/summary.html) | [公司摘要](companies/tw-6885/tearsheet.html) | [啟動報告](companies/tw-6885/initiation.html) | [風險](companies/tw-6885/risk_plan.html) |
| 6908 | [摘要](companies/tw-6908/summary.html) | [公司摘要](companies/tw-6908/tearsheet.html) | [啟動報告](companies/tw-6908/initiation.html) | [風險](companies/tw-6908/risk_plan.html) |
| 6921 | [摘要](companies/tw-6921/summary.html) | [公司摘要](companies/tw-6921/tearsheet.html) | [啟動報告](companies/tw-6921/initiation.html) | [風險](companies/tw-6921/risk_plan.html) |
| 6952 | [摘要](companies/tw-6952/summary.html) | [公司摘要](companies/tw-6952/tearsheet.html) | [啟動報告](companies/tw-6952/initiation.html) | [風險](companies/tw-6952/risk_plan.html) |
| 8104 | [摘要](companies/tw-8104/summary.html) | [公司摘要](companies/tw-8104/tearsheet.html) | [啟動報告](companies/tw-8104/initiation.html) | [風險](companies/tw-8104/risk_plan.html) |
| 9136 | [摘要](companies/tw-9136/summary.html) | [公司摘要](companies/tw-9136/tearsheet.html) | [啟動報告](companies/tw-9136/initiation.html) | [風險](companies/tw-9136/risk_plan.html) |
| 9912 | [摘要](companies/tw-9912/summary.html) | [公司摘要](companies/tw-9912/tearsheet.html) | [啟動報告](companies/tw-9912/initiation.html) | [風險](companies/tw-9912/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
