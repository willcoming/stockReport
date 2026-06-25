# StockLoop PEI 完整批次報告 2026-06-25 - TW K-line

- 產出時間：2026-06-25 16:20:39
- 標的池檔數：22
- 已具備目前價格與研究狀態的列數：22
- 來源報告：reports/twStock/2026-06-25_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

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

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 22 |
| 分類 | 現在可以買名單 | 3 |
| 分類 | 現在不能買，但值得等買點名單 | 19 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 1 |
| 研究標籤 | Wait for trigger（等待觸發） | 21 |
| 研究狀態 | partial（證據仍不足） | 22 |
| 估值狀態 | not_run（本流程未執行估值模型） | 22 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- 個人庫存僅用於定義研究宇宙；模型投組 sizing 未使用券商、股數或成本
- 本 inventory-scope PEI 批次未逐檔執行完整官方 filings、法說、consensus、估值模型與流動性模型查核
- 產業 thesis Gate=炒作或擁擠交易風險偏高；炒作風險=高
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=中
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：台股官方公司基本資料未命中
- 產業 thesis 缺失證據：月營收資料未命中或未接到此市場
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 需以公司公告、交易所/SEC 文件與正式 PEI specialist workflow 補強後，才可升級為 decision-ready

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2406 | 國碩 | 現在可以買名單 | Wait for trigger（等待觸發） | 35.5 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2406/summary.html) | [風險](companies/tw-2406/risk_plan.html) | [啟動報告](companies/tw-2406/initiation.html) |
| 3037 | 欣興 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 1,020 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-3037/summary.html) | [風險](companies/tw-3037/risk_plan.html) | [啟動報告](companies/tw-3037/initiation.html) |
| 5269 | 祥碩 | 現在可以買名單 | Wait for trigger（等待觸發） | 1,435 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-5269/summary.html) | [風險](companies/tw-5269/risk_plan.html) | [啟動報告](companies/tw-5269/initiation.html) |
| 1101 | 台泥 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 24.6 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-1101/summary.html) | [風險](companies/tw-1101/risk_plan.html) | [啟動報告](companies/tw-1101/initiation.html) |
| 1477 | 聚陽 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 221 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-1477/summary.html) | [風險](companies/tw-1477/risk_plan.html) | [啟動報告](companies/tw-1477/initiation.html) |
| 1710 | 東聯 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 13.95 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-1710/summary.html) | [風險](companies/tw-1710/risk_plan.html) | [啟動報告](companies/tw-1710/initiation.html) |
| 2356 | 英業達 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 66.7 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2356/summary.html) | [風險](companies/tw-2356/risk_plan.html) | [啟動報告](companies/tw-2356/initiation.html) |
| 2374 | 佳能 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 79.4 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2374/summary.html) | [風險](companies/tw-2374/risk_plan.html) | [啟動報告](companies/tw-2374/initiation.html) |
| 2540 | 愛山林 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 54.2 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2540/summary.html) | [風險](companies/tw-2540/risk_plan.html) | [啟動報告](companies/tw-2540/initiation.html) |
| 2633 | 台灣高鐵 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 26.25 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2633/summary.html) | [風險](companies/tw-2633/risk_plan.html) | [啟動報告](companies/tw-2633/initiation.html) |
| 2855 | 統一證 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 50.4 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2855/summary.html) | [風險](companies/tw-2855/risk_plan.html) | [啟動報告](companies/tw-2855/initiation.html) |
| 2889 | 國票金 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 15 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2889/summary.html) | [風險](companies/tw-2889/risk_plan.html) | [啟動報告](companies/tw-2889/initiation.html) |
| 2912 | 統一超 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 226 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2912/summary.html) | [風險](companies/tw-2912/risk_plan.html) | [啟動報告](companies/tw-2912/initiation.html) |
| 3231 | 緯創 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 160 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-3231/summary.html) | [風險](companies/tw-3231/risk_plan.html) | [啟動報告](companies/tw-3231/initiation.html) |
| 3605 | 宏致 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 77.5 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-3605/summary.html) | [風險](companies/tw-3605/risk_plan.html) | [啟動報告](companies/tw-3605/initiation.html) |
| 5469 | 瀚宇博 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 86.1 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-5469/summary.html) | [風險](companies/tw-5469/risk_plan.html) | [啟動報告](companies/tw-5469/initiation.html) |
| 5871 | 中租-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 115.5 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-5871/summary.html) | [風險](companies/tw-5871/risk_plan.html) | [啟動報告](companies/tw-5871/initiation.html) |
| 6005 | 群益證 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 38.8 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-6005/summary.html) | [風險](companies/tw-6005/risk_plan.html) | [啟動報告](companies/tw-6005/initiation.html) |
| 6191 | 精成科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 99.3 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-6191/summary.html) | [風險](companies/tw-6191/risk_plan.html) | [啟動報告](companies/tw-6191/initiation.html) |
| 6414 | 樺漢 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 373.5 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-6414/summary.html) | [風險](companies/tw-6414/risk_plan.html) | [啟動報告](companies/tw-6414/initiation.html) |
| 6605 | 帝寶 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 142 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-6605/summary.html) | [風險](companies/tw-6605/risk_plan.html) | [啟動報告](companies/tw-6605/initiation.html) |
| 8103 | 瀚荃 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 105 TWD | 2026-06-25 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-8103/summary.html) | [風險](companies/tw-8103/risk_plan.html) | [啟動報告](companies/tw-8103/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 2406 | [摘要](companies/tw-2406/summary.html) | [公司摘要](companies/tw-2406/tearsheet.html) | [啟動報告](companies/tw-2406/initiation.html) | [風險](companies/tw-2406/risk_plan.html) |
| 3037 | [摘要](companies/tw-3037/summary.html) | [公司摘要](companies/tw-3037/tearsheet.html) | [啟動報告](companies/tw-3037/initiation.html) | [風險](companies/tw-3037/risk_plan.html) |
| 5269 | [摘要](companies/tw-5269/summary.html) | [公司摘要](companies/tw-5269/tearsheet.html) | [啟動報告](companies/tw-5269/initiation.html) | [風險](companies/tw-5269/risk_plan.html) |
| 1101 | [摘要](companies/tw-1101/summary.html) | [公司摘要](companies/tw-1101/tearsheet.html) | [啟動報告](companies/tw-1101/initiation.html) | [風險](companies/tw-1101/risk_plan.html) |
| 1477 | [摘要](companies/tw-1477/summary.html) | [公司摘要](companies/tw-1477/tearsheet.html) | [啟動報告](companies/tw-1477/initiation.html) | [風險](companies/tw-1477/risk_plan.html) |
| 1710 | [摘要](companies/tw-1710/summary.html) | [公司摘要](companies/tw-1710/tearsheet.html) | [啟動報告](companies/tw-1710/initiation.html) | [風險](companies/tw-1710/risk_plan.html) |
| 2356 | [摘要](companies/tw-2356/summary.html) | [公司摘要](companies/tw-2356/tearsheet.html) | [啟動報告](companies/tw-2356/initiation.html) | [風險](companies/tw-2356/risk_plan.html) |
| 2374 | [摘要](companies/tw-2374/summary.html) | [公司摘要](companies/tw-2374/tearsheet.html) | [啟動報告](companies/tw-2374/initiation.html) | [風險](companies/tw-2374/risk_plan.html) |
| 2540 | [摘要](companies/tw-2540/summary.html) | [公司摘要](companies/tw-2540/tearsheet.html) | [啟動報告](companies/tw-2540/initiation.html) | [風險](companies/tw-2540/risk_plan.html) |
| 2633 | [摘要](companies/tw-2633/summary.html) | [公司摘要](companies/tw-2633/tearsheet.html) | [啟動報告](companies/tw-2633/initiation.html) | [風險](companies/tw-2633/risk_plan.html) |
| 2855 | [摘要](companies/tw-2855/summary.html) | [公司摘要](companies/tw-2855/tearsheet.html) | [啟動報告](companies/tw-2855/initiation.html) | [風險](companies/tw-2855/risk_plan.html) |
| 2889 | [摘要](companies/tw-2889/summary.html) | [公司摘要](companies/tw-2889/tearsheet.html) | [啟動報告](companies/tw-2889/initiation.html) | [風險](companies/tw-2889/risk_plan.html) |
| 2912 | [摘要](companies/tw-2912/summary.html) | [公司摘要](companies/tw-2912/tearsheet.html) | [啟動報告](companies/tw-2912/initiation.html) | [風險](companies/tw-2912/risk_plan.html) |
| 3231 | [摘要](companies/tw-3231/summary.html) | [公司摘要](companies/tw-3231/tearsheet.html) | [啟動報告](companies/tw-3231/initiation.html) | [風險](companies/tw-3231/risk_plan.html) |
| 3605 | [摘要](companies/tw-3605/summary.html) | [公司摘要](companies/tw-3605/tearsheet.html) | [啟動報告](companies/tw-3605/initiation.html) | [風險](companies/tw-3605/risk_plan.html) |
| 5469 | [摘要](companies/tw-5469/summary.html) | [公司摘要](companies/tw-5469/tearsheet.html) | [啟動報告](companies/tw-5469/initiation.html) | [風險](companies/tw-5469/risk_plan.html) |
| 5871 | [摘要](companies/tw-5871/summary.html) | [公司摘要](companies/tw-5871/tearsheet.html) | [啟動報告](companies/tw-5871/initiation.html) | [風險](companies/tw-5871/risk_plan.html) |
| 6005 | [摘要](companies/tw-6005/summary.html) | [公司摘要](companies/tw-6005/tearsheet.html) | [啟動報告](companies/tw-6005/initiation.html) | [風險](companies/tw-6005/risk_plan.html) |
| 6191 | [摘要](companies/tw-6191/summary.html) | [公司摘要](companies/tw-6191/tearsheet.html) | [啟動報告](companies/tw-6191/initiation.html) | [風險](companies/tw-6191/risk_plan.html) |
| 6414 | [摘要](companies/tw-6414/summary.html) | [公司摘要](companies/tw-6414/tearsheet.html) | [啟動報告](companies/tw-6414/initiation.html) | [風險](companies/tw-6414/risk_plan.html) |
| 6605 | [摘要](companies/tw-6605/summary.html) | [公司摘要](companies/tw-6605/tearsheet.html) | [啟動報告](companies/tw-6605/initiation.html) | [風險](companies/tw-6605/risk_plan.html) |
| 8103 | [摘要](companies/tw-8103/summary.html) | [公司摘要](companies/tw-8103/tearsheet.html) | [啟動報告](companies/tw-8103/initiation.html) | [風險](companies/tw-8103/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
