# StockLoop PEI 完整批次報告 2026-07-07 - US K-line

- 產出時間：2026-07-08 06:51:30
- 標的池檔數：49
- 已具備目前價格與研究狀態的列數：49
- Decision-ready 檔數：0
- 來源報告：reports/usStock/2026-07-07_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 49 檔標的；來源為 reports/usStock/2026-07-07_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：49 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：43 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：6 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：49 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：49 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | us | 49 |
| 分類 | 現在可以買名單 | 6 |
| 分類 | 現在不能買，但值得等買點名單 | 43 |
| 研究標籤 | Wait for trigger（等待觸發） | 43 |
| 研究標籤 | Watch only（僅觀察） | 6 |
| 研究狀態 | partial（證據仍不足） | 49 |
| 估值狀態 | not_run（本流程未執行估值模型） | 49 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 49 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 49 |
| 決策就緒 | 否 | 49 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 49 |
| official_validation_not_complete | 49 |
| research_status_not_complete | 49 |
| risk_status_not_complete | 49 |
| valuation_status_not_complete | 49 |

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
- 價格來源限制：Price is from local StockLoop scan output, not a fresh PEI quote provider fetch.
- 官方公司/證券身分驗證未完成
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：缺少公司級官方營收、訂單、財報或法說支撐
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EOG | EOG Resources | 現在可以買名單 | Watch only（僅觀察） | 134.54 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-EOG/summary.html) | [風險](companies/us-EOG/risk_plan.html) | [啟動報告](companies/us-EOG/initiation.html) |
| INTU | Intuit Inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 281.17 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-INTU/summary.html) | [風險](companies/us-INTU/risk_plan.html) | [啟動報告](companies/us-INTU/initiation.html) |
| PLD | Prologis | 現在可以買名單 | Watch only（僅觀察） | 143.61 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-PLD/summary.html) | [風險](companies/us-PLD/risk_plan.html) | [啟動報告](companies/us-PLD/initiation.html) |
| SHEL | Shell PLC American Depositary Shares  Ordinary Shares) | 現在可以買名單 | Watch only（僅觀察） | 81.99 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-SHEL/summary.html) | [風險](companies/us-SHEL/risk_plan.html) | [啟動報告](companies/us-SHEL/initiation.html) |
| UBER | Uber Technologies | 現在可以買名單 | Watch only（僅觀察） | 74.33 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-UBER/summary.html) | [風險](companies/us-UBER/risk_plan.html) | [啟動報告](companies/us-UBER/initiation.html) |
| XOM | ExxonMobil Holdings Corporation Common Stock | 現在可以買名單 | Watch only（僅觀察） | 141.69 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-XOM/summary.html) | [風險](companies/us-XOM/risk_plan.html) | [啟動報告](companies/us-XOM/initiation.html) |
| ADT | ADT Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.91 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ADT/summary.html) | [風險](companies/us-ADT/risk_plan.html) | [啟動報告](companies/us-ADT/initiation.html) |
| AES | The AES Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.62 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AES/summary.html) | [風險](companies/us-AES/risk_plan.html) | [啟動報告](companies/us-AES/initiation.html) |
| AR | Antero Resources Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.24 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AR/summary.html) | [風險](companies/us-AR/risk_plan.html) | [啟動報告](companies/us-AR/initiation.html) |
| AROC | Archrock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 37.93 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AROC/summary.html) | [風險](companies/us-AROC/risk_plan.html) | [啟動報告](companies/us-AROC/initiation.html) |
| BMY | Bristol-Myers Squibb Company Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 57.97 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BMY/summary.html) | [風險](companies/us-BMY/risk_plan.html) | [啟動報告](companies/us-BMY/initiation.html) |
| BRX | Brixmor Property Group Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 31.35 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BRX/summary.html) | [風險](companies/us-BRX/risk_plan.html) | [啟動報告](companies/us-BRX/initiation.html) |
| CME | CME Group Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 240.75 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CME/summary.html) | [風險](companies/us-CME/risk_plan.html) | [啟動報告](companies/us-CME/initiation.html) |
| CMPS | COMPASS Pathways Plc - American Depository Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 12.99 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CMPS/summary.html) | [風險](companies/us-CMPS/risk_plan.html) | [啟動報告](companies/us-CMPS/initiation.html) |
| COLD | Americold Realty Trust | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.25 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-COLD/summary.html) | [風險](companies/us-COLD/risk_plan.html) | [啟動報告](companies/us-COLD/initiation.html) |
| CPRI | Capri Holdings Limited Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.42 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CPRI/summary.html) | [風險](companies/us-CPRI/risk_plan.html) | [啟動報告](companies/us-CPRI/initiation.html) |
| DLTR | Dollar Tree | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 122.65 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-DLTR/summary.html) | [風險](companies/us-DLTR/risk_plan.html) | [啟動報告](companies/us-DLTR/initiation.html) |
| ENB | Enbridge Inc Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 55.05 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ENB/summary.html) | [風險](companies/us-ENB/risk_plan.html) | [啟動報告](companies/us-ENB/initiation.html) |
| EPD | Enterprise Products Partners L.P. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 37.64 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-EPD/summary.html) | [風險](companies/us-EPD/risk_plan.html) | [啟動報告](companies/us-EPD/initiation.html) |
| EQNR | Equinor ASA | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 33.91 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-EQNR/summary.html) | [風險](companies/us-EQNR/risk_plan.html) | [啟動報告](companies/us-EQNR/initiation.html) |
| EXE | Expand Energy Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 89.56 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-EXE/summary.html) | [風險](companies/us-EXE/risk_plan.html) | [啟動報告](companies/us-EXE/initiation.html) |
| EXLS | ExlService Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 27.84 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-EXLS/summary.html) | [風險](companies/us-EXLS/risk_plan.html) | [啟動報告](companies/us-EXLS/initiation.html) |
| FIG | Figma | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 22.19 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-FIG/summary.html) | [風險](companies/us-FIG/risk_plan.html) | [啟動報告](companies/us-FIG/initiation.html) |
| GILD | Gilead Sciences | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 136.36 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GILD/summary.html) | [風險](companies/us-GILD/risk_plan.html) | [啟動報告](companies/us-GILD/initiation.html) |
| HPQ | HP Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 22.96 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-HPQ/summary.html) | [風險](companies/us-HPQ/risk_plan.html) | [啟動報告](companies/us-HPQ/initiation.html) |
| HRL | Hormel Foods Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 24.7 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-HRL/summary.html) | [風險](companies/us-HRL/risk_plan.html) | [啟動報告](companies/us-HRL/initiation.html) |
| INFY | Infosys Limited American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 11.27 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-INFY/summary.html) | [風險](companies/us-INFY/risk_plan.html) | [啟動報告](companies/us-INFY/initiation.html) |
| IRDM | Iridium Communications Inc - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 51.09 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-IRDM/summary.html) | [風險](companies/us-IRDM/risk_plan.html) | [啟動報告](companies/us-IRDM/initiation.html) |
| KMI | Kinder Morgan | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 32.49 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-KMI/summary.html) | [風險](companies/us-KMI/risk_plan.html) | [啟動報告](companies/us-KMI/initiation.html) |
| KR | Kroger Company  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 58.54 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-KR/summary.html) | [風險](companies/us-KR/risk_plan.html) | [啟動報告](companies/us-KR/initiation.html) |
| LKQ | LKQ Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 26.21 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LKQ/summary.html) | [風險](companies/us-LKQ/risk_plan.html) | [啟動報告](companies/us-LKQ/initiation.html) |
| META | Meta Platforms | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 615.58 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-META/summary.html) | [風險](companies/us-META/risk_plan.html) | [啟動報告](companies/us-META/initiation.html) |
| NI | NiSource Inc Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 47.49 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-NI/summary.html) | [風險](companies/us-NI/risk_plan.html) | [啟動報告](companies/us-NI/initiation.html) |
| OKE | ONEOK | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 90.67 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-OKE/summary.html) | [風險](companies/us-OKE/risk_plan.html) | [啟動報告](companies/us-OKE/initiation.html) |
| ORLY | O'Reilly Automotive | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 86.65 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ORLY/summary.html) | [風險](companies/us-ORLY/risk_plan.html) | [啟動報告](companies/us-ORLY/initiation.html) |
| OVV | Ovintiv Inc. | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 54.97 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-OVV/summary.html) | [風險](companies/us-OVV/risk_plan.html) | [啟動報告](companies/us-OVV/initiation.html) |
| PEGA | Pegasystems Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 32.21 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-PEGA/summary.html) | [風險](companies/us-PEGA/risk_plan.html) | [啟動報告](companies/us-PEGA/initiation.html) |
| PPL | PPL Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 36.39 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-PPL/summary.html) | [風險](companies/us-PPL/risk_plan.html) | [啟動報告](companies/us-PPL/initiation.html) |
| PR | Permian Resources Corporation Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.09 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-PR/summary.html) | [風險](companies/us-PR/risk_plan.html) | [啟動報告](companies/us-PR/initiation.html) |
| QSR | Restaurant Brands International Inc. Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 73.94 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-QSR/summary.html) | [風險](companies/us-QSR/risk_plan.html) | [啟動報告](companies/us-QSR/initiation.html) |
| ROL | Rollins | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 43.62 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ROL/summary.html) | [風險](companies/us-ROL/risk_plan.html) | [啟動報告](companies/us-ROL/initiation.html) |
| RPRX | Royalty Pharma plc - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 57.8 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-RPRX/summary.html) | [風險](companies/us-RPRX/risk_plan.html) | [啟動報告](companies/us-RPRX/initiation.html) |
| RRC | Range Resources Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 37.85 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-RRC/summary.html) | [風險](companies/us-RRC/risk_plan.html) | [啟動報告](companies/us-RRC/initiation.html) |
| SHAK | Shake Shack | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 54.92 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SHAK/summary.html) | [風險](companies/us-SHAK/risk_plan.html) | [啟動報告](companies/us-SHAK/initiation.html) |
| SNY | Sanofi - American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 42.98 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SNY/summary.html) | [風險](companies/us-SNY/risk_plan.html) | [啟動報告](companies/us-SNY/initiation.html) |
| TGT | Target Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 127.55 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TGT/summary.html) | [風險](companies/us-TGT/risk_plan.html) | [啟動報告](companies/us-TGT/initiation.html) |
| TRP | TC Energy Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 68.8 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TRP/summary.html) | [風險](companies/us-TRP/risk_plan.html) | [啟動報告](companies/us-TRP/initiation.html) |
| VFC | V.F. Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.45 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-VFC/summary.html) | [風險](companies/us-VFC/risk_plan.html) | [啟動報告](companies/us-VFC/initiation.html) |
| WMG | Warner Music Group Corp. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 28.44 USD | 2026-07-07 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-WMG/summary.html) | [風險](companies/us-WMG/risk_plan.html) | [啟動報告](companies/us-WMG/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| EOG | [摘要](companies/us-EOG/summary.html) | [公司摘要](companies/us-EOG/tearsheet.html) | [啟動報告](companies/us-EOG/initiation.html) | [風險](companies/us-EOG/risk_plan.html) |
| INTU | [摘要](companies/us-INTU/summary.html) | [公司摘要](companies/us-INTU/tearsheet.html) | [啟動報告](companies/us-INTU/initiation.html) | [風險](companies/us-INTU/risk_plan.html) |
| PLD | [摘要](companies/us-PLD/summary.html) | [公司摘要](companies/us-PLD/tearsheet.html) | [啟動報告](companies/us-PLD/initiation.html) | [風險](companies/us-PLD/risk_plan.html) |
| SHEL | [摘要](companies/us-SHEL/summary.html) | [公司摘要](companies/us-SHEL/tearsheet.html) | [啟動報告](companies/us-SHEL/initiation.html) | [風險](companies/us-SHEL/risk_plan.html) |
| UBER | [摘要](companies/us-UBER/summary.html) | [公司摘要](companies/us-UBER/tearsheet.html) | [啟動報告](companies/us-UBER/initiation.html) | [風險](companies/us-UBER/risk_plan.html) |
| XOM | [摘要](companies/us-XOM/summary.html) | [公司摘要](companies/us-XOM/tearsheet.html) | [啟動報告](companies/us-XOM/initiation.html) | [風險](companies/us-XOM/risk_plan.html) |
| ADT | [摘要](companies/us-ADT/summary.html) | [公司摘要](companies/us-ADT/tearsheet.html) | [啟動報告](companies/us-ADT/initiation.html) | [風險](companies/us-ADT/risk_plan.html) |
| AES | [摘要](companies/us-AES/summary.html) | [公司摘要](companies/us-AES/tearsheet.html) | [啟動報告](companies/us-AES/initiation.html) | [風險](companies/us-AES/risk_plan.html) |
| AR | [摘要](companies/us-AR/summary.html) | [公司摘要](companies/us-AR/tearsheet.html) | [啟動報告](companies/us-AR/initiation.html) | [風險](companies/us-AR/risk_plan.html) |
| AROC | [摘要](companies/us-AROC/summary.html) | [公司摘要](companies/us-AROC/tearsheet.html) | [啟動報告](companies/us-AROC/initiation.html) | [風險](companies/us-AROC/risk_plan.html) |
| BMY | [摘要](companies/us-BMY/summary.html) | [公司摘要](companies/us-BMY/tearsheet.html) | [啟動報告](companies/us-BMY/initiation.html) | [風險](companies/us-BMY/risk_plan.html) |
| BRX | [摘要](companies/us-BRX/summary.html) | [公司摘要](companies/us-BRX/tearsheet.html) | [啟動報告](companies/us-BRX/initiation.html) | [風險](companies/us-BRX/risk_plan.html) |
| CME | [摘要](companies/us-CME/summary.html) | [公司摘要](companies/us-CME/tearsheet.html) | [啟動報告](companies/us-CME/initiation.html) | [風險](companies/us-CME/risk_plan.html) |
| CMPS | [摘要](companies/us-CMPS/summary.html) | [公司摘要](companies/us-CMPS/tearsheet.html) | [啟動報告](companies/us-CMPS/initiation.html) | [風險](companies/us-CMPS/risk_plan.html) |
| COLD | [摘要](companies/us-COLD/summary.html) | [公司摘要](companies/us-COLD/tearsheet.html) | [啟動報告](companies/us-COLD/initiation.html) | [風險](companies/us-COLD/risk_plan.html) |
| CPRI | [摘要](companies/us-CPRI/summary.html) | [公司摘要](companies/us-CPRI/tearsheet.html) | [啟動報告](companies/us-CPRI/initiation.html) | [風險](companies/us-CPRI/risk_plan.html) |
| DLTR | [摘要](companies/us-DLTR/summary.html) | [公司摘要](companies/us-DLTR/tearsheet.html) | [啟動報告](companies/us-DLTR/initiation.html) | [風險](companies/us-DLTR/risk_plan.html) |
| ENB | [摘要](companies/us-ENB/summary.html) | [公司摘要](companies/us-ENB/tearsheet.html) | [啟動報告](companies/us-ENB/initiation.html) | [風險](companies/us-ENB/risk_plan.html) |
| EPD | [摘要](companies/us-EPD/summary.html) | [公司摘要](companies/us-EPD/tearsheet.html) | [啟動報告](companies/us-EPD/initiation.html) | [風險](companies/us-EPD/risk_plan.html) |
| EQNR | [摘要](companies/us-EQNR/summary.html) | [公司摘要](companies/us-EQNR/tearsheet.html) | [啟動報告](companies/us-EQNR/initiation.html) | [風險](companies/us-EQNR/risk_plan.html) |
| EXE | [摘要](companies/us-EXE/summary.html) | [公司摘要](companies/us-EXE/tearsheet.html) | [啟動報告](companies/us-EXE/initiation.html) | [風險](companies/us-EXE/risk_plan.html) |
| EXLS | [摘要](companies/us-EXLS/summary.html) | [公司摘要](companies/us-EXLS/tearsheet.html) | [啟動報告](companies/us-EXLS/initiation.html) | [風險](companies/us-EXLS/risk_plan.html) |
| FIG | [摘要](companies/us-FIG/summary.html) | [公司摘要](companies/us-FIG/tearsheet.html) | [啟動報告](companies/us-FIG/initiation.html) | [風險](companies/us-FIG/risk_plan.html) |
| GILD | [摘要](companies/us-GILD/summary.html) | [公司摘要](companies/us-GILD/tearsheet.html) | [啟動報告](companies/us-GILD/initiation.html) | [風險](companies/us-GILD/risk_plan.html) |
| HPQ | [摘要](companies/us-HPQ/summary.html) | [公司摘要](companies/us-HPQ/tearsheet.html) | [啟動報告](companies/us-HPQ/initiation.html) | [風險](companies/us-HPQ/risk_plan.html) |
| HRL | [摘要](companies/us-HRL/summary.html) | [公司摘要](companies/us-HRL/tearsheet.html) | [啟動報告](companies/us-HRL/initiation.html) | [風險](companies/us-HRL/risk_plan.html) |
| INFY | [摘要](companies/us-INFY/summary.html) | [公司摘要](companies/us-INFY/tearsheet.html) | [啟動報告](companies/us-INFY/initiation.html) | [風險](companies/us-INFY/risk_plan.html) |
| IRDM | [摘要](companies/us-IRDM/summary.html) | [公司摘要](companies/us-IRDM/tearsheet.html) | [啟動報告](companies/us-IRDM/initiation.html) | [風險](companies/us-IRDM/risk_plan.html) |
| KMI | [摘要](companies/us-KMI/summary.html) | [公司摘要](companies/us-KMI/tearsheet.html) | [啟動報告](companies/us-KMI/initiation.html) | [風險](companies/us-KMI/risk_plan.html) |
| KR | [摘要](companies/us-KR/summary.html) | [公司摘要](companies/us-KR/tearsheet.html) | [啟動報告](companies/us-KR/initiation.html) | [風險](companies/us-KR/risk_plan.html) |
| LKQ | [摘要](companies/us-LKQ/summary.html) | [公司摘要](companies/us-LKQ/tearsheet.html) | [啟動報告](companies/us-LKQ/initiation.html) | [風險](companies/us-LKQ/risk_plan.html) |
| META | [摘要](companies/us-META/summary.html) | [公司摘要](companies/us-META/tearsheet.html) | [啟動報告](companies/us-META/initiation.html) | [風險](companies/us-META/risk_plan.html) |
| NI | [摘要](companies/us-NI/summary.html) | [公司摘要](companies/us-NI/tearsheet.html) | [啟動報告](companies/us-NI/initiation.html) | [風險](companies/us-NI/risk_plan.html) |
| OKE | [摘要](companies/us-OKE/summary.html) | [公司摘要](companies/us-OKE/tearsheet.html) | [啟動報告](companies/us-OKE/initiation.html) | [風險](companies/us-OKE/risk_plan.html) |
| ORLY | [摘要](companies/us-ORLY/summary.html) | [公司摘要](companies/us-ORLY/tearsheet.html) | [啟動報告](companies/us-ORLY/initiation.html) | [風險](companies/us-ORLY/risk_plan.html) |
| OVV | [摘要](companies/us-OVV/summary.html) | [公司摘要](companies/us-OVV/tearsheet.html) | [啟動報告](companies/us-OVV/initiation.html) | [風險](companies/us-OVV/risk_plan.html) |
| PEGA | [摘要](companies/us-PEGA/summary.html) | [公司摘要](companies/us-PEGA/tearsheet.html) | [啟動報告](companies/us-PEGA/initiation.html) | [風險](companies/us-PEGA/risk_plan.html) |
| PPL | [摘要](companies/us-PPL/summary.html) | [公司摘要](companies/us-PPL/tearsheet.html) | [啟動報告](companies/us-PPL/initiation.html) | [風險](companies/us-PPL/risk_plan.html) |
| PR | [摘要](companies/us-PR/summary.html) | [公司摘要](companies/us-PR/tearsheet.html) | [啟動報告](companies/us-PR/initiation.html) | [風險](companies/us-PR/risk_plan.html) |
| QSR | [摘要](companies/us-QSR/summary.html) | [公司摘要](companies/us-QSR/tearsheet.html) | [啟動報告](companies/us-QSR/initiation.html) | [風險](companies/us-QSR/risk_plan.html) |
| ROL | [摘要](companies/us-ROL/summary.html) | [公司摘要](companies/us-ROL/tearsheet.html) | [啟動報告](companies/us-ROL/initiation.html) | [風險](companies/us-ROL/risk_plan.html) |
| RPRX | [摘要](companies/us-RPRX/summary.html) | [公司摘要](companies/us-RPRX/tearsheet.html) | [啟動報告](companies/us-RPRX/initiation.html) | [風險](companies/us-RPRX/risk_plan.html) |
| RRC | [摘要](companies/us-RRC/summary.html) | [公司摘要](companies/us-RRC/tearsheet.html) | [啟動報告](companies/us-RRC/initiation.html) | [風險](companies/us-RRC/risk_plan.html) |
| SHAK | [摘要](companies/us-SHAK/summary.html) | [公司摘要](companies/us-SHAK/tearsheet.html) | [啟動報告](companies/us-SHAK/initiation.html) | [風險](companies/us-SHAK/risk_plan.html) |
| SNY | [摘要](companies/us-SNY/summary.html) | [公司摘要](companies/us-SNY/tearsheet.html) | [啟動報告](companies/us-SNY/initiation.html) | [風險](companies/us-SNY/risk_plan.html) |
| TGT | [摘要](companies/us-TGT/summary.html) | [公司摘要](companies/us-TGT/tearsheet.html) | [啟動報告](companies/us-TGT/initiation.html) | [風險](companies/us-TGT/risk_plan.html) |
| TRP | [摘要](companies/us-TRP/summary.html) | [公司摘要](companies/us-TRP/tearsheet.html) | [啟動報告](companies/us-TRP/initiation.html) | [風險](companies/us-TRP/risk_plan.html) |
| VFC | [摘要](companies/us-VFC/summary.html) | [公司摘要](companies/us-VFC/tearsheet.html) | [啟動報告](companies/us-VFC/initiation.html) | [風險](companies/us-VFC/risk_plan.html) |
| WMG | [摘要](companies/us-WMG/summary.html) | [公司摘要](companies/us-WMG/tearsheet.html) | [啟動報告](companies/us-WMG/initiation.html) | [風險](companies/us-WMG/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
