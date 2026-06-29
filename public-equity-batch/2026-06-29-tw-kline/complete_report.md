# StockLoop PEI 完整批次報告 2026-06-29 - TW K-line

- 產出時間：2026-06-29 22:12:37
- 標的池檔數：54
- 已具備目前價格與研究狀態的列數：54
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-06-29_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 54 檔標的；來源為 reports/twStock/2026-06-29_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：54 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：11 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：36 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：7 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：54 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：54 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 54 |
| 分類 | 現在可以買名單 | 9 |
| 分類 | 現在不能買，但值得等買點名單 | 45 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 11 |
| 研究標籤 | Wait for trigger（等待觸發） | 36 |
| 研究標籤 | Watch only（僅觀察） | 7 |
| 研究狀態 | partial（證據仍不足） | 54 |
| 估值狀態 | not_run（本流程未執行估值模型） | 54 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 54 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 54 |
| 決策就緒 | 否 | 54 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 54 |
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

- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=炒作或擁擠交易風險偏高；炒作風險=高
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：台股官方公司基本資料未命中
- 產業 thesis 缺失證據：月營收資料未命中或未接到此市場
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 風險 handoff 缺失：downside distance input missing

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1477 | 聚陽 | 現在可以買名單 | Watch only（僅觀察） | 216 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-1477/summary.html) | [風險](companies/tw-1477/risk_plan.html) | [啟動報告](companies/tw-1477/initiation.html) |
| 2377 | 微星 | 現在可以買名單 | Watch only（僅觀察） | 131.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2377/summary.html) | [風險](companies/tw-2377/risk_plan.html) | [啟動報告](companies/tw-2377/initiation.html) |
| 2406 | 國碩 | 現在可以買名單 | Watch only（僅觀察） | 34.55 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2406/summary.html) | [風險](companies/tw-2406/risk_plan.html) | [啟動報告](companies/tw-2406/initiation.html) |
| 3035 | 智原 | 現在可以買名單 | Watch only（僅觀察） | 206.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3035/summary.html) | [風險](companies/tw-3035/risk_plan.html) | [啟動報告](companies/tw-3035/initiation.html) |
| 3583 | 辛耘 | 現在可以買名單 | Watch only（僅觀察） | 812 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3583/summary.html) | [風險](companies/tw-3583/risk_plan.html) | [啟動報告](companies/tw-3583/initiation.html) |
| 4763 | 材料*-KY | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 43.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-4763/summary.html) | [風險](companies/tw-4763/risk_plan.html) | [啟動報告](companies/tw-4763/initiation.html) |
| 5269 | 祥碩 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 1,365 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-5269/summary.html) | [風險](companies/tw-5269/risk_plan.html) | [啟動報告](companies/tw-5269/initiation.html) |
| 6257 | 矽格 | 現在可以買名單 | Watch only（僅觀察） | 224 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6257/summary.html) | [風險](companies/tw-6257/risk_plan.html) | [啟動報告](companies/tw-6257/initiation.html) |
| 6415 | 矽力*-KY | 現在可以買名單 | Watch only（僅觀察） | 572 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6415/summary.html) | [風險](companies/tw-6415/risk_plan.html) | [啟動報告](companies/tw-6415/initiation.html) |
| 1609 | 大亞 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.3 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1609/summary.html) | [風險](companies/tw-1609/risk_plan.html) | [啟動報告](companies/tw-1609/initiation.html) |
| 1722 | 台肥 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 47.2 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1722/summary.html) | [風險](companies/tw-1722/risk_plan.html) | [啟動報告](companies/tw-1722/initiation.html) |
| 1795 | 美時 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 183 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1795/summary.html) | [風險](companies/tw-1795/risk_plan.html) | [啟動報告](companies/tw-1795/initiation.html) |
| 1809 | 中釉 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 47.85 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-1809/summary.html) | [風險](companies/tw-1809/risk_plan.html) | [啟動報告](companies/tw-1809/initiation.html) |
| 2002 | 中鋼 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2002/summary.html) | [風險](companies/tw-2002/risk_plan.html) | [啟動報告](companies/tw-2002/initiation.html) |
| 2027 | 大成鋼 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 39.9 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2027/summary.html) | [風險](companies/tw-2027/risk_plan.html) | [啟動報告](companies/tw-2027/initiation.html) |
| 2103 | 台橡 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 20.25 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2103/summary.html) | [風險](companies/tw-2103/risk_plan.html) | [啟動報告](companies/tw-2103/initiation.html) |
| 2206 | 三陽工業 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 61.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2206/summary.html) | [風險](companies/tw-2206/risk_plan.html) | [啟動報告](companies/tw-2206/initiation.html) |
| 2301 | 光寶科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 201.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2301/summary.html) | [風險](companies/tw-2301/risk_plan.html) | [啟動報告](companies/tw-2301/initiation.html) |
| 2330 | 台積電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2,340 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2352 | 佳世達 | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | 29.3 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-2352/summary.html) | [風險](companies/tw-2352/risk_plan.html) | [啟動報告](companies/tw-2352/initiation.html) |
| 2353 | 宏碁 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 31.9 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2353/summary.html) | [風險](companies/tw-2353/risk_plan.html) | [啟動報告](companies/tw-2353/initiation.html) |
| 2382 | 廣達 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 362 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2382/summary.html) | [風險](companies/tw-2382/risk_plan.html) | [啟動報告](companies/tw-2382/initiation.html) |
| 2449 | 京元電子 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 308 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2449/summary.html) | [風險](companies/tw-2449/risk_plan.html) | [啟動報告](companies/tw-2449/initiation.html) |
| 2457 | 飛宏 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 27 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2457/summary.html) | [風險](companies/tw-2457/risk_plan.html) | [啟動報告](companies/tw-2457/initiation.html) |
| 2903 | 遠百 | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | 23.15 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-2903/summary.html) | [風險](companies/tw-2903/risk_plan.html) | [啟動報告](companies/tw-2903/initiation.html) |
| 3003 | 健和興 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 65.7 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3003/summary.html) | [風險](companies/tw-3003/risk_plan.html) | [啟動報告](companies/tw-3003/initiation.html) |
| 3023 | 信邦 | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | 306.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-3023/summary.html) | [風險](companies/tw-3023/risk_plan.html) | [啟動報告](companies/tw-3023/initiation.html) |
| 3031 | 佰鴻 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 29.4 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3031/summary.html) | [風險](companies/tw-3031/risk_plan.html) | [啟動報告](companies/tw-3031/initiation.html) |
| 3034 | 聯詠 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 509 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3034/summary.html) | [風險](companies/tw-3034/risk_plan.html) | [啟動報告](companies/tw-3034/initiation.html) |
| 3049 | 精金 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 13 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3049/summary.html) | [風險](companies/tw-3049/risk_plan.html) | [啟動報告](companies/tw-3049/initiation.html) |
| 3305 | 昇貿 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 129.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3305/summary.html) | [風險](companies/tw-3305/risk_plan.html) | [啟動報告](companies/tw-3305/initiation.html) |
| 3413 | 京鼎 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 299 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3413/summary.html) | [風險](companies/tw-3413/risk_plan.html) | [啟動報告](companies/tw-3413/initiation.html) |
| 3528 | 安馳 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 96.7 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3528/summary.html) | [風險](companies/tw-3528/risk_plan.html) | [啟動報告](companies/tw-3528/initiation.html) |
| 3596 | 智易 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 181.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3596/summary.html) | [風險](companies/tw-3596/risk_plan.html) | [啟動報告](companies/tw-3596/initiation.html) |
| 3605 | 宏致 | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | 74 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-3605/summary.html) | [風險](companies/tw-3605/risk_plan.html) | [啟動報告](companies/tw-3605/initiation.html) |
| 3617 | 碩天 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 208.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3617/summary.html) | [風險](companies/tw-3617/risk_plan.html) | [啟動報告](companies/tw-3617/initiation.html) |
| 3706 | 神達 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 83.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3706/summary.html) | [風險](companies/tw-3706/risk_plan.html) | [啟動報告](companies/tw-3706/initiation.html) |
| 3717 | 聯嘉投控 | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | 23.6 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-3717/summary.html) | [風險](companies/tw-3717/risk_plan.html) | [啟動報告](companies/tw-3717/initiation.html) |
| 4532 | 瑞智 | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | 23.8 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-4532/summary.html) | [風險](companies/tw-4532/risk_plan.html) | [啟動報告](companies/tw-4532/initiation.html) |
| 4720 | 德淵 | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | 22.4 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-4720/summary.html) | [風險](companies/tw-4720/risk_plan.html) | [啟動報告](companies/tw-4720/initiation.html) |
| 4722 | 國精化 | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | 289.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-4722/summary.html) | [風險](companies/tw-4722/risk_plan.html) | [啟動報告](companies/tw-4722/initiation.html) |
| 4952 | 凌通 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 54.2 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-4952/summary.html) | [風險](companies/tw-4952/risk_plan.html) | [啟動報告](companies/tw-4952/initiation.html) |
| 5222 | 全訊 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 117 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-5222/summary.html) | [風險](companies/tw-5222/risk_plan.html) | [啟動報告](companies/tw-5222/initiation.html) |
| 5284 | jpp-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 355 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-5284/summary.html) | [風險](companies/tw-5284/risk_plan.html) | [啟動報告](companies/tw-5284/initiation.html) |
| 6412 | 群電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 88.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6412/summary.html) | [風險](companies/tw-6412/risk_plan.html) | [啟動報告](companies/tw-6412/initiation.html) |
| 6491 | 晶碩 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 322 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6491/summary.html) | [風險](companies/tw-6491/risk_plan.html) | [啟動報告](companies/tw-6491/initiation.html) |
| 6526 | 達發 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 626 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6526/summary.html) | [風險](companies/tw-6526/risk_plan.html) | [啟動報告](companies/tw-6526/initiation.html) |
| 6605 | 帝寶 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 137 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6605/summary.html) | [風險](companies/tw-6605/risk_plan.html) | [啟動報告](companies/tw-6605/initiation.html) |
| 6753 | 龍德造船 | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | 121.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-6753/summary.html) | [風險](companies/tw-6753/risk_plan.html) | [啟動報告](companies/tw-6753/initiation.html) |
| 6861 | 睿生光電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 303 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6861/summary.html) | [風險](companies/tw-6861/risk_plan.html) | [啟動報告](companies/tw-6861/initiation.html) |
| 6962 | 奕力-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 36.6 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6962/summary.html) | [風險](companies/tw-6962/risk_plan.html) | [啟動報告](companies/tw-6962/initiation.html) |
| 8016 | 矽創 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 311 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8016/summary.html) | [風險](companies/tw-8016/risk_plan.html) | [啟動報告](companies/tw-8016/initiation.html) |
| 9910 | 豐泰 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 69.5 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-9910/summary.html) | [風險](companies/tw-9910/risk_plan.html) | [啟動報告](companies/tw-9910/initiation.html) |
| 9941 | 裕融 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 78.6 TWD | 2026-06-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-9941/summary.html) | [風險](companies/tw-9941/risk_plan.html) | [啟動報告](companies/tw-9941/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 1477 | [摘要](companies/tw-1477/summary.html) | [公司摘要](companies/tw-1477/tearsheet.html) | [啟動報告](companies/tw-1477/initiation.html) | [風險](companies/tw-1477/risk_plan.html) |
| 2377 | [摘要](companies/tw-2377/summary.html) | [公司摘要](companies/tw-2377/tearsheet.html) | [啟動報告](companies/tw-2377/initiation.html) | [風險](companies/tw-2377/risk_plan.html) |
| 2406 | [摘要](companies/tw-2406/summary.html) | [公司摘要](companies/tw-2406/tearsheet.html) | [啟動報告](companies/tw-2406/initiation.html) | [風險](companies/tw-2406/risk_plan.html) |
| 3035 | [摘要](companies/tw-3035/summary.html) | [公司摘要](companies/tw-3035/tearsheet.html) | [啟動報告](companies/tw-3035/initiation.html) | [風險](companies/tw-3035/risk_plan.html) |
| 3583 | [摘要](companies/tw-3583/summary.html) | [公司摘要](companies/tw-3583/tearsheet.html) | [啟動報告](companies/tw-3583/initiation.html) | [風險](companies/tw-3583/risk_plan.html) |
| 4763 | [摘要](companies/tw-4763/summary.html) | [公司摘要](companies/tw-4763/tearsheet.html) | [啟動報告](companies/tw-4763/initiation.html) | [風險](companies/tw-4763/risk_plan.html) |
| 5269 | [摘要](companies/tw-5269/summary.html) | [公司摘要](companies/tw-5269/tearsheet.html) | [啟動報告](companies/tw-5269/initiation.html) | [風險](companies/tw-5269/risk_plan.html) |
| 6257 | [摘要](companies/tw-6257/summary.html) | [公司摘要](companies/tw-6257/tearsheet.html) | [啟動報告](companies/tw-6257/initiation.html) | [風險](companies/tw-6257/risk_plan.html) |
| 6415 | [摘要](companies/tw-6415/summary.html) | [公司摘要](companies/tw-6415/tearsheet.html) | [啟動報告](companies/tw-6415/initiation.html) | [風險](companies/tw-6415/risk_plan.html) |
| 1609 | [摘要](companies/tw-1609/summary.html) | [公司摘要](companies/tw-1609/tearsheet.html) | [啟動報告](companies/tw-1609/initiation.html) | [風險](companies/tw-1609/risk_plan.html) |
| 1722 | [摘要](companies/tw-1722/summary.html) | [公司摘要](companies/tw-1722/tearsheet.html) | [啟動報告](companies/tw-1722/initiation.html) | [風險](companies/tw-1722/risk_plan.html) |
| 1795 | [摘要](companies/tw-1795/summary.html) | [公司摘要](companies/tw-1795/tearsheet.html) | [啟動報告](companies/tw-1795/initiation.html) | [風險](companies/tw-1795/risk_plan.html) |
| 1809 | [摘要](companies/tw-1809/summary.html) | [公司摘要](companies/tw-1809/tearsheet.html) | [啟動報告](companies/tw-1809/initiation.html) | [風險](companies/tw-1809/risk_plan.html) |
| 2002 | [摘要](companies/tw-2002/summary.html) | [公司摘要](companies/tw-2002/tearsheet.html) | [啟動報告](companies/tw-2002/initiation.html) | [風險](companies/tw-2002/risk_plan.html) |
| 2027 | [摘要](companies/tw-2027/summary.html) | [公司摘要](companies/tw-2027/tearsheet.html) | [啟動報告](companies/tw-2027/initiation.html) | [風險](companies/tw-2027/risk_plan.html) |
| 2103 | [摘要](companies/tw-2103/summary.html) | [公司摘要](companies/tw-2103/tearsheet.html) | [啟動報告](companies/tw-2103/initiation.html) | [風險](companies/tw-2103/risk_plan.html) |
| 2206 | [摘要](companies/tw-2206/summary.html) | [公司摘要](companies/tw-2206/tearsheet.html) | [啟動報告](companies/tw-2206/initiation.html) | [風險](companies/tw-2206/risk_plan.html) |
| 2301 | [摘要](companies/tw-2301/summary.html) | [公司摘要](companies/tw-2301/tearsheet.html) | [啟動報告](companies/tw-2301/initiation.html) | [風險](companies/tw-2301/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2352 | [摘要](companies/tw-2352/summary.html) | [公司摘要](companies/tw-2352/tearsheet.html) | [啟動報告](companies/tw-2352/initiation.html) | [風險](companies/tw-2352/risk_plan.html) |
| 2353 | [摘要](companies/tw-2353/summary.html) | [公司摘要](companies/tw-2353/tearsheet.html) | [啟動報告](companies/tw-2353/initiation.html) | [風險](companies/tw-2353/risk_plan.html) |
| 2382 | [摘要](companies/tw-2382/summary.html) | [公司摘要](companies/tw-2382/tearsheet.html) | [啟動報告](companies/tw-2382/initiation.html) | [風險](companies/tw-2382/risk_plan.html) |
| 2449 | [摘要](companies/tw-2449/summary.html) | [公司摘要](companies/tw-2449/tearsheet.html) | [啟動報告](companies/tw-2449/initiation.html) | [風險](companies/tw-2449/risk_plan.html) |
| 2457 | [摘要](companies/tw-2457/summary.html) | [公司摘要](companies/tw-2457/tearsheet.html) | [啟動報告](companies/tw-2457/initiation.html) | [風險](companies/tw-2457/risk_plan.html) |
| 2903 | [摘要](companies/tw-2903/summary.html) | [公司摘要](companies/tw-2903/tearsheet.html) | [啟動報告](companies/tw-2903/initiation.html) | [風險](companies/tw-2903/risk_plan.html) |
| 3003 | [摘要](companies/tw-3003/summary.html) | [公司摘要](companies/tw-3003/tearsheet.html) | [啟動報告](companies/tw-3003/initiation.html) | [風險](companies/tw-3003/risk_plan.html) |
| 3023 | [摘要](companies/tw-3023/summary.html) | [公司摘要](companies/tw-3023/tearsheet.html) | [啟動報告](companies/tw-3023/initiation.html) | [風險](companies/tw-3023/risk_plan.html) |
| 3031 | [摘要](companies/tw-3031/summary.html) | [公司摘要](companies/tw-3031/tearsheet.html) | [啟動報告](companies/tw-3031/initiation.html) | [風險](companies/tw-3031/risk_plan.html) |
| 3034 | [摘要](companies/tw-3034/summary.html) | [公司摘要](companies/tw-3034/tearsheet.html) | [啟動報告](companies/tw-3034/initiation.html) | [風險](companies/tw-3034/risk_plan.html) |
| 3049 | [摘要](companies/tw-3049/summary.html) | [公司摘要](companies/tw-3049/tearsheet.html) | [啟動報告](companies/tw-3049/initiation.html) | [風險](companies/tw-3049/risk_plan.html) |
| 3305 | [摘要](companies/tw-3305/summary.html) | [公司摘要](companies/tw-3305/tearsheet.html) | [啟動報告](companies/tw-3305/initiation.html) | [風險](companies/tw-3305/risk_plan.html) |
| 3413 | [摘要](companies/tw-3413/summary.html) | [公司摘要](companies/tw-3413/tearsheet.html) | [啟動報告](companies/tw-3413/initiation.html) | [風險](companies/tw-3413/risk_plan.html) |
| 3528 | [摘要](companies/tw-3528/summary.html) | [公司摘要](companies/tw-3528/tearsheet.html) | [啟動報告](companies/tw-3528/initiation.html) | [風險](companies/tw-3528/risk_plan.html) |
| 3596 | [摘要](companies/tw-3596/summary.html) | [公司摘要](companies/tw-3596/tearsheet.html) | [啟動報告](companies/tw-3596/initiation.html) | [風險](companies/tw-3596/risk_plan.html) |
| 3605 | [摘要](companies/tw-3605/summary.html) | [公司摘要](companies/tw-3605/tearsheet.html) | [啟動報告](companies/tw-3605/initiation.html) | [風險](companies/tw-3605/risk_plan.html) |
| 3617 | [摘要](companies/tw-3617/summary.html) | [公司摘要](companies/tw-3617/tearsheet.html) | [啟動報告](companies/tw-3617/initiation.html) | [風險](companies/tw-3617/risk_plan.html) |
| 3706 | [摘要](companies/tw-3706/summary.html) | [公司摘要](companies/tw-3706/tearsheet.html) | [啟動報告](companies/tw-3706/initiation.html) | [風險](companies/tw-3706/risk_plan.html) |
| 3717 | [摘要](companies/tw-3717/summary.html) | [公司摘要](companies/tw-3717/tearsheet.html) | [啟動報告](companies/tw-3717/initiation.html) | [風險](companies/tw-3717/risk_plan.html) |
| 4532 | [摘要](companies/tw-4532/summary.html) | [公司摘要](companies/tw-4532/tearsheet.html) | [啟動報告](companies/tw-4532/initiation.html) | [風險](companies/tw-4532/risk_plan.html) |
| 4720 | [摘要](companies/tw-4720/summary.html) | [公司摘要](companies/tw-4720/tearsheet.html) | [啟動報告](companies/tw-4720/initiation.html) | [風險](companies/tw-4720/risk_plan.html) |
| 4722 | [摘要](companies/tw-4722/summary.html) | [公司摘要](companies/tw-4722/tearsheet.html) | [啟動報告](companies/tw-4722/initiation.html) | [風險](companies/tw-4722/risk_plan.html) |
| 4952 | [摘要](companies/tw-4952/summary.html) | [公司摘要](companies/tw-4952/tearsheet.html) | [啟動報告](companies/tw-4952/initiation.html) | [風險](companies/tw-4952/risk_plan.html) |
| 5222 | [摘要](companies/tw-5222/summary.html) | [公司摘要](companies/tw-5222/tearsheet.html) | [啟動報告](companies/tw-5222/initiation.html) | [風險](companies/tw-5222/risk_plan.html) |
| 5284 | [摘要](companies/tw-5284/summary.html) | [公司摘要](companies/tw-5284/tearsheet.html) | [啟動報告](companies/tw-5284/initiation.html) | [風險](companies/tw-5284/risk_plan.html) |
| 6412 | [摘要](companies/tw-6412/summary.html) | [公司摘要](companies/tw-6412/tearsheet.html) | [啟動報告](companies/tw-6412/initiation.html) | [風險](companies/tw-6412/risk_plan.html) |
| 6491 | [摘要](companies/tw-6491/summary.html) | [公司摘要](companies/tw-6491/tearsheet.html) | [啟動報告](companies/tw-6491/initiation.html) | [風險](companies/tw-6491/risk_plan.html) |
| 6526 | [摘要](companies/tw-6526/summary.html) | [公司摘要](companies/tw-6526/tearsheet.html) | [啟動報告](companies/tw-6526/initiation.html) | [風險](companies/tw-6526/risk_plan.html) |
| 6605 | [摘要](companies/tw-6605/summary.html) | [公司摘要](companies/tw-6605/tearsheet.html) | [啟動報告](companies/tw-6605/initiation.html) | [風險](companies/tw-6605/risk_plan.html) |
| 6753 | [摘要](companies/tw-6753/summary.html) | [公司摘要](companies/tw-6753/tearsheet.html) | [啟動報告](companies/tw-6753/initiation.html) | [風險](companies/tw-6753/risk_plan.html) |
| 6861 | [摘要](companies/tw-6861/summary.html) | [公司摘要](companies/tw-6861/tearsheet.html) | [啟動報告](companies/tw-6861/initiation.html) | [風險](companies/tw-6861/risk_plan.html) |
| 6962 | [摘要](companies/tw-6962/summary.html) | [公司摘要](companies/tw-6962/tearsheet.html) | [啟動報告](companies/tw-6962/initiation.html) | [風險](companies/tw-6962/risk_plan.html) |
| 8016 | [摘要](companies/tw-8016/summary.html) | [公司摘要](companies/tw-8016/tearsheet.html) | [啟動報告](companies/tw-8016/initiation.html) | [風險](companies/tw-8016/risk_plan.html) |
| 9910 | [摘要](companies/tw-9910/summary.html) | [公司摘要](companies/tw-9910/tearsheet.html) | [啟動報告](companies/tw-9910/initiation.html) | [風險](companies/tw-9910/risk_plan.html) |
| 9941 | [摘要](companies/tw-9941/summary.html) | [公司摘要](companies/tw-9941/tearsheet.html) | [啟動報告](companies/tw-9941/initiation.html) | [風險](companies/tw-9941/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
