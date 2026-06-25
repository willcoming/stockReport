# StockLoop PEI 批次摘要 2026-06-25 - TW K-line

- 產出時間：2026-06-25 16:20:39
- 標的池檔數：22
- 已具備目前價格與研究狀態的列數：22
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 22 檔標的；來源為 reports/twStock/2026-06-25_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：22 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：1 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：21 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- 研究狀態 partial（證據仍不足）：22 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 22

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2406 | 國碩 | 現在可以買名單 | 35.5 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2406/summary.html) |
| 3037 | 欣興 | 現在可以買名單 | 1,020 TWD | 2026-06-25 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-3037/summary.html) |
| 5269 | 祥碩 | 現在可以買名單 | 1,435 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-5269/summary.html) |
| 1101 | 台泥 | 現在不能買，但值得等買點名單 | 24.6 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-1101/summary.html) |
| 1477 | 聚陽 | 現在不能買，但值得等買點名單 | 221 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-1477/summary.html) |
| 1710 | 東聯 | 現在不能買，但值得等買點名單 | 13.95 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-1710/summary.html) |
| 2356 | 英業達 | 現在不能買，但值得等買點名單 | 66.7 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2356/summary.html) |
| 2374 | 佳能 | 現在不能買，但值得等買點名單 | 79.4 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2374/summary.html) |
| 2540 | 愛山林 | 現在不能買，但值得等買點名單 | 54.2 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2540/summary.html) |
| 2633 | 台灣高鐵 | 現在不能買，但值得等買點名單 | 26.25 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2633/summary.html) |
| 2855 | 統一證 | 現在不能買，但值得等買點名單 | 50.4 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2855/summary.html) |
| 2889 | 國票金 | 現在不能買，但值得等買點名單 | 15 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2889/summary.html) |
| 2912 | 統一超 | 現在不能買，但值得等買點名單 | 226 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2912/summary.html) |
| 3231 | 緯創 | 現在不能買，但值得等買點名單 | 160 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3231/summary.html) |
| 3605 | 宏致 | 現在不能買，但值得等買點名單 | 77.5 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3605/summary.html) |
| 5469 | 瀚宇博 | 現在不能買，但值得等買點名單 | 86.1 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-5469/summary.html) |
| 5871 | 中租-KY | 現在不能買，但值得等買點名單 | 115.5 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-5871/summary.html) |
| 6005 | 群益證 | 現在不能買，但值得等買點名單 | 38.8 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-6005/summary.html) |
| 6191 | 精成科 | 現在不能買，但值得等買點名單 | 99.3 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-6191/summary.html) |
| 6414 | 樺漢 | 現在不能買，但值得等買點名單 | 373.5 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-6414/summary.html) |
| 6605 | 帝寶 | 現在不能買，但值得等買點名單 | 142 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-6605/summary.html) |
| 8103 | 瀚荃 | 現在不能買，但值得等買點名單 | 105 TWD | 2026-06-25 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-8103/summary.html) |
