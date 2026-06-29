# StockLoop PEI 批次摘要 2026-06-29 - TW K-line

- 產出時間：2026-06-29 12:52:29
- 標的池檔數：50
- 已具備目前價格與研究狀態的列數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 50 檔標的；來源為 reports/twStock/2026-06-29-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：50 檔。
- 研究狀態 missing：50 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- missing: 50

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 00654R | 富邦印度反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00654R/summary.html) |
| 00669R | 國泰美國道瓊反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00669R/summary.html) |
| 00707R | 期元大S&P日圓反1 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00707R/summary.html) |
| 00712 | 復華富時不動產 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00712/summary.html) |
| 00771 | 元大US高息特別股 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-00771/summary.html) |
| 1413 | 宏洲 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1413/summary.html) |
| 1453 | 大將 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1453/summary.html) |
| 1460 | 宏遠 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1460/summary.html) |
| 1471 | 首利 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1471/summary.html) |
| 1526 | 日馳 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1526/summary.html) |
| 1527 | 鑽全 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1527/summary.html) |
| 1626 | 艾美特-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1626/summary.html) |
| 1760 | 寶齡富錦 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-1760/summary.html) |
| 2027 | 大成鋼 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2027/summary.html) |
| 2102 | 泰豐 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2102/summary.html) |
| 2103 | 台橡 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2103/summary.html) |
| 2206 | 三陽工業 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2206/summary.html) |
| 2208 | 台船 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2208/summary.html) |
| 2258 | 鴻華先進-創 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2258/summary.html) |
| 2321 | 東訊 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2321/summary.html) |
| 2330 | 台積電 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2330/summary.html) |
| 2457 | 飛宏 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2457/summary.html) |
| 2477 | 美隆電 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2477/summary.html) |
| 2505 | 國揚 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2505/summary.html) |
| 2540 | 愛山林 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2540/summary.html) |
| 2616 | 山隆 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-2616/summary.html) |
| 3003 | 健和興 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-3003/summary.html) |
| 3706 | 神達 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-3706/summary.html) |
| 3717 | 聯嘉投控 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-3717/summary.html) |
| 4142 | 國光生 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-4142/summary.html) |
| 4590 | 富田-創 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-4590/summary.html) |
| 4746 | 台耀 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-4746/summary.html) |
| 4771 | 望隼 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-4771/summary.html) |
| 5521 | 工信 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-5521/summary.html) |
| 5907 | 大洋-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-5907/summary.html) |
| 6216 | 居易 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-6216/summary.html) |
| 6281 | 全國電 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-6281/summary.html) |
| 6415 | 矽力*-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-6415/summary.html) |
| 6541 | 泰福-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-6541/summary.html) |
| 6887 | 寶綠特-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-6887/summary.html) |
| 6958 | 日盛台駿 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-6958/summary.html) |
| 7780 | 大研生醫* | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-7780/summary.html) |
| 8367 | 建新國際 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-8367/summary.html) |
| 8429 | 金麗-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-8429/summary.html) |
| 8462 | 柏文 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-8462/summary.html) |
| 8478 | 東哥遊艇 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-8478/summary.html) |
| 8482 | 商億-KY | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-8482/summary.html) |
| 9110 | 越南控-DR | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-9110/summary.html) |
| 9911 | 櫻花 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-9911/summary.html) |
| 9931 | 欣高 | 現在可以買名單 |   |  |  |  | [摘要](companies/tw-9931/summary.html) |
