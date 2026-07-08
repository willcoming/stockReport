# StockLoop PEI 批次摘要 2026-07-08 - US K-line

- 產出時間：2026-07-09 07:37:08
- 標的池檔數：46
- 已具備目前價格與研究狀態的列數：46
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 46 檔標的；來源為 reports/usStock/2026-07-08_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：46 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：4 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：33 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：9 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：46 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：46 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 46

## 風控狀態

- not_run（尚未完成 PM 風控/流動性/sizing gate）: 46

## 期限 underwrite

- partial（3M/12M/3Y underwrite 未完整）: 46

## Decision-ready gate

- 否: 46

## 下一步 PEI workflow

- investment_horizon_not_complete: 46
- official_validation_not_complete: 46
- research_status_not_complete: 46
- risk_status_not_complete: 46
- valuation_status_not_complete: 46

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKAM | Akamai Technologies | 現在可以買名單 | 126.57 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-AKAM/summary.html) |
| BABA | Alibaba Group Holding Limited American Depositary Shares each representing eight Ordinary share | 現在可以買名單 | 108.98 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-BABA/summary.html) |
| CNQ | Canadian Natural Resources Limited Common Stock | 現在可以買名單 | 42.43 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-CNQ/summary.html) |
| COP | ConocoPhillips Common Stock | 現在可以買名單 | 110.72 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-COP/summary.html) |
| CRDO | Credo Technology Group Holding Ltd - Ordinary Shares | 現在可以買名單 | 258.69 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-CRDO/summary.html) |
| DVN | Devon Energy Corporation Common Stock | 現在可以買名單 | 43.31 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-DVN/summary.html) |
| FANG | Diamondback Energy | 現在可以買名單 | 186.6 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-FANG/summary.html) |
| NVDA | NVIDIA Corporation - Common Stock | 現在可以買名單 | 204.12 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-NVDA/summary.html) |
| PBR | Petroleo Brasileiro S.A. Petrobras ADS | 現在可以買名單 | 17.24 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-PBR/summary.html) |
| RIVN | Rivian Automotive | 現在可以買名單 | 16.66 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-RIVN/summary.html) |
| SU | Suncor Energy Inc. Common Stock | 現在可以買名單 | 59.06 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-SU/summary.html) |
| TXN | Texas Instruments Incorporated - Common Stock | 現在可以買名單 | 301.32 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-TXN/summary.html) |
| VRT | Vertiv Holdings | 現在可以買名單 | 317.81 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-VRT/summary.html) |
| AES | The AES Corporation Common Stock | 現在不能買，但值得等買點名單 | 14.64 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AES/summary.html) |
| ANET | Arista Networks | 現在不能買，但值得等買點名單 | 181.05 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ANET/summary.html) |
| APA | APA Corporation - Common Stock | 現在不能買，但值得等買點名單 | 35.06 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-APA/summary.html) |
| AVGO | Broadcom Inc. - Common Stock | 現在不能買，但值得等買點名單 | 388.69 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AVGO/summary.html) |
| BIDU | Baidu | 現在不能買，但值得等買點名單 | 117.62 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-BIDU/summary.html) |
| BOX | Box | 現在不能買，但值得等買點名單 | 28.88 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-BOX/summary.html) |
| CHWY | Chewy | 現在不能買，但值得等買點名單 | 20.56 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CHWY/summary.html) |
| CME | CME Group Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 243.07 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CME/summary.html) |
| CVE | Cenovus Energy Inc Common Stock | 現在不能買，但值得等買點名單 | 26.63 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CVE/summary.html) |
| CVX | Chevron Corporation Common Stock | 現在不能買，但值得等買點名單 | 175.97 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CVX/summary.html) |
| DBX | Dropbox | 現在不能買，但值得等買點名單 | 28.83 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-DBX/summary.html) |
| DKNG | DraftKings Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 27.17 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-DKNG/summary.html) |
| DOCN | DigitalOcean Holdings | 現在不能買，但值得等買點名單 | 140.47 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-DOCN/summary.html) |
| EXE | Expand Energy Corporation - Common Stock | 現在不能買，但值得等買點名單 | 90.1 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-EXE/summary.html) |
| GDS | GDS Holdings Limited - American Depositary Shares | 現在不能買，但值得等買點名單 | 32.82 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-GDS/summary.html) |
| HPQ | HP Inc. Common Stock | 現在不能買，但值得等買點名單 | 23.78 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-HPQ/summary.html) |
| HUT | Hut 8 Corp. - Common Stock | 現在不能買，但值得等買點名單 | 106.11 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-HUT/summary.html) |
| JD | JD.com | 現在不能買，但值得等買點名單 | 27.63 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-JD/summary.html) |
| KLAC | KLA Corporation - Common Stock | 現在不能買，但值得等買點名單 | 221.18 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-KLAC/summary.html) |
| KVYO | Klaviyo | 現在不能買，但值得等買點名單 | 16.6 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-KVYO/summary.html) |
| NBIS | Nebius Group N.V. - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | 216.48 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-NBIS/summary.html) |
| NTSK | Netskope | 現在不能買，但值得等買點名單 | 11.92 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-NTSK/summary.html) |
| NXPI | NXP Semiconductors N.V. - Common Stock | 現在不能買，但值得等買點名單 | 283.81 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-NXPI/summary.html) |
| OXY | Occidental Petroleum Corporation Common Stock | 現在不能買，但值得等買點名單 | 53.59 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-OXY/summary.html) |
| PSX | Phillips 66 Common Stock | 現在不能買，但值得等買點名單 | 187.81 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-PSX/summary.html) |
| ROL | Rollins | 現在不能買，但值得等買點名單 | 44.95 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ROL/summary.html) |
| SHOP | Shopify Inc. - Class A Subordinate Voting Shares | 現在不能買，但值得等買點名單 | 119.22 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SHOP/summary.html) |
| SM | SM Energy Company Common Stock | 現在不能買，但值得等買點名單 | 29.11 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SM/summary.html) |
| TSCO | Tractor Supply Company - Common Stock | 現在不能買，但值得等買點名單 | 29.58 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TSCO/summary.html) |
| UCTT | Ultra Clean Holdings | 現在不能買，但值得等買點名單 | 100.91 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-UCTT/summary.html) |
| UMC | United Microelectronics Corporation  Common Stock | 現在不能買，但值得等買點名單 | 24.73 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-UMC/summary.html) |
| WYFI | WhiteFiber | 現在不能買，但值得等買點名單 | 36.74 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-WYFI/summary.html) |
| YPF | YPF Sociedad Anonima Common Stock | 現在不能買，但值得等買點名單 | 47.9 USD | 2026-07-08 | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-YPF/summary.html) |
