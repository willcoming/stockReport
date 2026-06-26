# StockLoop PEI 完整批次報告 2026-06-26 - TW K-line

- 產出時間：2026-06-26 13:45:29
- 標的池檔數：32
- 已具備目前價格與研究狀態的列數：0
- 來源報告：reports/twStock/2026-06-26-1250_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 32 檔標的；來源為 reports/twStock/2026-06-26-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：32 檔。
- 研究狀態 missing：32 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 32 |
| 分類 | 現在可以買名單 | 32 |
| 研究標籤 | missing | 32 |
| 研究狀態 | missing | 32 |
| 估值狀態 | missing | 32 |

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
| 00625K | 富邦上証+R | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00625K/summary.html) | [風險](companies/tw-00625K/risk_plan.html) | [啟動報告](companies/tw-00625K/initiation.html) |
| 00632R | 元大台灣50反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00632R/summary.html) | [風險](companies/tw-00632R/risk_plan.html) | [啟動報告](companies/tw-00632R/initiation.html) |
| 00634R | 富邦上証反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00634R/summary.html) | [風險](companies/tw-00634R/risk_plan.html) | [啟動報告](companies/tw-00634R/initiation.html) |
| 00638R | 元大滬深300反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00638R/summary.html) | [風險](companies/tw-00638R/risk_plan.html) | [啟動報告](companies/tw-00638R/initiation.html) |
| 00641R | 富邦日本反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00641R/summary.html) | [風險](companies/tw-00641R/risk_plan.html) | [啟動報告](companies/tw-00641R/initiation.html) |
| 00664R | 國泰臺灣加權反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00664R/summary.html) | [風險](companies/tw-00664R/risk_plan.html) | [啟動報告](companies/tw-00664R/initiation.html) |
| 00671R | 富邦NASDAQ反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00671R/summary.html) | [風險](companies/tw-00671R/risk_plan.html) | [啟動報告](companies/tw-00671R/initiation.html) |
| 00676R | 富邦臺灣加權反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00676R/summary.html) | [風險](companies/tw-00676R/risk_plan.html) | [啟動報告](companies/tw-00676R/initiation.html) |
| 00686R | 群益臺灣加權反1 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00686R/summary.html) | [風險](companies/tw-00686R/risk_plan.html) | [啟動報告](companies/tw-00686R/initiation.html) |
| 00972 | 野村日本動能高息 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-00972/summary.html) | [風險](companies/tw-00972/risk_plan.html) | [啟動報告](companies/tw-00972/initiation.html) |
| 1316 | 上曜 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1316/summary.html) | [風險](companies/tw-1316/risk_plan.html) | [啟動報告](companies/tw-1316/initiation.html) |
| 1447 | 力鵬 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1447/summary.html) | [風險](companies/tw-1447/risk_plan.html) | [啟動報告](companies/tw-1447/initiation.html) |
| 1470 | 大統新創 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-1470/summary.html) | [風險](companies/tw-1470/risk_plan.html) | [啟動報告](companies/tw-1470/initiation.html) |
| 2072 | 世紀風電 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2072/summary.html) | [風險](companies/tw-2072/risk_plan.html) | [啟動報告](companies/tw-2072/initiation.html) |
| 2236 | 百達-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2236/summary.html) | [風險](companies/tw-2236/risk_plan.html) | [啟動報告](companies/tw-2236/initiation.html) |
| 2248 | 華勝-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2248/summary.html) | [風險](companies/tw-2248/risk_plan.html) | [啟動報告](companies/tw-2248/initiation.html) |
| 2424 | 隴華 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2424/summary.html) | [風險](companies/tw-2424/risk_plan.html) | [啟動報告](companies/tw-2424/initiation.html) |
| 2480 | 敦陽科 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2480/summary.html) | [風險](companies/tw-2480/risk_plan.html) | [啟動報告](companies/tw-2480/initiation.html) |
| 2910 | 統領 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-2910/summary.html) | [風險](companies/tw-2910/risk_plan.html) | [啟動報告](companies/tw-2910/initiation.html) |
| 4106 | 雃博 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-4106/summary.html) | [風險](companies/tw-4106/risk_plan.html) | [啟動報告](companies/tw-4106/initiation.html) |
| 4439 | 冠星-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-4439/summary.html) | [風險](companies/tw-4439/risk_plan.html) | [啟動報告](companies/tw-4439/initiation.html) |
| 4545 | 銘鈺 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-4545/summary.html) | [風險](companies/tw-4545/risk_plan.html) | [啟動報告](companies/tw-4545/initiation.html) |
| 4581 | 光隆精密-KY | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-4581/summary.html) | [風險](companies/tw-4581/risk_plan.html) | [啟動報告](companies/tw-4581/initiation.html) |
| 5515 | 建國 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-5515/summary.html) | [風險](companies/tw-5515/risk_plan.html) | [啟動報告](companies/tw-5515/initiation.html) |
| 6464 | 台數科 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-6464/summary.html) | [風險](companies/tw-6464/risk_plan.html) | [啟動報告](companies/tw-6464/initiation.html) |
| 6743 | 安普新 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-6743/summary.html) | [風險](companies/tw-6743/risk_plan.html) | [啟動報告](companies/tw-6743/initiation.html) |
| 7732 | 金興精密 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-7732/summary.html) | [風險](companies/tw-7732/risk_plan.html) | [啟動報告](companies/tw-7732/initiation.html) |
| 8150 | 南茂 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-8150/summary.html) | [風險](companies/tw-8150/risk_plan.html) | [啟動報告](companies/tw-8150/initiation.html) |
| 9912 | 偉聯 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-9912/summary.html) | [風險](companies/tw-9912/risk_plan.html) | [啟動報告](companies/tw-9912/initiation.html) |
| 9914 | 美利達 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-9914/summary.html) | [風險](companies/tw-9914/risk_plan.html) | [啟動報告](companies/tw-9914/initiation.html) |
| 9937 | 全國 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-9937/summary.html) | [風險](companies/tw-9937/risk_plan.html) | [啟動報告](companies/tw-9937/initiation.html) |
| 9939 | 宏全 | 現在可以買名單 |  |  |  |  |  | [摘要](companies/tw-9939/summary.html) | [風險](companies/tw-9939/risk_plan.html) | [啟動報告](companies/tw-9939/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 00625K | [摘要](companies/tw-00625K/summary.html) | [公司摘要](companies/tw-00625K/tearsheet.html) | [啟動報告](companies/tw-00625K/initiation.html) | [風險](companies/tw-00625K/risk_plan.html) |
| 00632R | [摘要](companies/tw-00632R/summary.html) | [公司摘要](companies/tw-00632R/tearsheet.html) | [啟動報告](companies/tw-00632R/initiation.html) | [風險](companies/tw-00632R/risk_plan.html) |
| 00634R | [摘要](companies/tw-00634R/summary.html) | [公司摘要](companies/tw-00634R/tearsheet.html) | [啟動報告](companies/tw-00634R/initiation.html) | [風險](companies/tw-00634R/risk_plan.html) |
| 00638R | [摘要](companies/tw-00638R/summary.html) | [公司摘要](companies/tw-00638R/tearsheet.html) | [啟動報告](companies/tw-00638R/initiation.html) | [風險](companies/tw-00638R/risk_plan.html) |
| 00641R | [摘要](companies/tw-00641R/summary.html) | [公司摘要](companies/tw-00641R/tearsheet.html) | [啟動報告](companies/tw-00641R/initiation.html) | [風險](companies/tw-00641R/risk_plan.html) |
| 00664R | [摘要](companies/tw-00664R/summary.html) | [公司摘要](companies/tw-00664R/tearsheet.html) | [啟動報告](companies/tw-00664R/initiation.html) | [風險](companies/tw-00664R/risk_plan.html) |
| 00671R | [摘要](companies/tw-00671R/summary.html) | [公司摘要](companies/tw-00671R/tearsheet.html) | [啟動報告](companies/tw-00671R/initiation.html) | [風險](companies/tw-00671R/risk_plan.html) |
| 00676R | [摘要](companies/tw-00676R/summary.html) | [公司摘要](companies/tw-00676R/tearsheet.html) | [啟動報告](companies/tw-00676R/initiation.html) | [風險](companies/tw-00676R/risk_plan.html) |
| 00686R | [摘要](companies/tw-00686R/summary.html) | [公司摘要](companies/tw-00686R/tearsheet.html) | [啟動報告](companies/tw-00686R/initiation.html) | [風險](companies/tw-00686R/risk_plan.html) |
| 00972 | [摘要](companies/tw-00972/summary.html) | [公司摘要](companies/tw-00972/tearsheet.html) | [啟動報告](companies/tw-00972/initiation.html) | [風險](companies/tw-00972/risk_plan.html) |
| 1316 | [摘要](companies/tw-1316/summary.html) | [公司摘要](companies/tw-1316/tearsheet.html) | [啟動報告](companies/tw-1316/initiation.html) | [風險](companies/tw-1316/risk_plan.html) |
| 1447 | [摘要](companies/tw-1447/summary.html) | [公司摘要](companies/tw-1447/tearsheet.html) | [啟動報告](companies/tw-1447/initiation.html) | [風險](companies/tw-1447/risk_plan.html) |
| 1470 | [摘要](companies/tw-1470/summary.html) | [公司摘要](companies/tw-1470/tearsheet.html) | [啟動報告](companies/tw-1470/initiation.html) | [風險](companies/tw-1470/risk_plan.html) |
| 2072 | [摘要](companies/tw-2072/summary.html) | [公司摘要](companies/tw-2072/tearsheet.html) | [啟動報告](companies/tw-2072/initiation.html) | [風險](companies/tw-2072/risk_plan.html) |
| 2236 | [摘要](companies/tw-2236/summary.html) | [公司摘要](companies/tw-2236/tearsheet.html) | [啟動報告](companies/tw-2236/initiation.html) | [風險](companies/tw-2236/risk_plan.html) |
| 2248 | [摘要](companies/tw-2248/summary.html) | [公司摘要](companies/tw-2248/tearsheet.html) | [啟動報告](companies/tw-2248/initiation.html) | [風險](companies/tw-2248/risk_plan.html) |
| 2424 | [摘要](companies/tw-2424/summary.html) | [公司摘要](companies/tw-2424/tearsheet.html) | [啟動報告](companies/tw-2424/initiation.html) | [風險](companies/tw-2424/risk_plan.html) |
| 2480 | [摘要](companies/tw-2480/summary.html) | [公司摘要](companies/tw-2480/tearsheet.html) | [啟動報告](companies/tw-2480/initiation.html) | [風險](companies/tw-2480/risk_plan.html) |
| 2910 | [摘要](companies/tw-2910/summary.html) | [公司摘要](companies/tw-2910/tearsheet.html) | [啟動報告](companies/tw-2910/initiation.html) | [風險](companies/tw-2910/risk_plan.html) |
| 4106 | [摘要](companies/tw-4106/summary.html) | [公司摘要](companies/tw-4106/tearsheet.html) | [啟動報告](companies/tw-4106/initiation.html) | [風險](companies/tw-4106/risk_plan.html) |
| 4439 | [摘要](companies/tw-4439/summary.html) | [公司摘要](companies/tw-4439/tearsheet.html) | [啟動報告](companies/tw-4439/initiation.html) | [風險](companies/tw-4439/risk_plan.html) |
| 4545 | [摘要](companies/tw-4545/summary.html) | [公司摘要](companies/tw-4545/tearsheet.html) | [啟動報告](companies/tw-4545/initiation.html) | [風險](companies/tw-4545/risk_plan.html) |
| 4581 | [摘要](companies/tw-4581/summary.html) | [公司摘要](companies/tw-4581/tearsheet.html) | [啟動報告](companies/tw-4581/initiation.html) | [風險](companies/tw-4581/risk_plan.html) |
| 5515 | [摘要](companies/tw-5515/summary.html) | [公司摘要](companies/tw-5515/tearsheet.html) | [啟動報告](companies/tw-5515/initiation.html) | [風險](companies/tw-5515/risk_plan.html) |
| 6464 | [摘要](companies/tw-6464/summary.html) | [公司摘要](companies/tw-6464/tearsheet.html) | [啟動報告](companies/tw-6464/initiation.html) | [風險](companies/tw-6464/risk_plan.html) |
| 6743 | [摘要](companies/tw-6743/summary.html) | [公司摘要](companies/tw-6743/tearsheet.html) | [啟動報告](companies/tw-6743/initiation.html) | [風險](companies/tw-6743/risk_plan.html) |
| 7732 | [摘要](companies/tw-7732/summary.html) | [公司摘要](companies/tw-7732/tearsheet.html) | [啟動報告](companies/tw-7732/initiation.html) | [風險](companies/tw-7732/risk_plan.html) |
| 8150 | [摘要](companies/tw-8150/summary.html) | [公司摘要](companies/tw-8150/tearsheet.html) | [啟動報告](companies/tw-8150/initiation.html) | [風險](companies/tw-8150/risk_plan.html) |
| 9912 | [摘要](companies/tw-9912/summary.html) | [公司摘要](companies/tw-9912/tearsheet.html) | [啟動報告](companies/tw-9912/initiation.html) | [風險](companies/tw-9912/risk_plan.html) |
| 9914 | [摘要](companies/tw-9914/summary.html) | [公司摘要](companies/tw-9914/tearsheet.html) | [啟動報告](companies/tw-9914/initiation.html) | [風險](companies/tw-9914/risk_plan.html) |
| 9937 | [摘要](companies/tw-9937/summary.html) | [公司摘要](companies/tw-9937/tearsheet.html) | [啟動報告](companies/tw-9937/initiation.html) | [風險](companies/tw-9937/risk_plan.html) |
| 9939 | [摘要](companies/tw-9939/summary.html) | [公司摘要](companies/tw-9939/tearsheet.html) | [啟動報告](companies/tw-9939/initiation.html) | [風險](companies/tw-9939/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
