# StockLoop PEI 完整批次報告 2026-07-09

- 產出時間：2026-07-09 07:59:55
- 標的池檔數：59
- 已具備目前價格與研究狀態的列數：59
- Decision-ready 檔數：0
- 來源報告：reports/news/2026-07-09_kol_news_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 59 檔標的；來源為 reports/news/2026-07-09_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：59 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：8 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：29 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：22 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：59 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：59 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 35 |
| 市場 | us | 24 |
| 分類 | 現在可以買名單 | 30 |
| 分類 | 現在不能買，但值得等買點名單 | 29 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 8 |
| 研究標籤 | Wait for trigger（等待觸發） | 29 |
| 研究標籤 | Watch only（僅觀察） | 22 |
| 研究狀態 | partial（證據仍不足） | 59 |
| 估值狀態 | not_run（本流程未執行估值模型） | 59 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 59 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 59 |
| 決策就緒 | 否 | 59 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 59 |
| official_validation_not_complete | 24 |
| research_status_not_complete | 59 |
| risk_status_not_complete | 59 |
| valuation_status_not_complete | 59 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 估值 handoff 缺失：valuation multiples missing
- 官方公司/證券身分驗證未完成
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：台股官方公司基本資料未命中
- 官方證據 handoff 缺失：月營收資料未命中或未接到此市場
- 官方證據 handoff 缺失：缺少公司級官方營收、訂單、財報或法說支撐
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
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
- 風險 handoff 缺失：20d average trade value missing
- 風險 handoff 缺失：downside distance input missing
- 風險 handoff 缺失：local OHLCV history missing

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2308 | 台達電 | 現在可以買名單 | Watch only（僅觀察） | 1,885 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2308/summary.html) | [風險](companies/tw-2308/risk_plan.html) | [啟動報告](companies/tw-2308/initiation.html) |
| 2330 | 台積電 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 2,465 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2363 | 矽統 | 現在可以買名單 | Watch only（僅觀察） | 67 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2363/summary.html) | [風險](companies/tw-2363/risk_plan.html) | [啟動報告](companies/tw-2363/initiation.html) |
| 2382 | 廣達 | 現在可以買名單 | Watch only（僅觀察） | 377 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2382/summary.html) | [風險](companies/tw-2382/risk_plan.html) | [啟動報告](companies/tw-2382/initiation.html) |
| 2645 | 長榮航太 | 現在可以買名單 | Watch only（僅觀察） | 235.5 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2645/summary.html) | [風險](companies/tw-2645/risk_plan.html) | [啟動報告](companies/tw-2645/initiation.html) |
| 3035 | 智原 | 現在可以買名單 | Watch only（僅觀察） | 216 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3035/summary.html) | [風險](companies/tw-3035/risk_plan.html) | [啟動報告](companies/tw-3035/initiation.html) |
| 3042 | 晶技 | 現在可以買名單 | Watch only（僅觀察） | 206 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3042/summary.html) | [風險](companies/tw-3042/risk_plan.html) | [啟動報告](companies/tw-3042/initiation.html) |
| 3211 | 順達 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 427.5 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-3211/summary.html) | [風險](companies/tw-3211/risk_plan.html) | [啟動報告](companies/tw-3211/initiation.html) |
| 3260 | 威剛 | 現在可以買名單 | Watch only（僅觀察） | 404 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-3260/summary.html) | [風險](companies/tw-3260/risk_plan.html) | [啟動報告](companies/tw-3260/initiation.html) |
| 3532 | 台勝科 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 409.5 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-3532/summary.html) | [風險](companies/tw-3532/risk_plan.html) | [啟動報告](companies/tw-3532/initiation.html) |
| 4931 | 新盛力 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 272 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-4931/summary.html) | [風險](companies/tw-4931/risk_plan.html) | [啟動報告](companies/tw-4931/initiation.html) |
| 4958 | 臻鼎-KY | 現在可以買名單 | Watch only（僅觀察） | 565 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-4958/summary.html) | [風險](companies/tw-4958/risk_plan.html) | [啟動報告](companies/tw-4958/initiation.html) |
| 4991 | 環宇-KY | 現在可以買名單 | Watch only（僅觀察） | 482 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-4991/summary.html) | [風險](companies/tw-4991/risk_plan.html) | [啟動報告](companies/tw-4991/initiation.html) |
| 5469 | 瀚宇博 | 現在可以買名單 | Watch only（僅觀察） | 83.5 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-5469/summary.html) | [風險](companies/tw-5469/risk_plan.html) | [啟動報告](companies/tw-5469/initiation.html) |
| 6138 | 茂達 | 現在可以買名單 | Watch only（僅觀察） | 375 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6138/summary.html) | [風險](companies/tw-6138/risk_plan.html) | [啟動報告](companies/tw-6138/initiation.html) |
| 6213 | 聯茂 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 393.5 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-6213/summary.html) | [風險](companies/tw-6213/risk_plan.html) | [啟動報告](companies/tw-6213/initiation.html) |
| 6488 | 環球晶 | 現在可以買名單 | Watch only（僅觀察） | 1,230 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6488/summary.html) | [風險](companies/tw-6488/risk_plan.html) | [啟動報告](companies/tw-6488/initiation.html) |
| 6719 | 力智 | 現在可以買名單 | Watch only（僅觀察） | 277 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-6719/summary.html) | [風險](companies/tw-6719/risk_plan.html) | [啟動報告](companies/tw-6719/initiation.html) |
| 7402 | 邑錡 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 135.5 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-7402/summary.html) | [風險](companies/tw-7402/risk_plan.html) | [啟動報告](companies/tw-7402/initiation.html) |
| 8131 | 福懋科 | 現在可以買名單 | Watch only（僅觀察） | 75 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-8131/summary.html) | [風險](companies/tw-8131/risk_plan.html) | [啟動報告](companies/tw-8131/initiation.html) |
| 8261 | 富鼎 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 348 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/tw-8261/summary.html) | [風險](companies/tw-8261/risk_plan.html) | [啟動報告](companies/tw-8261/initiation.html) |
| AVGO | Broadcom | 現在可以買名單 | Watch only（僅觀察） | 388.69 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-AVGO/summary.html) | [風險](companies/us-AVGO/risk_plan.html) | [啟動報告](companies/us-AVGO/initiation.html) |
| BABA | 阿里巴巴 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 108.98 USD | 2026-07-08T20:04:22Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-BABA/summary.html) | [風險](companies/us-BABA/risk_plan.html) | [啟動報告](companies/us-BABA/initiation.html) |
| CRWD | CrowdStrike | 現在可以買名單 | Watch only（僅觀察） | 191.12 USD | 2026-07-08T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-CRWD/summary.html) | [風險](companies/us-CRWD/risk_plan.html) | [啟動報告](companies/us-CRWD/initiation.html) |
| JD | 京東 | 現在可以買名單 | Watch only（僅觀察） | 27.63 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-JD/summary.html) | [風險](companies/us-JD/risk_plan.html) | [啟動報告](companies/us-JD/initiation.html) |
| META | Meta | 現在可以買名單 | Watch only（僅觀察） | 603.12 USD | 2026-07-08T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-META/summary.html) | [風險](companies/us-META/risk_plan.html) | [啟動報告](companies/us-META/initiation.html) |
| NET | Cloudflare | 現在可以買名單 | Watch only（僅觀察） | 273.4 USD | 2026-07-08T20:03:31Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-NET/summary.html) | [風險](companies/us-NET/risk_plan.html) | [啟動報告](companies/us-NET/initiation.html) |
| NVDA | Nvidia | 現在可以買名單 | Watch only（僅觀察） | 204.12 USD | 2026-07-08T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-NVDA/summary.html) | [風險](companies/us-NVDA/risk_plan.html) | [啟動報告](companies/us-NVDA/initiation.html) |
| PLTR | Palantir | 現在可以買名單 | Watch only（僅觀察） | 132.22 USD | 2026-07-08T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-PLTR/summary.html) | [風險](companies/us-PLTR/risk_plan.html) | [啟動報告](companies/us-PLTR/initiation.html) |
| TCEHY | 騰訊 | 現在可以買名單 | Watch only（僅觀察） | 60.95 USD | 2026-07-08T19:59:55Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/us-TCEHY/summary.html) | [風險](companies/us-TCEHY/risk_plan.html) | [啟動報告](companies/us-TCEHY/initiation.html) |
| 2313 | 華通 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 224 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2313/summary.html) | [風險](companies/tw-2313/risk_plan.html) | [啟動報告](companies/tw-2313/initiation.html) |
| 2327 | 國巨 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 891 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2327/summary.html) | [風險](companies/tw-2327/risk_plan.html) | [啟動報告](companies/tw-2327/initiation.html) |
| 2344 | 華邦電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 168.5 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2344/summary.html) | [風險](companies/tw-2344/risk_plan.html) | [啟動報告](companies/tw-2344/initiation.html) |
| 2408 | 南亞科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 396 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2408/summary.html) | [風險](companies/tw-2408/risk_plan.html) | [啟動報告](companies/tw-2408/initiation.html) |
| 2455 | 全新 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 335 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2455/summary.html) | [風險](companies/tw-2455/risk_plan.html) | [啟動報告](companies/tw-2455/initiation.html) |
| 2492 | 華新科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 474 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2492/summary.html) | [風險](companies/tw-2492/risk_plan.html) | [啟動報告](companies/tw-2492/initiation.html) |
| 3037 | 欣興 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 863 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3037/summary.html) | [風險](companies/tw-3037/risk_plan.html) | [啟動報告](companies/tw-3037/initiation.html) |
| 3081 | 聯亞 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2,095 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3081/summary.html) | [風險](companies/tw-3081/risk_plan.html) | [啟動報告](companies/tw-3081/initiation.html) |
| 3105 | 穩懋 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 413.5 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3105/summary.html) | [風險](companies/tw-3105/risk_plan.html) | [啟動報告](companies/tw-3105/initiation.html) |
| 3163 | 波若威 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 777 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3163/summary.html) | [風險](companies/tw-3163/risk_plan.html) | [啟動報告](companies/tw-3163/initiation.html) |
| 3189 | 景碩 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 755 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3189/summary.html) | [風險](companies/tw-3189/risk_plan.html) | [啟動報告](companies/tw-3189/initiation.html) |
| 3363 | 上銓 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 640 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3363/summary.html) | [風險](companies/tw-3363/risk_plan.html) | [啟動報告](companies/tw-3363/initiation.html) |
| 6282 | 康舒 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 59 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-6282/summary.html) | [風險](companies/tw-6282/risk_plan.html) | [啟動報告](companies/tw-6282/initiation.html) |
| 8086 | 宏捷科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 139 TWD | 2026-07-08 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8086/summary.html) | [風險](companies/tw-8086/risk_plan.html) | [啟動報告](companies/tw-8086/initiation.html) |
| AAPL | Apple | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 313.39 USD | 2026-07-08T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AAPL/summary.html) | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| AMAT | 應用材料 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 570.5 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AMAT/summary.html) | [風險](companies/us-AMAT/risk_plan.html) | [啟動報告](companies/us-AMAT/initiation.html) |
| AMZN | Amazon | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 243.62 USD | 2026-07-08T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-AMZN/summary.html) | [風險](companies/us-AMZN/risk_plan.html) | [啟動報告](companies/us-AMZN/initiation.html) |
| ASML | ASML | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1,768.65 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ASML/summary.html) | [風險](companies/us-ASML/risk_plan.html) | [啟動報告](companies/us-ASML/initiation.html) |
| GLW | 康寧 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 184.03 USD | 2026-07-08T20:03:18Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GLW/summary.html) | [風險](companies/us-GLW/risk_plan.html) | [啟動報告](companies/us-GLW/initiation.html) |
| GOOGL | Alphabet | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 361.92 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-GOOGL/summary.html) | [風險](companies/us-GOOGL/risk_plan.html) | [啟動報告](companies/us-GOOGL/initiation.html) |
| LRCX | 科林研發 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 333.15 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-LRCX/summary.html) | [風險](companies/us-LRCX/risk_plan.html) | [啟動報告](companies/us-LRCX/initiation.html) |
| MCD | 麥當勞 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 278.25 USD | 2026-07-08T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MCD/summary.html) | [風險](companies/us-MCD/risk_plan.html) | [啟動報告](companies/us-MCD/initiation.html) |
| MRVL | Marvell | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 231.71 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MRVL/summary.html) | [風險](companies/us-MRVL/risk_plan.html) | [啟動報告](companies/us-MRVL/initiation.html) |
| MSFT | 微軟 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 383.34 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MSFT/summary.html) | [風險](companies/us-MSFT/risk_plan.html) | [啟動報告](companies/us-MSFT/initiation.html) |
| MU | 美光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 948.8 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-MU/summary.html) | [風險](companies/us-MU/risk_plan.html) | [啟動報告](companies/us-MU/initiation.html) |
| NKE | Nike | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 42.89 USD | 2026-07-08T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-NKE/summary.html) | [風險](companies/us-NKE/risk_plan.html) | [啟動報告](companies/us-NKE/initiation.html) |
| ORCL | Oracle | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 140.49 USD | 2026-07-08T20:05:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-ORCL/summary.html) | [風險](companies/us-ORCL/risk_plan.html) | [啟動報告](companies/us-ORCL/initiation.html) |
| RKLB | Rocket Lab | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 83.35 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-RKLB/summary.html) | [風險](companies/us-RKLB/risk_plan.html) | [啟動報告](companies/us-RKLB/initiation.html) |
| SBUX | 星巴克 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 103.87 USD | 2026-07-08T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SBUX/summary.html) | [風險](companies/us-SBUX/risk_plan.html) | [啟動報告](companies/us-SBUX/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 2308 | [摘要](companies/tw-2308/summary.html) | [公司摘要](companies/tw-2308/tearsheet.html) | [啟動報告](companies/tw-2308/initiation.html) | [風險](companies/tw-2308/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2363 | [摘要](companies/tw-2363/summary.html) | [公司摘要](companies/tw-2363/tearsheet.html) | [啟動報告](companies/tw-2363/initiation.html) | [風險](companies/tw-2363/risk_plan.html) |
| 2382 | [摘要](companies/tw-2382/summary.html) | [公司摘要](companies/tw-2382/tearsheet.html) | [啟動報告](companies/tw-2382/initiation.html) | [風險](companies/tw-2382/risk_plan.html) |
| 2645 | [摘要](companies/tw-2645/summary.html) | [公司摘要](companies/tw-2645/tearsheet.html) | [啟動報告](companies/tw-2645/initiation.html) | [風險](companies/tw-2645/risk_plan.html) |
| 3035 | [摘要](companies/tw-3035/summary.html) | [公司摘要](companies/tw-3035/tearsheet.html) | [啟動報告](companies/tw-3035/initiation.html) | [風險](companies/tw-3035/risk_plan.html) |
| 3042 | [摘要](companies/tw-3042/summary.html) | [公司摘要](companies/tw-3042/tearsheet.html) | [啟動報告](companies/tw-3042/initiation.html) | [風險](companies/tw-3042/risk_plan.html) |
| 3211 | [摘要](companies/tw-3211/summary.html) | [公司摘要](companies/tw-3211/tearsheet.html) | [啟動報告](companies/tw-3211/initiation.html) | [風險](companies/tw-3211/risk_plan.html) |
| 3260 | [摘要](companies/tw-3260/summary.html) | [公司摘要](companies/tw-3260/tearsheet.html) | [啟動報告](companies/tw-3260/initiation.html) | [風險](companies/tw-3260/risk_plan.html) |
| 3532 | [摘要](companies/tw-3532/summary.html) | [公司摘要](companies/tw-3532/tearsheet.html) | [啟動報告](companies/tw-3532/initiation.html) | [風險](companies/tw-3532/risk_plan.html) |
| 4931 | [摘要](companies/tw-4931/summary.html) | [公司摘要](companies/tw-4931/tearsheet.html) | [啟動報告](companies/tw-4931/initiation.html) | [風險](companies/tw-4931/risk_plan.html) |
| 4958 | [摘要](companies/tw-4958/summary.html) | [公司摘要](companies/tw-4958/tearsheet.html) | [啟動報告](companies/tw-4958/initiation.html) | [風險](companies/tw-4958/risk_plan.html) |
| 4991 | [摘要](companies/tw-4991/summary.html) | [公司摘要](companies/tw-4991/tearsheet.html) | [啟動報告](companies/tw-4991/initiation.html) | [風險](companies/tw-4991/risk_plan.html) |
| 5469 | [摘要](companies/tw-5469/summary.html) | [公司摘要](companies/tw-5469/tearsheet.html) | [啟動報告](companies/tw-5469/initiation.html) | [風險](companies/tw-5469/risk_plan.html) |
| 6138 | [摘要](companies/tw-6138/summary.html) | [公司摘要](companies/tw-6138/tearsheet.html) | [啟動報告](companies/tw-6138/initiation.html) | [風險](companies/tw-6138/risk_plan.html) |
| 6213 | [摘要](companies/tw-6213/summary.html) | [公司摘要](companies/tw-6213/tearsheet.html) | [啟動報告](companies/tw-6213/initiation.html) | [風險](companies/tw-6213/risk_plan.html) |
| 6488 | [摘要](companies/tw-6488/summary.html) | [公司摘要](companies/tw-6488/tearsheet.html) | [啟動報告](companies/tw-6488/initiation.html) | [風險](companies/tw-6488/risk_plan.html) |
| 6719 | [摘要](companies/tw-6719/summary.html) | [公司摘要](companies/tw-6719/tearsheet.html) | [啟動報告](companies/tw-6719/initiation.html) | [風險](companies/tw-6719/risk_plan.html) |
| 7402 | [摘要](companies/tw-7402/summary.html) | [公司摘要](companies/tw-7402/tearsheet.html) | [啟動報告](companies/tw-7402/initiation.html) | [風險](companies/tw-7402/risk_plan.html) |
| 8131 | [摘要](companies/tw-8131/summary.html) | [公司摘要](companies/tw-8131/tearsheet.html) | [啟動報告](companies/tw-8131/initiation.html) | [風險](companies/tw-8131/risk_plan.html) |
| 8261 | [摘要](companies/tw-8261/summary.html) | [公司摘要](companies/tw-8261/tearsheet.html) | [啟動報告](companies/tw-8261/initiation.html) | [風險](companies/tw-8261/risk_plan.html) |
| AVGO | [摘要](companies/us-AVGO/summary.html) | [公司摘要](companies/us-AVGO/tearsheet.html) | [啟動報告](companies/us-AVGO/initiation.html) | [風險](companies/us-AVGO/risk_plan.html) |
| BABA | [摘要](companies/us-BABA/summary.html) | [公司摘要](companies/us-BABA/tearsheet.html) | [啟動報告](companies/us-BABA/initiation.html) | [風險](companies/us-BABA/risk_plan.html) |
| CRWD | [摘要](companies/us-CRWD/summary.html) | [公司摘要](companies/us-CRWD/tearsheet.html) | [啟動報告](companies/us-CRWD/initiation.html) | [風險](companies/us-CRWD/risk_plan.html) |
| JD | [摘要](companies/us-JD/summary.html) | [公司摘要](companies/us-JD/tearsheet.html) | [啟動報告](companies/us-JD/initiation.html) | [風險](companies/us-JD/risk_plan.html) |
| META | [摘要](companies/us-META/summary.html) | [公司摘要](companies/us-META/tearsheet.html) | [啟動報告](companies/us-META/initiation.html) | [風險](companies/us-META/risk_plan.html) |
| NET | [摘要](companies/us-NET/summary.html) | [公司摘要](companies/us-NET/tearsheet.html) | [啟動報告](companies/us-NET/initiation.html) | [風險](companies/us-NET/risk_plan.html) |
| NVDA | [摘要](companies/us-NVDA/summary.html) | [公司摘要](companies/us-NVDA/tearsheet.html) | [啟動報告](companies/us-NVDA/initiation.html) | [風險](companies/us-NVDA/risk_plan.html) |
| PLTR | [摘要](companies/us-PLTR/summary.html) | [公司摘要](companies/us-PLTR/tearsheet.html) | [啟動報告](companies/us-PLTR/initiation.html) | [風險](companies/us-PLTR/risk_plan.html) |
| TCEHY | [摘要](companies/us-TCEHY/summary.html) | [公司摘要](companies/us-TCEHY/tearsheet.html) | [啟動報告](companies/us-TCEHY/initiation.html) | [風險](companies/us-TCEHY/risk_plan.html) |
| 2313 | [摘要](companies/tw-2313/summary.html) | [公司摘要](companies/tw-2313/tearsheet.html) | [啟動報告](companies/tw-2313/initiation.html) | [風險](companies/tw-2313/risk_plan.html) |
| 2327 | [摘要](companies/tw-2327/summary.html) | [公司摘要](companies/tw-2327/tearsheet.html) | [啟動報告](companies/tw-2327/initiation.html) | [風險](companies/tw-2327/risk_plan.html) |
| 2344 | [摘要](companies/tw-2344/summary.html) | [公司摘要](companies/tw-2344/tearsheet.html) | [啟動報告](companies/tw-2344/initiation.html) | [風險](companies/tw-2344/risk_plan.html) |
| 2408 | [摘要](companies/tw-2408/summary.html) | [公司摘要](companies/tw-2408/tearsheet.html) | [啟動報告](companies/tw-2408/initiation.html) | [風險](companies/tw-2408/risk_plan.html) |
| 2455 | [摘要](companies/tw-2455/summary.html) | [公司摘要](companies/tw-2455/tearsheet.html) | [啟動報告](companies/tw-2455/initiation.html) | [風險](companies/tw-2455/risk_plan.html) |
| 2492 | [摘要](companies/tw-2492/summary.html) | [公司摘要](companies/tw-2492/tearsheet.html) | [啟動報告](companies/tw-2492/initiation.html) | [風險](companies/tw-2492/risk_plan.html) |
| 3037 | [摘要](companies/tw-3037/summary.html) | [公司摘要](companies/tw-3037/tearsheet.html) | [啟動報告](companies/tw-3037/initiation.html) | [風險](companies/tw-3037/risk_plan.html) |
| 3081 | [摘要](companies/tw-3081/summary.html) | [公司摘要](companies/tw-3081/tearsheet.html) | [啟動報告](companies/tw-3081/initiation.html) | [風險](companies/tw-3081/risk_plan.html) |
| 3105 | [摘要](companies/tw-3105/summary.html) | [公司摘要](companies/tw-3105/tearsheet.html) | [啟動報告](companies/tw-3105/initiation.html) | [風險](companies/tw-3105/risk_plan.html) |
| 3163 | [摘要](companies/tw-3163/summary.html) | [公司摘要](companies/tw-3163/tearsheet.html) | [啟動報告](companies/tw-3163/initiation.html) | [風險](companies/tw-3163/risk_plan.html) |
| 3189 | [摘要](companies/tw-3189/summary.html) | [公司摘要](companies/tw-3189/tearsheet.html) | [啟動報告](companies/tw-3189/initiation.html) | [風險](companies/tw-3189/risk_plan.html) |
| 3363 | [摘要](companies/tw-3363/summary.html) | [公司摘要](companies/tw-3363/tearsheet.html) | [啟動報告](companies/tw-3363/initiation.html) | [風險](companies/tw-3363/risk_plan.html) |
| 6282 | [摘要](companies/tw-6282/summary.html) | [公司摘要](companies/tw-6282/tearsheet.html) | [啟動報告](companies/tw-6282/initiation.html) | [風險](companies/tw-6282/risk_plan.html) |
| 8086 | [摘要](companies/tw-8086/summary.html) | [公司摘要](companies/tw-8086/tearsheet.html) | [啟動報告](companies/tw-8086/initiation.html) | [風險](companies/tw-8086/risk_plan.html) |
| AAPL | [摘要](companies/us-AAPL/summary.html) | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| AMAT | [摘要](companies/us-AMAT/summary.html) | [公司摘要](companies/us-AMAT/tearsheet.html) | [啟動報告](companies/us-AMAT/initiation.html) | [風險](companies/us-AMAT/risk_plan.html) |
| AMZN | [摘要](companies/us-AMZN/summary.html) | [公司摘要](companies/us-AMZN/tearsheet.html) | [啟動報告](companies/us-AMZN/initiation.html) | [風險](companies/us-AMZN/risk_plan.html) |
| ASML | [摘要](companies/us-ASML/summary.html) | [公司摘要](companies/us-ASML/tearsheet.html) | [啟動報告](companies/us-ASML/initiation.html) | [風險](companies/us-ASML/risk_plan.html) |
| GLW | [摘要](companies/us-GLW/summary.html) | [公司摘要](companies/us-GLW/tearsheet.html) | [啟動報告](companies/us-GLW/initiation.html) | [風險](companies/us-GLW/risk_plan.html) |
| GOOGL | [摘要](companies/us-GOOGL/summary.html) | [公司摘要](companies/us-GOOGL/tearsheet.html) | [啟動報告](companies/us-GOOGL/initiation.html) | [風險](companies/us-GOOGL/risk_plan.html) |
| LRCX | [摘要](companies/us-LRCX/summary.html) | [公司摘要](companies/us-LRCX/tearsheet.html) | [啟動報告](companies/us-LRCX/initiation.html) | [風險](companies/us-LRCX/risk_plan.html) |
| MCD | [摘要](companies/us-MCD/summary.html) | [公司摘要](companies/us-MCD/tearsheet.html) | [啟動報告](companies/us-MCD/initiation.html) | [風險](companies/us-MCD/risk_plan.html) |
| MRVL | [摘要](companies/us-MRVL/summary.html) | [公司摘要](companies/us-MRVL/tearsheet.html) | [啟動報告](companies/us-MRVL/initiation.html) | [風險](companies/us-MRVL/risk_plan.html) |
| MSFT | [摘要](companies/us-MSFT/summary.html) | [公司摘要](companies/us-MSFT/tearsheet.html) | [啟動報告](companies/us-MSFT/initiation.html) | [風險](companies/us-MSFT/risk_plan.html) |
| MU | [摘要](companies/us-MU/summary.html) | [公司摘要](companies/us-MU/tearsheet.html) | [啟動報告](companies/us-MU/initiation.html) | [風險](companies/us-MU/risk_plan.html) |
| NKE | [摘要](companies/us-NKE/summary.html) | [公司摘要](companies/us-NKE/tearsheet.html) | [啟動報告](companies/us-NKE/initiation.html) | [風險](companies/us-NKE/risk_plan.html) |
| ORCL | [摘要](companies/us-ORCL/summary.html) | [公司摘要](companies/us-ORCL/tearsheet.html) | [啟動報告](companies/us-ORCL/initiation.html) | [風險](companies/us-ORCL/risk_plan.html) |
| RKLB | [摘要](companies/us-RKLB/summary.html) | [公司摘要](companies/us-RKLB/tearsheet.html) | [啟動報告](companies/us-RKLB/initiation.html) | [風險](companies/us-RKLB/risk_plan.html) |
| SBUX | [摘要](companies/us-SBUX/summary.html) | [公司摘要](companies/us-SBUX/tearsheet.html) | [啟動報告](companies/us-SBUX/initiation.html) | [風險](companies/us-SBUX/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
