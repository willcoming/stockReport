# StockLoop PEI 完整批次報告 2026-07-01 - TW K-line

- 產出時間：2026-07-01 16:13:25
- 標的池檔數：52
- 已具備目前價格與研究狀態的列數：52
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-01_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 52 檔標的；來源為 reports/twStock/2026-07-01_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：52 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：47 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：5 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：52 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：52 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 52 |
| 分類 | 現在可以買名單 | 5 |
| 分類 | 現在不能買，但值得等買點名單 | 47 |
| 研究標籤 | Wait for trigger（等待觸發） | 47 |
| 研究標籤 | Watch only（僅觀察） | 5 |
| 研究狀態 | partial（證據仍不足） | 52 |
| 估值狀態 | not_run（本流程未執行估值模型） | 52 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 52 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 52 |
| 決策就緒 | 否 | 52 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 52 |
| research_status_not_complete | 52 |
| risk_status_not_complete | 52 |
| valuation_status_not_complete | 52 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：台股官方公司基本資料未命中
- 產業 thesis 缺失證據：月營收資料未命中或未接到此市場
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1477 | 聚陽 | 現在可以買名單 | Watch only（僅觀察） | 219 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-1477/summary.html) | [風險](companies/tw-1477/risk_plan.html) | [啟動報告](companies/tw-1477/initiation.html) |
| 3030 | 德律 | 現在可以買名單 | Watch only（僅觀察） | 327.5 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3030/summary.html) | [風險](companies/tw-3030/risk_plan.html) | [啟動報告](companies/tw-3030/initiation.html) |
| 3042 | 晶技 | 現在可以買名單 | Watch only（僅觀察） | 187.5 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3042/summary.html) | [風險](companies/tw-3042/risk_plan.html) | [啟動報告](companies/tw-3042/initiation.html) |
| 6669 | 緯穎 | 現在可以買名單 | Watch only（僅觀察） | 4,635 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6669/summary.html) | [風險](companies/tw-6669/risk_plan.html) | [啟動報告](companies/tw-6669/initiation.html) |
| 6789 | 采鈺 | 現在可以買名單 | Watch only（僅觀察） | 513 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6789/summary.html) | [風險](companies/tw-6789/risk_plan.html) | [啟動報告](companies/tw-6789/initiation.html) |
| 1102 | 亞泥 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1102/summary.html) | [風險](companies/tw-1102/risk_plan.html) | [啟動報告](companies/tw-1102/initiation.html) |
| 1514 | 亞力 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 123 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1514/summary.html) | [風險](companies/tw-1514/risk_plan.html) | [啟動報告](companies/tw-1514/initiation.html) |
| 1563 | 巧新 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 62.1 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1563/summary.html) | [風險](companies/tw-1563/risk_plan.html) | [啟動報告](companies/tw-1563/initiation.html) |
| 1712 | 興農 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 39.2 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1712/summary.html) | [風險](companies/tw-1712/risk_plan.html) | [啟動報告](companies/tw-1712/initiation.html) |
| 1721 | 三晃 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 23.3 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1721/summary.html) | [風險](companies/tw-1721/risk_plan.html) | [啟動報告](companies/tw-1721/initiation.html) |
| 1727 | 中華化 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 89.8 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1727/summary.html) | [風險](companies/tw-1727/risk_plan.html) | [啟動報告](companies/tw-1727/initiation.html) |
| 2027 | 大成鋼 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 40.35 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2027/summary.html) | [風險](companies/tw-2027/risk_plan.html) | [啟動報告](companies/tw-2027/initiation.html) |
| 2049 | 上銀 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 325 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2049/summary.html) | [風險](companies/tw-2049/risk_plan.html) | [啟動報告](companies/tw-2049/initiation.html) |
| 2328 | 廣宇 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 49.45 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2328/summary.html) | [風險](companies/tw-2328/risk_plan.html) | [啟動報告](companies/tw-2328/initiation.html) |
| 2338 | 光罩 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 50.8 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2338/summary.html) | [風險](companies/tw-2338/risk_plan.html) | [啟動報告](companies/tw-2338/initiation.html) |
| 2360 | 致茂 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2,160 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2360/summary.html) | [風險](companies/tw-2360/risk_plan.html) | [啟動報告](companies/tw-2360/initiation.html) |
| 2363 | 矽統 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 69 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2363/summary.html) | [風險](companies/tw-2363/risk_plan.html) | [啟動報告](companies/tw-2363/initiation.html) |
| 2365 | 昆盈 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 33.7 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2365/summary.html) | [風險](companies/tw-2365/risk_plan.html) | [啟動報告](companies/tw-2365/initiation.html) |
| 2383 | 台光電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 5,390 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2383/summary.html) | [風險](companies/tw-2383/risk_plan.html) | [啟動報告](companies/tw-2383/initiation.html) |
| 2393 | 億光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 68 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2393/summary.html) | [風險](companies/tw-2393/risk_plan.html) | [啟動報告](companies/tw-2393/initiation.html) |
| 2399 | 映泰 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 48.6 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2399/summary.html) | [風險](companies/tw-2399/risk_plan.html) | [啟動報告](companies/tw-2399/initiation.html) |
| 2402 | 毅嘉 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 64.8 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2402/summary.html) | [風險](companies/tw-2402/risk_plan.html) | [啟動報告](companies/tw-2402/initiation.html) |
| 2449 | 京元電子 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 337.5 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2449/summary.html) | [風險](companies/tw-2449/risk_plan.html) | [啟動報告](companies/tw-2449/initiation.html) |
| 2455 | 全新 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 347 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2455/summary.html) | [風險](companies/tw-2455/risk_plan.html) | [啟動報告](companies/tw-2455/initiation.html) |
| 2515 | 中工 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 13.05 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2515/summary.html) | [風險](companies/tw-2515/risk_plan.html) | [啟動報告](companies/tw-2515/initiation.html) |
| 2530 | 華建 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.3 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2530/summary.html) | [風險](companies/tw-2530/risk_plan.html) | [啟動報告](companies/tw-2530/initiation.html) |
| 2597 | 潤弘 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 163.5 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2597/summary.html) | [風險](companies/tw-2597/risk_plan.html) | [啟動報告](companies/tw-2597/initiation.html) |
| 3005 | 神基 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 101 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3005/summary.html) | [風險](companies/tw-3005/risk_plan.html) | [啟動報告](companies/tw-3005/initiation.html) |
| 3008 | 大立光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 4,290 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3008/summary.html) | [風險](companies/tw-3008/risk_plan.html) | [啟動報告](companies/tw-3008/initiation.html) |
| 3014 | 聯陽 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 159 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3014/summary.html) | [風險](companies/tw-3014/risk_plan.html) | [啟動報告](companies/tw-3014/initiation.html) |
| 3032 | 偉訓 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 78.4 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3032/summary.html) | [風險](companies/tw-3032/risk_plan.html) | [啟動報告](companies/tw-3032/initiation.html) |
| 3045 | 台灣大 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 116.5 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3045/summary.html) | [風險](companies/tw-3045/risk_plan.html) | [啟動報告](companies/tw-3045/initiation.html) |
| 3661 | 世芯-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 4,180 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3661/summary.html) | [風險](companies/tw-3661/risk_plan.html) | [啟動報告](companies/tw-3661/initiation.html) |
| 3702 | 大聯大 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 107 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3702/summary.html) | [風險](companies/tw-3702/risk_plan.html) | [啟動報告](companies/tw-3702/initiation.html) |
| 4766 | 南寶 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 343.5 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-4766/summary.html) | [風險](companies/tw-4766/risk_plan.html) | [啟動報告](companies/tw-4766/initiation.html) |
| 4989 | 榮科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 87.3 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-4989/summary.html) | [風險](companies/tw-4989/risk_plan.html) | [啟動報告](companies/tw-4989/initiation.html) |
| 5258 | 虹堡 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 48.85 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-5258/summary.html) | [風險](companies/tw-5258/risk_plan.html) | [啟動報告](companies/tw-5258/initiation.html) |
| 6133 | 金橋 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 22.35 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6133/summary.html) | [風險](companies/tw-6133/risk_plan.html) | [啟動報告](companies/tw-6133/initiation.html) |
| 6177 | 達麗 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 45.1 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6177/summary.html) | [風險](companies/tw-6177/risk_plan.html) | [啟動報告](companies/tw-6177/initiation.html) |
| 6189 | 豐藝 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 50.2 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6189/summary.html) | [風險](companies/tw-6189/risk_plan.html) | [啟動報告](companies/tw-6189/initiation.html) |
| 6196 | 帆宣 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 554 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6196/summary.html) | [風險](companies/tw-6196/risk_plan.html) | [啟動報告](companies/tw-6196/initiation.html) |
| 6224 | 聚鼎 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 77.2 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6224/summary.html) | [風險](companies/tw-6224/risk_plan.html) | [啟動報告](companies/tw-6224/initiation.html) |
| 6271 | 同欣電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 267 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6271/summary.html) | [風險](companies/tw-6271/risk_plan.html) | [啟動報告](companies/tw-6271/initiation.html) |
| 6658 | 聯策 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 234 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6658/summary.html) | [風險](companies/tw-6658/risk_plan.html) | [啟動報告](companies/tw-6658/initiation.html) |
| 6719 | 力智 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 270 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6719/summary.html) | [風險](companies/tw-6719/risk_plan.html) | [啟動報告](companies/tw-6719/initiation.html) |
| 6742 | 澤米 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 67.8 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6742/summary.html) | [風險](companies/tw-6742/risk_plan.html) | [啟動報告](companies/tw-6742/initiation.html) |
| 6831 | 邁科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 873 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6831/summary.html) | [風險](companies/tw-6831/risk_plan.html) | [啟動報告](companies/tw-6831/initiation.html) |
| 6890 | 來億-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 197 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6890/summary.html) | [風險](companies/tw-6890/risk_plan.html) | [啟動報告](companies/tw-6890/initiation.html) |
| 6919 | 康霈* | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 99.8 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6919/summary.html) | [風險](companies/tw-6919/risk_plan.html) | [啟動報告](companies/tw-6919/initiation.html) |
| 7769 | 鴻勁 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6,470 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-7769/summary.html) | [風險](companies/tw-7769/risk_plan.html) | [啟動報告](companies/tw-7769/initiation.html) |
| 8103 | 瀚荃 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 98.8 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8103/summary.html) | [風險](companies/tw-8103/risk_plan.html) | [啟動報告](companies/tw-8103/initiation.html) |
| 9941 | 裕融 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 80 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-9941/summary.html) | [風險](companies/tw-9941/risk_plan.html) | [啟動報告](companies/tw-9941/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 1477 | [摘要](companies/tw-1477/summary.html) | [公司摘要](companies/tw-1477/tearsheet.html) | [啟動報告](companies/tw-1477/initiation.html) | [風險](companies/tw-1477/risk_plan.html) |
| 3030 | [摘要](companies/tw-3030/summary.html) | [公司摘要](companies/tw-3030/tearsheet.html) | [啟動報告](companies/tw-3030/initiation.html) | [風險](companies/tw-3030/risk_plan.html) |
| 3042 | [摘要](companies/tw-3042/summary.html) | [公司摘要](companies/tw-3042/tearsheet.html) | [啟動報告](companies/tw-3042/initiation.html) | [風險](companies/tw-3042/risk_plan.html) |
| 6669 | [摘要](companies/tw-6669/summary.html) | [公司摘要](companies/tw-6669/tearsheet.html) | [啟動報告](companies/tw-6669/initiation.html) | [風險](companies/tw-6669/risk_plan.html) |
| 6789 | [摘要](companies/tw-6789/summary.html) | [公司摘要](companies/tw-6789/tearsheet.html) | [啟動報告](companies/tw-6789/initiation.html) | [風險](companies/tw-6789/risk_plan.html) |
| 1102 | [摘要](companies/tw-1102/summary.html) | [公司摘要](companies/tw-1102/tearsheet.html) | [啟動報告](companies/tw-1102/initiation.html) | [風險](companies/tw-1102/risk_plan.html) |
| 1514 | [摘要](companies/tw-1514/summary.html) | [公司摘要](companies/tw-1514/tearsheet.html) | [啟動報告](companies/tw-1514/initiation.html) | [風險](companies/tw-1514/risk_plan.html) |
| 1563 | [摘要](companies/tw-1563/summary.html) | [公司摘要](companies/tw-1563/tearsheet.html) | [啟動報告](companies/tw-1563/initiation.html) | [風險](companies/tw-1563/risk_plan.html) |
| 1712 | [摘要](companies/tw-1712/summary.html) | [公司摘要](companies/tw-1712/tearsheet.html) | [啟動報告](companies/tw-1712/initiation.html) | [風險](companies/tw-1712/risk_plan.html) |
| 1721 | [摘要](companies/tw-1721/summary.html) | [公司摘要](companies/tw-1721/tearsheet.html) | [啟動報告](companies/tw-1721/initiation.html) | [風險](companies/tw-1721/risk_plan.html) |
| 1727 | [摘要](companies/tw-1727/summary.html) | [公司摘要](companies/tw-1727/tearsheet.html) | [啟動報告](companies/tw-1727/initiation.html) | [風險](companies/tw-1727/risk_plan.html) |
| 2027 | [摘要](companies/tw-2027/summary.html) | [公司摘要](companies/tw-2027/tearsheet.html) | [啟動報告](companies/tw-2027/initiation.html) | [風險](companies/tw-2027/risk_plan.html) |
| 2049 | [摘要](companies/tw-2049/summary.html) | [公司摘要](companies/tw-2049/tearsheet.html) | [啟動報告](companies/tw-2049/initiation.html) | [風險](companies/tw-2049/risk_plan.html) |
| 2328 | [摘要](companies/tw-2328/summary.html) | [公司摘要](companies/tw-2328/tearsheet.html) | [啟動報告](companies/tw-2328/initiation.html) | [風險](companies/tw-2328/risk_plan.html) |
| 2338 | [摘要](companies/tw-2338/summary.html) | [公司摘要](companies/tw-2338/tearsheet.html) | [啟動報告](companies/tw-2338/initiation.html) | [風險](companies/tw-2338/risk_plan.html) |
| 2360 | [摘要](companies/tw-2360/summary.html) | [公司摘要](companies/tw-2360/tearsheet.html) | [啟動報告](companies/tw-2360/initiation.html) | [風險](companies/tw-2360/risk_plan.html) |
| 2363 | [摘要](companies/tw-2363/summary.html) | [公司摘要](companies/tw-2363/tearsheet.html) | [啟動報告](companies/tw-2363/initiation.html) | [風險](companies/tw-2363/risk_plan.html) |
| 2365 | [摘要](companies/tw-2365/summary.html) | [公司摘要](companies/tw-2365/tearsheet.html) | [啟動報告](companies/tw-2365/initiation.html) | [風險](companies/tw-2365/risk_plan.html) |
| 2383 | [摘要](companies/tw-2383/summary.html) | [公司摘要](companies/tw-2383/tearsheet.html) | [啟動報告](companies/tw-2383/initiation.html) | [風險](companies/tw-2383/risk_plan.html) |
| 2393 | [摘要](companies/tw-2393/summary.html) | [公司摘要](companies/tw-2393/tearsheet.html) | [啟動報告](companies/tw-2393/initiation.html) | [風險](companies/tw-2393/risk_plan.html) |
| 2399 | [摘要](companies/tw-2399/summary.html) | [公司摘要](companies/tw-2399/tearsheet.html) | [啟動報告](companies/tw-2399/initiation.html) | [風險](companies/tw-2399/risk_plan.html) |
| 2402 | [摘要](companies/tw-2402/summary.html) | [公司摘要](companies/tw-2402/tearsheet.html) | [啟動報告](companies/tw-2402/initiation.html) | [風險](companies/tw-2402/risk_plan.html) |
| 2449 | [摘要](companies/tw-2449/summary.html) | [公司摘要](companies/tw-2449/tearsheet.html) | [啟動報告](companies/tw-2449/initiation.html) | [風險](companies/tw-2449/risk_plan.html) |
| 2455 | [摘要](companies/tw-2455/summary.html) | [公司摘要](companies/tw-2455/tearsheet.html) | [啟動報告](companies/tw-2455/initiation.html) | [風險](companies/tw-2455/risk_plan.html) |
| 2515 | [摘要](companies/tw-2515/summary.html) | [公司摘要](companies/tw-2515/tearsheet.html) | [啟動報告](companies/tw-2515/initiation.html) | [風險](companies/tw-2515/risk_plan.html) |
| 2530 | [摘要](companies/tw-2530/summary.html) | [公司摘要](companies/tw-2530/tearsheet.html) | [啟動報告](companies/tw-2530/initiation.html) | [風險](companies/tw-2530/risk_plan.html) |
| 2597 | [摘要](companies/tw-2597/summary.html) | [公司摘要](companies/tw-2597/tearsheet.html) | [啟動報告](companies/tw-2597/initiation.html) | [風險](companies/tw-2597/risk_plan.html) |
| 3005 | [摘要](companies/tw-3005/summary.html) | [公司摘要](companies/tw-3005/tearsheet.html) | [啟動報告](companies/tw-3005/initiation.html) | [風險](companies/tw-3005/risk_plan.html) |
| 3008 | [摘要](companies/tw-3008/summary.html) | [公司摘要](companies/tw-3008/tearsheet.html) | [啟動報告](companies/tw-3008/initiation.html) | [風險](companies/tw-3008/risk_plan.html) |
| 3014 | [摘要](companies/tw-3014/summary.html) | [公司摘要](companies/tw-3014/tearsheet.html) | [啟動報告](companies/tw-3014/initiation.html) | [風險](companies/tw-3014/risk_plan.html) |
| 3032 | [摘要](companies/tw-3032/summary.html) | [公司摘要](companies/tw-3032/tearsheet.html) | [啟動報告](companies/tw-3032/initiation.html) | [風險](companies/tw-3032/risk_plan.html) |
| 3045 | [摘要](companies/tw-3045/summary.html) | [公司摘要](companies/tw-3045/tearsheet.html) | [啟動報告](companies/tw-3045/initiation.html) | [風險](companies/tw-3045/risk_plan.html) |
| 3661 | [摘要](companies/tw-3661/summary.html) | [公司摘要](companies/tw-3661/tearsheet.html) | [啟動報告](companies/tw-3661/initiation.html) | [風險](companies/tw-3661/risk_plan.html) |
| 3702 | [摘要](companies/tw-3702/summary.html) | [公司摘要](companies/tw-3702/tearsheet.html) | [啟動報告](companies/tw-3702/initiation.html) | [風險](companies/tw-3702/risk_plan.html) |
| 4766 | [摘要](companies/tw-4766/summary.html) | [公司摘要](companies/tw-4766/tearsheet.html) | [啟動報告](companies/tw-4766/initiation.html) | [風險](companies/tw-4766/risk_plan.html) |
| 4989 | [摘要](companies/tw-4989/summary.html) | [公司摘要](companies/tw-4989/tearsheet.html) | [啟動報告](companies/tw-4989/initiation.html) | [風險](companies/tw-4989/risk_plan.html) |
| 5258 | [摘要](companies/tw-5258/summary.html) | [公司摘要](companies/tw-5258/tearsheet.html) | [啟動報告](companies/tw-5258/initiation.html) | [風險](companies/tw-5258/risk_plan.html) |
| 6133 | [摘要](companies/tw-6133/summary.html) | [公司摘要](companies/tw-6133/tearsheet.html) | [啟動報告](companies/tw-6133/initiation.html) | [風險](companies/tw-6133/risk_plan.html) |
| 6177 | [摘要](companies/tw-6177/summary.html) | [公司摘要](companies/tw-6177/tearsheet.html) | [啟動報告](companies/tw-6177/initiation.html) | [風險](companies/tw-6177/risk_plan.html) |
| 6189 | [摘要](companies/tw-6189/summary.html) | [公司摘要](companies/tw-6189/tearsheet.html) | [啟動報告](companies/tw-6189/initiation.html) | [風險](companies/tw-6189/risk_plan.html) |
| 6196 | [摘要](companies/tw-6196/summary.html) | [公司摘要](companies/tw-6196/tearsheet.html) | [啟動報告](companies/tw-6196/initiation.html) | [風險](companies/tw-6196/risk_plan.html) |
| 6224 | [摘要](companies/tw-6224/summary.html) | [公司摘要](companies/tw-6224/tearsheet.html) | [啟動報告](companies/tw-6224/initiation.html) | [風險](companies/tw-6224/risk_plan.html) |
| 6271 | [摘要](companies/tw-6271/summary.html) | [公司摘要](companies/tw-6271/tearsheet.html) | [啟動報告](companies/tw-6271/initiation.html) | [風險](companies/tw-6271/risk_plan.html) |
| 6658 | [摘要](companies/tw-6658/summary.html) | [公司摘要](companies/tw-6658/tearsheet.html) | [啟動報告](companies/tw-6658/initiation.html) | [風險](companies/tw-6658/risk_plan.html) |
| 6719 | [摘要](companies/tw-6719/summary.html) | [公司摘要](companies/tw-6719/tearsheet.html) | [啟動報告](companies/tw-6719/initiation.html) | [風險](companies/tw-6719/risk_plan.html) |
| 6742 | [摘要](companies/tw-6742/summary.html) | [公司摘要](companies/tw-6742/tearsheet.html) | [啟動報告](companies/tw-6742/initiation.html) | [風險](companies/tw-6742/risk_plan.html) |
| 6831 | [摘要](companies/tw-6831/summary.html) | [公司摘要](companies/tw-6831/tearsheet.html) | [啟動報告](companies/tw-6831/initiation.html) | [風險](companies/tw-6831/risk_plan.html) |
| 6890 | [摘要](companies/tw-6890/summary.html) | [公司摘要](companies/tw-6890/tearsheet.html) | [啟動報告](companies/tw-6890/initiation.html) | [風險](companies/tw-6890/risk_plan.html) |
| 6919 | [摘要](companies/tw-6919/summary.html) | [公司摘要](companies/tw-6919/tearsheet.html) | [啟動報告](companies/tw-6919/initiation.html) | [風險](companies/tw-6919/risk_plan.html) |
| 7769 | [摘要](companies/tw-7769/summary.html) | [公司摘要](companies/tw-7769/tearsheet.html) | [啟動報告](companies/tw-7769/initiation.html) | [風險](companies/tw-7769/risk_plan.html) |
| 8103 | [摘要](companies/tw-8103/summary.html) | [公司摘要](companies/tw-8103/tearsheet.html) | [啟動報告](companies/tw-8103/initiation.html) | [風險](companies/tw-8103/risk_plan.html) |
| 9941 | [摘要](companies/tw-9941/summary.html) | [公司摘要](companies/tw-9941/tearsheet.html) | [啟動報告](companies/tw-9941/initiation.html) | [風險](companies/tw-9941/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
