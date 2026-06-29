# StockLoop PEI 批次摘要 2026-06-29 - TW K-line

- 產出時間：2026-06-29 22:12:37
- 標的池檔數：54
- 已具備目前價格與研究狀態的列數：54
- Decision-ready 檔數：0
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 54 檔標的；來源為 reports/twStock/2026-06-29_tw_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：54 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：11 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：36 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：7 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：54 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：54 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 54

## 風控狀態

- not_run（尚未完成 PM 風控/流動性/sizing gate）: 54

## 期限 underwrite

- partial（3M/12M/3Y underwrite 未完整）: 54

## Decision-ready gate

- 否: 54

## 下一步 PEI workflow

- investment_horizon_not_complete: 54
- research_status_not_complete: 54
- risk_status_not_complete: 54
- valuation_status_not_complete: 54

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 風控狀態 | 期限 underwrite | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1477 | 聚陽 | 現在可以買名單 | 216 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-1477/summary.html) |
| 2377 | 微星 | 現在可以買名單 | 131.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2377/summary.html) |
| 2406 | 國碩 | 現在可以買名單 | 34.55 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-2406/summary.html) |
| 3035 | 智原 | 現在可以買名單 | 206.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3035/summary.html) |
| 3583 | 辛耘 | 現在可以買名單 | 812 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-3583/summary.html) |
| 4763 | 材料*-KY | 現在可以買名單 | 43.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-4763/summary.html) |
| 5269 | 祥碩 | 現在可以買名單 | 1,365 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-5269/summary.html) |
| 6257 | 矽格 | 現在可以買名單 | 224 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6257/summary.html) |
| 6415 | 矽力*-KY | 現在可以買名單 | 572 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Watch only（僅觀察） | [摘要](companies/tw-6415/summary.html) |
| 1609 | 大亞 | 現在不能買，但值得等買點名單 | 35.3 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1609/summary.html) |
| 1722 | 台肥 | 現在不能買，但值得等買點名單 | 47.2 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1722/summary.html) |
| 1795 | 美時 | 現在不能買，但值得等買點名單 | 183 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1795/summary.html) |
| 1809 | 中釉 | 現在不能買，但值得等買點名單 | 47.85 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-1809/summary.html) |
| 2002 | 中鋼 | 現在不能買，但值得等買點名單 | 19 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2002/summary.html) |
| 2027 | 大成鋼 | 現在不能買，但值得等買點名單 | 39.9 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2027/summary.html) |
| 2103 | 台橡 | 現在不能買，但值得等買點名單 | 20.25 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2103/summary.html) |
| 2206 | 三陽工業 | 現在不能買，但值得等買點名單 | 61.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2206/summary.html) |
| 2301 | 光寶科 | 現在不能買，但值得等買點名單 | 201.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2301/summary.html) |
| 2330 | 台積電 | 現在不能買，但值得等買點名單 | 2,340 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2330/summary.html) |
| 2352 | 佳世達 | 現在不能買，但值得等買點名單 | 29.3 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-2352/summary.html) |
| 2353 | 宏碁 | 現在不能買，但值得等買點名單 | 31.9 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2353/summary.html) |
| 2382 | 廣達 | 現在不能買，但值得等買點名單 | 362 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2382/summary.html) |
| 2449 | 京元電子 | 現在不能買，但值得等買點名單 | 308 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2449/summary.html) |
| 2457 | 飛宏 | 現在不能買，但值得等買點名單 | 27 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-2457/summary.html) |
| 2903 | 遠百 | 現在不能買，但值得等買點名單 | 23.15 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-2903/summary.html) |
| 3003 | 健和興 | 現在不能買，但值得等買點名單 | 65.7 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3003/summary.html) |
| 3023 | 信邦 | 現在不能買，但值得等買點名單 | 306.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-3023/summary.html) |
| 3031 | 佰鴻 | 現在不能買，但值得等買點名單 | 29.4 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3031/summary.html) |
| 3034 | 聯詠 | 現在不能買，但值得等買點名單 | 509 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3034/summary.html) |
| 3049 | 精金 | 現在不能買，但值得等買點名單 | 13 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3049/summary.html) |
| 3305 | 昇貿 | 現在不能買，但值得等買點名單 | 129.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3305/summary.html) |
| 3413 | 京鼎 | 現在不能買，但值得等買點名單 | 299 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3413/summary.html) |
| 3528 | 安馳 | 現在不能買，但值得等買點名單 | 96.7 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3528/summary.html) |
| 3596 | 智易 | 現在不能買，但值得等買點名單 | 181.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3596/summary.html) |
| 3605 | 宏致 | 現在不能買，但值得等買點名單 | 74 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-3605/summary.html) |
| 3617 | 碩天 | 現在不能買，但值得等買點名單 | 208.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3617/summary.html) |
| 3706 | 神達 | 現在不能買，但值得等買點名單 | 83.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-3706/summary.html) |
| 3717 | 聯嘉投控 | 現在不能買，但值得等買點名單 | 23.6 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-3717/summary.html) |
| 4532 | 瑞智 | 現在不能買，但值得等買點名單 | 23.8 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-4532/summary.html) |
| 4720 | 德淵 | 現在不能買，但值得等買點名單 | 22.4 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-4720/summary.html) |
| 4722 | 國精化 | 現在不能買，但值得等買點名單 | 289.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-4722/summary.html) |
| 4952 | 凌通 | 現在不能買，但值得等買點名單 | 54.2 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-4952/summary.html) |
| 5222 | 全訊 | 現在不能買，但值得等買點名單 | 117 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-5222/summary.html) |
| 5284 | jpp-KY | 現在不能買，但值得等買點名單 | 355 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-5284/summary.html) |
| 6412 | 群電 | 現在不能買，但值得等買點名單 | 88.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6412/summary.html) |
| 6491 | 晶碩 | 現在不能買，但值得等買點名單 | 322 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6491/summary.html) |
| 6526 | 達發 | 現在不能買，但值得等買點名單 | 626 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6526/summary.html) |
| 6605 | 帝寶 | 現在不能買，但值得等買點名單 | 137 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6605/summary.html) |
| 6753 | 龍德造船 | 現在不能買，但值得等買點名單 | 121.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-6753/summary.html) |
| 6861 | 睿生光電 | 現在不能買，但值得等買點名單 | 303 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6861/summary.html) |
| 6962 | 奕力-KY | 現在不能買，但值得等買點名單 | 36.6 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-6962/summary.html) |
| 8016 | 矽創 | 現在不能買，但值得等買點名單 | 311 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-8016/summary.html) |
| 9910 | 豐泰 | 現在不能買，但值得等買點名單 | 69.5 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-9910/summary.html) |
| 9941 | 裕融 | 現在不能買，但值得等買點名單 | 78.6 TWD | 2026-06-26 | 否 | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（尚未完成 PM 風控/流動性/sizing gate） | partial（3M/12M/3Y underwrite 未完整） | Wait for trigger（等待觸發） | [摘要](companies/tw-9941/summary.html) |
