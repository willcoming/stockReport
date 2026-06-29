# StockLoop PEI 批次摘要 2026-06-29

- 產出時間：2026-06-29 08:47:50
- 標的池檔數：16
- 已具備目前價格與研究狀態的列數：16
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 16 檔標的；來源為 reports/news/2026-06-29_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：16 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：2 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：12 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：2 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：16 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 16

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 00935 | 00935 科技型 ETF | 現在可以買名單 | 58.8 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-00935/summary.html) |
| 2368 | 金像電 | 現在可以買名單 | 1,190 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2368/summary.html) |
| 5469 | 瀚宇博 | 現在可以買名單 | 87.4 TWD | 2026-06-26 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-5469/summary.html) |
| MSFT | 微軟 | 現在可以買名單 | 372.97 USD | 2026-06-26T20:00:01Z | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-MSFT/summary.html) |
| 0050 | 元大台灣 50 | 現在不能買，但值得等買點名單 | 103.1 TWD | 2026-06-26 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-0050/summary.html) |
| 2330 | 台積電 | 現在不能買，但值得等買點名單 | 2,340 TWD | 2026-06-26 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2330/summary.html) |
| 3037 | 欣興 | 現在不能買，但值得等買點名單 | 975 TWD | 2026-06-26 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3037/summary.html) |
| 3189 | 景碩 | 現在不能買，但值得等買點名單 | 797 TWD | 2026-06-26 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3189/summary.html) |
| 3481 | 群創 | 現在不能買，但值得等買點名單 | 65 TWD | 2026-06-26 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3481/summary.html) |
| 4958 | 臻鼎-KY | 現在不能買，但值得等買點名單 | 580 TWD | 2026-06-26 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-4958/summary.html) |
| 8046 | 南電 | 現在不能買，但值得等買點名單 | 1,125 TWD | 2026-06-26 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-8046/summary.html) |
| IGV | iShares Expanded Tech-Software Sector ETF | 現在不能買，但值得等買點名單 | 88.2 USD | 2026-06-26T20:00:01Z | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-IGV/summary.html) |
| SOXX | iShares Semiconductor ETF | 現在不能買，但值得等買點名單 | 589.94 USD | 2026-06-26T20:00:01Z | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SOXX/summary.html) |
| TLT | iShares 20+ Year Treasury Bond ETF | 現在不能買，但值得等買點名單 | 87.36 USD | 2026-06-26T20:00:01Z | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TLT/summary.html) |
| TSM | TSMC ADR | 現在不能買，但值得等買點名單 | 432.35 USD | 2026-06-26T20:00:02Z | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TSM/summary.html) |
| UNH | UnitedHealth | 現在不能買，但值得等買點名單 | 427.89 USD | 2026-06-26T20:00:03Z | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-UNH/summary.html) |
