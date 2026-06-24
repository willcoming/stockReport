# StockLoop PEI 完整批次報告 2026-06-24 - TW single-name 6695

- 產出時間：2026-06-24 12:43:03
- 標的池檔數：1
- 已具備目前價格與研究狀態的列數：1
- 來源報告：ad_hoc_user_request:6695
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 1 檔標的；來源為 ad_hoc_user_request:6695。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：1 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：1 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- 研究狀態 partial（證據仍不足）：1 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 1 |
| 分類 | 現在不能買，但值得等買點名單 | 1 |
| 研究標籤 | Wait for trigger（等待觸發） | 1 |
| 研究狀態 | partial（證據仍不足） | 1 |
| 估值狀態 | not_run（本流程未執行估值模型） | 1 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- 尚未取得即時完整委買委賣、逐筆成交、法人/主力籌碼、融資融券與短線擁擠度資料
- 尚未取得完整法說會逐字稿、法人共識、訂單/backlog、客戶導入收入時程與毛利率橋接
- 尚未建立 DCF/comps 或正式目標價；TWSE P/E 因虧損為空白，P/B 只能作歷史估值快照
- 未使用個人庫存、券商股數、成本或持倉比重；本報告僅採模型投組 100 units 現金基準

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 6695 | 芯鼎 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 66.25 TWD | 2026-06-24T12:41:30+08:00 | partial（證據仍不足） | 0% pre-trigger; conditional <=5% only after evidence and trigger clearance | [摘要](companies/tw-6695/summary.html) | [風險](companies/tw-6695/risk_plan.html) | [啟動報告](companies/tw-6695/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 6695 | [摘要](companies/tw-6695/summary.html) | [公司摘要](companies/tw-6695/tearsheet.html) | [啟動報告](companies/tw-6695/initiation.html) | [風險](companies/tw-6695/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
