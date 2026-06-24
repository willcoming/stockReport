# StockLoop PEI 批次摘要 2026-06-24 - Inventory holdings

- 產出時間：2026-06-24 11:27:49
- 標的池檔數：34
- 已具備目前價格與研究狀態的列數：34
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 inventory-scope PEI：庫存只用來定義研究宇宙，不使用券商、股數、成本或個人部位做模型投組 sizing。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 34 檔標的；來源為 myStock/tw_stock_inventory.csv, myStock/us_stock_inventory_cathay.csv, myStock/us_stock_inventory_yuanta.csv, /tmp/stockloop_inventory_merged.json, reports/stock-inventory/2026-06-24-1107_inventory_health_check.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：34 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：2 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：2 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：30 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：34 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 34

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1215 | 卜蜂 | 庫存持倉 | 115 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-1215/summary.html) |
| 1216 | 統一 | 庫存持倉 | 75.1 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-1216/summary.html) |
| 1477 | 聚陽 | 庫存持倉 | 217.5 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-1477/summary.html) |
| 1560 | 中砂 | 庫存持倉 | 740 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-1560/summary.html) |
| 2330 | 台積電 | 庫存持倉 | 2,415 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2330/summary.html) |
| 2337 | 旺宏 | 庫存持倉 | 168 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2337/summary.html) |
| 2408 | 南亞科 | 庫存持倉 | 449.5 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2408/summary.html) |
| 2454 | 聯發科 | 庫存持倉 | 4,305 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2454/summary.html) |
| 2618 | 長榮航 | 庫存持倉 | 44.15 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-2618/summary.html) |
| 3019 | 亞光 | 庫存持倉 | 152 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-3019/summary.html) |
| 3231 | 緯創 | 庫存持倉 | 157 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-3231/summary.html) |
| 3443 | 創意 | 庫存持倉 | 4,715 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3443/summary.html) |
| 6285 | 啟碁 | 庫存持倉 | 254 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-6285/summary.html) |
| 6669 | 緯穎 | 庫存持倉 | 4,565 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-6669/summary.html) |
| 8016 | 矽創 | 庫存持倉 | 316.5 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-8016/summary.html) |
| 8926 | 台汽電 | 庫存持倉 | 81.9 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/tw-8926/summary.html) |
| AAPL | Apple Inc | 庫存持倉 | 294.3 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-AAPL/summary.html) |
| BRK.B | Berkshire Hathaway I | 庫存持倉 | 492.81 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-BRK.B/summary.html) |
| CRCL | Circle Internet Group | 庫存持倉 | 75.68 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-CRCL/summary.html) |
| DASH | DoorDash Inc | 庫存持倉 | 171.52 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-DASH/summary.html) |
| GLW | 康寧公司 | 庫存持倉 | 194.07 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-GLW/summary.html) |
| GOOGL | Alphabet 公司 | 庫存持倉 | 346.13 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-GOOGL/summary.html) |
| MSFT | Microsoft Corp | 庫存持倉 | 373.94 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-MSFT/summary.html) |
| NFLX | Netflix Inc | 庫存持倉 | 72.82 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-NFLX/summary.html) |
| OKLO | Oklo Inc | 庫存持倉 | 57.19 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-OKLO/summary.html) |
| PLTR | Palantir | 庫存持倉 | 116.7 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-PLTR/summary.html) |
| RKLB | Rocket Lab Corp | 庫存持倉 | 95.12 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-RKLB/summary.html) |
| SATS | EchoStar Corporation | 庫存持倉 | 103.92 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-SATS/summary.html) |
| SOFI | SoFi Technologies Inc | 庫存持倉 | 17.29 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-SOFI/summary.html) |
| SPCX | 太空探索科技公司 | 庫存持倉 | 156.11 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-SPCX/summary.html) |
| TSLA | 特斯拉 / Tesla | 庫存持倉 | 381.61 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-TSLA/summary.html) |
| TSM | Taiwan Semiconductor | 庫存持倉 | 436.39 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-TSM/summary.html) |
| UBER | Uber Technologies | 庫存持倉 | 69.67 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-UBER/summary.html) |
| VST | Vistra Energy Corp | 庫存持倉 | 162.39 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-VST/summary.html) |
