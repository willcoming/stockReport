# StockLoop PEI 批次摘要 2026-07-06 - US K-line

- 產出時間：2026-07-07 06:44:44
- 標的池檔數：59
- 已具備目前價格與研究狀態的列數：59
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

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

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 59

## 風控狀態

- not_run（尚未完成 PM 風控/流動性/sizing gate）: 59

## 期限 underwrite

- partial（3M/12M/3Y underwrite 未完整）: 59

## Decision-ready gate

- 否: 59

## 下一步 PEI workflow

- investment_horizon_not_complete: 59
- official_validation_not_complete: 58
- research_status_not_complete: 59
- risk_status_not_complete: 59
- valuation_status_not_complete: 59

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANET | Arista Networks | 現在可以買名單 | 173.28 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-ANET/summary.html) |
| ARES | Ares Management Corporation Class A Common Stock | 現在可以買名單 | 121.83 USD | 2026-07-06T20:01:29Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-ARES/summary.html) |
| BMNR | BitMine Immersion Technologies | 現在可以買名單 | 15.55 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-BMNR/summary.html) |
| GOOG | Alphabet Inc. - Class C Capital Stock | 現在可以買名單 | 364.9 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-GOOG/summary.html) |
| ICE | Intercontinental Exchange Inc. Common Stock | 現在可以買名單 | 134.91 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-ICE/summary.html) |
| NTAP | NetApp | 現在可以買名單 | 163.55 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-NTAP/summary.html) |
| TMUS | T-Mobile US | 現在可以買名單 | 181.79 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-TMUS/summary.html) |
| TSLA | Tesla | 現在可以買名單 | 419.77 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-TSLA/summary.html) |
| VST | Vistra Corp. Common Stock | 現在可以買名單 | 157.22 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-VST/summary.html) |
| ACHR | Archer Aviation Inc. Class A Common Stock | 現在不能買，但值得等買點名單 | 5.37 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ACHR/summary.html) |
| ADM | Archer-Daniels-Midland Company Common Stock | 現在不能買，但值得等買點名單 | 77.93 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ADM/summary.html) |
| AEO | American Eagle Outfitters | 現在不能買，但值得等買點名單 | 16.5 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AEO/summary.html) |
| ALAB | Astera Labs | 現在不能買，但值得等買點名單 | 432.74 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ALAB/summary.html) |
| AMD | Advanced Micro Devices | 現在不能買，但值得等買點名單 | 552.05 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AMD/summary.html) |
| APG | APi Group Corporation Common Stock | 現在不能買，但值得等買點名單 | 42.83 USD | 2026-07-06T20:01:32Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-APG/summary.html) |
| ARR | ARMOUR Residential REIT | 現在不能買，但值得等買點名單 | 17.18 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ARR/summary.html) |
| ASX | ASE Technology Holding Co. | 現在不能買，但值得等買點名單 | 43.32 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ASX/summary.html) |
| BE | Bloom Energy Corporation Class A Common Stock | 現在不能買，但值得等買點名單 | 295.05 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-BE/summary.html) |
| BN | Brookfield Corporation Class A Limited Voting Shares | 現在不能買，但值得等買點名單 | 43.96 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-BN/summary.html) |
| CG | The Carlyle Group Inc. - Common Stock | 現在不能買，但值得等買點名單 | 44.04 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CG/summary.html) |
| COST | Costco Wholesale Corporation - Common Stock | 現在不能買，但值得等買點名單 | 950.25 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-COST/summary.html) |
| CRDO | Credo Technology Group Holding Ltd - Ordinary Shares | 現在不能買，但值得等買點名單 | 265.55 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CRDO/summary.html) |
| DELL | Dell Technologies Inc. Class C Common Stock | 現在不能買，但值得等買點名單 | 411.8 USD | 2026-07-06T20:03:52Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-DELL/summary.html) |
| EPD | Enterprise Products Partners L.P. Common Stock | 現在不能買，但值得等買點名單 | 36.47 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-EPD/summary.html) |
| F | Ford Motor Company Common Stock | 現在不能買，但值得等買點名單 | 13.83 USD | 2026-07-06T20:02:28Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-F/summary.html) |
| FLG | Flagstar Bank | 現在不能買，但值得等買點名單 | 14.84 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-FLG/summary.html) |
| FRMI | Fermi Inc. - Common Stock | 現在不能買，但值得等買點名單 | 8.21 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-FRMI/summary.html) |
| FTI | TechnipFMC plc Ordinary Share | 現在不能買，但值得等買點名單 | 67.26 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-FTI/summary.html) |
| GFL | GFL Environmental Inc. Subordinate voting shares | 現在不能買，但值得等買點名單 | 40.49 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-GFL/summary.html) |
| HUT | Hut 8 Corp. - Common Stock | 現在不能買，但值得等買點名單 | 103.78 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-HUT/summary.html) |
| INTC | Intel Corporation - Common Stock | 現在不能買，但值得等買點名單 | 122.2 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-INTC/summary.html) |
| IVZ | Invesco Ltd Common Stock | 現在不能買，但值得等買點名單 | 27.83 USD | 2026-07-06T20:02:26Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-IVZ/summary.html) |
| KKR | KKR & Co. Inc. Common Stock | 現在不能買，但值得等買點名單 | 95.97 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-KKR/summary.html) |
| LCID | Lucid Group | 現在不能買，但值得等買點名單 | 6.66 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-LCID/summary.html) |
| LEVI | Levi Strauss & Co Class A Common Stock | 現在不能買，但值得等買點名單 | 24.68 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-LEVI/summary.html) |
| MARA | MARA Holdings | 現在不能買，但值得等買點名單 | 12.95 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MARA/summary.html) |
| MXL | MaxLinear | 現在不能買，但值得等買點名單 | 95.68 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MXL/summary.html) |
| OPEN | Opendoor Technologies Inc - Common Stock | 現在不能買，但值得等買點名單 | 5.09 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-OPEN/summary.html) |
| OWL | Blue Owl Capital Inc. Class A Common Stock | 現在不能買，但值得等買點名單 | 9.49 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-OWL/summary.html) |
| PENG | Penguin Solutions | 現在不能買，但值得等買點名單 | 67.71 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-PENG/summary.html) |
| PURR | Hyperliquid Strategies Inc - Common Stock | 現在不能買，但值得等買點名單 | 8.82 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-PURR/summary.html) |
| RELX | RELX PLC PLC American Depositary Shares | 現在不能買，但值得等買點名單 | 32.27 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-RELX/summary.html) |
| RXT | Rackspace Technology | 現在不能買，但值得等買點名單 | 6.42 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-RXT/summary.html) |
| SEDG | SolarEdge Technologies | 現在不能買，但值得等買點名單 | 56.91 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SEDG/summary.html) |
| SHAZ | SharonAI Holdings | 現在不能買，但值得等買點名單 | 79.96 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SHAZ/summary.html) |
| SHLS | Shoals Technologies Group | 現在不能買，但值得等買點名單 | 10.58 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SHLS/summary.html) |
| SMTC | Semtech Corporation - Common Stock | 現在不能買，但值得等買點名單 | 138.89 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SMTC/summary.html) |
| SOUN | SoundHound AI | 現在不能買，但值得等買點名單 | 6.96 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SOUN/summary.html) |
| STEP | StepStone Group Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 43.95 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-STEP/summary.html) |
| STWD | STARWOOD PROPERTY TRUST | 現在不能買，但值得等買點名單 | 16.71 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-STWD/summary.html) |
| TEAM | Atlassian Corporation - Class A Common Stock | 現在不能買，但值得等買點名單 | 85.5 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TEAM/summary.html) |
| TECK | Teck Resources Ltd Ordinary Shares | 現在不能買，但值得等買點名單 | 61.45 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TECK/summary.html) |
| TSM | Taiwan Semiconductor Manufacturing Company Ltd. | 現在不能買，但值得等買點名單 | 451.79 USD | 2026-07-06T20:00:02Z | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TSM/summary.html) |
| TXN | Texas Instruments Incorporated - Common Stock | 現在不能買，但值得等買點名單 | 303.5 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TXN/summary.html) |
| UMC | United Microelectronics Corporation  Common Stock | 現在不能買，但值得等買點名單 | 25.83 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-UMC/summary.html) |
| VRT | Vertiv Holdings | 現在不能買，但值得等買點名單 | 318.47 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-VRT/summary.html) |
| VSAT | ViaSat | 現在不能買，但值得等買點名單 | 83.8 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-VSAT/summary.html) |
| WMT | Walmart Inc. - Common Stock | 現在不能買，但值得等買點名單 | 110.65 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-WMT/summary.html) |
| WYFI | WhiteFiber | 現在不能買，但值得等買點名單 | 35.54 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-WYFI/summary.html) |
