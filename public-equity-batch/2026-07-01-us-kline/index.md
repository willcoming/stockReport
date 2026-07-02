# StockLoop PEI 批次摘要 2026-07-01 - US K-line

- 產出時間：2026-07-02 06:51:50
- 標的池檔數：61
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 61 檔標的；來源為 reports/usStock/2026-07-01_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：61 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：61 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- 研究狀態 partial（證據仍不足）：61 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：61 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 61

## 風控狀態

- not_run（尚未完成 PM 風控/流動性/sizing gate）: 61

## 期限 underwrite

- partial（3M/12M/3Y underwrite 未完整）: 61

## Decision-ready gate

- 否: 61

## 下一步 PEI workflow

- investment_horizon_not_complete: 61
- market_data_not_complete: 61
- official_validation_not_complete: 61
- research_status_not_complete: 61
- risk_status_not_complete: 61
- valuation_status_not_complete: 61

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CELH | Celsius Holdings | 現在可以買名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-CELH/summary.html) |
| GOOG | Alphabet Inc. - Class C Capital Stock | 現在可以買名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-GOOG/summary.html) |
| IBKR | Interactive Brokers Group | 現在可以買名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-IBKR/summary.html) |
| NKE | Nike | 現在可以買名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-NKE/summary.html) |
| NOW | ServiceNow | 現在可以買名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-NOW/summary.html) |
| PDD | PDD Holdings Inc. - American Depositary Shares | 現在可以買名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-PDD/summary.html) |
| PLTR | Palantir Technologies Inc. - Class A Common Stock | 現在可以買名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-PLTR/summary.html) |
| SPGI | S&P Global Inc. Common Stock | 現在可以買名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-SPGI/summary.html) |
| WDAY | Workday | 現在可以買名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-WDAY/summary.html) |
| AAPL | Apple Inc. - Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-AAPL/summary.html) |
| ADT | ADT Inc. Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-ADT/summary.html) |
| AIG | American International Group | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-AIG/summary.html) |
| BIDU | Baidu | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-BIDU/summary.html) |
| BNY | The Bank of New York Mellon Corporation Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-BNY/summary.html) |
| BSY | Bentley Systems | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-BSY/summary.html) |
| BULL | Webull Corporation - Class A Ordinary Shares | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-BULL/summary.html) |
| BX | Blackstone Inc. Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-BX/summary.html) |
| CAG | ConAgra Brands | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-CAG/summary.html) |
| CAI | Caris Life Sciences | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-CAI/summary.html) |
| COIN | Coinbase Global | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-COIN/summary.html) |
| CVNA | Carvana Co. Class A Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-CVNA/summary.html) |
| DAR | Darling Ingredients Inc. Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-DAR/summary.html) |
| DKNG | DraftKings Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-DKNG/summary.html) |
| DOCU | DocuSign | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-DOCU/summary.html) |
| DXCM | DexCom | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-DXCM/summary.html) |
| FIG | Figma | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-FIG/summary.html) |
| FIS | Fidelity National Information Services | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-FIS/summary.html) |
| FISV | Fiserv | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-FISV/summary.html) |
| FTI | TechnipFMC plc Ordinary Share | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-FTI/summary.html) |
| GEHC | GE HealthCare Technologies Inc. - Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-GEHC/summary.html) |
| GIS | General Mills | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-GIS/summary.html) |
| GOOGL | Alphabet Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-GOOGL/summary.html) |
| HTFL | Heartflow | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-HTFL/summary.html) |
| IVZ | Invesco Ltd Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-IVZ/summary.html) |
| KD | Kyndryl Holdings | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-KD/summary.html) |
| KHC | The Kraft Heinz Company - Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-KHC/summary.html) |
| KRMN | Karman Holdings Inc. Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-KRMN/summary.html) |
| M | Macy's Inc Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-M/summary.html) |
| MET | MetLife | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-MET/summary.html) |
| META | Meta Platforms | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-META/summary.html) |
| MUFG | Mitsubishi UFJ Financial Group | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-MUFG/summary.html) |
| NTAP | NetApp | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-NTAP/summary.html) |
| NWS | News Corporation - Class B Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-NWS/summary.html) |
| NWSA | News Corporation - Class A Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-NWSA/summary.html) |
| OMC | Omnicom Group Inc. Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-OMC/summary.html) |
| PG | Procter & Gamble Company  Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-PG/summary.html) |
| PSKY | Paramount Skydance Corporation - Class B Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-PSKY/summary.html) |
| SBRA | Sabra Health Care REIT | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-SBRA/summary.html) |
| SHLS | Shoals Technologies Group | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-SHLS/summary.html) |
| SHOP | Shopify Inc. - Class A Subordinate Voting Shares | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-SHOP/summary.html) |
| SMFG | Sumitomo Mitsui Financial Group Inc Unsponsored American Depositary Shares | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-SMFG/summary.html) |
| SSRM | SSR Mining Inc. - Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-SSRM/summary.html) |
| TRMB | Trimble Inc. - Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-TRMB/summary.html) |
| TTD | The Trade Desk | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-TTD/summary.html) |
| UBER | Uber Technologies | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-UBER/summary.html) |
| VIPS | Vipshop Holdings Limited American Depositary Shares | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-VIPS/summary.html) |
| VNET | VNET Group | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-VNET/summary.html) |
| VRSK | Verisk Analytics | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-VRSK/summary.html) |
| VTRS | Viatris Inc. - Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-VTRS/summary.html) |
| XRAY | DENTSPLY SIRONA Inc. - Common Stock | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-XRAY/summary.html) |
| Z | Zillow Group | 現在不能買，但值得等買點名單 |  USD |  | 否 | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-Z/summary.html) |
