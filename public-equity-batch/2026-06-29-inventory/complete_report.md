# StockLoop PEI 完整批次報告 2026-06-29 - Inventory holdings

- 產出時間：2026-06-29 13:16:31
- 標的池檔數：18
- 已具備目前價格與研究狀態的列數：0
- 來源報告：myStock/tw_stock_inventory.csv, myStock/us_stock_inventory_cathay.csv, myStock/us_stock_inventory_yuanta.csv, /tmp/stockloop_inventory_merged_tw.json, reports/stock-inventory/2026-06-29-1302_inventory_health_check.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 inventory-scope PEI：庫存只用來定義研究宇宙，不使用券商、股數、成本或個人部位做模型投組 sizing。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 18 檔標的；來源為 myStock/tw_stock_inventory.csv, myStock/us_stock_inventory_cathay.csv, myStock/us_stock_inventory_yuanta.csv, /tmp/stockloop_inventory_merged_tw.json, reports/stock-inventory/2026-06-29-1302_inventory_health_check.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：18 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Watch only（僅觀察）：18 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：18 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 18 |
| 分類 | 庫存持倉 | 18 |
| 研究標籤 | Watch only（僅觀察） | 18 |
| 研究狀態 | partial（證據仍不足） | 18 |
| 估值狀態 | not_run（本流程未執行估值模型） | 18 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- 個人庫存僅用於定義研究宇宙；模型投組 sizing 未使用券商、股數或成本
- 健康檢查已標示風險控管動作，模型投組維持 0%
- 本 inventory-scope PEI 批次未逐檔執行完整官方 filings、法說、consensus、估值模型與流動性模型查核
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=中
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：台股官方公司基本資料未命中
- 產業 thesis 缺失證據：月營收資料未命中或未接到此市場
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 目前價格缺失
- 需以公司公告、交易所/SEC 文件與正式 PEI specialist workflow 補強後，才可升級為 decision-ready

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1215 | 卜蜂 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-1215/summary.html) | [風險](companies/tw-1215/risk_plan.html) | [啟動報告](companies/tw-1215/initiation.html) |
| 1216 | 統一 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-1216/summary.html) | [風險](companies/tw-1216/risk_plan.html) | [啟動報告](companies/tw-1216/initiation.html) |
| 1477 | 聚陽 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-1477/summary.html) | [風險](companies/tw-1477/risk_plan.html) | [啟動報告](companies/tw-1477/initiation.html) |
| 1560 | 中砂 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-1560/summary.html) | [風險](companies/tw-1560/risk_plan.html) | [啟動報告](companies/tw-1560/initiation.html) |
| 2317 | 鴻海 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-2317/summary.html) | [風險](companies/tw-2317/risk_plan.html) | [啟動報告](companies/tw-2317/initiation.html) |
| 2324 | 仁寶 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-2324/summary.html) | [風險](companies/tw-2324/risk_plan.html) | [啟動報告](companies/tw-2324/initiation.html) |
| 2330 | 台積電 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2337 | 旺宏 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-2337/summary.html) | [風險](companies/tw-2337/risk_plan.html) | [啟動報告](companies/tw-2337/initiation.html) |
| 2344 | 華邦電 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-2344/summary.html) | [風險](companies/tw-2344/risk_plan.html) | [啟動報告](companies/tw-2344/initiation.html) |
| 2408 | 南亞科 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-2408/summary.html) | [風險](companies/tw-2408/risk_plan.html) | [啟動報告](companies/tw-2408/initiation.html) |
| 2454 | 聯發科 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-2454/summary.html) | [風險](companies/tw-2454/risk_plan.html) | [啟動報告](companies/tw-2454/initiation.html) |
| 2618 | 長榮航 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-2618/summary.html) | [風險](companies/tw-2618/risk_plan.html) | [啟動報告](companies/tw-2618/initiation.html) |
| 3019 | 亞光 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-3019/summary.html) | [風險](companies/tw-3019/risk_plan.html) | [啟動報告](companies/tw-3019/initiation.html) |
| 3231 | 緯創 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-3231/summary.html) | [風險](companies/tw-3231/risk_plan.html) | [啟動報告](companies/tw-3231/initiation.html) |
| 3443 | 創意 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-3443/summary.html) | [風險](companies/tw-3443/risk_plan.html) | [啟動報告](companies/tw-3443/initiation.html) |
| 6285 | 啟碁 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-6285/summary.html) | [風險](companies/tw-6285/risk_plan.html) | [啟動報告](companies/tw-6285/initiation.html) |
| 8016 | 矽創 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-8016/summary.html) | [風險](companies/tw-8016/risk_plan.html) | [啟動報告](companies/tw-8016/initiation.html) |
| 8926 | 台汽電 | 庫存持倉 | Watch only（僅觀察） |  |  | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-8926/summary.html) | [風險](companies/tw-8926/risk_plan.html) | [啟動報告](companies/tw-8926/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 1215 | [摘要](companies/tw-1215/summary.html) | [公司摘要](companies/tw-1215/tearsheet.html) | [啟動報告](companies/tw-1215/initiation.html) | [風險](companies/tw-1215/risk_plan.html) |
| 1216 | [摘要](companies/tw-1216/summary.html) | [公司摘要](companies/tw-1216/tearsheet.html) | [啟動報告](companies/tw-1216/initiation.html) | [風險](companies/tw-1216/risk_plan.html) |
| 1477 | [摘要](companies/tw-1477/summary.html) | [公司摘要](companies/tw-1477/tearsheet.html) | [啟動報告](companies/tw-1477/initiation.html) | [風險](companies/tw-1477/risk_plan.html) |
| 1560 | [摘要](companies/tw-1560/summary.html) | [公司摘要](companies/tw-1560/tearsheet.html) | [啟動報告](companies/tw-1560/initiation.html) | [風險](companies/tw-1560/risk_plan.html) |
| 2317 | [摘要](companies/tw-2317/summary.html) | [公司摘要](companies/tw-2317/tearsheet.html) | [啟動報告](companies/tw-2317/initiation.html) | [風險](companies/tw-2317/risk_plan.html) |
| 2324 | [摘要](companies/tw-2324/summary.html) | [公司摘要](companies/tw-2324/tearsheet.html) | [啟動報告](companies/tw-2324/initiation.html) | [風險](companies/tw-2324/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2337 | [摘要](companies/tw-2337/summary.html) | [公司摘要](companies/tw-2337/tearsheet.html) | [啟動報告](companies/tw-2337/initiation.html) | [風險](companies/tw-2337/risk_plan.html) |
| 2344 | [摘要](companies/tw-2344/summary.html) | [公司摘要](companies/tw-2344/tearsheet.html) | [啟動報告](companies/tw-2344/initiation.html) | [風險](companies/tw-2344/risk_plan.html) |
| 2408 | [摘要](companies/tw-2408/summary.html) | [公司摘要](companies/tw-2408/tearsheet.html) | [啟動報告](companies/tw-2408/initiation.html) | [風險](companies/tw-2408/risk_plan.html) |
| 2454 | [摘要](companies/tw-2454/summary.html) | [公司摘要](companies/tw-2454/tearsheet.html) | [啟動報告](companies/tw-2454/initiation.html) | [風險](companies/tw-2454/risk_plan.html) |
| 2618 | [摘要](companies/tw-2618/summary.html) | [公司摘要](companies/tw-2618/tearsheet.html) | [啟動報告](companies/tw-2618/initiation.html) | [風險](companies/tw-2618/risk_plan.html) |
| 3019 | [摘要](companies/tw-3019/summary.html) | [公司摘要](companies/tw-3019/tearsheet.html) | [啟動報告](companies/tw-3019/initiation.html) | [風險](companies/tw-3019/risk_plan.html) |
| 3231 | [摘要](companies/tw-3231/summary.html) | [公司摘要](companies/tw-3231/tearsheet.html) | [啟動報告](companies/tw-3231/initiation.html) | [風險](companies/tw-3231/risk_plan.html) |
| 3443 | [摘要](companies/tw-3443/summary.html) | [公司摘要](companies/tw-3443/tearsheet.html) | [啟動報告](companies/tw-3443/initiation.html) | [風險](companies/tw-3443/risk_plan.html) |
| 6285 | [摘要](companies/tw-6285/summary.html) | [公司摘要](companies/tw-6285/tearsheet.html) | [啟動報告](companies/tw-6285/initiation.html) | [風險](companies/tw-6285/risk_plan.html) |
| 8016 | [摘要](companies/tw-8016/summary.html) | [公司摘要](companies/tw-8016/tearsheet.html) | [啟動報告](companies/tw-8016/initiation.html) | [風險](companies/tw-8016/risk_plan.html) |
| 8926 | [摘要](companies/tw-8926/summary.html) | [公司摘要](companies/tw-8926/tearsheet.html) | [啟動報告](companies/tw-8926/initiation.html) | [風險](companies/tw-8926/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
