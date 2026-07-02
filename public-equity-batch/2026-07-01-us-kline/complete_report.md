# StockLoop PEI 完整批次報告 2026-07-01 - US K-line

- 產出時間：2026-07-02 06:51:50
- 標的池檔數：61
- 已具備目前價格與研究狀態的列數：0
- Decision-ready 檔數：0
- 來源報告：reports/usStock/2026-07-01_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 61 檔標的；來源為 reports/usStock/2026-07-01_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 分開四個 decision-ready gate：`research_status`、`valuation_status`、`risk_status`、`investment_horizon.status`。四者未同時 complete 時，不得解讀為「現在可買」。
- 控制模型部位：61 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：61 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- 研究狀態 partial（證據仍不足）：61 檔。
- 期限 underwrite partial（3M/12M/3Y underwrite 未完整）：61 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | us | 61 |
| 分類 | 現在可以買名單 | 9 |
| 分類 | 現在不能買，但值得等買點名單 | 52 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 61 |
| 研究狀態 | partial（證據仍不足） | 61 |
| 估值狀態 | not_run（本流程未執行估值模型） | 61 |
| 風控狀態 | not_run（尚未完成 PM 風控/流動性/sizing gate） | 61 |
| 期限 underwrite | partial（3M/12M/3Y underwrite 未完整） | 61 |
| 決策就緒 | 否 | 61 |

## Decision-ready gate 與下一步 PEI workflow

| Gate blocker | 檔數 |
| --- | ---: |
| investment_horizon_not_complete | 61 |
| market_data_not_complete | 61 |
| official_validation_not_complete | 61 |
| research_status_not_complete | 61 |
| risk_status_not_complete | 61 |
| valuation_status_not_complete | 61 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 估值 handoff 缺失：current price missing
- 估值 handoff 缺失：valuation multiples missing
- 官方公司/證券身分驗證未完成
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：缺少公司級官方營收、訂單、財報或法說支撐
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 目前價格缺失

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | Decision-ready | 下一步 workflow | 研究狀態 | 估值狀態 | 風控狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CELH | Celsius Holdings | 現在可以買名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-CELH/summary.html) | [風險](companies/us-CELH/risk_plan.html) | [啟動報告](companies/us-CELH/initiation.html) |
| GOOG | Alphabet Inc. - Class C Capital Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-GOOG/summary.html) | [風險](companies/us-GOOG/risk_plan.html) | [啟動報告](companies/us-GOOG/initiation.html) |
| IBKR | Interactive Brokers Group | 現在可以買名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-IBKR/summary.html) | [風險](companies/us-IBKR/risk_plan.html) | [啟動報告](companies/us-IBKR/initiation.html) |
| NKE | Nike | 現在可以買名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-NKE/summary.html) | [風險](companies/us-NKE/risk_plan.html) | [啟動報告](companies/us-NKE/initiation.html) |
| NOW | ServiceNow | 現在可以買名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-NOW/summary.html) | [風險](companies/us-NOW/risk_plan.html) | [啟動報告](companies/us-NOW/initiation.html) |
| PDD | PDD Holdings Inc. - American Depositary Shares | 現在可以買名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-PDD/summary.html) | [風險](companies/us-PDD/risk_plan.html) | [啟動報告](companies/us-PDD/initiation.html) |
| PLTR | Palantir Technologies Inc. - Class A Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-PLTR/summary.html) | [風險](companies/us-PLTR/risk_plan.html) | [啟動報告](companies/us-PLTR/initiation.html) |
| SPGI | S&P Global Inc. Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-SPGI/summary.html) | [風險](companies/us-SPGI/risk_plan.html) | [啟動報告](companies/us-SPGI/initiation.html) |
| WDAY | Workday | 現在可以買名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-WDAY/summary.html) | [風險](companies/us-WDAY/risk_plan.html) | [啟動報告](companies/us-WDAY/initiation.html) |
| AAPL | Apple Inc. - Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-AAPL/summary.html) | [風險](companies/us-AAPL/risk_plan.html) | [啟動報告](companies/us-AAPL/initiation.html) |
| ADT | ADT Inc. Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-ADT/summary.html) | [風險](companies/us-ADT/risk_plan.html) | [啟動報告](companies/us-ADT/initiation.html) |
| AIG | American International Group | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-AIG/summary.html) | [風險](companies/us-AIG/risk_plan.html) | [啟動報告](companies/us-AIG/initiation.html) |
| BIDU | Baidu | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-BIDU/summary.html) | [風險](companies/us-BIDU/risk_plan.html) | [啟動報告](companies/us-BIDU/initiation.html) |
| BNY | The Bank of New York Mellon Corporation Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-BNY/summary.html) | [風險](companies/us-BNY/risk_plan.html) | [啟動報告](companies/us-BNY/initiation.html) |
| BSY | Bentley Systems | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-BSY/summary.html) | [風險](companies/us-BSY/risk_plan.html) | [啟動報告](companies/us-BSY/initiation.html) |
| BULL | Webull Corporation - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-BULL/summary.html) | [風險](companies/us-BULL/risk_plan.html) | [啟動報告](companies/us-BULL/initiation.html) |
| BX | Blackstone Inc. Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-BX/summary.html) | [風險](companies/us-BX/risk_plan.html) | [啟動報告](companies/us-BX/initiation.html) |
| CAG | ConAgra Brands | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-CAG/summary.html) | [風險](companies/us-CAG/risk_plan.html) | [啟動報告](companies/us-CAG/initiation.html) |
| CAI | Caris Life Sciences | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-CAI/summary.html) | [風險](companies/us-CAI/risk_plan.html) | [啟動報告](companies/us-CAI/initiation.html) |
| COIN | Coinbase Global | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-COIN/summary.html) | [風險](companies/us-COIN/risk_plan.html) | [啟動報告](companies/us-COIN/initiation.html) |
| CVNA | Carvana Co. Class A Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-CVNA/summary.html) | [風險](companies/us-CVNA/risk_plan.html) | [啟動報告](companies/us-CVNA/initiation.html) |
| DAR | Darling Ingredients Inc. Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-DAR/summary.html) | [風險](companies/us-DAR/risk_plan.html) | [啟動報告](companies/us-DAR/initiation.html) |
| DKNG | DraftKings Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-DKNG/summary.html) | [風險](companies/us-DKNG/risk_plan.html) | [啟動報告](companies/us-DKNG/initiation.html) |
| DOCU | DocuSign | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-DOCU/summary.html) | [風險](companies/us-DOCU/risk_plan.html) | [啟動報告](companies/us-DOCU/initiation.html) |
| DXCM | DexCom | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-DXCM/summary.html) | [風險](companies/us-DXCM/risk_plan.html) | [啟動報告](companies/us-DXCM/initiation.html) |
| FIG | Figma | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-FIG/summary.html) | [風險](companies/us-FIG/risk_plan.html) | [啟動報告](companies/us-FIG/initiation.html) |
| FIS | Fidelity National Information Services | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-FIS/summary.html) | [風險](companies/us-FIS/risk_plan.html) | [啟動報告](companies/us-FIS/initiation.html) |
| FISV | Fiserv | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-FISV/summary.html) | [風險](companies/us-FISV/risk_plan.html) | [啟動報告](companies/us-FISV/initiation.html) |
| FTI | TechnipFMC plc Ordinary Share | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-FTI/summary.html) | [風險](companies/us-FTI/risk_plan.html) | [啟動報告](companies/us-FTI/initiation.html) |
| GEHC | GE HealthCare Technologies Inc. - Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-GEHC/summary.html) | [風險](companies/us-GEHC/risk_plan.html) | [啟動報告](companies/us-GEHC/initiation.html) |
| GIS | General Mills | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-GIS/summary.html) | [風險](companies/us-GIS/risk_plan.html) | [啟動報告](companies/us-GIS/initiation.html) |
| GOOGL | Alphabet Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-GOOGL/summary.html) | [風險](companies/us-GOOGL/risk_plan.html) | [啟動報告](companies/us-GOOGL/initiation.html) |
| HTFL | Heartflow | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-HTFL/summary.html) | [風險](companies/us-HTFL/risk_plan.html) | [啟動報告](companies/us-HTFL/initiation.html) |
| IVZ | Invesco Ltd Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-IVZ/summary.html) | [風險](companies/us-IVZ/risk_plan.html) | [啟動報告](companies/us-IVZ/initiation.html) |
| KD | Kyndryl Holdings | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-KD/summary.html) | [風險](companies/us-KD/risk_plan.html) | [啟動報告](companies/us-KD/initiation.html) |
| KHC | The Kraft Heinz Company - Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-KHC/summary.html) | [風險](companies/us-KHC/risk_plan.html) | [啟動報告](companies/us-KHC/initiation.html) |
| KRMN | Karman Holdings Inc. Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-KRMN/summary.html) | [風險](companies/us-KRMN/risk_plan.html) | [啟動報告](companies/us-KRMN/initiation.html) |
| M | Macy's Inc Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-M/summary.html) | [風險](companies/us-M/risk_plan.html) | [啟動報告](companies/us-M/initiation.html) |
| MET | MetLife | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-MET/summary.html) | [風險](companies/us-MET/risk_plan.html) | [啟動報告](companies/us-MET/initiation.html) |
| META | Meta Platforms | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-META/summary.html) | [風險](companies/us-META/risk_plan.html) | [啟動報告](companies/us-META/initiation.html) |
| MUFG | Mitsubishi UFJ Financial Group | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-MUFG/summary.html) | [風險](companies/us-MUFG/risk_plan.html) | [啟動報告](companies/us-MUFG/initiation.html) |
| NTAP | NetApp | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-NTAP/summary.html) | [風險](companies/us-NTAP/risk_plan.html) | [啟動報告](companies/us-NTAP/initiation.html) |
| NWS | News Corporation - Class B Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-NWS/summary.html) | [風險](companies/us-NWS/risk_plan.html) | [啟動報告](companies/us-NWS/initiation.html) |
| NWSA | News Corporation - Class A Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-NWSA/summary.html) | [風險](companies/us-NWSA/risk_plan.html) | [啟動報告](companies/us-NWSA/initiation.html) |
| OMC | Omnicom Group Inc. Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-OMC/summary.html) | [風險](companies/us-OMC/risk_plan.html) | [啟動報告](companies/us-OMC/initiation.html) |
| PG | Procter & Gamble Company  Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-PG/summary.html) | [風險](companies/us-PG/risk_plan.html) | [啟動報告](companies/us-PG/initiation.html) |
| PSKY | Paramount Skydance Corporation - Class B Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-PSKY/summary.html) | [風險](companies/us-PSKY/risk_plan.html) | [啟動報告](companies/us-PSKY/initiation.html) |
| SBRA | Sabra Health Care REIT | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-SBRA/summary.html) | [風險](companies/us-SBRA/risk_plan.html) | [啟動報告](companies/us-SBRA/initiation.html) |
| SHLS | Shoals Technologies Group | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-SHLS/summary.html) | [風險](companies/us-SHLS/risk_plan.html) | [啟動報告](companies/us-SHLS/initiation.html) |
| SHOP | Shopify Inc. - Class A Subordinate Voting Shares | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-SHOP/summary.html) | [風險](companies/us-SHOP/risk_plan.html) | [啟動報告](companies/us-SHOP/initiation.html) |
| SMFG | Sumitomo Mitsui Financial Group Inc Unsponsored American Depositary Shares | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-SMFG/summary.html) | [風險](companies/us-SMFG/risk_plan.html) | [啟動報告](companies/us-SMFG/initiation.html) |
| SSRM | SSR Mining Inc. - Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-SSRM/summary.html) | [風險](companies/us-SSRM/risk_plan.html) | [啟動報告](companies/us-SSRM/initiation.html) |
| TRMB | Trimble Inc. - Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-TRMB/summary.html) | [風險](companies/us-TRMB/risk_plan.html) | [啟動報告](companies/us-TRMB/initiation.html) |
| TTD | The Trade Desk | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-TTD/summary.html) | [風險](companies/us-TTD/risk_plan.html) | [啟動報告](companies/us-TTD/initiation.html) |
| UBER | Uber Technologies | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-UBER/summary.html) | [風險](companies/us-UBER/risk_plan.html) | [啟動報告](companies/us-UBER/initiation.html) |
| VIPS | Vipshop Holdings Limited American Depositary Shares | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-VIPS/summary.html) | [風險](companies/us-VIPS/risk_plan.html) | [啟動報告](companies/us-VIPS/initiation.html) |
| VNET | VNET Group | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-VNET/summary.html) | [風險](companies/us-VNET/risk_plan.html) | [啟動報告](companies/us-VNET/initiation.html) |
| VRSK | Verisk Analytics | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-VRSK/summary.html) | [風險](companies/us-VRSK/risk_plan.html) | [啟動報告](companies/us-VRSK/initiation.html) |
| VTRS | Viatris Inc. - Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-VTRS/summary.html) | [風險](companies/us-VTRS/risk_plan.html) | [啟動報告](companies/us-VTRS/initiation.html) |
| XRAY | DENTSPLY SIRONA Inc. - Common Stock | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-XRAY/summary.html) | [風險](companies/us-XRAY/risk_plan.html) | [啟動報告](companies/us-XRAY/initiation.html) |
| Z | Zillow Group | 現在不能買，但值得等買點名單 | Not decision-ready（尚未達決策等級） | USD |  | false | market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | partial（證據仍不足） | not_run（本流程未執行估值模型） | not_run（尚未完成 PM 風控/流動性/sizing gate） | 0%; not decision-ready | [摘要](companies/us-Z/summary.html) | [風險](companies/us-Z/risk_plan.html) | [啟動報告](companies/us-Z/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| CELH | [摘要](companies/us-CELH/summary.html) | [公司摘要](companies/us-CELH/tearsheet.html) | [啟動報告](companies/us-CELH/initiation.html) | [風險](companies/us-CELH/risk_plan.html) |
| GOOG | [摘要](companies/us-GOOG/summary.html) | [公司摘要](companies/us-GOOG/tearsheet.html) | [啟動報告](companies/us-GOOG/initiation.html) | [風險](companies/us-GOOG/risk_plan.html) |
| IBKR | [摘要](companies/us-IBKR/summary.html) | [公司摘要](companies/us-IBKR/tearsheet.html) | [啟動報告](companies/us-IBKR/initiation.html) | [風險](companies/us-IBKR/risk_plan.html) |
| NKE | [摘要](companies/us-NKE/summary.html) | [公司摘要](companies/us-NKE/tearsheet.html) | [啟動報告](companies/us-NKE/initiation.html) | [風險](companies/us-NKE/risk_plan.html) |
| NOW | [摘要](companies/us-NOW/summary.html) | [公司摘要](companies/us-NOW/tearsheet.html) | [啟動報告](companies/us-NOW/initiation.html) | [風險](companies/us-NOW/risk_plan.html) |
| PDD | [摘要](companies/us-PDD/summary.html) | [公司摘要](companies/us-PDD/tearsheet.html) | [啟動報告](companies/us-PDD/initiation.html) | [風險](companies/us-PDD/risk_plan.html) |
| PLTR | [摘要](companies/us-PLTR/summary.html) | [公司摘要](companies/us-PLTR/tearsheet.html) | [啟動報告](companies/us-PLTR/initiation.html) | [風險](companies/us-PLTR/risk_plan.html) |
| SPGI | [摘要](companies/us-SPGI/summary.html) | [公司摘要](companies/us-SPGI/tearsheet.html) | [啟動報告](companies/us-SPGI/initiation.html) | [風險](companies/us-SPGI/risk_plan.html) |
| WDAY | [摘要](companies/us-WDAY/summary.html) | [公司摘要](companies/us-WDAY/tearsheet.html) | [啟動報告](companies/us-WDAY/initiation.html) | [風險](companies/us-WDAY/risk_plan.html) |
| AAPL | [摘要](companies/us-AAPL/summary.html) | [公司摘要](companies/us-AAPL/tearsheet.html) | [啟動報告](companies/us-AAPL/initiation.html) | [風險](companies/us-AAPL/risk_plan.html) |
| ADT | [摘要](companies/us-ADT/summary.html) | [公司摘要](companies/us-ADT/tearsheet.html) | [啟動報告](companies/us-ADT/initiation.html) | [風險](companies/us-ADT/risk_plan.html) |
| AIG | [摘要](companies/us-AIG/summary.html) | [公司摘要](companies/us-AIG/tearsheet.html) | [啟動報告](companies/us-AIG/initiation.html) | [風險](companies/us-AIG/risk_plan.html) |
| BIDU | [摘要](companies/us-BIDU/summary.html) | [公司摘要](companies/us-BIDU/tearsheet.html) | [啟動報告](companies/us-BIDU/initiation.html) | [風險](companies/us-BIDU/risk_plan.html) |
| BNY | [摘要](companies/us-BNY/summary.html) | [公司摘要](companies/us-BNY/tearsheet.html) | [啟動報告](companies/us-BNY/initiation.html) | [風險](companies/us-BNY/risk_plan.html) |
| BSY | [摘要](companies/us-BSY/summary.html) | [公司摘要](companies/us-BSY/tearsheet.html) | [啟動報告](companies/us-BSY/initiation.html) | [風險](companies/us-BSY/risk_plan.html) |
| BULL | [摘要](companies/us-BULL/summary.html) | [公司摘要](companies/us-BULL/tearsheet.html) | [啟動報告](companies/us-BULL/initiation.html) | [風險](companies/us-BULL/risk_plan.html) |
| BX | [摘要](companies/us-BX/summary.html) | [公司摘要](companies/us-BX/tearsheet.html) | [啟動報告](companies/us-BX/initiation.html) | [風險](companies/us-BX/risk_plan.html) |
| CAG | [摘要](companies/us-CAG/summary.html) | [公司摘要](companies/us-CAG/tearsheet.html) | [啟動報告](companies/us-CAG/initiation.html) | [風險](companies/us-CAG/risk_plan.html) |
| CAI | [摘要](companies/us-CAI/summary.html) | [公司摘要](companies/us-CAI/tearsheet.html) | [啟動報告](companies/us-CAI/initiation.html) | [風險](companies/us-CAI/risk_plan.html) |
| COIN | [摘要](companies/us-COIN/summary.html) | [公司摘要](companies/us-COIN/tearsheet.html) | [啟動報告](companies/us-COIN/initiation.html) | [風險](companies/us-COIN/risk_plan.html) |
| CVNA | [摘要](companies/us-CVNA/summary.html) | [公司摘要](companies/us-CVNA/tearsheet.html) | [啟動報告](companies/us-CVNA/initiation.html) | [風險](companies/us-CVNA/risk_plan.html) |
| DAR | [摘要](companies/us-DAR/summary.html) | [公司摘要](companies/us-DAR/tearsheet.html) | [啟動報告](companies/us-DAR/initiation.html) | [風險](companies/us-DAR/risk_plan.html) |
| DKNG | [摘要](companies/us-DKNG/summary.html) | [公司摘要](companies/us-DKNG/tearsheet.html) | [啟動報告](companies/us-DKNG/initiation.html) | [風險](companies/us-DKNG/risk_plan.html) |
| DOCU | [摘要](companies/us-DOCU/summary.html) | [公司摘要](companies/us-DOCU/tearsheet.html) | [啟動報告](companies/us-DOCU/initiation.html) | [風險](companies/us-DOCU/risk_plan.html) |
| DXCM | [摘要](companies/us-DXCM/summary.html) | [公司摘要](companies/us-DXCM/tearsheet.html) | [啟動報告](companies/us-DXCM/initiation.html) | [風險](companies/us-DXCM/risk_plan.html) |
| FIG | [摘要](companies/us-FIG/summary.html) | [公司摘要](companies/us-FIG/tearsheet.html) | [啟動報告](companies/us-FIG/initiation.html) | [風險](companies/us-FIG/risk_plan.html) |
| FIS | [摘要](companies/us-FIS/summary.html) | [公司摘要](companies/us-FIS/tearsheet.html) | [啟動報告](companies/us-FIS/initiation.html) | [風險](companies/us-FIS/risk_plan.html) |
| FISV | [摘要](companies/us-FISV/summary.html) | [公司摘要](companies/us-FISV/tearsheet.html) | [啟動報告](companies/us-FISV/initiation.html) | [風險](companies/us-FISV/risk_plan.html) |
| FTI | [摘要](companies/us-FTI/summary.html) | [公司摘要](companies/us-FTI/tearsheet.html) | [啟動報告](companies/us-FTI/initiation.html) | [風險](companies/us-FTI/risk_plan.html) |
| GEHC | [摘要](companies/us-GEHC/summary.html) | [公司摘要](companies/us-GEHC/tearsheet.html) | [啟動報告](companies/us-GEHC/initiation.html) | [風險](companies/us-GEHC/risk_plan.html) |
| GIS | [摘要](companies/us-GIS/summary.html) | [公司摘要](companies/us-GIS/tearsheet.html) | [啟動報告](companies/us-GIS/initiation.html) | [風險](companies/us-GIS/risk_plan.html) |
| GOOGL | [摘要](companies/us-GOOGL/summary.html) | [公司摘要](companies/us-GOOGL/tearsheet.html) | [啟動報告](companies/us-GOOGL/initiation.html) | [風險](companies/us-GOOGL/risk_plan.html) |
| HTFL | [摘要](companies/us-HTFL/summary.html) | [公司摘要](companies/us-HTFL/tearsheet.html) | [啟動報告](companies/us-HTFL/initiation.html) | [風險](companies/us-HTFL/risk_plan.html) |
| IVZ | [摘要](companies/us-IVZ/summary.html) | [公司摘要](companies/us-IVZ/tearsheet.html) | [啟動報告](companies/us-IVZ/initiation.html) | [風險](companies/us-IVZ/risk_plan.html) |
| KD | [摘要](companies/us-KD/summary.html) | [公司摘要](companies/us-KD/tearsheet.html) | [啟動報告](companies/us-KD/initiation.html) | [風險](companies/us-KD/risk_plan.html) |
| KHC | [摘要](companies/us-KHC/summary.html) | [公司摘要](companies/us-KHC/tearsheet.html) | [啟動報告](companies/us-KHC/initiation.html) | [風險](companies/us-KHC/risk_plan.html) |
| KRMN | [摘要](companies/us-KRMN/summary.html) | [公司摘要](companies/us-KRMN/tearsheet.html) | [啟動報告](companies/us-KRMN/initiation.html) | [風險](companies/us-KRMN/risk_plan.html) |
| M | [摘要](companies/us-M/summary.html) | [公司摘要](companies/us-M/tearsheet.html) | [啟動報告](companies/us-M/initiation.html) | [風險](companies/us-M/risk_plan.html) |
| MET | [摘要](companies/us-MET/summary.html) | [公司摘要](companies/us-MET/tearsheet.html) | [啟動報告](companies/us-MET/initiation.html) | [風險](companies/us-MET/risk_plan.html) |
| META | [摘要](companies/us-META/summary.html) | [公司摘要](companies/us-META/tearsheet.html) | [啟動報告](companies/us-META/initiation.html) | [風險](companies/us-META/risk_plan.html) |
| MUFG | [摘要](companies/us-MUFG/summary.html) | [公司摘要](companies/us-MUFG/tearsheet.html) | [啟動報告](companies/us-MUFG/initiation.html) | [風險](companies/us-MUFG/risk_plan.html) |
| NTAP | [摘要](companies/us-NTAP/summary.html) | [公司摘要](companies/us-NTAP/tearsheet.html) | [啟動報告](companies/us-NTAP/initiation.html) | [風險](companies/us-NTAP/risk_plan.html) |
| NWS | [摘要](companies/us-NWS/summary.html) | [公司摘要](companies/us-NWS/tearsheet.html) | [啟動報告](companies/us-NWS/initiation.html) | [風險](companies/us-NWS/risk_plan.html) |
| NWSA | [摘要](companies/us-NWSA/summary.html) | [公司摘要](companies/us-NWSA/tearsheet.html) | [啟動報告](companies/us-NWSA/initiation.html) | [風險](companies/us-NWSA/risk_plan.html) |
| OMC | [摘要](companies/us-OMC/summary.html) | [公司摘要](companies/us-OMC/tearsheet.html) | [啟動報告](companies/us-OMC/initiation.html) | [風險](companies/us-OMC/risk_plan.html) |
| PG | [摘要](companies/us-PG/summary.html) | [公司摘要](companies/us-PG/tearsheet.html) | [啟動報告](companies/us-PG/initiation.html) | [風險](companies/us-PG/risk_plan.html) |
| PSKY | [摘要](companies/us-PSKY/summary.html) | [公司摘要](companies/us-PSKY/tearsheet.html) | [啟動報告](companies/us-PSKY/initiation.html) | [風險](companies/us-PSKY/risk_plan.html) |
| SBRA | [摘要](companies/us-SBRA/summary.html) | [公司摘要](companies/us-SBRA/tearsheet.html) | [啟動報告](companies/us-SBRA/initiation.html) | [風險](companies/us-SBRA/risk_plan.html) |
| SHLS | [摘要](companies/us-SHLS/summary.html) | [公司摘要](companies/us-SHLS/tearsheet.html) | [啟動報告](companies/us-SHLS/initiation.html) | [風險](companies/us-SHLS/risk_plan.html) |
| SHOP | [摘要](companies/us-SHOP/summary.html) | [公司摘要](companies/us-SHOP/tearsheet.html) | [啟動報告](companies/us-SHOP/initiation.html) | [風險](companies/us-SHOP/risk_plan.html) |
| SMFG | [摘要](companies/us-SMFG/summary.html) | [公司摘要](companies/us-SMFG/tearsheet.html) | [啟動報告](companies/us-SMFG/initiation.html) | [風險](companies/us-SMFG/risk_plan.html) |
| SSRM | [摘要](companies/us-SSRM/summary.html) | [公司摘要](companies/us-SSRM/tearsheet.html) | [啟動報告](companies/us-SSRM/initiation.html) | [風險](companies/us-SSRM/risk_plan.html) |
| TRMB | [摘要](companies/us-TRMB/summary.html) | [公司摘要](companies/us-TRMB/tearsheet.html) | [啟動報告](companies/us-TRMB/initiation.html) | [風險](companies/us-TRMB/risk_plan.html) |
| TTD | [摘要](companies/us-TTD/summary.html) | [公司摘要](companies/us-TTD/tearsheet.html) | [啟動報告](companies/us-TTD/initiation.html) | [風險](companies/us-TTD/risk_plan.html) |
| UBER | [摘要](companies/us-UBER/summary.html) | [公司摘要](companies/us-UBER/tearsheet.html) | [啟動報告](companies/us-UBER/initiation.html) | [風險](companies/us-UBER/risk_plan.html) |
| VIPS | [摘要](companies/us-VIPS/summary.html) | [公司摘要](companies/us-VIPS/tearsheet.html) | [啟動報告](companies/us-VIPS/initiation.html) | [風險](companies/us-VIPS/risk_plan.html) |
| VNET | [摘要](companies/us-VNET/summary.html) | [公司摘要](companies/us-VNET/tearsheet.html) | [啟動報告](companies/us-VNET/initiation.html) | [風險](companies/us-VNET/risk_plan.html) |
| VRSK | [摘要](companies/us-VRSK/summary.html) | [公司摘要](companies/us-VRSK/tearsheet.html) | [啟動報告](companies/us-VRSK/initiation.html) | [風險](companies/us-VRSK/risk_plan.html) |
| VTRS | [摘要](companies/us-VTRS/summary.html) | [公司摘要](companies/us-VTRS/tearsheet.html) | [啟動報告](companies/us-VTRS/initiation.html) | [風險](companies/us-VTRS/risk_plan.html) |
| XRAY | [摘要](companies/us-XRAY/summary.html) | [公司摘要](companies/us-XRAY/tearsheet.html) | [啟動報告](companies/us-XRAY/initiation.html) | [風險](companies/us-XRAY/risk_plan.html) |
| Z | [摘要](companies/us-Z/summary.html) | [公司摘要](companies/us-Z/tearsheet.html) | [啟動報告](companies/us-Z/initiation.html) | [風險](companies/us-Z/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
