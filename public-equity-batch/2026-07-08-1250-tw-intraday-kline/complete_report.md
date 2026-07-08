# StockLoop PEI 完整批次報告 2026-07-08 - TW K-line

- 產出時間：2026-07-08 12:51:54
- 標的池檔數：29
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-08-1250_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 29 檔標的；來源為 reports/twStock/2026-07-08-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：29 檔。
- 研究狀態 missing：29 檔。
- 期限 underwrite missing（未提供期限 underwrite）：29 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 29 |
| 分類 | 現在可以買名單 | 29 |
| 研究標籤 | missing | 29 |
| 研究狀態 | missing | 29 |
| 估值狀態 | missing | 29 |
| 風控狀態 | missing | 29 |
| 期限 underwrite | missing（未提供期限 underwrite） | 29 |
| 決策就緒 | 否 | 29 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 29 |
| market_data_not_complete | 29 |
| official_validation_not_complete | 29 |
| research_status_not_complete | 29 |
| risk_status_not_complete | 29 |
| valuation_status_not_complete | 29 |

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
| 00643K | 群益深証中小+R | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00643K/summary.html) | [風險](companies/tw-00643K/risk_plan.html) | [啟動報告](companies/tw-00643K/initiation.html) |
| 00665L | 富邦恒生國企正2 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00665L/summary.html) | [風險](companies/tw-00665L/risk_plan.html) | [啟動報告](companies/tw-00665L/initiation.html) |
| 00707R | 期元大S&P日圓反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00707R/summary.html) | [風險](companies/tw-00707R/risk_plan.html) | [啟動報告](companies/tw-00707R/initiation.html) |
| 00753L | 中信中國50正2 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00753L/summary.html) | [風險](companies/tw-00753L/risk_plan.html) | [啟動報告](companies/tw-00753L/initiation.html) |
| 00960 | 野村全球航運龍頭 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00960/summary.html) | [風險](companies/tw-00960/risk_plan.html) | [啟動報告](companies/tw-00960/initiation.html) |
| 1339 | 昭輝 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1339/summary.html) | [風險](companies/tw-1339/risk_plan.html) | [啟動報告](companies/tw-1339/initiation.html) |
| 1454 | 台富 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1454/summary.html) | [風險](companies/tw-1454/risk_plan.html) | [啟動報告](companies/tw-1454/initiation.html) |
| 1762 | 中化生 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1762/summary.html) | [風險](companies/tw-1762/risk_plan.html) | [啟動報告](companies/tw-1762/initiation.html) |
| 1786 | 科妍 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1786/summary.html) | [風險](companies/tw-1786/risk_plan.html) | [啟動報告](companies/tw-1786/initiation.html) |
| 2303 | 聯電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2303/summary.html) | [風險](companies/tw-2303/risk_plan.html) | [啟動報告](companies/tw-2303/initiation.html) |
| 2375 | 凱美 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2375/summary.html) | [風險](companies/tw-2375/risk_plan.html) | [啟動報告](companies/tw-2375/initiation.html) |
| 2427 | 三商電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2427/summary.html) | [風險](companies/tw-2427/risk_plan.html) | [啟動報告](companies/tw-2427/initiation.html) |
| 2428 | 興勤 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2428/summary.html) | [風險](companies/tw-2428/risk_plan.html) | [啟動報告](companies/tw-2428/initiation.html) |
| 2460 | 建通 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2460/summary.html) | [風險](companies/tw-2460/risk_plan.html) | [啟動報告](companies/tw-2460/initiation.html) |
| 2478 | 大毅 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2478/summary.html) | [風險](companies/tw-2478/risk_plan.html) | [啟動報告](companies/tw-2478/initiation.html) |
| 2642 | 宅配通 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2642/summary.html) | [風險](companies/tw-2642/risk_plan.html) | [啟動報告](companies/tw-2642/initiation.html) |
| 2712 | 遠雄來 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2712/summary.html) | [風險](companies/tw-2712/risk_plan.html) | [啟動報告](companies/tw-2712/initiation.html) |
| 3016 | 嘉晶 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3016/summary.html) | [風險](companies/tw-3016/risk_plan.html) | [啟動報告](companies/tw-3016/initiation.html) |
| 3024 | 憶聲 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3024/summary.html) | [風險](companies/tw-3024/risk_plan.html) | [啟動報告](companies/tw-3024/initiation.html) |
| 3257 | 虹冠電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3257/summary.html) | [風險](companies/tw-3257/risk_plan.html) | [啟動報告](companies/tw-3257/initiation.html) |
| 4572 | 駐龍 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4572/summary.html) | [風險](companies/tw-4572/risk_plan.html) | [啟動報告](companies/tw-4572/initiation.html) |
| 6196 | 帆宣 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6196/summary.html) | [風險](companies/tw-6196/risk_plan.html) | [啟動報告](companies/tw-6196/initiation.html) |
| 6209 | 今國光 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6209/summary.html) | [風險](companies/tw-6209/risk_plan.html) | [啟動報告](companies/tw-6209/initiation.html) |
| 6281 | 全國電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6281/summary.html) | [風險](companies/tw-6281/risk_plan.html) | [啟動報告](companies/tw-6281/initiation.html) |
| 6438 | 迅得 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6438/summary.html) | [風險](companies/tw-6438/risk_plan.html) | [啟動報告](companies/tw-6438/initiation.html) |
| 6581 | 鋼聯 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6581/summary.html) | [風險](companies/tw-6581/risk_plan.html) | [啟動報告](companies/tw-6581/initiation.html) |
| 6958 | 日盛台駿 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6958/summary.html) | [風險](companies/tw-6958/risk_plan.html) | [啟動報告](companies/tw-6958/initiation.html) |
| 8103 | 瀚荃 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8103/summary.html) | [風險](companies/tw-8103/risk_plan.html) | [啟動報告](companies/tw-8103/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 00625K | [摘要](companies/tw-00625K/summary.html) | [公司摘要](companies/tw-00625K/tearsheet.html) | [啟動報告](companies/tw-00625K/initiation.html) | [風險](companies/tw-00625K/risk_plan.html) |
| 00643K | [摘要](companies/tw-00643K/summary.html) | [公司摘要](companies/tw-00643K/tearsheet.html) | [啟動報告](companies/tw-00643K/initiation.html) | [風險](companies/tw-00643K/risk_plan.html) |
| 00665L | [摘要](companies/tw-00665L/summary.html) | [公司摘要](companies/tw-00665L/tearsheet.html) | [啟動報告](companies/tw-00665L/initiation.html) | [風險](companies/tw-00665L/risk_plan.html) |
| 00707R | [摘要](companies/tw-00707R/summary.html) | [公司摘要](companies/tw-00707R/tearsheet.html) | [啟動報告](companies/tw-00707R/initiation.html) | [風險](companies/tw-00707R/risk_plan.html) |
| 00753L | [摘要](companies/tw-00753L/summary.html) | [公司摘要](companies/tw-00753L/tearsheet.html) | [啟動報告](companies/tw-00753L/initiation.html) | [風險](companies/tw-00753L/risk_plan.html) |
| 00960 | [摘要](companies/tw-00960/summary.html) | [公司摘要](companies/tw-00960/tearsheet.html) | [啟動報告](companies/tw-00960/initiation.html) | [風險](companies/tw-00960/risk_plan.html) |
| 1339 | [摘要](companies/tw-1339/summary.html) | [公司摘要](companies/tw-1339/tearsheet.html) | [啟動報告](companies/tw-1339/initiation.html) | [風險](companies/tw-1339/risk_plan.html) |
| 1454 | [摘要](companies/tw-1454/summary.html) | [公司摘要](companies/tw-1454/tearsheet.html) | [啟動報告](companies/tw-1454/initiation.html) | [風險](companies/tw-1454/risk_plan.html) |
| 1762 | [摘要](companies/tw-1762/summary.html) | [公司摘要](companies/tw-1762/tearsheet.html) | [啟動報告](companies/tw-1762/initiation.html) | [風險](companies/tw-1762/risk_plan.html) |
| 1786 | [摘要](companies/tw-1786/summary.html) | [公司摘要](companies/tw-1786/tearsheet.html) | [啟動報告](companies/tw-1786/initiation.html) | [風險](companies/tw-1786/risk_plan.html) |
| 2303 | [摘要](companies/tw-2303/summary.html) | [公司摘要](companies/tw-2303/tearsheet.html) | [啟動報告](companies/tw-2303/initiation.html) | [風險](companies/tw-2303/risk_plan.html) |
| 2375 | [摘要](companies/tw-2375/summary.html) | [公司摘要](companies/tw-2375/tearsheet.html) | [啟動報告](companies/tw-2375/initiation.html) | [風險](companies/tw-2375/risk_plan.html) |
| 2427 | [摘要](companies/tw-2427/summary.html) | [公司摘要](companies/tw-2427/tearsheet.html) | [啟動報告](companies/tw-2427/initiation.html) | [風險](companies/tw-2427/risk_plan.html) |
| 2428 | [摘要](companies/tw-2428/summary.html) | [公司摘要](companies/tw-2428/tearsheet.html) | [啟動報告](companies/tw-2428/initiation.html) | [風險](companies/tw-2428/risk_plan.html) |
| 2460 | [摘要](companies/tw-2460/summary.html) | [公司摘要](companies/tw-2460/tearsheet.html) | [啟動報告](companies/tw-2460/initiation.html) | [風險](companies/tw-2460/risk_plan.html) |
| 2478 | [摘要](companies/tw-2478/summary.html) | [公司摘要](companies/tw-2478/tearsheet.html) | [啟動報告](companies/tw-2478/initiation.html) | [風險](companies/tw-2478/risk_plan.html) |
| 2642 | [摘要](companies/tw-2642/summary.html) | [公司摘要](companies/tw-2642/tearsheet.html) | [啟動報告](companies/tw-2642/initiation.html) | [風險](companies/tw-2642/risk_plan.html) |
| 2712 | [摘要](companies/tw-2712/summary.html) | [公司摘要](companies/tw-2712/tearsheet.html) | [啟動報告](companies/tw-2712/initiation.html) | [風險](companies/tw-2712/risk_plan.html) |
| 3016 | [摘要](companies/tw-3016/summary.html) | [公司摘要](companies/tw-3016/tearsheet.html) | [啟動報告](companies/tw-3016/initiation.html) | [風險](companies/tw-3016/risk_plan.html) |
| 3024 | [摘要](companies/tw-3024/summary.html) | [公司摘要](companies/tw-3024/tearsheet.html) | [啟動報告](companies/tw-3024/initiation.html) | [風險](companies/tw-3024/risk_plan.html) |
| 3257 | [摘要](companies/tw-3257/summary.html) | [公司摘要](companies/tw-3257/tearsheet.html) | [啟動報告](companies/tw-3257/initiation.html) | [風險](companies/tw-3257/risk_plan.html) |
| 4572 | [摘要](companies/tw-4572/summary.html) | [公司摘要](companies/tw-4572/tearsheet.html) | [啟動報告](companies/tw-4572/initiation.html) | [風險](companies/tw-4572/risk_plan.html) |
| 6196 | [摘要](companies/tw-6196/summary.html) | [公司摘要](companies/tw-6196/tearsheet.html) | [啟動報告](companies/tw-6196/initiation.html) | [風險](companies/tw-6196/risk_plan.html) |
| 6209 | [摘要](companies/tw-6209/summary.html) | [公司摘要](companies/tw-6209/tearsheet.html) | [啟動報告](companies/tw-6209/initiation.html) | [風險](companies/tw-6209/risk_plan.html) |
| 6281 | [摘要](companies/tw-6281/summary.html) | [公司摘要](companies/tw-6281/tearsheet.html) | [啟動報告](companies/tw-6281/initiation.html) | [風險](companies/tw-6281/risk_plan.html) |
| 6438 | [摘要](companies/tw-6438/summary.html) | [公司摘要](companies/tw-6438/tearsheet.html) | [啟動報告](companies/tw-6438/initiation.html) | [風險](companies/tw-6438/risk_plan.html) |
| 6581 | [摘要](companies/tw-6581/summary.html) | [公司摘要](companies/tw-6581/tearsheet.html) | [啟動報告](companies/tw-6581/initiation.html) | [風險](companies/tw-6581/risk_plan.html) |
| 6958 | [摘要](companies/tw-6958/summary.html) | [公司摘要](companies/tw-6958/tearsheet.html) | [啟動報告](companies/tw-6958/initiation.html) | [風險](companies/tw-6958/risk_plan.html) |
| 8103 | [摘要](companies/tw-8103/summary.html) | [公司摘要](companies/tw-8103/tearsheet.html) | [啟動報告](companies/tw-8103/initiation.html) | [風險](companies/tw-8103/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
