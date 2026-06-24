# StockLoop PEI 完整批次報告 2026-06-24 - Inventory holdings

- 產出時間：2026-06-24 11:16:01
- 標的池檔數：34
- 已具備目前價格與研究狀態的列數：34
- 來源報告：myStock/tw_stock_inventory.csv, myStock/us_stock_inventory_cathay.csv, myStock/us_stock_inventory_yuanta.csv, /tmp/stockloop_inventory_merged.json, reports/stock-inventory/2026-06-24-1107_inventory_health_check.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 inventory-scope PEI：庫存只用來定義研究宇宙，不使用券商、股數、成本或個人部位做模型投組 sizing。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 34 檔標的；來源為 myStock/tw_stock_inventory.csv, myStock/us_stock_inventory_cathay.csv, myStock/us_stock_inventory_yuanta.csv, /tmp/stockloop_inventory_merged.json, reports/stock-inventory/2026-06-24-1107_inventory_health_check.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：34 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：2 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：2 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：30 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：34 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 16 |
| 市場 | us | 18 |
| 分類 | 庫存持倉 | 34 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 2 |
| 研究標籤 | Wait for trigger（等待觸發） | 2 |
| 研究標籤 | Watch only（僅觀察） | 30 |
| 研究狀態 | partial（證據仍不足） | 34 |
| 估值狀態 | not_run（本流程未執行估值模型） | 34 |

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
- 需以公司公告、交易所/SEC 文件與正式 PEI specialist workflow 補強後，才可升級為 decision-ready

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1215 | 卜蜂 | 庫存持倉 | Watch only（僅觀察） | 115 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/tw-1215/risk_plan.html) | [啟動報告](companies/tw-1215/initiation.html) |
| 1216 | 統一 | 庫存持倉 | Watch only（僅觀察） | 75.1 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/tw-1216/risk_plan.html) | [啟動報告](companies/tw-1216/initiation.html) |
| 1477 | 聚陽 | 庫存持倉 | Watch only（僅觀察） | 217.5 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/tw-1477/risk_plan.html) | [啟動報告](companies/tw-1477/initiation.html) |
| 1560 | 中砂 | 庫存持倉 | Watch only（僅觀察） | 740 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/tw-1560/risk_plan.html) | [啟動報告](companies/tw-1560/initiation.html) |
| 2330 | 台積電 | 庫存持倉 | Watch only（僅觀察） | 2,415 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2337 | 旺宏 | 庫存持倉 | Watch only（僅觀察） | 168 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/tw-2337/risk_plan.html) | [啟動報告](companies/tw-2337/initiation.html) |
| 2408 | 南亞科 | 庫存持倉 | Watch only（僅觀察） | 449.5 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/tw-2408/risk_plan.html) | [啟動報告](companies/tw-2408/initiation.html) |
| 2454 | 聯發科 | 庫存持倉 | Watch only（僅觀察） | 4,305 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/tw-2454/risk_plan.html) | [啟動報告](companies/tw-2454/initiation.html) |
| 2618 | 長榮航 | 庫存持倉 | Watch only（僅觀察） | 44.15 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/tw-2618/risk_plan.html) | [啟動報告](companies/tw-2618/initiation.html) |
| 3019 | 亞光 | 庫存持倉 | Watch only（僅觀察） | 152 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/tw-3019/risk_plan.html) | [啟動報告](companies/tw-3019/initiation.html) |
| 3231 | 緯創 | 庫存持倉 | Watch only（僅觀察） | 157 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/tw-3231/risk_plan.html) | [啟動報告](companies/tw-3231/initiation.html) |
| 3443 | 創意 | 庫存持倉 | Wait for trigger（等待觸發） | 4,715 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/tw-3443/risk_plan.html) | [啟動報告](companies/tw-3443/initiation.html) |
| 6285 | 啟碁 | 庫存持倉 | Watch only（僅觀察） | 254 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/tw-6285/risk_plan.html) | [啟動報告](companies/tw-6285/initiation.html) |
| 6669 | 緯穎 | 庫存持倉 | Watch only（僅觀察） | 4,565 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/tw-6669/risk_plan.html) | [啟動報告](companies/tw-6669/initiation.html) |
| 8016 | 矽創 | 庫存持倉 | Watch only（僅觀察） | 316.5 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/tw-8016/risk_plan.html) | [啟動報告](companies/tw-8016/initiation.html) |
| 8926 | 台汽電 | 庫存持倉 | Watch only（僅觀察） | 81.9 TWD | 2026-06-24T00:00:00+08:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/tw-8926/risk_plan.html) | [啟動報告](companies/tw-8926/initiation.html) |
| AAPL | Apple Inc | 庫存持倉 | Watch only（僅觀察） | 294.3 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| BRK.B | Berkshire Hathaway I | 庫存持倉 | Watch only（僅觀察） | 492.81 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/us-BRK.B/risk_plan.html) | [啟動報告](companies/us-BRK.B/initiation.html) |
| CRCL | Circle Internet Group | 庫存持倉 | Not decision-ready（尚未達決策等級） | 75.68 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; not decision-ready for model portfolio | [風險](companies/us-CRCL/risk_plan.html) | [啟動報告](companies/us-CRCL/initiation.html) |
| DASH | DoorDash Inc | 庫存持倉 | Watch only（僅觀察） | 171.52 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/us-DASH/risk_plan.html) | [啟動報告](companies/us-DASH/initiation.html) |
| GLW | 康寧公司 | 庫存持倉 | Watch only（僅觀察） | 194.07 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/us-GLW/risk_plan.html) | [啟動報告](companies/us-GLW/initiation.html) |
| GOOGL | Alphabet 公司 | 庫存持倉 | Watch only（僅觀察） | 346.13 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/us-GOOGL/risk_plan.html) | [啟動報告](companies/us-GOOGL/initiation.html) |
| MSFT | Microsoft Corp | 庫存持倉 | Watch only（僅觀察） | 373.94 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/us-MSFT/risk_plan.html) | [啟動報告](companies/us-MSFT/initiation.html) |
| NFLX | Netflix Inc | 庫存持倉 | Watch only（僅觀察） | 72.82 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/us-NFLX/risk_plan.html) | [啟動報告](companies/us-NFLX/initiation.html) |
| OKLO | Oklo Inc | 庫存持倉 | Wait for trigger（等待觸發） | 57.19 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-OKLO/risk_plan.html) | [啟動報告](companies/us-OKLO/initiation.html) |
| PLTR | Palantir | 庫存持倉 | Watch only（僅觀察） | 116.7 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/us-PLTR/risk_plan.html) | [啟動報告](companies/us-PLTR/initiation.html) |
| RKLB | Rocket Lab Corp | 庫存持倉 | Watch only（僅觀察） | 95.12 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/us-RKLB/risk_plan.html) | [啟動報告](companies/us-RKLB/initiation.html) |
| SATS | EchoStar Corporation | 庫存持倉 | Watch only（僅觀察） | 103.92 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/us-SATS/risk_plan.html) | [啟動報告](companies/us-SATS/initiation.html) |
| SOFI | SoFi Technologies Inc | 庫存持倉 | Watch only（僅觀察） | 17.29 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/us-SOFI/risk_plan.html) | [啟動報告](companies/us-SOFI/initiation.html) |
| SPCX | 太空探索科技公司 | 庫存持倉 | Not decision-ready（尚未達決策等級） | 156.11 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; not decision-ready for model portfolio | [風險](companies/us-SPCX/risk_plan.html) | [啟動報告](companies/us-SPCX/initiation.html) |
| TSLA | 特斯拉 / Tesla | 庫存持倉 | Watch only（僅觀察） | 381.61 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/us-TSLA/risk_plan.html) | [啟動報告](companies/us-TSLA/initiation.html) |
| TSM | Taiwan Semiconductor | 庫存持倉 | Watch only（僅觀察） | 436.39 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/us-TSM/risk_plan.html) | [啟動報告](companies/us-TSM/initiation.html) |
| UBER | Uber Technologies | 庫存持倉 | Watch only（僅觀察） | 69.67 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; watch only until thesis and risk evidence improve | [風險](companies/us-UBER/risk_plan.html) | [啟動報告](companies/us-UBER/initiation.html) |
| VST | Vistra Energy Corp | 庫存持倉 | Watch only（僅觀察） | 162.39 USD | 2026-06-23T00:00:00-04:00 | partial（證據仍不足） | 0%; inventory-holding context only, no model position opened | [風險](companies/us-VST/risk_plan.html) | [啟動報告](companies/us-VST/initiation.html) |

## 研究檔案索引

| 代號 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- |
| 1215 | [公司摘要](companies/tw-1215/tearsheet.html) | [啟動報告](companies/tw-1215/initiation.html) | [風險](companies/tw-1215/risk_plan.html) |
| 1216 | [公司摘要](companies/tw-1216/tearsheet.html) | [啟動報告](companies/tw-1216/initiation.html) | [風險](companies/tw-1216/risk_plan.html) |
| 1477 | [公司摘要](companies/tw-1477/tearsheet.html) | [啟動報告](companies/tw-1477/initiation.html) | [風險](companies/tw-1477/risk_plan.html) |
| 1560 | [公司摘要](companies/tw-1560/tearsheet.html) | [啟動報告](companies/tw-1560/initiation.html) | [風險](companies/tw-1560/risk_plan.html) |
| 2330 | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2337 | [公司摘要](companies/tw-2337/tearsheet.html) | [啟動報告](companies/tw-2337/initiation.html) | [風險](companies/tw-2337/risk_plan.html) |
| 2408 | [公司摘要](companies/tw-2408/tearsheet.html) | [啟動報告](companies/tw-2408/initiation.html) | [風險](companies/tw-2408/risk_plan.html) |
| 2454 | [公司摘要](companies/tw-2454/tearsheet.html) | [啟動報告](companies/tw-2454/initiation.html) | [風險](companies/tw-2454/risk_plan.html) |
| 2618 | [公司摘要](companies/tw-2618/tearsheet.html) | [啟動報告](companies/tw-2618/initiation.html) | [風險](companies/tw-2618/risk_plan.html) |
| 3019 | [公司摘要](companies/tw-3019/tearsheet.html) | [啟動報告](companies/tw-3019/initiation.html) | [風險](companies/tw-3019/risk_plan.html) |
| 3231 | [公司摘要](companies/tw-3231/tearsheet.html) | [啟動報告](companies/tw-3231/initiation.html) | [風險](companies/tw-3231/risk_plan.html) |
| 3443 | [公司摘要](companies/tw-3443/tearsheet.html) | [啟動報告](companies/tw-3443/initiation.html) | [風險](companies/tw-3443/risk_plan.html) |
| 6285 | [公司摘要](companies/tw-6285/tearsheet.html) | [啟動報告](companies/tw-6285/initiation.html) | [風險](companies/tw-6285/risk_plan.html) |
| 6669 | [公司摘要](companies/tw-6669/tearsheet.html) | [啟動報告](companies/tw-6669/initiation.html) | [風險](companies/tw-6669/risk_plan.html) |
| 8016 | [公司摘要](companies/tw-8016/tearsheet.html) | [啟動報告](companies/tw-8016/initiation.html) | [風險](companies/tw-8016/risk_plan.html) |
| 8926 | [公司摘要](companies/tw-8926/tearsheet.html) | [啟動報告](companies/tw-8926/initiation.html) | [風險](companies/tw-8926/risk_plan.html) |
| AAPL | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| BRK.B | [公司摘要](companies/us-BRK.B/tearsheet.html) | [啟動報告](companies/us-BRK.B/initiation.html) | [風險](companies/us-BRK.B/risk_plan.html) |
| CRCL | [公司摘要](companies/us-CRCL/tearsheet.html) | [啟動報告](companies/us-CRCL/initiation.html) | [風險](companies/us-CRCL/risk_plan.html) |
| DASH | [公司摘要](companies/us-DASH/tearsheet.html) | [啟動報告](companies/us-DASH/initiation.html) | [風險](companies/us-DASH/risk_plan.html) |
| GLW | [公司摘要](companies/us-GLW/tearsheet.html) | [啟動報告](companies/us-GLW/initiation.html) | [風險](companies/us-GLW/risk_plan.html) |
| GOOGL | [公司摘要](companies/us-GOOGL/tearsheet.html) | [啟動報告](companies/us-GOOGL/initiation.html) | [風險](companies/us-GOOGL/risk_plan.html) |
| MSFT | [公司摘要](companies/us-MSFT/tearsheet.html) | [啟動報告](companies/us-MSFT/initiation.html) | [風險](companies/us-MSFT/risk_plan.html) |
| NFLX | [公司摘要](companies/us-NFLX/tearsheet.html) | [啟動報告](companies/us-NFLX/initiation.html) | [風險](companies/us-NFLX/risk_plan.html) |
| OKLO | [公司摘要](companies/us-OKLO/tearsheet.html) | [啟動報告](companies/us-OKLO/initiation.html) | [風險](companies/us-OKLO/risk_plan.html) |
| PLTR | [公司摘要](companies/us-PLTR/tearsheet.html) | [啟動報告](companies/us-PLTR/initiation.html) | [風險](companies/us-PLTR/risk_plan.html) |
| RKLB | [公司摘要](companies/us-RKLB/tearsheet.html) | [啟動報告](companies/us-RKLB/initiation.html) | [風險](companies/us-RKLB/risk_plan.html) |
| SATS | [公司摘要](companies/us-SATS/tearsheet.html) | [啟動報告](companies/us-SATS/initiation.html) | [風險](companies/us-SATS/risk_plan.html) |
| SOFI | [公司摘要](companies/us-SOFI/tearsheet.html) | [啟動報告](companies/us-SOFI/initiation.html) | [風險](companies/us-SOFI/risk_plan.html) |
| SPCX | [公司摘要](companies/us-SPCX/tearsheet.html) | [啟動報告](companies/us-SPCX/initiation.html) | [風險](companies/us-SPCX/risk_plan.html) |
| TSLA | [公司摘要](companies/us-TSLA/tearsheet.html) | [啟動報告](companies/us-TSLA/initiation.html) | [風險](companies/us-TSLA/risk_plan.html) |
| TSM | [公司摘要](companies/us-TSM/tearsheet.html) | [啟動報告](companies/us-TSM/initiation.html) | [風險](companies/us-TSM/risk_plan.html) |
| UBER | [公司摘要](companies/us-UBER/tearsheet.html) | [啟動報告](companies/us-UBER/initiation.html) | [風險](companies/us-UBER/risk_plan.html) |
| VST | [公司摘要](companies/us-VST/tearsheet.html) | [啟動報告](companies/us-VST/initiation.html) | [風險](companies/us-VST/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
