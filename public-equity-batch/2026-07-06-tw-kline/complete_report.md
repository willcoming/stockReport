# StockLoop PEI 完整批次報告 2026-07-06 - TW K-line

- 產出時間：2026-07-06 21:13:06
- 標的池檔數：42
- 已具備目前價格與研究狀態的列數：42
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-06_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 42 檔標的；來源為 reports/twStock/2026-07-06_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：42 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：39 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：3 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：42 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：42 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 42 |
| 分類 | 現在可以買名單 | 3 |
| 分類 | 現在不能買，但值得等買點名單 | 39 |
| 研究標籤 | Wait for trigger（等待觸發） | 39 |
| 研究標籤 | Watch only（僅觀察） | 3 |
| 研究狀態 | partial（證據仍不足） | 42 |
| 估值狀態 | not_run（本流程未執行估值模型） | 42 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 42 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 42 |
| 決策就緒 | 否 | 42 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 42 |
| research_status_not_complete | 42 |
| risk_status_not_complete | 42 |
| valuation_status_not_complete | 42 |

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
| 1623 | 大東電 | 現在可以買名單 | Watch only（僅觀察） | 214 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-1623/summary.html) | [風險](companies/tw-1623/risk_plan.html) | [啟動報告](companies/tw-1623/initiation.html) |
| 3708 | 上緯投控 | 現在可以買名單 | Watch only（僅觀察） | 110.5 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3708/summary.html) | [風險](companies/tw-3708/risk_plan.html) | [啟動報告](companies/tw-3708/initiation.html) |
| 8996 | 高力 | 現在可以買名單 | Watch only（僅觀察） | 1,380 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-8996/summary.html) | [風險](companies/tw-8996/risk_plan.html) | [啟動報告](companies/tw-8996/initiation.html) |
| 1215 | 卜蜂 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 112.5 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1215/summary.html) | [風險](companies/tw-1215/risk_plan.html) | [啟動報告](companies/tw-1215/initiation.html) |
| 1504 | 東元 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 70 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1504/summary.html) | [風險](companies/tw-1504/risk_plan.html) | [啟動報告](companies/tw-1504/initiation.html) |
| 1514 | 亞力 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 123 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1514/summary.html) | [風險](companies/tw-1514/risk_plan.html) | [啟動報告](companies/tw-1514/initiation.html) |
| 1609 | 大亞 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 39.8 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1609/summary.html) | [風險](companies/tw-1609/risk_plan.html) | [啟動報告](companies/tw-1609/initiation.html) |
| 1808 | 潤隆 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 30.4 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1808/summary.html) | [風險](companies/tw-1808/risk_plan.html) | [啟動報告](companies/tw-1808/initiation.html) |
| 2027 | 大成鋼 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 41.15 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2027/summary.html) | [風險](companies/tw-2027/risk_plan.html) | [啟動報告](companies/tw-2027/initiation.html) |
| 2312 | 金寶 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 34.85 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2312/summary.html) | [風險](companies/tw-2312/risk_plan.html) | [啟動報告](companies/tw-2312/initiation.html) |
| 2349 | 錸德 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 13.3 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2349/summary.html) | [風險](companies/tw-2349/risk_plan.html) | [啟動報告](companies/tw-2349/initiation.html) |
| 2351 | 順德 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 207.5 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2351/summary.html) | [風險](companies/tw-2351/risk_plan.html) | [啟動報告](companies/tw-2351/initiation.html) |
| 2354 | 鴻準 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 55.6 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2354/summary.html) | [風險](companies/tw-2354/risk_plan.html) | [啟動報告](companies/tw-2354/initiation.html) |
| 2362 | 藍天 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 41.5 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2362/summary.html) | [風險](companies/tw-2362/risk_plan.html) | [啟動報告](companies/tw-2362/initiation.html) |
| 2369 | 菱生 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 39.3 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2369/summary.html) | [風險](companies/tw-2369/risk_plan.html) | [啟動報告](companies/tw-2369/initiation.html) |
| 2399 | 映泰 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 50 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2399/summary.html) | [風險](companies/tw-2399/risk_plan.html) | [啟動報告](companies/tw-2399/initiation.html) |
| 2408 | 南亞科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 409.5 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2408/summary.html) | [風險](companies/tw-2408/risk_plan.html) | [啟動報告](companies/tw-2408/initiation.html) |
| 2436 | 偉詮電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 75.9 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2436/summary.html) | [風險](companies/tw-2436/risk_plan.html) | [啟動報告](companies/tw-2436/initiation.html) |
| 2465 | 麗臺 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 73.4 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2465/summary.html) | [風險](companies/tw-2465/risk_plan.html) | [啟動報告](companies/tw-2465/initiation.html) |
| 2467 | 志聖 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 615 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2467/summary.html) | [風險](companies/tw-2467/risk_plan.html) | [啟動報告](companies/tw-2467/initiation.html) |
| 2486 | 一詮 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 249 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2486/summary.html) | [風險](companies/tw-2486/risk_plan.html) | [啟動報告](companies/tw-2486/initiation.html) |
| 2498 | 宏達電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 44.45 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2498/summary.html) | [風險](companies/tw-2498/risk_plan.html) | [啟動報告](companies/tw-2498/initiation.html) |
| 2501 | 國建 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 24.25 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2501/summary.html) | [風險](companies/tw-2501/risk_plan.html) | [啟動報告](companies/tw-2501/initiation.html) |
| 2637 | 慧洋-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 74.3 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2637/summary.html) | [風險](companies/tw-2637/risk_plan.html) | [啟動報告](companies/tw-2637/initiation.html) |
| 2820 | 華票 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.85 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2820/summary.html) | [風險](companies/tw-2820/risk_plan.html) | [啟動報告](companies/tw-2820/initiation.html) |
| 2884 | 玉山金 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 33.7 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2884/summary.html) | [風險](companies/tw-2884/risk_plan.html) | [啟動報告](companies/tw-2884/initiation.html) |
| 2903 | 遠百 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 22.05 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2903/summary.html) | [風險](companies/tw-2903/risk_plan.html) | [啟動報告](companies/tw-2903/initiation.html) |
| 3257 | 虹冠電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 71.2 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3257/summary.html) | [風險](companies/tw-3257/risk_plan.html) | [啟動報告](companies/tw-3257/initiation.html) |
| 3592 | 瑞鼎 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 270 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3592/summary.html) | [風險](companies/tw-3592/risk_plan.html) | [啟動報告](companies/tw-3592/initiation.html) |
| 4739 | 康普 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 113.5 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-4739/summary.html) | [風險](companies/tw-4739/risk_plan.html) | [啟動報告](companies/tw-4739/initiation.html) |
| 4755 | 三福化 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 133 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-4755/summary.html) | [風險](companies/tw-4755/risk_plan.html) | [啟動報告](companies/tw-4755/initiation.html) |
| 6005 | 群益證 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 38.15 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6005/summary.html) | [風險](companies/tw-6005/risk_plan.html) | [啟動報告](companies/tw-6005/initiation.html) |
| 6176 | 瑞儀 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 90.3 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6176/summary.html) | [風險](companies/tw-6176/risk_plan.html) | [啟動報告](companies/tw-6176/initiation.html) |
| 6214 | 精誠 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 133.5 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6214/summary.html) | [風險](companies/tw-6214/risk_plan.html) | [啟動報告](companies/tw-6214/initiation.html) |
| 6282 | 康舒 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 58.3 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6282/summary.html) | [風險](companies/tw-6282/risk_plan.html) | [啟動報告](companies/tw-6282/initiation.html) |
| 6456 | GIS-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 67.1 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6456/summary.html) | [風險](companies/tw-6456/risk_plan.html) | [啟動報告](companies/tw-6456/initiation.html) |
| 6695 | 芯鼎 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 58.1 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6695/summary.html) | [風險](companies/tw-6695/risk_plan.html) | [啟動報告](companies/tw-6695/initiation.html) |
| 6919 | 康霈* | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 99.7 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6919/summary.html) | [風險](companies/tw-6919/risk_plan.html) | [啟動報告](companies/tw-6919/initiation.html) |
| 8104 | 錸寶 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 38.05 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8104/summary.html) | [風險](companies/tw-8104/risk_plan.html) | [啟動報告](companies/tw-8104/initiation.html) |
| 8150 | 南茂 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 105 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8150/summary.html) | [風險](companies/tw-8150/risk_plan.html) | [啟動報告](companies/tw-8150/initiation.html) |
| 8163 | 達方 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 41 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8163/summary.html) | [風險](companies/tw-8163/risk_plan.html) | [啟動報告](companies/tw-8163/initiation.html) |
| 8215 | 明基材 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 29.5 TWD | 2026-07-03 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8215/summary.html) | [風險](companies/tw-8215/risk_plan.html) | [啟動報告](companies/tw-8215/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 1623 | [摘要](companies/tw-1623/summary.html) | [公司摘要](companies/tw-1623/tearsheet.html) | [啟動報告](companies/tw-1623/initiation.html) | [風險](companies/tw-1623/risk_plan.html) |
| 3708 | [摘要](companies/tw-3708/summary.html) | [公司摘要](companies/tw-3708/tearsheet.html) | [啟動報告](companies/tw-3708/initiation.html) | [風險](companies/tw-3708/risk_plan.html) |
| 8996 | [摘要](companies/tw-8996/summary.html) | [公司摘要](companies/tw-8996/tearsheet.html) | [啟動報告](companies/tw-8996/initiation.html) | [風險](companies/tw-8996/risk_plan.html) |
| 1215 | [摘要](companies/tw-1215/summary.html) | [公司摘要](companies/tw-1215/tearsheet.html) | [啟動報告](companies/tw-1215/initiation.html) | [風險](companies/tw-1215/risk_plan.html) |
| 1504 | [摘要](companies/tw-1504/summary.html) | [公司摘要](companies/tw-1504/tearsheet.html) | [啟動報告](companies/tw-1504/initiation.html) | [風險](companies/tw-1504/risk_plan.html) |
| 1514 | [摘要](companies/tw-1514/summary.html) | [公司摘要](companies/tw-1514/tearsheet.html) | [啟動報告](companies/tw-1514/initiation.html) | [風險](companies/tw-1514/risk_plan.html) |
| 1609 | [摘要](companies/tw-1609/summary.html) | [公司摘要](companies/tw-1609/tearsheet.html) | [啟動報告](companies/tw-1609/initiation.html) | [風險](companies/tw-1609/risk_plan.html) |
| 1808 | [摘要](companies/tw-1808/summary.html) | [公司摘要](companies/tw-1808/tearsheet.html) | [啟動報告](companies/tw-1808/initiation.html) | [風險](companies/tw-1808/risk_plan.html) |
| 2027 | [摘要](companies/tw-2027/summary.html) | [公司摘要](companies/tw-2027/tearsheet.html) | [啟動報告](companies/tw-2027/initiation.html) | [風險](companies/tw-2027/risk_plan.html) |
| 2312 | [摘要](companies/tw-2312/summary.html) | [公司摘要](companies/tw-2312/tearsheet.html) | [啟動報告](companies/tw-2312/initiation.html) | [風險](companies/tw-2312/risk_plan.html) |
| 2349 | [摘要](companies/tw-2349/summary.html) | [公司摘要](companies/tw-2349/tearsheet.html) | [啟動報告](companies/tw-2349/initiation.html) | [風險](companies/tw-2349/risk_plan.html) |
| 2351 | [摘要](companies/tw-2351/summary.html) | [公司摘要](companies/tw-2351/tearsheet.html) | [啟動報告](companies/tw-2351/initiation.html) | [風險](companies/tw-2351/risk_plan.html) |
| 2354 | [摘要](companies/tw-2354/summary.html) | [公司摘要](companies/tw-2354/tearsheet.html) | [啟動報告](companies/tw-2354/initiation.html) | [風險](companies/tw-2354/risk_plan.html) |
| 2362 | [摘要](companies/tw-2362/summary.html) | [公司摘要](companies/tw-2362/tearsheet.html) | [啟動報告](companies/tw-2362/initiation.html) | [風險](companies/tw-2362/risk_plan.html) |
| 2369 | [摘要](companies/tw-2369/summary.html) | [公司摘要](companies/tw-2369/tearsheet.html) | [啟動報告](companies/tw-2369/initiation.html) | [風險](companies/tw-2369/risk_plan.html) |
| 2399 | [摘要](companies/tw-2399/summary.html) | [公司摘要](companies/tw-2399/tearsheet.html) | [啟動報告](companies/tw-2399/initiation.html) | [風險](companies/tw-2399/risk_plan.html) |
| 2408 | [摘要](companies/tw-2408/summary.html) | [公司摘要](companies/tw-2408/tearsheet.html) | [啟動報告](companies/tw-2408/initiation.html) | [風險](companies/tw-2408/risk_plan.html) |
| 2436 | [摘要](companies/tw-2436/summary.html) | [公司摘要](companies/tw-2436/tearsheet.html) | [啟動報告](companies/tw-2436/initiation.html) | [風險](companies/tw-2436/risk_plan.html) |
| 2465 | [摘要](companies/tw-2465/summary.html) | [公司摘要](companies/tw-2465/tearsheet.html) | [啟動報告](companies/tw-2465/initiation.html) | [風險](companies/tw-2465/risk_plan.html) |
| 2467 | [摘要](companies/tw-2467/summary.html) | [公司摘要](companies/tw-2467/tearsheet.html) | [啟動報告](companies/tw-2467/initiation.html) | [風險](companies/tw-2467/risk_plan.html) |
| 2486 | [摘要](companies/tw-2486/summary.html) | [公司摘要](companies/tw-2486/tearsheet.html) | [啟動報告](companies/tw-2486/initiation.html) | [風險](companies/tw-2486/risk_plan.html) |
| 2498 | [摘要](companies/tw-2498/summary.html) | [公司摘要](companies/tw-2498/tearsheet.html) | [啟動報告](companies/tw-2498/initiation.html) | [風險](companies/tw-2498/risk_plan.html) |
| 2501 | [摘要](companies/tw-2501/summary.html) | [公司摘要](companies/tw-2501/tearsheet.html) | [啟動報告](companies/tw-2501/initiation.html) | [風險](companies/tw-2501/risk_plan.html) |
| 2637 | [摘要](companies/tw-2637/summary.html) | [公司摘要](companies/tw-2637/tearsheet.html) | [啟動報告](companies/tw-2637/initiation.html) | [風險](companies/tw-2637/risk_plan.html) |
| 2820 | [摘要](companies/tw-2820/summary.html) | [公司摘要](companies/tw-2820/tearsheet.html) | [啟動報告](companies/tw-2820/initiation.html) | [風險](companies/tw-2820/risk_plan.html) |
| 2884 | [摘要](companies/tw-2884/summary.html) | [公司摘要](companies/tw-2884/tearsheet.html) | [啟動報告](companies/tw-2884/initiation.html) | [風險](companies/tw-2884/risk_plan.html) |
| 2903 | [摘要](companies/tw-2903/summary.html) | [公司摘要](companies/tw-2903/tearsheet.html) | [啟動報告](companies/tw-2903/initiation.html) | [風險](companies/tw-2903/risk_plan.html) |
| 3257 | [摘要](companies/tw-3257/summary.html) | [公司摘要](companies/tw-3257/tearsheet.html) | [啟動報告](companies/tw-3257/initiation.html) | [風險](companies/tw-3257/risk_plan.html) |
| 3592 | [摘要](companies/tw-3592/summary.html) | [公司摘要](companies/tw-3592/tearsheet.html) | [啟動報告](companies/tw-3592/initiation.html) | [風險](companies/tw-3592/risk_plan.html) |
| 4739 | [摘要](companies/tw-4739/summary.html) | [公司摘要](companies/tw-4739/tearsheet.html) | [啟動報告](companies/tw-4739/initiation.html) | [風險](companies/tw-4739/risk_plan.html) |
| 4755 | [摘要](companies/tw-4755/summary.html) | [公司摘要](companies/tw-4755/tearsheet.html) | [啟動報告](companies/tw-4755/initiation.html) | [風險](companies/tw-4755/risk_plan.html) |
| 6005 | [摘要](companies/tw-6005/summary.html) | [公司摘要](companies/tw-6005/tearsheet.html) | [啟動報告](companies/tw-6005/initiation.html) | [風險](companies/tw-6005/risk_plan.html) |
| 6176 | [摘要](companies/tw-6176/summary.html) | [公司摘要](companies/tw-6176/tearsheet.html) | [啟動報告](companies/tw-6176/initiation.html) | [風險](companies/tw-6176/risk_plan.html) |
| 6214 | [摘要](companies/tw-6214/summary.html) | [公司摘要](companies/tw-6214/tearsheet.html) | [啟動報告](companies/tw-6214/initiation.html) | [風險](companies/tw-6214/risk_plan.html) |
| 6282 | [摘要](companies/tw-6282/summary.html) | [公司摘要](companies/tw-6282/tearsheet.html) | [啟動報告](companies/tw-6282/initiation.html) | [風險](companies/tw-6282/risk_plan.html) |
| 6456 | [摘要](companies/tw-6456/summary.html) | [公司摘要](companies/tw-6456/tearsheet.html) | [啟動報告](companies/tw-6456/initiation.html) | [風險](companies/tw-6456/risk_plan.html) |
| 6695 | [摘要](companies/tw-6695/summary.html) | [公司摘要](companies/tw-6695/tearsheet.html) | [啟動報告](companies/tw-6695/initiation.html) | [風險](companies/tw-6695/risk_plan.html) |
| 6919 | [摘要](companies/tw-6919/summary.html) | [公司摘要](companies/tw-6919/tearsheet.html) | [啟動報告](companies/tw-6919/initiation.html) | [風險](companies/tw-6919/risk_plan.html) |
| 8104 | [摘要](companies/tw-8104/summary.html) | [公司摘要](companies/tw-8104/tearsheet.html) | [啟動報告](companies/tw-8104/initiation.html) | [風險](companies/tw-8104/risk_plan.html) |
| 8150 | [摘要](companies/tw-8150/summary.html) | [公司摘要](companies/tw-8150/tearsheet.html) | [啟動報告](companies/tw-8150/initiation.html) | [風險](companies/tw-8150/risk_plan.html) |
| 8163 | [摘要](companies/tw-8163/summary.html) | [公司摘要](companies/tw-8163/tearsheet.html) | [啟動報告](companies/tw-8163/initiation.html) | [風險](companies/tw-8163/risk_plan.html) |
| 8215 | [摘要](companies/tw-8215/summary.html) | [公司摘要](companies/tw-8215/tearsheet.html) | [啟動報告](companies/tw-8215/initiation.html) | [風險](companies/tw-8215/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
