# StockLoop PEI 批次摘要 2026-06-25 - US K-line

- 產出時間：2026-06-26 06:44:52
- 標的池檔數：48
- 已具備目前價格與研究狀態的列數：48
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 48 檔標的；來源為 reports/usStock/2026-06-25_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：48 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：1 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：38 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：9 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 complete（研究檔案完整）：48 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- complete（研究檔案完整）: 48

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ASML | ASML Holding N.V. - New York Registry Shares | 現在可以買名單 | 1,841.18 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Watch only（僅觀察） | [摘要](companies/us-ASML/summary.html) |
| BB | BlackBerry Limited Common Stock | 現在可以買名單 | 10.34 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-BB/summary.html) |
| CIEN | Ciena Corporation Common Stock | 現在可以買名單 | 484.69 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Watch only（僅觀察） | [摘要](companies/us-CIEN/summary.html) |
| CSX | CSX Corporation - Common Stock | 現在可以買名單 | 47.44 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Watch only（僅觀察） | [摘要](companies/us-CSX/summary.html) |
| MDLN | Medline Inc. - Class A common stock | 現在可以買名單 | 37.77 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Watch only（僅觀察） | [摘要](companies/us-MDLN/summary.html) |
| ON | ON Semiconductor Corporation - Common Stock | 現在可以買名單 | 118.74 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Watch only（僅觀察） | [摘要](companies/us-ON/summary.html) |
| PODD | Insulet Corporation - Common Stock | 現在可以買名單 | 153.82 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Watch only（僅觀察） | [摘要](companies/us-PODD/summary.html) |
| STM | STMicroelectronics N.V. Common Stock | 現在可以買名單 | 74.88 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Watch only（僅觀察） | [摘要](companies/us-STM/summary.html) |
| UNP | Union Pacific Corporation Common Stock | 現在可以買名單 | 267.73 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Watch only（僅觀察） | [摘要](companies/us-UNP/summary.html) |
| UPS | United Parcel Service | 現在可以買名單 | 109.31 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Watch only（僅觀察） | [摘要](companies/us-UPS/summary.html) |
| ADI | Analog Devices | 現在不能買，但值得等買點名單 | 417.93 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ADI/summary.html) |
| ADM | Archer-Daniels-Midland Company Common Stock | 現在不能買，但值得等買點名單 | 76.54 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ADM/summary.html) |
| ANET | Arista Networks | 現在不能買，但值得等買點名單 | 165.45 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ANET/summary.html) |
| CEG | Constellation Energy Corporation - Common Stock When-Issued | 現在不能買，但值得等買點名單 | 268.69 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CEG/summary.html) |
| CGNX | Cognex Corporation - Common Stock | 現在不能買，但值得等買點名單 | 66.54 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CGNX/summary.html) |
| CHYM | Chime Financial | 現在不能買，但值得等買點名單 | 18.27 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CHYM/summary.html) |
| CNH | CNH Industrial N.V. Common Shares | 現在不能買，但值得等買點名單 | 10.93 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CNH/summary.html) |
| COLD | Americold Realty Trust | 現在不能買，但值得等買點名單 | 14.93 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-COLD/summary.html) |
| CP | Canadian Pacific Kansas City Limited Common Shares | 現在不能買，但值得等買點名單 | 87.04 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CP/summary.html) |
| CRBG | Corebridge Financial Inc. Common Stock | 現在不能買，但值得等買點名單 | 28.14 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CRBG/summary.html) |
| EMR | Emerson Electric Company Common Stock | 現在不能買，但值得等買點名單 | 145.34 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-EMR/summary.html) |
| ENB | Enbridge Inc Common Stock | 現在不能買，但值得等買點名單 | 56.19 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ENB/summary.html) |
| EQH | Equitable Holdings | 現在不能買，但值得等買點名單 | 43.84 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-EQH/summary.html) |
| FROG | JFrog Ltd. - Ordinary shares | 現在不能買，但值得等買點名單 | 78.8 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-FROG/summary.html) |
| GPN | Global Payments Inc. Common Stock | 現在不能買，但值得等買點名單 | 68.16 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-GPN/summary.html) |
| GSK | GSK plc American Depositary Shares | 現在不能買，但值得等買點名單 | 51.89 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-GSK/summary.html) |
| GTX | Garrett Motion Inc. - Common Stock | 現在不能買，但值得等買點名單 | 35.01 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-GTX/summary.html) |
| HUT | Hut 8 Corp. - Common Stock | 現在不能買，但值得等買點名單 | 117.68 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-HUT/summary.html) |
| JCI | Johnson Controls International plc Ordinary Share | 現在不能買，但值得等買點名單 | 145.49 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-JCI/summary.html) |
| KHC | The Kraft Heinz Company - Common Stock | 現在不能買，但值得等買點名單 | 23.47 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-KHC/summary.html) |
| KNX | Knight-Swift Transportation Holdings Inc. | 現在不能買，但值得等買點名單 | 77.07 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-KNX/summary.html) |
| LITE | Lumentum Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | 861.97 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-LITE/summary.html) |
| MOS | Mosaic Company  Common Stock | 現在不能買，但值得等買點名單 | 21.73 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MOS/summary.html) |
| MUFG | Mitsubishi UFJ Financial Group | 現在不能買，但值得等買點名單 | 20.02 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MUFG/summary.html) |
| MWH | SOLV Energy | 現在不能買，但值得等買點名單 | 36.84 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MWH/summary.html) |
| MXL | MaxLinear | 現在不能買，但值得等買點名單 | 94.47 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MXL/summary.html) |
| OKE | ONEOK | 現在不能買，但值得等買點名單 | 89.52 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-OKE/summary.html) |
| OUST | Ouster | 現在不能買，但值得等買點名單 | 41.82 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-OUST/summary.html) |
| PAYX | Paychex | 現在不能買，但值得等買點名單 | 96.72 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-PAYX/summary.html) |
| RITM | Rithm Capital Corp. Common Stock | 現在不能買，但值得等買點名單 | 9.32 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-RITM/summary.html) |
| STZ | Constellation Brands | 現在不能買，但值得等買點名單 | 144.45 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-STZ/summary.html) |
| TPG | TPG Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 40.02 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TPG/summary.html) |
| TSCO | Tractor Supply Company - Common Stock | 現在不能買，但值得等買點名單 | 30.75 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TSCO/summary.html) |
| TXN | Texas Instruments Incorporated - Common Stock | 現在不能買，但值得等買點名單 | 311.81 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-TXN/summary.html) |
| VIAV | Viavi Solutions Inc. - Common Stock | 現在不能買，但值得等買點名單 | 50.44 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-VIAV/summary.html) |
| VLO | Valero Energy Corporation Common Stock | 現在不能買，但值得等買點名單 | 255.06 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-VLO/summary.html) |
| VRT | Vertiv Holdings | 現在不能買，但值得等買點名單 | 325.57 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-VRT/summary.html) |
| VSH | Vishay Intertechnology | 現在不能買，但值得等買點名單 | 59.91 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | Wait for trigger（等待觸發） | [摘要](companies/us-VSH/summary.html) |
