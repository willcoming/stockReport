# StockLoop PEI 批次摘要 2026-07-07 - US K-line

- 產出時間：2026-07-08 06:51:30
- 標的池檔數：49
- 已具備目前價格與研究狀態的列數：49
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

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

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 49

## 風控狀態

- not_run（尚未完成 PM 風控/流動性/sizing gate）: 49

## 期限 underwrite

- partial（3M/12M/3Y underwrite 未完整）: 49

## Decision-ready gate

- 否: 49

## 下一步 PEI workflow

- investment_horizon_not_complete: 49
- official_validation_not_complete: 49
- research_status_not_complete: 49
- risk_status_not_complete: 49
- valuation_status_not_complete: 49

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EOG | EOG Resources | 現在可以買名單 | 134.54 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-EOG/summary.html) |
| INTU | Intuit Inc. - Common Stock | 現在可以買名單 | 281.17 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-INTU/summary.html) |
| PLD | Prologis | 現在可以買名單 | 143.61 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-PLD/summary.html) |
| SHEL | Shell PLC American Depositary Shares  Ordinary Shares) | 現在可以買名單 | 81.99 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-SHEL/summary.html) |
| UBER | Uber Technologies | 現在可以買名單 | 74.33 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-UBER/summary.html) |
| XOM | ExxonMobil Holdings Corporation Common Stock | 現在可以買名單 | 141.69 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-XOM/summary.html) |
| ADT | ADT Inc. Common Stock | 現在不能買，但值得等買點名單 | 6.91 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ADT/summary.html) |
| AES | The AES Corporation Common Stock | 現在不能買，但值得等買點名單 | 14.62 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AES/summary.html) |
| AR | Antero Resources Corporation Common Stock | 現在不能買，但值得等買點名單 | 35.24 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AR/summary.html) |
| AROC | Archrock | 現在不能買，但值得等買點名單 | 37.93 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AROC/summary.html) |
| BMY | Bristol-Myers Squibb Company Common Stock | 現在不能買，但值得等買點名單 | 57.97 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-BMY/summary.html) |
| BRX | Brixmor Property Group Inc. Common Stock | 現在不能買，但值得等買點名單 | 31.35 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-BRX/summary.html) |
| CME | CME Group Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 240.75 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CME/summary.html) |
| CMPS | COMPASS Pathways Plc - American Depository Shares | 現在不能買，但值得等買點名單 | 12.99 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CMPS/summary.html) |
| COLD | Americold Realty Trust | 現在不能買，但值得等買點名單 | 16.25 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-COLD/summary.html) |
| CPRI | Capri Holdings Limited Ordinary Shares | 現在不能買，但值得等買點名單 | 19.42 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CPRI/summary.html) |
| DLTR | Dollar Tree | 現在不能買，但值得等買點名單 | 122.65 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-DLTR/summary.html) |
| ENB | Enbridge Inc Common Stock | 現在不能買，但值得等買點名單 | 55.05 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ENB/summary.html) |
| EPD | Enterprise Products Partners L.P. Common Stock | 現在不能買，但值得等買點名單 | 37.64 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-EPD/summary.html) |
| EQNR | Equinor ASA | 現在不能買，但值得等買點名單 | 33.91 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-EQNR/summary.html) |
| EXE | Expand Energy Corporation - Common Stock | 現在不能買，但值得等買點名單 | 89.56 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-EXE/summary.html) |
| EXLS | ExlService Holdings | 現在不能買，但值得等買點名單 | 27.84 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-EXLS/summary.html) |
| FIG | Figma | 現在不能買，但值得等買點名單 | 22.19 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-FIG/summary.html) |
| GILD | Gilead Sciences | 現在不能買，但值得等買點名單 | 136.36 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-GILD/summary.html) |
| HPQ | HP Inc. Common Stock | 現在不能買，但值得等買點名單 | 22.96 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-HPQ/summary.html) |
| HRL | Hormel Foods Corporation Common Stock | 現在不能買，但值得等買點名單 | 24.7 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-HRL/summary.html) |
| INFY | Infosys Limited American Depositary Shares | 現在不能買，但值得等買點名單 | 11.27 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-INFY/summary.html) |
| IRDM | Iridium Communications Inc - Common Stock | 現在不能買，但值得等買點名單 | 51.09 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-IRDM/summary.html) |
| KMI | Kinder Morgan | 現在不能買，但值得等買點名單 | 32.49 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-KMI/summary.html) |
| KR | Kroger Company  Common Stock | 現在不能買，但值得等買點名單 | 58.54 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-KR/summary.html) |
| LKQ | LKQ Corporation - Common Stock | 現在不能買，但值得等買點名單 | 26.21 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-LKQ/summary.html) |
| META | Meta Platforms | 現在不能買，但值得等買點名單 | 615.58 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-META/summary.html) |
| NI | NiSource Inc Common Stock | 現在不能買，但值得等買點名單 | 47.49 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-NI/summary.html) |
| OKE | ONEOK | 現在不能買，但值得等買點名單 | 90.67 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-OKE/summary.html) |
| ORLY | O'Reilly Automotive | 現在不能買，但值得等買點名單 | 86.65 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ORLY/summary.html) |
| OVV | Ovintiv Inc. | 現在不能買，但值得等買點名單 | 54.97 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-OVV/summary.html) |
| PEGA | Pegasystems Inc. - Common Stock | 現在不能買，但值得等買點名單 | 32.21 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-PEGA/summary.html) |
| PPL | PPL Corporation Common Stock | 現在不能買，但值得等買點名單 | 36.39 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-PPL/summary.html) |
| PR | Permian Resources Corporation Class A Common Stock | 現在不能買，但值得等買點名單 | 19.09 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-PR/summary.html) |
| QSR | Restaurant Brands International Inc. Common Shares | 現在不能買，但值得等買點名單 | 73.94 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-QSR/summary.html) |
| ROL | Rollins | 現在不能買，但值得等買點名單 | 43.62 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ROL/summary.html) |
| RPRX | Royalty Pharma plc - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | 57.8 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-RPRX/summary.html) |
| RRC | Range Resources Corporation Common Stock | 現在不能買，但值得等買點名單 | 37.85 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-RRC/summary.html) |
| SHAK | Shake Shack | 現在不能買，但值得等買點名單 | 54.92 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SHAK/summary.html) |
| SNY | Sanofi - American Depositary Shares | 現在不能買，但值得等買點名單 | 42.98 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SNY/summary.html) |
| TGT | Target Corporation Common Stock | 現在不能買，但值得等買點名單 | 127.55 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TGT/summary.html) |
| TRP | TC Energy Corporation Common Stock | 現在不能買，但值得等買點名單 | 68.8 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TRP/summary.html) |
| VFC | V.F. Corporation Common Stock | 現在不能買，但值得等買點名單 | 16.45 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-VFC/summary.html) |
| WMG | Warner Music Group Corp. - Class A Common Stock | 現在不能買，但值得等買點名單 | 28.44 USD | 2026-07-07 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-WMG/summary.html) |
