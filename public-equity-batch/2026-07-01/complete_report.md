# StockLoop PEI 完整批次報告 2026-07-01

- 產出時間：2026-07-01 12:46:18
- 標的池檔數：22
- 已具備目前價格與研究狀態的列數：22
- Decision-ready 檔數：0
- 來源報告：reports/news/2026-07-01_kol_news_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 22 檔標的；來源為 reports/news/2026-07-01_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：22 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：2 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：18 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：2 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：22 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：22 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 4 |
| 市場 | us | 18 |
| 分類 | 現在可以買名單 | 4 |
| 分類 | 現在不能買，但值得等買點名單 | 18 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 2 |
| 研究標籤 | Wait for trigger（等待觸發） | 18 |
| 研究標籤 | Watch only（僅觀察） | 2 |
| 研究狀態 | partial（證據仍不足） | 22 |
| 估值狀態 | not_run（本流程未執行估值模型） | 22 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 22 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 22 |
| 決策就緒 | 否 | 22 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 22 |
| official_validation_not_complete | 18 |
| research_status_not_complete | 22 |
| risk_status_not_complete | 22 |
| valuation_status_not_complete | 22 |

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
| 3037 | 欣興 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 1,070 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-3037/summary.html) | [風險](companies/tw-3037/risk_plan.html) | [啟動報告](companies/tw-3037/initiation.html) |
| 3443 | 創意 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 4,845 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-3443/summary.html) | [風險](companies/tw-3443/risk_plan.html) | [啟動報告](companies/tw-3443/initiation.html) |
| GOOGL | Google | 現在可以買名單 | Watch only（僅觀察） | 357.37 USD | 2026-06-30T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-GOOGL/summary.html) | [風險](companies/us-GOOGL/risk_plan.html) | [啟動報告](companies/us-GOOGL/initiation.html) |
| SNOW | Snowflake | 現在可以買名單 | Watch only（僅觀察） | 254.5 USD | 2026-06-30T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-SNOW/summary.html) | [風險](companies/us-SNOW/risk_plan.html) | [啟動報告](companies/us-SNOW/initiation.html) |
| 3363 | 上詮 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 578 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3363/summary.html) | [風險](companies/tw-3363/risk_plan.html) | [啟動報告](companies/tw-3363/initiation.html) |
| 6442 | 光聖 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1,640 TWD | 2026-06-30 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6442/summary.html) | [風險](companies/tw-6442/risk_plan.html) | [啟動報告](companies/tw-6442/initiation.html) |
| AAOI | AOI | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 148.16 USD | 2026-06-30T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AAOI/summary.html) | [風險](companies/us-AAOI/risk_plan.html) | [啟動報告](companies/us-AAOI/initiation.html) |
| AAPL | Apple | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 289.36 USD | 2026-06-30T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AAPL/summary.html) | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| AMAT | 應用材料 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 723 USD | 2026-06-30T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AMAT/summary.html) | [風險](companies/us-AMAT/risk_plan.html) | [啟動報告](companies/us-AMAT/initiation.html) |
| AMZN | Amazon | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 238.34 USD | 2026-06-30T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AMZN/summary.html) | [風險](companies/us-AMZN/risk_plan.html) | [啟動報告](companies/us-AMZN/initiation.html) |
| AXTI | AXT Inc. | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 72.08 USD | 2026-06-30T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AXTI/summary.html) | [風險](companies/us-AXTI/risk_plan.html) | [啟動報告](companies/us-AXTI/initiation.html) |
| C | C | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 139.96 USD | 2026-06-30T20:04:56Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-C/summary.html) | [風險](companies/us-C/risk_plan.html) | [啟動報告](companies/us-C/initiation.html) |
| COHR | Coherent | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 394.47 USD | 2026-06-30T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-COHR/summary.html) | [風險](companies/us-COHR/risk_plan.html) | [啟動報告](companies/us-COHR/initiation.html) |
| LITE | Lumentum | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 858.06 USD | 2026-06-30T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LITE/summary.html) | [風險](companies/us-LITE/risk_plan.html) | [啟動報告](companies/us-LITE/initiation.html) |
| MSFT | Microsoft | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 373.02 USD | 2026-06-30T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MSFT/summary.html) | [風險](companies/us-MSFT/risk_plan.html) | [啟動報告](companies/us-MSFT/initiation.html) |
| MU | Micron | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1,154.29 USD | 2026-06-30T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MU/summary.html) | [風險](companies/us-MU/risk_plan.html) | [啟動報告](companies/us-MU/initiation.html) |
| NOK | Nokia | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 13.28 USD | 2026-06-30T20:04:53Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-NOK/summary.html) | [風險](companies/us-NOK/risk_plan.html) | [啟動報告](companies/us-NOK/initiation.html) |
| NVDA | Nvidia | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 200.09 USD | 2026-06-30T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-NVDA/summary.html) | [風險](companies/us-NVDA/risk_plan.html) | [啟動報告](companies/us-NVDA/initiation.html) |
| ONDS | Ondas | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 8.24 USD | 2026-06-30T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ONDS/summary.html) | [風險](companies/us-ONDS/risk_plan.html) | [啟動報告](companies/us-ONDS/initiation.html) |
| ORCL | 甲骨文 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 146.55 USD | 2026-06-30T20:05:10Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ORCL/summary.html) | [風險](companies/us-ORCL/risk_plan.html) | [啟動報告](companies/us-ORCL/initiation.html) |
| RKLB | Rocket Lab | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 101.65 USD | 2026-06-30T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-RKLB/summary.html) | [風險](companies/us-RKLB/risk_plan.html) | [啟動報告](companies/us-RKLB/initiation.html) |
| TR | 設備股 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 39.55 USD | 2026-06-30T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TR/summary.html) | [風險](companies/us-TR/risk_plan.html) | [啟動報告](companies/us-TR/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 3037 | [摘要](companies/tw-3037/summary.html) | [公司摘要](companies/tw-3037/tearsheet.html) | [啟動報告](companies/tw-3037/initiation.html) | [風險](companies/tw-3037/risk_plan.html) |
| 3443 | [摘要](companies/tw-3443/summary.html) | [公司摘要](companies/tw-3443/tearsheet.html) | [啟動報告](companies/tw-3443/initiation.html) | [風險](companies/tw-3443/risk_plan.html) |
| GOOGL | [摘要](companies/us-GOOGL/summary.html) | [公司摘要](companies/us-GOOGL/tearsheet.html) | [啟動報告](companies/us-GOOGL/initiation.html) | [風險](companies/us-GOOGL/risk_plan.html) |
| SNOW | [摘要](companies/us-SNOW/summary.html) | [公司摘要](companies/us-SNOW/tearsheet.html) | [啟動報告](companies/us-SNOW/initiation.html) | [風險](companies/us-SNOW/risk_plan.html) |
| 3363 | [摘要](companies/tw-3363/summary.html) | [公司摘要](companies/tw-3363/tearsheet.html) | [啟動報告](companies/tw-3363/initiation.html) | [風險](companies/tw-3363/risk_plan.html) |
| 6442 | [摘要](companies/tw-6442/summary.html) | [公司摘要](companies/tw-6442/tearsheet.html) | [啟動報告](companies/tw-6442/initiation.html) | [風險](companies/tw-6442/risk_plan.html) |
| AAOI | [摘要](companies/us-AAOI/summary.html) | [公司摘要](companies/us-AAOI/tearsheet.html) | [啟動報告](companies/us-AAOI/initiation.html) | [風險](companies/us-AAOI/risk_plan.html) |
| AAPL | [摘要](companies/us-AAPL/summary.html) | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| AMAT | [摘要](companies/us-AMAT/summary.html) | [公司摘要](companies/us-AMAT/tearsheet.html) | [啟動報告](companies/us-AMAT/initiation.html) | [風險](companies/us-AMAT/risk_plan.html) |
| AMZN | [摘要](companies/us-AMZN/summary.html) | [公司摘要](companies/us-AMZN/tearsheet.html) | [啟動報告](companies/us-AMZN/initiation.html) | [風險](companies/us-AMZN/risk_plan.html) |
| AXTI | [摘要](companies/us-AXTI/summary.html) | [公司摘要](companies/us-AXTI/tearsheet.html) | [啟動報告](companies/us-AXTI/initiation.html) | [風險](companies/us-AXTI/risk_plan.html) |
| C | [摘要](companies/us-C/summary.html) | [公司摘要](companies/us-C/tearsheet.html) | [啟動報告](companies/us-C/initiation.html) | [風險](companies/us-C/risk_plan.html) |
| COHR | [摘要](companies/us-COHR/summary.html) | [公司摘要](companies/us-COHR/tearsheet.html) | [啟動報告](companies/us-COHR/initiation.html) | [風險](companies/us-COHR/risk_plan.html) |
| LITE | [摘要](companies/us-LITE/summary.html) | [公司摘要](companies/us-LITE/tearsheet.html) | [啟動報告](companies/us-LITE/initiation.html) | [風險](companies/us-LITE/risk_plan.html) |
| MSFT | [摘要](companies/us-MSFT/summary.html) | [公司摘要](companies/us-MSFT/tearsheet.html) | [啟動報告](companies/us-MSFT/initiation.html) | [風險](companies/us-MSFT/risk_plan.html) |
| MU | [摘要](companies/us-MU/summary.html) | [公司摘要](companies/us-MU/tearsheet.html) | [啟動報告](companies/us-MU/initiation.html) | [風險](companies/us-MU/risk_plan.html) |
| NOK | [摘要](companies/us-NOK/summary.html) | [公司摘要](companies/us-NOK/tearsheet.html) | [啟動報告](companies/us-NOK/initiation.html) | [風險](companies/us-NOK/risk_plan.html) |
| NVDA | [摘要](companies/us-NVDA/summary.html) | [公司摘要](companies/us-NVDA/tearsheet.html) | [啟動報告](companies/us-NVDA/initiation.html) | [風險](companies/us-NVDA/risk_plan.html) |
| ONDS | [摘要](companies/us-ONDS/summary.html) | [公司摘要](companies/us-ONDS/tearsheet.html) | [啟動報告](companies/us-ONDS/initiation.html) | [風險](companies/us-ONDS/risk_plan.html) |
| ORCL | [摘要](companies/us-ORCL/summary.html) | [公司摘要](companies/us-ORCL/tearsheet.html) | [啟動報告](companies/us-ORCL/initiation.html) | [風險](companies/us-ORCL/risk_plan.html) |
| RKLB | [摘要](companies/us-RKLB/summary.html) | [公司摘要](companies/us-RKLB/tearsheet.html) | [啟動報告](companies/us-RKLB/initiation.html) | [風險](companies/us-RKLB/risk_plan.html) |
| TR | [摘要](companies/us-TR/summary.html) | [公司摘要](companies/us-TR/tearsheet.html) | [啟動報告](companies/us-TR/initiation.html) | [風險](companies/us-TR/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
