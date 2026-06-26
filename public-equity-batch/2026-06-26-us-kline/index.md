# StockLoop PEI 批次摘要 2026-06-26 - US K-line

- 產出時間：2026-06-27 06:48:55
- 標的池檔數：139
- 已具備目前價格與研究狀態的列數：139
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 139 檔標的；來源為 reports/usStock/2026-06-26_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：139 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：16 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：110 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：13 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：139 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 139

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ADP | Automatic Data Processing | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-ADP/summary.html) |
| BMY | Bristol-Myers Squibb Company Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-BMY/summary.html) |
| CCL | Carnival Corporation Ltd. Common Shares | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-CCL/summary.html) |
| DDOG | Datadog | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-DDOG/summary.html) |
| DT | Dynatrace | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-DT/summary.html) |
| ELV | Elevance Health | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-ELV/summary.html) |
| FLUT | Flutter Entertainment plc Ordinary Shares | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-FLUT/summary.html) |
| FRSH | Freshworks Inc. - Class A Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-FRSH/summary.html) |
| GILD | Gilead Sciences | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-GILD/summary.html) |
| JKHY | Jack Henry & Associates | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-JKHY/summary.html) |
| LULU | lululemon athletica inc. - Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-LULU/summary.html) |
| MARA | MARA Holdings | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-MARA/summary.html) |
| MCO | Moody's Corporation Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-MCO/summary.html) |
| MRCY | Mercury Systems Inc - Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-MRCY/summary.html) |
| MRSH | Marsh Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-MRSH/summary.html) |
| MTCH | Match Group | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-MTCH/summary.html) |
| NTNX | Nutanix | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-NTNX/summary.html) |
| NU | Nu Holdings Ltd. Class A Ordinary Shares | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-NU/summary.html) |
| ORLY | O'Reilly Automotive | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-ORLY/summary.html) |
| PFG | Principal Financial Group Inc - Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-PFG/summary.html) |
| RBLX | Roblox Corporation Class A Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-RBLX/summary.html) |
| RIVN | Rivian Automotive | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-RIVN/summary.html) |
| SCHW | Charles Schwab Corporation  Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-SCHW/summary.html) |
| TTAN | ServiceTitan | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-TTAN/summary.html) |
| UBER | Uber Technologies | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-UBER/summary.html) |
| VEEV | Veeva Systems Inc. Class A Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-VEEV/summary.html) |
| VRSK | Verisk Analytics | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-VRSK/summary.html) |
| VZ | Verizon Communications Inc. Common Stock | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-VZ/summary.html) |
| ZS | Zscaler | 現在可以買名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-ZS/summary.html) |
| ACGL | Arch Capital Group Ltd. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ACGL/summary.html) |
| ADEA | Adeia Inc. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ADEA/summary.html) |
| AEVA | Aeva Technologies | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-AEVA/summary.html) |
| AIG | American International Group | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-AIG/summary.html) |
| ALOY | REalloys Inc. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ALOY/summary.html) |
| AR | Antero Resources Corporation Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-AR/summary.html) |
| ASAN | Asana | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ASAN/summary.html) |
| ATRC | AtriCure | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ATRC/summary.html) |
| AVPT | AvePoint | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-AVPT/summary.html) |
| AXSM | Axsome Therapeutics | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-AXSM/summary.html) |
| BA | Boeing Company  Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BA/summary.html) |
| BAND | Bandwidth Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BAND/summary.html) |
| BILL | BILL Holdings | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BILL/summary.html) |
| BL | BlackLine | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BL/summary.html) |
| BOX | Box | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BOX/summary.html) |
| BRO | Brown & Brown | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BRO/summary.html) |
| BTDR | Bitdeer Technologies Group - Ordinary Shares | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BTDR/summary.html) |
| BULL | Webull Corporation - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BULL/summary.html) |
| CARG | CarGurus | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CARG/summary.html) |
| CCC | CCC Intelligent Solutions Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CCC/summary.html) |
| CELC | Celcuity Inc. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CELC/summary.html) |
| CELH | Celsius Holdings | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CELH/summary.html) |
| CHDN | Churchill Downs | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CHDN/summary.html) |
| CL | Colgate-Palmolive Company Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CL/summary.html) |
| CNM | Core & Main | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CNM/summary.html) |
| CNX | CNX Resources Corporation Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CNX/summary.html) |
| CP | Canadian Pacific Kansas City Limited Common Shares | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CP/summary.html) |
| CPNG | Coupang | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CPNG/summary.html) |
| CRNX | Crinetics Pharmaceuticals | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CRNX/summary.html) |
| CYTK | Cytokinetics | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CYTK/summary.html) |
| DBX | Dropbox | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-DBX/summary.html) |
| DKNG | DraftKings Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-DKNG/summary.html) |
| DOCS | Doximity | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-DOCS/summary.html) |
| DUOL | Duolingo | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-DUOL/summary.html) |
| DV | DoubleVerify Holdings | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-DV/summary.html) |
| DXCM | DexCom | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-DXCM/summary.html) |
| ELE | Elemental Royalty Corporation - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ELE/summary.html) |
| EQPT | EquipmentShare.com Inc - Class A Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-EQPT/summary.html) |
| FIVN | Five9 | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-FIVN/summary.html) |
| FLO | Flowers Foods | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-FLO/summary.html) |
| FTNT | Fortinet | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-FTNT/summary.html) |
| GEN | Gen Digital Inc. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GEN/summary.html) |
| GLIBK | Liberty Capital Corporation - Series C GCI Group Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GLIBK/summary.html) |
| GLXY | Galaxy Digital Inc. - Class A common stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GLXY/summary.html) |
| GME | GameStop Corporation Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GME/summary.html) |
| GTLB | GitLab Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GTLB/summary.html) |
| HAS | Hasbro | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-HAS/summary.html) |
| HDB | HDFC Bank Limited Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-HDB/summary.html) |
| HQY | HealthEquity | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-HQY/summary.html) |
| IBM | International Business Machines Corporation Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-IBM/summary.html) |
| IBRX | ImmunityBio | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-IBRX/summary.html) |
| IMNM | Immunome | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-IMNM/summary.html) |
| INTU | Intuit Inc. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-INTU/summary.html) |
| KOD | Kodiak Sciences Inc - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-KOD/summary.html) |
| KVYO | Klaviyo | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-KVYO/summary.html) |
| LCID | Lucid Group | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-LCID/summary.html) |
| LNC | Lincoln National Corporation Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-LNC/summary.html) |
| LNG | Cheniere Energy | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-LNG/summary.html) |
| LYFT | Lyft | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-LYFT/summary.html) |
| MA | Mastercard Incorporated Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-MA/summary.html) |
| MET | MetLife | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-MET/summary.html) |
| MOS | Mosaic Company  Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-MOS/summary.html) |
| NCNO | nCino | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-NCNO/summary.html) |
| NET | Cloudflare | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-NET/summary.html) |
| NKTR | Nektar Therapeutics - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-NKTR/summary.html) |
| NVCR | NovoCure Limited - Ordinary Shares | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-NVCR/summary.html) |
| PAGS | PagSeguro Digital Ltd. Class A Common Shares | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PAGS/summary.html) |
| PAY | Paymentus Holdings | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PAY/summary.html) |
| PAYX | Paychex | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PAYX/summary.html) |
| PINS | Pinterest | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PINS/summary.html) |
| PM | Philip Morris International Inc Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PM/summary.html) |
| PPC | Pilgrim's Pride Corporation - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PPC/summary.html) |
| PRGS | Progress Software Corporation - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PRGS/summary.html) |
| PURR | Hyperliquid Strategies Inc - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PURR/summary.html) |
| PWP | Perella Weinberg Partners - Class A Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PWP/summary.html) |
| PYPL | PayPal Holdings | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PYPL/summary.html) |
| QSR | Restaurant Brands International Inc. Common Shares | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-QSR/summary.html) |
| QTWO | Q2 Holdings | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-QTWO/summary.html) |
| RBRK | Rubrik | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-RBRK/summary.html) |
| RDDT | Reddit | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-RDDT/summary.html) |
| REXR | Rexford Industrial Realty | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-REXR/summary.html) |
| RHI | Robert Half Inc. Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-RHI/summary.html) |
| RLMD | Relmada Therapeutics | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-RLMD/summary.html) |
| RPRX | Royalty Pharma plc - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-RPRX/summary.html) |
| S | SentinelOne | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-S/summary.html) |
| SCI | Service Corporation International Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SCI/summary.html) |
| SE | Sea Limited American Depositary Shares | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SE/summary.html) |
| SHOO | Steven Madden | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SHOO/summary.html) |
| SIRI | SiriusXM Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SIRI/summary.html) |
| SOFI | SoFi Technologies | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SOFI/summary.html) |
| SRPT | Sarepta Therapeutics | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SRPT/summary.html) |
| SSRM | SSR Mining Inc. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SSRM/summary.html) |
| STNE | StoneCo Ltd. - Class A Common Share | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-STNE/summary.html) |
| SUPN | Supernus Pharmaceuticals | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SUPN/summary.html) |
| SYK | Stryker Corporation Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SYK/summary.html) |
| TDC | Teradata Corporation Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TDC/summary.html) |
| TENB | Tenable Holdings | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TENB/summary.html) |
| TNDM | Tandem Diabetes Care | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TNDM/summary.html) |
| TOST | Toast | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TOST/summary.html) |
| TRU | TransUnion Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TRU/summary.html) |
| TSN | Tyson Foods | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TSN/summary.html) |
| TXT | Textron Inc. Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TXT/summary.html) |
| U | Unity Software Inc. Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-U/summary.html) |
| V | Visa Inc. | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-V/summary.html) |
| VFC | V.F. Corporation Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-VFC/summary.html) |
| VOR | Vor Biopharma Inc. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-VOR/summary.html) |
| WAY | Waystar Holding Corp. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-WAY/summary.html) |
| WMT | Walmart Inc. - Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-WMT/summary.html) |
| XP | XP Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-XP/summary.html) |
| YELP | Yelp Inc. Common Stock | 現在不能買，但值得等買點名單 | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-YELP/summary.html) |
