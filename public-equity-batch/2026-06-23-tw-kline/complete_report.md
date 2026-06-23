# StockLoop PEI 完整批次報告 2026-06-23 - TW K-line

- 產出時間：2026-06-23 16:00:34
- 標的池檔數：10
- 已具備目前價格與研究狀態的列數：10
- 來源報告：reports/twStock/2026-06-23_tw_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 10 |
| 分類 | 現在可以買名單 | 2 |
| 分類 | 現在不能買，但值得等買點名單 | 8 |
| 研究標籤 | Wait for trigger（等待觸發） | 8 |
| 研究標籤 | Watch only（僅觀察） | 2 |
| 研究狀態 | partial（證據仍不足） | 10 |
| 估值狀態 | not_run（本流程未執行估值模型） | 10 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- filings / IR presentation / transcript evidence not reviewed
- latest revenue / quarterly financials not reviewed in this scoped K-line PEI pass
- positioning, ownership, and consensus estimate context missing
- valuation and peer multiple support not run
- wait-entry trigger still requires follow-through or support retest confirmation

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2374 | 佳能 | 現在可以買名單 | Watch only（僅觀察） | 76.7 TWD | 2026-06-23 market close Asia/Taipei | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-2374/risk_plan.html) | [啟動報告](companies/tw-2374/initiation.html) |
| 2912 | 統一超 | 現在可以買名單 | Watch only（僅觀察） | 227.0 TWD | 2026-06-23 market close Asia/Taipei | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-2912/risk_plan.html) | [啟動報告](companies/tw-2912/initiation.html) |
| 1229 | 聯華 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 41.7 TWD | 2026-06-23 market close Asia/Taipei | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/tw-1229/risk_plan.html) | [啟動報告](companies/tw-1229/initiation.html) |
| 1477 | 聚陽 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 215.0 TWD | 2026-06-23 market close Asia/Taipei | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/tw-1477/risk_plan.html) | [啟動報告](companies/tw-1477/initiation.html) |
| 3661 | 世芯-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 4375.0 TWD | 2026-06-23 market close Asia/Taipei | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/tw-3661/risk_plan.html) | [啟動報告](companies/tw-3661/initiation.html) |
| 4956 | 光鋐 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 42.75 TWD | 2026-06-23 market close Asia/Taipei | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/tw-4956/risk_plan.html) | [啟動報告](companies/tw-4956/initiation.html) |
| 6658 | 聯策 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 187.5 TWD | 2026-06-23 market close Asia/Taipei | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/tw-6658/risk_plan.html) | [啟動報告](companies/tw-6658/initiation.html) |
| 8046 | 南電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 909.0 TWD | 2026-06-23 market close Asia/Taipei | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/tw-8046/risk_plan.html) | [啟動報告](companies/tw-8046/initiation.html) |
| 9904 | 寶成 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 26.0 TWD | 2026-06-23 market close Asia/Taipei | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/tw-9904/risk_plan.html) | [啟動報告](companies/tw-9904/initiation.html) |
| 9910 | 豐泰 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 71.4 TWD | 2026-06-23 market close Asia/Taipei | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/tw-9910/risk_plan.html) | [啟動報告](companies/tw-9910/initiation.html) |

## 研究檔案索引

| 代號 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- |
| 2374 | [公司摘要](companies/tw-2374/tearsheet.html) | [啟動報告](companies/tw-2374/initiation.html) | [風險](companies/tw-2374/risk_plan.html) |
| 2912 | [公司摘要](companies/tw-2912/tearsheet.html) | [啟動報告](companies/tw-2912/initiation.html) | [風險](companies/tw-2912/risk_plan.html) |
| 1229 | [公司摘要](companies/tw-1229/tearsheet.html) | [啟動報告](companies/tw-1229/initiation.html) | [風險](companies/tw-1229/risk_plan.html) |
| 1477 | [公司摘要](companies/tw-1477/tearsheet.html) | [啟動報告](companies/tw-1477/initiation.html) | [風險](companies/tw-1477/risk_plan.html) |
| 3661 | [公司摘要](companies/tw-3661/tearsheet.html) | [啟動報告](companies/tw-3661/initiation.html) | [風險](companies/tw-3661/risk_plan.html) |
| 4956 | [公司摘要](companies/tw-4956/tearsheet.html) | [啟動報告](companies/tw-4956/initiation.html) | [風險](companies/tw-4956/risk_plan.html) |
| 6658 | [公司摘要](companies/tw-6658/tearsheet.html) | [啟動報告](companies/tw-6658/initiation.html) | [風險](companies/tw-6658/risk_plan.html) |
| 8046 | [公司摘要](companies/tw-8046/tearsheet.html) | [啟動報告](companies/tw-8046/initiation.html) | [風險](companies/tw-8046/risk_plan.html) |
| 9904 | [公司摘要](companies/tw-9904/tearsheet.html) | [啟動報告](companies/tw-9904/initiation.html) | [風險](companies/tw-9904/risk_plan.html) |
| 9910 | [公司摘要](companies/tw-9910/tearsheet.html) | [啟動報告](companies/tw-9910/initiation.html) | [風險](companies/tw-9910/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
