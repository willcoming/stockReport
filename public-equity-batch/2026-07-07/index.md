# StockLoop PEI 批次摘要 2026-07-07

- 產出時間：2026-07-07 07:58:32
- 標的池檔數：43
- 已具備目前價格與研究狀態的列數：43
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

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

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 43

## 風控狀態

- not_run（尚未完成 PM 風控/流動性/sizing gate）: 43

## 期限 underwrite

- partial（3M/12M/3Y underwrite 未完整）: 43

## Decision-ready gate

- 否: 43

## 下一步 PEI workflow

- investment_horizon_not_complete: 43
- official_validation_not_complete: 33
- research_status_not_complete: 43
- risk_status_not_complete: 43
- valuation_status_not_complete: 43

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1409 | 新纖 | 現在可以買名單 | 30.25 TWD | 2026-07-06 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-1409/summary.html) |
| 1444 | 力麗 | 現在可以買名單 | 9.15 TWD | 2026-07-06 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-1444/summary.html) |
| 2317 | 鴻海 | 現在可以買名單 | 242 TWD | 2026-07-06 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2317/summary.html) |
| 2330 | 台積電 | 現在可以買名單 | 2,460 TWD | 2026-07-06 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2330/summary.html) |
| 2404 | 漢唐 | 現在可以買名單 | 1,320 TWD | 2026-07-06 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2404/summary.html) |
| 2812 | 台中銀 | 現在可以買名單 | 20.55 TWD | 2026-07-06 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2812/summary.html) |
| 3413 | 京鼎 | 現在可以買名單 | 325.5 TWD | 2026-07-06 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3413/summary.html) |
| 8383 | 千附 | 現在可以買名單 | 65 TWD | 2026-07-06 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-8383/summary.html) |
| AMAT | 應用材料 | 現在可以買名單 | 592.79 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-AMAT/summary.html) |
| INTC | 英特爾 | 現在可以買名單 | 122.2 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-INTC/summary.html) |
| IREN | IREN | 現在可以買名單 | 43.91 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-IREN/summary.html) |
| ISRG | 直覺外科 | 現在可以買名單 | 432.83 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-ISRG/summary.html) |
| LRCX | 科林研發（Lam Research | 現在可以買名單 | 350.2 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-LRCX/summary.html) |
| ORCL | 甲骨文 | 現在可以買名單 | 143.76 USD | 2026-07-06T20:00:03Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-ORCL/summary.html) |
| PLTR | Palantir | 現在可以買名單 | 132.54 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-PLTR/summary.html) |
| STX | 希捷 | 現在可以買名單 | 868.26 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-STX/summary.html) |
| TSLA | 特斯拉 | 現在可以買名單 | 419.77 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-TSLA/summary.html) |
| WDC | 西部數據 | 現在可以買名單 | 577.46 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/us-WDC/summary.html) |
| 2408 | 南亞科 | 現在不能買，但值得等買點名單 | 420.5 TWD | 2026-07-06 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2408/summary.html) |
| BTC | 比特幣 | 現在不能買，但值得等買點名單 | 63,986.06 USD | 2026-07-06T23:57:28Z | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/crypto-BTC/summary.html) |
| AAOI | 應用光電 | 現在不能買，但值得等買點名單 | 123.36 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AAOI/summary.html) |
| AAPL | 蘋果 | 現在不能買，但值得等買點名單 | 312.66 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AAPL/summary.html) |
| AMD | 超微 | 現在不能買，但值得等買點名單 | 552.05 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AMD/summary.html) |
| AMZN | 亞馬遜 | 現在不能買，但值得等買點名單 | 244.16 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AMZN/summary.html) |
| ASML | 艾司摩爾 | 現在不能買，但值得等買點名單 | 1,825.07 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ASML/summary.html) |
| AVGO | 博通 | 現在不能買，但值得等買點名單 | 373.9 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AVGO/summary.html) |
| AXTI | AXT Inc | 現在不能買，但值得等買點名單 | 63.52 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-AXTI/summary.html) |
| COHR | Coherent | 現在不能買，但值得等買點名單 | 335.7 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-COHR/summary.html) |
| CRWV | CoreWeave | 現在不能買，但值得等買點名單 | 86.46 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-CRWV/summary.html) |
| GOOG | Google | 現在不能買，但值得等買點名單 | 364.9 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-GOOG/summary.html) |
| HOOD | Robinhood | 現在不能買，但值得等買點名單 | 117.55 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-HOOD/summary.html) |
| IGV | 軟體ETF | 現在不能買，但值得等買點名單 | 94.79 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-IGV/summary.html) |
| IONQ | IonQ | 現在不能買，但值得等買點名單 | 48.87 USD | 2026-07-06T20:00:02Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-IONQ/summary.html) |
| IWM | 羅素2000 | 現在不能買，但值得等買點名單 | 298.9 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-IWM/summary.html) |
| META | Meta | 現在不能買，但值得等買點名單 | 600.29 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-META/summary.html) |
| MSFT | 微軟 | 現在不能買，但值得等買點名單 | 386.74 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MSFT/summary.html) |
| MU | 美光 | 現在不能買，但值得等買點名單 | 984.75 USD | 2026-07-06T20:00:01Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-MU/summary.html) |
| NVDA | 輝達 | 現在不能買，但值得等買點名單 | 195.55 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-NVDA/summary.html) |
| ON | 安森美 | 現在不能買，但值得等買點名單 | 94.69 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-ON/summary.html) |
| QQQ | 納斯達克 | 現在不能買，但值得等買點名單 | 722.82 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-QQQ/summary.html) |
| SNDK | 閃迪 | 現在不能買，但值得等買點名單 | 1,744.43 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SNDK/summary.html) |
| SOXX | 費半 | 現在不能買，但值得等買點名單 | 581.51 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SOXX/summary.html) |
| SPY | 標普500 | 現在不能買，但值得等買點名單 | 751.28 USD | 2026-07-06T20:00:00Z | 否 | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/us-SPY/summary.html) |
