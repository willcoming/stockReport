# StockLoop PEI 完整批次報告 2026-07-06 - US K-line

- 產出時間：2026-07-07 06:44:44
- 標的池檔數：59
- 已具備目前價格與研究狀態的列數：59
- Decision-ready 檔數：0
- 來源報告：reports/usStock/2026-07-06_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 59 檔標的；來源為 reports/usStock/2026-07-06_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：59 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：50 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：9 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：59 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：59 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | us | 59 |
| 分類 | 現在可以買名單 | 9 |
| 分類 | 現在不能買，但值得等買點名單 | 50 |
| 研究標籤 | Wait for trigger（等待觸發） | 50 |
| 研究標籤 | Watch only（僅觀察） | 9 |
| 研究狀態 | partial（證據仍不足） | 59 |
| 估值狀態 | not_run（本流程未執行估值模型） | 59 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 59 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 59 |
| 決策就緒 | 否 | 59 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 59 |
| official_validation_not_complete | 58 |
| research_status_not_complete | 59 |
| risk_status_not_complete | 59 |
| valuation_status_not_complete | 59 |

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
- 官方證據 handoff 缺失：official company or fundamental evidence missing
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
| ANET | Arista Networks | 現在可以買名單 | Watch only（僅觀察） | 173.28 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-ANET/summary.html) | [風險](companies/us-ANET/risk_plan.html) | [啟動報告](companies/us-ANET/initiation.html) |
| ARES | Ares Management Corporation Class A Common Stock | 現在可以買名單 | Watch only（僅觀察） | 121.83 USD | 2026-07-06T20:01:29Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-ARES/summary.html) | [風險](companies/us-ARES/risk_plan.html) | [啟動報告](companies/us-ARES/initiation.html) |
| BMNR | BitMine Immersion Technologies | 現在可以買名單 | Watch only（僅觀察） | 15.55 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-BMNR/summary.html) | [風險](companies/us-BMNR/risk_plan.html) | [啟動報告](companies/us-BMNR/initiation.html) |
| GOOG | Alphabet Inc. - Class C Capital Stock | 現在可以買名單 | Watch only（僅觀察） | 364.9 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-GOOG/summary.html) | [風險](companies/us-GOOG/risk_plan.html) | [啟動報告](companies/us-GOOG/initiation.html) |
| ICE | Intercontinental Exchange Inc. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 134.91 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-ICE/summary.html) | [風險](companies/us-ICE/risk_plan.html) | [啟動報告](companies/us-ICE/initiation.html) |
| NTAP | NetApp | 現在可以買名單 | Watch only（僅觀察） | 163.55 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-NTAP/summary.html) | [風險](companies/us-NTAP/risk_plan.html) | [啟動報告](companies/us-NTAP/initiation.html) |
| TMUS | T-Mobile US | 現在可以買名單 | Watch only（僅觀察） | 181.79 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-TMUS/summary.html) | [風險](companies/us-TMUS/risk_plan.html) | [啟動報告](companies/us-TMUS/initiation.html) |
| TSLA | Tesla | 現在可以買名單 | Watch only（僅觀察） | 419.77 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-TSLA/summary.html) | [風險](companies/us-TSLA/risk_plan.html) | [啟動報告](companies/us-TSLA/initiation.html) |
| VST | Vistra Corp. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 157.22 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-VST/summary.html) | [風險](companies/us-VST/risk_plan.html) | [啟動報告](companies/us-VST/initiation.html) |
| ACHR | Archer Aviation Inc. Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 5.37 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ACHR/summary.html) | [風險](companies/us-ACHR/risk_plan.html) | [啟動報告](companies/us-ACHR/initiation.html) |
| ADM | Archer-Daniels-Midland Company Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 77.93 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ADM/summary.html) | [風險](companies/us-ADM/risk_plan.html) | [啟動報告](companies/us-ADM/initiation.html) |
| AEO | American Eagle Outfitters | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.5 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AEO/summary.html) | [風險](companies/us-AEO/risk_plan.html) | [啟動報告](companies/us-AEO/initiation.html) |
| ALAB | Astera Labs | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 432.74 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ALAB/summary.html) | [風險](companies/us-ALAB/risk_plan.html) | [啟動報告](companies/us-ALAB/initiation.html) |
| AMD | Advanced Micro Devices | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 552.05 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AMD/summary.html) | [風險](companies/us-AMD/risk_plan.html) | [啟動報告](companies/us-AMD/initiation.html) |
| APG | APi Group Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 42.83 USD | 2026-07-06T20:01:32Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-APG/summary.html) | [風險](companies/us-APG/risk_plan.html) | [啟動報告](companies/us-APG/initiation.html) |
| ARR | ARMOUR Residential REIT | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 17.18 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ARR/summary.html) | [風險](companies/us-ARR/risk_plan.html) | [啟動報告](companies/us-ARR/initiation.html) |
| ASX | ASE Technology Holding Co. | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 43.32 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ASX/summary.html) | [風險](companies/us-ASX/risk_plan.html) | [啟動報告](companies/us-ASX/initiation.html) |
| BE | Bloom Energy Corporation Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 295.05 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BE/summary.html) | [風險](companies/us-BE/risk_plan.html) | [啟動報告](companies/us-BE/initiation.html) |
| BN | Brookfield Corporation Class A Limited Voting Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 43.96 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BN/summary.html) | [風險](companies/us-BN/risk_plan.html) | [啟動報告](companies/us-BN/initiation.html) |
| CG | The Carlyle Group Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 44.04 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CG/summary.html) | [風險](companies/us-CG/risk_plan.html) | [啟動報告](companies/us-CG/initiation.html) |
| COST | Costco Wholesale Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 950.25 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-COST/summary.html) | [風險](companies/us-COST/risk_plan.html) | [啟動報告](companies/us-COST/initiation.html) |
| CRDO | Credo Technology Group Holding Ltd - Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 265.55 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CRDO/summary.html) | [風險](companies/us-CRDO/risk_plan.html) | [啟動報告](companies/us-CRDO/initiation.html) |
| DELL | Dell Technologies Inc. Class C Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 411.8 USD | 2026-07-06T20:03:52Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-DELL/summary.html) | [風險](companies/us-DELL/risk_plan.html) | [啟動報告](companies/us-DELL/initiation.html) |
| EPD | Enterprise Products Partners L.P. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 36.47 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-EPD/summary.html) | [風險](companies/us-EPD/risk_plan.html) | [啟動報告](companies/us-EPD/initiation.html) |
| F | Ford Motor Company Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 13.83 USD | 2026-07-06T20:02:28Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-F/summary.html) | [風險](companies/us-F/risk_plan.html) | [啟動報告](companies/us-F/initiation.html) |
| FLG | Flagstar Bank | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.84 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-FLG/summary.html) | [風險](companies/us-FLG/risk_plan.html) | [啟動報告](companies/us-FLG/initiation.html) |
| FRMI | Fermi Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 8.21 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-FRMI/summary.html) | [風險](companies/us-FRMI/risk_plan.html) | [啟動報告](companies/us-FRMI/initiation.html) |
| FTI | TechnipFMC plc Ordinary Share | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 67.26 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-FTI/summary.html) | [風險](companies/us-FTI/risk_plan.html) | [啟動報告](companies/us-FTI/initiation.html) |
| GFL | GFL Environmental Inc. Subordinate voting shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 40.49 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GFL/summary.html) | [風險](companies/us-GFL/risk_plan.html) | [啟動報告](companies/us-GFL/initiation.html) |
| HUT | Hut 8 Corp. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 103.78 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-HUT/summary.html) | [風險](companies/us-HUT/risk_plan.html) | [啟動報告](companies/us-HUT/initiation.html) |
| INTC | Intel Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 122.2 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-INTC/summary.html) | [風險](companies/us-INTC/risk_plan.html) | [啟動報告](companies/us-INTC/initiation.html) |
| IVZ | Invesco Ltd Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 27.83 USD | 2026-07-06T20:02:26Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-IVZ/summary.html) | [風險](companies/us-IVZ/risk_plan.html) | [啟動報告](companies/us-IVZ/initiation.html) |
| KKR | KKR & Co. Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 95.97 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-KKR/summary.html) | [風險](companies/us-KKR/risk_plan.html) | [啟動報告](companies/us-KKR/initiation.html) |
| LCID | Lucid Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.66 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LCID/summary.html) | [風險](companies/us-LCID/risk_plan.html) | [啟動報告](companies/us-LCID/initiation.html) |
| LEVI | Levi Strauss & Co Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 24.68 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LEVI/summary.html) | [風險](companies/us-LEVI/risk_plan.html) | [啟動報告](companies/us-LEVI/initiation.html) |
| MARA | MARA Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 12.95 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MARA/summary.html) | [風險](companies/us-MARA/risk_plan.html) | [啟動報告](companies/us-MARA/initiation.html) |
| MXL | MaxLinear | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 95.68 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MXL/summary.html) | [風險](companies/us-MXL/risk_plan.html) | [啟動報告](companies/us-MXL/initiation.html) |
| OPEN | Opendoor Technologies Inc - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 5.09 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-OPEN/summary.html) | [風險](companies/us-OPEN/risk_plan.html) | [啟動報告](companies/us-OPEN/initiation.html) |
| OWL | Blue Owl Capital Inc. Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 9.49 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-OWL/summary.html) | [風險](companies/us-OWL/risk_plan.html) | [啟動報告](companies/us-OWL/initiation.html) |
| PENG | Penguin Solutions | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 67.71 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-PENG/summary.html) | [風險](companies/us-PENG/risk_plan.html) | [啟動報告](companies/us-PENG/initiation.html) |
| PURR | Hyperliquid Strategies Inc - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 8.82 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-PURR/summary.html) | [風險](companies/us-PURR/risk_plan.html) | [啟動報告](companies/us-PURR/initiation.html) |
| RELX | RELX PLC PLC American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 32.27 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-RELX/summary.html) | [風險](companies/us-RELX/risk_plan.html) | [啟動報告](companies/us-RELX/initiation.html) |
| RXT | Rackspace Technology | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.42 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-RXT/summary.html) | [風險](companies/us-RXT/risk_plan.html) | [啟動報告](companies/us-RXT/initiation.html) |
| SEDG | SolarEdge Technologies | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 56.91 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SEDG/summary.html) | [風險](companies/us-SEDG/risk_plan.html) | [啟動報告](companies/us-SEDG/initiation.html) |
| SHAZ | SharonAI Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 79.96 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SHAZ/summary.html) | [風險](companies/us-SHAZ/risk_plan.html) | [啟動報告](companies/us-SHAZ/initiation.html) |
| SHLS | Shoals Technologies Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.58 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SHLS/summary.html) | [風險](companies/us-SHLS/risk_plan.html) | [啟動報告](companies/us-SHLS/initiation.html) |
| SMTC | Semtech Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 138.89 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SMTC/summary.html) | [風險](companies/us-SMTC/risk_plan.html) | [啟動報告](companies/us-SMTC/initiation.html) |
| SOUN | SoundHound AI | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.96 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SOUN/summary.html) | [風險](companies/us-SOUN/risk_plan.html) | [啟動報告](companies/us-SOUN/initiation.html) |
| STEP | StepStone Group Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 43.95 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-STEP/summary.html) | [風險](companies/us-STEP/risk_plan.html) | [啟動報告](companies/us-STEP/initiation.html) |
| STWD | STARWOOD PROPERTY TRUST | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.71 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-STWD/summary.html) | [風險](companies/us-STWD/risk_plan.html) | [啟動報告](companies/us-STWD/initiation.html) |
| TEAM | Atlassian Corporation - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 85.5 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TEAM/summary.html) | [風險](companies/us-TEAM/risk_plan.html) | [啟動報告](companies/us-TEAM/initiation.html) |
| TECK | Teck Resources Ltd Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 61.45 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TECK/summary.html) | [風險](companies/us-TECK/risk_plan.html) | [啟動報告](companies/us-TECK/initiation.html) |
| TSM | Taiwan Semiconductor Manufacturing Company Ltd. | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 451.79 USD | 2026-07-06T20:00:02Z | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TSM/summary.html) | [風險](companies/us-TSM/risk_plan.html) | [啟動報告](companies/us-TSM/initiation.html) |
| TXN | Texas Instruments Incorporated - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 303.5 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TXN/summary.html) | [風險](companies/us-TXN/risk_plan.html) | [啟動報告](companies/us-TXN/initiation.html) |
| UMC | United Microelectronics Corporation  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 25.83 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-UMC/summary.html) | [風險](companies/us-UMC/risk_plan.html) | [啟動報告](companies/us-UMC/initiation.html) |
| VRT | Vertiv Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 318.47 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-VRT/summary.html) | [風險](companies/us-VRT/risk_plan.html) | [啟動報告](companies/us-VRT/initiation.html) |
| VSAT | ViaSat | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 83.8 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-VSAT/summary.html) | [風險](companies/us-VSAT/risk_plan.html) | [啟動報告](companies/us-VSAT/initiation.html) |
| WMT | Walmart Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 110.65 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-WMT/summary.html) | [風險](companies/us-WMT/risk_plan.html) | [啟動報告](companies/us-WMT/initiation.html) |
| WYFI | WhiteFiber | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.54 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-WYFI/summary.html) | [風險](companies/us-WYFI/risk_plan.html) | [啟動報告](companies/us-WYFI/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| ANET | [摘要](companies/us-ANET/summary.html) | [公司摘要](companies/us-ANET/tearsheet.html) | [啟動報告](companies/us-ANET/initiation.html) | [風險](companies/us-ANET/risk_plan.html) |
| ARES | [摘要](companies/us-ARES/summary.html) | [公司摘要](companies/us-ARES/tearsheet.html) | [啟動報告](companies/us-ARES/initiation.html) | [風險](companies/us-ARES/risk_plan.html) |
| BMNR | [摘要](companies/us-BMNR/summary.html) | [公司摘要](companies/us-BMNR/tearsheet.html) | [啟動報告](companies/us-BMNR/initiation.html) | [風險](companies/us-BMNR/risk_plan.html) |
| GOOG | [摘要](companies/us-GOOG/summary.html) | [公司摘要](companies/us-GOOG/tearsheet.html) | [啟動報告](companies/us-GOOG/initiation.html) | [風險](companies/us-GOOG/risk_plan.html) |
| ICE | [摘要](companies/us-ICE/summary.html) | [公司摘要](companies/us-ICE/tearsheet.html) | [啟動報告](companies/us-ICE/initiation.html) | [風險](companies/us-ICE/risk_plan.html) |
| NTAP | [摘要](companies/us-NTAP/summary.html) | [公司摘要](companies/us-NTAP/tearsheet.html) | [啟動報告](companies/us-NTAP/initiation.html) | [風險](companies/us-NTAP/risk_plan.html) |
| TMUS | [摘要](companies/us-TMUS/summary.html) | [公司摘要](companies/us-TMUS/tearsheet.html) | [啟動報告](companies/us-TMUS/initiation.html) | [風險](companies/us-TMUS/risk_plan.html) |
| TSLA | [摘要](companies/us-TSLA/summary.html) | [公司摘要](companies/us-TSLA/tearsheet.html) | [啟動報告](companies/us-TSLA/initiation.html) | [風險](companies/us-TSLA/risk_plan.html) |
| VST | [摘要](companies/us-VST/summary.html) | [公司摘要](companies/us-VST/tearsheet.html) | [啟動報告](companies/us-VST/initiation.html) | [風險](companies/us-VST/risk_plan.html) |
| ACHR | [摘要](companies/us-ACHR/summary.html) | [公司摘要](companies/us-ACHR/tearsheet.html) | [啟動報告](companies/us-ACHR/initiation.html) | [風險](companies/us-ACHR/risk_plan.html) |
| ADM | [摘要](companies/us-ADM/summary.html) | [公司摘要](companies/us-ADM/tearsheet.html) | [啟動報告](companies/us-ADM/initiation.html) | [風險](companies/us-ADM/risk_plan.html) |
| AEO | [摘要](companies/us-AEO/summary.html) | [公司摘要](companies/us-AEO/tearsheet.html) | [啟動報告](companies/us-AEO/initiation.html) | [風險](companies/us-AEO/risk_plan.html) |
| ALAB | [摘要](companies/us-ALAB/summary.html) | [公司摘要](companies/us-ALAB/tearsheet.html) | [啟動報告](companies/us-ALAB/initiation.html) | [風險](companies/us-ALAB/risk_plan.html) |
| AMD | [摘要](companies/us-AMD/summary.html) | [公司摘要](companies/us-AMD/tearsheet.html) | [啟動報告](companies/us-AMD/initiation.html) | [風險](companies/us-AMD/risk_plan.html) |
| APG | [摘要](companies/us-APG/summary.html) | [公司摘要](companies/us-APG/tearsheet.html) | [啟動報告](companies/us-APG/initiation.html) | [風險](companies/us-APG/risk_plan.html) |
| ARR | [摘要](companies/us-ARR/summary.html) | [公司摘要](companies/us-ARR/tearsheet.html) | [啟動報告](companies/us-ARR/initiation.html) | [風險](companies/us-ARR/risk_plan.html) |
| ASX | [摘要](companies/us-ASX/summary.html) | [公司摘要](companies/us-ASX/tearsheet.html) | [啟動報告](companies/us-ASX/initiation.html) | [風險](companies/us-ASX/risk_plan.html) |
| BE | [摘要](companies/us-BE/summary.html) | [公司摘要](companies/us-BE/tearsheet.html) | [啟動報告](companies/us-BE/initiation.html) | [風險](companies/us-BE/risk_plan.html) |
| BN | [摘要](companies/us-BN/summary.html) | [公司摘要](companies/us-BN/tearsheet.html) | [啟動報告](companies/us-BN/initiation.html) | [風險](companies/us-BN/risk_plan.html) |
| CG | [摘要](companies/us-CG/summary.html) | [公司摘要](companies/us-CG/tearsheet.html) | [啟動報告](companies/us-CG/initiation.html) | [風險](companies/us-CG/risk_plan.html) |
| COST | [摘要](companies/us-COST/summary.html) | [公司摘要](companies/us-COST/tearsheet.html) | [啟動報告](companies/us-COST/initiation.html) | [風險](companies/us-COST/risk_plan.html) |
| CRDO | [摘要](companies/us-CRDO/summary.html) | [公司摘要](companies/us-CRDO/tearsheet.html) | [啟動報告](companies/us-CRDO/initiation.html) | [風險](companies/us-CRDO/risk_plan.html) |
| DELL | [摘要](companies/us-DELL/summary.html) | [公司摘要](companies/us-DELL/tearsheet.html) | [啟動報告](companies/us-DELL/initiation.html) | [風險](companies/us-DELL/risk_plan.html) |
| EPD | [摘要](companies/us-EPD/summary.html) | [公司摘要](companies/us-EPD/tearsheet.html) | [啟動報告](companies/us-EPD/initiation.html) | [風險](companies/us-EPD/risk_plan.html) |
| F | [摘要](companies/us-F/summary.html) | [公司摘要](companies/us-F/tearsheet.html) | [啟動報告](companies/us-F/initiation.html) | [風險](companies/us-F/risk_plan.html) |
| FLG | [摘要](companies/us-FLG/summary.html) | [公司摘要](companies/us-FLG/tearsheet.html) | [啟動報告](companies/us-FLG/initiation.html) | [風險](companies/us-FLG/risk_plan.html) |
| FRMI | [摘要](companies/us-FRMI/summary.html) | [公司摘要](companies/us-FRMI/tearsheet.html) | [啟動報告](companies/us-FRMI/initiation.html) | [風險](companies/us-FRMI/risk_plan.html) |
| FTI | [摘要](companies/us-FTI/summary.html) | [公司摘要](companies/us-FTI/tearsheet.html) | [啟動報告](companies/us-FTI/initiation.html) | [風險](companies/us-FTI/risk_plan.html) |
| GFL | [摘要](companies/us-GFL/summary.html) | [公司摘要](companies/us-GFL/tearsheet.html) | [啟動報告](companies/us-GFL/initiation.html) | [風險](companies/us-GFL/risk_plan.html) |
| HUT | [摘要](companies/us-HUT/summary.html) | [公司摘要](companies/us-HUT/tearsheet.html) | [啟動報告](companies/us-HUT/initiation.html) | [風險](companies/us-HUT/risk_plan.html) |
| INTC | [摘要](companies/us-INTC/summary.html) | [公司摘要](companies/us-INTC/tearsheet.html) | [啟動報告](companies/us-INTC/initiation.html) | [風險](companies/us-INTC/risk_plan.html) |
| IVZ | [摘要](companies/us-IVZ/summary.html) | [公司摘要](companies/us-IVZ/tearsheet.html) | [啟動報告](companies/us-IVZ/initiation.html) | [風險](companies/us-IVZ/risk_plan.html) |
| KKR | [摘要](companies/us-KKR/summary.html) | [公司摘要](companies/us-KKR/tearsheet.html) | [啟動報告](companies/us-KKR/initiation.html) | [風險](companies/us-KKR/risk_plan.html) |
| LCID | [摘要](companies/us-LCID/summary.html) | [公司摘要](companies/us-LCID/tearsheet.html) | [啟動報告](companies/us-LCID/initiation.html) | [風險](companies/us-LCID/risk_plan.html) |
| LEVI | [摘要](companies/us-LEVI/summary.html) | [公司摘要](companies/us-LEVI/tearsheet.html) | [啟動報告](companies/us-LEVI/initiation.html) | [風險](companies/us-LEVI/risk_plan.html) |
| MARA | [摘要](companies/us-MARA/summary.html) | [公司摘要](companies/us-MARA/tearsheet.html) | [啟動報告](companies/us-MARA/initiation.html) | [風險](companies/us-MARA/risk_plan.html) |
| MXL | [摘要](companies/us-MXL/summary.html) | [公司摘要](companies/us-MXL/tearsheet.html) | [啟動報告](companies/us-MXL/initiation.html) | [風險](companies/us-MXL/risk_plan.html) |
| OPEN | [摘要](companies/us-OPEN/summary.html) | [公司摘要](companies/us-OPEN/tearsheet.html) | [啟動報告](companies/us-OPEN/initiation.html) | [風險](companies/us-OPEN/risk_plan.html) |
| OWL | [摘要](companies/us-OWL/summary.html) | [公司摘要](companies/us-OWL/tearsheet.html) | [啟動報告](companies/us-OWL/initiation.html) | [風險](companies/us-OWL/risk_plan.html) |
| PENG | [摘要](companies/us-PENG/summary.html) | [公司摘要](companies/us-PENG/tearsheet.html) | [啟動報告](companies/us-PENG/initiation.html) | [風險](companies/us-PENG/risk_plan.html) |
| PURR | [摘要](companies/us-PURR/summary.html) | [公司摘要](companies/us-PURR/tearsheet.html) | [啟動報告](companies/us-PURR/initiation.html) | [風險](companies/us-PURR/risk_plan.html) |
| RELX | [摘要](companies/us-RELX/summary.html) | [公司摘要](companies/us-RELX/tearsheet.html) | [啟動報告](companies/us-RELX/initiation.html) | [風險](companies/us-RELX/risk_plan.html) |
| RXT | [摘要](companies/us-RXT/summary.html) | [公司摘要](companies/us-RXT/tearsheet.html) | [啟動報告](companies/us-RXT/initiation.html) | [風險](companies/us-RXT/risk_plan.html) |
| SEDG | [摘要](companies/us-SEDG/summary.html) | [公司摘要](companies/us-SEDG/tearsheet.html) | [啟動報告](companies/us-SEDG/initiation.html) | [風險](companies/us-SEDG/risk_plan.html) |
| SHAZ | [摘要](companies/us-SHAZ/summary.html) | [公司摘要](companies/us-SHAZ/tearsheet.html) | [啟動報告](companies/us-SHAZ/initiation.html) | [風險](companies/us-SHAZ/risk_plan.html) |
| SHLS | [摘要](companies/us-SHLS/summary.html) | [公司摘要](companies/us-SHLS/tearsheet.html) | [啟動報告](companies/us-SHLS/initiation.html) | [風險](companies/us-SHLS/risk_plan.html) |
| SMTC | [摘要](companies/us-SMTC/summary.html) | [公司摘要](companies/us-SMTC/tearsheet.html) | [啟動報告](companies/us-SMTC/initiation.html) | [風險](companies/us-SMTC/risk_plan.html) |
| SOUN | [摘要](companies/us-SOUN/summary.html) | [公司摘要](companies/us-SOUN/tearsheet.html) | [啟動報告](companies/us-SOUN/initiation.html) | [風險](companies/us-SOUN/risk_plan.html) |
| STEP | [摘要](companies/us-STEP/summary.html) | [公司摘要](companies/us-STEP/tearsheet.html) | [啟動報告](companies/us-STEP/initiation.html) | [風險](companies/us-STEP/risk_plan.html) |
| STWD | [摘要](companies/us-STWD/summary.html) | [公司摘要](companies/us-STWD/tearsheet.html) | [啟動報告](companies/us-STWD/initiation.html) | [風險](companies/us-STWD/risk_plan.html) |
| TEAM | [摘要](companies/us-TEAM/summary.html) | [公司摘要](companies/us-TEAM/tearsheet.html) | [啟動報告](companies/us-TEAM/initiation.html) | [風險](companies/us-TEAM/risk_plan.html) |
| TECK | [摘要](companies/us-TECK/summary.html) | [公司摘要](companies/us-TECK/tearsheet.html) | [啟動報告](companies/us-TECK/initiation.html) | [風險](companies/us-TECK/risk_plan.html) |
| TSM | [摘要](companies/us-TSM/summary.html) | [公司摘要](companies/us-TSM/tearsheet.html) | [啟動報告](companies/us-TSM/initiation.html) | [風險](companies/us-TSM/risk_plan.html) |
| TXN | [摘要](companies/us-TXN/summary.html) | [公司摘要](companies/us-TXN/tearsheet.html) | [啟動報告](companies/us-TXN/initiation.html) | [風險](companies/us-TXN/risk_plan.html) |
| UMC | [摘要](companies/us-UMC/summary.html) | [公司摘要](companies/us-UMC/tearsheet.html) | [啟動報告](companies/us-UMC/initiation.html) | [風險](companies/us-UMC/risk_plan.html) |
| VRT | [摘要](companies/us-VRT/summary.html) | [公司摘要](companies/us-VRT/tearsheet.html) | [啟動報告](companies/us-VRT/initiation.html) | [風險](companies/us-VRT/risk_plan.html) |
| VSAT | [摘要](companies/us-VSAT/summary.html) | [公司摘要](companies/us-VSAT/tearsheet.html) | [啟動報告](companies/us-VSAT/initiation.html) | [風險](companies/us-VSAT/risk_plan.html) |
| WMT | [摘要](companies/us-WMT/summary.html) | [公司摘要](companies/us-WMT/tearsheet.html) | [啟動報告](companies/us-WMT/initiation.html) | [風險](companies/us-WMT/risk_plan.html) |
| WYFI | [摘要](companies/us-WYFI/summary.html) | [公司摘要](companies/us-WYFI/tearsheet.html) | [啟動報告](companies/us-WYFI/initiation.html) | [風險](companies/us-WYFI/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
