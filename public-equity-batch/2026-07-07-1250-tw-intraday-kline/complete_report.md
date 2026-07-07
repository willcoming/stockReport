# StockLoop PEI 完整批次報告 2026-07-07 - TW K-line

- 產出時間：2026-07-07 12:52:59
- 標的池檔數：32
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-07-1250_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 32 檔標的；來源為 reports/twStock/2026-07-07-1250_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：0 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- missing：32 檔。
- 研究狀態 missing：32 檔。
- 期限 underwrite missing（未提供期限 underwrite）：32 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 32 |
| 分類 | 現在可以買名單 | 32 |
| 研究標籤 | missing | 32 |
| 研究狀態 | missing | 32 |
| 估值狀態 | missing | 32 |
| 風控狀態 | missing | 32 |
| 期限 underwrite | missing（未提供期限 underwrite） | 32 |
| 決策就緒 | 否 | 32 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 32 |
| market_data_not_complete | 32 |
| official_validation_not_complete | 32 |
| research_status_not_complete | 32 |
| risk_status_not_complete | 32 |
| valuation_status_not_complete | 32 |

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

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 00625K | 富邦上証+R | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00625K/summary.html) | [風險](companies/tw-00625K/risk_plan.html) | [啟動報告](companies/tw-00625K/initiation.html) |
| 00657 | 國泰日經225 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00657/summary.html) | [風險](companies/tw-00657/risk_plan.html) | [啟動報告](companies/tw-00657/initiation.html) |
| 00661 | 元大日經225 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00661/summary.html) | [風險](companies/tw-00661/risk_plan.html) | [啟動報告](companies/tw-00661/initiation.html) |
| 00684R | 期元大美元指反1 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00684R/summary.html) | [風險](companies/tw-00684R/risk_plan.html) | [啟動報告](companies/tw-00684R/initiation.html) |
| 00876 | 元大全球5G | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00876/summary.html) | [風險](companies/tw-00876/risk_plan.html) | [啟動報告](companies/tw-00876/initiation.html) |
| 00892 | 富邦台灣半導體 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-00892/summary.html) | [風險](companies/tw-00892/risk_plan.html) | [啟動報告](companies/tw-00892/initiation.html) |
| 1323 | 永裕 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1323/summary.html) | [風險](companies/tw-1323/risk_plan.html) | [啟動報告](companies/tw-1323/initiation.html) |
| 1449 | 佳和 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1449/summary.html) | [風險](companies/tw-1449/risk_plan.html) | [啟動報告](companies/tw-1449/initiation.html) |
| 1560 | 中砂 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-1560/summary.html) | [風險](companies/tw-1560/risk_plan.html) | [啟動報告](companies/tw-1560/initiation.html) |
| 2023 | 燁輝 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2023/summary.html) | [風險](companies/tw-2023/risk_plan.html) | [啟動報告](companies/tw-2023/initiation.html) |
| 2438 | 翔耀 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2438/summary.html) | [風險](companies/tw-2438/risk_plan.html) | [啟動報告](companies/tw-2438/initiation.html) |
| 2540 | 愛山林 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2540/summary.html) | [風險](companies/tw-2540/risk_plan.html) | [啟動報告](companies/tw-2540/initiation.html) |
| 2548 | 華固 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2548/summary.html) | [風險](companies/tw-2548/risk_plan.html) | [啟動報告](companies/tw-2548/initiation.html) |
| 2614 | 東森 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-2614/summary.html) | [風險](companies/tw-2614/risk_plan.html) | [啟動報告](companies/tw-2614/initiation.html) |
| 3017 | 奇鋐 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3017/summary.html) | [風險](companies/tw-3017/risk_plan.html) | [啟動報告](companies/tw-3017/initiation.html) |
| 3024 | 憶聲 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3024/summary.html) | [風險](companies/tw-3024/risk_plan.html) | [啟動報告](companies/tw-3024/initiation.html) |
| 3583 | 辛耘 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3583/summary.html) | [風險](companies/tw-3583/risk_plan.html) | [啟動報告](companies/tw-3583/initiation.html) |
| 3596 | 智易 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3596/summary.html) | [風險](companies/tw-3596/risk_plan.html) | [啟動報告](companies/tw-3596/initiation.html) |
| 3686 | 達能 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3686/summary.html) | [風險](companies/tw-3686/risk_plan.html) | [啟動報告](companies/tw-3686/initiation.html) |
| 3712 | 永崴投控 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-3712/summary.html) | [風險](companies/tw-3712/risk_plan.html) | [啟動報告](companies/tw-3712/initiation.html) |
| 4766 | 南寶 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-4766/summary.html) | [風險](companies/tw-4766/risk_plan.html) | [啟動報告](companies/tw-4766/initiation.html) |
| 5608 | 四維航 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5608/summary.html) | [風險](companies/tw-5608/risk_plan.html) | [啟動報告](companies/tw-5608/initiation.html) |
| 5876 | 上海商銀 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5876/summary.html) | [風險](companies/tw-5876/risk_plan.html) | [啟動報告](companies/tw-5876/initiation.html) |
| 5906 | 台南-KY | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-5906/summary.html) | [風險](companies/tw-5906/risk_plan.html) | [啟動報告](companies/tw-5906/initiation.html) |
| 6183 | 關貿 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6183/summary.html) | [風險](companies/tw-6183/risk_plan.html) | [啟動報告](companies/tw-6183/initiation.html) |
| 6438 | 迅得 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6438/summary.html) | [風險](companies/tw-6438/risk_plan.html) | [啟動報告](companies/tw-6438/initiation.html) |
| 6757 | 台灣虎航 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6757/summary.html) | [風險](companies/tw-6757/risk_plan.html) | [啟動報告](companies/tw-6757/initiation.html) |
| 6921 | 嘉雨思-創 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6921/summary.html) | [風險](companies/tw-6921/risk_plan.html) | [啟動報告](companies/tw-6921/initiation.html) |
| 6934 | 心誠鎂 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-6934/summary.html) | [風險](companies/tw-6934/risk_plan.html) | [啟動報告](companies/tw-6934/initiation.html) |
| 8103 | 瀚荃 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-8103/summary.html) | [風險](companies/tw-8103/risk_plan.html) | [啟動報告](companies/tw-8103/initiation.html) |
| 9918 | 欣天然 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9918/summary.html) | [風險](companies/tw-9918/risk_plan.html) | [啟動報告](companies/tw-9918/initiation.html) |
| 9933 | 中鼎 | 現在可以買名單 |  |  |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management |  |  |  |  | [摘要](companies/tw-9933/summary.html) | [風險](companies/tw-9933/risk_plan.html) | [啟動報告](companies/tw-9933/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 00625K | [摘要](companies/tw-00625K/summary.html) | [公司摘要](companies/tw-00625K/tearsheet.html) | [啟動報告](companies/tw-00625K/initiation.html) | [風險](companies/tw-00625K/risk_plan.html) |
| 00657 | [摘要](companies/tw-00657/summary.html) | [公司摘要](companies/tw-00657/tearsheet.html) | [啟動報告](companies/tw-00657/initiation.html) | [風險](companies/tw-00657/risk_plan.html) |
| 00661 | [摘要](companies/tw-00661/summary.html) | [公司摘要](companies/tw-00661/tearsheet.html) | [啟動報告](companies/tw-00661/initiation.html) | [風險](companies/tw-00661/risk_plan.html) |
| 00684R | [摘要](companies/tw-00684R/summary.html) | [公司摘要](companies/tw-00684R/tearsheet.html) | [啟動報告](companies/tw-00684R/initiation.html) | [風險](companies/tw-00684R/risk_plan.html) |
| 00876 | [摘要](companies/tw-00876/summary.html) | [公司摘要](companies/tw-00876/tearsheet.html) | [啟動報告](companies/tw-00876/initiation.html) | [風險](companies/tw-00876/risk_plan.html) |
| 00892 | [摘要](companies/tw-00892/summary.html) | [公司摘要](companies/tw-00892/tearsheet.html) | [啟動報告](companies/tw-00892/initiation.html) | [風險](companies/tw-00892/risk_plan.html) |
| 1323 | [摘要](companies/tw-1323/summary.html) | [公司摘要](companies/tw-1323/tearsheet.html) | [啟動報告](companies/tw-1323/initiation.html) | [風險](companies/tw-1323/risk_plan.html) |
| 1449 | [摘要](companies/tw-1449/summary.html) | [公司摘要](companies/tw-1449/tearsheet.html) | [啟動報告](companies/tw-1449/initiation.html) | [風險](companies/tw-1449/risk_plan.html) |
| 1560 | [摘要](companies/tw-1560/summary.html) | [公司摘要](companies/tw-1560/tearsheet.html) | [啟動報告](companies/tw-1560/initiation.html) | [風險](companies/tw-1560/risk_plan.html) |
| 2023 | [摘要](companies/tw-2023/summary.html) | [公司摘要](companies/tw-2023/tearsheet.html) | [啟動報告](companies/tw-2023/initiation.html) | [風險](companies/tw-2023/risk_plan.html) |
| 2438 | [摘要](companies/tw-2438/summary.html) | [公司摘要](companies/tw-2438/tearsheet.html) | [啟動報告](companies/tw-2438/initiation.html) | [風險](companies/tw-2438/risk_plan.html) |
| 2540 | [摘要](companies/tw-2540/summary.html) | [公司摘要](companies/tw-2540/tearsheet.html) | [啟動報告](companies/tw-2540/initiation.html) | [風險](companies/tw-2540/risk_plan.html) |
| 2548 | [摘要](companies/tw-2548/summary.html) | [公司摘要](companies/tw-2548/tearsheet.html) | [啟動報告](companies/tw-2548/initiation.html) | [風險](companies/tw-2548/risk_plan.html) |
| 2614 | [摘要](companies/tw-2614/summary.html) | [公司摘要](companies/tw-2614/tearsheet.html) | [啟動報告](companies/tw-2614/initiation.html) | [風險](companies/tw-2614/risk_plan.html) |
| 3017 | [摘要](companies/tw-3017/summary.html) | [公司摘要](companies/tw-3017/tearsheet.html) | [啟動報告](companies/tw-3017/initiation.html) | [風險](companies/tw-3017/risk_plan.html) |
| 3024 | [摘要](companies/tw-3024/summary.html) | [公司摘要](companies/tw-3024/tearsheet.html) | [啟動報告](companies/tw-3024/initiation.html) | [風險](companies/tw-3024/risk_plan.html) |
| 3583 | [摘要](companies/tw-3583/summary.html) | [公司摘要](companies/tw-3583/tearsheet.html) | [啟動報告](companies/tw-3583/initiation.html) | [風險](companies/tw-3583/risk_plan.html) |
| 3596 | [摘要](companies/tw-3596/summary.html) | [公司摘要](companies/tw-3596/tearsheet.html) | [啟動報告](companies/tw-3596/initiation.html) | [風險](companies/tw-3596/risk_plan.html) |
| 3686 | [摘要](companies/tw-3686/summary.html) | [公司摘要](companies/tw-3686/tearsheet.html) | [啟動報告](companies/tw-3686/initiation.html) | [風險](companies/tw-3686/risk_plan.html) |
| 3712 | [摘要](companies/tw-3712/summary.html) | [公司摘要](companies/tw-3712/tearsheet.html) | [啟動報告](companies/tw-3712/initiation.html) | [風險](companies/tw-3712/risk_plan.html) |
| 4766 | [摘要](companies/tw-4766/summary.html) | [公司摘要](companies/tw-4766/tearsheet.html) | [啟動報告](companies/tw-4766/initiation.html) | [風險](companies/tw-4766/risk_plan.html) |
| 5608 | [摘要](companies/tw-5608/summary.html) | [公司摘要](companies/tw-5608/tearsheet.html) | [啟動報告](companies/tw-5608/initiation.html) | [風險](companies/tw-5608/risk_plan.html) |
| 5876 | [摘要](companies/tw-5876/summary.html) | [公司摘要](companies/tw-5876/tearsheet.html) | [啟動報告](companies/tw-5876/initiation.html) | [風險](companies/tw-5876/risk_plan.html) |
| 5906 | [摘要](companies/tw-5906/summary.html) | [公司摘要](companies/tw-5906/tearsheet.html) | [啟動報告](companies/tw-5906/initiation.html) | [風險](companies/tw-5906/risk_plan.html) |
| 6183 | [摘要](companies/tw-6183/summary.html) | [公司摘要](companies/tw-6183/tearsheet.html) | [啟動報告](companies/tw-6183/initiation.html) | [風險](companies/tw-6183/risk_plan.html) |
| 6438 | [摘要](companies/tw-6438/summary.html) | [公司摘要](companies/tw-6438/tearsheet.html) | [啟動報告](companies/tw-6438/initiation.html) | [風險](companies/tw-6438/risk_plan.html) |
| 6757 | [摘要](companies/tw-6757/summary.html) | [公司摘要](companies/tw-6757/tearsheet.html) | [啟動報告](companies/tw-6757/initiation.html) | [風險](companies/tw-6757/risk_plan.html) |
| 6921 | [摘要](companies/tw-6921/summary.html) | [公司摘要](companies/tw-6921/tearsheet.html) | [啟動報告](companies/tw-6921/initiation.html) | [風險](companies/tw-6921/risk_plan.html) |
| 6934 | [摘要](companies/tw-6934/summary.html) | [公司摘要](companies/tw-6934/tearsheet.html) | [啟動報告](companies/tw-6934/initiation.html) | [風險](companies/tw-6934/risk_plan.html) |
| 8103 | [摘要](companies/tw-8103/summary.html) | [公司摘要](companies/tw-8103/tearsheet.html) | [啟動報告](companies/tw-8103/initiation.html) | [風險](companies/tw-8103/risk_plan.html) |
| 9918 | [摘要](companies/tw-9918/summary.html) | [公司摘要](companies/tw-9918/tearsheet.html) | [啟動報告](companies/tw-9918/initiation.html) | [風險](companies/tw-9918/risk_plan.html) |
| 9933 | [摘要](companies/tw-9933/summary.html) | [公司摘要](companies/tw-9933/tearsheet.html) | [啟動報告](companies/tw-9933/initiation.html) | [風險](companies/tw-9933/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
