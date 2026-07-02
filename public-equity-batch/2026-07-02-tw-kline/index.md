# StockLoop PEI 批次摘要 2026-07-02 - TW K-line

- 產出時間：2026-07-02 16:14:44
- 標的池檔數：85
- 已具備目前價格與研究狀態的列數：85
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 85 檔標的；來源為 reports/twStock/2026-07-02_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：85 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：64 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：21 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：85 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：85 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 85

## 風控狀態

- not_run（尚未完成 PM 風控/流動性/sizing gate）: 85

## 期限 underwrite

- partial（3M/12M/3Y underwrite 未完整）: 85

## Decision-ready gate

- 否: 85

## 下一步 PEI workflow

- investment_horizon_not_complete: 85
- research_status_not_complete: 85
- risk_status_not_complete: 85
- valuation_status_not_complete: 85

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1536 | 和大 | 現在可以買名單 | 47.8 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-1536/summary.html) |
| 1717 | 長興 | 現在可以買名單 | 71.9 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-1717/summary.html) |
| 2105 | 正新 | 現在可以買名單 | 30.1 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2105/summary.html) |
| 2340 | 台亞 | 現在可以買名單 | 35.15 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2340/summary.html) |
| 2374 | 佳能 | 現在可以買名單 | 73.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2374/summary.html) |
| 2436 | 偉詮電 | 現在可以買名單 | 70.9 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2436/summary.html) |
| 2486 | 一詮 | 現在可以買名單 | 231 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2486/summary.html) |
| 2912 | 統一超 | 現在可以買名單 | 223.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2912/summary.html) |
| 3016 | 嘉晶 | 現在可以買名單 | 122 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3016/summary.html) |
| 3019 | 亞光 | 現在可以買名單 | 140 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3019/summary.html) |
| 3673 | TPK-KY | 現在可以買名單 | 76.2 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3673/summary.html) |
| 3715 | 定穎投控 | 現在可以買名單 | 172 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3715/summary.html) |
| 4585 | 達明 | 現在可以買名單 | 305.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-4585/summary.html) |
| 4919 | 新唐 | 現在可以買名單 | 168.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-4919/summary.html) |
| 5285 | 界霖 | 現在可以買名單 | 92.9 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-5285/summary.html) |
| 5871 | 中租-KY | 現在可以買名單 | 114.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-5871/summary.html) |
| 6215 | 和椿 | 現在可以買名單 | 108 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6215/summary.html) |
| 6505 | 台塑化 | 現在可以買名單 | 53.6 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6505/summary.html) |
| 6937 | 天虹 | 現在可以買名單 | 271 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6937/summary.html) |
| 6944 | 兆聯實業 | 現在可以買名單 | 966 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6944/summary.html) |
| 8070 | 長華* | 現在可以買名單 | 53.4 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-8070/summary.html) |
| 1102 | 亞泥 | 現在不能買，但值得等買點名單 | 35.1 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1102/summary.html) |
| 1216 | 統一 | 現在不能買，但值得等買點名單 | 74.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1216/summary.html) |
| 1308 | 亞聚 | 現在不能買，但值得等買點名單 | 14.05 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1308/summary.html) |
| 1309 | 台達化 | 現在不能買，但值得等買點名單 | 14.45 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1309/summary.html) |
| 1342 | 八貫 | 現在不能買，但值得等買點名單 | 107.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1342/summary.html) |
| 1440 | 南紡 | 現在不能買，但值得等買點名單 | 13.2 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1440/summary.html) |
| 1503 | 士電 | 現在不能買，但值得等買點名單 | 238.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1503/summary.html) |
| 1513 | 中興電 | 現在不能買，但值得等買點名單 | 177 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1513/summary.html) |
| 1528 | 恩德 | 現在不能買，但值得等買點名單 | 23.15 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1528/summary.html) |
| 1560 | 中砂 | 現在不能買，但值得等買點名單 | 763 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1560/summary.html) |
| 1597 | 直得 | 現在不能買，但值得等買點名單 | 143 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1597/summary.html) |
| 1711 | 永光 | 現在不能買，但值得等買點名單 | 44 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1711/summary.html) |
| 1722 | 台肥 | 現在不能買，但值得等買點名單 | 47.45 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1722/summary.html) |
| 1810 | 和成 | 現在不能買，但值得等買點名單 | 20.85 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1810/summary.html) |
| 1904 | 正隆 | 現在不能買，但值得等買點名單 | 20.9 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1904/summary.html) |
| 2006 | 東和鋼鐵 | 現在不能買，但值得等買點名單 | 67.9 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2006/summary.html) |
| 2101 | 南港 | 現在不能買，但值得等買點名單 | 31.2 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2101/summary.html) |
| 2201 | 裕隆 | 現在不能買，但值得等買點名單 | 26.9 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2201/summary.html) |
| 2206 | 三陽工業 | 現在不能買，但值得等買點名單 | 60.8 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2206/summary.html) |
| 2208 | 台船 | 現在不能買，但值得等買點名單 | 18.75 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2208/summary.html) |
| 2323 | 中環 | 現在不能買，但值得等買點名單 | 11.1 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2323/summary.html) |
| 2359 | 所羅門 | 現在不能買，但值得等買點名單 | 133.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2359/summary.html) |
| 2401 | 凌陽 | 現在不能買，但值得等買點名單 | 31.2 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2401/summary.html) |
| 2404 | 漢唐 | 現在不能買，但值得等買點名單 | 1,300 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2404/summary.html) |
| 2417 | 圓剛 | 現在不能買，但值得等買點名單 | 43.7 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2417/summary.html) |
| 2421 | 建準 | 現在不能買，但值得等買點名單 | 146 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2421/summary.html) |
| 2427 | 三商電 | 現在不能買，但值得等買點名單 | 22.05 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2427/summary.html) |
| 2457 | 飛宏 | 現在不能買，但值得等買點名單 | 28.4 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2457/summary.html) |
| 2468 | 華經 | 現在不能買，但值得等買點名單 | 34.85 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2468/summary.html) |
| 2474 | 可成 | 現在不能買，但值得等買點名單 | 203 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2474/summary.html) |
| 2476 | 鉅祥 | 現在不能買，但值得等買點名單 | 128.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2476/summary.html) |
| 2495 | 普安 | 現在不能買，但值得等買點名單 | 49.8 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2495/summary.html) |
| 2542 | 興富發 | 現在不能買，但值得等買點名單 | 42.35 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2542/summary.html) |
| 2851 | 中再保 | 現在不能買，但值得等買點名單 | 36 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2851/summary.html) |
| 2884 | 玉山金 | 現在不能買，但值得等買點名單 | 32.9 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2884/summary.html) |
| 3029 | 零壹 | 現在不能買，但值得等買點名單 | 99.2 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3029/summary.html) |
| 3060 | 銘異 | 現在不能買，但值得等買點名單 | 34.8 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3060/summary.html) |
| 3135 | 凌航 | 現在不能買，但值得等買點名單 | 167 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3135/summary.html) |
| 3312 | 弘憶股 | 現在不能買，但值得等買點名單 | 57.2 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3312/summary.html) |
| 3406 | 玉晶光 | 現在不能買，但值得等買點名單 | 641 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3406/summary.html) |
| 3545 | 敦泰 | 現在不能買，但值得等買點名單 | 55.9 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3545/summary.html) |
| 3653 | 健策 | 現在不能買，但值得等買點名單 | 3,400 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3653/summary.html) |
| 3665 | 貿聯-KY | 現在不能買，但值得等買點名單 | 2,010 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3665/summary.html) |
| 4540 | 全球傳動 | 現在不能買，但值得等買點名單 | 56.7 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4540/summary.html) |
| 4566 | 時碩工業 | 現在不能買，但值得等買點名單 | 62 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4566/summary.html) |
| 4576 | 大銀微系統 | 現在不能買，但值得等買點名單 | 214 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4576/summary.html) |
| 4720 | 德淵 | 現在不能買，但值得等買點名單 | 24.15 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4720/summary.html) |
| 4739 | 康普 | 現在不能買，但值得等買點名單 | 111.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4739/summary.html) |
| 4766 | 南寶 | 現在不能買，但值得等買點名單 | 356.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4766/summary.html) |
| 4906 | 正文 | 現在不能買，但值得等買點名單 | 40.9 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4906/summary.html) |
| 4952 | 凌通 | 現在不能買，但值得等買點名單 | 55.3 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4952/summary.html) |
| 4961 | 天鈺 | 現在不能買，但值得等買點名單 | 161.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4961/summary.html) |
| 4968 | 立積 | 現在不能買，但值得等買點名單 | 114 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4968/summary.html) |
| 4976 | 佳凌 | 現在不能買，但值得等買點名單 | 36.15 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4976/summary.html) |
| 5469 | 瀚宇博 | 現在不能買，但值得等買點名單 | 86.6 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-5469/summary.html) |
| 5471 | 松翰 | 現在不能買，但值得等買點名單 | 59.8 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-5471/summary.html) |
| 5484 | 慧友 | 現在不能買，但值得等買點名單 | 44.95 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-5484/summary.html) |
| 6235 | 華孚 | 現在不能買，但值得等買點名單 | 39.25 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6235/summary.html) |
| 6285 | 啟碁 | 現在不能買，但值得等買點名單 | 249 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6285/summary.html) |
| 6414 | 樺漢 | 現在不能買，但值得等買點名單 | 370.5 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6414/summary.html) |
| 6491 | 晶碩 | 現在不能買，但值得等買點名單 | 340 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6491/summary.html) |
| 6515 | 穎崴 | 現在不能買，但值得等買點名單 | 8,890 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6515/summary.html) |
| 8215 | 明基材 | 現在不能買，但值得等買點名單 | 29.15 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-8215/summary.html) |
| 8374 | 羅昇 | 現在不能買，但值得等買點名單 | 85.6 TWD | 2026-07-01 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-8374/summary.html) |
