# StockLoop PEI 完整批次報告 2026-07-08

- 產出時間：2026-07-08 07:58:32
- 標的池檔數：25
- 已具備目前價格與研究狀態的列數：25
- Decision-ready 檔數：0
- 來源報告：reports/news/2026-07-08_kol_news_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 25 檔標的；來源為 reports/news/2026-07-08_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：25 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：2 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：13 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：10 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：25 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：25 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 14 |
| 市場 | us | 11 |
| 分類 | 現在可以買名單 | 12 |
| 分類 | 現在不能買，但值得等買點名單 | 13 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 2 |
| 研究標籤 | Wait for trigger（等待觸發） | 13 |
| 研究標籤 | Watch only（僅觀察） | 10 |
| 研究狀態 | partial（證據仍不足） | 25 |
| 估值狀態 | not_run（本流程未執行估值模型） | 25 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 25 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 25 |
| 決策就緒 | 否 | 25 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 25 |
| official_validation_not_complete | 10 |
| research_status_not_complete | 25 |
| risk_status_not_complete | 25 |
| valuation_status_not_complete | 25 |

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
- 估值 handoff 缺失：valuation multiples missing
- 官方公司/證券身分驗證未完成
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：official company or fundamental evidence missing
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
- 風險 handoff 缺失：20d average trade value missing
- 風險 handoff 缺失：downside distance input missing
- 風險 handoff 缺失：local OHLCV history missing

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2049 | 上銀 | 現在可以買名單 | Watch only（僅觀察） | 344.5 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2049/summary.html) | [風險](companies/tw-2049/risk_plan.html) | [啟動報告](companies/tw-2049/initiation.html) |
| 2303 | 聯電 | 現在可以買名單 | Watch only（僅觀察） | 155 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2303/summary.html) | [風險](companies/tw-2303/risk_plan.html) | [啟動報告](companies/tw-2303/initiation.html) |
| 2317 | 鴻海 | 現在可以買名單 | Watch only（僅觀察） | 237 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2317/summary.html) | [風險](companies/tw-2317/risk_plan.html) | [啟動報告](companies/tw-2317/initiation.html) |
| 2454 | 聯發科 | 現在可以買名單 | Watch only（僅觀察） | 4,030 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2454/summary.html) | [風險](companies/tw-2454/risk_plan.html) | [啟動報告](companies/tw-2454/initiation.html) |
| 3260 | 威剛 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 404 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-3260/summary.html) | [風險](companies/tw-3260/risk_plan.html) | [啟動報告](companies/tw-3260/initiation.html) |
| 3443 | 創意 | 現在可以買名單 | Watch only（僅觀察） | 4,480 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3443/summary.html) | [風險](companies/tw-3443/risk_plan.html) | [啟動報告](companies/tw-3443/initiation.html) |
| 3529 | 力旺 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 2,740 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-3529/summary.html) | [風險](companies/tw-3529/risk_plan.html) | [啟動報告](companies/tw-3529/initiation.html) |
| 4576 | 大銀微系統 | 現在可以買名單 | Watch only（僅觀察） | 223 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-4576/summary.html) | [風險](companies/tw-4576/risk_plan.html) | [啟動報告](companies/tw-4576/initiation.html) |
| AMD | AMD | 現在可以買名單 | Watch only（僅觀察） | 516.11 USD | 2026-07-07T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-AMD/summary.html) | [風險](companies/us-AMD/risk_plan.html) | [啟動報告](companies/us-AMD/initiation.html) |
| AVGO | Broadcom | 現在可以買名單 | Watch only（僅觀察） | 370.78 USD | 2026-07-07T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-AVGO/summary.html) | [風險](companies/us-AVGO/risk_plan.html) | [啟動報告](companies/us-AVGO/initiation.html) |
| META | Meta | 現在可以買名單 | Watch only（僅觀察） | 615.58 USD | 2026-07-07T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-META/summary.html) | [風險](companies/us-META/risk_plan.html) | [啟動報告](companies/us-META/initiation.html) |
| MSFT | Microsoft | 現在可以買名單 | Watch only（僅觀察） | 388.84 USD | 2026-07-07T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-MSFT/summary.html) | [風險](companies/us-MSFT/risk_plan.html) | [啟動報告](companies/us-MSFT/initiation.html) |
| 2330 | 台積電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2,440 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2383 | 台光電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 5,220 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2383/summary.html) | [風險](companies/tw-2383/risk_plan.html) | [啟動報告](companies/tw-2383/initiation.html) |
| 2645 | 長榮航太 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 214.5 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2645/summary.html) | [風險](companies/tw-2645/risk_plan.html) | [啟動報告](companies/tw-2645/initiation.html) |
| 3008 | 大立光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 3,890 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3008/summary.html) | [風險](companies/tw-3008/risk_plan.html) | [啟動報告](companies/tw-3008/initiation.html) |
| 3037 | 欣興 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 840 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3037/summary.html) | [風險](companies/tw-3037/risk_plan.html) | [啟動報告](companies/tw-3037/initiation.html) |
| 3605 | 宏致 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 84.9 TWD | 2026-07-07 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3605/summary.html) | [風險](companies/tw-3605/risk_plan.html) | [啟動報告](companies/tw-3605/initiation.html) |
| AAPL | Apple | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 310.66 USD | 2026-07-07T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AAPL/summary.html) | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| GOOGL | Alphabet | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 367.03 USD | 2026-07-07T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GOOGL/summary.html) | [風險](companies/us-GOOGL/risk_plan.html) | [啟動報告](companies/us-GOOGL/initiation.html) |
| IBM | IBM | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 306.13 USD | 2026-07-07T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-IBM/summary.html) | [風險](companies/us-IBM/risk_plan.html) | [啟動報告](companies/us-IBM/initiation.html) |
| NVDA | Nvidia | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 196.93 USD | 2026-07-07T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-NVDA/summary.html) | [風險](companies/us-NVDA/risk_plan.html) | [啟動報告](companies/us-NVDA/initiation.html) |
| SOXL | SOXL | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 165.28 USD | 2026-07-07T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SOXL/summary.html) | [風險](companies/us-SOXL/risk_plan.html) | [啟動報告](companies/us-SOXL/initiation.html) |
| TSLA | Tesla | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 402.9 USD | 2026-07-07T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TSLA/summary.html) | [風險](companies/us-TSLA/risk_plan.html) | [啟動報告](companies/us-TSLA/initiation.html) |
| TSM | 台積電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 432.57 USD | 2026-07-07T20:00:02Z | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TSM/summary.html) | [風險](companies/us-TSM/risk_plan.html) | [啟動報告](companies/us-TSM/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 2049 | [摘要](companies/tw-2049/summary.html) | [公司摘要](companies/tw-2049/tearsheet.html) | [啟動報告](companies/tw-2049/initiation.html) | [風險](companies/tw-2049/risk_plan.html) |
| 2303 | [摘要](companies/tw-2303/summary.html) | [公司摘要](companies/tw-2303/tearsheet.html) | [啟動報告](companies/tw-2303/initiation.html) | [風險](companies/tw-2303/risk_plan.html) |
| 2317 | [摘要](companies/tw-2317/summary.html) | [公司摘要](companies/tw-2317/tearsheet.html) | [啟動報告](companies/tw-2317/initiation.html) | [風險](companies/tw-2317/risk_plan.html) |
| 2454 | [摘要](companies/tw-2454/summary.html) | [公司摘要](companies/tw-2454/tearsheet.html) | [啟動報告](companies/tw-2454/initiation.html) | [風險](companies/tw-2454/risk_plan.html) |
| 3260 | [摘要](companies/tw-3260/summary.html) | [公司摘要](companies/tw-3260/tearsheet.html) | [啟動報告](companies/tw-3260/initiation.html) | [風險](companies/tw-3260/risk_plan.html) |
| 3443 | [摘要](companies/tw-3443/summary.html) | [公司摘要](companies/tw-3443/tearsheet.html) | [啟動報告](companies/tw-3443/initiation.html) | [風險](companies/tw-3443/risk_plan.html) |
| 3529 | [摘要](companies/tw-3529/summary.html) | [公司摘要](companies/tw-3529/tearsheet.html) | [啟動報告](companies/tw-3529/initiation.html) | [風險](companies/tw-3529/risk_plan.html) |
| 4576 | [摘要](companies/tw-4576/summary.html) | [公司摘要](companies/tw-4576/tearsheet.html) | [啟動報告](companies/tw-4576/initiation.html) | [風險](companies/tw-4576/risk_plan.html) |
| AMD | [摘要](companies/us-AMD/summary.html) | [公司摘要](companies/us-AMD/tearsheet.html) | [啟動報告](companies/us-AMD/initiation.html) | [風險](companies/us-AMD/risk_plan.html) |
| AVGO | [摘要](companies/us-AVGO/summary.html) | [公司摘要](companies/us-AVGO/tearsheet.html) | [啟動報告](companies/us-AVGO/initiation.html) | [風險](companies/us-AVGO/risk_plan.html) |
| META | [摘要](companies/us-META/summary.html) | [公司摘要](companies/us-META/tearsheet.html) | [啟動報告](companies/us-META/initiation.html) | [風險](companies/us-META/risk_plan.html) |
| MSFT | [摘要](companies/us-MSFT/summary.html) | [公司摘要](companies/us-MSFT/tearsheet.html) | [啟動報告](companies/us-MSFT/initiation.html) | [風險](companies/us-MSFT/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2383 | [摘要](companies/tw-2383/summary.html) | [公司摘要](companies/tw-2383/tearsheet.html) | [啟動報告](companies/tw-2383/initiation.html) | [風險](companies/tw-2383/risk_plan.html) |
| 2645 | [摘要](companies/tw-2645/summary.html) | [公司摘要](companies/tw-2645/tearsheet.html) | [啟動報告](companies/tw-2645/initiation.html) | [風險](companies/tw-2645/risk_plan.html) |
| 3008 | [摘要](companies/tw-3008/summary.html) | [公司摘要](companies/tw-3008/tearsheet.html) | [啟動報告](companies/tw-3008/initiation.html) | [風險](companies/tw-3008/risk_plan.html) |
| 3037 | [摘要](companies/tw-3037/summary.html) | [公司摘要](companies/tw-3037/tearsheet.html) | [啟動報告](companies/tw-3037/initiation.html) | [風險](companies/tw-3037/risk_plan.html) |
| 3605 | [摘要](companies/tw-3605/summary.html) | [公司摘要](companies/tw-3605/tearsheet.html) | [啟動報告](companies/tw-3605/initiation.html) | [風險](companies/tw-3605/risk_plan.html) |
| AAPL | [摘要](companies/us-AAPL/summary.html) | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| GOOGL | [摘要](companies/us-GOOGL/summary.html) | [公司摘要](companies/us-GOOGL/tearsheet.html) | [啟動報告](companies/us-GOOGL/initiation.html) | [風險](companies/us-GOOGL/risk_plan.html) |
| IBM | [摘要](companies/us-IBM/summary.html) | [公司摘要](companies/us-IBM/tearsheet.html) | [啟動報告](companies/us-IBM/initiation.html) | [風險](companies/us-IBM/risk_plan.html) |
| NVDA | [摘要](companies/us-NVDA/summary.html) | [公司摘要](companies/us-NVDA/tearsheet.html) | [啟動報告](companies/us-NVDA/initiation.html) | [風險](companies/us-NVDA/risk_plan.html) |
| SOXL | [摘要](companies/us-SOXL/summary.html) | [公司摘要](companies/us-SOXL/tearsheet.html) | [啟動報告](companies/us-SOXL/initiation.html) | [風險](companies/us-SOXL/risk_plan.html) |
| TSLA | [摘要](companies/us-TSLA/summary.html) | [公司摘要](companies/us-TSLA/tearsheet.html) | [啟動報告](companies/us-TSLA/initiation.html) | [風險](companies/us-TSLA/risk_plan.html) |
| TSM | [摘要](companies/us-TSM/summary.html) | [公司摘要](companies/us-TSM/tearsheet.html) | [啟動報告](companies/us-TSM/initiation.html) | [風險](companies/us-TSM/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
