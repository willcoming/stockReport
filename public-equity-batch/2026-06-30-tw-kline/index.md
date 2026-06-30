# StockLoop PEI 批次摘要 2026-06-30 - TW K-line

- 產出時間：2026-06-30 16:13:56
- 標的池檔數：104
- 已具備目前價格與研究狀態的列數：104
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 104 檔標的；來源為 reports/twStock/2026-06-30_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：104 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：81 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：23 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：104 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：104 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 104

## 風控狀態

- not_run（尚未完成 PM 風控/流動性/sizing gate）: 104

## 期限 underwrite

- partial（3M/12M/3Y underwrite 未完整）: 104

## Decision-ready gate

- 否: 104

## 下一步 PEI workflow

- investment_horizon_not_complete: 104
- research_status_not_complete: 104
- risk_status_not_complete: 104
- valuation_status_not_complete: 104

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1802 | 台玻 | 現在可以買名單 | 68 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-1802/summary.html) |
| 2345 | 智邦 | 現在可以買名單 | 2,340 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2345/summary.html) |
| 2376 | 技嘉 | 現在可以買名單 | 325 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2376/summary.html) |
| 2395 | 研華 | 現在可以買名單 | 472.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2395/summary.html) |
| 2441 | 超豐 | 現在可以買名單 | 129 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2441/summary.html) |
| 2454 | 聯發科 | 現在可以買名單 | 3,910 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2454/summary.html) |
| 2464 | 盟立 | 現在可以買名單 | 160 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2464/summary.html) |
| 2467 | 志聖 | 現在可以買名單 | 569 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2467/summary.html) |
| 2609 | 陽明 | 現在可以買名單 | 51.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2609/summary.html) |
| 3016 | 嘉晶 | 現在可以買名單 | 121.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3016/summary.html) |
| 3017 | 奇鋐 | 現在可以買名單 | 2,300 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3017/summary.html) |
| 3167 | 大量 | 現在可以買名單 | 774 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3167/summary.html) |
| 3443 | 創意 | 現在可以買名單 | 4,420 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3443/summary.html) |
| 3592 | 瑞鼎 | 現在可以買名單 | 268 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3592/summary.html) |
| 3715 | 定穎投控 | 現在可以買名單 | 166 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3715/summary.html) |
| 4916 | 事欣科 | 現在可以買名單 | 96.2 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-4916/summary.html) |
| 5871 | 中租-KY | 現在可以買名單 | 115 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-5871/summary.html) |
| 6239 | 力成 | 現在可以買名單 | 311 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6239/summary.html) |
| 6278 | 台表科 | 現在可以買名單 | 194 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6278/summary.html) |
| 8028 | 昇陽半導體 | 現在可以買名單 | 288.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-8028/summary.html) |
| 8039 | 台虹 | 現在可以買名單 | 137.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-8039/summary.html) |
| 8150 | 南茂 | 現在可以買名單 | 90.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-8150/summary.html) |
| 9958 | 世紀鋼 | 現在可以買名單 | 112 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-9958/summary.html) |
| 1101 | 台泥 | 現在不能買，但值得等買點名單 | 24.15 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1101/summary.html) |
| 1304 | 台聚 | 現在不能買，但值得等買點名單 | 13.2 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1304/summary.html) |
| 1514 | 亞力 | 現在不能買，但值得等買點名單 | 119 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1514/summary.html) |
| 1605 | 華新 | 現在不能買，但值得等買點名單 | 35.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1605/summary.html) |
| 1609 | 大亞 | 現在不能買，但值得等買點名單 | 36.85 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1609/summary.html) |
| 1623 | 大東電 | 現在不能買，但值得等買點名單 | 212 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1623/summary.html) |
| 1717 | 長興 | 現在不能買，但值得等買點名單 | 72.9 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1717/summary.html) |
| 1810 | 和成 | 現在不能買，但值得等買點名單 | 19.9 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1810/summary.html) |
| 2049 | 上銀 | 現在不能買，但值得等買點名單 | 318.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2049/summary.html) |
| 2201 | 裕隆 | 現在不能買，但值得等買點名單 | 27.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2201/summary.html) |
| 2208 | 台船 | 現在不能買，但值得等買點名單 | 17.55 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2208/summary.html) |
| 2231 | 為升 | 現在不能買，但值得等買點名單 | 92 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2231/summary.html) |
| 2301 | 光寶科 | 現在不能買，但值得等買點名單 | 211.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2301/summary.html) |
| 2317 | 鴻海 | 現在不能買，但值得等買點名單 | 246.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2317/summary.html) |
| 2323 | 中環 | 現在不能買，但值得等買點名單 | 11 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2323/summary.html) |
| 2324 | 仁寶 | 現在不能買，但值得等買點名單 | 34.2 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2324/summary.html) |
| 2330 | 台積電 | 現在不能買，但值得等買點名單 | 2,370 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2330/summary.html) |
| 2338 | 光罩 | 現在不能買，但值得等買點名單 | 47.75 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2338/summary.html) |
| 2356 | 英業達 | 現在不能買，但值得等買點名單 | 64.3 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2356/summary.html) |
| 2359 | 所羅門 | 現在不能買，但值得等買點名單 | 128.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2359/summary.html) |
| 2360 | 致茂 | 現在不能買，但值得等買點名單 | 2,080 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2360/summary.html) |
| 2393 | 億光 | 現在不能買，但值得等買點名單 | 66.7 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2393/summary.html) |
| 2429 | 銘旺科 | 現在不能買，但值得等買點名單 | 40.85 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2429/summary.html) |
| 2457 | 飛宏 | 現在不能買，但值得等買點名單 | 27.6 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2457/summary.html) |
| 2474 | 可成 | 現在不能買，但值得等買點名單 | 203 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2474/summary.html) |
| 2480 | 敦陽科 | 現在不能買，但值得等買點名單 | 150 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2480/summary.html) |
| 2486 | 一詮 | 現在不能買，但值得等買點名單 | 224.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2486/summary.html) |
| 2489 | 瑞軒 | 現在不能買，但值得等買點名單 | 42.35 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2489/summary.html) |
| 2495 | 普安 | 現在不能買，但值得等買點名單 | 49.8 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2495/summary.html) |
| 2498 | 宏達電 | 現在不能買，但值得等買點名單 | 43.2 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2498/summary.html) |
| 2501 | 國建 | 現在不能買，但值得等買點名單 | 24.2 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2501/summary.html) |
| 2515 | 中工 | 現在不能買，但值得等買點名單 | 12.95 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2515/summary.html) |
| 3015 | 全漢 | 現在不能買，但值得等買點名單 | 58.7 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3015/summary.html) |
| 3029 | 零壹 | 現在不能買，但值得等買點名單 | 97.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3029/summary.html) |
| 3033 | 威健 | 現在不能買，但值得等買點名單 | 48.8 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3033/summary.html) |
| 3041 | 揚智 | 現在不能買，但值得等買點名單 | 26.8 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3041/summary.html) |
| 3044 | 健鼎 | 現在不能買，但值得等買點名單 | 499.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3044/summary.html) |
| 3231 | 緯創 | 現在不能買，但值得等買點名單 | 154.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3231/summary.html) |
| 3312 | 弘憶股 | 現在不能買，但值得等買點名單 | 58 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3312/summary.html) |
| 3356 | 奇偶 | 現在不能買，但值得等買點名單 | 58.8 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3356/summary.html) |
| 3406 | 玉晶光 | 現在不能買，但值得等買點名單 | 657 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3406/summary.html) |
| 3416 | 融程電 | 現在不能買，但值得等買點名單 | 166.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3416/summary.html) |
| 3450 | 聯鈞 | 現在不能買，但值得等買點名單 | 505 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3450/summary.html) |
| 3545 | 敦泰 | 現在不能買，但值得等買點名單 | 54.7 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3545/summary.html) |
| 3653 | 健策 | 現在不能買，但值得等買點名單 | 3,320 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3653/summary.html) |
| 3661 | 世芯-KY | 現在不能買，但值得等買點名單 | 3,985 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3661/summary.html) |
| 3694 | 海華 | 現在不能買，但值得等買點名單 | 56.6 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3694/summary.html) |
| 3704 | 合勤控 | 現在不能買，但值得等買點名單 | 45.25 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3704/summary.html) |
| 3706 | 神達 | 現在不能買，但值得等買點名單 | 86.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3706/summary.html) |
| 3711 | 日月光投控 | 現在不能買，但值得等買點名單 | 627 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3711/summary.html) |
| 3714 | 富采 | 現在不能買，但值得等買點名單 | 62.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3714/summary.html) |
| 4526 | 東台 | 現在不能買，但值得等買點名單 | 38.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4526/summary.html) |
| 4576 | 大銀微系統 | 現在不能買，但值得等買點名單 | 204.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4576/summary.html) |
| 4934 | 太極 | 現在不能買，但值得等買點名單 | 16.75 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4934/summary.html) |
| 4938 | 和碩 | 現在不能買，但值得等買點名單 | 82.2 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4938/summary.html) |
| 4958 | 臻鼎-KY | 現在不能買，但值得等買點名單 | 573 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4958/summary.html) |
| 4968 | 立積 | 現在不能買，但值得等買點名單 | 110.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4968/summary.html) |
| 5284 | jpp-KY | 現在不能買，但值得等買點名單 | 376.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-5284/summary.html) |
| 6112 | 邁達特 | 現在不能買，但值得等買點名單 | 43.3 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6112/summary.html) |
| 6120 | 達運 | 現在不能買，但值得等買點名單 | 14.15 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6120/summary.html) |
| 6168 | 宏齊 | 現在不能買，但值得等買點名單 | 29.8 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6168/summary.html) |
| 6202 | 盛群 | 現在不能買，但值得等買點名單 | 63 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6202/summary.html) |
| 6214 | 精誠 | 現在不能買，但值得等買點名單 | 129 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6214/summary.html) |
| 6224 | 聚鼎 | 現在不能買，但值得等買點名單 | 70.2 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6224/summary.html) |
| 6269 | 台郡 | 現在不能買，但值得等買點名單 | 68.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6269/summary.html) |
| 6282 | 康舒 | 現在不能買，但值得等買點名單 | 54.2 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6282/summary.html) |
| 6285 | 啟碁 | 現在不能買，但值得等買點名單 | 236 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6285/summary.html) |
| 6412 | 群電 | 現在不能買，但值得等買點名單 | 92.3 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6412/summary.html) |
| 6438 | 迅得 | 現在不能買，但值得等買點名單 | 151 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6438/summary.html) |
| 6477 | 安集 | 現在不能買，但值得等買點名單 | 30.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6477/summary.html) |
| 6526 | 達發 | 現在不能買，但值得等買點名單 | 636 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6526/summary.html) |
| 6781 | AES-KY | 現在不能買，但值得等買點名單 | 1,130 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6781/summary.html) |
| 6799 | 來頡 | 現在不能買，但值得等買點名單 | 96.7 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6799/summary.html) |
| 6862 | 三集瑞-KY | 現在不能買，但值得等買點名單 | 183.5 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6862/summary.html) |
| 6962 | 奕力-KY | 現在不能買，但值得等買點名單 | 37.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6962/summary.html) |
| 8110 | 華東 | 現在不能買，但值得等買點名單 | 55.3 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-8110/summary.html) |
| 8163 | 達方 | 現在不能買，但值得等買點名單 | 39.4 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-8163/summary.html) |
| 8210 | 勤誠 | 現在不能買，但值得等買點名單 | 1,215 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-8210/summary.html) |
| 8215 | 明基材 | 現在不能買，但值得等買點名單 | 28.9 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-8215/summary.html) |
| 8422 | 可寧衛* | 現在不能買，但值得等買點名單 | 27.65 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-8422/summary.html) |
| 9939 | 宏全 | 現在不能買，但值得等買點名單 | 127 TWD | 2026-06-29 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-9939/summary.html) |
