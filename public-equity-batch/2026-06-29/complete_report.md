# StockLoop PEI 完整批次報告 2026-06-29

- 產出時間：2026-06-29 08:47:50
- 標的池檔數：16
- 已具備目前價格與研究狀態的列數：16
- 來源報告：reports/news/2026-06-29_kol_news_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 16 檔標的；來源為 reports/news/2026-06-29_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：16 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：2 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：12 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：2 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：16 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 10 |
| 市場 | us | 6 |
| 分類 | 現在可以買名單 | 4 |
| 分類 | 現在不能買，但值得等買點名單 | 12 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 2 |
| 研究標籤 | Wait for trigger（等待觸發） | 12 |
| 研究標籤 | Watch only（僅觀察） | 2 |
| 研究狀態 | partial（證據仍不足） | 16 |
| 估值狀態 | not_run（本流程未執行估值模型） | 16 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- fund_or_etf 不適用 common-equity PEI 模型，需工具型/ETF 風險路徑
- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 官方公司/證券身分驗證未完成
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=炒作或擁擠交易風險偏高；炒作風險=高
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：台股官方公司基本資料未命中
- 產業 thesis 缺失證據：月營收資料未命中或未接到此市場
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 00935 | 00935 科技型 ETF | 現在可以買名單 | Watch only（僅觀察） | 58.8 TWD | 2026-06-26 | partial（證據仍不足） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-00935/summary.html) | [風險](companies/tw-00935/risk_plan.html) | [啟動報告](companies/tw-00935/initiation.html) |
| 2368 | 金像電 | 現在可以買名單 | Watch only（僅觀察） | 1,190 TWD | 2026-06-26 | partial（證據仍不足） | 0%; watch-only until full PEI specialist workflow clears evidence gates | [摘要](companies/tw-2368/summary.html) | [風險](companies/tw-2368/risk_plan.html) | [啟動報告](companies/tw-2368/initiation.html) |
| 5469 | 瀚宇博 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 87.4 TWD | 2026-06-26 | partial（證據仍不足） | 0%; not decision-ready | [摘要](companies/tw-5469/summary.html) | [風險](companies/tw-5469/risk_plan.html) | [啟動報告](companies/tw-5469/initiation.html) |
| MSFT | 微軟 | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 372.97 USD | 2026-06-26T20:00:01Z | partial（證據仍不足） | 0%; not decision-ready | [摘要](companies/us-MSFT/summary.html) | [風險](companies/us-MSFT/risk_plan.html) | [啟動報告](companies/us-MSFT/initiation.html) |
| 0050 | 元大台灣 50 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 103.1 TWD | 2026-06-26 | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-0050/summary.html) | [風險](companies/tw-0050/risk_plan.html) | [啟動報告](companies/tw-0050/initiation.html) |
| 2330 | 台積電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2,340 TWD | 2026-06-26 | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-2330/summary.html) | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 3037 | 欣興 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 975 TWD | 2026-06-26 | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3037/summary.html) | [風險](companies/tw-3037/risk_plan.html) | [啟動報告](companies/tw-3037/initiation.html) |
| 3189 | 景碩 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 797 TWD | 2026-06-26 | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3189/summary.html) | [風險](companies/tw-3189/risk_plan.html) | [啟動報告](companies/tw-3189/initiation.html) |
| 3481 | 群創 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 65 TWD | 2026-06-26 | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-3481/summary.html) | [風險](companies/tw-3481/risk_plan.html) | [啟動報告](companies/tw-3481/initiation.html) |
| 4958 | 臻鼎-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 580 TWD | 2026-06-26 | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-4958/summary.html) | [風險](companies/tw-4958/risk_plan.html) | [啟動報告](companies/tw-4958/initiation.html) |
| 8046 | 南電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1,125 TWD | 2026-06-26 | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/tw-8046/summary.html) | [風險](companies/tw-8046/risk_plan.html) | [啟動報告](companies/tw-8046/initiation.html) |
| IGV | iShares Expanded Tech-Software Sector ETF | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 88.2 USD | 2026-06-26T20:00:01Z | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-IGV/summary.html) | [風險](companies/us-IGV/risk_plan.html) | [啟動報告](companies/us-IGV/initiation.html) |
| SOXX | iShares Semiconductor ETF | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 589.94 USD | 2026-06-26T20:00:01Z | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-SOXX/summary.html) | [風險](companies/us-SOXX/risk_plan.html) | [啟動報告](companies/us-SOXX/initiation.html) |
| TLT | iShares 20+ Year Treasury Bond ETF | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 87.36 USD | 2026-06-26T20:00:01Z | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TLT/summary.html) | [風險](companies/us-TLT/risk_plan.html) | [啟動報告](companies/us-TLT/initiation.html) |
| TSM | TSMC ADR | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 432.35 USD | 2026-06-26T20:00:02Z | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-TSM/summary.html) | [風險](companies/us-TSM/risk_plan.html) | [啟動報告](companies/us-TSM/initiation.html) |
| UNH | UnitedHealth | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 427.89 USD | 2026-06-26T20:00:03Z | partial（證據仍不足） | 0% pre-trigger; reassess only after trigger and full PEI evidence | [摘要](companies/us-UNH/summary.html) | [風險](companies/us-UNH/risk_plan.html) | [啟動報告](companies/us-UNH/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| 00935 | [摘要](companies/tw-00935/summary.html) | [公司摘要](companies/tw-00935/tearsheet.html) | [啟動報告](companies/tw-00935/initiation.html) | [風險](companies/tw-00935/risk_plan.html) |
| 2368 | [摘要](companies/tw-2368/summary.html) | [公司摘要](companies/tw-2368/tearsheet.html) | [啟動報告](companies/tw-2368/initiation.html) | [風險](companies/tw-2368/risk_plan.html) |
| 5469 | [摘要](companies/tw-5469/summary.html) | [公司摘要](companies/tw-5469/tearsheet.html) | [啟動報告](companies/tw-5469/initiation.html) | [風險](companies/tw-5469/risk_plan.html) |
| MSFT | [摘要](companies/us-MSFT/summary.html) | [公司摘要](companies/us-MSFT/tearsheet.html) | [啟動報告](companies/us-MSFT/initiation.html) | [風險](companies/us-MSFT/risk_plan.html) |
| 0050 | [摘要](companies/tw-0050/summary.html) | [公司摘要](companies/tw-0050/tearsheet.html) | [啟動報告](companies/tw-0050/initiation.html) | [風險](companies/tw-0050/risk_plan.html) |
| 2330 | [摘要](companies/tw-2330/summary.html) | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 3037 | [摘要](companies/tw-3037/summary.html) | [公司摘要](companies/tw-3037/tearsheet.html) | [啟動報告](companies/tw-3037/initiation.html) | [風險](companies/tw-3037/risk_plan.html) |
| 3189 | [摘要](companies/tw-3189/summary.html) | [公司摘要](companies/tw-3189/tearsheet.html) | [啟動報告](companies/tw-3189/initiation.html) | [風險](companies/tw-3189/risk_plan.html) |
| 3481 | [摘要](companies/tw-3481/summary.html) | [公司摘要](companies/tw-3481/tearsheet.html) | [啟動報告](companies/tw-3481/initiation.html) | [風險](companies/tw-3481/risk_plan.html) |
| 4958 | [摘要](companies/tw-4958/summary.html) | [公司摘要](companies/tw-4958/tearsheet.html) | [啟動報告](companies/tw-4958/initiation.html) | [風險](companies/tw-4958/risk_plan.html) |
| 8046 | [摘要](companies/tw-8046/summary.html) | [公司摘要](companies/tw-8046/tearsheet.html) | [啟動報告](companies/tw-8046/initiation.html) | [風險](companies/tw-8046/risk_plan.html) |
| IGV | [摘要](companies/us-IGV/summary.html) | [公司摘要](companies/us-IGV/tearsheet.html) | [啟動報告](companies/us-IGV/initiation.html) | [風險](companies/us-IGV/risk_plan.html) |
| SOXX | [摘要](companies/us-SOXX/summary.html) | [公司摘要](companies/us-SOXX/tearsheet.html) | [啟動報告](companies/us-SOXX/initiation.html) | [風險](companies/us-SOXX/risk_plan.html) |
| TLT | [摘要](companies/us-TLT/summary.html) | [公司摘要](companies/us-TLT/tearsheet.html) | [啟動報告](companies/us-TLT/initiation.html) | [風險](companies/us-TLT/risk_plan.html) |
| TSM | [摘要](companies/us-TSM/summary.html) | [公司摘要](companies/us-TSM/tearsheet.html) | [啟動報告](companies/us-TSM/initiation.html) | [風險](companies/us-TSM/risk_plan.html) |
| UNH | [摘要](companies/us-UNH/summary.html) | [公司摘要](companies/us-UNH/tearsheet.html) | [啟動報告](companies/us-UNH/initiation.html) | [風險](companies/us-UNH/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
