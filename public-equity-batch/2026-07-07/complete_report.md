# StockLoop PEI 完整批次報告 2026-07-07

- 產出時間：2026-07-07 07:58:32
- 標的池檔數：43
- 已具備目前價格與研究狀態的列數：43
- Decision-ready 檔數：0
- 來源報告：reports/news/2026-07-07_kol_news_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 43 檔標的；來源為 reports/news/2026-07-07_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：43 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：25 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：18 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：43 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：43 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | crypto | 1 |
| 市場 | tw | 9 |
| 市場 | us | 33 |
| 分類 | 現在可以買名單 | 18 |
| 分類 | 現在不能買，但值得等買點名單 | 25 |
| 研究標籤 | Wait for trigger（等待觸發） | 25 |
| 研究標籤 | Watch only（僅觀察） | 18 |
| 研究狀態 | partial（證據仍不足） | 43 |
| 估值狀態 | not_run（本流程未執行估值模型） | 43 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 43 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 43 |
| 決策就緒 | 否 | 43 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 43 |
| official_validation_not_complete | 33 |
| research_status_not_complete | 43 |
| risk_status_not_complete | 43 |
| valuation_status_not_complete | 43 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- crypto_asset 不適用 common-equity PEI 模型，需工具型/ETF 風險路徑
- fund_or_etf 不適用 common-equity PEI 模型，需工具型/ETF 風險路徑
- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 估值 handoff 缺失：valuation multiples missing
- 官方公司/證券身分驗證未完成
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：official company or fundamental evidence missing
- 官方證據 handoff 缺失：缺少公司級官方營收、訂單、財報或法說支撐
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=中
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：台股官方公司基本資料未命中
- 產業 thesis 缺失證據：月營收資料未命中或未接到此市場
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 風險 handoff 缺失：20d average trade value missing
- 風險 handoff 缺失：downside distance input missing
- 風險 handoff 缺失：local OHLCV history missing

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1409 | 新纖 | 現在可以買名單 | Watch only（僅觀察） | 30.25 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-1409/summary.html) | [風險](companies/tw-1409/risk_plan.html) | [啟動報告](companies/tw-1409/initiation.html) |
| 1444 | 力麗 | 現在可以買名單 | Watch only（僅觀察） | 9.15 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-1444/summary.html) | [風險](companies/tw-1444/risk_plan.html) | [啟動報告](companies/tw-1444/initiation.html) |
| 2317 | 鴻海 | 現在可以買名單 | Watch only（僅觀察） | 242 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2317/summary.html) | [風險](companies/tw-2317/risk_plan.html) | [啟動報告](companies/tw-2317/initiation.html) |
| 2330 | 台積電 | 現在可以買名單 | Watch only（僅觀察） | 2,460 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2404 | 漢唐 | 現在可以買名單 | Watch only（僅觀察） | 1,320 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2404/summary.html) | [風險](companies/tw-2404/risk_plan.html) | [啟動報告](companies/tw-2404/initiation.html) |
| 2812 | 台中銀 | 現在可以買名單 | Watch only（僅觀察） | 20.55 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2812/summary.html) | [風險](companies/tw-2812/risk_plan.html) | [啟動報告](companies/tw-2812/initiation.html) |
| 3413 | 京鼎 | 現在可以買名單 | Watch only（僅觀察） | 325.5 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3413/summary.html) | [風險](companies/tw-3413/risk_plan.html) | [啟動報告](companies/tw-3413/initiation.html) |
| 8383 | 千附 | 現在可以買名單 | Watch only（僅觀察） | 65 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-8383/summary.html) | [風險](companies/tw-8383/risk_plan.html) | [啟動報告](companies/tw-8383/initiation.html) |
| AMAT | 應用材料 | 現在可以買名單 | Watch only（僅觀察） | 592.79 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-AMAT/summary.html) | [風險](companies/us-AMAT/risk_plan.html) | [啟動報告](companies/us-AMAT/initiation.html) |
| INTC | 英特爾 | 現在可以買名單 | Watch only（僅觀察） | 122.2 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-INTC/summary.html) | [風險](companies/us-INTC/risk_plan.html) | [啟動報告](companies/us-INTC/initiation.html) |
| IREN | IREN | 現在可以買名單 | Watch only（僅觀察） | 43.91 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-IREN/summary.html) | [風險](companies/us-IREN/risk_plan.html) | [啟動報告](companies/us-IREN/initiation.html) |
| ISRG | 直覺外科 | 現在可以買名單 | Watch only（僅觀察） | 432.83 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-ISRG/summary.html) | [風險](companies/us-ISRG/risk_plan.html) | [啟動報告](companies/us-ISRG/initiation.html) |
| LRCX | 科林研發（Lam Research | 現在可以買名單 | Watch only（僅觀察） | 350.2 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-LRCX/summary.html) | [風險](companies/us-LRCX/risk_plan.html) | [啟動報告](companies/us-LRCX/initiation.html) |
| ORCL | 甲骨文 | 現在可以買名單 | Watch only（僅觀察） | 143.76 USD | 2026-07-06T20:00:03Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-ORCL/summary.html) | [風險](companies/us-ORCL/risk_plan.html) | [啟動報告](companies/us-ORCL/initiation.html) |
| PLTR | Palantir | 現在可以買名單 | Watch only（僅觀察） | 132.54 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-PLTR/summary.html) | [風險](companies/us-PLTR/risk_plan.html) | [啟動報告](companies/us-PLTR/initiation.html) |
| STX | 希捷 | 現在可以買名單 | Watch only（僅觀察） | 868.26 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-STX/summary.html) | [風險](companies/us-STX/risk_plan.html) | [啟動報告](companies/us-STX/initiation.html) |
| TSLA | 特斯拉 | 現在可以買名單 | Watch only（僅觀察） | 419.77 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-TSLA/summary.html) | [風險](companies/us-TSLA/risk_plan.html) | [啟動報告](companies/us-TSLA/initiation.html) |
| WDC | 西部數據 | 現在可以買名單 | Watch only（僅觀察） | 577.46 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-WDC/summary.html) | [風險](companies/us-WDC/risk_plan.html) | [啟動報告](companies/us-WDC/initiation.html) |
| 2408 | 南亞科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 420.5 TWD | 2026-07-06 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2408/summary.html) | [風險](companies/tw-2408/risk_plan.html) | [啟動報告](companies/tw-2408/initiation.html) |
| BTC | 比特幣 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 63,986.06 USD | 2026-07-06T23:57:28Z | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/crypto-BTC/summary.html) | [風險](companies/crypto-BTC/risk_plan.html) | [啟動報告](companies/crypto-BTC/initiation.html) |
| AAOI | 應用光電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 123.36 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AAOI/summary.html) | [風險](companies/us-AAOI/risk_plan.html) | [啟動報告](companies/us-AAOI/initiation.html) |
| AAPL | 蘋果 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 312.66 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AAPL/summary.html) | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| AMD | 超微 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 552.05 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AMD/summary.html) | [風險](companies/us-AMD/risk_plan.html) | [啟動報告](companies/us-AMD/initiation.html) |
| AMZN | 亞馬遜 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 244.16 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AMZN/summary.html) | [風險](companies/us-AMZN/risk_plan.html) | [啟動報告](companies/us-AMZN/initiation.html) |
| ASML | 艾司摩爾 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1,825.07 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ASML/summary.html) | [風險](companies/us-ASML/risk_plan.html) | [啟動報告](companies/us-ASML/initiation.html) |
| AVGO | 博通 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 373.9 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AVGO/summary.html) | [風險](companies/us-AVGO/risk_plan.html) | [啟動報告](companies/us-AVGO/initiation.html) |
| AXTI | AXT Inc | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 63.52 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AXTI/summary.html) | [風險](companies/us-AXTI/risk_plan.html) | [啟動報告](companies/us-AXTI/initiation.html) |
| COHR | Coherent | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 335.7 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-COHR/summary.html) | [風險](companies/us-COHR/risk_plan.html) | [啟動報告](companies/us-COHR/initiation.html) |
| CRWV | CoreWeave | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 86.46 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-CRWV/summary.html) | [風險](companies/us-CRWV/risk_plan.html) | [啟動報告](companies/us-CRWV/initiation.html) |
| GOOG | Google | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 364.9 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GOOG/summary.html) | [風險](companies/us-GOOG/risk_plan.html) | [啟動報告](companies/us-GOOG/initiation.html) |
| HOOD | Robinhood | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 117.55 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-HOOD/summary.html) | [風險](companies/us-HOOD/risk_plan.html) | [啟動報告](companies/us-HOOD/initiation.html) |
| IGV | 軟體ETF | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 94.79 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-IGV/summary.html) | [風險](companies/us-IGV/risk_plan.html) | [啟動報告](companies/us-IGV/initiation.html) |
| IONQ | IonQ | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 48.87 USD | 2026-07-06T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-IONQ/summary.html) | [風險](companies/us-IONQ/risk_plan.html) | [啟動報告](companies/us-IONQ/initiation.html) |
| IWM | 羅素2000 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 298.9 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-IWM/summary.html) | [風險](companies/us-IWM/risk_plan.html) | [啟動報告](companies/us-IWM/initiation.html) |
| META | Meta | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 600.29 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-META/summary.html) | [風險](companies/us-META/risk_plan.html) | [啟動報告](companies/us-META/initiation.html) |
| MSFT | 微軟 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 386.74 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MSFT/summary.html) | [風險](companies/us-MSFT/risk_plan.html) | [啟動報告](companies/us-MSFT/initiation.html) |
| MU | 美光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 984.75 USD | 2026-07-06T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MU/summary.html) | [風險](companies/us-MU/risk_plan.html) | [啟動報告](companies/us-MU/initiation.html) |
| NVDA | 輝達 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 195.55 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-NVDA/summary.html) | [風險](companies/us-NVDA/risk_plan.html) | [啟動報告](companies/us-NVDA/initiation.html) |
| ON | 安森美 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 94.69 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ON/summary.html) | [風險](companies/us-ON/risk_plan.html) | [啟動報告](companies/us-ON/initiation.html) |
| QQQ | 納斯達克 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 722.82 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-QQQ/summary.html) | [風險](companies/us-QQQ/risk_plan.html) | [啟動報告](companies/us-QQQ/initiation.html) |
| SNDK | 閃迪 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1,744.43 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SNDK/summary.html) | [風險](companies/us-SNDK/risk_plan.html) | [啟動報告](companies/us-SNDK/initiation.html) |
| SOXX | 費半 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 581.51 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SOXX/summary.html) | [風險](companies/us-SOXX/risk_plan.html) | [啟動報告](companies/us-SOXX/initiation.html) |
| SPY | 標普500 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 751.28 USD | 2026-07-06T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SPY/summary.html) | [風險](companies/us-SPY/risk_plan.html) | [啟動報告](companies/us-SPY/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 1409 | [摘要](companies/tw-1409/summary.html) | [公司摘要](companies/tw-1409/tearsheet.html) | [啟動報告](companies/tw-1409/initiation.html) | [風險](companies/tw-1409/risk_plan.html) |
| 1444 | [摘要](companies/tw-1444/summary.html) | [公司摘要](companies/tw-1444/tearsheet.html) | [啟動報告](companies/tw-1444/initiation.html) | [風險](companies/tw-1444/risk_plan.html) |
| 2317 | [摘要](companies/tw-2317/summary.html) | [公司摘要](companies/tw-2317/tearsheet.html) | [啟動報告](companies/tw-2317/initiation.html) | [風險](companies/tw-2317/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2404 | [摘要](companies/tw-2404/summary.html) | [公司摘要](companies/tw-2404/tearsheet.html) | [啟動報告](companies/tw-2404/initiation.html) | [風險](companies/tw-2404/risk_plan.html) |
| 2812 | [摘要](companies/tw-2812/summary.html) | [公司摘要](companies/tw-2812/tearsheet.html) | [啟動報告](companies/tw-2812/initiation.html) | [風險](companies/tw-2812/risk_plan.html) |
| 3413 | [摘要](companies/tw-3413/summary.html) | [公司摘要](companies/tw-3413/tearsheet.html) | [啟動報告](companies/tw-3413/initiation.html) | [風險](companies/tw-3413/risk_plan.html) |
| 8383 | [摘要](companies/tw-8383/summary.html) | [公司摘要](companies/tw-8383/tearsheet.html) | [啟動報告](companies/tw-8383/initiation.html) | [風險](companies/tw-8383/risk_plan.html) |
| AMAT | [摘要](companies/us-AMAT/summary.html) | [公司摘要](companies/us-AMAT/tearsheet.html) | [啟動報告](companies/us-AMAT/initiation.html) | [風險](companies/us-AMAT/risk_plan.html) |
| INTC | [摘要](companies/us-INTC/summary.html) | [公司摘要](companies/us-INTC/tearsheet.html) | [啟動報告](companies/us-INTC/initiation.html) | [風險](companies/us-INTC/risk_plan.html) |
| IREN | [摘要](companies/us-IREN/summary.html) | [公司摘要](companies/us-IREN/tearsheet.html) | [啟動報告](companies/us-IREN/initiation.html) | [風險](companies/us-IREN/risk_plan.html) |
| ISRG | [摘要](companies/us-ISRG/summary.html) | [公司摘要](companies/us-ISRG/tearsheet.html) | [啟動報告](companies/us-ISRG/initiation.html) | [風險](companies/us-ISRG/risk_plan.html) |
| LRCX | [摘要](companies/us-LRCX/summary.html) | [公司摘要](companies/us-LRCX/tearsheet.html) | [啟動報告](companies/us-LRCX/initiation.html) | [風險](companies/us-LRCX/risk_plan.html) |
| ORCL | [摘要](companies/us-ORCL/summary.html) | [公司摘要](companies/us-ORCL/tearsheet.html) | [啟動報告](companies/us-ORCL/initiation.html) | [風險](companies/us-ORCL/risk_plan.html) |
| PLTR | [摘要](companies/us-PLTR/summary.html) | [公司摘要](companies/us-PLTR/tearsheet.html) | [啟動報告](companies/us-PLTR/initiation.html) | [風險](companies/us-PLTR/risk_plan.html) |
| STX | [摘要](companies/us-STX/summary.html) | [公司摘要](companies/us-STX/tearsheet.html) | [啟動報告](companies/us-STX/initiation.html) | [風險](companies/us-STX/risk_plan.html) |
| TSLA | [摘要](companies/us-TSLA/summary.html) | [公司摘要](companies/us-TSLA/tearsheet.html) | [啟動報告](companies/us-TSLA/initiation.html) | [風險](companies/us-TSLA/risk_plan.html) |
| WDC | [摘要](companies/us-WDC/summary.html) | [公司摘要](companies/us-WDC/tearsheet.html) | [啟動報告](companies/us-WDC/initiation.html) | [風險](companies/us-WDC/risk_plan.html) |
| 2408 | [摘要](companies/tw-2408/summary.html) | [公司摘要](companies/tw-2408/tearsheet.html) | [啟動報告](companies/tw-2408/initiation.html) | [風險](companies/tw-2408/risk_plan.html) |
| BTC | [摘要](companies/crypto-BTC/summary.html) | [公司摘要](companies/crypto-BTC/tearsheet.html) | [啟動報告](companies/crypto-BTC/initiation.html) | [風險](companies/crypto-BTC/risk_plan.html) |
| AAOI | [摘要](companies/us-AAOI/summary.html) | [公司摘要](companies/us-AAOI/tearsheet.html) | [啟動報告](companies/us-AAOI/initiation.html) | [風險](companies/us-AAOI/risk_plan.html) |
| AAPL | [摘要](companies/us-AAPL/summary.html) | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| AMD | [摘要](companies/us-AMD/summary.html) | [公司摘要](companies/us-AMD/tearsheet.html) | [啟動報告](companies/us-AMD/initiation.html) | [風險](companies/us-AMD/risk_plan.html) |
| AMZN | [摘要](companies/us-AMZN/summary.html) | [公司摘要](companies/us-AMZN/tearsheet.html) | [啟動報告](companies/us-AMZN/initiation.html) | [風險](companies/us-AMZN/risk_plan.html) |
| ASML | [摘要](companies/us-ASML/summary.html) | [公司摘要](companies/us-ASML/tearsheet.html) | [啟動報告](companies/us-ASML/initiation.html) | [風險](companies/us-ASML/risk_plan.html) |
| AVGO | [摘要](companies/us-AVGO/summary.html) | [公司摘要](companies/us-AVGO/tearsheet.html) | [啟動報告](companies/us-AVGO/initiation.html) | [風險](companies/us-AVGO/risk_plan.html) |
| AXTI | [摘要](companies/us-AXTI/summary.html) | [公司摘要](companies/us-AXTI/tearsheet.html) | [啟動報告](companies/us-AXTI/initiation.html) | [風險](companies/us-AXTI/risk_plan.html) |
| COHR | [摘要](companies/us-COHR/summary.html) | [公司摘要](companies/us-COHR/tearsheet.html) | [啟動報告](companies/us-COHR/initiation.html) | [風險](companies/us-COHR/risk_plan.html) |
| CRWV | [摘要](companies/us-CRWV/summary.html) | [公司摘要](companies/us-CRWV/tearsheet.html) | [啟動報告](companies/us-CRWV/initiation.html) | [風險](companies/us-CRWV/risk_plan.html) |
| GOOG | [摘要](companies/us-GOOG/summary.html) | [公司摘要](companies/us-GOOG/tearsheet.html) | [啟動報告](companies/us-GOOG/initiation.html) | [風險](companies/us-GOOG/risk_plan.html) |
| HOOD | [摘要](companies/us-HOOD/summary.html) | [公司摘要](companies/us-HOOD/tearsheet.html) | [啟動報告](companies/us-HOOD/initiation.html) | [風險](companies/us-HOOD/risk_plan.html) |
| IGV | [摘要](companies/us-IGV/summary.html) | [公司摘要](companies/us-IGV/tearsheet.html) | [啟動報告](companies/us-IGV/initiation.html) | [風險](companies/us-IGV/risk_plan.html) |
| IONQ | [摘要](companies/us-IONQ/summary.html) | [公司摘要](companies/us-IONQ/tearsheet.html) | [啟動報告](companies/us-IONQ/initiation.html) | [風險](companies/us-IONQ/risk_plan.html) |
| IWM | [摘要](companies/us-IWM/summary.html) | [公司摘要](companies/us-IWM/tearsheet.html) | [啟動報告](companies/us-IWM/initiation.html) | [風險](companies/us-IWM/risk_plan.html) |
| META | [摘要](companies/us-META/summary.html) | [公司摘要](companies/us-META/tearsheet.html) | [啟動報告](companies/us-META/initiation.html) | [風險](companies/us-META/risk_plan.html) |
| MSFT | [摘要](companies/us-MSFT/summary.html) | [公司摘要](companies/us-MSFT/tearsheet.html) | [啟動報告](companies/us-MSFT/initiation.html) | [風險](companies/us-MSFT/risk_plan.html) |
| MU | [摘要](companies/us-MU/summary.html) | [公司摘要](companies/us-MU/tearsheet.html) | [啟動報告](companies/us-MU/initiation.html) | [風險](companies/us-MU/risk_plan.html) |
| NVDA | [摘要](companies/us-NVDA/summary.html) | [公司摘要](companies/us-NVDA/tearsheet.html) | [啟動報告](companies/us-NVDA/initiation.html) | [風險](companies/us-NVDA/risk_plan.html) |
| ON | [摘要](companies/us-ON/summary.html) | [公司摘要](companies/us-ON/tearsheet.html) | [啟動報告](companies/us-ON/initiation.html) | [風險](companies/us-ON/risk_plan.html) |
| QQQ | [摘要](companies/us-QQQ/summary.html) | [公司摘要](companies/us-QQQ/tearsheet.html) | [啟動報告](companies/us-QQQ/initiation.html) | [風險](companies/us-QQQ/risk_plan.html) |
| SNDK | [摘要](companies/us-SNDK/summary.html) | [公司摘要](companies/us-SNDK/tearsheet.html) | [啟動報告](companies/us-SNDK/initiation.html) | [風險](companies/us-SNDK/risk_plan.html) |
| SOXX | [摘要](companies/us-SOXX/summary.html) | [公司摘要](companies/us-SOXX/tearsheet.html) | [啟動報告](companies/us-SOXX/initiation.html) | [風險](companies/us-SOXX/risk_plan.html) |
| SPY | [摘要](companies/us-SPY/summary.html) | [公司摘要](companies/us-SPY/tearsheet.html) | [啟動報告](companies/us-SPY/initiation.html) | [風險](companies/us-SPY/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
