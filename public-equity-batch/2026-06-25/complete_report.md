# StockLoop PEI 完整批次報告 2026-06-25

- 產出時間：2026-06-25 08:02:33
- 標的池檔數：46
- 已具備目前價格與研究狀態的列數：46
- 來源報告：reports/news/2026-06-25_kol_news_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 46 檔標的；來源為 reports/news/2026-06-25_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：46 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：7 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：39 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- 研究狀態 partial（證據仍不足）：46 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 32 |
| 市場 | us | 14 |
| 分類 | 現在可以買名單 | 26 |
| 分類 | 現在不能買，但值得等買點名單 | 20 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 7 |
| 研究標籤 | Wait for trigger（等待觸發） | 39 |
| 研究狀態 | partial（證據仍不足） | 46 |
| 估值狀態 | not_run（本流程未執行估值模型） | 46 |

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
- 產業 thesis 缺失證據：OHLCV 價格脈絡未命中
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：台股官方公司基本資料未命中
- 產業 thesis 缺失證據：月營收資料未命中或未接到此市場
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 需以公司公告、交易所/SEC 文件與正式 PEI specialist workflow 補強後，才可升級為 decision-ready

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2312 | 金寶 | 現在可以買名單 | Wait for trigger（等待觸發） | 38 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2312/summary.html) | [風險](companies/tw-2312/risk_plan.html) | [啟動報告](companies/tw-2312/initiation.html) |
| 2317 | 鴻海 | 現在可以買名單 | Wait for trigger（等待觸發） | 256 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2317/summary.html) | [風險](companies/tw-2317/risk_plan.html) | [啟動報告](companies/tw-2317/initiation.html) |
| 2324 | 仁寶 | 現在可以買名單 | Wait for trigger（等待觸發） | 37.9 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2324/summary.html) | [風險](companies/tw-2324/risk_plan.html) | [啟動報告](companies/tw-2324/initiation.html) |
| 2327 | 國巨 | 現在可以買名單 | Wait for trigger（等待觸發） | 1,050 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2327/summary.html) | [風險](companies/tw-2327/risk_plan.html) | [啟動報告](companies/tw-2327/initiation.html) |
| 2330 | 台積電 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 2,390 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2337 | 旺宏 | 現在可以買名單 | Wait for trigger（等待觸發） | 172 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2337/summary.html) | [風險](companies/tw-2337/risk_plan.html) | [啟動報告](companies/tw-2337/initiation.html) |
| 2344 | 華邦電 | 現在可以買名單 | Wait for trigger（等待觸發） | 205 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2344/summary.html) | [風險](companies/tw-2344/risk_plan.html) | [啟動報告](companies/tw-2344/initiation.html) |
| 2374 | 佳能 | 現在可以買名單 | Wait for trigger（等待觸發） | 75.5 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2374/summary.html) | [風險](companies/tw-2374/risk_plan.html) | [啟動報告](companies/tw-2374/initiation.html) |
| 2382 | 廣達 | 現在可以買名單 | Wait for trigger（等待觸發） | 372 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2382/summary.html) | [風險](companies/tw-2382/risk_plan.html) | [啟動報告](companies/tw-2382/initiation.html) |
| 2383 | 台光電 | 現在可以買名單 | Wait for trigger（等待觸發） | 5,560 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2383/summary.html) | [風險](companies/tw-2383/risk_plan.html) | [啟動報告](companies/tw-2383/initiation.html) |
| 2408 | 南亞科 | 現在可以買名單 | Wait for trigger（等待觸發） | 443.5 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2408/summary.html) | [風險](companies/tw-2408/risk_plan.html) | [啟動報告](companies/tw-2408/initiation.html) |
| 2454 | 聯發科 | 現在可以買名單 | Wait for trigger（等待觸發） | 4,285 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2454/summary.html) | [風險](companies/tw-2454/risk_plan.html) | [啟動報告](companies/tw-2454/initiation.html) |
| 3008 | 大立光 | 現在可以買名單 | Wait for trigger（等待觸發） | 4,900 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-3008/summary.html) | [風險](companies/tw-3008/risk_plan.html) | [啟動報告](companies/tw-3008/initiation.html) |
| 3289 | 宜特 | 現在可以買名單 | Wait for trigger（等待觸發） | 169.5 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-3289/summary.html) | [風險](companies/tw-3289/risk_plan.html) | [啟動報告](companies/tw-3289/initiation.html) |
| 3443 | 創意電子 | 現在可以買名單 | Wait for trigger（等待觸發） | 4,880 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-3443/summary.html) | [風險](companies/tw-3443/risk_plan.html) | [啟動報告](companies/tw-3443/initiation.html) |
| 3481 | 群創光電 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 69.4 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-3481/summary.html) | [風險](companies/tw-3481/risk_plan.html) | [啟動報告](companies/tw-3481/initiation.html) |
| 3556 | 禾瑞亞 | 現在可以買名單 | Wait for trigger（等待觸發） | 72.5 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-3556/summary.html) | [風險](companies/tw-3556/risk_plan.html) | [啟動報告](companies/tw-3556/initiation.html) |
| 5285 | 界霖 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 110 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-5285/summary.html) | [風險](companies/tw-5285/risk_plan.html) | [啟動報告](companies/tw-5285/initiation.html) |
| 5392 | 能率 | 現在可以買名單 | Wait for trigger（等待觸發） | 42.4 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-5392/summary.html) | [風險](companies/tw-5392/risk_plan.html) | [啟動報告](companies/tw-5392/initiation.html) |
| 6274 | 台燿 | 現在可以買名單 | Wait for trigger（等待觸發） | 1,765 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-6274/summary.html) | [風險](companies/tw-6274/risk_plan.html) | [啟動報告](companies/tw-6274/initiation.html) |
| 8040 | 九暘 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 125 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-8040/summary.html) | [風險](companies/tw-8040/risk_plan.html) | [啟動報告](companies/tw-8040/initiation.html) |
| 8046 | 南電 | 現在可以買名單 | Wait for trigger（等待觸發） | 955 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-8046/summary.html) | [風險](companies/tw-8046/risk_plan.html) | [啟動報告](companies/tw-8046/initiation.html) |
| TSM | 台積電 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 440.83 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-TSM/summary.html) | [風險](companies/tw-TSM/risk_plan.html) | [啟動報告](companies/tw-TSM/initiation.html) |
| MSFT | 微軟 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 365.46 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-MSFT/summary.html) | [風險](companies/us-MSFT/risk_plan.html) | [啟動報告](companies/us-MSFT/initiation.html) |
| MU | 美光科技 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 1,048.51 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-MU/summary.html) | [風險](companies/us-MU/risk_plan.html) | [啟動報告](companies/us-MU/initiation.html) |
| ORCL | 甲骨文 | 現在可以買名單 | Wait for trigger（等待觸發） | 157.53 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ORCL/summary.html) | [風險](companies/us-ORCL/risk_plan.html) | [啟動報告](companies/us-ORCL/initiation.html) |
| 000660 | SK 海力士 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2,621,000 KRW | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-000660/summary.html) | [風險](companies/tw-000660/risk_plan.html) | [啟動報告](companies/tw-000660/initiation.html) |
| 005930 | 三星 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 340,500 KRW | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-005930/summary.html) | [風險](companies/tw-005930/risk_plan.html) | [啟動報告](companies/tw-005930/initiation.html) |
| 2313 | 華通 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 240 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2313/summary.html) | [風險](companies/tw-2313/risk_plan.html) | [啟動報告](companies/tw-2313/initiation.html) |
| 2351 | 順德 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 217.5 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2351/summary.html) | [風險](companies/tw-2351/risk_plan.html) | [啟動報告](companies/tw-2351/initiation.html) |
| 2485 | 兆赫 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 58.8 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2485/summary.html) | [風險](companies/tw-2485/risk_plan.html) | [啟動報告](companies/tw-2485/initiation.html) |
| 3374 | 精材 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 312 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-3374/summary.html) | [風險](companies/tw-3374/risk_plan.html) | [啟動報告](companies/tw-3374/initiation.html) |
| 3479 | 安勤 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 135.5 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-3479/summary.html) | [風險](companies/tw-3479/risk_plan.html) | [啟動報告](companies/tw-3479/initiation.html) |
| 6213 | 聯茂 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 309 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-6213/summary.html) | [風險](companies/tw-6213/risk_plan.html) | [啟動報告](companies/tw-6213/initiation.html) |
| 6285 | 啟碁 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 255 TWD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-6285/summary.html) | [風險](companies/tw-6285/risk_plan.html) | [啟動報告](companies/tw-6285/initiation.html) |
| AAL | 美航 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 17.44 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-AAL/summary.html) | [風險](companies/us-AAL/risk_plan.html) | [啟動報告](companies/us-AAL/initiation.html) |
| ALK | 阿拉斯加航空 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 51.56 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ALK/summary.html) | [風險](companies/us-ALK/risk_plan.html) | [啟動報告](companies/us-ALK/initiation.html) |
| AMD | 超微半導體 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 519.74 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-AMD/summary.html) | [風險](companies/us-AMD/risk_plan.html) | [啟動報告](companies/us-AMD/initiation.html) |
| AVGO | 博通 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 382.07 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-AVGO/summary.html) | [風險](companies/us-AVGO/risk_plan.html) | [啟動報告](companies/us-AVGO/initiation.html) |
| BTC | 比特幣 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 26.47 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BTC/summary.html) | [風險](companies/us-BTC/risk_plan.html) | [啟動報告](companies/us-BTC/initiation.html) |
| CBRS | Cerebras | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 182.26 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CBRS/summary.html) | [風險](companies/us-CBRS/risk_plan.html) | [啟動報告](companies/us-CBRS/initiation.html) |
| DAL | 達美航空 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 90.65 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-DAL/summary.html) | [風險](companies/us-DAL/risk_plan.html) | [啟動報告](companies/us-DAL/initiation.html) |
| LITETF | LIT 鋰電池與太陽能 ETF | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 78.91 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-LITETF/summary.html) | [風險](companies/us-LITETF/risk_plan.html) | [啟動報告](companies/us-LITETF/initiation.html) |
| NFLX | 網飛 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 71.84 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-NFLX/summary.html) | [風險](companies/us-NFLX/risk_plan.html) | [啟動報告](companies/us-NFLX/initiation.html) |
| RCL | 皇家加勒比 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 320.95 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-RCL/summary.html) | [風險](companies/us-RCL/risk_plan.html) | [啟動報告](companies/us-RCL/initiation.html) |
| UAL | 美聯航 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 130.54 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-UAL/summary.html) | [風險](companies/us-UAL/risk_plan.html) | [啟動報告](companies/us-UAL/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 2312 | [摘要](companies/tw-2312/summary.html) | [公司摘要](companies/tw-2312/tearsheet.html) | [啟動報告](companies/tw-2312/initiation.html) | [風險](companies/tw-2312/risk_plan.html) |
| 2317 | [摘要](companies/tw-2317/summary.html) | [公司摘要](companies/tw-2317/tearsheet.html) | [啟動報告](companies/tw-2317/initiation.html) | [風險](companies/tw-2317/risk_plan.html) |
| 2324 | [摘要](companies/tw-2324/summary.html) | [公司摘要](companies/tw-2324/tearsheet.html) | [啟動報告](companies/tw-2324/initiation.html) | [風險](companies/tw-2324/risk_plan.html) |
| 2327 | [摘要](companies/tw-2327/summary.html) | [公司摘要](companies/tw-2327/tearsheet.html) | [啟動報告](companies/tw-2327/initiation.html) | [風險](companies/tw-2327/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2337 | [摘要](companies/tw-2337/summary.html) | [公司摘要](companies/tw-2337/tearsheet.html) | [啟動報告](companies/tw-2337/initiation.html) | [風險](companies/tw-2337/risk_plan.html) |
| 2344 | [摘要](companies/tw-2344/summary.html) | [公司摘要](companies/tw-2344/tearsheet.html) | [啟動報告](companies/tw-2344/initiation.html) | [風險](companies/tw-2344/risk_plan.html) |
| 2374 | [摘要](companies/tw-2374/summary.html) | [公司摘要](companies/tw-2374/tearsheet.html) | [啟動報告](companies/tw-2374/initiation.html) | [風險](companies/tw-2374/risk_plan.html) |
| 2382 | [摘要](companies/tw-2382/summary.html) | [公司摘要](companies/tw-2382/tearsheet.html) | [啟動報告](companies/tw-2382/initiation.html) | [風險](companies/tw-2382/risk_plan.html) |
| 2383 | [摘要](companies/tw-2383/summary.html) | [公司摘要](companies/tw-2383/tearsheet.html) | [啟動報告](companies/tw-2383/initiation.html) | [風險](companies/tw-2383/risk_plan.html) |
| 2408 | [摘要](companies/tw-2408/summary.html) | [公司摘要](companies/tw-2408/tearsheet.html) | [啟動報告](companies/tw-2408/initiation.html) | [風險](companies/tw-2408/risk_plan.html) |
| 2454 | [摘要](companies/tw-2454/summary.html) | [公司摘要](companies/tw-2454/tearsheet.html) | [啟動報告](companies/tw-2454/initiation.html) | [風險](companies/tw-2454/risk_plan.html) |
| 3008 | [摘要](companies/tw-3008/summary.html) | [公司摘要](companies/tw-3008/tearsheet.html) | [啟動報告](companies/tw-3008/initiation.html) | [風險](companies/tw-3008/risk_plan.html) |
| 3289 | [摘要](companies/tw-3289/summary.html) | [公司摘要](companies/tw-3289/tearsheet.html) | [啟動報告](companies/tw-3289/initiation.html) | [風險](companies/tw-3289/risk_plan.html) |
| 3443 | [摘要](companies/tw-3443/summary.html) | [公司摘要](companies/tw-3443/tearsheet.html) | [啟動報告](companies/tw-3443/initiation.html) | [風險](companies/tw-3443/risk_plan.html) |
| 3481 | [摘要](companies/tw-3481/summary.html) | [公司摘要](companies/tw-3481/tearsheet.html) | [啟動報告](companies/tw-3481/initiation.html) | [風險](companies/tw-3481/risk_plan.html) |
| 3556 | [摘要](companies/tw-3556/summary.html) | [公司摘要](companies/tw-3556/tearsheet.html) | [啟動報告](companies/tw-3556/initiation.html) | [風險](companies/tw-3556/risk_plan.html) |
| 5285 | [摘要](companies/tw-5285/summary.html) | [公司摘要](companies/tw-5285/tearsheet.html) | [啟動報告](companies/tw-5285/initiation.html) | [風險](companies/tw-5285/risk_plan.html) |
| 5392 | [摘要](companies/tw-5392/summary.html) | [公司摘要](companies/tw-5392/tearsheet.html) | [啟動報告](companies/tw-5392/initiation.html) | [風險](companies/tw-5392/risk_plan.html) |
| 6274 | [摘要](companies/tw-6274/summary.html) | [公司摘要](companies/tw-6274/tearsheet.html) | [啟動報告](companies/tw-6274/initiation.html) | [風險](companies/tw-6274/risk_plan.html) |
| 8040 | [摘要](companies/tw-8040/summary.html) | [公司摘要](companies/tw-8040/tearsheet.html) | [啟動報告](companies/tw-8040/initiation.html) | [風險](companies/tw-8040/risk_plan.html) |
| 8046 | [摘要](companies/tw-8046/summary.html) | [公司摘要](companies/tw-8046/tearsheet.html) | [啟動報告](companies/tw-8046/initiation.html) | [風險](companies/tw-8046/risk_plan.html) |
| TSM | [摘要](companies/tw-TSM/summary.html) | [公司摘要](companies/tw-TSM/tearsheet.html) | [啟動報告](companies/tw-TSM/initiation.html) | [風險](companies/tw-TSM/risk_plan.html) |
| MSFT | [摘要](companies/us-MSFT/summary.html) | [公司摘要](companies/us-MSFT/tearsheet.html) | [啟動報告](companies/us-MSFT/initiation.html) | [風險](companies/us-MSFT/risk_plan.html) |
| MU | [摘要](companies/us-MU/summary.html) | [公司摘要](companies/us-MU/tearsheet.html) | [啟動報告](companies/us-MU/initiation.html) | [風險](companies/us-MU/risk_plan.html) |
| ORCL | [摘要](companies/us-ORCL/summary.html) | [公司摘要](companies/us-ORCL/tearsheet.html) | [啟動報告](companies/us-ORCL/initiation.html) | [風險](companies/us-ORCL/risk_plan.html) |
| 000660 | [摘要](companies/tw-000660/summary.html) | [公司摘要](companies/tw-000660/tearsheet.html) | [啟動報告](companies/tw-000660/initiation.html) | [風險](companies/tw-000660/risk_plan.html) |
| 005930 | [摘要](companies/tw-005930/summary.html) | [公司摘要](companies/tw-005930/tearsheet.html) | [啟動報告](companies/tw-005930/initiation.html) | [風險](companies/tw-005930/risk_plan.html) |
| 2313 | [摘要](companies/tw-2313/summary.html) | [公司摘要](companies/tw-2313/tearsheet.html) | [啟動報告](companies/tw-2313/initiation.html) | [風險](companies/tw-2313/risk_plan.html) |
| 2351 | [摘要](companies/tw-2351/summary.html) | [公司摘要](companies/tw-2351/tearsheet.html) | [啟動報告](companies/tw-2351/initiation.html) | [風險](companies/tw-2351/risk_plan.html) |
| 2485 | [摘要](companies/tw-2485/summary.html) | [公司摘要](companies/tw-2485/tearsheet.html) | [啟動報告](companies/tw-2485/initiation.html) | [風險](companies/tw-2485/risk_plan.html) |
| 3374 | [摘要](companies/tw-3374/summary.html) | [公司摘要](companies/tw-3374/tearsheet.html) | [啟動報告](companies/tw-3374/initiation.html) | [風險](companies/tw-3374/risk_plan.html) |
| 3479 | [摘要](companies/tw-3479/summary.html) | [公司摘要](companies/tw-3479/tearsheet.html) | [啟動報告](companies/tw-3479/initiation.html) | [風險](companies/tw-3479/risk_plan.html) |
| 6213 | [摘要](companies/tw-6213/summary.html) | [公司摘要](companies/tw-6213/tearsheet.html) | [啟動報告](companies/tw-6213/initiation.html) | [風險](companies/tw-6213/risk_plan.html) |
| 6285 | [摘要](companies/tw-6285/summary.html) | [公司摘要](companies/tw-6285/tearsheet.html) | [啟動報告](companies/tw-6285/initiation.html) | [風險](companies/tw-6285/risk_plan.html) |
| AAL | [摘要](companies/us-AAL/summary.html) | [公司摘要](companies/us-AAL/tearsheet.html) | [啟動報告](companies/us-AAL/initiation.html) | [風險](companies/us-AAL/risk_plan.html) |
| ALK | [摘要](companies/us-ALK/summary.html) | [公司摘要](companies/us-ALK/tearsheet.html) | [啟動報告](companies/us-ALK/initiation.html) | [風險](companies/us-ALK/risk_plan.html) |
| AMD | [摘要](companies/us-AMD/summary.html) | [公司摘要](companies/us-AMD/tearsheet.html) | [啟動報告](companies/us-AMD/initiation.html) | [風險](companies/us-AMD/risk_plan.html) |
| AVGO | [摘要](companies/us-AVGO/summary.html) | [公司摘要](companies/us-AVGO/tearsheet.html) | [啟動報告](companies/us-AVGO/initiation.html) | [風險](companies/us-AVGO/risk_plan.html) |
| BTC | [摘要](companies/us-BTC/summary.html) | [公司摘要](companies/us-BTC/tearsheet.html) | [啟動報告](companies/us-BTC/initiation.html) | [風險](companies/us-BTC/risk_plan.html) |
| CBRS | [摘要](companies/us-CBRS/summary.html) | [公司摘要](companies/us-CBRS/tearsheet.html) | [啟動報告](companies/us-CBRS/initiation.html) | [風險](companies/us-CBRS/risk_plan.html) |
| DAL | [摘要](companies/us-DAL/summary.html) | [公司摘要](companies/us-DAL/tearsheet.html) | [啟動報告](companies/us-DAL/initiation.html) | [風險](companies/us-DAL/risk_plan.html) |
| LITETF | [摘要](companies/us-LITETF/summary.html) | [公司摘要](companies/us-LITETF/tearsheet.html) | [啟動報告](companies/us-LITETF/initiation.html) | [風險](companies/us-LITETF/risk_plan.html) |
| NFLX | [摘要](companies/us-NFLX/summary.html) | [公司摘要](companies/us-NFLX/tearsheet.html) | [啟動報告](companies/us-NFLX/initiation.html) | [風險](companies/us-NFLX/risk_plan.html) |
| RCL | [摘要](companies/us-RCL/summary.html) | [公司摘要](companies/us-RCL/tearsheet.html) | [啟動報告](companies/us-RCL/initiation.html) | [風險](companies/us-RCL/risk_plan.html) |
| UAL | [摘要](companies/us-UAL/summary.html) | [公司摘要](companies/us-UAL/tearsheet.html) | [啟動報告](companies/us-UAL/initiation.html) | [風險](companies/us-UAL/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
