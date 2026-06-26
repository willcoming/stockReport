# StockLoop PEI 批次摘要 2026-06-26 - Inventory holdings

- 產出時間：2026-06-26 13:00:48
- 標的池檔數：18
- 已具備目前價格與研究狀態的列數：18
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 inventory-scope PEI：庫存只用來定義研究宇宙，不使用券商、股數、成本或個人部位做模型投組 sizing。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 18 檔標的；來源為 myStock/tw_stock_inventory.csv, myStock/us_stock_inventory_cathay.csv, myStock/us_stock_inventory_yuanta.csv, /tmp/stockloop_inventory_merged_tw.json, reports/stock-inventory/2026-06-26-1259_inventory_health_check.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：18 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Watch only（僅觀察）：18 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：18 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 18

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1215 | 卜蜂 | 庫存持倉 | 114 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-1215/summary.html) |
| 1216 | 統一 | 庫存持倉 | 75 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-1216/summary.html) |
| 1477 | 聚陽 | 庫存持倉 | 219.5 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-1477/summary.html) |
| 1560 | 中砂 | 庫存持倉 | 709 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-1560/summary.html) |
| 2317 | 鴻海 | 庫存持倉 | 250 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2317/summary.html) |
| 2324 | 仁寶 | 庫存持倉 | 35.05 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2324/summary.html) |
| 2330 | 台積電 | 庫存持倉 | 2,335 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2330/summary.html) |
| 2337 | 旺宏 | 庫存持倉 | 167 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2337/summary.html) |
| 2344 | 華邦電 | 庫存持倉 | 207.5 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2344/summary.html) |
| 2408 | 南亞科 | 庫存持倉 | 463 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2408/summary.html) |
| 2454 | 聯發科 | 庫存持倉 | 3,890 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2454/summary.html) |
| 2618 | 長榮航 | 庫存持倉 | 44.3 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2618/summary.html) |
| 3019 | 亞光 | 庫存持倉 | 142.5 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-3019/summary.html) |
| 3231 | 緯創 | 庫存持倉 | 153.5 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-3231/summary.html) |
| 3443 | 創意 | 庫存持倉 | 4,475 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-3443/summary.html) |
| 6285 | 啟碁 | 庫存持倉 | 239.5 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-6285/summary.html) |
| 8016 | 矽創 | 庫存持倉 | 319 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-8016/summary.html) |
| 8926 | 台汽電 | 庫存持倉 | 76.2 TWD | 2026-06-26 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-8926/summary.html) |
