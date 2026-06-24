# StockLoop PEI 批次摘要 2026-06-24

- 產出時間：2026-06-24 12:45:07
- 標的池檔數：43
- 已具備目前價格與研究狀態的列數：43
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 43 檔標的；來源為 reports/news/2026-06-24_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：43 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Wait for trigger（等待觸發）：26 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：17 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：43 檔。

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

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1303 | 南亞 | 現在可以買名單 | 154.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-1303/summary.html) |
| 2002 | 中鋼 | 現在可以買名單 | 19.2 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2002/summary.html) |
| 2108 | 南帝 | 現在可以買名單 | 28.3 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2108/summary.html) |
| 2330 | 台積電 | 現在可以買名單 | 2,490 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2330/summary.html) |
| 2436 | 偉詮電 | 現在可以買名單 | 77.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2436/summary.html) |
| 2454 | 聯發科 | 現在可以買名單 | 4,535 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2454/summary.html) |
| 2603 | 長榮 | 現在可以買名單 | 189 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2603/summary.html) |
| 3034 | 聯詠 | 現在可以買名單 | 544 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-3034/summary.html) |
| 3105 | 穩懋 | 現在可以買名單 | 522 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-3105/summary.html) |
| 3665 | 貿聯-KY | 現在可以買名單 | 2,000 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-3665/summary.html) |
| 4991 | 環宇-KY | 現在可以買名單 | 536 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-4991/summary.html) |
| 5471 | 松翰 | 現在可以買名單 | 62.4 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-5471/summary.html) |
| 6451 | 訊芯-KY | 現在可以買名單 | 596 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-6451/summary.html) |
| 6829 | 千附精密 | 現在可以買名單 | 206 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-6829/summary.html) |
| AXTI | AXTI | 現在可以買名單 | 77.91 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-AXTI/summary.html) |
| IBM | IBM | 現在可以買名單 | 264.94 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-IBM/summary.html) |
| INFQ | INFQ | 現在可以買名單 | 15.96 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-INFQ/summary.html) |
| 00631L | 元大台灣50正2 | 現在不能買，但值得等買點名單 | 41.32 TWD | 2026-06-22T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-00631L/summary.html) |
| 2303 | 聯電 | 現在不能買，但值得等買點名單 | 170 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2303/summary.html) |
| 2344 | 華邦電 | 現在不能買，但值得等買點名單 | 211.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2344/summary.html) |
| 2408 | 南亞科 | 現在不能買，但值得等買點名單 | 454.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2408/summary.html) |
| 2409 | 友達 | 現在不能買，但值得等買點名單 | 29.05 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2409/summary.html) |
| 3016 | 嘉晶 | 現在不能買，但值得等買點名單 | 152.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3016/summary.html) |
| 3037 | 欣興 | 現在不能買，但值得等買點名單 | 974 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3037/summary.html) |
| 3189 | 景碩 | 現在不能買，但值得等買點名單 | 727 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3189/summary.html) |
| 3374 | 精材 | 現在不能買，但值得等買點名單 | 303.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3374/summary.html) |
| 3406 | 玉晶光 | 現在不能買，但值得等買點名單 | 741 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3406/summary.html) |
| 3443 | 創意 | 現在不能買，但值得等買點名單 | 4,725 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3443/summary.html) |
| 3481 | 群創 | 現在不能買，但值得等買點名單 | 66 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3481/summary.html) |
| 3707 | 漢磊 | 現在不能買，但值得等買點名單 | 100.5 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3707/summary.html) |
| 3711 | 日月光投控 | 現在不能買，但值得等買點名單 | 662 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3711/summary.html) |
| 3715 | 定穎投控 | 現在不能買，但值得等買點名單 | 180 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3715/summary.html) |
| 6116 | 彩晶 | 現在不能買，但值得等買點名單 | 19 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-6116/summary.html) |
| 6147 | 頎邦 | 現在不能買，但值得等買點名單 | 258 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-6147/summary.html) |
| 6213 | 聯茂 | 現在不能買，但值得等買點名單 | 281 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-6213/summary.html) |
| 8046 | 南電 | 現在不能買，但值得等買點名單 | 909 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-8046/summary.html) |
| 8299 | 群聯 | 現在不能買，但值得等買點名單 | 2,430 TWD | 2026-06-23T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-8299/summary.html) |
| AAPL | 蘋果 | 現在不能買，但值得等買點名單 | 294.3 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-AAPL/summary.html) |
| GOOG | Google | 現在不能買，但值得等買點名單 | 346.08 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GOOG/summary.html) |
| MRVL | 美滿電子 | 現在不能買，但值得等買點名單 | 279.04 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-MRVL/summary.html) |
| MU | 美光 | 現在不能買，但值得等買點名單 | 1,051.77 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-MU/summary.html) |
| SNDK | Sandisk | 現在不能買，但值得等買點名單 | 1,963.6 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SNDK/summary.html) |
| SPCX | SpaceX | 現在不能買，但值得等買點名單 | 156.11 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SPCX/summary.html) |
