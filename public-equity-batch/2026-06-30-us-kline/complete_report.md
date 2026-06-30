# StockLoop PEI 完整批次報告 2026-06-30 - US K-line

- 產出時間：2026-07-01 06:58:44
- 標的池檔數：56
- 已具備目前價格與研究狀態的列數：56
- Decision-ready 檔數：0
- 來源報告：reports/usStock/2026-06-30_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 56 檔標的；來源為 reports/usStock/2026-06-30_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：56 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：2 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：46 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：8 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：56 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：56 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | us | 56 |
| 分類 | 現在可以買名單 | 9 |
| 分類 | 現在不能買，但值得等買點名單 | 47 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 2 |
| 研究標籤 | Wait for trigger（等待觸發） | 46 |
| 研究標籤 | Watch only（僅觀察） | 8 |
| 研究狀態 | partial（證據仍不足） | 56 |
| 估值狀態 | not_run（本流程未執行估值模型） | 56 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 56 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 56 |
| 決策就緒 | 否 | 56 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 56 |
| official_validation_not_complete | 56 |
| research_status_not_complete | 56 |
| risk_status_not_complete | 56 |
| valuation_status_not_complete | 56 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- using StockLoop local daily bar close for the scan date.
- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 估值 handoff 缺失：valuation multiples missing
- 價格來源限制：External quote fetch timed out
- 官方公司/證券身分驗證未完成
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：缺少公司級官方營收、訂單、財報或法說支撐
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=炒作或擁擠交易風險偏高；炒作風險=高
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=中
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CIEN | Ciena Corporation Common Stock | 現在可以買名單 | Watch only（僅觀察） | 490.56 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-CIEN/summary.html) | [風險](companies/us-CIEN/risk_plan.html) | [啟動報告](companies/us-CIEN/initiation.html) |
| CRDO | Credo Technology Group Holding Ltd - Ordinary Shares | 現在可以買名單 | Watch only（僅觀察） | 271.95 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-CRDO/summary.html) | [風險](companies/us-CRDO/risk_plan.html) | [啟動報告](companies/us-CRDO/initiation.html) |
| GFS | GlobalFoundries Inc. - Ordinary Share | 現在可以買名單 | Watch only（僅觀察） | 82.41 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-GFS/summary.html) | [風險](companies/us-GFS/risk_plan.html) | [啟動報告](companies/us-GFS/initiation.html) |
| LIN | Linde plc - Ordinary Shares | 現在可以買名單 | Watch only（僅觀察） | 518.94 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-LIN/summary.html) | [風險](companies/us-LIN/risk_plan.html) | [啟動報告](companies/us-LIN/initiation.html) |
| NVT | nVent Electric plc Ordinary Shares | 現在可以買名單 | Watch only（僅觀察） | 169.61 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-NVT/summary.html) | [風險](companies/us-NVT/risk_plan.html) | [啟動報告](companies/us-NVT/initiation.html) |
| P | Everpure | 現在可以買名單 | Watch only（僅觀察） | 78.79 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-P/summary.html) | [風險](companies/us-P/risk_plan.html) | [啟動報告](companies/us-P/initiation.html) |
| PL | Planet Labs PBC Class A Common Stock | 現在可以買名單 | Watch only（僅觀察） | 33.13 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-PL/summary.html) | [風險](companies/us-PL/risk_plan.html) | [啟動報告](companies/us-PL/initiation.html) |
| TW | Tradeweb Markets Inc. - Class A Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 99.66 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-TW/summary.html) | [風險](companies/us-TW/risk_plan.html) | [啟動報告](companies/us-TW/initiation.html) |
| VRT | Vertiv Holdings | 現在可以買名單 | Watch only（僅觀察） | 334.82 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-VRT/summary.html) | [風險](companies/us-VRT/risk_plan.html) | [啟動報告](companies/us-VRT/initiation.html) |
| AAPL | Apple Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 289.36 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AAPL/summary.html) | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| ABVX | Abivax SA - American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 133.26 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ABVX/summary.html) | [風險](companies/us-ABVX/risk_plan.html) | [啟動報告](companies/us-ABVX/initiation.html) |
| ADI | Analog Devices | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 397.17 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ADI/summary.html) | [風險](companies/us-ADI/risk_plan.html) | [啟動報告](companies/us-ADI/initiation.html) |
| AES | The AES Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.66 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AES/summary.html) | [風險](companies/us-AES/risk_plan.html) | [啟動報告](companies/us-AES/initiation.html) |
| APD | Air Products and Chemicals | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 293.18 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-APD/summary.html) | [風險](companies/us-APD/risk_plan.html) | [啟動報告](companies/us-APD/initiation.html) |
| APG | APi Group Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 42.35 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-APG/summary.html) | [風險](companies/us-APG/risk_plan.html) | [啟動報告](companies/us-APG/initiation.html) |
| AR | Antero Resources Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.14 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AR/summary.html) | [風險](companies/us-AR/risk_plan.html) | [啟動報告](companies/us-AR/initiation.html) |
| AVAV | AeroVironment | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 165.07 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AVAV/summary.html) | [風險](companies/us-AVAV/risk_plan.html) | [啟動報告](companies/us-AVAV/initiation.html) |
| BA | Boeing Company  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 216.47 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BA/summary.html) | [風險](companies/us-BA/risk_plan.html) | [啟動報告](companies/us-BA/initiation.html) |
| BE | Bloom Energy Corporation Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 302.7 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BE/summary.html) | [風險](companies/us-BE/risk_plan.html) | [啟動報告](companies/us-BE/initiation.html) |
| BX | Blackstone Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 117.67 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BX/summary.html) | [風險](companies/us-BX/risk_plan.html) | [啟動報告](companies/us-BX/initiation.html) |
| CGNX | Cognex Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 72.42 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CGNX/summary.html) | [風險](companies/us-CGNX/risk_plan.html) | [啟動報告](companies/us-CGNX/initiation.html) |
| CRWD | CrowdStrike Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 763.14 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CRWD/summary.html) | [風險](companies/us-CRWD/risk_plan.html) | [啟動報告](companies/us-CRWD/initiation.html) |
| DKNG | DraftKings Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 25.26 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-DKNG/summary.html) | [風險](companies/us-DKNG/risk_plan.html) | [啟動報告](companies/us-DKNG/initiation.html) |
| DOCS | Doximity | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 20.74 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-DOCS/summary.html) | [風險](companies/us-DOCS/risk_plan.html) | [啟動報告](companies/us-DOCS/initiation.html) |
| ENPH | Enphase Energy | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 49.24 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ENPH/summary.html) | [風險](companies/us-ENPH/risk_plan.html) | [啟動報告](companies/us-ENPH/initiation.html) |
| EQT | EQT Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 53.17 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-EQT/summary.html) | [風險](companies/us-EQT/risk_plan.html) | [啟動報告](companies/us-EQT/initiation.html) |
| EXE | Expand Energy Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 91.19 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-EXE/summary.html) | [風險](companies/us-EXE/risk_plan.html) | [啟動報告](companies/us-EXE/initiation.html) |
| FIGR | Figure Technology Solutions | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 30.71 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-FIGR/summary.html) | [風險](companies/us-FIGR/risk_plan.html) | [啟動報告](companies/us-FIGR/initiation.html) |
| GDS | GDS Holdings Limited - American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 30.03 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GDS/summary.html) | [風險](companies/us-GDS/risk_plan.html) | [啟動報告](companies/us-GDS/initiation.html) |
| GMAB | Genmab A | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 27.47 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GMAB/summary.html) | [風險](companies/us-GMAB/risk_plan.html) | [啟動報告](companies/us-GMAB/initiation.html) |
| GOOGL | Alphabet Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 357.37 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GOOGL/summary.html) | [風險](companies/us-GOOGL/risk_plan.html) | [啟動報告](companies/us-GOOGL/initiation.html) |
| HSAI | Hesai Group - American Depositary Share | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 18.22 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-HSAI/summary.html) | [風險](companies/us-HSAI/risk_plan.html) | [啟動報告](companies/us-HSAI/initiation.html) |
| INTU | Intuit Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 261 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-INTU/summary.html) | [風險](companies/us-INTU/risk_plan.html) | [啟動報告](companies/us-INTU/initiation.html) |
| JCI | Johnson Controls International plc Ordinary Share | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 146.11 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-JCI/summary.html) | [風險](companies/us-JCI/risk_plan.html) | [啟動報告](companies/us-JCI/initiation.html) |
| KBR | KBR | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 34.53 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-KBR/summary.html) | [風險](companies/us-KBR/risk_plan.html) | [啟動報告](companies/us-KBR/initiation.html) |
| LGN | Legence Corp. - Class A Common stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 85.23 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LGN/summary.html) | [風險](companies/us-LGN/risk_plan.html) | [啟動報告](companies/us-LGN/initiation.html) |
| LKQ | LKQ Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 26.33 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LKQ/summary.html) | [風險](companies/us-LKQ/risk_plan.html) | [啟動報告](companies/us-LKQ/initiation.html) |
| MBLY | Mobileye Global Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 9.68 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MBLY/summary.html) | [風險](companies/us-MBLY/risk_plan.html) | [啟動報告](companies/us-MBLY/initiation.html) |
| MCHP | Microchip Technology Incorporated - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 91.2 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MCHP/summary.html) | [風險](companies/us-MCHP/risk_plan.html) | [啟動報告](companies/us-MCHP/initiation.html) |
| MIR | Mirion Technologies | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 17.93 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MIR/summary.html) | [風險](companies/us-MIR/risk_plan.html) | [啟動報告](companies/us-MIR/initiation.html) |
| MTSI | MACOM Technology Solutions Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 380.37 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MTSI/summary.html) | [風險](companies/us-MTSI/risk_plan.html) | [啟動報告](companies/us-MTSI/initiation.html) |
| OLLI | Ollie's Bargain Outlet Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 76.88 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-OLLI/summary.html) | [風險](companies/us-OLLI/risk_plan.html) | [啟動報告](companies/us-OLLI/initiation.html) |
| PAYX | Paychex | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 98.33 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-PAYX/summary.html) | [風險](companies/us-PAYX/risk_plan.html) | [啟動報告](companies/us-PAYX/initiation.html) |
| PRM | Perimeter Solutions | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.65 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-PRM/summary.html) | [風險](companies/us-PRM/risk_plan.html) | [啟動報告](companies/us-PRM/initiation.html) |
| RKLB | Rocket Lab Corporation - Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | 101.65 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-RKLB/summary.html) | [風險](companies/us-RKLB/risk_plan.html) | [啟動報告](companies/us-RKLB/initiation.html) |
| RMBS | Rambus | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 132.74 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-RMBS/summary.html) | [風險](companies/us-RMBS/risk_plan.html) | [啟動報告](companies/us-RMBS/initiation.html) |
| SCHW | Charles Schwab Corporation  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 92.27 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SCHW/summary.html) | [風險](companies/us-SCHW/risk_plan.html) | [啟動報告](companies/us-SCHW/initiation.html) |
| SEDG | SolarEdge Technologies | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 58.44 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SEDG/summary.html) | [風險](companies/us-SEDG/risk_plan.html) | [啟動報告](companies/us-SEDG/initiation.html) |
| SFM | Sprouts Farmers Market | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 84.58 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SFM/summary.html) | [風險](companies/us-SFM/risk_plan.html) | [啟動報告](companies/us-SFM/initiation.html) |
| SHAZ | SharonAI Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 84.66 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SHAZ/summary.html) | [風險](companies/us-SHAZ/risk_plan.html) | [啟動報告](companies/us-SHAZ/initiation.html) |
| SMTC | Semtech Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 161.85 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SMTC/summary.html) | [風險](companies/us-SMTC/risk_plan.html) | [啟動報告](companies/us-SMTC/initiation.html) |
| SYM | Symbotic Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 44.95 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SYM/summary.html) | [風險](companies/us-SYM/risk_plan.html) | [啟動報告](companies/us-SYM/initiation.html) |
| SYNA | Synaptics Incorporated - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 124.23 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SYNA/summary.html) | [風險](companies/us-SYNA/risk_plan.html) | [啟動報告](companies/us-SYNA/initiation.html) |
| TE | T1 Energy Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 9.48 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TE/summary.html) | [風險](companies/us-TE/risk_plan.html) | [啟動報告](companies/us-TE/initiation.html) |
| TEVA | Teva Pharmaceutical Industries Limited American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 33.88 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TEVA/summary.html) | [風險](companies/us-TEVA/risk_plan.html) | [啟動報告](companies/us-TEVA/initiation.html) |
| WOLF | Wolfspeed | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 48.25 USD | 2026-06-30 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-WOLF/summary.html) | [風險](companies/us-WOLF/risk_plan.html) | [啟動報告](companies/us-WOLF/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| CIEN | [摘要](companies/us-CIEN/summary.html) | [公司摘要](companies/us-CIEN/tearsheet.html) | [啟動報告](companies/us-CIEN/initiation.html) | [風險](companies/us-CIEN/risk_plan.html) |
| CRDO | [摘要](companies/us-CRDO/summary.html) | [公司摘要](companies/us-CRDO/tearsheet.html) | [啟動報告](companies/us-CRDO/initiation.html) | [風險](companies/us-CRDO/risk_plan.html) |
| GFS | [摘要](companies/us-GFS/summary.html) | [公司摘要](companies/us-GFS/tearsheet.html) | [啟動報告](companies/us-GFS/initiation.html) | [風險](companies/us-GFS/risk_plan.html) |
| LIN | [摘要](companies/us-LIN/summary.html) | [公司摘要](companies/us-LIN/tearsheet.html) | [啟動報告](companies/us-LIN/initiation.html) | [風險](companies/us-LIN/risk_plan.html) |
| NVT | [摘要](companies/us-NVT/summary.html) | [公司摘要](companies/us-NVT/tearsheet.html) | [啟動報告](companies/us-NVT/initiation.html) | [風險](companies/us-NVT/risk_plan.html) |
| P | [摘要](companies/us-P/summary.html) | [公司摘要](companies/us-P/tearsheet.html) | [啟動報告](companies/us-P/initiation.html) | [風險](companies/us-P/risk_plan.html) |
| PL | [摘要](companies/us-PL/summary.html) | [公司摘要](companies/us-PL/tearsheet.html) | [啟動報告](companies/us-PL/initiation.html) | [風險](companies/us-PL/risk_plan.html) |
| TW | [摘要](companies/us-TW/summary.html) | [公司摘要](companies/us-TW/tearsheet.html) | [啟動報告](companies/us-TW/initiation.html) | [風險](companies/us-TW/risk_plan.html) |
| VRT | [摘要](companies/us-VRT/summary.html) | [公司摘要](companies/us-VRT/tearsheet.html) | [啟動報告](companies/us-VRT/initiation.html) | [風險](companies/us-VRT/risk_plan.html) |
| AAPL | [摘要](companies/us-AAPL/summary.html) | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| ABVX | [摘要](companies/us-ABVX/summary.html) | [公司摘要](companies/us-ABVX/tearsheet.html) | [啟動報告](companies/us-ABVX/initiation.html) | [風險](companies/us-ABVX/risk_plan.html) |
| ADI | [摘要](companies/us-ADI/summary.html) | [公司摘要](companies/us-ADI/tearsheet.html) | [啟動報告](companies/us-ADI/initiation.html) | [風險](companies/us-ADI/risk_plan.html) |
| AES | [摘要](companies/us-AES/summary.html) | [公司摘要](companies/us-AES/tearsheet.html) | [啟動報告](companies/us-AES/initiation.html) | [風險](companies/us-AES/risk_plan.html) |
| APD | [摘要](companies/us-APD/summary.html) | [公司摘要](companies/us-APD/tearsheet.html) | [啟動報告](companies/us-APD/initiation.html) | [風險](companies/us-APD/risk_plan.html) |
| APG | [摘要](companies/us-APG/summary.html) | [公司摘要](companies/us-APG/tearsheet.html) | [啟動報告](companies/us-APG/initiation.html) | [風險](companies/us-APG/risk_plan.html) |
| AR | [摘要](companies/us-AR/summary.html) | [公司摘要](companies/us-AR/tearsheet.html) | [啟動報告](companies/us-AR/initiation.html) | [風險](companies/us-AR/risk_plan.html) |
| AVAV | [摘要](companies/us-AVAV/summary.html) | [公司摘要](companies/us-AVAV/tearsheet.html) | [啟動報告](companies/us-AVAV/initiation.html) | [風險](companies/us-AVAV/risk_plan.html) |
| BA | [摘要](companies/us-BA/summary.html) | [公司摘要](companies/us-BA/tearsheet.html) | [啟動報告](companies/us-BA/initiation.html) | [風險](companies/us-BA/risk_plan.html) |
| BE | [摘要](companies/us-BE/summary.html) | [公司摘要](companies/us-BE/tearsheet.html) | [啟動報告](companies/us-BE/initiation.html) | [風險](companies/us-BE/risk_plan.html) |
| BX | [摘要](companies/us-BX/summary.html) | [公司摘要](companies/us-BX/tearsheet.html) | [啟動報告](companies/us-BX/initiation.html) | [風險](companies/us-BX/risk_plan.html) |
| CGNX | [摘要](companies/us-CGNX/summary.html) | [公司摘要](companies/us-CGNX/tearsheet.html) | [啟動報告](companies/us-CGNX/initiation.html) | [風險](companies/us-CGNX/risk_plan.html) |
| CRWD | [摘要](companies/us-CRWD/summary.html) | [公司摘要](companies/us-CRWD/tearsheet.html) | [啟動報告](companies/us-CRWD/initiation.html) | [風險](companies/us-CRWD/risk_plan.html) |
| DKNG | [摘要](companies/us-DKNG/summary.html) | [公司摘要](companies/us-DKNG/tearsheet.html) | [啟動報告](companies/us-DKNG/initiation.html) | [風險](companies/us-DKNG/risk_plan.html) |
| DOCS | [摘要](companies/us-DOCS/summary.html) | [公司摘要](companies/us-DOCS/tearsheet.html) | [啟動報告](companies/us-DOCS/initiation.html) | [風險](companies/us-DOCS/risk_plan.html) |
| ENPH | [摘要](companies/us-ENPH/summary.html) | [公司摘要](companies/us-ENPH/tearsheet.html) | [啟動報告](companies/us-ENPH/initiation.html) | [風險](companies/us-ENPH/risk_plan.html) |
| EQT | [摘要](companies/us-EQT/summary.html) | [公司摘要](companies/us-EQT/tearsheet.html) | [啟動報告](companies/us-EQT/initiation.html) | [風險](companies/us-EQT/risk_plan.html) |
| EXE | [摘要](companies/us-EXE/summary.html) | [公司摘要](companies/us-EXE/tearsheet.html) | [啟動報告](companies/us-EXE/initiation.html) | [風險](companies/us-EXE/risk_plan.html) |
| FIGR | [摘要](companies/us-FIGR/summary.html) | [公司摘要](companies/us-FIGR/tearsheet.html) | [啟動報告](companies/us-FIGR/initiation.html) | [風險](companies/us-FIGR/risk_plan.html) |
| GDS | [摘要](companies/us-GDS/summary.html) | [公司摘要](companies/us-GDS/tearsheet.html) | [啟動報告](companies/us-GDS/initiation.html) | [風險](companies/us-GDS/risk_plan.html) |
| GMAB | [摘要](companies/us-GMAB/summary.html) | [公司摘要](companies/us-GMAB/tearsheet.html) | [啟動報告](companies/us-GMAB/initiation.html) | [風險](companies/us-GMAB/risk_plan.html) |
| GOOGL | [摘要](companies/us-GOOGL/summary.html) | [公司摘要](companies/us-GOOGL/tearsheet.html) | [啟動報告](companies/us-GOOGL/initiation.html) | [風險](companies/us-GOOGL/risk_plan.html) |
| HSAI | [摘要](companies/us-HSAI/summary.html) | [公司摘要](companies/us-HSAI/tearsheet.html) | [啟動報告](companies/us-HSAI/initiation.html) | [風險](companies/us-HSAI/risk_plan.html) |
| INTU | [摘要](companies/us-INTU/summary.html) | [公司摘要](companies/us-INTU/tearsheet.html) | [啟動報告](companies/us-INTU/initiation.html) | [風險](companies/us-INTU/risk_plan.html) |
| JCI | [摘要](companies/us-JCI/summary.html) | [公司摘要](companies/us-JCI/tearsheet.html) | [啟動報告](companies/us-JCI/initiation.html) | [風險](companies/us-JCI/risk_plan.html) |
| KBR | [摘要](companies/us-KBR/summary.html) | [公司摘要](companies/us-KBR/tearsheet.html) | [啟動報告](companies/us-KBR/initiation.html) | [風險](companies/us-KBR/risk_plan.html) |
| LGN | [摘要](companies/us-LGN/summary.html) | [公司摘要](companies/us-LGN/tearsheet.html) | [啟動報告](companies/us-LGN/initiation.html) | [風險](companies/us-LGN/risk_plan.html) |
| LKQ | [摘要](companies/us-LKQ/summary.html) | [公司摘要](companies/us-LKQ/tearsheet.html) | [啟動報告](companies/us-LKQ/initiation.html) | [風險](companies/us-LKQ/risk_plan.html) |
| MBLY | [摘要](companies/us-MBLY/summary.html) | [公司摘要](companies/us-MBLY/tearsheet.html) | [啟動報告](companies/us-MBLY/initiation.html) | [風險](companies/us-MBLY/risk_plan.html) |
| MCHP | [摘要](companies/us-MCHP/summary.html) | [公司摘要](companies/us-MCHP/tearsheet.html) | [啟動報告](companies/us-MCHP/initiation.html) | [風險](companies/us-MCHP/risk_plan.html) |
| MIR | [摘要](companies/us-MIR/summary.html) | [公司摘要](companies/us-MIR/tearsheet.html) | [啟動報告](companies/us-MIR/initiation.html) | [風險](companies/us-MIR/risk_plan.html) |
| MTSI | [摘要](companies/us-MTSI/summary.html) | [公司摘要](companies/us-MTSI/tearsheet.html) | [啟動報告](companies/us-MTSI/initiation.html) | [風險](companies/us-MTSI/risk_plan.html) |
| OLLI | [摘要](companies/us-OLLI/summary.html) | [公司摘要](companies/us-OLLI/tearsheet.html) | [啟動報告](companies/us-OLLI/initiation.html) | [風險](companies/us-OLLI/risk_plan.html) |
| PAYX | [摘要](companies/us-PAYX/summary.html) | [公司摘要](companies/us-PAYX/tearsheet.html) | [啟動報告](companies/us-PAYX/initiation.html) | [風險](companies/us-PAYX/risk_plan.html) |
| PRM | [摘要](companies/us-PRM/summary.html) | [公司摘要](companies/us-PRM/tearsheet.html) | [啟動報告](companies/us-PRM/initiation.html) | [風險](companies/us-PRM/risk_plan.html) |
| RKLB | [摘要](companies/us-RKLB/summary.html) | [公司摘要](companies/us-RKLB/tearsheet.html) | [啟動報告](companies/us-RKLB/initiation.html) | [風險](companies/us-RKLB/risk_plan.html) |
| RMBS | [摘要](companies/us-RMBS/summary.html) | [公司摘要](companies/us-RMBS/tearsheet.html) | [啟動報告](companies/us-RMBS/initiation.html) | [風險](companies/us-RMBS/risk_plan.html) |
| SCHW | [摘要](companies/us-SCHW/summary.html) | [公司摘要](companies/us-SCHW/tearsheet.html) | [啟動報告](companies/us-SCHW/initiation.html) | [風險](companies/us-SCHW/risk_plan.html) |
| SEDG | [摘要](companies/us-SEDG/summary.html) | [公司摘要](companies/us-SEDG/tearsheet.html) | [啟動報告](companies/us-SEDG/initiation.html) | [風險](companies/us-SEDG/risk_plan.html) |
| SFM | [摘要](companies/us-SFM/summary.html) | [公司摘要](companies/us-SFM/tearsheet.html) | [啟動報告](companies/us-SFM/initiation.html) | [風險](companies/us-SFM/risk_plan.html) |
| SHAZ | [摘要](companies/us-SHAZ/summary.html) | [公司摘要](companies/us-SHAZ/tearsheet.html) | [啟動報告](companies/us-SHAZ/initiation.html) | [風險](companies/us-SHAZ/risk_plan.html) |
| SMTC | [摘要](companies/us-SMTC/summary.html) | [公司摘要](companies/us-SMTC/tearsheet.html) | [啟動報告](companies/us-SMTC/initiation.html) | [風險](companies/us-SMTC/risk_plan.html) |
| SYM | [摘要](companies/us-SYM/summary.html) | [公司摘要](companies/us-SYM/tearsheet.html) | [啟動報告](companies/us-SYM/initiation.html) | [風險](companies/us-SYM/risk_plan.html) |
| SYNA | [摘要](companies/us-SYNA/summary.html) | [公司摘要](companies/us-SYNA/tearsheet.html) | [啟動報告](companies/us-SYNA/initiation.html) | [風險](companies/us-SYNA/risk_plan.html) |
| TE | [摘要](companies/us-TE/summary.html) | [公司摘要](companies/us-TE/tearsheet.html) | [啟動報告](companies/us-TE/initiation.html) | [風險](companies/us-TE/risk_plan.html) |
| TEVA | [摘要](companies/us-TEVA/summary.html) | [公司摘要](companies/us-TEVA/tearsheet.html) | [啟動報告](companies/us-TEVA/initiation.html) | [風險](companies/us-TEVA/risk_plan.html) |
| WOLF | [摘要](companies/us-WOLF/summary.html) | [公司摘要](companies/us-WOLF/tearsheet.html) | [啟動報告](companies/us-WOLF/initiation.html) | [風險](companies/us-WOLF/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
