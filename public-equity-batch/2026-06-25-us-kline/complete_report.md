# StockLoop PEI 完整批次報告 2026-06-25 - US K-line

- 產出時間：2026-06-26 06:44:52
- 標的池檔數：48
- 已具備目前價格與研究狀態的列數：48
- 來源報告：reports/usStock/2026-06-25_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

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

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | us | 48 |
| 分類 | 現在可以買名單 | 10 |
| 分類 | 現在不能買，但值得等買點名單 | 38 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 1 |
| 研究標籤 | Wait for trigger（等待觸發） | 38 |
| 研究標籤 | Watch only（僅觀察） | 9 |
| 研究狀態 | complete（研究檔案完整） | 48 |
| 估值狀態 | not_run（本流程未執行估值模型） | 48 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 未完成 SEC/公司 IR 一手 filings 驗證
- 未完成共識預估、估值模型與目標價敏感度
- 未完成最新法說會或管理層逐字稿查核
- 未完成流動性容量、部位上限與下檔風險量化
- 缺少公司級官方營收、訂單、財報或法說支撐
- 近 7 日公開新聞熱度未命中或未抓取

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ASML | ASML Holding N.V. - New York Registry Shares | 現在可以買名單 | Watch only（僅觀察） | 1,841.18 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% until PEI evidence gate closes | [摘要](companies/us-ASML/summary.html) | [風險](companies/us-ASML/risk_plan.html) | [啟動報告](companies/us-ASML/initiation.html) |
| BB | BlackBerry Limited Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 10.34 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% until PEI evidence gate closes | [摘要](companies/us-BB/summary.html) | [風險](companies/us-BB/risk_plan.html) | [啟動報告](companies/us-BB/initiation.html) |
| CIEN | Ciena Corporation Common Stock | 現在可以買名單 | Watch only（僅觀察） | 484.69 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% until PEI evidence gate closes | [摘要](companies/us-CIEN/summary.html) | [風險](companies/us-CIEN/risk_plan.html) | [啟動報告](companies/us-CIEN/initiation.html) |
| CSX | CSX Corporation - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 47.44 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% until PEI evidence gate closes | [摘要](companies/us-CSX/summary.html) | [風險](companies/us-CSX/risk_plan.html) | [啟動報告](companies/us-CSX/initiation.html) |
| MDLN | Medline Inc. - Class A common stock | 現在可以買名單 | Watch only（僅觀察） | 37.77 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% until PEI evidence gate closes | [摘要](companies/us-MDLN/summary.html) | [風險](companies/us-MDLN/risk_plan.html) | [啟動報告](companies/us-MDLN/initiation.html) |
| ON | ON Semiconductor Corporation - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 118.74 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% until PEI evidence gate closes | [摘要](companies/us-ON/summary.html) | [風險](companies/us-ON/risk_plan.html) | [啟動報告](companies/us-ON/initiation.html) |
| PODD | Insulet Corporation - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 153.82 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% until PEI evidence gate closes | [摘要](companies/us-PODD/summary.html) | [風險](companies/us-PODD/risk_plan.html) | [啟動報告](companies/us-PODD/initiation.html) |
| STM | STMicroelectronics N.V. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 74.88 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% until PEI evidence gate closes | [摘要](companies/us-STM/summary.html) | [風險](companies/us-STM/risk_plan.html) | [啟動報告](companies/us-STM/initiation.html) |
| UNP | Union Pacific Corporation Common Stock | 現在可以買名單 | Watch only（僅觀察） | 267.73 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% until PEI evidence gate closes | [摘要](companies/us-UNP/summary.html) | [風險](companies/us-UNP/risk_plan.html) | [啟動報告](companies/us-UNP/initiation.html) |
| UPS | United Parcel Service | 現在可以買名單 | Watch only（僅觀察） | 109.31 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% until PEI evidence gate closes | [摘要](companies/us-UPS/summary.html) | [風險](companies/us-UPS/risk_plan.html) | [啟動報告](companies/us-UPS/initiation.html) |
| ADI | Analog Devices | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 417.93 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-ADI/summary.html) | [風險](companies/us-ADI/risk_plan.html) | [啟動報告](companies/us-ADI/initiation.html) |
| ADM | Archer-Daniels-Midland Company Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 76.54 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-ADM/summary.html) | [風險](companies/us-ADM/risk_plan.html) | [啟動報告](companies/us-ADM/initiation.html) |
| ANET | Arista Networks | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 165.45 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-ANET/summary.html) | [風險](companies/us-ANET/risk_plan.html) | [啟動報告](companies/us-ANET/initiation.html) |
| CEG | Constellation Energy Corporation - Common Stock When-Issued | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 268.69 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-CEG/summary.html) | [風險](companies/us-CEG/risk_plan.html) | [啟動報告](companies/us-CEG/initiation.html) |
| CGNX | Cognex Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 66.54 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-CGNX/summary.html) | [風險](companies/us-CGNX/risk_plan.html) | [啟動報告](companies/us-CGNX/initiation.html) |
| CHYM | Chime Financial | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 18.27 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-CHYM/summary.html) | [風險](companies/us-CHYM/risk_plan.html) | [啟動報告](companies/us-CHYM/initiation.html) |
| CNH | CNH Industrial N.V. Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.93 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-CNH/summary.html) | [風險](companies/us-CNH/risk_plan.html) | [啟動報告](companies/us-CNH/initiation.html) |
| COLD | Americold Realty Trust | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.93 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-COLD/summary.html) | [風險](companies/us-COLD/risk_plan.html) | [啟動報告](companies/us-COLD/initiation.html) |
| CP | Canadian Pacific Kansas City Limited Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 87.04 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-CP/summary.html) | [風險](companies/us-CP/risk_plan.html) | [啟動報告](companies/us-CP/initiation.html) |
| CRBG | Corebridge Financial Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 28.14 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-CRBG/summary.html) | [風險](companies/us-CRBG/risk_plan.html) | [啟動報告](companies/us-CRBG/initiation.html) |
| EMR | Emerson Electric Company Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 145.34 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-EMR/summary.html) | [風險](companies/us-EMR/risk_plan.html) | [啟動報告](companies/us-EMR/initiation.html) |
| ENB | Enbridge Inc Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 56.19 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-ENB/summary.html) | [風險](companies/us-ENB/risk_plan.html) | [啟動報告](companies/us-ENB/initiation.html) |
| EQH | Equitable Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 43.84 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-EQH/summary.html) | [風險](companies/us-EQH/risk_plan.html) | [啟動報告](companies/us-EQH/initiation.html) |
| FROG | JFrog Ltd. - Ordinary shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 78.8 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-FROG/summary.html) | [風險](companies/us-FROG/risk_plan.html) | [啟動報告](companies/us-FROG/initiation.html) |
| GPN | Global Payments Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 68.16 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-GPN/summary.html) | [風險](companies/us-GPN/risk_plan.html) | [啟動報告](companies/us-GPN/initiation.html) |
| GSK | GSK plc American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 51.89 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-GSK/summary.html) | [風險](companies/us-GSK/risk_plan.html) | [啟動報告](companies/us-GSK/initiation.html) |
| GTX | Garrett Motion Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.01 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-GTX/summary.html) | [風險](companies/us-GTX/risk_plan.html) | [啟動報告](companies/us-GTX/initiation.html) |
| HUT | Hut 8 Corp. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 117.68 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-HUT/summary.html) | [風險](companies/us-HUT/risk_plan.html) | [啟動報告](companies/us-HUT/initiation.html) |
| JCI | Johnson Controls International plc Ordinary Share | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 145.49 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-JCI/summary.html) | [風險](companies/us-JCI/risk_plan.html) | [啟動報告](companies/us-JCI/initiation.html) |
| KHC | The Kraft Heinz Company - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 23.47 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-KHC/summary.html) | [風險](companies/us-KHC/risk_plan.html) | [啟動報告](companies/us-KHC/initiation.html) |
| KNX | Knight-Swift Transportation Holdings Inc. | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 77.07 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-KNX/summary.html) | [風險](companies/us-KNX/risk_plan.html) | [啟動報告](companies/us-KNX/initiation.html) |
| LITE | Lumentum Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 861.97 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-LITE/summary.html) | [風險](companies/us-LITE/risk_plan.html) | [啟動報告](companies/us-LITE/initiation.html) |
| MOS | Mosaic Company  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 21.73 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-MOS/summary.html) | [風險](companies/us-MOS/risk_plan.html) | [啟動報告](companies/us-MOS/initiation.html) |
| MUFG | Mitsubishi UFJ Financial Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 20.02 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-MUFG/summary.html) | [風險](companies/us-MUFG/risk_plan.html) | [啟動報告](companies/us-MUFG/initiation.html) |
| MWH | SOLV Energy | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 36.84 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-MWH/summary.html) | [風險](companies/us-MWH/risk_plan.html) | [啟動報告](companies/us-MWH/initiation.html) |
| MXL | MaxLinear | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 94.47 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-MXL/summary.html) | [風險](companies/us-MXL/risk_plan.html) | [啟動報告](companies/us-MXL/initiation.html) |
| OKE | ONEOK | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 89.52 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-OKE/summary.html) | [風險](companies/us-OKE/risk_plan.html) | [啟動報告](companies/us-OKE/initiation.html) |
| OUST | Ouster | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 41.82 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-OUST/summary.html) | [風險](companies/us-OUST/risk_plan.html) | [啟動報告](companies/us-OUST/initiation.html) |
| PAYX | Paychex | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 96.72 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-PAYX/summary.html) | [風險](companies/us-PAYX/risk_plan.html) | [啟動報告](companies/us-PAYX/initiation.html) |
| RITM | Rithm Capital Corp. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 9.32 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-RITM/summary.html) | [風險](companies/us-RITM/risk_plan.html) | [啟動報告](companies/us-RITM/initiation.html) |
| STZ | Constellation Brands | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 144.45 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-STZ/summary.html) | [風險](companies/us-STZ/risk_plan.html) | [啟動報告](companies/us-STZ/initiation.html) |
| TPG | TPG Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 40.02 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-TPG/summary.html) | [風險](companies/us-TPG/risk_plan.html) | [啟動報告](companies/us-TPG/initiation.html) |
| TSCO | Tractor Supply Company - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 30.75 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-TSCO/summary.html) | [風險](companies/us-TSCO/risk_plan.html) | [啟動報告](companies/us-TSCO/initiation.html) |
| TXN | Texas Instruments Incorporated - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 311.81 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-TXN/summary.html) | [風險](companies/us-TXN/risk_plan.html) | [啟動報告](companies/us-TXN/initiation.html) |
| VIAV | Viavi Solutions Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 50.44 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-VIAV/summary.html) | [風險](companies/us-VIAV/risk_plan.html) | [啟動報告](companies/us-VIAV/initiation.html) |
| VLO | Valero Energy Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 255.06 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-VLO/summary.html) | [風險](companies/us-VLO/risk_plan.html) | [啟動報告](companies/us-VLO/initiation.html) |
| VRT | Vertiv Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 325.57 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-VRT/summary.html) | [風險](companies/us-VRT/risk_plan.html) | [啟動報告](companies/us-VRT/initiation.html) |
| VSH | Vishay Intertechnology | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 59.91 USD | 2026-06-25 16:00:00 America/New_York | complete（研究檔案完整） | 0% pre-trigger | [摘要](companies/us-VSH/summary.html) | [風險](companies/us-VSH/risk_plan.html) | [啟動報告](companies/us-VSH/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| ASML | [摘要](companies/us-ASML/summary.html) | [公司摘要](companies/us-ASML/tearsheet.html) | [啟動報告](companies/us-ASML/initiation.html) | [風險](companies/us-ASML/risk_plan.html) |
| BB | [摘要](companies/us-BB/summary.html) | [公司摘要](companies/us-BB/tearsheet.html) | [啟動報告](companies/us-BB/initiation.html) | [風險](companies/us-BB/risk_plan.html) |
| CIEN | [摘要](companies/us-CIEN/summary.html) | [公司摘要](companies/us-CIEN/tearsheet.html) | [啟動報告](companies/us-CIEN/initiation.html) | [風險](companies/us-CIEN/risk_plan.html) |
| CSX | [摘要](companies/us-CSX/summary.html) | [公司摘要](companies/us-CSX/tearsheet.html) | [啟動報告](companies/us-CSX/initiation.html) | [風險](companies/us-CSX/risk_plan.html) |
| MDLN | [摘要](companies/us-MDLN/summary.html) | [公司摘要](companies/us-MDLN/tearsheet.html) | [啟動報告](companies/us-MDLN/initiation.html) | [風險](companies/us-MDLN/risk_plan.html) |
| ON | [摘要](companies/us-ON/summary.html) | [公司摘要](companies/us-ON/tearsheet.html) | [啟動報告](companies/us-ON/initiation.html) | [風險](companies/us-ON/risk_plan.html) |
| PODD | [摘要](companies/us-PODD/summary.html) | [公司摘要](companies/us-PODD/tearsheet.html) | [啟動報告](companies/us-PODD/initiation.html) | [風險](companies/us-PODD/risk_plan.html) |
| STM | [摘要](companies/us-STM/summary.html) | [公司摘要](companies/us-STM/tearsheet.html) | [啟動報告](companies/us-STM/initiation.html) | [風險](companies/us-STM/risk_plan.html) |
| UNP | [摘要](companies/us-UNP/summary.html) | [公司摘要](companies/us-UNP/tearsheet.html) | [啟動報告](companies/us-UNP/initiation.html) | [風險](companies/us-UNP/risk_plan.html) |
| UPS | [摘要](companies/us-UPS/summary.html) | [公司摘要](companies/us-UPS/tearsheet.html) | [啟動報告](companies/us-UPS/initiation.html) | [風險](companies/us-UPS/risk_plan.html) |
| ADI | [摘要](companies/us-ADI/summary.html) | [公司摘要](companies/us-ADI/tearsheet.html) | [啟動報告](companies/us-ADI/initiation.html) | [風險](companies/us-ADI/risk_plan.html) |
| ADM | [摘要](companies/us-ADM/summary.html) | [公司摘要](companies/us-ADM/tearsheet.html) | [啟動報告](companies/us-ADM/initiation.html) | [風險](companies/us-ADM/risk_plan.html) |
| ANET | [摘要](companies/us-ANET/summary.html) | [公司摘要](companies/us-ANET/tearsheet.html) | [啟動報告](companies/us-ANET/initiation.html) | [風險](companies/us-ANET/risk_plan.html) |
| CEG | [摘要](companies/us-CEG/summary.html) | [公司摘要](companies/us-CEG/tearsheet.html) | [啟動報告](companies/us-CEG/initiation.html) | [風險](companies/us-CEG/risk_plan.html) |
| CGNX | [摘要](companies/us-CGNX/summary.html) | [公司摘要](companies/us-CGNX/tearsheet.html) | [啟動報告](companies/us-CGNX/initiation.html) | [風險](companies/us-CGNX/risk_plan.html) |
| CHYM | [摘要](companies/us-CHYM/summary.html) | [公司摘要](companies/us-CHYM/tearsheet.html) | [啟動報告](companies/us-CHYM/initiation.html) | [風險](companies/us-CHYM/risk_plan.html) |
| CNH | [摘要](companies/us-CNH/summary.html) | [公司摘要](companies/us-CNH/tearsheet.html) | [啟動報告](companies/us-CNH/initiation.html) | [風險](companies/us-CNH/risk_plan.html) |
| COLD | [摘要](companies/us-COLD/summary.html) | [公司摘要](companies/us-COLD/tearsheet.html) | [啟動報告](companies/us-COLD/initiation.html) | [風險](companies/us-COLD/risk_plan.html) |
| CP | [摘要](companies/us-CP/summary.html) | [公司摘要](companies/us-CP/tearsheet.html) | [啟動報告](companies/us-CP/initiation.html) | [風險](companies/us-CP/risk_plan.html) |
| CRBG | [摘要](companies/us-CRBG/summary.html) | [公司摘要](companies/us-CRBG/tearsheet.html) | [啟動報告](companies/us-CRBG/initiation.html) | [風險](companies/us-CRBG/risk_plan.html) |
| EMR | [摘要](companies/us-EMR/summary.html) | [公司摘要](companies/us-EMR/tearsheet.html) | [啟動報告](companies/us-EMR/initiation.html) | [風險](companies/us-EMR/risk_plan.html) |
| ENB | [摘要](companies/us-ENB/summary.html) | [公司摘要](companies/us-ENB/tearsheet.html) | [啟動報告](companies/us-ENB/initiation.html) | [風險](companies/us-ENB/risk_plan.html) |
| EQH | [摘要](companies/us-EQH/summary.html) | [公司摘要](companies/us-EQH/tearsheet.html) | [啟動報告](companies/us-EQH/initiation.html) | [風險](companies/us-EQH/risk_plan.html) |
| FROG | [摘要](companies/us-FROG/summary.html) | [公司摘要](companies/us-FROG/tearsheet.html) | [啟動報告](companies/us-FROG/initiation.html) | [風險](companies/us-FROG/risk_plan.html) |
| GPN | [摘要](companies/us-GPN/summary.html) | [公司摘要](companies/us-GPN/tearsheet.html) | [啟動報告](companies/us-GPN/initiation.html) | [風險](companies/us-GPN/risk_plan.html) |
| GSK | [摘要](companies/us-GSK/summary.html) | [公司摘要](companies/us-GSK/tearsheet.html) | [啟動報告](companies/us-GSK/initiation.html) | [風險](companies/us-GSK/risk_plan.html) |
| GTX | [摘要](companies/us-GTX/summary.html) | [公司摘要](companies/us-GTX/tearsheet.html) | [啟動報告](companies/us-GTX/initiation.html) | [風險](companies/us-GTX/risk_plan.html) |
| HUT | [摘要](companies/us-HUT/summary.html) | [公司摘要](companies/us-HUT/tearsheet.html) | [啟動報告](companies/us-HUT/initiation.html) | [風險](companies/us-HUT/risk_plan.html) |
| JCI | [摘要](companies/us-JCI/summary.html) | [公司摘要](companies/us-JCI/tearsheet.html) | [啟動報告](companies/us-JCI/initiation.html) | [風險](companies/us-JCI/risk_plan.html) |
| KHC | [摘要](companies/us-KHC/summary.html) | [公司摘要](companies/us-KHC/tearsheet.html) | [啟動報告](companies/us-KHC/initiation.html) | [風險](companies/us-KHC/risk_plan.html) |
| KNX | [摘要](companies/us-KNX/summary.html) | [公司摘要](companies/us-KNX/tearsheet.html) | [啟動報告](companies/us-KNX/initiation.html) | [風險](companies/us-KNX/risk_plan.html) |
| LITE | [摘要](companies/us-LITE/summary.html) | [公司摘要](companies/us-LITE/tearsheet.html) | [啟動報告](companies/us-LITE/initiation.html) | [風險](companies/us-LITE/risk_plan.html) |
| MOS | [摘要](companies/us-MOS/summary.html) | [公司摘要](companies/us-MOS/tearsheet.html) | [啟動報告](companies/us-MOS/initiation.html) | [風險](companies/us-MOS/risk_plan.html) |
| MUFG | [摘要](companies/us-MUFG/summary.html) | [公司摘要](companies/us-MUFG/tearsheet.html) | [啟動報告](companies/us-MUFG/initiation.html) | [風險](companies/us-MUFG/risk_plan.html) |
| MWH | [摘要](companies/us-MWH/summary.html) | [公司摘要](companies/us-MWH/tearsheet.html) | [啟動報告](companies/us-MWH/initiation.html) | [風險](companies/us-MWH/risk_plan.html) |
| MXL | [摘要](companies/us-MXL/summary.html) | [公司摘要](companies/us-MXL/tearsheet.html) | [啟動報告](companies/us-MXL/initiation.html) | [風險](companies/us-MXL/risk_plan.html) |
| OKE | [摘要](companies/us-OKE/summary.html) | [公司摘要](companies/us-OKE/tearsheet.html) | [啟動報告](companies/us-OKE/initiation.html) | [風險](companies/us-OKE/risk_plan.html) |
| OUST | [摘要](companies/us-OUST/summary.html) | [公司摘要](companies/us-OUST/tearsheet.html) | [啟動報告](companies/us-OUST/initiation.html) | [風險](companies/us-OUST/risk_plan.html) |
| PAYX | [摘要](companies/us-PAYX/summary.html) | [公司摘要](companies/us-PAYX/tearsheet.html) | [啟動報告](companies/us-PAYX/initiation.html) | [風險](companies/us-PAYX/risk_plan.html) |
| RITM | [摘要](companies/us-RITM/summary.html) | [公司摘要](companies/us-RITM/tearsheet.html) | [啟動報告](companies/us-RITM/initiation.html) | [風險](companies/us-RITM/risk_plan.html) |
| STZ | [摘要](companies/us-STZ/summary.html) | [公司摘要](companies/us-STZ/tearsheet.html) | [啟動報告](companies/us-STZ/initiation.html) | [風險](companies/us-STZ/risk_plan.html) |
| TPG | [摘要](companies/us-TPG/summary.html) | [公司摘要](companies/us-TPG/tearsheet.html) | [啟動報告](companies/us-TPG/initiation.html) | [風險](companies/us-TPG/risk_plan.html) |
| TSCO | [摘要](companies/us-TSCO/summary.html) | [公司摘要](companies/us-TSCO/tearsheet.html) | [啟動報告](companies/us-TSCO/initiation.html) | [風險](companies/us-TSCO/risk_plan.html) |
| TXN | [摘要](companies/us-TXN/summary.html) | [公司摘要](companies/us-TXN/tearsheet.html) | [啟動報告](companies/us-TXN/initiation.html) | [風險](companies/us-TXN/risk_plan.html) |
| VIAV | [摘要](companies/us-VIAV/summary.html) | [公司摘要](companies/us-VIAV/tearsheet.html) | [啟動報告](companies/us-VIAV/initiation.html) | [風險](companies/us-VIAV/risk_plan.html) |
| VLO | [摘要](companies/us-VLO/summary.html) | [公司摘要](companies/us-VLO/tearsheet.html) | [啟動報告](companies/us-VLO/initiation.html) | [風險](companies/us-VLO/risk_plan.html) |
| VRT | [摘要](companies/us-VRT/summary.html) | [公司摘要](companies/us-VRT/tearsheet.html) | [啟動報告](companies/us-VRT/initiation.html) | [風險](companies/us-VRT/risk_plan.html) |
| VSH | [摘要](companies/us-VSH/summary.html) | [公司摘要](companies/us-VSH/tearsheet.html) | [啟動報告](companies/us-VSH/initiation.html) | [風險](companies/us-VSH/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
