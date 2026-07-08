# StockLoop PEI 完整批次報告 2026-07-08 - US K-line

- 產出時間：2026-07-09 06:49:20
- 標的池檔數：40
- 已具備目前價格與研究狀態的列數：40
- Decision-ready 檔數：0
- 來源報告：reports/usStock/2026-07-08_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 40 檔標的；來源為 reports/usStock/2026-07-08_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：40 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：4 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：28 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：8 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：40 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：40 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | us | 40 |
| 分類 | 現在可以買名單 | 12 |
| 分類 | 現在不能買，但值得等買點名單 | 28 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 4 |
| 研究標籤 | Wait for trigger（等待觸發） | 28 |
| 研究標籤 | Watch only（僅觀察） | 8 |
| 研究狀態 | partial（證據仍不足） | 40 |
| 估值狀態 | not_run（本流程未執行估值模型） | 40 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 40 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 40 |
| 決策就緒 | 否 | 40 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 40 |
| official_validation_not_complete | 40 |
| research_status_not_complete | 40 |
| risk_status_not_complete | 40 |
| valuation_status_not_complete | 40 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- local K-line close used as stale fallback, not decision-ready market data.
- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 估值 handoff 缺失：valuation multiples missing
- 價格來源限制：External Yahoo/Stooq quote fetch blocked
- 官方公司/證券身分驗證未完成
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：缺少公司級官方營收、訂單、財報或法說支撐
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=炒作或擁擠交易風險偏高；炒作風險=高
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKAM | Akamai Technologies | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 126.57 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-AKAM/summary.html) | [風險](companies/us-AKAM/risk_plan.html) | [啟動報告](companies/us-AKAM/initiation.html) |
| BABA | Alibaba Group Holding Limited American Depositary Shares each representing eight Ordinary share | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 108.98 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-BABA/summary.html) | [風險](companies/us-BABA/risk_plan.html) | [啟動報告](companies/us-BABA/initiation.html) |
| CNQ | Canadian Natural Resources Limited Common Stock | 現在可以買名單 | Watch only（僅觀察） | 42.43 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-CNQ/summary.html) | [風險](companies/us-CNQ/risk_plan.html) | [啟動報告](companies/us-CNQ/initiation.html) |
| COP | ConocoPhillips Common Stock | 現在可以買名單 | Watch only（僅觀察） | 110.72 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-COP/summary.html) | [風險](companies/us-COP/risk_plan.html) | [啟動報告](companies/us-COP/initiation.html) |
| CRDO | Credo Technology Group Holding Ltd - Ordinary Shares | 現在可以買名單 | Watch only（僅觀察） | 258.69 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-CRDO/summary.html) | [風險](companies/us-CRDO/risk_plan.html) | [啟動報告](companies/us-CRDO/initiation.html) |
| DVN | Devon Energy Corporation Common Stock | 現在可以買名單 | Watch only（僅觀察） | 43.31 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-DVN/summary.html) | [風險](companies/us-DVN/risk_plan.html) | [啟動報告](companies/us-DVN/initiation.html) |
| FANG | Diamondback Energy | 現在可以買名單 | Watch only（僅觀察） | 186.6 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-FANG/summary.html) | [風險](companies/us-FANG/risk_plan.html) | [啟動報告](companies/us-FANG/initiation.html) |
| NVDA | NVIDIA Corporation - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 204.12 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-NVDA/summary.html) | [風險](companies/us-NVDA/risk_plan.html) | [啟動報告](companies/us-NVDA/initiation.html) |
| PBR | Petroleo Brasileiro S.A. Petrobras ADS | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 17.24 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-PBR/summary.html) | [風險](companies/us-PBR/risk_plan.html) | [啟動報告](companies/us-PBR/initiation.html) |
| RIVN | Rivian Automotive | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 16.66 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-RIVN/summary.html) | [風險](companies/us-RIVN/risk_plan.html) | [啟動報告](companies/us-RIVN/initiation.html) |
| SU | Suncor Energy Inc. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 59.06 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-SU/summary.html) | [風險](companies/us-SU/risk_plan.html) | [啟動報告](companies/us-SU/initiation.html) |
| TXN | Texas Instruments Incorporated - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 301.32 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-TXN/summary.html) | [風險](companies/us-TXN/risk_plan.html) | [啟動報告](companies/us-TXN/initiation.html) |
| ANET | Arista Networks | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 181.05 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ANET/summary.html) | [風險](companies/us-ANET/risk_plan.html) | [啟動報告](companies/us-ANET/initiation.html) |
| APA | APA Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.06 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-APA/summary.html) | [風險](companies/us-APA/risk_plan.html) | [啟動報告](companies/us-APA/initiation.html) |
| AVGO | Broadcom Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 388.69 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AVGO/summary.html) | [風險](companies/us-AVGO/risk_plan.html) | [啟動報告](companies/us-AVGO/initiation.html) |
| BIDU | Baidu | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 117.62 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BIDU/summary.html) | [風險](companies/us-BIDU/risk_plan.html) | [啟動報告](companies/us-BIDU/initiation.html) |
| BOX | Box | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 28.88 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BOX/summary.html) | [風險](companies/us-BOX/risk_plan.html) | [啟動報告](companies/us-BOX/initiation.html) |
| CHWY | Chewy | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 20.56 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CHWY/summary.html) | [風險](companies/us-CHWY/risk_plan.html) | [啟動報告](companies/us-CHWY/initiation.html) |
| CME | CME Group Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 243.07 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CME/summary.html) | [風險](companies/us-CME/risk_plan.html) | [啟動報告](companies/us-CME/initiation.html) |
| CVE | Cenovus Energy Inc Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 26.63 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CVE/summary.html) | [風險](companies/us-CVE/risk_plan.html) | [啟動報告](companies/us-CVE/initiation.html) |
| CVX | Chevron Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 175.97 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CVX/summary.html) | [風險](companies/us-CVX/risk_plan.html) | [啟動報告](companies/us-CVX/initiation.html) |
| DBX | Dropbox | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 28.83 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-DBX/summary.html) | [風險](companies/us-DBX/risk_plan.html) | [啟動報告](companies/us-DBX/initiation.html) |
| DKNG | DraftKings Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 27.17 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-DKNG/summary.html) | [風險](companies/us-DKNG/risk_plan.html) | [啟動報告](companies/us-DKNG/initiation.html) |
| DOCN | DigitalOcean Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 140.47 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-DOCN/summary.html) | [風險](companies/us-DOCN/risk_plan.html) | [啟動報告](companies/us-DOCN/initiation.html) |
| EXE | Expand Energy Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 90.1 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-EXE/summary.html) | [風險](companies/us-EXE/risk_plan.html) | [啟動報告](companies/us-EXE/initiation.html) |
| GDS | GDS Holdings Limited - American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 32.82 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GDS/summary.html) | [風險](companies/us-GDS/risk_plan.html) | [啟動報告](companies/us-GDS/initiation.html) |
| HPQ | HP Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 23.78 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-HPQ/summary.html) | [風險](companies/us-HPQ/risk_plan.html) | [啟動報告](companies/us-HPQ/initiation.html) |
| HUT | Hut 8 Corp. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 106.11 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-HUT/summary.html) | [風險](companies/us-HUT/risk_plan.html) | [啟動報告](companies/us-HUT/initiation.html) |
| JD | JD.com | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 27.63 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-JD/summary.html) | [風險](companies/us-JD/risk_plan.html) | [啟動報告](companies/us-JD/initiation.html) |
| KLAC | KLA Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 221.18 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-KLAC/summary.html) | [風險](companies/us-KLAC/risk_plan.html) | [啟動報告](companies/us-KLAC/initiation.html) |
| KVYO | Klaviyo | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.6 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-KVYO/summary.html) | [風險](companies/us-KVYO/risk_plan.html) | [啟動報告](companies/us-KVYO/initiation.html) |
| NBIS | Nebius Group N.V. - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 216.48 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-NBIS/summary.html) | [風險](companies/us-NBIS/risk_plan.html) | [啟動報告](companies/us-NBIS/initiation.html) |
| NTSK | Netskope | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 11.92 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-NTSK/summary.html) | [風險](companies/us-NTSK/risk_plan.html) | [啟動報告](companies/us-NTSK/initiation.html) |
| NXPI | NXP Semiconductors N.V. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 283.81 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-NXPI/summary.html) | [風險](companies/us-NXPI/risk_plan.html) | [啟動報告](companies/us-NXPI/initiation.html) |
| OXY | Occidental Petroleum Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 53.59 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-OXY/summary.html) | [風險](companies/us-OXY/risk_plan.html) | [啟動報告](companies/us-OXY/initiation.html) |
| SHOP | Shopify Inc. - Class A Subordinate Voting Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 119.22 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SHOP/summary.html) | [風險](companies/us-SHOP/risk_plan.html) | [啟動報告](companies/us-SHOP/initiation.html) |
| SM | SM Energy Company Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 29.11 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SM/summary.html) | [風險](companies/us-SM/risk_plan.html) | [啟動報告](companies/us-SM/initiation.html) |
| TSCO | Tractor Supply Company - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 29.58 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TSCO/summary.html) | [風險](companies/us-TSCO/risk_plan.html) | [啟動報告](companies/us-TSCO/initiation.html) |
| UCTT | Ultra Clean Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 100.91 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-UCTT/summary.html) | [風險](companies/us-UCTT/risk_plan.html) | [啟動報告](companies/us-UCTT/initiation.html) |
| WYFI | WhiteFiber | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 36.74 USD | 2026-07-08 | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-WYFI/summary.html) | [風險](companies/us-WYFI/risk_plan.html) | [啟動報告](companies/us-WYFI/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| AKAM | [摘要](companies/us-AKAM/summary.html) | [公司摘要](companies/us-AKAM/tearsheet.html) | [啟動報告](companies/us-AKAM/initiation.html) | [風險](companies/us-AKAM/risk_plan.html) |
| BABA | [摘要](companies/us-BABA/summary.html) | [公司摘要](companies/us-BABA/tearsheet.html) | [啟動報告](companies/us-BABA/initiation.html) | [風險](companies/us-BABA/risk_plan.html) |
| CNQ | [摘要](companies/us-CNQ/summary.html) | [公司摘要](companies/us-CNQ/tearsheet.html) | [啟動報告](companies/us-CNQ/initiation.html) | [風險](companies/us-CNQ/risk_plan.html) |
| COP | [摘要](companies/us-COP/summary.html) | [公司摘要](companies/us-COP/tearsheet.html) | [啟動報告](companies/us-COP/initiation.html) | [風險](companies/us-COP/risk_plan.html) |
| CRDO | [摘要](companies/us-CRDO/summary.html) | [公司摘要](companies/us-CRDO/tearsheet.html) | [啟動報告](companies/us-CRDO/initiation.html) | [風險](companies/us-CRDO/risk_plan.html) |
| DVN | [摘要](companies/us-DVN/summary.html) | [公司摘要](companies/us-DVN/tearsheet.html) | [啟動報告](companies/us-DVN/initiation.html) | [風險](companies/us-DVN/risk_plan.html) |
| FANG | [摘要](companies/us-FANG/summary.html) | [公司摘要](companies/us-FANG/tearsheet.html) | [啟動報告](companies/us-FANG/initiation.html) | [風險](companies/us-FANG/risk_plan.html) |
| NVDA | [摘要](companies/us-NVDA/summary.html) | [公司摘要](companies/us-NVDA/tearsheet.html) | [啟動報告](companies/us-NVDA/initiation.html) | [風險](companies/us-NVDA/risk_plan.html) |
| PBR | [摘要](companies/us-PBR/summary.html) | [公司摘要](companies/us-PBR/tearsheet.html) | [啟動報告](companies/us-PBR/initiation.html) | [風險](companies/us-PBR/risk_plan.html) |
| RIVN | [摘要](companies/us-RIVN/summary.html) | [公司摘要](companies/us-RIVN/tearsheet.html) | [啟動報告](companies/us-RIVN/initiation.html) | [風險](companies/us-RIVN/risk_plan.html) |
| SU | [摘要](companies/us-SU/summary.html) | [公司摘要](companies/us-SU/tearsheet.html) | [啟動報告](companies/us-SU/initiation.html) | [風險](companies/us-SU/risk_plan.html) |
| TXN | [摘要](companies/us-TXN/summary.html) | [公司摘要](companies/us-TXN/tearsheet.html) | [啟動報告](companies/us-TXN/initiation.html) | [風險](companies/us-TXN/risk_plan.html) |
| ANET | [摘要](companies/us-ANET/summary.html) | [公司摘要](companies/us-ANET/tearsheet.html) | [啟動報告](companies/us-ANET/initiation.html) | [風險](companies/us-ANET/risk_plan.html) |
| APA | [摘要](companies/us-APA/summary.html) | [公司摘要](companies/us-APA/tearsheet.html) | [啟動報告](companies/us-APA/initiation.html) | [風險](companies/us-APA/risk_plan.html) |
| AVGO | [摘要](companies/us-AVGO/summary.html) | [公司摘要](companies/us-AVGO/tearsheet.html) | [啟動報告](companies/us-AVGO/initiation.html) | [風險](companies/us-AVGO/risk_plan.html) |
| BIDU | [摘要](companies/us-BIDU/summary.html) | [公司摘要](companies/us-BIDU/tearsheet.html) | [啟動報告](companies/us-BIDU/initiation.html) | [風險](companies/us-BIDU/risk_plan.html) |
| BOX | [摘要](companies/us-BOX/summary.html) | [公司摘要](companies/us-BOX/tearsheet.html) | [啟動報告](companies/us-BOX/initiation.html) | [風險](companies/us-BOX/risk_plan.html) |
| CHWY | [摘要](companies/us-CHWY/summary.html) | [公司摘要](companies/us-CHWY/tearsheet.html) | [啟動報告](companies/us-CHWY/initiation.html) | [風險](companies/us-CHWY/risk_plan.html) |
| CME | [摘要](companies/us-CME/summary.html) | [公司摘要](companies/us-CME/tearsheet.html) | [啟動報告](companies/us-CME/initiation.html) | [風險](companies/us-CME/risk_plan.html) |
| CVE | [摘要](companies/us-CVE/summary.html) | [公司摘要](companies/us-CVE/tearsheet.html) | [啟動報告](companies/us-CVE/initiation.html) | [風險](companies/us-CVE/risk_plan.html) |
| CVX | [摘要](companies/us-CVX/summary.html) | [公司摘要](companies/us-CVX/tearsheet.html) | [啟動報告](companies/us-CVX/initiation.html) | [風險](companies/us-CVX/risk_plan.html) |
| DBX | [摘要](companies/us-DBX/summary.html) | [公司摘要](companies/us-DBX/tearsheet.html) | [啟動報告](companies/us-DBX/initiation.html) | [風險](companies/us-DBX/risk_plan.html) |
| DKNG | [摘要](companies/us-DKNG/summary.html) | [公司摘要](companies/us-DKNG/tearsheet.html) | [啟動報告](companies/us-DKNG/initiation.html) | [風險](companies/us-DKNG/risk_plan.html) |
| DOCN | [摘要](companies/us-DOCN/summary.html) | [公司摘要](companies/us-DOCN/tearsheet.html) | [啟動報告](companies/us-DOCN/initiation.html) | [風險](companies/us-DOCN/risk_plan.html) |
| EXE | [摘要](companies/us-EXE/summary.html) | [公司摘要](companies/us-EXE/tearsheet.html) | [啟動報告](companies/us-EXE/initiation.html) | [風險](companies/us-EXE/risk_plan.html) |
| GDS | [摘要](companies/us-GDS/summary.html) | [公司摘要](companies/us-GDS/tearsheet.html) | [啟動報告](companies/us-GDS/initiation.html) | [風險](companies/us-GDS/risk_plan.html) |
| HPQ | [摘要](companies/us-HPQ/summary.html) | [公司摘要](companies/us-HPQ/tearsheet.html) | [啟動報告](companies/us-HPQ/initiation.html) | [風險](companies/us-HPQ/risk_plan.html) |
| HUT | [摘要](companies/us-HUT/summary.html) | [公司摘要](companies/us-HUT/tearsheet.html) | [啟動報告](companies/us-HUT/initiation.html) | [風險](companies/us-HUT/risk_plan.html) |
| JD | [摘要](companies/us-JD/summary.html) | [公司摘要](companies/us-JD/tearsheet.html) | [啟動報告](companies/us-JD/initiation.html) | [風險](companies/us-JD/risk_plan.html) |
| KLAC | [摘要](companies/us-KLAC/summary.html) | [公司摘要](companies/us-KLAC/tearsheet.html) | [啟動報告](companies/us-KLAC/initiation.html) | [風險](companies/us-KLAC/risk_plan.html) |
| KVYO | [摘要](companies/us-KVYO/summary.html) | [公司摘要](companies/us-KVYO/tearsheet.html) | [啟動報告](companies/us-KVYO/initiation.html) | [風險](companies/us-KVYO/risk_plan.html) |
| NBIS | [摘要](companies/us-NBIS/summary.html) | [公司摘要](companies/us-NBIS/tearsheet.html) | [啟動報告](companies/us-NBIS/initiation.html) | [風險](companies/us-NBIS/risk_plan.html) |
| NTSK | [摘要](companies/us-NTSK/summary.html) | [公司摘要](companies/us-NTSK/tearsheet.html) | [啟動報告](companies/us-NTSK/initiation.html) | [風險](companies/us-NTSK/risk_plan.html) |
| NXPI | [摘要](companies/us-NXPI/summary.html) | [公司摘要](companies/us-NXPI/tearsheet.html) | [啟動報告](companies/us-NXPI/initiation.html) | [風險](companies/us-NXPI/risk_plan.html) |
| OXY | [摘要](companies/us-OXY/summary.html) | [公司摘要](companies/us-OXY/tearsheet.html) | [啟動報告](companies/us-OXY/initiation.html) | [風險](companies/us-OXY/risk_plan.html) |
| SHOP | [摘要](companies/us-SHOP/summary.html) | [公司摘要](companies/us-SHOP/tearsheet.html) | [啟動報告](companies/us-SHOP/initiation.html) | [風險](companies/us-SHOP/risk_plan.html) |
| SM | [摘要](companies/us-SM/summary.html) | [公司摘要](companies/us-SM/tearsheet.html) | [啟動報告](companies/us-SM/initiation.html) | [風險](companies/us-SM/risk_plan.html) |
| TSCO | [摘要](companies/us-TSCO/summary.html) | [公司摘要](companies/us-TSCO/tearsheet.html) | [啟動報告](companies/us-TSCO/initiation.html) | [風險](companies/us-TSCO/risk_plan.html) |
| UCTT | [摘要](companies/us-UCTT/summary.html) | [公司摘要](companies/us-UCTT/tearsheet.html) | [啟動報告](companies/us-UCTT/initiation.html) | [風險](companies/us-UCTT/risk_plan.html) |
| WYFI | [摘要](companies/us-WYFI/summary.html) | [公司摘要](companies/us-WYFI/tearsheet.html) | [啟動報告](companies/us-WYFI/initiation.html) | [風險](companies/us-WYFI/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
