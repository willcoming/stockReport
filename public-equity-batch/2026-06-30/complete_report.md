# StockLoop PEI 完整批次報告 2026-06-30

- 產出時間：2026-06-30 07:56:08
- 標的池檔數：32
- 已具備目前價格與研究狀態的列數：32
- Decision-ready 檔數：0
- 來源報告：reports/news/2026-06-30_kol_news_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 32 檔標的；來源為 reports/news/2026-06-30_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：32 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：3 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：18 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：11 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：32 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：32 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 19 |
| 市場 | us | 13 |
| 分類 | 現在可以買名單 | 14 |
| 分類 | 現在不能買，但值得等買點名單 | 18 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 3 |
| 研究標籤 | Wait for trigger（等待觸發） | 18 |
| 研究標籤 | Watch only（僅觀察） | 11 |
| 研究狀態 | partial（證據仍不足） | 32 |
| 估值狀態 | not_run（本流程未執行估值模型） | 32 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 32 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 32 |
| 決策就緒 | 否 | 32 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 32 |
| official_validation_not_complete | 13 |
| research_status_not_complete | 32 |
| risk_status_not_complete | 32 |
| valuation_status_not_complete | 32 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 估值 handoff 缺失：valuation multiples missing
- 官方公司/證券身分驗證未完成
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：台股官方公司基本資料未命中
- 官方證據 handoff 缺失：月營收資料未命中或未接到此市場
- 官方證據 handoff 缺失：缺少公司級官方營收、訂單、財報或法說支撐
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=炒作或擁擠交易風險偏高；炒作風險=高
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=中
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：台股官方公司基本資料未命中
- 產業 thesis 缺失證據：月營收資料未命中或未接到此市場
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2382 | 廣達 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 367 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-2382/summary.html) | [風險](companies/tw-2382/risk_plan.html) | [啟動報告](companies/tw-2382/initiation.html) |
| 2610 | 華航 | 現在可以買名單 | Watch only（僅觀察） | 23.1 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2610/summary.html) | [風險](companies/tw-2610/risk_plan.html) | [啟動報告](companies/tw-2610/initiation.html) |
| 2618 | 長榮航 | 現在可以買名單 | Watch only（僅觀察） | 43.9 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2618/summary.html) | [風險](companies/tw-2618/risk_plan.html) | [啟動報告](companies/tw-2618/initiation.html) |
| 2881 | 富邦金 | 現在可以買名單 | Watch only（僅觀察） | 128.5 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2881/summary.html) | [風險](companies/tw-2881/risk_plan.html) | [啟動報告](companies/tw-2881/initiation.html) |
| 2882 | 國泰金 | 現在可以買名單 | Watch only（僅觀察） | 101.5 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2882/summary.html) | [風險](companies/tw-2882/risk_plan.html) | [啟動報告](companies/tw-2882/initiation.html) |
| 3413 | 京鼎 | 現在可以買名單 | Watch only（僅觀察） | 314 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3413/summary.html) | [風險](companies/tw-3413/risk_plan.html) | [啟動報告](companies/tw-3413/initiation.html) |
| 3680 | 家登 | 現在可以買名單 | Watch only（僅觀察） | 489 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3680/summary.html) | [風險](companies/tw-3680/risk_plan.html) | [啟動報告](companies/tw-3680/initiation.html) |
| 5443 | 均豪 | 現在可以買名單 | Watch only（僅觀察） | 109 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-5443/summary.html) | [風險](companies/tw-5443/risk_plan.html) | [啟動報告](companies/tw-5443/initiation.html) |
| 6451 | 訊芯-KY | 現在可以買名單 | Watch only（僅觀察） | 563 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6451/summary.html) | [風險](companies/tw-6451/risk_plan.html) | [啟動報告](companies/tw-6451/initiation.html) |
| AMAT | Applied Materials | 現在可以買名單 | Watch only（僅觀察） | 694.64 USD | 2026-06-29T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-AMAT/summary.html) | [風險](companies/us-AMAT/risk_plan.html) | [啟動報告](companies/us-AMAT/initiation.html) |
| KLAC | KLA | 現在可以買名單 | Watch only（僅觀察） | 278.39 USD | 2026-06-29T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-KLAC/summary.html) | [風險](companies/us-KLAC/risk_plan.html) | [啟動報告](companies/us-KLAC/initiation.html) |
| LRCX | Lam Research | 現在可以買名單 | Watch only（僅觀察） | 410.91 USD | 2026-06-29T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-LRCX/summary.html) | [風險](companies/us-LRCX/risk_plan.html) | [啟動報告](companies/us-LRCX/initiation.html) |
| NVDA | NVIDIA | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 194.97 USD | 2026-06-29T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-NVDA/summary.html) | [風險](companies/us-NVDA/risk_plan.html) | [啟動報告](companies/us-NVDA/initiation.html) |
| RKLB | Rocket Lab | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 98.01 USD | 2026-06-29T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-RKLB/summary.html) | [風險](companies/us-RKLB/risk_plan.html) | [啟動報告](companies/us-RKLB/initiation.html) |
| 2303 | 聯電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 164 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2303/summary.html) | [風險](companies/tw-2303/risk_plan.html) | [啟動報告](companies/tw-2303/initiation.html) |
| 2308 | 台達電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1,905 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2308/summary.html) | [風險](companies/tw-2308/risk_plan.html) | [啟動報告](companies/tw-2308/initiation.html) |
| 2330 | 台積電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2,370 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2344 | 華邦電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 203 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2344/summary.html) | [風險](companies/tw-2344/risk_plan.html) | [啟動報告](companies/tw-2344/initiation.html) |
| 2408 | 南亞科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 453 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2408/summary.html) | [風險](companies/tw-2408/risk_plan.html) | [啟動報告](companies/tw-2408/initiation.html) |
| 2458 | 義隆 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 180 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2458/summary.html) | [風險](companies/tw-2458/risk_plan.html) | [啟動報告](companies/tw-2458/initiation.html) |
| 2472 | 立隆電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 412.5 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2472/summary.html) | [風險](companies/tw-2472/risk_plan.html) | [啟動報告](companies/tw-2472/initiation.html) |
| 3227 | 原相 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 233.5 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3227/summary.html) | [風險](companies/tw-3227/risk_plan.html) | [啟動報告](companies/tw-3227/initiation.html) |
| 5469 | 瀚宇博 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 89.3 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-5469/summary.html) | [風險](companies/tw-5469/risk_plan.html) | [啟動報告](companies/tw-5469/initiation.html) |
| 6191 | 精成科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 106 TWD | 2026-06-29 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6191/summary.html) | [風險](companies/tw-6191/risk_plan.html) | [啟動報告](companies/tw-6191/initiation.html) |
| AAPL | Apple | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 281.74 USD | 2026-06-29T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AAPL/summary.html) | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| AMD | AMD | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 539.49 USD | 2026-06-29T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AMD/summary.html) | [風險](companies/us-AMD/risk_plan.html) | [啟動報告](companies/us-AMD/initiation.html) |
| AVGO | Broadcom | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 372.45 USD | 2026-06-29T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AVGO/summary.html) | [風險](companies/us-AVGO/risk_plan.html) | [啟動報告](companies/us-AVGO/initiation.html) |
| META | Meta Platforms | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 562.6 USD | 2026-06-29T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-META/summary.html) | [風險](companies/us-META/risk_plan.html) | [啟動報告](companies/us-META/initiation.html) |
| MSFT | Microsoft | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 368.57 USD | 2026-06-29T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MSFT/summary.html) | [風險](companies/us-MSFT/risk_plan.html) | [啟動報告](companies/us-MSFT/initiation.html) |
| MU | Micron | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1,145.28 USD | 2026-06-29T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MU/summary.html) | [風險](companies/us-MU/risk_plan.html) | [啟動報告](companies/us-MU/initiation.html) |
| ON | ON Semiconductor | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 88.57 USD | 2026-06-29T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ON/summary.html) | [風險](companies/us-ON/risk_plan.html) | [啟動報告](companies/us-ON/initiation.html) |
| ONDS | Ondas Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 8.02 USD | 2026-06-29T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ONDS/summary.html) | [風險](companies/us-ONDS/risk_plan.html) | [啟動報告](companies/us-ONDS/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 2382 | [摘要](companies/tw-2382/summary.html) | [公司摘要](companies/tw-2382/tearsheet.html) | [啟動報告](companies/tw-2382/initiation.html) | [風險](companies/tw-2382/risk_plan.html) |
| 2610 | [摘要](companies/tw-2610/summary.html) | [公司摘要](companies/tw-2610/tearsheet.html) | [啟動報告](companies/tw-2610/initiation.html) | [風險](companies/tw-2610/risk_plan.html) |
| 2618 | [摘要](companies/tw-2618/summary.html) | [公司摘要](companies/tw-2618/tearsheet.html) | [啟動報告](companies/tw-2618/initiation.html) | [風險](companies/tw-2618/risk_plan.html) |
| 2881 | [摘要](companies/tw-2881/summary.html) | [公司摘要](companies/tw-2881/tearsheet.html) | [啟動報告](companies/tw-2881/initiation.html) | [風險](companies/tw-2881/risk_plan.html) |
| 2882 | [摘要](companies/tw-2882/summary.html) | [公司摘要](companies/tw-2882/tearsheet.html) | [啟動報告](companies/tw-2882/initiation.html) | [風險](companies/tw-2882/risk_plan.html) |
| 3413 | [摘要](companies/tw-3413/summary.html) | [公司摘要](companies/tw-3413/tearsheet.html) | [啟動報告](companies/tw-3413/initiation.html) | [風險](companies/tw-3413/risk_plan.html) |
| 3680 | [摘要](companies/tw-3680/summary.html) | [公司摘要](companies/tw-3680/tearsheet.html) | [啟動報告](companies/tw-3680/initiation.html) | [風險](companies/tw-3680/risk_plan.html) |
| 5443 | [摘要](companies/tw-5443/summary.html) | [公司摘要](companies/tw-5443/tearsheet.html) | [啟動報告](companies/tw-5443/initiation.html) | [風險](companies/tw-5443/risk_plan.html) |
| 6451 | [摘要](companies/tw-6451/summary.html) | [公司摘要](companies/tw-6451/tearsheet.html) | [啟動報告](companies/tw-6451/initiation.html) | [風險](companies/tw-6451/risk_plan.html) |
| AMAT | [摘要](companies/us-AMAT/summary.html) | [公司摘要](companies/us-AMAT/tearsheet.html) | [啟動報告](companies/us-AMAT/initiation.html) | [風險](companies/us-AMAT/risk_plan.html) |
| KLAC | [摘要](companies/us-KLAC/summary.html) | [公司摘要](companies/us-KLAC/tearsheet.html) | [啟動報告](companies/us-KLAC/initiation.html) | [風險](companies/us-KLAC/risk_plan.html) |
| LRCX | [摘要](companies/us-LRCX/summary.html) | [公司摘要](companies/us-LRCX/tearsheet.html) | [啟動報告](companies/us-LRCX/initiation.html) | [風險](companies/us-LRCX/risk_plan.html) |
| NVDA | [摘要](companies/us-NVDA/summary.html) | [公司摘要](companies/us-NVDA/tearsheet.html) | [啟動報告](companies/us-NVDA/initiation.html) | [風險](companies/us-NVDA/risk_plan.html) |
| RKLB | [摘要](companies/us-RKLB/summary.html) | [公司摘要](companies/us-RKLB/tearsheet.html) | [啟動報告](companies/us-RKLB/initiation.html) | [風險](companies/us-RKLB/risk_plan.html) |
| 2303 | [摘要](companies/tw-2303/summary.html) | [公司摘要](companies/tw-2303/tearsheet.html) | [啟動報告](companies/tw-2303/initiation.html) | [風險](companies/tw-2303/risk_plan.html) |
| 2308 | [摘要](companies/tw-2308/summary.html) | [公司摘要](companies/tw-2308/tearsheet.html) | [啟動報告](companies/tw-2308/initiation.html) | [風險](companies/tw-2308/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2344 | [摘要](companies/tw-2344/summary.html) | [公司摘要](companies/tw-2344/tearsheet.html) | [啟動報告](companies/tw-2344/initiation.html) | [風險](companies/tw-2344/risk_plan.html) |
| 2408 | [摘要](companies/tw-2408/summary.html) | [公司摘要](companies/tw-2408/tearsheet.html) | [啟動報告](companies/tw-2408/initiation.html) | [風險](companies/tw-2408/risk_plan.html) |
| 2458 | [摘要](companies/tw-2458/summary.html) | [公司摘要](companies/tw-2458/tearsheet.html) | [啟動報告](companies/tw-2458/initiation.html) | [風險](companies/tw-2458/risk_plan.html) |
| 2472 | [摘要](companies/tw-2472/summary.html) | [公司摘要](companies/tw-2472/tearsheet.html) | [啟動報告](companies/tw-2472/initiation.html) | [風險](companies/tw-2472/risk_plan.html) |
| 3227 | [摘要](companies/tw-3227/summary.html) | [公司摘要](companies/tw-3227/tearsheet.html) | [啟動報告](companies/tw-3227/initiation.html) | [風險](companies/tw-3227/risk_plan.html) |
| 5469 | [摘要](companies/tw-5469/summary.html) | [公司摘要](companies/tw-5469/tearsheet.html) | [啟動報告](companies/tw-5469/initiation.html) | [風險](companies/tw-5469/risk_plan.html) |
| 6191 | [摘要](companies/tw-6191/summary.html) | [公司摘要](companies/tw-6191/tearsheet.html) | [啟動報告](companies/tw-6191/initiation.html) | [風險](companies/tw-6191/risk_plan.html) |
| AAPL | [摘要](companies/us-AAPL/summary.html) | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| AMD | [摘要](companies/us-AMD/summary.html) | [公司摘要](companies/us-AMD/tearsheet.html) | [啟動報告](companies/us-AMD/initiation.html) | [風險](companies/us-AMD/risk_plan.html) |
| AVGO | [摘要](companies/us-AVGO/summary.html) | [公司摘要](companies/us-AVGO/tearsheet.html) | [啟動報告](companies/us-AVGO/initiation.html) | [風險](companies/us-AVGO/risk_plan.html) |
| META | [摘要](companies/us-META/summary.html) | [公司摘要](companies/us-META/tearsheet.html) | [啟動報告](companies/us-META/initiation.html) | [風險](companies/us-META/risk_plan.html) |
| MSFT | [摘要](companies/us-MSFT/summary.html) | [公司摘要](companies/us-MSFT/tearsheet.html) | [啟動報告](companies/us-MSFT/initiation.html) | [風險](companies/us-MSFT/risk_plan.html) |
| MU | [摘要](companies/us-MU/summary.html) | [公司摘要](companies/us-MU/tearsheet.html) | [啟動報告](companies/us-MU/initiation.html) | [風險](companies/us-MU/risk_plan.html) |
| ON | [摘要](companies/us-ON/summary.html) | [公司摘要](companies/us-ON/tearsheet.html) | [啟動報告](companies/us-ON/initiation.html) | [風險](companies/us-ON/risk_plan.html) |
| ONDS | [摘要](companies/us-ONDS/summary.html) | [公司摘要](companies/us-ONDS/tearsheet.html) | [啟動報告](companies/us-ONDS/initiation.html) | [風險](companies/us-ONDS/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
