# StockLoop PEI 完整批次報告 2026-07-03 - TW K-line

- 產出時間：2026-07-03 16:13:55
- 標的池檔數：67
- 已具備目前價格與研究狀態的列數：67
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-03_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 67 檔標的；來源為 reports/twStock/2026-07-03_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：67 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：50 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：17 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：67 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：67 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 67 |
| 分類 | 現在可以買名單 | 17 |
| 分類 | 現在不能買，但值得等買點名單 | 50 |
| 研究標籤 | Wait for trigger（等待觸發） | 50 |
| 研究標籤 | Watch only（僅觀察） | 17 |
| 研究狀態 | partial（證據仍不足） | 67 |
| 估值狀態 | not_run（本流程未執行估值模型） | 67 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 67 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 67 |
| 決策就緒 | 否 | 67 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 67 |
| research_status_not_complete | 67 |
| risk_status_not_complete | 67 |
| valuation_status_not_complete | 67 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- fund_or_etf 不適用 common-equity PEI 模型，需工具型/ETF 風險路徑
- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 官方證據 handoff 缺失：official company or fundamental evidence missing
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
| 2002 | 中鋼 | 現在可以買名單 | Watch only（僅觀察） | 18.6 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2002/summary.html) | [風險](companies/tw-2002/risk_plan.html) | [啟動報告](companies/tw-2002/initiation.html) |
| 2233 | 宇隆 | 現在可以買名單 | Watch only（僅觀察） | 250 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2233/summary.html) | [風險](companies/tw-2233/risk_plan.html) | [啟動報告](companies/tw-2233/initiation.html) |
| 2360 | 致茂 | 現在可以買名單 | Watch only（僅觀察） | 2,210 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2360/summary.html) | [風險](companies/tw-2360/risk_plan.html) | [啟動報告](companies/tw-2360/initiation.html) |
| 2368 | 金像電 | 現在可以買名單 | Watch only（僅觀察） | 1,235 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2368/summary.html) | [風險](companies/tw-2368/risk_plan.html) | [啟動報告](companies/tw-2368/initiation.html) |
| 2426 | 鼎元 | 現在可以買名單 | Watch only（僅觀察） | 74.8 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2426/summary.html) | [風險](companies/tw-2426/risk_plan.html) | [啟動報告](companies/tw-2426/initiation.html) |
| 2605 | 新興 | 現在可以買名單 | Watch only（僅觀察） | 29.05 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2605/summary.html) | [風險](companies/tw-2605/risk_plan.html) | [啟動報告](companies/tw-2605/initiation.html) |
| 2615 | 萬海 | 現在可以買名單 | Watch only（僅觀察） | 78.9 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2615/summary.html) | [風險](companies/tw-2615/risk_plan.html) | [啟動報告](companies/tw-2615/initiation.html) |
| 2855 | 統一證 | 現在可以買名單 | Watch only（僅觀察） | 49.75 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2855/summary.html) | [風險](companies/tw-2855/risk_plan.html) | [啟動報告](companies/tw-2855/initiation.html) |
| 2883 | 凱基金 | 現在可以買名單 | Watch only（僅觀察） | 27.9 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2883/summary.html) | [風險](companies/tw-2883/risk_plan.html) | [啟動報告](companies/tw-2883/initiation.html) |
| 3005 | 神基 | 現在可以買名單 | Watch only（僅觀察） | 102.5 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3005/summary.html) | [風險](companies/tw-3005/risk_plan.html) | [啟動報告](companies/tw-3005/initiation.html) |
| 3044 | 健鼎 | 現在可以買名單 | Watch only（僅觀察） | 506 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3044/summary.html) | [風險](companies/tw-3044/risk_plan.html) | [啟動報告](companies/tw-3044/initiation.html) |
| 3167 | 大量 | 現在可以買名單 | Watch only（僅觀察） | 798 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3167/summary.html) | [風險](companies/tw-3167/risk_plan.html) | [啟動報告](companies/tw-3167/initiation.html) |
| 3450 | 聯鈞 | 現在可以買名單 | Watch only（僅觀察） | 501 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3450/summary.html) | [風險](companies/tw-3450/risk_plan.html) | [啟動報告](companies/tw-3450/initiation.html) |
| 3702 | 大聯大 | 現在可以買名單 | Watch only（僅觀察） | 108 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3702/summary.html) | [風險](companies/tw-3702/risk_plan.html) | [啟動報告](companies/tw-3702/initiation.html) |
| 4904 | 遠傳 | 現在可以買名單 | Watch only（僅觀察） | 103 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-4904/summary.html) | [風險](companies/tw-4904/risk_plan.html) | [啟動報告](companies/tw-4904/initiation.html) |
| 8112 | 至上 | 現在可以買名單 | Watch only（僅觀察） | 89 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-8112/summary.html) | [風險](companies/tw-8112/risk_plan.html) | [啟動報告](companies/tw-8112/initiation.html) |
| 8131 | 福懋科 | 現在可以買名單 | Watch only（僅觀察） | 70.4 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-8131/summary.html) | [風險](companies/tw-8131/risk_plan.html) | [啟動報告](companies/tw-8131/initiation.html) |
| 1232 | 大統益 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 143 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1232/summary.html) | [風險](companies/tw-1232/risk_plan.html) | [啟動報告](companies/tw-1232/initiation.html) |
| 1605 | 華新 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.55 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1605/summary.html) | [風險](companies/tw-1605/risk_plan.html) | [啟動報告](companies/tw-1605/initiation.html) |
| 1608 | 華榮 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 33.8 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1608/summary.html) | [風險](companies/tw-1608/risk_plan.html) | [啟動報告](companies/tw-1608/initiation.html) |
| 1773 | 勝一 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 173 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1773/summary.html) | [風險](companies/tw-1773/risk_plan.html) | [啟動報告](companies/tw-1773/initiation.html) |
| 1795 | 美時 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 192 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1795/summary.html) | [風險](companies/tw-1795/risk_plan.html) | [啟動報告](companies/tw-1795/initiation.html) |
| 2009 | 第一銅 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 38.65 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2009/summary.html) | [風險](companies/tw-2009/risk_plan.html) | [啟動報告](companies/tw-2009/initiation.html) |
| 2014 | 中鴻 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 17.2 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2014/summary.html) | [風險](companies/tw-2014/risk_plan.html) | [啟動報告](companies/tw-2014/initiation.html) |
| 2308 | 台達電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1,970 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2308/summary.html) | [風險](companies/tw-2308/risk_plan.html) | [啟動報告](companies/tw-2308/initiation.html) |
| 2348 | 海悅 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 71.8 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2348/summary.html) | [風險](companies/tw-2348/risk_plan.html) | [啟動報告](companies/tw-2348/initiation.html) |
| 2353 | 宏碁 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 32 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2353/summary.html) | [風險](companies/tw-2353/risk_plan.html) | [啟動報告](companies/tw-2353/initiation.html) |
| 2371 | 大同 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 27.45 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2371/summary.html) | [風險](companies/tw-2371/risk_plan.html) | [啟動報告](companies/tw-2371/initiation.html) |
| 2392 | 正崴 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 37.9 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2392/summary.html) | [風險](companies/tw-2392/risk_plan.html) | [啟動報告](companies/tw-2392/initiation.html) |
| 2393 | 億光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 67.8 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2393/summary.html) | [風險](companies/tw-2393/risk_plan.html) | [啟動報告](companies/tw-2393/initiation.html) |
| 2419 | 仲琦 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 28 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2419/summary.html) | [風險](companies/tw-2419/risk_plan.html) | [啟動報告](companies/tw-2419/initiation.html) |
| 2428 | 興勤 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 311 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2428/summary.html) | [風險](companies/tw-2428/risk_plan.html) | [啟動報告](companies/tw-2428/initiation.html) |
| 2429 | 銘旺科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 44.3 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2429/summary.html) | [風險](companies/tw-2429/risk_plan.html) | [啟動報告](companies/tw-2429/initiation.html) |
| 2439 | 美律 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 90 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2439/summary.html) | [風險](companies/tw-2439/risk_plan.html) | [啟動報告](companies/tw-2439/initiation.html) |
| 2455 | 全新 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 348 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2455/summary.html) | [風險](companies/tw-2455/risk_plan.html) | [啟動報告](companies/tw-2455/initiation.html) |
| 2474 | 可成 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 201.5 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2474/summary.html) | [風險](companies/tw-2474/risk_plan.html) | [啟動報告](companies/tw-2474/initiation.html) |
| 2498 | 宏達電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 43.5 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2498/summary.html) | [風險](companies/tw-2498/risk_plan.html) | [啟動報告](companies/tw-2498/initiation.html) |
| 2542 | 興富發 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 43.1 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2542/summary.html) | [風險](companies/tw-2542/risk_plan.html) | [啟動報告](companies/tw-2542/initiation.html) |
| 2609 | 陽明 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 51 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2609/summary.html) | [風險](companies/tw-2609/risk_plan.html) | [啟動報告](companies/tw-2609/initiation.html) |
| 2637 | 慧洋-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 71.7 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2637/summary.html) | [風險](companies/tw-2637/risk_plan.html) | [啟動報告](companies/tw-2637/initiation.html) |
| 2889 | 國票金 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.8 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2889/summary.html) | [風險](companies/tw-2889/risk_plan.html) | [啟動報告](companies/tw-2889/initiation.html) |
| 3013 | 晟銘電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 109.5 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3013/summary.html) | [風險](companies/tw-3013/risk_plan.html) | [啟動報告](companies/tw-3013/initiation.html) |
| 3209 | 全科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 59 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3209/summary.html) | [風險](companies/tw-3209/risk_plan.html) | [啟動報告](companies/tw-3209/initiation.html) |
| 3376 | 新日興 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 194 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3376/summary.html) | [風險](companies/tw-3376/risk_plan.html) | [啟動報告](companies/tw-3376/initiation.html) |
| 3380 | 明泰 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 34.05 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3380/summary.html) | [風險](companies/tw-3380/risk_plan.html) | [啟動報告](companies/tw-3380/initiation.html) |
| 3645 | 達邁 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 91.6 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3645/summary.html) | [風險](companies/tw-3645/risk_plan.html) | [啟動報告](companies/tw-3645/initiation.html) |
| 3704 | 合勤控 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 44.85 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3704/summary.html) | [風險](companies/tw-3704/risk_plan.html) | [啟動報告](companies/tw-3704/initiation.html) |
| 4906 | 正文 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 42.3 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-4906/summary.html) | [風險](companies/tw-4906/risk_plan.html) | [啟動報告](companies/tw-4906/initiation.html) |
| 4938 | 和碩 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 83.2 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-4938/summary.html) | [風險](companies/tw-4938/risk_plan.html) | [啟動報告](companies/tw-4938/initiation.html) |
| 4956 | 光鋐 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 37.95 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-4956/summary.html) | [風險](companies/tw-4956/risk_plan.html) | [啟動報告](companies/tw-4956/initiation.html) |
| 4961 | 天鈺 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 166 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-4961/summary.html) | [風險](companies/tw-4961/risk_plan.html) | [啟動報告](companies/tw-4961/initiation.html) |
| 5222 | 全訊 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 123 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-5222/summary.html) | [風險](companies/tw-5222/risk_plan.html) | [啟動報告](companies/tw-5222/initiation.html) |
| 5521 | 工信 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.35 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-5521/summary.html) | [風險](companies/tw-5521/risk_plan.html) | [啟動報告](companies/tw-5521/initiation.html) |
| 5534 | 長虹 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 78.7 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-5534/summary.html) | [風險](companies/tw-5534/risk_plan.html) | [啟動報告](companies/tw-5534/initiation.html) |
| 5876 | 上海商銀 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 41.85 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-5876/summary.html) | [風險](companies/tw-5876/risk_plan.html) | [啟動報告](companies/tw-5876/initiation.html) |
| 6205 | 詮欣 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 73.1 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6205/summary.html) | [風險](companies/tw-6205/risk_plan.html) | [啟動報告](companies/tw-6205/initiation.html) |
| 6206 | 飛捷 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 130 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6206/summary.html) | [風險](companies/tw-6206/risk_plan.html) | [啟動報告](companies/tw-6206/initiation.html) |
| 6271 | 同欣電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 264 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6271/summary.html) | [風險](companies/tw-6271/risk_plan.html) | [啟動報告](companies/tw-6271/initiation.html) |
| 6589 | 台康生技 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 46.9 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6589/summary.html) | [風險](companies/tw-6589/risk_plan.html) | [啟動報告](companies/tw-6589/initiation.html) |
| 6605 | 帝寶 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 133 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6605/summary.html) | [風險](companies/tw-6605/risk_plan.html) | [啟動報告](companies/tw-6605/initiation.html) |
| 6873 | 泓德能源 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 80.8 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6873/summary.html) | [風險](companies/tw-6873/risk_plan.html) | [啟動報告](companies/tw-6873/initiation.html) |
| 6890 | 來億-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 193 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6890/summary.html) | [風險](companies/tw-6890/risk_plan.html) | [啟動報告](companies/tw-6890/initiation.html) |
| 6919 | 康霈* | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 96.6 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6919/summary.html) | [風險](companies/tw-6919/risk_plan.html) | [啟動報告](companies/tw-6919/initiation.html) |
| 8114 | 振樺電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 190 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8114/summary.html) | [風險](companies/tw-8114/risk_plan.html) | [啟動報告](companies/tw-8114/initiation.html) |
| 8422 | 可寧衛* | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 26.8 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8422/summary.html) | [風險](companies/tw-8422/risk_plan.html) | [啟動報告](companies/tw-8422/initiation.html) |
| 8926 | 台汽電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 73 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8926/summary.html) | [風險](companies/tw-8926/risk_plan.html) | [啟動報告](companies/tw-8926/initiation.html) |
| 9938 | 百和 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 44.9 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-9938/summary.html) | [風險](companies/tw-9938/risk_plan.html) | [啟動報告](companies/tw-9938/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 2002 | [摘要](companies/tw-2002/summary.html) | [公司摘要](companies/tw-2002/tearsheet.html) | [啟動報告](companies/tw-2002/initiation.html) | [風險](companies/tw-2002/risk_plan.html) |
| 2233 | [摘要](companies/tw-2233/summary.html) | [公司摘要](companies/tw-2233/tearsheet.html) | [啟動報告](companies/tw-2233/initiation.html) | [風險](companies/tw-2233/risk_plan.html) |
| 2360 | [摘要](companies/tw-2360/summary.html) | [公司摘要](companies/tw-2360/tearsheet.html) | [啟動報告](companies/tw-2360/initiation.html) | [風險](companies/tw-2360/risk_plan.html) |
| 2368 | [摘要](companies/tw-2368/summary.html) | [公司摘要](companies/tw-2368/tearsheet.html) | [啟動報告](companies/tw-2368/initiation.html) | [風險](companies/tw-2368/risk_plan.html) |
| 2426 | [摘要](companies/tw-2426/summary.html) | [公司摘要](companies/tw-2426/tearsheet.html) | [啟動報告](companies/tw-2426/initiation.html) | [風險](companies/tw-2426/risk_plan.html) |
| 2605 | [摘要](companies/tw-2605/summary.html) | [公司摘要](companies/tw-2605/tearsheet.html) | [啟動報告](companies/tw-2605/initiation.html) | [風險](companies/tw-2605/risk_plan.html) |
| 2615 | [摘要](companies/tw-2615/summary.html) | [公司摘要](companies/tw-2615/tearsheet.html) | [啟動報告](companies/tw-2615/initiation.html) | [風險](companies/tw-2615/risk_plan.html) |
| 2855 | [摘要](companies/tw-2855/summary.html) | [公司摘要](companies/tw-2855/tearsheet.html) | [啟動報告](companies/tw-2855/initiation.html) | [風險](companies/tw-2855/risk_plan.html) |
| 2883 | [摘要](companies/tw-2883/summary.html) | [公司摘要](companies/tw-2883/tearsheet.html) | [啟動報告](companies/tw-2883/initiation.html) | [風險](companies/tw-2883/risk_plan.html) |
| 3005 | [摘要](companies/tw-3005/summary.html) | [公司摘要](companies/tw-3005/tearsheet.html) | [啟動報告](companies/tw-3005/initiation.html) | [風險](companies/tw-3005/risk_plan.html) |
| 3044 | [摘要](companies/tw-3044/summary.html) | [公司摘要](companies/tw-3044/tearsheet.html) | [啟動報告](companies/tw-3044/initiation.html) | [風險](companies/tw-3044/risk_plan.html) |
| 3167 | [摘要](companies/tw-3167/summary.html) | [公司摘要](companies/tw-3167/tearsheet.html) | [啟動報告](companies/tw-3167/initiation.html) | [風險](companies/tw-3167/risk_plan.html) |
| 3450 | [摘要](companies/tw-3450/summary.html) | [公司摘要](companies/tw-3450/tearsheet.html) | [啟動報告](companies/tw-3450/initiation.html) | [風險](companies/tw-3450/risk_plan.html) |
| 3702 | [摘要](companies/tw-3702/summary.html) | [公司摘要](companies/tw-3702/tearsheet.html) | [啟動報告](companies/tw-3702/initiation.html) | [風險](companies/tw-3702/risk_plan.html) |
| 4904 | [摘要](companies/tw-4904/summary.html) | [公司摘要](companies/tw-4904/tearsheet.html) | [啟動報告](companies/tw-4904/initiation.html) | [風險](companies/tw-4904/risk_plan.html) |
| 8112 | [摘要](companies/tw-8112/summary.html) | [公司摘要](companies/tw-8112/tearsheet.html) | [啟動報告](companies/tw-8112/initiation.html) | [風險](companies/tw-8112/risk_plan.html) |
| 8131 | [摘要](companies/tw-8131/summary.html) | [公司摘要](companies/tw-8131/tearsheet.html) | [啟動報告](companies/tw-8131/initiation.html) | [風險](companies/tw-8131/risk_plan.html) |
| 1232 | [摘要](companies/tw-1232/summary.html) | [公司摘要](companies/tw-1232/tearsheet.html) | [啟動報告](companies/tw-1232/initiation.html) | [風險](companies/tw-1232/risk_plan.html) |
| 1605 | [摘要](companies/tw-1605/summary.html) | [公司摘要](companies/tw-1605/tearsheet.html) | [啟動報告](companies/tw-1605/initiation.html) | [風險](companies/tw-1605/risk_plan.html) |
| 1608 | [摘要](companies/tw-1608/summary.html) | [公司摘要](companies/tw-1608/tearsheet.html) | [啟動報告](companies/tw-1608/initiation.html) | [風險](companies/tw-1608/risk_plan.html) |
| 1773 | [摘要](companies/tw-1773/summary.html) | [公司摘要](companies/tw-1773/tearsheet.html) | [啟動報告](companies/tw-1773/initiation.html) | [風險](companies/tw-1773/risk_plan.html) |
| 1795 | [摘要](companies/tw-1795/summary.html) | [公司摘要](companies/tw-1795/tearsheet.html) | [啟動報告](companies/tw-1795/initiation.html) | [風險](companies/tw-1795/risk_plan.html) |
| 2009 | [摘要](companies/tw-2009/summary.html) | [公司摘要](companies/tw-2009/tearsheet.html) | [啟動報告](companies/tw-2009/initiation.html) | [風險](companies/tw-2009/risk_plan.html) |
| 2014 | [摘要](companies/tw-2014/summary.html) | [公司摘要](companies/tw-2014/tearsheet.html) | [啟動報告](companies/tw-2014/initiation.html) | [風險](companies/tw-2014/risk_plan.html) |
| 2308 | [摘要](companies/tw-2308/summary.html) | [公司摘要](companies/tw-2308/tearsheet.html) | [啟動報告](companies/tw-2308/initiation.html) | [風險](companies/tw-2308/risk_plan.html) |
| 2348 | [摘要](companies/tw-2348/summary.html) | [公司摘要](companies/tw-2348/tearsheet.html) | [啟動報告](companies/tw-2348/initiation.html) | [風險](companies/tw-2348/risk_plan.html) |
| 2353 | [摘要](companies/tw-2353/summary.html) | [公司摘要](companies/tw-2353/tearsheet.html) | [啟動報告](companies/tw-2353/initiation.html) | [風險](companies/tw-2353/risk_plan.html) |
| 2371 | [摘要](companies/tw-2371/summary.html) | [公司摘要](companies/tw-2371/tearsheet.html) | [啟動報告](companies/tw-2371/initiation.html) | [風險](companies/tw-2371/risk_plan.html) |
| 2392 | [摘要](companies/tw-2392/summary.html) | [公司摘要](companies/tw-2392/tearsheet.html) | [啟動報告](companies/tw-2392/initiation.html) | [風險](companies/tw-2392/risk_plan.html) |
| 2393 | [摘要](companies/tw-2393/summary.html) | [公司摘要](companies/tw-2393/tearsheet.html) | [啟動報告](companies/tw-2393/initiation.html) | [風險](companies/tw-2393/risk_plan.html) |
| 2419 | [摘要](companies/tw-2419/summary.html) | [公司摘要](companies/tw-2419/tearsheet.html) | [啟動報告](companies/tw-2419/initiation.html) | [風險](companies/tw-2419/risk_plan.html) |
| 2428 | [摘要](companies/tw-2428/summary.html) | [公司摘要](companies/tw-2428/tearsheet.html) | [啟動報告](companies/tw-2428/initiation.html) | [風險](companies/tw-2428/risk_plan.html) |
| 2429 | [摘要](companies/tw-2429/summary.html) | [公司摘要](companies/tw-2429/tearsheet.html) | [啟動報告](companies/tw-2429/initiation.html) | [風險](companies/tw-2429/risk_plan.html) |
| 2439 | [摘要](companies/tw-2439/summary.html) | [公司摘要](companies/tw-2439/tearsheet.html) | [啟動報告](companies/tw-2439/initiation.html) | [風險](companies/tw-2439/risk_plan.html) |
| 2455 | [摘要](companies/tw-2455/summary.html) | [公司摘要](companies/tw-2455/tearsheet.html) | [啟動報告](companies/tw-2455/initiation.html) | [風險](companies/tw-2455/risk_plan.html) |
| 2474 | [摘要](companies/tw-2474/summary.html) | [公司摘要](companies/tw-2474/tearsheet.html) | [啟動報告](companies/tw-2474/initiation.html) | [風險](companies/tw-2474/risk_plan.html) |
| 2498 | [摘要](companies/tw-2498/summary.html) | [公司摘要](companies/tw-2498/tearsheet.html) | [啟動報告](companies/tw-2498/initiation.html) | [風險](companies/tw-2498/risk_plan.html) |
| 2542 | [摘要](companies/tw-2542/summary.html) | [公司摘要](companies/tw-2542/tearsheet.html) | [啟動報告](companies/tw-2542/initiation.html) | [風險](companies/tw-2542/risk_plan.html) |
| 2609 | [摘要](companies/tw-2609/summary.html) | [公司摘要](companies/tw-2609/tearsheet.html) | [啟動報告](companies/tw-2609/initiation.html) | [風險](companies/tw-2609/risk_plan.html) |
| 2637 | [摘要](companies/tw-2637/summary.html) | [公司摘要](companies/tw-2637/tearsheet.html) | [啟動報告](companies/tw-2637/initiation.html) | [風險](companies/tw-2637/risk_plan.html) |
| 2889 | [摘要](companies/tw-2889/summary.html) | [公司摘要](companies/tw-2889/tearsheet.html) | [啟動報告](companies/tw-2889/initiation.html) | [風險](companies/tw-2889/risk_plan.html) |
| 3013 | [摘要](companies/tw-3013/summary.html) | [公司摘要](companies/tw-3013/tearsheet.html) | [啟動報告](companies/tw-3013/initiation.html) | [風險](companies/tw-3013/risk_plan.html) |
| 3209 | [摘要](companies/tw-3209/summary.html) | [公司摘要](companies/tw-3209/tearsheet.html) | [啟動報告](companies/tw-3209/initiation.html) | [風險](companies/tw-3209/risk_plan.html) |
| 3376 | [摘要](companies/tw-3376/summary.html) | [公司摘要](companies/tw-3376/tearsheet.html) | [啟動報告](companies/tw-3376/initiation.html) | [風險](companies/tw-3376/risk_plan.html) |
| 3380 | [摘要](companies/tw-3380/summary.html) | [公司摘要](companies/tw-3380/tearsheet.html) | [啟動報告](companies/tw-3380/initiation.html) | [風險](companies/tw-3380/risk_plan.html) |
| 3645 | [摘要](companies/tw-3645/summary.html) | [公司摘要](companies/tw-3645/tearsheet.html) | [啟動報告](companies/tw-3645/initiation.html) | [風險](companies/tw-3645/risk_plan.html) |
| 3704 | [摘要](companies/tw-3704/summary.html) | [公司摘要](companies/tw-3704/tearsheet.html) | [啟動報告](companies/tw-3704/initiation.html) | [風險](companies/tw-3704/risk_plan.html) |
| 4906 | [摘要](companies/tw-4906/summary.html) | [公司摘要](companies/tw-4906/tearsheet.html) | [啟動報告](companies/tw-4906/initiation.html) | [風險](companies/tw-4906/risk_plan.html) |
| 4938 | [摘要](companies/tw-4938/summary.html) | [公司摘要](companies/tw-4938/tearsheet.html) | [啟動報告](companies/tw-4938/initiation.html) | [風險](companies/tw-4938/risk_plan.html) |
| 4956 | [摘要](companies/tw-4956/summary.html) | [公司摘要](companies/tw-4956/tearsheet.html) | [啟動報告](companies/tw-4956/initiation.html) | [風險](companies/tw-4956/risk_plan.html) |
| 4961 | [摘要](companies/tw-4961/summary.html) | [公司摘要](companies/tw-4961/tearsheet.html) | [啟動報告](companies/tw-4961/initiation.html) | [風險](companies/tw-4961/risk_plan.html) |
| 5222 | [摘要](companies/tw-5222/summary.html) | [公司摘要](companies/tw-5222/tearsheet.html) | [啟動報告](companies/tw-5222/initiation.html) | [風險](companies/tw-5222/risk_plan.html) |
| 5521 | [摘要](companies/tw-5521/summary.html) | [公司摘要](companies/tw-5521/tearsheet.html) | [啟動報告](companies/tw-5521/initiation.html) | [風險](companies/tw-5521/risk_plan.html) |
| 5534 | [摘要](companies/tw-5534/summary.html) | [公司摘要](companies/tw-5534/tearsheet.html) | [啟動報告](companies/tw-5534/initiation.html) | [風險](companies/tw-5534/risk_plan.html) |
| 5876 | [摘要](companies/tw-5876/summary.html) | [公司摘要](companies/tw-5876/tearsheet.html) | [啟動報告](companies/tw-5876/initiation.html) | [風險](companies/tw-5876/risk_plan.html) |
| 6205 | [摘要](companies/tw-6205/summary.html) | [公司摘要](companies/tw-6205/tearsheet.html) | [啟動報告](companies/tw-6205/initiation.html) | [風險](companies/tw-6205/risk_plan.html) |
| 6206 | [摘要](companies/tw-6206/summary.html) | [公司摘要](companies/tw-6206/tearsheet.html) | [啟動報告](companies/tw-6206/initiation.html) | [風險](companies/tw-6206/risk_plan.html) |
| 6271 | [摘要](companies/tw-6271/summary.html) | [公司摘要](companies/tw-6271/tearsheet.html) | [啟動報告](companies/tw-6271/initiation.html) | [風險](companies/tw-6271/risk_plan.html) |
| 6589 | [摘要](companies/tw-6589/summary.html) | [公司摘要](companies/tw-6589/tearsheet.html) | [啟動報告](companies/tw-6589/initiation.html) | [風險](companies/tw-6589/risk_plan.html) |
| 6605 | [摘要](companies/tw-6605/summary.html) | [公司摘要](companies/tw-6605/tearsheet.html) | [啟動報告](companies/tw-6605/initiation.html) | [風險](companies/tw-6605/risk_plan.html) |
| 6873 | [摘要](companies/tw-6873/summary.html) | [公司摘要](companies/tw-6873/tearsheet.html) | [啟動報告](companies/tw-6873/initiation.html) | [風險](companies/tw-6873/risk_plan.html) |
| 6890 | [摘要](companies/tw-6890/summary.html) | [公司摘要](companies/tw-6890/tearsheet.html) | [啟動報告](companies/tw-6890/initiation.html) | [風險](companies/tw-6890/risk_plan.html) |
| 6919 | [摘要](companies/tw-6919/summary.html) | [公司摘要](companies/tw-6919/tearsheet.html) | [啟動報告](companies/tw-6919/initiation.html) | [風險](companies/tw-6919/risk_plan.html) |
| 8114 | [摘要](companies/tw-8114/summary.html) | [公司摘要](companies/tw-8114/tearsheet.html) | [啟動報告](companies/tw-8114/initiation.html) | [風險](companies/tw-8114/risk_plan.html) |
| 8422 | [摘要](companies/tw-8422/summary.html) | [公司摘要](companies/tw-8422/tearsheet.html) | [啟動報告](companies/tw-8422/initiation.html) | [風險](companies/tw-8422/risk_plan.html) |
| 8926 | [摘要](companies/tw-8926/summary.html) | [公司摘要](companies/tw-8926/tearsheet.html) | [啟動報告](companies/tw-8926/initiation.html) | [風險](companies/tw-8926/risk_plan.html) |
| 9938 | [摘要](companies/tw-9938/summary.html) | [公司摘要](companies/tw-9938/tearsheet.html) | [啟動報告](companies/tw-9938/initiation.html) | [風險](companies/tw-9938/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
