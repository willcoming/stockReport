# StockLoop PEI 完整批次報告 2026-07-06 - TW K-line

- 產出時間：2026-07-06 12:51:55
- 標的池檔數：31
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-06-1250_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

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

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 31 |
| 分類 | 現在可以買名單 | 31 |
| 研究標籤 | missing | 31 |
| 研究狀態 | missing | 31 |
| 估值狀態 | missing | 31 |
| 風控狀態 | missing | 31 |
| 期限 underwrite | missing（未提供期限 underwrite） | 31 |
| 決策就緒 | 否 | 31 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 31 |
| market_data_not_complete | 31 |
| official_validation_not_complete | 31 |
| research_status_not_complete | 31 |
| risk_status_not_complete | 31 |
| valuation_status_not_complete | 31 |

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
| 0061 | 元大寶滬深 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-0061/summary.html) | [風險](companies/tw-0061/risk_plan.html) | [啟動報告](companies/tw-0061/initiation.html) |
| 006207 | 復華滬深 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-006207/summary.html) | [風險](companies/tw-006207/risk_plan.html) | [啟動報告](companies/tw-006207/initiation.html) |
| 00625K | 富邦上証+R | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00625K/summary.html) | [風險](companies/tw-00625K/risk_plan.html) | [啟動報告](companies/tw-00625K/initiation.html) |
| 00680L | 元大美債20正2 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00680L/summary.html) | [風險](companies/tw-00680L/risk_plan.html) | [啟動報告](companies/tw-00680L/initiation.html) |
| 00682U | 期元大美元指數 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00682U/summary.html) | [風險](companies/tw-00682U/risk_plan.html) | [啟動報告](companies/tw-00682U/initiation.html) |
| 00688L | 國泰20年美債正2 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00688L/summary.html) | [風險](companies/tw-00688L/risk_plan.html) | [啟動報告](companies/tw-00688L/initiation.html) |
| 00707R | 期元大S&P日圓反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00707R/summary.html) | [風險](companies/tw-00707R/risk_plan.html) | [啟動報告](companies/tw-00707R/initiation.html) |
| 00712 | 復華富時不動產 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00712/summary.html) | [風險](companies/tw-00712/risk_plan.html) | [啟動報告](companies/tw-00712/initiation.html) |
| 00949 | 復華日本龍頭 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00949/summary.html) | [風險](companies/tw-00949/risk_plan.html) | [啟動報告](companies/tw-00949/initiation.html) |
| 1215 | 卜蜂 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1215/summary.html) | [風險](companies/tw-1215/risk_plan.html) | [啟動報告](companies/tw-1215/initiation.html) |
| 1538 | 正峰 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1538/summary.html) | [風險](companies/tw-1538/risk_plan.html) | [啟動報告](companies/tw-1538/initiation.html) |
| 1560 | 中砂 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1560/summary.html) | [風險](companies/tw-1560/risk_plan.html) | [啟動報告](companies/tw-1560/initiation.html) |
| 1808 | 潤隆 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1808/summary.html) | [風險](companies/tw-1808/risk_plan.html) | [啟動報告](companies/tw-1808/initiation.html) |
| 2321 | 東訊 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2321/summary.html) | [風險](companies/tw-2321/risk_plan.html) | [啟動報告](companies/tw-2321/initiation.html) |
| 2351 | 順德 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2351/summary.html) | [風險](companies/tw-2351/risk_plan.html) | [啟動報告](companies/tw-2351/initiation.html) |
| 2362 | 藍天 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2362/summary.html) | [風險](companies/tw-2362/risk_plan.html) | [啟動報告](companies/tw-2362/initiation.html) |
| 2399 | 映泰 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2399/summary.html) | [風險](companies/tw-2399/risk_plan.html) | [啟動報告](companies/tw-2399/initiation.html) |
| 2402 | 毅嘉 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2402/summary.html) | [風險](companies/tw-2402/risk_plan.html) | [啟動報告](companies/tw-2402/initiation.html) |
| 2436 | 偉詮電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2436/summary.html) | [風險](companies/tw-2436/risk_plan.html) | [啟動報告](companies/tw-2436/initiation.html) |
| 2467 | 志聖 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2467/summary.html) | [風險](companies/tw-2467/risk_plan.html) | [啟動報告](companies/tw-2467/initiation.html) |
| 2498 | 宏達電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2498/summary.html) | [風險](companies/tw-2498/risk_plan.html) | [啟動報告](companies/tw-2498/initiation.html) |
| 2939 | 永邑-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2939/summary.html) | [風險](companies/tw-2939/risk_plan.html) | [啟動報告](companies/tw-2939/initiation.html) |
| 3028 | 增你強 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3028/summary.html) | [風險](companies/tw-3028/risk_plan.html) | [啟動報告](companies/tw-3028/initiation.html) |
| 3257 | 虹冠電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3257/summary.html) | [風險](companies/tw-3257/risk_plan.html) | [啟動報告](companies/tw-3257/initiation.html) |
| 3592 | 瑞鼎 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3592/summary.html) | [風險](companies/tw-3592/risk_plan.html) | [啟動報告](companies/tw-3592/initiation.html) |
| 5906 | 台南-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5906/summary.html) | [風險](companies/tw-5906/risk_plan.html) | [啟動報告](companies/tw-5906/initiation.html) |
| 6005 | 群益證 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6005/summary.html) | [風險](companies/tw-6005/risk_plan.html) | [啟動報告](companies/tw-6005/initiation.html) |
| 6282 | 康舒 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6282/summary.html) | [風險](companies/tw-6282/risk_plan.html) | [啟動報告](companies/tw-6282/initiation.html) |
| 6438 | 迅得 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6438/summary.html) | [風險](companies/tw-6438/risk_plan.html) | [啟動報告](companies/tw-6438/initiation.html) |
| 8150 | 南茂 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8150/summary.html) | [風險](companies/tw-8150/risk_plan.html) | [啟動報告](companies/tw-8150/initiation.html) |
| 8996 | 高力 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8996/summary.html) | [風險](companies/tw-8996/risk_plan.html) | [啟動報告](companies/tw-8996/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 0061 | [摘要](companies/tw-0061/summary.html) | [公司摘要](companies/tw-0061/tearsheet.html) | [啟動報告](companies/tw-0061/initiation.html) | [風險](companies/tw-0061/risk_plan.html) |
| 006207 | [摘要](companies/tw-006207/summary.html) | [公司摘要](companies/tw-006207/tearsheet.html) | [啟動報告](companies/tw-006207/initiation.html) | [風險](companies/tw-006207/risk_plan.html) |
| 00625K | [摘要](companies/tw-00625K/summary.html) | [公司摘要](companies/tw-00625K/tearsheet.html) | [啟動報告](companies/tw-00625K/initiation.html) | [風險](companies/tw-00625K/risk_plan.html) |
| 00680L | [摘要](companies/tw-00680L/summary.html) | [公司摘要](companies/tw-00680L/tearsheet.html) | [啟動報告](companies/tw-00680L/initiation.html) | [風險](companies/tw-00680L/risk_plan.html) |
| 00682U | [摘要](companies/tw-00682U/summary.html) | [公司摘要](companies/tw-00682U/tearsheet.html) | [啟動報告](companies/tw-00682U/initiation.html) | [風險](companies/tw-00682U/risk_plan.html) |
| 00688L | [摘要](companies/tw-00688L/summary.html) | [公司摘要](companies/tw-00688L/tearsheet.html) | [啟動報告](companies/tw-00688L/initiation.html) | [風險](companies/tw-00688L/risk_plan.html) |
| 00707R | [摘要](companies/tw-00707R/summary.html) | [公司摘要](companies/tw-00707R/tearsheet.html) | [啟動報告](companies/tw-00707R/initiation.html) | [風險](companies/tw-00707R/risk_plan.html) |
| 00712 | [摘要](companies/tw-00712/summary.html) | [公司摘要](companies/tw-00712/tearsheet.html) | [啟動報告](companies/tw-00712/initiation.html) | [風險](companies/tw-00712/risk_plan.html) |
| 00949 | [摘要](companies/tw-00949/summary.html) | [公司摘要](companies/tw-00949/tearsheet.html) | [啟動報告](companies/tw-00949/initiation.html) | [風險](companies/tw-00949/risk_plan.html) |
| 1215 | [摘要](companies/tw-1215/summary.html) | [公司摘要](companies/tw-1215/tearsheet.html) | [啟動報告](companies/tw-1215/initiation.html) | [風險](companies/tw-1215/risk_plan.html) |
| 1538 | [摘要](companies/tw-1538/summary.html) | [公司摘要](companies/tw-1538/tearsheet.html) | [啟動報告](companies/tw-1538/initiation.html) | [風險](companies/tw-1538/risk_plan.html) |
| 1560 | [摘要](companies/tw-1560/summary.html) | [公司摘要](companies/tw-1560/tearsheet.html) | [啟動報告](companies/tw-1560/initiation.html) | [風險](companies/tw-1560/risk_plan.html) |
| 1808 | [摘要](companies/tw-1808/summary.html) | [公司摘要](companies/tw-1808/tearsheet.html) | [啟動報告](companies/tw-1808/initiation.html) | [風險](companies/tw-1808/risk_plan.html) |
| 2321 | [摘要](companies/tw-2321/summary.html) | [公司摘要](companies/tw-2321/tearsheet.html) | [啟動報告](companies/tw-2321/initiation.html) | [風險](companies/tw-2321/risk_plan.html) |
| 2351 | [摘要](companies/tw-2351/summary.html) | [公司摘要](companies/tw-2351/tearsheet.html) | [啟動報告](companies/tw-2351/initiation.html) | [風險](companies/tw-2351/risk_plan.html) |
| 2362 | [摘要](companies/tw-2362/summary.html) | [公司摘要](companies/tw-2362/tearsheet.html) | [啟動報告](companies/tw-2362/initiation.html) | [風險](companies/tw-2362/risk_plan.html) |
| 2399 | [摘要](companies/tw-2399/summary.html) | [公司摘要](companies/tw-2399/tearsheet.html) | [啟動報告](companies/tw-2399/initiation.html) | [風險](companies/tw-2399/risk_plan.html) |
| 2402 | [摘要](companies/tw-2402/summary.html) | [公司摘要](companies/tw-2402/tearsheet.html) | [啟動報告](companies/tw-2402/initiation.html) | [風險](companies/tw-2402/risk_plan.html) |
| 2436 | [摘要](companies/tw-2436/summary.html) | [公司摘要](companies/tw-2436/tearsheet.html) | [啟動報告](companies/tw-2436/initiation.html) | [風險](companies/tw-2436/risk_plan.html) |
| 2467 | [摘要](companies/tw-2467/summary.html) | [公司摘要](companies/tw-2467/tearsheet.html) | [啟動報告](companies/tw-2467/initiation.html) | [風險](companies/tw-2467/risk_plan.html) |
| 2498 | [摘要](companies/tw-2498/summary.html) | [公司摘要](companies/tw-2498/tearsheet.html) | [啟動報告](companies/tw-2498/initiation.html) | [風險](companies/tw-2498/risk_plan.html) |
| 2939 | [摘要](companies/tw-2939/summary.html) | [公司摘要](companies/tw-2939/tearsheet.html) | [啟動報告](companies/tw-2939/initiation.html) | [風險](companies/tw-2939/risk_plan.html) |
| 3028 | [摘要](companies/tw-3028/summary.html) | [公司摘要](companies/tw-3028/tearsheet.html) | [啟動報告](companies/tw-3028/initiation.html) | [風險](companies/tw-3028/risk_plan.html) |
| 3257 | [摘要](companies/tw-3257/summary.html) | [公司摘要](companies/tw-3257/tearsheet.html) | [啟動報告](companies/tw-3257/initiation.html) | [風險](companies/tw-3257/risk_plan.html) |
| 3592 | [摘要](companies/tw-3592/summary.html) | [公司摘要](companies/tw-3592/tearsheet.html) | [啟動報告](companies/tw-3592/initiation.html) | [風險](companies/tw-3592/risk_plan.html) |
| 5906 | [摘要](companies/tw-5906/summary.html) | [公司摘要](companies/tw-5906/tearsheet.html) | [啟動報告](companies/tw-5906/initiation.html) | [風險](companies/tw-5906/risk_plan.html) |
| 6005 | [摘要](companies/tw-6005/summary.html) | [公司摘要](companies/tw-6005/tearsheet.html) | [啟動報告](companies/tw-6005/initiation.html) | [風險](companies/tw-6005/risk_plan.html) |
| 6282 | [摘要](companies/tw-6282/summary.html) | [公司摘要](companies/tw-6282/tearsheet.html) | [啟動報告](companies/tw-6282/initiation.html) | [風險](companies/tw-6282/risk_plan.html) |
| 6438 | [摘要](companies/tw-6438/summary.html) | [公司摘要](companies/tw-6438/tearsheet.html) | [啟動報告](companies/tw-6438/initiation.html) | [風險](companies/tw-6438/risk_plan.html) |
| 8150 | [摘要](companies/tw-8150/summary.html) | [公司摘要](companies/tw-8150/tearsheet.html) | [啟動報告](companies/tw-8150/initiation.html) | [風險](companies/tw-8150/risk_plan.html) |
| 8996 | [摘要](companies/tw-8996/summary.html) | [公司摘要](companies/tw-8996/tearsheet.html) | [啟動報告](companies/tw-8996/initiation.html) | [風險](companies/tw-8996/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
