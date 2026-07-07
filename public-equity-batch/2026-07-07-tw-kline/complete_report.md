# StockLoop PEI 完整批次報告 2026-07-07 - TW K-line

- 產出時間：2026-07-07 16:13:10
- 標的池檔數：10
- 已具備目前價格與研究狀態的列數：10
- Decision-ready 檔數：0
- 來源報告：reports/twStock/2026-07-07_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 10 檔標的；來源為 reports/twStock/2026-07-07_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：10 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：9 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：1 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：10 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：10 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 10 |
| 分類 | 現在可以買名單 | 1 |
| 分類 | 現在不能買，但值得等買點名單 | 9 |
| 研究標籤 | Wait for trigger（等待觸發） | 9 |
| 研究標籤 | Watch only（僅觀察） | 1 |
| 研究狀態 | partial（證據仍不足） | 10 |
| 估值狀態 | not_run（本流程未執行估值模型） | 10 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 10 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 10 |
| 決策就緒 | 否 | 10 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 10 |
| research_status_not_complete | 10 |
| risk_status_not_complete | 10 |
| valuation_status_not_complete | 10 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：台股官方公司基本資料未命中
- 產業 thesis 缺失證據：月營收資料未命中或未接到此市場
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1476 | 儒鴻 | 現在可以買名單 | Watch only（僅觀察） | 323 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-1476/summary.html) | [風險](companies/tw-1476/risk_plan.html) | [啟動報告](companies/tw-1476/initiation.html) |
| 2548 | 華固 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 103 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2548/summary.html) | [風險](companies/tw-2548/risk_plan.html) | [啟動報告](companies/tw-2548/initiation.html) |
| 2820 | 華票 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 17.1 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2820/summary.html) | [風險](companies/tw-2820/risk_plan.html) | [啟動報告](companies/tw-2820/initiation.html) |
| 3046 | 建碁 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 53.1 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3046/summary.html) | [風險](companies/tw-3046/risk_plan.html) | [啟動報告](companies/tw-3046/initiation.html) |
| 5388 | 中磊 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 81.4 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-5388/summary.html) | [風險](companies/tw-5388/risk_plan.html) | [啟動報告](companies/tw-5388/initiation.html) |
| 5876 | 上海商銀 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 41.7 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-5876/summary.html) | [風險](companies/tw-5876/risk_plan.html) | [啟動報告](companies/tw-5876/initiation.html) |
| 6414 | 樺漢 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 384 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6414/summary.html) | [風險](companies/tw-6414/risk_plan.html) | [啟動報告](companies/tw-6414/initiation.html) |
| 6757 | 台灣虎航 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 60.7 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6757/summary.html) | [風險](companies/tw-6757/risk_plan.html) | [啟動報告](companies/tw-6757/initiation.html) |
| 9933 | 中鼎 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 41.5 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-9933/summary.html) | [風險](companies/tw-9933/risk_plan.html) | [啟動報告](companies/tw-9933/initiation.html) |
| 9939 | 宏全 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 124 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-9939/summary.html) | [風險](companies/tw-9939/risk_plan.html) | [啟動報告](companies/tw-9939/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 1476 | [摘要](companies/tw-1476/summary.html) | [公司摘要](companies/tw-1476/tearsheet.html) | [啟動報告](companies/tw-1476/initiation.html) | [風險](companies/tw-1476/risk_plan.html) |
| 2548 | [摘要](companies/tw-2548/summary.html) | [公司摘要](companies/tw-2548/tearsheet.html) | [啟動報告](companies/tw-2548/initiation.html) | [風險](companies/tw-2548/risk_plan.html) |
| 2820 | [摘要](companies/tw-2820/summary.html) | [公司摘要](companies/tw-2820/tearsheet.html) | [啟動報告](companies/tw-2820/initiation.html) | [風險](companies/tw-2820/risk_plan.html) |
| 3046 | [摘要](companies/tw-3046/summary.html) | [公司摘要](companies/tw-3046/tearsheet.html) | [啟動報告](companies/tw-3046/initiation.html) | [風險](companies/tw-3046/risk_plan.html) |
| 5388 | [摘要](companies/tw-5388/summary.html) | [公司摘要](companies/tw-5388/tearsheet.html) | [啟動報告](companies/tw-5388/initiation.html) | [風險](companies/tw-5388/risk_plan.html) |
| 5876 | [摘要](companies/tw-5876/summary.html) | [公司摘要](companies/tw-5876/tearsheet.html) | [啟動報告](companies/tw-5876/initiation.html) | [風險](companies/tw-5876/risk_plan.html) |
| 6414 | [摘要](companies/tw-6414/summary.html) | [公司摘要](companies/tw-6414/tearsheet.html) | [啟動報告](companies/tw-6414/initiation.html) | [風險](companies/tw-6414/risk_plan.html) |
| 6757 | [摘要](companies/tw-6757/summary.html) | [公司摘要](companies/tw-6757/tearsheet.html) | [啟動報告](companies/tw-6757/initiation.html) | [風險](companies/tw-6757/risk_plan.html) |
| 9933 | [摘要](companies/tw-9933/summary.html) | [公司摘要](companies/tw-9933/tearsheet.html) | [啟動報告](companies/tw-9933/initiation.html) | [風險](companies/tw-9933/risk_plan.html) |
| 9939 | [摘要](companies/tw-9939/summary.html) | [公司摘要](companies/tw-9939/tearsheet.html) | [啟動報告](companies/tw-9939/initiation.html) | [風險](companies/tw-9939/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
