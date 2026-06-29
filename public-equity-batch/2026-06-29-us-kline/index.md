# StockLoop PEI 批次摘要 2026-06-29 - US K-line

- 產出時間：2026-06-30 06:52:20
- 標的池檔數：45
- 已具備目前價格與研究狀態的列數：45
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

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

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 45

## 風控狀態

- not_run（尚未完成 PM 風控/流動性/sizing gate）: 45

## 期限 underwrite

- partial（3M/12M/3Y underwrite 未完整）: 45

## Decision-ready gate

- 否: 45

## 下一步 PEI workflow

- investment_horizon_not_complete: 45
- official_validation_not_complete: 45
- research_status_not_complete: 45
- risk_status_not_complete: 45
- valuation_status_not_complete: 45

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AMKR | Amkor Technology | 現在可以買名單 | 82.34 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-AMKR/summary.html) |
| ANET | Arista Networks | 現在可以買名單 | 164.1 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-ANET/summary.html) |
| APP | Applovin Corporation - Class A Common Stock | 現在可以買名單 | 498.76 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-APP/summary.html) |
| FLEX | Flex Ltd. - Ordinary Shares | 現在可以買名單 | 159.56 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-FLEX/summary.html) |
| FORM | FormFactor | 現在可以買名單 | 144.17 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-FORM/summary.html) |
| IRDM | Iridium Communications Inc - Common Stock | 現在可以買名單 | 54.59 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-IRDM/summary.html) |
| LSCC | Lattice Semiconductor Corporation - Common Stock | 現在可以買名單 | 146.78 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-LSCC/summary.html) |
| MDB | MongoDB | 現在可以買名單 | 338.18 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-MDB/summary.html) |
| MRVL | Marvell Technology | 現在可以買名單 | 277.75 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-MRVL/summary.html) |
| NBIS | Nebius Group N.V. - Class A Ordinary Shares | 現在可以買名單 | 261.15 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-NBIS/summary.html) |
| STM | STMicroelectronics N.V. Common Stock | 現在可以買名單 | 74.79 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-STM/summary.html) |
| STX | Seagate Technology Holdings PLC - Ordinary Shares | 現在可以買名單 | 968.53 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-STX/summary.html) |
| TSLA | Tesla | 現在可以買名單 | 411.84 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-TSLA/summary.html) |
| WBD | Warner Bros. Discovery | 現在可以買名單 | 27.13 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-WBD/summary.html) |
| WDC | Western Digital Corporation - Common Stock | 現在可以買名單 | 651.88 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-WDC/summary.html) |
| ASTS | AST SpaceMobile | 現在不能買，但值得等買點名單 | 86.77 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ASTS/summary.html) |
| AUR | Aurora Innovation | 現在不能買，但值得等買點名單 | 6.62 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AUR/summary.html) |
| BE | Bloom Energy Corporation Class A Common Stock | 現在不能買，但值得等買點名單 | 275.01 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-BE/summary.html) |
| CHTR | Charter Communications | 現在不能買，但值得等買點名單 | 146.17 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CHTR/summary.html) |
| CHWY | Chewy | 現在不能買，但值得等買點名單 | 19.42 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CHWY/summary.html) |
| CMCSA | Comcast Corporation - Class A Common Stock | 現在不能買，但值得等買點名單 | 24.22 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CMCSA/summary.html) |
| COHR | Coherent Corp. Common Stock | 現在不能買，但值得等買點名單 | 391.22 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-COHR/summary.html) |
| FDX | FedEx Corporation Common Stock | 現在不能買，但值得等買點名單 | 325.4 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-FDX/summary.html) |
| FSLY | Fastly | 現在不能買，但值得等買點名單 | 18 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-FSLY/summary.html) |
| HTHT | H World Group Limited - American Depositary Shares | 現在不能買，但值得等買點名單 | 43.27 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-HTHT/summary.html) |
| IBM | International Business Machines Corporation Common Stock | 現在不能買，但值得等買點名單 | 278 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-IBM/summary.html) |
| IONQ | IonQ | 現在不能買，但值得等買點名單 | 53.88 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-IONQ/summary.html) |
| IOT | Samsara Inc. Class A Common Stock | 現在不能買，但值得等買點名單 | 32.1 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-IOT/summary.html) |
| JCI | Johnson Controls International plc Ordinary Share | 現在不能買，但值得等買點名單 | 140.47 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-JCI/summary.html) |
| KEYS | Keysight Technologies Inc. Common Stock | 現在不能買，但值得等買點名單 | 340.13 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-KEYS/summary.html) |
| LBRDK | Liberty Broadband Corporation - Class C Common Stock | 現在不能買，但值得等買點名單 | 34.25 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-LBRDK/summary.html) |
| LGN | Legence Corp. - Class A Common stock | 現在不能買，但值得等買點名單 | 80.6 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-LGN/summary.html) |
| LITE | Lumentum Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | 851.4 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-LITE/summary.html) |
| PATH | UiPath | 現在不能買，但值得等買點名單 | 10.68 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-PATH/summary.html) |
| PSX | Phillips 66 Common Stock | 現在不能買，但值得等買點名單 | 174.05 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-PSX/summary.html) |
| QBTS | D-Wave Quantum Inc. Common Shares | 現在不能買，但值得等買點名單 | 23.83 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-QBTS/summary.html) |
| QS | QuantumScape Corporation - Common Stock | 現在不能買，但值得等買點名單 | 7.59 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-QS/summary.html) |
| RCAT | Red Cat Holdings | 現在不能買，但值得等買點名單 | 10.32 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-RCAT/summary.html) |
| RDDT | Reddit | 現在不能買，但值得等買點名單 | 174.39 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-RDDT/summary.html) |
| SNY | Sanofi - American Depositary Shares | 現在不能買，但值得等買點名單 | 43.43 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SNY/summary.html) |
| STWD | STARWOOD PROPERTY TRUST | 現在不能買，但值得等買點名單 | 16.96 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-STWD/summary.html) |
| TEVA | Teva Pharmaceutical Industries Limited American Depositary Shares | 現在不能買，但值得等買點名單 | 33.31 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TEVA/summary.html) |
| VRDN | Viridian Therapeutics | 現在不能買，但值得等買點名單 | 18.79 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-VRDN/summary.html) |
| VSAT | ViaSat | 現在不能買，但值得等買點名單 | 76.69 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-VSAT/summary.html) |
| ZETA | Zeta Global Holdings Corp. Class A Common Stock | 現在不能買，但值得等買點名單 | 19.73 USD | 2026-06-29 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ZETA/summary.html) |
