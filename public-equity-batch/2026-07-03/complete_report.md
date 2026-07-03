# StockLoop PEI 完整批次報告 2026-07-03

- 產出時間：2026-07-03 08:00:43
- 標的池檔數：35
- 已具備目前價格與研究狀態的列數：35
- Decision-ready 檔數：0
- 來源報告：reports/news/2026-07-03_kol_news_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 35 檔標的；來源為 reports/news/2026-07-03_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：35 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：2 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：24 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：9 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：35 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：35 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 22 |
| 市場 | us | 13 |
| 分類 | 現在可以買名單 | 11 |
| 分類 | 現在不能買，但值得等買點名單 | 24 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 2 |
| 研究標籤 | Wait for trigger（等待觸發） | 24 |
| 研究標籤 | Watch only（僅觀察） | 9 |
| 研究狀態 | partial（證據仍不足） | 35 |
| 估值狀態 | not_run（本流程未執行估值模型） | 35 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 35 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 35 |
| 決策就緒 | 否 | 35 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 35 |
| official_validation_not_complete | 13 |
| research_status_not_complete | 35 |
| risk_status_not_complete | 35 |
| valuation_status_not_complete | 35 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- fund_or_etf 不適用 common-equity PEI 模型，需工具型/ETF 風險路徑
- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 估值 handoff 缺失：valuation multiples missing
- 官方公司/證券身分驗證未完成
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：fundamental signals found but official identity validation missing
- 官方證據 handoff 缺失：台股官方公司基本資料未命中
- 官方證據 handoff 缺失：缺少公司級官方營收、訂單、財報或法說支撐
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=炒作或擁擠交易風險偏高；炒作風險=高
- 產業 thesis Gate=產業前景可追，但公司證據仍在建立；炒作風險=中
- 產業 thesis Gate=產業前景可追，但公司證據仍在建立；炒作風險=低
- 產業 thesis Gate=產業順風且公司證據較完整；炒作風險=中
- 產業 thesis Gate=產業順風且公司證據較完整；炒作風險=低
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=中
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：OHLCV 價格脈絡未命中
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 風險 handoff 缺失：20d average trade value missing
- 風險 handoff 缺失：downside distance input missing
- 風險 handoff 缺失：local OHLCV history missing

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1514 | 亞力 | 現在可以買名單 | Watch only（僅觀察） | 121.5 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-1514/summary.html) | [風險](companies/tw-1514/risk_plan.html) | [啟動報告](companies/tw-1514/initiation.html) |
| 2454 | 聯發科 | 現在可以買名單 | Watch only（僅觀察） | 4,345 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2454/summary.html) | [風險](companies/tw-2454/risk_plan.html) | [啟動報告](companies/tw-2454/initiation.html) |
| 2464 | 盟立 | 現在可以買名單 | Watch only（僅觀察） | 183.5 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2464/summary.html) | [風險](companies/tw-2464/risk_plan.html) | [啟動報告](companies/tw-2464/initiation.html) |
| 3042 | 晶技 | 現在可以買名單 | Watch only（僅觀察） | 226.5 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3042/summary.html) | [風險](companies/tw-3042/risk_plan.html) | [啟動報告](companies/tw-3042/initiation.html) |
| 3675 | 德微 | 現在可以買名單 | Watch only（僅觀察） | 407 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3675/summary.html) | [風險](companies/tw-3675/risk_plan.html) | [啟動報告](companies/tw-3675/initiation.html) |
| 6139 | 亞翔 | 現在可以買名單 | Watch only（僅觀察） | 939 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6139/summary.html) | [風險](companies/tw-6139/risk_plan.html) | [啟動報告](companies/tw-6139/initiation.html) |
| 6196 | 帆宣 | 現在可以買名單 | Watch only（僅觀察） | 588 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6196/summary.html) | [風險](companies/tw-6196/risk_plan.html) | [啟動報告](companies/tw-6196/initiation.html) |
| 6409 | 旭隼 | 現在可以買名單 | Watch only（僅觀察） | 1,185 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6409/summary.html) | [風險](companies/tw-6409/risk_plan.html) | [啟動報告](companies/tw-6409/initiation.html) |
| 6669 | 緯穎 | 現在可以買名單 | Watch only（僅觀察） | 5,200 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6669/summary.html) | [風險](companies/tw-6669/risk_plan.html) | [啟動報告](companies/tw-6669/initiation.html) |
| UBER | Uber | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 74.43 USD | 2026-07-02T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-UBER/summary.html) | [風險](companies/us-UBER/risk_plan.html) | [啟動報告](companies/us-UBER/initiation.html) |
| XBI | SPDR 生技 ETF | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 160.46 USD | 2026-07-02T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-XBI/summary.html) | [風險](companies/us-XBI/risk_plan.html) | [啟動報告](companies/us-XBI/initiation.html) |
| 2329 | 華泰 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 53.1 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2329/summary.html) | [風險](companies/tw-2329/risk_plan.html) | [啟動報告](companies/tw-2329/initiation.html) |
| 2330 | 台積電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2,465 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2409 | 友達 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 30.5 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2409/summary.html) | [風險](companies/tw-2409/risk_plan.html) | [啟動報告](companies/tw-2409/initiation.html) |
| 3008 | 大立光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 4,295 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3008/summary.html) | [風險](companies/tw-3008/risk_plan.html) | [啟動報告](companies/tw-3008/initiation.html) |
| 3221 | 台嘉碩 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 64 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3221/summary.html) | [風險](companies/tw-3221/risk_plan.html) | [啟動報告](companies/tw-3221/initiation.html) |
| 3443 | 創意 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 5,330 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3443/summary.html) | [風險](companies/tw-3443/risk_plan.html) | [啟動報告](companies/tw-3443/initiation.html) |
| 3481 | 群創 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 67.6 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3481/summary.html) | [風險](companies/tw-3481/risk_plan.html) | [啟動報告](companies/tw-3481/initiation.html) |
| 3661 | 世芯-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 4,895 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3661/summary.html) | [風險](companies/tw-3661/risk_plan.html) | [啟動報告](companies/tw-3661/initiation.html) |
| 6127 | 九豪 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 90.6 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6127/summary.html) | [風險](companies/tw-6127/risk_plan.html) | [啟動報告](companies/tw-6127/initiation.html) |
| 6174 | 安碁 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 56.2 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6174/summary.html) | [風險](companies/tw-6174/risk_plan.html) | [啟動報告](companies/tw-6174/initiation.html) |
| 7795 | 長廣 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 611 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-7795/summary.html) | [風險](companies/tw-7795/risk_plan.html) | [啟動報告](companies/tw-7795/initiation.html) |
| 8033 | 雷虎 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 186 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8033/summary.html) | [風險](companies/tw-8033/risk_plan.html) | [啟動報告](companies/tw-8033/initiation.html) |
| 8182 | 加高 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 55.3 TWD | 2026-07-02 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8182/summary.html) | [風險](companies/tw-8182/risk_plan.html) | [啟動報告](companies/tw-8182/initiation.html) |
| AAPL | Apple | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 308.63 USD | 2026-07-02T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AAPL/summary.html) | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| AMD | AMD | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 517.82 USD | 2026-07-02T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AMD/summary.html) | [風險](companies/us-AMD/risk_plan.html) | [啟動報告](companies/us-AMD/initiation.html) |
| AVGO | Broadcom | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 360.45 USD | 2026-07-02T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AVGO/summary.html) | [風險](companies/us-AVGO/risk_plan.html) | [啟動報告](companies/us-AVGO/initiation.html) |
| BIIB | Biogen | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 216.12 USD | 2026-07-02T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-BIIB/summary.html) | [風險](companies/us-BIIB/risk_plan.html) | [啟動報告](companies/us-BIIB/initiation.html) |
| GLW | 康寧 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 196.79 USD | 2026-07-02T20:04:14Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GLW/summary.html) | [風險](companies/us-GLW/risk_plan.html) | [啟動報告](companies/us-GLW/initiation.html) |
| LLY | Eli Lilly | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1,213.91 USD | 2026-07-02T20:03:34Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LLY/summary.html) | [風險](companies/us-LLY/risk_plan.html) | [啟動報告](companies/us-LLY/initiation.html) |
| META | Meta | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 582.9 USD | 2026-07-02T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-META/summary.html) | [風險](companies/us-META/risk_plan.html) | [啟動報告](companies/us-META/initiation.html) |
| MSFT | Microsoft | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 390.49 USD | 2026-07-02T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MSFT/summary.html) | [風險](companies/us-MSFT/risk_plan.html) | [啟動報告](companies/us-MSFT/initiation.html) |
| NVDA | NVIDIA | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 194.83 USD | 2026-07-02T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-NVDA/summary.html) | [風險](companies/us-NVDA/risk_plan.html) | [啟動報告](companies/us-NVDA/initiation.html) |
| ORCL | Oracle | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 140.27 USD | 2026-07-02T20:05:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ORCL/summary.html) | [風險](companies/us-ORCL/risk_plan.html) | [啟動報告](companies/us-ORCL/initiation.html) |
| PLTR | Palantir | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 129.3 USD | 2026-07-02T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-PLTR/summary.html) | [風險](companies/us-PLTR/risk_plan.html) | [啟動報告](companies/us-PLTR/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 1514 | [摘要](companies/tw-1514/summary.html) | [公司摘要](companies/tw-1514/tearsheet.html) | [啟動報告](companies/tw-1514/initiation.html) | [風險](companies/tw-1514/risk_plan.html) |
| 2454 | [摘要](companies/tw-2454/summary.html) | [公司摘要](companies/tw-2454/tearsheet.html) | [啟動報告](companies/tw-2454/initiation.html) | [風險](companies/tw-2454/risk_plan.html) |
| 2464 | [摘要](companies/tw-2464/summary.html) | [公司摘要](companies/tw-2464/tearsheet.html) | [啟動報告](companies/tw-2464/initiation.html) | [風險](companies/tw-2464/risk_plan.html) |
| 3042 | [摘要](companies/tw-3042/summary.html) | [公司摘要](companies/tw-3042/tearsheet.html) | [啟動報告](companies/tw-3042/initiation.html) | [風險](companies/tw-3042/risk_plan.html) |
| 3675 | [摘要](companies/tw-3675/summary.html) | [公司摘要](companies/tw-3675/tearsheet.html) | [啟動報告](companies/tw-3675/initiation.html) | [風險](companies/tw-3675/risk_plan.html) |
| 6139 | [摘要](companies/tw-6139/summary.html) | [公司摘要](companies/tw-6139/tearsheet.html) | [啟動報告](companies/tw-6139/initiation.html) | [風險](companies/tw-6139/risk_plan.html) |
| 6196 | [摘要](companies/tw-6196/summary.html) | [公司摘要](companies/tw-6196/tearsheet.html) | [啟動報告](companies/tw-6196/initiation.html) | [風險](companies/tw-6196/risk_plan.html) |
| 6409 | [摘要](companies/tw-6409/summary.html) | [公司摘要](companies/tw-6409/tearsheet.html) | [啟動報告](companies/tw-6409/initiation.html) | [風險](companies/tw-6409/risk_plan.html) |
| 6669 | [摘要](companies/tw-6669/summary.html) | [公司摘要](companies/tw-6669/tearsheet.html) | [啟動報告](companies/tw-6669/initiation.html) | [風險](companies/tw-6669/risk_plan.html) |
| UBER | [摘要](companies/us-UBER/summary.html) | [公司摘要](companies/us-UBER/tearsheet.html) | [啟動報告](companies/us-UBER/initiation.html) | [風險](companies/us-UBER/risk_plan.html) |
| XBI | [摘要](companies/us-XBI/summary.html) | [公司摘要](companies/us-XBI/tearsheet.html) | [啟動報告](companies/us-XBI/initiation.html) | [風險](companies/us-XBI/risk_plan.html) |
| 2329 | [摘要](companies/tw-2329/summary.html) | [公司摘要](companies/tw-2329/tearsheet.html) | [啟動報告](companies/tw-2329/initiation.html) | [風險](companies/tw-2329/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2409 | [摘要](companies/tw-2409/summary.html) | [公司摘要](companies/tw-2409/tearsheet.html) | [啟動報告](companies/tw-2409/initiation.html) | [風險](companies/tw-2409/risk_plan.html) |
| 3008 | [摘要](companies/tw-3008/summary.html) | [公司摘要](companies/tw-3008/tearsheet.html) | [啟動報告](companies/tw-3008/initiation.html) | [風險](companies/tw-3008/risk_plan.html) |
| 3221 | [摘要](companies/tw-3221/summary.html) | [公司摘要](companies/tw-3221/tearsheet.html) | [啟動報告](companies/tw-3221/initiation.html) | [風險](companies/tw-3221/risk_plan.html) |
| 3443 | [摘要](companies/tw-3443/summary.html) | [公司摘要](companies/tw-3443/tearsheet.html) | [啟動報告](companies/tw-3443/initiation.html) | [風險](companies/tw-3443/risk_plan.html) |
| 3481 | [摘要](companies/tw-3481/summary.html) | [公司摘要](companies/tw-3481/tearsheet.html) | [啟動報告](companies/tw-3481/initiation.html) | [風險](companies/tw-3481/risk_plan.html) |
| 3661 | [摘要](companies/tw-3661/summary.html) | [公司摘要](companies/tw-3661/tearsheet.html) | [啟動報告](companies/tw-3661/initiation.html) | [風險](companies/tw-3661/risk_plan.html) |
| 6127 | [摘要](companies/tw-6127/summary.html) | [公司摘要](companies/tw-6127/tearsheet.html) | [啟動報告](companies/tw-6127/initiation.html) | [風險](companies/tw-6127/risk_plan.html) |
| 6174 | [摘要](companies/tw-6174/summary.html) | [公司摘要](companies/tw-6174/tearsheet.html) | [啟動報告](companies/tw-6174/initiation.html) | [風險](companies/tw-6174/risk_plan.html) |
| 7795 | [摘要](companies/tw-7795/summary.html) | [公司摘要](companies/tw-7795/tearsheet.html) | [啟動報告](companies/tw-7795/initiation.html) | [風險](companies/tw-7795/risk_plan.html) |
| 8033 | [摘要](companies/tw-8033/summary.html) | [公司摘要](companies/tw-8033/tearsheet.html) | [啟動報告](companies/tw-8033/initiation.html) | [風險](companies/tw-8033/risk_plan.html) |
| 8182 | [摘要](companies/tw-8182/summary.html) | [公司摘要](companies/tw-8182/tearsheet.html) | [啟動報告](companies/tw-8182/initiation.html) | [風險](companies/tw-8182/risk_plan.html) |
| AAPL | [摘要](companies/us-AAPL/summary.html) | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| AMD | [摘要](companies/us-AMD/summary.html) | [公司摘要](companies/us-AMD/tearsheet.html) | [啟動報告](companies/us-AMD/initiation.html) | [風險](companies/us-AMD/risk_plan.html) |
| AVGO | [摘要](companies/us-AVGO/summary.html) | [公司摘要](companies/us-AVGO/tearsheet.html) | [啟動報告](companies/us-AVGO/initiation.html) | [風險](companies/us-AVGO/risk_plan.html) |
| BIIB | [摘要](companies/us-BIIB/summary.html) | [公司摘要](companies/us-BIIB/tearsheet.html) | [啟動報告](companies/us-BIIB/initiation.html) | [風險](companies/us-BIIB/risk_plan.html) |
| GLW | [摘要](companies/us-GLW/summary.html) | [公司摘要](companies/us-GLW/tearsheet.html) | [啟動報告](companies/us-GLW/initiation.html) | [風險](companies/us-GLW/risk_plan.html) |
| LLY | [摘要](companies/us-LLY/summary.html) | [公司摘要](companies/us-LLY/tearsheet.html) | [啟動報告](companies/us-LLY/initiation.html) | [風險](companies/us-LLY/risk_plan.html) |
| META | [摘要](companies/us-META/summary.html) | [公司摘要](companies/us-META/tearsheet.html) | [啟動報告](companies/us-META/initiation.html) | [風險](companies/us-META/risk_plan.html) |
| MSFT | [摘要](companies/us-MSFT/summary.html) | [公司摘要](companies/us-MSFT/tearsheet.html) | [啟動報告](companies/us-MSFT/initiation.html) | [風險](companies/us-MSFT/risk_plan.html) |
| NVDA | [摘要](companies/us-NVDA/summary.html) | [公司摘要](companies/us-NVDA/tearsheet.html) | [啟動報告](companies/us-NVDA/initiation.html) | [風險](companies/us-NVDA/risk_plan.html) |
| ORCL | [摘要](companies/us-ORCL/summary.html) | [公司摘要](companies/us-ORCL/tearsheet.html) | [啟動報告](companies/us-ORCL/initiation.html) | [風險](companies/us-ORCL/risk_plan.html) |
| PLTR | [摘要](companies/us-PLTR/summary.html) | [公司摘要](companies/us-PLTR/tearsheet.html) | [啟動報告](companies/us-PLTR/initiation.html) | [風險](companies/us-PLTR/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
