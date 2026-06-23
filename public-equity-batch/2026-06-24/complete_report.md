# StockLoop PEI 完整批次報告 2026-06-24

- 產出時間：2026-06-24 07:22:55
- 標的池檔數：43
- 已具備目前價格與研究狀態的列數：43
- 來源報告：reports/news/2026-06-24_kol_news_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 34 |
| 市場 | us | 9 |
| 分類 | 現在可以買名單 | 17 |
| 分類 | 現在不能買，但值得等買點名單 | 26 |
| 研究標籤 | Wait for trigger（等待觸發） | 26 |
| 研究標籤 | Watch only（僅觀察） | 17 |
| 研究狀態 | partial（證據仍不足） | 43 |
| 估值狀態 | not_run（本流程未執行估值模型） | 43 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- 技術觸發價與風控距離多來自來源文字，尚未以獨立圖表系統驗證
- 未執行完整公司財報、法說、交易所公告與估值模型查核
- 等待買點標的尚未觸發進場條件，模型投組預設 0%
- 需以交易所/公司公告/券商即時報價複核 NotebookLM 來源主張

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1303 | 南亞 | 現在可以買名單 | Watch only（僅觀察） | 154.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-1303/risk_plan.html) | [啟動報告](companies/tw-1303/initiation.html) |
| 2002 | 中鋼 | 現在可以買名單 | Watch only（僅觀察） | 19.2 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-2002/risk_plan.html) | [啟動報告](companies/tw-2002/initiation.html) |
| 2108 | 南帝 | 現在可以買名單 | Watch only（僅觀察） | 28.3 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-2108/risk_plan.html) | [啟動報告](companies/tw-2108/initiation.html) |
| 2330 | 台積電 | 現在可以買名單 | Watch only（僅觀察） | 2490.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2436 | 偉詮電 | 現在可以買名單 | Watch only（僅觀察） | 77.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-2436/risk_plan.html) | [啟動報告](companies/tw-2436/initiation.html) |
| 2454 | 聯發科 | 現在可以買名單 | Watch only（僅觀察） | 4535.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-2454/risk_plan.html) | [啟動報告](companies/tw-2454/initiation.html) |
| 2603 | 長榮 | 現在可以買名單 | Watch only（僅觀察） | 189.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-2603/risk_plan.html) | [啟動報告](companies/tw-2603/initiation.html) |
| 3034 | 聯詠 | 現在可以買名單 | Watch only（僅觀察） | 544.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3034/risk_plan.html) | [啟動報告](companies/tw-3034/initiation.html) |
| 3105 | 穩懋 | 現在可以買名單 | Watch only（僅觀察） | 522.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3105/risk_plan.html) | [啟動報告](companies/tw-3105/initiation.html) |
| 3665 | 貿聯-KY | 現在可以買名單 | Watch only（僅觀察） | 2000.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3665/risk_plan.html) | [啟動報告](companies/tw-3665/initiation.html) |
| 4991 | 環宇-KY | 現在可以買名單 | Watch only（僅觀察） | 536.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-4991/risk_plan.html) | [啟動報告](companies/tw-4991/initiation.html) |
| 5471 | 松翰 | 現在可以買名單 | Watch only（僅觀察） | 62.4 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-5471/risk_plan.html) | [啟動報告](companies/tw-5471/initiation.html) |
| 6451 | 訊芯-KY | 現在可以買名單 | Watch only（僅觀察） | 596.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-6451/risk_plan.html) | [啟動報告](companies/tw-6451/initiation.html) |
| 6829 | 千附精密 | 現在可以買名單 | Watch only（僅觀察） | 206.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-6829/risk_plan.html) | [啟動報告](companies/tw-6829/initiation.html) |
| AXTI | AXTI | 現在可以買名單 | Watch only（僅觀察） | 77.91 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0% | [風險](companies/us-AXTI/risk_plan.html) | [啟動報告](companies/us-AXTI/initiation.html) |
| IBM | IBM | 現在可以買名單 | Watch only（僅觀察） | 264.94 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0% | [風險](companies/us-IBM/risk_plan.html) | [啟動報告](companies/us-IBM/initiation.html) |
| INFQ | INFQ | 現在可以買名單 | Watch only（僅觀察） | 15.96 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0% | [風險](companies/us-INFQ/risk_plan.html) | [啟動報告](companies/us-INFQ/initiation.html) |
| 00631L | 元大台灣50正2 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 41.32 TWD | 2026-06-22T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-00631L/risk_plan.html) | [啟動報告](companies/tw-00631L/initiation.html) |
| 2303 | 聯電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 170.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-2303/risk_plan.html) | [啟動報告](companies/tw-2303/initiation.html) |
| 2344 | 華邦電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 211.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-2344/risk_plan.html) | [啟動報告](companies/tw-2344/initiation.html) |
| 2408 | 南亞科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 454.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-2408/risk_plan.html) | [啟動報告](companies/tw-2408/initiation.html) |
| 2409 | 友達 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 29.05 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-2409/risk_plan.html) | [啟動報告](companies/tw-2409/initiation.html) |
| 3016 | 嘉晶 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 152.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3016/risk_plan.html) | [啟動報告](companies/tw-3016/initiation.html) |
| 3037 | 欣興 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 974.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3037/risk_plan.html) | [啟動報告](companies/tw-3037/initiation.html) |
| 3189 | 景碩 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 727.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3189/risk_plan.html) | [啟動報告](companies/tw-3189/initiation.html) |
| 3374 | 精材 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 303.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3374/risk_plan.html) | [啟動報告](companies/tw-3374/initiation.html) |
| 3406 | 玉晶光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 741.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3406/risk_plan.html) | [啟動報告](companies/tw-3406/initiation.html) |
| 3443 | 創意 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 4725.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3443/risk_plan.html) | [啟動報告](companies/tw-3443/initiation.html) |
| 3481 | 群創 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 66.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3481/risk_plan.html) | [啟動報告](companies/tw-3481/initiation.html) |
| 3707 | 漢磊 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 100.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3707/risk_plan.html) | [啟動報告](companies/tw-3707/initiation.html) |
| 3711 | 日月光投控 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 662.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3711/risk_plan.html) | [啟動報告](companies/tw-3711/initiation.html) |
| 3715 | 定穎投控 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 180.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-3715/risk_plan.html) | [啟動報告](companies/tw-3715/initiation.html) |
| 6116 | 彩晶 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-6116/risk_plan.html) | [啟動報告](companies/tw-6116/initiation.html) |
| 6147 | 頎邦 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 258.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-6147/risk_plan.html) | [啟動報告](companies/tw-6147/initiation.html) |
| 6213 | 聯茂 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 281.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-6213/risk_plan.html) | [啟動報告](companies/tw-6213/initiation.html) |
| 8046 | 南電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 909.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-8046/risk_plan.html) | [啟動報告](companies/tw-8046/initiation.html) |
| 8299 | 群聯 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2430.0 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | 0% | [風險](companies/tw-8299/risk_plan.html) | [啟動報告](companies/tw-8299/initiation.html) |
| AAPL | 蘋果 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 294.3 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0% | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| GOOG | Google | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 346.08 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0% | [風險](companies/us-GOOG/risk_plan.html) | [啟動報告](companies/us-GOOG/initiation.html) |
| MRVL | 美滿電子 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 279.04 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0% | [風險](companies/us-MRVL/risk_plan.html) | [啟動報告](companies/us-MRVL/initiation.html) |
| MU | 美光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1051.77 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0% | [風險](companies/us-MU/risk_plan.html) | [啟動報告](companies/us-MU/initiation.html) |
| SNDK | Sandisk | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1963.6 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0% | [風險](companies/us-SNDK/risk_plan.html) | [啟動報告](companies/us-SNDK/initiation.html) |
| SPCX | SpaceX | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 156.11 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0% | [風險](companies/us-SPCX/risk_plan.html) | [啟動報告](companies/us-SPCX/initiation.html) |

## 研究檔案索引

| 代號 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- |
| 1303 | [公司摘要](companies/tw-1303/tearsheet.html) | [啟動報告](companies/tw-1303/initiation.html) | [風險](companies/tw-1303/risk_plan.html) |
| 2002 | [公司摘要](companies/tw-2002/tearsheet.html) | [啟動報告](companies/tw-2002/initiation.html) | [風險](companies/tw-2002/risk_plan.html) |
| 2108 | [公司摘要](companies/tw-2108/tearsheet.html) | [啟動報告](companies/tw-2108/initiation.html) | [風險](companies/tw-2108/risk_plan.html) |
| 2330 | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2436 | [公司摘要](companies/tw-2436/tearsheet.html) | [啟動報告](companies/tw-2436/initiation.html) | [風險](companies/tw-2436/risk_plan.html) |
| 2454 | [公司摘要](companies/tw-2454/tearsheet.html) | [啟動報告](companies/tw-2454/initiation.html) | [風險](companies/tw-2454/risk_plan.html) |
| 2603 | [公司摘要](companies/tw-2603/tearsheet.html) | [啟動報告](companies/tw-2603/initiation.html) | [風險](companies/tw-2603/risk_plan.html) |
| 3034 | [公司摘要](companies/tw-3034/tearsheet.html) | [啟動報告](companies/tw-3034/initiation.html) | [風險](companies/tw-3034/risk_plan.html) |
| 3105 | [公司摘要](companies/tw-3105/tearsheet.html) | [啟動報告](companies/tw-3105/initiation.html) | [風險](companies/tw-3105/risk_plan.html) |
| 3665 | [公司摘要](companies/tw-3665/tearsheet.html) | [啟動報告](companies/tw-3665/initiation.html) | [風險](companies/tw-3665/risk_plan.html) |
| 4991 | [公司摘要](companies/tw-4991/tearsheet.html) | [啟動報告](companies/tw-4991/initiation.html) | [風險](companies/tw-4991/risk_plan.html) |
| 5471 | [公司摘要](companies/tw-5471/tearsheet.html) | [啟動報告](companies/tw-5471/initiation.html) | [風險](companies/tw-5471/risk_plan.html) |
| 6451 | [公司摘要](companies/tw-6451/tearsheet.html) | [啟動報告](companies/tw-6451/initiation.html) | [風險](companies/tw-6451/risk_plan.html) |
| 6829 | [公司摘要](companies/tw-6829/tearsheet.html) | [啟動報告](companies/tw-6829/initiation.html) | [風險](companies/tw-6829/risk_plan.html) |
| AXTI | [公司摘要](companies/us-AXTI/tearsheet.html) | [啟動報告](companies/us-AXTI/initiation.html) | [風險](companies/us-AXTI/risk_plan.html) |
| IBM | [公司摘要](companies/us-IBM/tearsheet.html) | [啟動報告](companies/us-IBM/initiation.html) | [風險](companies/us-IBM/risk_plan.html) |
| INFQ | [公司摘要](companies/us-INFQ/tearsheet.html) | [啟動報告](companies/us-INFQ/initiation.html) | [風險](companies/us-INFQ/risk_plan.html) |
| 00631L | [公司摘要](companies/tw-00631L/tearsheet.html) | [啟動報告](companies/tw-00631L/initiation.html) | [風險](companies/tw-00631L/risk_plan.html) |
| 2303 | [公司摘要](companies/tw-2303/tearsheet.html) | [啟動報告](companies/tw-2303/initiation.html) | [風險](companies/tw-2303/risk_plan.html) |
| 2344 | [公司摘要](companies/tw-2344/tearsheet.html) | [啟動報告](companies/tw-2344/initiation.html) | [風險](companies/tw-2344/risk_plan.html) |
| 2408 | [公司摘要](companies/tw-2408/tearsheet.html) | [啟動報告](companies/tw-2408/initiation.html) | [風險](companies/tw-2408/risk_plan.html) |
| 2409 | [公司摘要](companies/tw-2409/tearsheet.html) | [啟動報告](companies/tw-2409/initiation.html) | [風險](companies/tw-2409/risk_plan.html) |
| 3016 | [公司摘要](companies/tw-3016/tearsheet.html) | [啟動報告](companies/tw-3016/initiation.html) | [風險](companies/tw-3016/risk_plan.html) |
| 3037 | [公司摘要](companies/tw-3037/tearsheet.html) | [啟動報告](companies/tw-3037/initiation.html) | [風險](companies/tw-3037/risk_plan.html) |
| 3189 | [公司摘要](companies/tw-3189/tearsheet.html) | [啟動報告](companies/tw-3189/initiation.html) | [風險](companies/tw-3189/risk_plan.html) |
| 3374 | [公司摘要](companies/tw-3374/tearsheet.html) | [啟動報告](companies/tw-3374/initiation.html) | [風險](companies/tw-3374/risk_plan.html) |
| 3406 | [公司摘要](companies/tw-3406/tearsheet.html) | [啟動報告](companies/tw-3406/initiation.html) | [風險](companies/tw-3406/risk_plan.html) |
| 3443 | [公司摘要](companies/tw-3443/tearsheet.html) | [啟動報告](companies/tw-3443/initiation.html) | [風險](companies/tw-3443/risk_plan.html) |
| 3481 | [公司摘要](companies/tw-3481/tearsheet.html) | [啟動報告](companies/tw-3481/initiation.html) | [風險](companies/tw-3481/risk_plan.html) |
| 3707 | [公司摘要](companies/tw-3707/tearsheet.html) | [啟動報告](companies/tw-3707/initiation.html) | [風險](companies/tw-3707/risk_plan.html) |
| 3711 | [公司摘要](companies/tw-3711/tearsheet.html) | [啟動報告](companies/tw-3711/initiation.html) | [風險](companies/tw-3711/risk_plan.html) |
| 3715 | [公司摘要](companies/tw-3715/tearsheet.html) | [啟動報告](companies/tw-3715/initiation.html) | [風險](companies/tw-3715/risk_plan.html) |
| 6116 | [公司摘要](companies/tw-6116/tearsheet.html) | [啟動報告](companies/tw-6116/initiation.html) | [風險](companies/tw-6116/risk_plan.html) |
| 6147 | [公司摘要](companies/tw-6147/tearsheet.html) | [啟動報告](companies/tw-6147/initiation.html) | [風險](companies/tw-6147/risk_plan.html) |
| 6213 | [公司摘要](companies/tw-6213/tearsheet.html) | [啟動報告](companies/tw-6213/initiation.html) | [風險](companies/tw-6213/risk_plan.html) |
| 8046 | [公司摘要](companies/tw-8046/tearsheet.html) | [啟動報告](companies/tw-8046/initiation.html) | [風險](companies/tw-8046/risk_plan.html) |
| 8299 | [公司摘要](companies/tw-8299/tearsheet.html) | [啟動報告](companies/tw-8299/initiation.html) | [風險](companies/tw-8299/risk_plan.html) |
| AAPL | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| GOOG | [公司摘要](companies/us-GOOG/tearsheet.html) | [啟動報告](companies/us-GOOG/initiation.html) | [風險](companies/us-GOOG/risk_plan.html) |
| MRVL | [公司摘要](companies/us-MRVL/tearsheet.html) | [啟動報告](companies/us-MRVL/initiation.html) | [風險](companies/us-MRVL/risk_plan.html) |
| MU | [公司摘要](companies/us-MU/tearsheet.html) | [啟動報告](companies/us-MU/initiation.html) | [風險](companies/us-MU/risk_plan.html) |
| SNDK | [公司摘要](companies/us-SNDK/tearsheet.html) | [啟動報告](companies/us-SNDK/initiation.html) | [風險](companies/us-SNDK/risk_plan.html) |
| SPCX | [公司摘要](companies/us-SPCX/tearsheet.html) | [啟動報告](companies/us-SPCX/initiation.html) | [風險](companies/us-SPCX/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
