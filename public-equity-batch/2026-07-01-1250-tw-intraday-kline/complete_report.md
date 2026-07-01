# StockLoop PEI 完整批次報告 2026-07-01 - TW K-line

- 產出時間：2026-07-01 12:53:11
- 標的池檔數：46
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-01-1250_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

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

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 46 |
| 分類 | 現在可以買名單 | 46 |
| 研究標籤 | missing | 46 |
| 研究狀態 | missing | 46 |
| 估值狀態 | missing | 46 |
| 風控狀態 | missing | 46 |
| 期限 underwrite | missing（未提供期限 underwrite） | 46 |
| 決策就緒 | 否 | 46 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 46 |
| market_data_not_complete | 46 |
| official_validation_not_complete | 46 |
| research_status_not_complete | 46 |
| risk_status_not_complete | 46 |
| valuation_status_not_complete | 46 |

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
| 00632R | 元大台灣50反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00632R/summary.html) | [風險](companies/tw-00632R/risk_plan.html) | [啟動報告](companies/tw-00632R/initiation.html) |
| 00653L | 富邦印度正2 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00653L/summary.html) | [風險](companies/tw-00653L/risk_plan.html) | [啟動報告](companies/tw-00653L/initiation.html) |
| 00676R | 富邦臺灣加權反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00676R/summary.html) | [風險](companies/tw-00676R/risk_plan.html) | [啟動報告](companies/tw-00676R/initiation.html) |
| 00684R | 期元大美元指反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00684R/summary.html) | [風險](companies/tw-00684R/risk_plan.html) | [啟動報告](companies/tw-00684R/initiation.html) |
| 00965 | 元大航太防衛科技 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00965/summary.html) | [風險](companies/tw-00965/risk_plan.html) | [啟動報告](companies/tw-00965/initiation.html) |
| 009812 | 野村日本東證 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-009812/summary.html) | [風險](companies/tw-009812/risk_plan.html) | [啟動報告](companies/tw-009812/initiation.html) |
| 1225 | 福懋油 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1225/summary.html) | [風險](companies/tw-1225/risk_plan.html) | [啟動報告](companies/tw-1225/initiation.html) |
| 1413 | 宏洲 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1413/summary.html) | [風險](companies/tw-1413/risk_plan.html) | [啟動報告](companies/tw-1413/initiation.html) |
| 1419 | 新紡 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1419/summary.html) | [風險](companies/tw-1419/risk_plan.html) | [啟動報告](companies/tw-1419/initiation.html) |
| 1453 | 大將 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1453/summary.html) | [風險](companies/tw-1453/risk_plan.html) | [啟動報告](companies/tw-1453/initiation.html) |
| 1506 | 正道 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1506/summary.html) | [風險](companies/tw-1506/risk_plan.html) | [啟動報告](companies/tw-1506/initiation.html) |
| 1512 | 瑞利 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1512/summary.html) | [風險](companies/tw-1512/risk_plan.html) | [啟動報告](companies/tw-1512/initiation.html) |
| 1521 | 大億 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1521/summary.html) | [風險](companies/tw-1521/risk_plan.html) | [啟動報告](companies/tw-1521/initiation.html) |
| 1527 | 鑽全 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1527/summary.html) | [風險](companies/tw-1527/risk_plan.html) | [啟動報告](companies/tw-1527/initiation.html) |
| 1540 | 喬福 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1540/summary.html) | [風險](companies/tw-1540/risk_plan.html) | [啟動報告](companies/tw-1540/initiation.html) |
| 1721 | 三晃 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1721/summary.html) | [風險](companies/tw-1721/risk_plan.html) | [啟動報告](companies/tw-1721/initiation.html) |
| 1733 | 五鼎 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1733/summary.html) | [風險](companies/tw-1733/risk_plan.html) | [啟動報告](companies/tw-1733/initiation.html) |
| 2106 | 建大 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2106/summary.html) | [風險](companies/tw-2106/risk_plan.html) | [啟動報告](companies/tw-2106/initiation.html) |
| 2312 | 金寶 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2312/summary.html) | [風險](companies/tw-2312/risk_plan.html) | [啟動報告](companies/tw-2312/initiation.html) |
| 2383 | 台光電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2383/summary.html) | [風險](companies/tw-2383/risk_plan.html) | [啟動報告](companies/tw-2383/initiation.html) |
| 2449 | 京元電子 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2449/summary.html) | [風險](companies/tw-2449/risk_plan.html) | [啟動報告](companies/tw-2449/initiation.html) |
| 2455 | 全新 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2455/summary.html) | [風險](companies/tw-2455/risk_plan.html) | [啟動報告](companies/tw-2455/initiation.html) |
| 2482 | 連宇 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2482/summary.html) | [風險](companies/tw-2482/risk_plan.html) | [啟動報告](companies/tw-2482/initiation.html) |
| 2607 | 榮運 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2607/summary.html) | [風險](companies/tw-2607/risk_plan.html) | [啟動報告](companies/tw-2607/initiation.html) |
| 3008 | 大立光 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3008/summary.html) | [風險](companies/tw-3008/risk_plan.html) | [啟動報告](companies/tw-3008/initiation.html) |
| 3014 | 聯陽 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3014/summary.html) | [風險](companies/tw-3014/risk_plan.html) | [啟動報告](companies/tw-3014/initiation.html) |
| 3045 | 台灣大 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3045/summary.html) | [風險](companies/tw-3045/risk_plan.html) | [啟動報告](companies/tw-3045/initiation.html) |
| 3164 | 景岳 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3164/summary.html) | [風險](companies/tw-3164/risk_plan.html) | [啟動報告](companies/tw-3164/initiation.html) |
| 3447 | 展達 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3447/summary.html) | [風險](companies/tw-3447/risk_plan.html) | [啟動報告](companies/tw-3447/initiation.html) |
| 3591 | 艾笛森 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3591/summary.html) | [風險](companies/tw-3591/risk_plan.html) | [啟動報告](companies/tw-3591/initiation.html) |
| 4133 | 亞諾法 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4133/summary.html) | [風險](companies/tw-4133/risk_plan.html) | [啟動報告](companies/tw-4133/initiation.html) |
| 4942 | 嘉彰 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4942/summary.html) | [風險](companies/tw-4942/risk_plan.html) | [啟動報告](companies/tw-4942/initiation.html) |
| 5203 | 訊連 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5203/summary.html) | [風險](companies/tw-5203/risk_plan.html) | [啟動報告](companies/tw-5203/initiation.html) |
| 6165 | 浪凡 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6165/summary.html) | [風險](companies/tw-6165/risk_plan.html) | [啟動報告](companies/tw-6165/initiation.html) |
| 6201 | 亞弘電 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6201/summary.html) | [風險](companies/tw-6201/risk_plan.html) | [啟動報告](companies/tw-6201/initiation.html) |
| 6235 | 華孚 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6235/summary.html) | [風險](companies/tw-6235/risk_plan.html) | [啟動報告](companies/tw-6235/initiation.html) |
| 6641 | 基士德-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6641/summary.html) | [風險](companies/tw-6641/risk_plan.html) | [啟動報告](companies/tw-6641/initiation.html) |
| 6742 | 澤米 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6742/summary.html) | [風險](companies/tw-6742/risk_plan.html) | [啟動報告](companies/tw-6742/initiation.html) |
| 6838 | 台新藥 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6838/summary.html) | [風險](companies/tw-6838/risk_plan.html) | [啟動報告](companies/tw-6838/initiation.html) |
| 6885 | 全福生技 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6885/summary.html) | [風險](companies/tw-6885/risk_plan.html) | [啟動報告](companies/tw-6885/initiation.html) |
| 6919 | 康霈* | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6919/summary.html) | [風險](companies/tw-6919/risk_plan.html) | [啟動報告](companies/tw-6919/initiation.html) |
| 7732 | 金興精密 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-7732/summary.html) | [風險](companies/tw-7732/risk_plan.html) | [啟動報告](companies/tw-7732/initiation.html) |
| 8103 | 瀚荃 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8103/summary.html) | [風險](companies/tw-8103/risk_plan.html) | [啟動報告](companies/tw-8103/initiation.html) |
| 8442 | 威宏-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8442/summary.html) | [風險](companies/tw-8442/risk_plan.html) | [啟動報告](companies/tw-8442/initiation.html) |
| 8488 | 吉源-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8488/summary.html) | [風險](companies/tw-8488/risk_plan.html) | [啟動報告](companies/tw-8488/initiation.html) |
| 9933 | 中鼎 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9933/summary.html) | [風險](companies/tw-9933/risk_plan.html) | [啟動報告](companies/tw-9933/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 00632R | [摘要](companies/tw-00632R/summary.html) | [公司摘要](companies/tw-00632R/tearsheet.html) | [啟動報告](companies/tw-00632R/initiation.html) | [風險](companies/tw-00632R/risk_plan.html) |
| 00653L | [摘要](companies/tw-00653L/summary.html) | [公司摘要](companies/tw-00653L/tearsheet.html) | [啟動報告](companies/tw-00653L/initiation.html) | [風險](companies/tw-00653L/risk_plan.html) |
| 00676R | [摘要](companies/tw-00676R/summary.html) | [公司摘要](companies/tw-00676R/tearsheet.html) | [啟動報告](companies/tw-00676R/initiation.html) | [風險](companies/tw-00676R/risk_plan.html) |
| 00684R | [摘要](companies/tw-00684R/summary.html) | [公司摘要](companies/tw-00684R/tearsheet.html) | [啟動報告](companies/tw-00684R/initiation.html) | [風險](companies/tw-00684R/risk_plan.html) |
| 00965 | [摘要](companies/tw-00965/summary.html) | [公司摘要](companies/tw-00965/tearsheet.html) | [啟動報告](companies/tw-00965/initiation.html) | [風險](companies/tw-00965/risk_plan.html) |
| 009812 | [摘要](companies/tw-009812/summary.html) | [公司摘要](companies/tw-009812/tearsheet.html) | [啟動報告](companies/tw-009812/initiation.html) | [風險](companies/tw-009812/risk_plan.html) |
| 1225 | [摘要](companies/tw-1225/summary.html) | [公司摘要](companies/tw-1225/tearsheet.html) | [啟動報告](companies/tw-1225/initiation.html) | [風險](companies/tw-1225/risk_plan.html) |
| 1413 | [摘要](companies/tw-1413/summary.html) | [公司摘要](companies/tw-1413/tearsheet.html) | [啟動報告](companies/tw-1413/initiation.html) | [風險](companies/tw-1413/risk_plan.html) |
| 1419 | [摘要](companies/tw-1419/summary.html) | [公司摘要](companies/tw-1419/tearsheet.html) | [啟動報告](companies/tw-1419/initiation.html) | [風險](companies/tw-1419/risk_plan.html) |
| 1453 | [摘要](companies/tw-1453/summary.html) | [公司摘要](companies/tw-1453/tearsheet.html) | [啟動報告](companies/tw-1453/initiation.html) | [風險](companies/tw-1453/risk_plan.html) |
| 1506 | [摘要](companies/tw-1506/summary.html) | [公司摘要](companies/tw-1506/tearsheet.html) | [啟動報告](companies/tw-1506/initiation.html) | [風險](companies/tw-1506/risk_plan.html) |
| 1512 | [摘要](companies/tw-1512/summary.html) | [公司摘要](companies/tw-1512/tearsheet.html) | [啟動報告](companies/tw-1512/initiation.html) | [風險](companies/tw-1512/risk_plan.html) |
| 1521 | [摘要](companies/tw-1521/summary.html) | [公司摘要](companies/tw-1521/tearsheet.html) | [啟動報告](companies/tw-1521/initiation.html) | [風險](companies/tw-1521/risk_plan.html) |
| 1527 | [摘要](companies/tw-1527/summary.html) | [公司摘要](companies/tw-1527/tearsheet.html) | [啟動報告](companies/tw-1527/initiation.html) | [風險](companies/tw-1527/risk_plan.html) |
| 1540 | [摘要](companies/tw-1540/summary.html) | [公司摘要](companies/tw-1540/tearsheet.html) | [啟動報告](companies/tw-1540/initiation.html) | [風險](companies/tw-1540/risk_plan.html) |
| 1721 | [摘要](companies/tw-1721/summary.html) | [公司摘要](companies/tw-1721/tearsheet.html) | [啟動報告](companies/tw-1721/initiation.html) | [風險](companies/tw-1721/risk_plan.html) |
| 1733 | [摘要](companies/tw-1733/summary.html) | [公司摘要](companies/tw-1733/tearsheet.html) | [啟動報告](companies/tw-1733/initiation.html) | [風險](companies/tw-1733/risk_plan.html) |
| 2106 | [摘要](companies/tw-2106/summary.html) | [公司摘要](companies/tw-2106/tearsheet.html) | [啟動報告](companies/tw-2106/initiation.html) | [風險](companies/tw-2106/risk_plan.html) |
| 2312 | [摘要](companies/tw-2312/summary.html) | [公司摘要](companies/tw-2312/tearsheet.html) | [啟動報告](companies/tw-2312/initiation.html) | [風險](companies/tw-2312/risk_plan.html) |
| 2383 | [摘要](companies/tw-2383/summary.html) | [公司摘要](companies/tw-2383/tearsheet.html) | [啟動報告](companies/tw-2383/initiation.html) | [風險](companies/tw-2383/risk_plan.html) |
| 2449 | [摘要](companies/tw-2449/summary.html) | [公司摘要](companies/tw-2449/tearsheet.html) | [啟動報告](companies/tw-2449/initiation.html) | [風險](companies/tw-2449/risk_plan.html) |
| 2455 | [摘要](companies/tw-2455/summary.html) | [公司摘要](companies/tw-2455/tearsheet.html) | [啟動報告](companies/tw-2455/initiation.html) | [風險](companies/tw-2455/risk_plan.html) |
| 2482 | [摘要](companies/tw-2482/summary.html) | [公司摘要](companies/tw-2482/tearsheet.html) | [啟動報告](companies/tw-2482/initiation.html) | [風險](companies/tw-2482/risk_plan.html) |
| 2607 | [摘要](companies/tw-2607/summary.html) | [公司摘要](companies/tw-2607/tearsheet.html) | [啟動報告](companies/tw-2607/initiation.html) | [風險](companies/tw-2607/risk_plan.html) |
| 3008 | [摘要](companies/tw-3008/summary.html) | [公司摘要](companies/tw-3008/tearsheet.html) | [啟動報告](companies/tw-3008/initiation.html) | [風險](companies/tw-3008/risk_plan.html) |
| 3014 | [摘要](companies/tw-3014/summary.html) | [公司摘要](companies/tw-3014/tearsheet.html) | [啟動報告](companies/tw-3014/initiation.html) | [風險](companies/tw-3014/risk_plan.html) |
| 3045 | [摘要](companies/tw-3045/summary.html) | [公司摘要](companies/tw-3045/tearsheet.html) | [啟動報告](companies/tw-3045/initiation.html) | [風險](companies/tw-3045/risk_plan.html) |
| 3164 | [摘要](companies/tw-3164/summary.html) | [公司摘要](companies/tw-3164/tearsheet.html) | [啟動報告](companies/tw-3164/initiation.html) | [風險](companies/tw-3164/risk_plan.html) |
| 3447 | [摘要](companies/tw-3447/summary.html) | [公司摘要](companies/tw-3447/tearsheet.html) | [啟動報告](companies/tw-3447/initiation.html) | [風險](companies/tw-3447/risk_plan.html) |
| 3591 | [摘要](companies/tw-3591/summary.html) | [公司摘要](companies/tw-3591/tearsheet.html) | [啟動報告](companies/tw-3591/initiation.html) | [風險](companies/tw-3591/risk_plan.html) |
| 4133 | [摘要](companies/tw-4133/summary.html) | [公司摘要](companies/tw-4133/tearsheet.html) | [啟動報告](companies/tw-4133/initiation.html) | [風險](companies/tw-4133/risk_plan.html) |
| 4942 | [摘要](companies/tw-4942/summary.html) | [公司摘要](companies/tw-4942/tearsheet.html) | [啟動報告](companies/tw-4942/initiation.html) | [風險](companies/tw-4942/risk_plan.html) |
| 5203 | [摘要](companies/tw-5203/summary.html) | [公司摘要](companies/tw-5203/tearsheet.html) | [啟動報告](companies/tw-5203/initiation.html) | [風險](companies/tw-5203/risk_plan.html) |
| 6165 | [摘要](companies/tw-6165/summary.html) | [公司摘要](companies/tw-6165/tearsheet.html) | [啟動報告](companies/tw-6165/initiation.html) | [風險](companies/tw-6165/risk_plan.html) |
| 6201 | [摘要](companies/tw-6201/summary.html) | [公司摘要](companies/tw-6201/tearsheet.html) | [啟動報告](companies/tw-6201/initiation.html) | [風險](companies/tw-6201/risk_plan.html) |
| 6235 | [摘要](companies/tw-6235/summary.html) | [公司摘要](companies/tw-6235/tearsheet.html) | [啟動報告](companies/tw-6235/initiation.html) | [風險](companies/tw-6235/risk_plan.html) |
| 6641 | [摘要](companies/tw-6641/summary.html) | [公司摘要](companies/tw-6641/tearsheet.html) | [啟動報告](companies/tw-6641/initiation.html) | [風險](companies/tw-6641/risk_plan.html) |
| 6742 | [摘要](companies/tw-6742/summary.html) | [公司摘要](companies/tw-6742/tearsheet.html) | [啟動報告](companies/tw-6742/initiation.html) | [風險](companies/tw-6742/risk_plan.html) |
| 6838 | [摘要](companies/tw-6838/summary.html) | [公司摘要](companies/tw-6838/tearsheet.html) | [啟動報告](companies/tw-6838/initiation.html) | [風險](companies/tw-6838/risk_plan.html) |
| 6885 | [摘要](companies/tw-6885/summary.html) | [公司摘要](companies/tw-6885/tearsheet.html) | [啟動報告](companies/tw-6885/initiation.html) | [風險](companies/tw-6885/risk_plan.html) |
| 6919 | [摘要](companies/tw-6919/summary.html) | [公司摘要](companies/tw-6919/tearsheet.html) | [啟動報告](companies/tw-6919/initiation.html) | [風險](companies/tw-6919/risk_plan.html) |
| 7732 | [摘要](companies/tw-7732/summary.html) | [公司摘要](companies/tw-7732/tearsheet.html) | [啟動報告](companies/tw-7732/initiation.html) | [風險](companies/tw-7732/risk_plan.html) |
| 8103 | [摘要](companies/tw-8103/summary.html) | [公司摘要](companies/tw-8103/tearsheet.html) | [啟動報告](companies/tw-8103/initiation.html) | [風險](companies/tw-8103/risk_plan.html) |
| 8442 | [摘要](companies/tw-8442/summary.html) | [公司摘要](companies/tw-8442/tearsheet.html) | [啟動報告](companies/tw-8442/initiation.html) | [風險](companies/tw-8442/risk_plan.html) |
| 8488 | [摘要](companies/tw-8488/summary.html) | [公司摘要](companies/tw-8488/tearsheet.html) | [啟動報告](companies/tw-8488/initiation.html) | [風險](companies/tw-8488/risk_plan.html) |
| 9933 | [摘要](companies/tw-9933/summary.html) | [公司摘要](companies/tw-9933/tearsheet.html) | [啟動報告](companies/tw-9933/initiation.html) | [風險](companies/tw-9933/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
