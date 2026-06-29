# StockLoop PEI 完整批次報告 2026-06-29 - US K-line

- 產出時間：2026-06-30 06:52:20
- 標的池檔數：45
- 已具備目前價格與研究狀態的列數：45
- Decision-ready 檔數：0
- 來源報告：reports/usStock/2026-06-29_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 45 檔標的；來源為 reports/usStock/2026-06-29_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：45 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：1 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：30 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：14 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：45 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：45 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | us | 45 |
| 分類 | 現在可以買名單 | 15 |
| 分類 | 現在不能買，但值得等買點名單 | 30 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 1 |
| 研究標籤 | Wait for trigger（等待觸發） | 30 |
| 研究標籤 | Watch only（僅觀察） | 14 |
| 研究狀態 | partial（證據仍不足） | 45 |
| 估值狀態 | not_run（本流程未執行估值模型） | 45 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 45 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 45 |
| 決策就緒 | 否 | 45 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 45 |
| official_validation_not_complete | 45 |
| research_status_not_complete | 45 |
| risk_status_not_complete | 45 |
| valuation_status_not_complete | 45 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- using local StockLoop K-line report close. Not exchange-verified for PEI decision readiness.
- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 估值 handoff 缺失：valuation multiples missing
- 價格來源限制：Yahoo/Stooq PEI quote fetch was unavailable
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
| AMKR | Amkor Technology | 現在可以買名單 | Watch only（僅觀察） | 82.34 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-AMKR/summary.html) | [風險](companies/us-AMKR/risk_plan.html) | [啟動報告](companies/us-AMKR/initiation.html) |
| ANET | Arista Networks | 現在可以買名單 | Watch only（僅觀察） | 164.1 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-ANET/summary.html) | [風險](companies/us-ANET/risk_plan.html) | [啟動報告](companies/us-ANET/initiation.html) |
| APP | Applovin Corporation - Class A Common Stock | 現在可以買名單 | Watch only（僅觀察） | 498.76 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-APP/summary.html) | [風險](companies/us-APP/risk_plan.html) | [啟動報告](companies/us-APP/initiation.html) |
| FLEX | Flex Ltd. - Ordinary Shares | 現在可以買名單 | Watch only（僅觀察） | 159.56 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-FLEX/summary.html) | [風險](companies/us-FLEX/risk_plan.html) | [啟動報告](companies/us-FLEX/initiation.html) |
| FORM | FormFactor | 現在可以買名單 | Watch only（僅觀察） | 144.17 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-FORM/summary.html) | [風險](companies/us-FORM/risk_plan.html) | [啟動報告](companies/us-FORM/initiation.html) |
| IRDM | Iridium Communications Inc - Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 54.59 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-IRDM/summary.html) | [風險](companies/us-IRDM/risk_plan.html) | [啟動報告](companies/us-IRDM/initiation.html) |
| LSCC | Lattice Semiconductor Corporation - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 146.78 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-LSCC/summary.html) | [風險](companies/us-LSCC/risk_plan.html) | [啟動報告](companies/us-LSCC/initiation.html) |
| MDB | MongoDB | 現在可以買名單 | Watch only（僅觀察） | 338.18 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-MDB/summary.html) | [風險](companies/us-MDB/risk_plan.html) | [啟動報告](companies/us-MDB/initiation.html) |
| MRVL | Marvell Technology | 現在可以買名單 | Watch only（僅觀察） | 277.75 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-MRVL/summary.html) | [風險](companies/us-MRVL/risk_plan.html) | [啟動報告](companies/us-MRVL/initiation.html) |
| NBIS | Nebius Group N.V. - Class A Ordinary Shares | 現在可以買名單 | Watch only（僅觀察） | 261.15 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-NBIS/summary.html) | [風險](companies/us-NBIS/risk_plan.html) | [啟動報告](companies/us-NBIS/initiation.html) |
| STM | STMicroelectronics N.V. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 74.79 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-STM/summary.html) | [風險](companies/us-STM/risk_plan.html) | [啟動報告](companies/us-STM/initiation.html) |
| STX | Seagate Technology Holdings PLC - Ordinary Shares | 現在可以買名單 | Watch only（僅觀察） | 968.53 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-STX/summary.html) | [風險](companies/us-STX/risk_plan.html) | [啟動報告](companies/us-STX/initiation.html) |
| TSLA | Tesla | 現在可以買名單 | Watch only（僅觀察） | 411.84 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-TSLA/summary.html) | [風險](companies/us-TSLA/risk_plan.html) | [啟動報告](companies/us-TSLA/initiation.html) |
| WBD | Warner Bros. Discovery | 現在可以買名單 | Watch only（僅觀察） | 27.13 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-WBD/summary.html) | [風險](companies/us-WBD/risk_plan.html) | [啟動報告](companies/us-WBD/initiation.html) |
| WDC | Western Digital Corporation - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 651.88 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-WDC/summary.html) | [風險](companies/us-WDC/risk_plan.html) | [啟動報告](companies/us-WDC/initiation.html) |
| ASTS | AST SpaceMobile | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 86.77 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ASTS/summary.html) | [風險](companies/us-ASTS/risk_plan.html) | [啟動報告](companies/us-ASTS/initiation.html) |
| AUR | Aurora Innovation | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.62 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AUR/summary.html) | [風險](companies/us-AUR/risk_plan.html) | [啟動報告](companies/us-AUR/initiation.html) |
| BE | Bloom Energy Corporation Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 275.01 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BE/summary.html) | [風險](companies/us-BE/risk_plan.html) | [啟動報告](companies/us-BE/initiation.html) |
| CHTR | Charter Communications | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 146.17 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CHTR/summary.html) | [風險](companies/us-CHTR/risk_plan.html) | [啟動報告](companies/us-CHTR/initiation.html) |
| CHWY | Chewy | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.42 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CHWY/summary.html) | [風險](companies/us-CHWY/risk_plan.html) | [啟動報告](companies/us-CHWY/initiation.html) |
| CMCSA | Comcast Corporation - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 24.22 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CMCSA/summary.html) | [風險](companies/us-CMCSA/risk_plan.html) | [啟動報告](companies/us-CMCSA/initiation.html) |
| COHR | Coherent Corp. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 391.22 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-COHR/summary.html) | [風險](companies/us-COHR/risk_plan.html) | [啟動報告](companies/us-COHR/initiation.html) |
| FDX | FedEx Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 325.4 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-FDX/summary.html) | [風險](companies/us-FDX/risk_plan.html) | [啟動報告](companies/us-FDX/initiation.html) |
| FSLY | Fastly | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 18 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-FSLY/summary.html) | [風險](companies/us-FSLY/risk_plan.html) | [啟動報告](companies/us-FSLY/initiation.html) |
| HTHT | H World Group Limited - American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 43.27 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-HTHT/summary.html) | [風險](companies/us-HTHT/risk_plan.html) | [啟動報告](companies/us-HTHT/initiation.html) |
| IBM | International Business Machines Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 278 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-IBM/summary.html) | [風險](companies/us-IBM/risk_plan.html) | [啟動報告](companies/us-IBM/initiation.html) |
| IONQ | IonQ | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 53.88 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-IONQ/summary.html) | [風險](companies/us-IONQ/risk_plan.html) | [啟動報告](companies/us-IONQ/initiation.html) |
| IOT | Samsara Inc. Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 32.1 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-IOT/summary.html) | [風險](companies/us-IOT/risk_plan.html) | [啟動報告](companies/us-IOT/initiation.html) |
| JCI | Johnson Controls International plc Ordinary Share | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 140.47 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-JCI/summary.html) | [風險](companies/us-JCI/risk_plan.html) | [啟動報告](companies/us-JCI/initiation.html) |
| KEYS | Keysight Technologies Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 340.13 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-KEYS/summary.html) | [風險](companies/us-KEYS/risk_plan.html) | [啟動報告](companies/us-KEYS/initiation.html) |
| LBRDK | Liberty Broadband Corporation - Class C Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 34.25 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LBRDK/summary.html) | [風險](companies/us-LBRDK/risk_plan.html) | [啟動報告](companies/us-LBRDK/initiation.html) |
| LGN | Legence Corp. - Class A Common stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 80.6 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LGN/summary.html) | [風險](companies/us-LGN/risk_plan.html) | [啟動報告](companies/us-LGN/initiation.html) |
| LITE | Lumentum Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 851.4 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LITE/summary.html) | [風險](companies/us-LITE/risk_plan.html) | [啟動報告](companies/us-LITE/initiation.html) |
| PATH | UiPath | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.68 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-PATH/summary.html) | [風險](companies/us-PATH/risk_plan.html) | [啟動報告](companies/us-PATH/initiation.html) |
| PSX | Phillips 66 Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 174.05 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-PSX/summary.html) | [風險](companies/us-PSX/risk_plan.html) | [啟動報告](companies/us-PSX/initiation.html) |
| QBTS | D-Wave Quantum Inc. Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 23.83 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-QBTS/summary.html) | [風險](companies/us-QBTS/risk_plan.html) | [啟動報告](companies/us-QBTS/initiation.html) |
| QS | QuantumScape Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 7.59 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-QS/summary.html) | [風險](companies/us-QS/risk_plan.html) | [啟動報告](companies/us-QS/initiation.html) |
| RCAT | Red Cat Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.32 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-RCAT/summary.html) | [風險](companies/us-RCAT/risk_plan.html) | [啟動報告](companies/us-RCAT/initiation.html) |
| RDDT | Reddit | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 174.39 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-RDDT/summary.html) | [風險](companies/us-RDDT/risk_plan.html) | [啟動報告](companies/us-RDDT/initiation.html) |
| SNY | Sanofi - American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 43.43 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SNY/summary.html) | [風險](companies/us-SNY/risk_plan.html) | [啟動報告](companies/us-SNY/initiation.html) |
| STWD | STARWOOD PROPERTY TRUST | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.96 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-STWD/summary.html) | [風險](companies/us-STWD/risk_plan.html) | [啟動報告](companies/us-STWD/initiation.html) |
| TEVA | Teva Pharmaceutical Industries Limited American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 33.31 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TEVA/summary.html) | [風險](companies/us-TEVA/risk_plan.html) | [啟動報告](companies/us-TEVA/initiation.html) |
| VRDN | Viridian Therapeutics | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 18.79 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-VRDN/summary.html) | [風險](companies/us-VRDN/risk_plan.html) | [啟動報告](companies/us-VRDN/initiation.html) |
| VSAT | ViaSat | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 76.69 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-VSAT/summary.html) | [風險](companies/us-VSAT/risk_plan.html) | [啟動報告](companies/us-VSAT/initiation.html) |
| ZETA | Zeta Global Holdings Corp. Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.73 USD | 2026-06-29 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ZETA/summary.html) | [風險](companies/us-ZETA/risk_plan.html) | [啟動報告](companies/us-ZETA/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| AMKR | [摘要](companies/us-AMKR/summary.html) | [公司摘要](companies/us-AMKR/tearsheet.html) | [啟動報告](companies/us-AMKR/initiation.html) | [風險](companies/us-AMKR/risk_plan.html) |
| ANET | [摘要](companies/us-ANET/summary.html) | [公司摘要](companies/us-ANET/tearsheet.html) | [啟動報告](companies/us-ANET/initiation.html) | [風險](companies/us-ANET/risk_plan.html) |
| APP | [摘要](companies/us-APP/summary.html) | [公司摘要](companies/us-APP/tearsheet.html) | [啟動報告](companies/us-APP/initiation.html) | [風險](companies/us-APP/risk_plan.html) |
| FLEX | [摘要](companies/us-FLEX/summary.html) | [公司摘要](companies/us-FLEX/tearsheet.html) | [啟動報告](companies/us-FLEX/initiation.html) | [風險](companies/us-FLEX/risk_plan.html) |
| FORM | [摘要](companies/us-FORM/summary.html) | [公司摘要](companies/us-FORM/tearsheet.html) | [啟動報告](companies/us-FORM/initiation.html) | [風險](companies/us-FORM/risk_plan.html) |
| IRDM | [摘要](companies/us-IRDM/summary.html) | [公司摘要](companies/us-IRDM/tearsheet.html) | [啟動報告](companies/us-IRDM/initiation.html) | [風險](companies/us-IRDM/risk_plan.html) |
| LSCC | [摘要](companies/us-LSCC/summary.html) | [公司摘要](companies/us-LSCC/tearsheet.html) | [啟動報告](companies/us-LSCC/initiation.html) | [風險](companies/us-LSCC/risk_plan.html) |
| MDB | [摘要](companies/us-MDB/summary.html) | [公司摘要](companies/us-MDB/tearsheet.html) | [啟動報告](companies/us-MDB/initiation.html) | [風險](companies/us-MDB/risk_plan.html) |
| MRVL | [摘要](companies/us-MRVL/summary.html) | [公司摘要](companies/us-MRVL/tearsheet.html) | [啟動報告](companies/us-MRVL/initiation.html) | [風險](companies/us-MRVL/risk_plan.html) |
| NBIS | [摘要](companies/us-NBIS/summary.html) | [公司摘要](companies/us-NBIS/tearsheet.html) | [啟動報告](companies/us-NBIS/initiation.html) | [風險](companies/us-NBIS/risk_plan.html) |
| STM | [摘要](companies/us-STM/summary.html) | [公司摘要](companies/us-STM/tearsheet.html) | [啟動報告](companies/us-STM/initiation.html) | [風險](companies/us-STM/risk_plan.html) |
| STX | [摘要](companies/us-STX/summary.html) | [公司摘要](companies/us-STX/tearsheet.html) | [啟動報告](companies/us-STX/initiation.html) | [風險](companies/us-STX/risk_plan.html) |
| TSLA | [摘要](companies/us-TSLA/summary.html) | [公司摘要](companies/us-TSLA/tearsheet.html) | [啟動報告](companies/us-TSLA/initiation.html) | [風險](companies/us-TSLA/risk_plan.html) |
| WBD | [摘要](companies/us-WBD/summary.html) | [公司摘要](companies/us-WBD/tearsheet.html) | [啟動報告](companies/us-WBD/initiation.html) | [風險](companies/us-WBD/risk_plan.html) |
| WDC | [摘要](companies/us-WDC/summary.html) | [公司摘要](companies/us-WDC/tearsheet.html) | [啟動報告](companies/us-WDC/initiation.html) | [風險](companies/us-WDC/risk_plan.html) |
| ASTS | [摘要](companies/us-ASTS/summary.html) | [公司摘要](companies/us-ASTS/tearsheet.html) | [啟動報告](companies/us-ASTS/initiation.html) | [風險](companies/us-ASTS/risk_plan.html) |
| AUR | [摘要](companies/us-AUR/summary.html) | [公司摘要](companies/us-AUR/tearsheet.html) | [啟動報告](companies/us-AUR/initiation.html) | [風險](companies/us-AUR/risk_plan.html) |
| BE | [摘要](companies/us-BE/summary.html) | [公司摘要](companies/us-BE/tearsheet.html) | [啟動報告](companies/us-BE/initiation.html) | [風險](companies/us-BE/risk_plan.html) |
| CHTR | [摘要](companies/us-CHTR/summary.html) | [公司摘要](companies/us-CHTR/tearsheet.html) | [啟動報告](companies/us-CHTR/initiation.html) | [風險](companies/us-CHTR/risk_plan.html) |
| CHWY | [摘要](companies/us-CHWY/summary.html) | [公司摘要](companies/us-CHWY/tearsheet.html) | [啟動報告](companies/us-CHWY/initiation.html) | [風險](companies/us-CHWY/risk_plan.html) |
| CMCSA | [摘要](companies/us-CMCSA/summary.html) | [公司摘要](companies/us-CMCSA/tearsheet.html) | [啟動報告](companies/us-CMCSA/initiation.html) | [風險](companies/us-CMCSA/risk_plan.html) |
| COHR | [摘要](companies/us-COHR/summary.html) | [公司摘要](companies/us-COHR/tearsheet.html) | [啟動報告](companies/us-COHR/initiation.html) | [風險](companies/us-COHR/risk_plan.html) |
| FDX | [摘要](companies/us-FDX/summary.html) | [公司摘要](companies/us-FDX/tearsheet.html) | [啟動報告](companies/us-FDX/initiation.html) | [風險](companies/us-FDX/risk_plan.html) |
| FSLY | [摘要](companies/us-FSLY/summary.html) | [公司摘要](companies/us-FSLY/tearsheet.html) | [啟動報告](companies/us-FSLY/initiation.html) | [風險](companies/us-FSLY/risk_plan.html) |
| HTHT | [摘要](companies/us-HTHT/summary.html) | [公司摘要](companies/us-HTHT/tearsheet.html) | [啟動報告](companies/us-HTHT/initiation.html) | [風險](companies/us-HTHT/risk_plan.html) |
| IBM | [摘要](companies/us-IBM/summary.html) | [公司摘要](companies/us-IBM/tearsheet.html) | [啟動報告](companies/us-IBM/initiation.html) | [風險](companies/us-IBM/risk_plan.html) |
| IONQ | [摘要](companies/us-IONQ/summary.html) | [公司摘要](companies/us-IONQ/tearsheet.html) | [啟動報告](companies/us-IONQ/initiation.html) | [風險](companies/us-IONQ/risk_plan.html) |
| IOT | [摘要](companies/us-IOT/summary.html) | [公司摘要](companies/us-IOT/tearsheet.html) | [啟動報告](companies/us-IOT/initiation.html) | [風險](companies/us-IOT/risk_plan.html) |
| JCI | [摘要](companies/us-JCI/summary.html) | [公司摘要](companies/us-JCI/tearsheet.html) | [啟動報告](companies/us-JCI/initiation.html) | [風險](companies/us-JCI/risk_plan.html) |
| KEYS | [摘要](companies/us-KEYS/summary.html) | [公司摘要](companies/us-KEYS/tearsheet.html) | [啟動報告](companies/us-KEYS/initiation.html) | [風險](companies/us-KEYS/risk_plan.html) |
| LBRDK | [摘要](companies/us-LBRDK/summary.html) | [公司摘要](companies/us-LBRDK/tearsheet.html) | [啟動報告](companies/us-LBRDK/initiation.html) | [風險](companies/us-LBRDK/risk_plan.html) |
| LGN | [摘要](companies/us-LGN/summary.html) | [公司摘要](companies/us-LGN/tearsheet.html) | [啟動報告](companies/us-LGN/initiation.html) | [風險](companies/us-LGN/risk_plan.html) |
| LITE | [摘要](companies/us-LITE/summary.html) | [公司摘要](companies/us-LITE/tearsheet.html) | [啟動報告](companies/us-LITE/initiation.html) | [風險](companies/us-LITE/risk_plan.html) |
| PATH | [摘要](companies/us-PATH/summary.html) | [公司摘要](companies/us-PATH/tearsheet.html) | [啟動報告](companies/us-PATH/initiation.html) | [風險](companies/us-PATH/risk_plan.html) |
| PSX | [摘要](companies/us-PSX/summary.html) | [公司摘要](companies/us-PSX/tearsheet.html) | [啟動報告](companies/us-PSX/initiation.html) | [風險](companies/us-PSX/risk_plan.html) |
| QBTS | [摘要](companies/us-QBTS/summary.html) | [公司摘要](companies/us-QBTS/tearsheet.html) | [啟動報告](companies/us-QBTS/initiation.html) | [風險](companies/us-QBTS/risk_plan.html) |
| QS | [摘要](companies/us-QS/summary.html) | [公司摘要](companies/us-QS/tearsheet.html) | [啟動報告](companies/us-QS/initiation.html) | [風險](companies/us-QS/risk_plan.html) |
| RCAT | [摘要](companies/us-RCAT/summary.html) | [公司摘要](companies/us-RCAT/tearsheet.html) | [啟動報告](companies/us-RCAT/initiation.html) | [風險](companies/us-RCAT/risk_plan.html) |
| RDDT | [摘要](companies/us-RDDT/summary.html) | [公司摘要](companies/us-RDDT/tearsheet.html) | [啟動報告](companies/us-RDDT/initiation.html) | [風險](companies/us-RDDT/risk_plan.html) |
| SNY | [摘要](companies/us-SNY/summary.html) | [公司摘要](companies/us-SNY/tearsheet.html) | [啟動報告](companies/us-SNY/initiation.html) | [風險](companies/us-SNY/risk_plan.html) |
| STWD | [摘要](companies/us-STWD/summary.html) | [公司摘要](companies/us-STWD/tearsheet.html) | [啟動報告](companies/us-STWD/initiation.html) | [風險](companies/us-STWD/risk_plan.html) |
| TEVA | [摘要](companies/us-TEVA/summary.html) | [公司摘要](companies/us-TEVA/tearsheet.html) | [啟動報告](companies/us-TEVA/initiation.html) | [風險](companies/us-TEVA/risk_plan.html) |
| VRDN | [摘要](companies/us-VRDN/summary.html) | [公司摘要](companies/us-VRDN/tearsheet.html) | [啟動報告](companies/us-VRDN/initiation.html) | [風險](companies/us-VRDN/risk_plan.html) |
| VSAT | [摘要](companies/us-VSAT/summary.html) | [公司摘要](companies/us-VSAT/tearsheet.html) | [啟動報告](companies/us-VSAT/initiation.html) | [風險](companies/us-VSAT/risk_plan.html) |
| ZETA | [摘要](companies/us-ZETA/summary.html) | [公司摘要](companies/us-ZETA/tearsheet.html) | [啟動報告](companies/us-ZETA/initiation.html) | [風險](companies/us-ZETA/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
