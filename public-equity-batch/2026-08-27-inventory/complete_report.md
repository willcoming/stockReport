# StockLoop PEI 完整批次報告 2026-08-27 - Inventory holdings

- 產出時間：2026-08-27 08:50:57
- 標的池檔數：26
- 已具備目前價格與研究狀態的列數：26
- Decision-ready 檔數：0
- 來源報告：myStock/tw_stock_inventory_cathay.csv, myStock/tw_stock_inventory_yuanta.csv, myStock/tw_stock_inventory_ctbc.csv, myStock/us_stock_inventory_cathay.csv, myStock/us_stock_inventory_yuanta.csv, /tmp/stockloop_inventory_merged.json, reports/stock-inventory/2026-08-27-0849_inventory_health_check.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 inventory-scope PEI：庫存只用來定義研究宇宙，不使用券商、股數、成本或個人部位做模型投組 sizing。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 26 檔標的；來源為 myStock/tw_stock_inventory_cathay.csv, myStock/tw_stock_inventory_yuanta.csv, myStock/tw_stock_inventory_ctbc.csv, myStock/us_stock_inventory_cathay.csv, myStock/us_stock_inventory_yuanta.csv, /tmp/stockloop_inventory_merged.json, reports/stock-inventory/2026-08-27-0849_inventory_health_check.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：26 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：1 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：3 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：22 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：26 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：26 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 11 |
| 市場 | us | 15 |
| 分類 | 庫存持倉 | 26 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 1 |
| 研究標籤 | Wait for trigger（等待觸發） | 3 |
| 研究標籤 | Watch only（僅觀察） | 22 |
| 研究狀態 | partial（證據仍不足） | 26 |
| 估值狀態 | not_run（本流程未執行估值模型） | 26 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 26 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 26 |
| 決策就緒 | 否 | 26 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 26 |
| official_validation_not_complete | 15 |
| research_status_not_complete | 26 |
| risk_status_not_complete | 26 |
| valuation_status_not_complete | 26 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- 估值 handoff 缺失：valuation multiples missing
- 個人庫存僅用於定義研究宇宙；模型投組 sizing 未使用券商、股數或成本
- 健康檢查已標示風險控管動作，模型投組維持 0%
- 官方公司/證券身分驗證未完成
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：缺少公司級官方營收、訂單、財報或法說支撐
- 本 inventory-scope PEI 批次未逐檔執行完整官方 filings、法說、consensus、估值模型與流動性模型查核
- 產業 thesis Gate=產業前景可追，但公司證據仍在建立；炒作風險=低
- 產業 thesis Gate=產業順風且公司證據較完整；炒作風險=中
- 產業 thesis Gate=產業順風且公司證據較完整；炒作風險=低
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=中
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：OHLCV 價格脈絡未命中
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 需以公司公告、交易所/SEC 文件與正式 PEI specialist workflow 補強後，才可升級為 decision-ready
- 風險 handoff 缺失：20d average trade value missing
- 風險 handoff 缺失：downside distance input missing
- 風險 handoff 缺失：local OHLCV history missing

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1215 | 卜蜂 | 庫存持倉 | Watch only（僅觀察） | 109 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; inventory-holding context only, no model position opened | [摘要](companies/tw-1215/summary.html) | [風險](companies/tw-1215/risk_plan.html) | [啟動報告](companies/tw-1215/initiation.html) |
| 1708 | 東鹼 | 庫存持倉 | Watch only（僅觀察） | 50.1 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; inventory-holding context only, no model position opened | [摘要](companies/tw-1708/summary.html) | [風險](companies/tw-1708/risk_plan.html) | [啟動報告](companies/tw-1708/initiation.html) |
| 2308 | 台達電 | 庫存持倉 | Watch only（僅觀察） | 1,750 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; inventory-holding context only, no model position opened | [摘要](companies/tw-2308/summary.html) | [風險](companies/tw-2308/risk_plan.html) | [啟動報告](companies/tw-2308/initiation.html) |
| 2327 | 國巨* | 庫存持倉 | Watch only（僅觀察） | 537 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-2327/summary.html) | [風險](companies/tw-2327/risk_plan.html) | [啟動報告](companies/tw-2327/initiation.html) |
| 2330 | 台積電 | 庫存持倉 | Watch only（僅觀察） | 2,415 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; inventory-holding context only, no model position opened | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2354 | 鴻準 | 庫存持倉 | Wait for trigger（等待觸發） | 61.5 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/tw-2354/summary.html) | [風險](companies/tw-2354/risk_plan.html) | [啟動報告](companies/tw-2354/initiation.html) |
| 2385 | 群光 | 庫存持倉 | Watch only（僅觀察） | 107 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; inventory-holding context only, no model position opened | [摘要](companies/tw-2385/summary.html) | [風險](companies/tw-2385/risk_plan.html) | [啟動報告](companies/tw-2385/initiation.html) |
| 2454 | 聯發科 | 庫存持倉 | Watch only（僅觀察） | 3,945 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-2454/summary.html) | [風險](companies/tw-2454/risk_plan.html) | [啟動報告](companies/tw-2454/initiation.html) |
| 2884 | 玉山金 | 庫存持倉 | Watch only（僅觀察） | 38.7 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; inventory-holding context only, no model position opened | [摘要](companies/tw-2884/summary.html) | [風險](companies/tw-2884/risk_plan.html) | [啟動報告](companies/tw-2884/initiation.html) |
| 6695 | 芯鼎 | 庫存持倉 | Watch only（僅觀察） | 48.45 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/tw-6695/summary.html) | [風險](companies/tw-6695/risk_plan.html) | [啟動報告](companies/tw-6695/initiation.html) |
| 6770 | 力積電 | 庫存持倉 | Watch only（僅觀察） | 70.2 TWD | 2026-08-26 | false | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; inventory-holding context only, no model position opened | [摘要](companies/tw-6770/summary.html) | [風險](companies/tw-6770/risk_plan.html) | [啟動報告](companies/tw-6770/initiation.html) |
| AAPL | Apple Inc | 庫存持倉 | Watch only（僅觀察） | 313.45 USD | 2026-08-26T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/us-AAPL/summary.html) | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| CRCL | Circle Internet Group | 庫存持倉 | Watch only（僅觀察） | 89.91 USD | 2026-08-26T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/us-CRCL/summary.html) | [風險](companies/us-CRCL/risk_plan.html) | [啟動報告](companies/us-CRCL/initiation.html) |
| GOOGL | Alphabet 公司 | 庫存持倉 | Watch only（僅觀察） | 342 USD | 2026-08-26T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/us-GOOGL/summary.html) | [風險](companies/us-GOOGL/risk_plan.html) | [啟動報告](companies/us-GOOGL/initiation.html) |
| IBM | 國際商業機器公司 | 庫存持倉 | Watch only（僅觀察） | 229.87 USD | 2026-08-26T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; inventory-holding context only, no model position opened | [摘要](companies/us-IBM/summary.html) | [風險](companies/us-IBM/risk_plan.html) | [啟動報告](companies/us-IBM/initiation.html) |
| LVS | Las Vegas Sands Corp | 庫存持倉 | Watch only（僅觀察） | 46.23 USD | 2026-08-26T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; inventory-holding context only, no model position opened | [摘要](companies/us-LVS/summary.html) | [風險](companies/us-LVS/risk_plan.html) | [啟動報告](companies/us-LVS/initiation.html) |
| MRVL | Marvell Technology Inc | 庫存持倉 | Wait for trigger（等待觸發） | 245.11 USD | 2026-08-26T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-MRVL/summary.html) | [風險](companies/us-MRVL/risk_plan.html) | [啟動報告](companies/us-MRVL/initiation.html) |
| MU | Micron Technology | 庫存持倉 | Watch only（僅觀察） | 938.4 USD | 2026-08-26T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/us-MU/summary.html) | [風險](companies/us-MU/risk_plan.html) | [啟動報告](companies/us-MU/initiation.html) |
| NFLX | Netflix Inc | 庫存持倉 | Watch only（僅觀察） | 81.46 USD | 2026-08-26T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; inventory-holding context only, no model position opened | [摘要](companies/us-NFLX/summary.html) | [風險](companies/us-NFLX/risk_plan.html) | [啟動報告](companies/us-NFLX/initiation.html) |
| SOFI | SoFi Technologies Inc | 庫存持倉 | Watch only（僅觀察） | 18.84 USD | 2026-08-26T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/us-SOFI/summary.html) | [風險](companies/us-SOFI/risk_plan.html) | [啟動報告](companies/us-SOFI/initiation.html) |
| SPCX | 太空探索科技公司 | 庫存持倉 | Not decision-ready（尚未達決策等級） | 139.63 USD | 2026-08-26T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready for model portfolio | [摘要](companies/us-SPCX/summary.html) | [風險](companies/us-SPCX/risk_plan.html) | [啟動報告](companies/us-SPCX/initiation.html) |
| TSLA | 特斯拉 / Tesla | 庫存持倉 | Watch only（僅觀察） | 345.82 USD | 2026-08-26T20:00:01Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/us-TSLA/summary.html) | [風險](companies/us-TSLA/risk_plan.html) | [啟動報告](companies/us-TSLA/initiation.html) |
| TSM | Taiwan Semiconductor | 庫存持倉 | Watch only（僅觀察） | 417.69 USD | 2026-08-26T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/us-TSM/summary.html) | [風險](companies/us-TSM/risk_plan.html) | [啟動報告](companies/us-TSM/initiation.html) |
| TXN | 德州儀器 | 庫存持倉 | Wait for trigger（等待觸發） | 261.77 USD | 2026-08-26T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TXN/summary.html) | [風險](companies/us-TXN/risk_plan.html) | [啟動報告](companies/us-TXN/initiation.html) |
| UMC | United Microelectronics | 庫存持倉 | Watch only（僅觀察） | 19.03 USD | 2026-08-26T20:00:02Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/us-UMC/summary.html) | [風險](companies/us-UMC/risk_plan.html) | [啟動報告](companies/us-UMC/initiation.html) |
| WDC | 威騰電子 | 庫存持倉 | Watch only（僅觀察） | 468.88 USD | 2026-08-26T20:00:00Z | false | official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; watch only until thesis and risk evidence improve | [摘要](companies/us-WDC/summary.html) | [風險](companies/us-WDC/risk_plan.html) | [啟動報告](companies/us-WDC/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 1215 | [摘要](companies/tw-1215/summary.html) | [公司摘要](companies/tw-1215/tearsheet.html) | [啟動報告](companies/tw-1215/initiation.html) | [風險](companies/tw-1215/risk_plan.html) |
| 1708 | [摘要](companies/tw-1708/summary.html) | [公司摘要](companies/tw-1708/tearsheet.html) | [啟動報告](companies/tw-1708/initiation.html) | [風險](companies/tw-1708/risk_plan.html) |
| 2308 | [摘要](companies/tw-2308/summary.html) | [公司摘要](companies/tw-2308/tearsheet.html) | [啟動報告](companies/tw-2308/initiation.html) | [風險](companies/tw-2308/risk_plan.html) |
| 2327 | [摘要](companies/tw-2327/summary.html) | [公司摘要](companies/tw-2327/tearsheet.html) | [啟動報告](companies/tw-2327/initiation.html) | [風險](companies/tw-2327/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2354 | [摘要](companies/tw-2354/summary.html) | [公司摘要](companies/tw-2354/tearsheet.html) | [啟動報告](companies/tw-2354/initiation.html) | [風險](companies/tw-2354/risk_plan.html) |
| 2385 | [摘要](companies/tw-2385/summary.html) | [公司摘要](companies/tw-2385/tearsheet.html) | [啟動報告](companies/tw-2385/initiation.html) | [風險](companies/tw-2385/risk_plan.html) |
| 2454 | [摘要](companies/tw-2454/summary.html) | [公司摘要](companies/tw-2454/tearsheet.html) | [啟動報告](companies/tw-2454/initiation.html) | [風險](companies/tw-2454/risk_plan.html) |
| 2884 | [摘要](companies/tw-2884/summary.html) | [公司摘要](companies/tw-2884/tearsheet.html) | [啟動報告](companies/tw-2884/initiation.html) | [風險](companies/tw-2884/risk_plan.html) |
| 6695 | [摘要](companies/tw-6695/summary.html) | [公司摘要](companies/tw-6695/tearsheet.html) | [啟動報告](companies/tw-6695/initiation.html) | [風險](companies/tw-6695/risk_plan.html) |
| 6770 | [摘要](companies/tw-6770/summary.html) | [公司摘要](companies/tw-6770/tearsheet.html) | [啟動報告](companies/tw-6770/initiation.html) | [風險](companies/tw-6770/risk_plan.html) |
| AAPL | [摘要](companies/us-AAPL/summary.html) | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| CRCL | [摘要](companies/us-CRCL/summary.html) | [公司摘要](companies/us-CRCL/tearsheet.html) | [啟動報告](companies/us-CRCL/initiation.html) | [風險](companies/us-CRCL/risk_plan.html) |
| GOOGL | [摘要](companies/us-GOOGL/summary.html) | [公司摘要](companies/us-GOOGL/tearsheet.html) | [啟動報告](companies/us-GOOGL/initiation.html) | [風險](companies/us-GOOGL/risk_plan.html) |
| IBM | [摘要](companies/us-IBM/summary.html) | [公司摘要](companies/us-IBM/tearsheet.html) | [啟動報告](companies/us-IBM/initiation.html) | [風險](companies/us-IBM/risk_plan.html) |
| LVS | [摘要](companies/us-LVS/summary.html) | [公司摘要](companies/us-LVS/tearsheet.html) | [啟動報告](companies/us-LVS/initiation.html) | [風險](companies/us-LVS/risk_plan.html) |
| MRVL | [摘要](companies/us-MRVL/summary.html) | [公司摘要](companies/us-MRVL/tearsheet.html) | [啟動報告](companies/us-MRVL/initiation.html) | [風險](companies/us-MRVL/risk_plan.html) |
| MU | [摘要](companies/us-MU/summary.html) | [公司摘要](companies/us-MU/tearsheet.html) | [啟動報告](companies/us-MU/initiation.html) | [風險](companies/us-MU/risk_plan.html) |
| NFLX | [摘要](companies/us-NFLX/summary.html) | [公司摘要](companies/us-NFLX/tearsheet.html) | [啟動報告](companies/us-NFLX/initiation.html) | [風險](companies/us-NFLX/risk_plan.html) |
| SOFI | [摘要](companies/us-SOFI/summary.html) | [公司摘要](companies/us-SOFI/tearsheet.html) | [啟動報告](companies/us-SOFI/initiation.html) | [風險](companies/us-SOFI/risk_plan.html) |
| SPCX | [摘要](companies/us-SPCX/summary.html) | [公司摘要](companies/us-SPCX/tearsheet.html) | [啟動報告](companies/us-SPCX/initiation.html) | [風險](companies/us-SPCX/risk_plan.html) |
| TSLA | [摘要](companies/us-TSLA/summary.html) | [公司摘要](companies/us-TSLA/tearsheet.html) | [啟動報告](companies/us-TSLA/initiation.html) | [風險](companies/us-TSLA/risk_plan.html) |
| TSM | [摘要](companies/us-TSM/summary.html) | [公司摘要](companies/us-TSM/tearsheet.html) | [啟動報告](companies/us-TSM/initiation.html) | [風險](companies/us-TSM/risk_plan.html) |
| TXN | [摘要](companies/us-TXN/summary.html) | [公司摘要](companies/us-TXN/tearsheet.html) | [啟動報告](companies/us-TXN/initiation.html) | [風險](companies/us-TXN/risk_plan.html) |
| UMC | [摘要](companies/us-UMC/summary.html) | [公司摘要](companies/us-UMC/tearsheet.html) | [啟動報告](companies/us-UMC/initiation.html) | [風險](companies/us-UMC/risk_plan.html) |
| WDC | [摘要](companies/us-WDC/summary.html) | [公司摘要](companies/us-WDC/tearsheet.html) | [啟動報告](companies/us-WDC/initiation.html) | [風險](companies/us-WDC/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
