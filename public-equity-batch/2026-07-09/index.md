# StockLoop PEI 批次摘要 2026-07-09

- 產出時間：2026-07-09 07:59:55
- 標的池檔數：59
- 已具備目前價格與研究狀態的列數：59
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

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

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 59

## 風控狀態

- not_run（尚未完成 PM 風控/流動性/sizing gate）: 59

## 期限 underwrite

- partial（3M/12M/3Y underwrite 未完整）: 59

## Decision-ready gate

- 否: 59

## 下一步 PEI workflow

- investment_horizon_not_complete: 59
- official_validation_not_complete: 24
- research_status_not_complete: 59
- risk_status_not_complete: 59
- valuation_status_not_complete: 59

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2308 | 台達電 | 現在可以買名單 | 1,885 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2308/summary.html) |
| 2330 | 台積電 | 現在可以買名單 | 2,465 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-2330/summary.html) |
| 2363 | 矽統 | 現在可以買名單 | 67 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2363/summary.html) |
| 2382 | 廣達 | 現在可以買名單 | 377 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2382/summary.html) |
| 2645 | 長榮航太 | 現在可以買名單 | 235.5 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2645/summary.html) |
| 3035 | 智原 | 現在可以買名單 | 216 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3035/summary.html) |
| 3042 | 晶技 | 現在可以買名單 | 206 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3042/summary.html) |
| 3211 | 順達 | 現在可以買名單 | 427.5 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-3211/summary.html) |
| 3260 | 威剛 | 現在可以買名單 | 404 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3260/summary.html) |
| 3532 | 台勝科 | 現在可以買名單 | 409.5 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-3532/summary.html) |
| 4931 | 新盛力 | 現在可以買名單 | 272 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-4931/summary.html) |
| 4958 | 臻鼎-KY | 現在可以買名單 | 565 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-4958/summary.html) |
| 4991 | 環宇-KY | 現在可以買名單 | 482 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-4991/summary.html) |
| 5469 | 瀚宇博 | 現在可以買名單 | 83.5 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-5469/summary.html) |
| 6138 | 茂達 | 現在可以買名單 | 375 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6138/summary.html) |
| 6213 | 聯茂 | 現在可以買名單 | 393.5 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-6213/summary.html) |
| 6488 | 環球晶 | 現在可以買名單 | 1,230 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6488/summary.html) |
| 6719 | 力智 | 現在可以買名單 | 277 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6719/summary.html) |
| 7402 | 邑錡 | 現在可以買名單 | 135.5 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-7402/summary.html) |
| 8131 | 福懋科 | 現在可以買名單 | 75 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-8131/summary.html) |
| 8261 | 富鼎 | 現在可以買名單 | 348 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-8261/summary.html) |
| AVGO | Broadcom | 現在可以買名單 | 388.69 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-AVGO/summary.html) |
| BABA | 阿里巴巴 | 現在可以買名單 | 108.98 USD | 2026-07-08T20:04:22Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-BABA/summary.html) |
| CRWD | CrowdStrike | 現在可以買名單 | 191.12 USD | 2026-07-08T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-CRWD/summary.html) |
| JD | 京東 | 現在可以買名單 | 27.63 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-JD/summary.html) |
| META | Meta | 現在可以買名單 | 603.12 USD | 2026-07-08T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-META/summary.html) |
| NET | Cloudflare | 現在可以買名單 | 273.4 USD | 2026-07-08T20:03:31Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-NET/summary.html) |
| NVDA | Nvidia | 現在可以買名單 | 204.12 USD | 2026-07-08T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-NVDA/summary.html) |
| PLTR | Palantir | 現在可以買名單 | 132.22 USD | 2026-07-08T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-PLTR/summary.html) |
| TCEHY | 騰訊 | 現在可以買名單 | 60.95 USD | 2026-07-08T19:59:55Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-TCEHY/summary.html) |
| 2313 | 華通 | 現在不能買，但值得等買點名單 | 224 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2313/summary.html) |
| 2327 | 國巨 | 現在不能買，但值得等買點名單 | 891 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2327/summary.html) |
| 2344 | 華邦電 | 現在不能買，但值得等買點名單 | 168.5 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2344/summary.html) |
| 2408 | 南亞科 | 現在不能買，但值得等買點名單 | 396 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2408/summary.html) |
| 2455 | 全新 | 現在不能買，但值得等買點名單 | 335 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2455/summary.html) |
| 2492 | 華新科 | 現在不能買，但值得等買點名單 | 474 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2492/summary.html) |
| 3037 | 欣興 | 現在不能買，但值得等買點名單 | 863 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3037/summary.html) |
| 3081 | 聯亞 | 現在不能買，但值得等買點名單 | 2,095 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3081/summary.html) |
| 3105 | 穩懋 | 現在不能買，但值得等買點名單 | 413.5 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3105/summary.html) |
| 3163 | 波若威 | 現在不能買，但值得等買點名單 | 777 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3163/summary.html) |
| 3189 | 景碩 | 現在不能買，但值得等買點名單 | 755 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3189/summary.html) |
| 3363 | 上銓 | 現在不能買，但值得等買點名單 | 640 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3363/summary.html) |
| 6282 | 康舒 | 現在不能買，但值得等買點名單 | 59 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6282/summary.html) |
| 8086 | 宏捷科 | 現在不能買，但值得等買點名單 | 139 TWD | 2026-07-08 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-8086/summary.html) |
| AAPL | Apple | 現在不能買，但值得等買點名單 | 313.39 USD | 2026-07-08T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AAPL/summary.html) |
| AMAT | 應用材料 | 現在不能買，但值得等買點名單 | 570.5 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AMAT/summary.html) |
| AMZN | Amazon | 現在不能買，但值得等買點名單 | 243.62 USD | 2026-07-08T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AMZN/summary.html) |
| ASML | ASML | 現在不能買，但值得等買點名單 | 1,768.65 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ASML/summary.html) |
| GLW | 康寧 | 現在不能買，但值得等買點名單 | 184.03 USD | 2026-07-08T20:03:18Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-GLW/summary.html) |
| GOOGL | Alphabet | 現在不能買，但值得等買點名單 | 361.92 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-GOOGL/summary.html) |
| LRCX | 科林研發 | 現在不能買，但值得等買點名單 | 333.15 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-LRCX/summary.html) |
| MCD | 麥當勞 | 現在不能買，但值得等買點名單 | 278.25 USD | 2026-07-08T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MCD/summary.html) |
| MRVL | Marvell | 現在不能買，但值得等買點名單 | 231.71 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MRVL/summary.html) |
| MSFT | 微軟 | 現在不能買，但值得等買點名單 | 383.34 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MSFT/summary.html) |
| MU | 美光 | 現在不能買，但值得等買點名單 | 948.8 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MU/summary.html) |
| NKE | Nike | 現在不能買，但值得等買點名單 | 42.89 USD | 2026-07-08T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-NKE/summary.html) |
| ORCL | Oracle | 現在不能買，但值得等買點名單 | 140.49 USD | 2026-07-08T20:05:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ORCL/summary.html) |
| RKLB | Rocket Lab | 現在不能買，但值得等買點名單 | 83.35 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-RKLB/summary.html) |
| SBUX | 星巴克 | 現在不能買，但值得等買點名單 | 103.87 USD | 2026-07-08T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SBUX/summary.html) |
