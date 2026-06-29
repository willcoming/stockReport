# StockLoop PEI 完整批次報告 2026-06-29 - TW K-line

- 產出時間：2026-06-29 12:52:29
- 標的池檔數：50
- 已具備目前價格與研究狀態的列數：0
- 來源報告：reports/twStock/2026-06-29-1250_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

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

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 50 |
| 分類 | 現在可以買名單 | 50 |
| 研究標籤 | missing | 50 |
| 研究狀態 | missing | 50 |
| 估值狀態 | missing | 50 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- 未記錄共同缺失研究證據。

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 00654R | 富邦印度反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00654R/summary.html) | [風險](companies/tw-00654R/risk_plan.html) | [啟動報告](companies/tw-00654R/initiation.html) |
| 00669R | 國泰美國道瓊反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00669R/summary.html) | [風險](companies/tw-00669R/risk_plan.html) | [啟動報告](companies/tw-00669R/initiation.html) |
| 00707R | 期元大S&P日圓反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00707R/summary.html) | [風險](companies/tw-00707R/risk_plan.html) | [啟動報告](companies/tw-00707R/initiation.html) |
| 00712 | 復華富時不動產 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00712/summary.html) | [風險](companies/tw-00712/risk_plan.html) | [啟動報告](companies/tw-00712/initiation.html) |
| 00771 | 元大US高息特別股 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00771/summary.html) | [風險](companies/tw-00771/risk_plan.html) | [啟動報告](companies/tw-00771/initiation.html) |
| 1413 | 宏洲 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1413/summary.html) | [風險](companies/tw-1413/risk_plan.html) | [啟動報告](companies/tw-1413/initiation.html) |
| 1453 | 大將 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1453/summary.html) | [風險](companies/tw-1453/risk_plan.html) | [啟動報告](companies/tw-1453/initiation.html) |
| 1460 | 宏遠 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1460/summary.html) | [風險](companies/tw-1460/risk_plan.html) | [啟動報告](companies/tw-1460/initiation.html) |
| 1471 | 首利 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1471/summary.html) | [風險](companies/tw-1471/risk_plan.html) | [啟動報告](companies/tw-1471/initiation.html) |
| 1526 | 日馳 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1526/summary.html) | [風險](companies/tw-1526/risk_plan.html) | [啟動報告](companies/tw-1526/initiation.html) |
| 1527 | 鑽全 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1527/summary.html) | [風險](companies/tw-1527/risk_plan.html) | [啟動報告](companies/tw-1527/initiation.html) |
| 1626 | 艾美特-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1626/summary.html) | [風險](companies/tw-1626/risk_plan.html) | [啟動報告](companies/tw-1626/initiation.html) |
| 1760 | 寶齡富錦 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1760/summary.html) | [風險](companies/tw-1760/risk_plan.html) | [啟動報告](companies/tw-1760/initiation.html) |
| 2027 | 大成鋼 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2027/summary.html) | [風險](companies/tw-2027/risk_plan.html) | [啟動報告](companies/tw-2027/initiation.html) |
| 2102 | 泰豐 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2102/summary.html) | [風險](companies/tw-2102/risk_plan.html) | [啟動報告](companies/tw-2102/initiation.html) |
| 2103 | 台橡 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2103/summary.html) | [風險](companies/tw-2103/risk_plan.html) | [啟動報告](companies/tw-2103/initiation.html) |
| 2206 | 三陽工業 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2206/summary.html) | [風險](companies/tw-2206/risk_plan.html) | [啟動報告](companies/tw-2206/initiation.html) |
| 2208 | 台船 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2208/summary.html) | [風險](companies/tw-2208/risk_plan.html) | [啟動報告](companies/tw-2208/initiation.html) |
| 2258 | 鴻華先進-創 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2258/summary.html) | [風險](companies/tw-2258/risk_plan.html) | [啟動報告](companies/tw-2258/initiation.html) |
| 2321 | 東訊 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2321/summary.html) | [風險](companies/tw-2321/risk_plan.html) | [啟動報告](companies/tw-2321/initiation.html) |
| 2330 | 台積電 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2457 | 飛宏 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2457/summary.html) | [風險](companies/tw-2457/risk_plan.html) | [啟動報告](companies/tw-2457/initiation.html) |
| 2477 | 美隆電 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2477/summary.html) | [風險](companies/tw-2477/risk_plan.html) | [啟動報告](companies/tw-2477/initiation.html) |
| 2505 | 國揚 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2505/summary.html) | [風險](companies/tw-2505/risk_plan.html) | [啟動報告](companies/tw-2505/initiation.html) |
| 2540 | 愛山林 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2540/summary.html) | [風險](companies/tw-2540/risk_plan.html) | [啟動報告](companies/tw-2540/initiation.html) |
| 2616 | 山隆 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2616/summary.html) | [風險](companies/tw-2616/risk_plan.html) | [啟動報告](companies/tw-2616/initiation.html) |
| 3003 | 健和興 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-3003/summary.html) | [風險](companies/tw-3003/risk_plan.html) | [啟動報告](companies/tw-3003/initiation.html) |
| 3706 | 神達 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-3706/summary.html) | [風險](companies/tw-3706/risk_plan.html) | [啟動報告](companies/tw-3706/initiation.html) |
| 3717 | 聯嘉投控 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-3717/summary.html) | [風險](companies/tw-3717/risk_plan.html) | [啟動報告](companies/tw-3717/initiation.html) |
| 4142 | 國光生 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-4142/summary.html) | [風險](companies/tw-4142/risk_plan.html) | [啟動報告](companies/tw-4142/initiation.html) |
| 4590 | 富田-創 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-4590/summary.html) | [風險](companies/tw-4590/risk_plan.html) | [啟動報告](companies/tw-4590/initiation.html) |
| 4746 | 台耀 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-4746/summary.html) | [風險](companies/tw-4746/risk_plan.html) | [啟動報告](companies/tw-4746/initiation.html) |
| 4771 | 望隼 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-4771/summary.html) | [風險](companies/tw-4771/risk_plan.html) | [啟動報告](companies/tw-4771/initiation.html) |
| 5521 | 工信 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-5521/summary.html) | [風險](companies/tw-5521/risk_plan.html) | [啟動報告](companies/tw-5521/initiation.html) |
| 5907 | 大洋-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-5907/summary.html) | [風險](companies/tw-5907/risk_plan.html) | [啟動報告](companies/tw-5907/initiation.html) |
| 6216 | 居易 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-6216/summary.html) | [風險](companies/tw-6216/risk_plan.html) | [啟動報告](companies/tw-6216/initiation.html) |
| 6281 | 全國電 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-6281/summary.html) | [風險](companies/tw-6281/risk_plan.html) | [啟動報告](companies/tw-6281/initiation.html) |
| 6415 | 矽力*-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-6415/summary.html) | [風險](companies/tw-6415/risk_plan.html) | [啟動報告](companies/tw-6415/initiation.html) |
| 6541 | 泰福-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-6541/summary.html) | [風險](companies/tw-6541/risk_plan.html) | [啟動報告](companies/tw-6541/initiation.html) |
| 6887 | 寶綠特-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-6887/summary.html) | [風險](companies/tw-6887/risk_plan.html) | [啟動報告](companies/tw-6887/initiation.html) |
| 6958 | 日盛台駿 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-6958/summary.html) | [風險](companies/tw-6958/risk_plan.html) | [啟動報告](companies/tw-6958/initiation.html) |
| 7780 | 大研生醫* | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-7780/summary.html) | [風險](companies/tw-7780/risk_plan.html) | [啟動報告](companies/tw-7780/initiation.html) |
| 8367 | 建新國際 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-8367/summary.html) | [風險](companies/tw-8367/risk_plan.html) | [啟動報告](companies/tw-8367/initiation.html) |
| 8429 | 金麗-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-8429/summary.html) | [風險](companies/tw-8429/risk_plan.html) | [啟動報告](companies/tw-8429/initiation.html) |
| 8462 | 柏文 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-8462/summary.html) | [風險](companies/tw-8462/risk_plan.html) | [啟動報告](companies/tw-8462/initiation.html) |
| 8478 | 東哥遊艇 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-8478/summary.html) | [風險](companies/tw-8478/risk_plan.html) | [啟動報告](companies/tw-8478/initiation.html) |
| 8482 | 商億-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-8482/summary.html) | [風險](companies/tw-8482/risk_plan.html) | [啟動報告](companies/tw-8482/initiation.html) |
| 9110 | 越南控-DR | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-9110/summary.html) | [風險](companies/tw-9110/risk_plan.html) | [啟動報告](companies/tw-9110/initiation.html) |
| 9911 | 櫻花 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-9911/summary.html) | [風險](companies/tw-9911/risk_plan.html) | [啟動報告](companies/tw-9911/initiation.html) |
| 9931 | 欣高 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-9931/summary.html) | [風險](companies/tw-9931/risk_plan.html) | [啟動報告](companies/tw-9931/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 00654R | [摘要](companies/tw-00654R/summary.html) | [公司摘要](companies/tw-00654R/tearsheet.html) | [啟動報告](companies/tw-00654R/initiation.html) | [風險](companies/tw-00654R/risk_plan.html) |
| 00669R | [摘要](companies/tw-00669R/summary.html) | [公司摘要](companies/tw-00669R/tearsheet.html) | [啟動報告](companies/tw-00669R/initiation.html) | [風險](companies/tw-00669R/risk_plan.html) |
| 00707R | [摘要](companies/tw-00707R/summary.html) | [公司摘要](companies/tw-00707R/tearsheet.html) | [啟動報告](companies/tw-00707R/initiation.html) | [風險](companies/tw-00707R/risk_plan.html) |
| 00712 | [摘要](companies/tw-00712/summary.html) | [公司摘要](companies/tw-00712/tearsheet.html) | [啟動報告](companies/tw-00712/initiation.html) | [風險](companies/tw-00712/risk_plan.html) |
| 00771 | [摘要](companies/tw-00771/summary.html) | [公司摘要](companies/tw-00771/tearsheet.html) | [啟動報告](companies/tw-00771/initiation.html) | [風險](companies/tw-00771/risk_plan.html) |
| 1413 | [摘要](companies/tw-1413/summary.html) | [公司摘要](companies/tw-1413/tearsheet.html) | [啟動報告](companies/tw-1413/initiation.html) | [風險](companies/tw-1413/risk_plan.html) |
| 1453 | [摘要](companies/tw-1453/summary.html) | [公司摘要](companies/tw-1453/tearsheet.html) | [啟動報告](companies/tw-1453/initiation.html) | [風險](companies/tw-1453/risk_plan.html) |
| 1460 | [摘要](companies/tw-1460/summary.html) | [公司摘要](companies/tw-1460/tearsheet.html) | [啟動報告](companies/tw-1460/initiation.html) | [風險](companies/tw-1460/risk_plan.html) |
| 1471 | [摘要](companies/tw-1471/summary.html) | [公司摘要](companies/tw-1471/tearsheet.html) | [啟動報告](companies/tw-1471/initiation.html) | [風險](companies/tw-1471/risk_plan.html) |
| 1526 | [摘要](companies/tw-1526/summary.html) | [公司摘要](companies/tw-1526/tearsheet.html) | [啟動報告](companies/tw-1526/initiation.html) | [風險](companies/tw-1526/risk_plan.html) |
| 1527 | [摘要](companies/tw-1527/summary.html) | [公司摘要](companies/tw-1527/tearsheet.html) | [啟動報告](companies/tw-1527/initiation.html) | [風險](companies/tw-1527/risk_plan.html) |
| 1626 | [摘要](companies/tw-1626/summary.html) | [公司摘要](companies/tw-1626/tearsheet.html) | [啟動報告](companies/tw-1626/initiation.html) | [風險](companies/tw-1626/risk_plan.html) |
| 1760 | [摘要](companies/tw-1760/summary.html) | [公司摘要](companies/tw-1760/tearsheet.html) | [啟動報告](companies/tw-1760/initiation.html) | [風險](companies/tw-1760/risk_plan.html) |
| 2027 | [摘要](companies/tw-2027/summary.html) | [公司摘要](companies/tw-2027/tearsheet.html) | [啟動報告](companies/tw-2027/initiation.html) | [風險](companies/tw-2027/risk_plan.html) |
| 2102 | [摘要](companies/tw-2102/summary.html) | [公司摘要](companies/tw-2102/tearsheet.html) | [啟動報告](companies/tw-2102/initiation.html) | [風險](companies/tw-2102/risk_plan.html) |
| 2103 | [摘要](companies/tw-2103/summary.html) | [公司摘要](companies/tw-2103/tearsheet.html) | [啟動報告](companies/tw-2103/initiation.html) | [風險](companies/tw-2103/risk_plan.html) |
| 2206 | [摘要](companies/tw-2206/summary.html) | [公司摘要](companies/tw-2206/tearsheet.html) | [啟動報告](companies/tw-2206/initiation.html) | [風險](companies/tw-2206/risk_plan.html) |
| 2208 | [摘要](companies/tw-2208/summary.html) | [公司摘要](companies/tw-2208/tearsheet.html) | [啟動報告](companies/tw-2208/initiation.html) | [風險](companies/tw-2208/risk_plan.html) |
| 2258 | [摘要](companies/tw-2258/summary.html) | [公司摘要](companies/tw-2258/tearsheet.html) | [啟動報告](companies/tw-2258/initiation.html) | [風險](companies/tw-2258/risk_plan.html) |
| 2321 | [摘要](companies/tw-2321/summary.html) | [公司摘要](companies/tw-2321/tearsheet.html) | [啟動報告](companies/tw-2321/initiation.html) | [風險](companies/tw-2321/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2457 | [摘要](companies/tw-2457/summary.html) | [公司摘要](companies/tw-2457/tearsheet.html) | [啟動報告](companies/tw-2457/initiation.html) | [風險](companies/tw-2457/risk_plan.html) |
| 2477 | [摘要](companies/tw-2477/summary.html) | [公司摘要](companies/tw-2477/tearsheet.html) | [啟動報告](companies/tw-2477/initiation.html) | [風險](companies/tw-2477/risk_plan.html) |
| 2505 | [摘要](companies/tw-2505/summary.html) | [公司摘要](companies/tw-2505/tearsheet.html) | [啟動報告](companies/tw-2505/initiation.html) | [風險](companies/tw-2505/risk_plan.html) |
| 2540 | [摘要](companies/tw-2540/summary.html) | [公司摘要](companies/tw-2540/tearsheet.html) | [啟動報告](companies/tw-2540/initiation.html) | [風險](companies/tw-2540/risk_plan.html) |
| 2616 | [摘要](companies/tw-2616/summary.html) | [公司摘要](companies/tw-2616/tearsheet.html) | [啟動報告](companies/tw-2616/initiation.html) | [風險](companies/tw-2616/risk_plan.html) |
| 3003 | [摘要](companies/tw-3003/summary.html) | [公司摘要](companies/tw-3003/tearsheet.html) | [啟動報告](companies/tw-3003/initiation.html) | [風險](companies/tw-3003/risk_plan.html) |
| 3706 | [摘要](companies/tw-3706/summary.html) | [公司摘要](companies/tw-3706/tearsheet.html) | [啟動報告](companies/tw-3706/initiation.html) | [風險](companies/tw-3706/risk_plan.html) |
| 3717 | [摘要](companies/tw-3717/summary.html) | [公司摘要](companies/tw-3717/tearsheet.html) | [啟動報告](companies/tw-3717/initiation.html) | [風險](companies/tw-3717/risk_plan.html) |
| 4142 | [摘要](companies/tw-4142/summary.html) | [公司摘要](companies/tw-4142/tearsheet.html) | [啟動報告](companies/tw-4142/initiation.html) | [風險](companies/tw-4142/risk_plan.html) |
| 4590 | [摘要](companies/tw-4590/summary.html) | [公司摘要](companies/tw-4590/tearsheet.html) | [啟動報告](companies/tw-4590/initiation.html) | [風險](companies/tw-4590/risk_plan.html) |
| 4746 | [摘要](companies/tw-4746/summary.html) | [公司摘要](companies/tw-4746/tearsheet.html) | [啟動報告](companies/tw-4746/initiation.html) | [風險](companies/tw-4746/risk_plan.html) |
| 4771 | [摘要](companies/tw-4771/summary.html) | [公司摘要](companies/tw-4771/tearsheet.html) | [啟動報告](companies/tw-4771/initiation.html) | [風險](companies/tw-4771/risk_plan.html) |
| 5521 | [摘要](companies/tw-5521/summary.html) | [公司摘要](companies/tw-5521/tearsheet.html) | [啟動報告](companies/tw-5521/initiation.html) | [風險](companies/tw-5521/risk_plan.html) |
| 5907 | [摘要](companies/tw-5907/summary.html) | [公司摘要](companies/tw-5907/tearsheet.html) | [啟動報告](companies/tw-5907/initiation.html) | [風險](companies/tw-5907/risk_plan.html) |
| 6216 | [摘要](companies/tw-6216/summary.html) | [公司摘要](companies/tw-6216/tearsheet.html) | [啟動報告](companies/tw-6216/initiation.html) | [風險](companies/tw-6216/risk_plan.html) |
| 6281 | [摘要](companies/tw-6281/summary.html) | [公司摘要](companies/tw-6281/tearsheet.html) | [啟動報告](companies/tw-6281/initiation.html) | [風險](companies/tw-6281/risk_plan.html) |
| 6415 | [摘要](companies/tw-6415/summary.html) | [公司摘要](companies/tw-6415/tearsheet.html) | [啟動報告](companies/tw-6415/initiation.html) | [風險](companies/tw-6415/risk_plan.html) |
| 6541 | [摘要](companies/tw-6541/summary.html) | [公司摘要](companies/tw-6541/tearsheet.html) | [啟動報告](companies/tw-6541/initiation.html) | [風險](companies/tw-6541/risk_plan.html) |
| 6887 | [摘要](companies/tw-6887/summary.html) | [公司摘要](companies/tw-6887/tearsheet.html) | [啟動報告](companies/tw-6887/initiation.html) | [風險](companies/tw-6887/risk_plan.html) |
| 6958 | [摘要](companies/tw-6958/summary.html) | [公司摘要](companies/tw-6958/tearsheet.html) | [啟動報告](companies/tw-6958/initiation.html) | [風險](companies/tw-6958/risk_plan.html) |
| 7780 | [摘要](companies/tw-7780/summary.html) | [公司摘要](companies/tw-7780/tearsheet.html) | [啟動報告](companies/tw-7780/initiation.html) | [風險](companies/tw-7780/risk_plan.html) |
| 8367 | [摘要](companies/tw-8367/summary.html) | [公司摘要](companies/tw-8367/tearsheet.html) | [啟動報告](companies/tw-8367/initiation.html) | [風險](companies/tw-8367/risk_plan.html) |
| 8429 | [摘要](companies/tw-8429/summary.html) | [公司摘要](companies/tw-8429/tearsheet.html) | [啟動報告](companies/tw-8429/initiation.html) | [風險](companies/tw-8429/risk_plan.html) |
| 8462 | [摘要](companies/tw-8462/summary.html) | [公司摘要](companies/tw-8462/tearsheet.html) | [啟動報告](companies/tw-8462/initiation.html) | [風險](companies/tw-8462/risk_plan.html) |
| 8478 | [摘要](companies/tw-8478/summary.html) | [公司摘要](companies/tw-8478/tearsheet.html) | [啟動報告](companies/tw-8478/initiation.html) | [風險](companies/tw-8478/risk_plan.html) |
| 8482 | [摘要](companies/tw-8482/summary.html) | [公司摘要](companies/tw-8482/tearsheet.html) | [啟動報告](companies/tw-8482/initiation.html) | [風險](companies/tw-8482/risk_plan.html) |
| 9110 | [摘要](companies/tw-9110/summary.html) | [公司摘要](companies/tw-9110/tearsheet.html) | [啟動報告](companies/tw-9110/initiation.html) | [風險](companies/tw-9110/risk_plan.html) |
| 9911 | [摘要](companies/tw-9911/summary.html) | [公司摘要](companies/tw-9911/tearsheet.html) | [啟動報告](companies/tw-9911/initiation.html) | [風險](companies/tw-9911/risk_plan.html) |
| 9931 | [摘要](companies/tw-9931/summary.html) | [公司摘要](companies/tw-9931/tearsheet.html) | [啟動報告](companies/tw-9931/initiation.html) | [風險](companies/tw-9931/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
