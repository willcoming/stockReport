# StockLoop PEI 完整批次報告 2026-06-26 - US K-line

- 產出時間：2026-06-27 06:48:55
- 標的池檔數：139
- 已具備目前價格與研究狀態的列數：139
- 來源報告：reports/usStock/2026-06-26_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 139 檔標的；來源為 reports/usStock/2026-06-26_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：139 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：16 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：110 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：13 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：139 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | us | 139 |
| 分類 | 現在可以買名單 | 29 |
| 分類 | 現在不能買，但值得等買點名單 | 110 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 16 |
| 研究標籤 | Wait for trigger（等待觸發） | 110 |
| 研究標籤 | Watch only（僅觀察） | 13 |
| 研究狀態 | partial（證據仍不足） | 139 |
| 估值狀態 | not_run（本流程未執行估值模型） | 139 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 尚未取得公司級官方營收、訂單、法說或管理層證據來驗證題材
- 尚未完成流動性上限、停損距離與風險報酬的完整外部資料交叉驗證
- 未執行 consensus / valuation model tie-out，本流程 valuation_status=not_run
- 未執行完整 Public Equity Investing specialist 官方 filings 與財報逐項查核
- 缺少公司級官方營收、訂單、財報或法說支撐
- 缺少明確後續產業 KPI
- 近 7 日公開新聞熱度未命中或未抓取

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADP | Automatic Data Processing | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-ADP/summary.html) | [風險](companies/us-ADP/risk_plan.html) | [啟動報告](companies/us-ADP/initiation.html) |
| BMY | Bristol-Myers Squibb Company Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-BMY/summary.html) | [風險](companies/us-BMY/risk_plan.html) | [啟動報告](companies/us-BMY/initiation.html) |
| CCL | Carnival Corporation Ltd. Common Shares | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-CCL/summary.html) | [風險](companies/us-CCL/risk_plan.html) | [啟動報告](companies/us-CCL/initiation.html) |
| DDOG | Datadog | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-DDOG/summary.html) | [風險](companies/us-DDOG/risk_plan.html) | [啟動報告](companies/us-DDOG/initiation.html) |
| DT | Dynatrace | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-DT/summary.html) | [風險](companies/us-DT/risk_plan.html) | [啟動報告](companies/us-DT/initiation.html) |
| ELV | Elevance Health | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-ELV/summary.html) | [風險](companies/us-ELV/risk_plan.html) | [啟動報告](companies/us-ELV/initiation.html) |
| FLUT | Flutter Entertainment plc Ordinary Shares | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-FLUT/summary.html) | [風險](companies/us-FLUT/risk_plan.html) | [啟動報告](companies/us-FLUT/initiation.html) |
| FRSH | Freshworks Inc. - Class A Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-FRSH/summary.html) | [風險](companies/us-FRSH/risk_plan.html) | [啟動報告](companies/us-FRSH/initiation.html) |
| GILD | Gilead Sciences | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-GILD/summary.html) | [風險](companies/us-GILD/risk_plan.html) | [啟動報告](companies/us-GILD/initiation.html) |
| JKHY | Jack Henry & Associates | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-JKHY/summary.html) | [風險](companies/us-JKHY/risk_plan.html) | [啟動報告](companies/us-JKHY/initiation.html) |
| LULU | lululemon athletica inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-LULU/summary.html) | [風險](companies/us-LULU/risk_plan.html) | [啟動報告](companies/us-LULU/initiation.html) |
| MARA | MARA Holdings | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-MARA/summary.html) | [風險](companies/us-MARA/risk_plan.html) | [啟動報告](companies/us-MARA/initiation.html) |
| MCO | Moody's Corporation Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-MCO/summary.html) | [風險](companies/us-MCO/risk_plan.html) | [啟動報告](companies/us-MCO/initiation.html) |
| MRCY | Mercury Systems Inc - Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-MRCY/summary.html) | [風險](companies/us-MRCY/risk_plan.html) | [啟動報告](companies/us-MRCY/initiation.html) |
| MRSH | Marsh Common Stock | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-MRSH/summary.html) | [風險](companies/us-MRSH/risk_plan.html) | [啟動報告](companies/us-MRSH/initiation.html) |
| MTCH | Match Group | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-MTCH/summary.html) | [風險](companies/us-MTCH/risk_plan.html) | [啟動報告](companies/us-MTCH/initiation.html) |
| NTNX | Nutanix | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-NTNX/summary.html) | [風險](companies/us-NTNX/risk_plan.html) | [啟動報告](companies/us-NTNX/initiation.html) |
| NU | Nu Holdings Ltd. Class A Ordinary Shares | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-NU/summary.html) | [風險](companies/us-NU/risk_plan.html) | [啟動報告](companies/us-NU/initiation.html) |
| ORLY | O'Reilly Automotive | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-ORLY/summary.html) | [風險](companies/us-ORLY/risk_plan.html) | [啟動報告](companies/us-ORLY/initiation.html) |
| PFG | Principal Financial Group Inc - Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-PFG/summary.html) | [風險](companies/us-PFG/risk_plan.html) | [啟動報告](companies/us-PFG/initiation.html) |
| RBLX | Roblox Corporation Class A Common Stock | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-RBLX/summary.html) | [風險](companies/us-RBLX/risk_plan.html) | [啟動報告](companies/us-RBLX/initiation.html) |
| RIVN | Rivian Automotive | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-RIVN/summary.html) | [風險](companies/us-RIVN/risk_plan.html) | [啟動報告](companies/us-RIVN/initiation.html) |
| SCHW | Charles Schwab Corporation  Common Stock | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-SCHW/summary.html) | [風險](companies/us-SCHW/risk_plan.html) | [啟動報告](companies/us-SCHW/initiation.html) |
| TTAN | ServiceTitan | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-TTAN/summary.html) | [風險](companies/us-TTAN/risk_plan.html) | [啟動報告](companies/us-TTAN/initiation.html) |
| UBER | Uber Technologies | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-UBER/summary.html) | [風險](companies/us-UBER/risk_plan.html) | [啟動報告](companies/us-UBER/initiation.html) |
| VEEV | Veeva Systems Inc. Class A Common Stock | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-VEEV/summary.html) | [風險](companies/us-VEEV/risk_plan.html) | [啟動報告](companies/us-VEEV/initiation.html) |
| VRSK | Verisk Analytics | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-VRSK/summary.html) | [風險](companies/us-VRSK/risk_plan.html) | [啟動報告](companies/us-VRSK/initiation.html) |
| VZ | Verizon Communications Inc. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-VZ/summary.html) | [風險](companies/us-VZ/risk_plan.html) | [啟動報告](companies/us-VZ/initiation.html) |
| ZS | Zscaler | 現在可以買名單 | Watch only（僅觀察） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [摘要](companies/us-ZS/summary.html) | [風險](companies/us-ZS/risk_plan.html) | [啟動報告](companies/us-ZS/initiation.html) |
| ACGL | Arch Capital Group Ltd. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ACGL/summary.html) | [風險](companies/us-ACGL/risk_plan.html) | [啟動報告](companies/us-ACGL/initiation.html) |
| ADEA | Adeia Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ADEA/summary.html) | [風險](companies/us-ADEA/risk_plan.html) | [啟動報告](companies/us-ADEA/initiation.html) |
| AEVA | Aeva Technologies | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-AEVA/summary.html) | [風險](companies/us-AEVA/risk_plan.html) | [啟動報告](companies/us-AEVA/initiation.html) |
| AIG | American International Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-AIG/summary.html) | [風險](companies/us-AIG/risk_plan.html) | [啟動報告](companies/us-AIG/initiation.html) |
| ALOY | REalloys Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ALOY/summary.html) | [風險](companies/us-ALOY/risk_plan.html) | [啟動報告](companies/us-ALOY/initiation.html) |
| AR | Antero Resources Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-AR/summary.html) | [風險](companies/us-AR/risk_plan.html) | [啟動報告](companies/us-AR/initiation.html) |
| ASAN | Asana | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ASAN/summary.html) | [風險](companies/us-ASAN/risk_plan.html) | [啟動報告](companies/us-ASAN/initiation.html) |
| ATRC | AtriCure | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ATRC/summary.html) | [風險](companies/us-ATRC/risk_plan.html) | [啟動報告](companies/us-ATRC/initiation.html) |
| AVPT | AvePoint | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-AVPT/summary.html) | [風險](companies/us-AVPT/risk_plan.html) | [啟動報告](companies/us-AVPT/initiation.html) |
| AXSM | Axsome Therapeutics | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-AXSM/summary.html) | [風險](companies/us-AXSM/risk_plan.html) | [啟動報告](companies/us-AXSM/initiation.html) |
| BA | Boeing Company  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BA/summary.html) | [風險](companies/us-BA/risk_plan.html) | [啟動報告](companies/us-BA/initiation.html) |
| BAND | Bandwidth Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BAND/summary.html) | [風險](companies/us-BAND/risk_plan.html) | [啟動報告](companies/us-BAND/initiation.html) |
| BILL | BILL Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BILL/summary.html) | [風險](companies/us-BILL/risk_plan.html) | [啟動報告](companies/us-BILL/initiation.html) |
| BL | BlackLine | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BL/summary.html) | [風險](companies/us-BL/risk_plan.html) | [啟動報告](companies/us-BL/initiation.html) |
| BOX | Box | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BOX/summary.html) | [風險](companies/us-BOX/risk_plan.html) | [啟動報告](companies/us-BOX/initiation.html) |
| BRO | Brown & Brown | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BRO/summary.html) | [風險](companies/us-BRO/risk_plan.html) | [啟動報告](companies/us-BRO/initiation.html) |
| BTDR | Bitdeer Technologies Group - Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BTDR/summary.html) | [風險](companies/us-BTDR/risk_plan.html) | [啟動報告](companies/us-BTDR/initiation.html) |
| BULL | Webull Corporation - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BULL/summary.html) | [風險](companies/us-BULL/risk_plan.html) | [啟動報告](companies/us-BULL/initiation.html) |
| CARG | CarGurus | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CARG/summary.html) | [風險](companies/us-CARG/risk_plan.html) | [啟動報告](companies/us-CARG/initiation.html) |
| CCC | CCC Intelligent Solutions Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CCC/summary.html) | [風險](companies/us-CCC/risk_plan.html) | [啟動報告](companies/us-CCC/initiation.html) |
| CELC | Celcuity Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CELC/summary.html) | [風險](companies/us-CELC/risk_plan.html) | [啟動報告](companies/us-CELC/initiation.html) |
| CELH | Celsius Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CELH/summary.html) | [風險](companies/us-CELH/risk_plan.html) | [啟動報告](companies/us-CELH/initiation.html) |
| CHDN | Churchill Downs | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CHDN/summary.html) | [風險](companies/us-CHDN/risk_plan.html) | [啟動報告](companies/us-CHDN/initiation.html) |
| CL | Colgate-Palmolive Company Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CL/summary.html) | [風險](companies/us-CL/risk_plan.html) | [啟動報告](companies/us-CL/initiation.html) |
| CNM | Core & Main | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CNM/summary.html) | [風險](companies/us-CNM/risk_plan.html) | [啟動報告](companies/us-CNM/initiation.html) |
| CNX | CNX Resources Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CNX/summary.html) | [風險](companies/us-CNX/risk_plan.html) | [啟動報告](companies/us-CNX/initiation.html) |
| CP | Canadian Pacific Kansas City Limited Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CP/summary.html) | [風險](companies/us-CP/risk_plan.html) | [啟動報告](companies/us-CP/initiation.html) |
| CPNG | Coupang | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CPNG/summary.html) | [風險](companies/us-CPNG/risk_plan.html) | [啟動報告](companies/us-CPNG/initiation.html) |
| CRNX | Crinetics Pharmaceuticals | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CRNX/summary.html) | [風險](companies/us-CRNX/risk_plan.html) | [啟動報告](companies/us-CRNX/initiation.html) |
| CYTK | Cytokinetics | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CYTK/summary.html) | [風險](companies/us-CYTK/risk_plan.html) | [啟動報告](companies/us-CYTK/initiation.html) |
| DBX | Dropbox | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-DBX/summary.html) | [風險](companies/us-DBX/risk_plan.html) | [啟動報告](companies/us-DBX/initiation.html) |
| DKNG | DraftKings Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-DKNG/summary.html) | [風險](companies/us-DKNG/risk_plan.html) | [啟動報告](companies/us-DKNG/initiation.html) |
| DOCS | Doximity | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-DOCS/summary.html) | [風險](companies/us-DOCS/risk_plan.html) | [啟動報告](companies/us-DOCS/initiation.html) |
| DUOL | Duolingo | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-DUOL/summary.html) | [風險](companies/us-DUOL/risk_plan.html) | [啟動報告](companies/us-DUOL/initiation.html) |
| DV | DoubleVerify Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-DV/summary.html) | [風險](companies/us-DV/risk_plan.html) | [啟動報告](companies/us-DV/initiation.html) |
| DXCM | DexCom | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-DXCM/summary.html) | [風險](companies/us-DXCM/risk_plan.html) | [啟動報告](companies/us-DXCM/initiation.html) |
| ELE | Elemental Royalty Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ELE/summary.html) | [風險](companies/us-ELE/risk_plan.html) | [啟動報告](companies/us-ELE/initiation.html) |
| EQPT | EquipmentShare.com Inc - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-EQPT/summary.html) | [風險](companies/us-EQPT/risk_plan.html) | [啟動報告](companies/us-EQPT/initiation.html) |
| FIVN | Five9 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-FIVN/summary.html) | [風險](companies/us-FIVN/risk_plan.html) | [啟動報告](companies/us-FIVN/initiation.html) |
| FLO | Flowers Foods | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-FLO/summary.html) | [風險](companies/us-FLO/risk_plan.html) | [啟動報告](companies/us-FLO/initiation.html) |
| FTNT | Fortinet | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-FTNT/summary.html) | [風險](companies/us-FTNT/risk_plan.html) | [啟動報告](companies/us-FTNT/initiation.html) |
| GEN | Gen Digital Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-GEN/summary.html) | [風險](companies/us-GEN/risk_plan.html) | [啟動報告](companies/us-GEN/initiation.html) |
| GLIBK | Liberty Capital Corporation - Series C GCI Group Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-GLIBK/summary.html) | [風險](companies/us-GLIBK/risk_plan.html) | [啟動報告](companies/us-GLIBK/initiation.html) |
| GLXY | Galaxy Digital Inc. - Class A common stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-GLXY/summary.html) | [風險](companies/us-GLXY/risk_plan.html) | [啟動報告](companies/us-GLXY/initiation.html) |
| GME | GameStop Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-GME/summary.html) | [風險](companies/us-GME/risk_plan.html) | [啟動報告](companies/us-GME/initiation.html) |
| GTLB | GitLab Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-GTLB/summary.html) | [風險](companies/us-GTLB/risk_plan.html) | [啟動報告](companies/us-GTLB/initiation.html) |
| HAS | Hasbro | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-HAS/summary.html) | [風險](companies/us-HAS/risk_plan.html) | [啟動報告](companies/us-HAS/initiation.html) |
| HDB | HDFC Bank Limited Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-HDB/summary.html) | [風險](companies/us-HDB/risk_plan.html) | [啟動報告](companies/us-HDB/initiation.html) |
| HQY | HealthEquity | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-HQY/summary.html) | [風險](companies/us-HQY/risk_plan.html) | [啟動報告](companies/us-HQY/initiation.html) |
| IBM | International Business Machines Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-IBM/summary.html) | [風險](companies/us-IBM/risk_plan.html) | [啟動報告](companies/us-IBM/initiation.html) |
| IBRX | ImmunityBio | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-IBRX/summary.html) | [風險](companies/us-IBRX/risk_plan.html) | [啟動報告](companies/us-IBRX/initiation.html) |
| IMNM | Immunome | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-IMNM/summary.html) | [風險](companies/us-IMNM/risk_plan.html) | [啟動報告](companies/us-IMNM/initiation.html) |
| INTU | Intuit Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-INTU/summary.html) | [風險](companies/us-INTU/risk_plan.html) | [啟動報告](companies/us-INTU/initiation.html) |
| KOD | Kodiak Sciences Inc - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-KOD/summary.html) | [風險](companies/us-KOD/risk_plan.html) | [啟動報告](companies/us-KOD/initiation.html) |
| KVYO | Klaviyo | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-KVYO/summary.html) | [風險](companies/us-KVYO/risk_plan.html) | [啟動報告](companies/us-KVYO/initiation.html) |
| LCID | Lucid Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-LCID/summary.html) | [風險](companies/us-LCID/risk_plan.html) | [啟動報告](companies/us-LCID/initiation.html) |
| LNC | Lincoln National Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-LNC/summary.html) | [風險](companies/us-LNC/risk_plan.html) | [啟動報告](companies/us-LNC/initiation.html) |
| LNG | Cheniere Energy | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-LNG/summary.html) | [風險](companies/us-LNG/risk_plan.html) | [啟動報告](companies/us-LNG/initiation.html) |
| LYFT | Lyft | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-LYFT/summary.html) | [風險](companies/us-LYFT/risk_plan.html) | [啟動報告](companies/us-LYFT/initiation.html) |
| MA | Mastercard Incorporated Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-MA/summary.html) | [風險](companies/us-MA/risk_plan.html) | [啟動報告](companies/us-MA/initiation.html) |
| MET | MetLife | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-MET/summary.html) | [風險](companies/us-MET/risk_plan.html) | [啟動報告](companies/us-MET/initiation.html) |
| MOS | Mosaic Company  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-MOS/summary.html) | [風險](companies/us-MOS/risk_plan.html) | [啟動報告](companies/us-MOS/initiation.html) |
| NCNO | nCino | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-NCNO/summary.html) | [風險](companies/us-NCNO/risk_plan.html) | [啟動報告](companies/us-NCNO/initiation.html) |
| NET | Cloudflare | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-NET/summary.html) | [風險](companies/us-NET/risk_plan.html) | [啟動報告](companies/us-NET/initiation.html) |
| NKTR | Nektar Therapeutics - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-NKTR/summary.html) | [風險](companies/us-NKTR/risk_plan.html) | [啟動報告](companies/us-NKTR/initiation.html) |
| NVCR | NovoCure Limited - Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-NVCR/summary.html) | [風險](companies/us-NVCR/risk_plan.html) | [啟動報告](companies/us-NVCR/initiation.html) |
| PAGS | PagSeguro Digital Ltd. Class A Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PAGS/summary.html) | [風險](companies/us-PAGS/risk_plan.html) | [啟動報告](companies/us-PAGS/initiation.html) |
| PAY | Paymentus Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PAY/summary.html) | [風險](companies/us-PAY/risk_plan.html) | [啟動報告](companies/us-PAY/initiation.html) |
| PAYX | Paychex | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PAYX/summary.html) | [風險](companies/us-PAYX/risk_plan.html) | [啟動報告](companies/us-PAYX/initiation.html) |
| PINS | Pinterest | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PINS/summary.html) | [風險](companies/us-PINS/risk_plan.html) | [啟動報告](companies/us-PINS/initiation.html) |
| PM | Philip Morris International Inc Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PM/summary.html) | [風險](companies/us-PM/risk_plan.html) | [啟動報告](companies/us-PM/initiation.html) |
| PPC | Pilgrim's Pride Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PPC/summary.html) | [風險](companies/us-PPC/risk_plan.html) | [啟動報告](companies/us-PPC/initiation.html) |
| PRGS | Progress Software Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PRGS/summary.html) | [風險](companies/us-PRGS/risk_plan.html) | [啟動報告](companies/us-PRGS/initiation.html) |
| PURR | Hyperliquid Strategies Inc - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PURR/summary.html) | [風險](companies/us-PURR/risk_plan.html) | [啟動報告](companies/us-PURR/initiation.html) |
| PWP | Perella Weinberg Partners - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PWP/summary.html) | [風險](companies/us-PWP/risk_plan.html) | [啟動報告](companies/us-PWP/initiation.html) |
| PYPL | PayPal Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PYPL/summary.html) | [風險](companies/us-PYPL/risk_plan.html) | [啟動報告](companies/us-PYPL/initiation.html) |
| QSR | Restaurant Brands International Inc. Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-QSR/summary.html) | [風險](companies/us-QSR/risk_plan.html) | [啟動報告](companies/us-QSR/initiation.html) |
| QTWO | Q2 Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-QTWO/summary.html) | [風險](companies/us-QTWO/risk_plan.html) | [啟動報告](companies/us-QTWO/initiation.html) |
| RBRK | Rubrik | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-RBRK/summary.html) | [風險](companies/us-RBRK/risk_plan.html) | [啟動報告](companies/us-RBRK/initiation.html) |
| RDDT | Reddit | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-RDDT/summary.html) | [風險](companies/us-RDDT/risk_plan.html) | [啟動報告](companies/us-RDDT/initiation.html) |
| REXR | Rexford Industrial Realty | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-REXR/summary.html) | [風險](companies/us-REXR/risk_plan.html) | [啟動報告](companies/us-REXR/initiation.html) |
| RHI | Robert Half Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-RHI/summary.html) | [風險](companies/us-RHI/risk_plan.html) | [啟動報告](companies/us-RHI/initiation.html) |
| RLMD | Relmada Therapeutics | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-RLMD/summary.html) | [風險](companies/us-RLMD/risk_plan.html) | [啟動報告](companies/us-RLMD/initiation.html) |
| RPRX | Royalty Pharma plc - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-RPRX/summary.html) | [風險](companies/us-RPRX/risk_plan.html) | [啟動報告](companies/us-RPRX/initiation.html) |
| S | SentinelOne | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-S/summary.html) | [風險](companies/us-S/risk_plan.html) | [啟動報告](companies/us-S/initiation.html) |
| SCI | Service Corporation International Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SCI/summary.html) | [風險](companies/us-SCI/risk_plan.html) | [啟動報告](companies/us-SCI/initiation.html) |
| SE | Sea Limited American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SE/summary.html) | [風險](companies/us-SE/risk_plan.html) | [啟動報告](companies/us-SE/initiation.html) |
| SHOO | Steven Madden | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SHOO/summary.html) | [風險](companies/us-SHOO/risk_plan.html) | [啟動報告](companies/us-SHOO/initiation.html) |
| SIRI | SiriusXM Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SIRI/summary.html) | [風險](companies/us-SIRI/risk_plan.html) | [啟動報告](companies/us-SIRI/initiation.html) |
| SOFI | SoFi Technologies | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SOFI/summary.html) | [風險](companies/us-SOFI/risk_plan.html) | [啟動報告](companies/us-SOFI/initiation.html) |
| SRPT | Sarepta Therapeutics | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SRPT/summary.html) | [風險](companies/us-SRPT/risk_plan.html) | [啟動報告](companies/us-SRPT/initiation.html) |
| SSRM | SSR Mining Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SSRM/summary.html) | [風險](companies/us-SSRM/risk_plan.html) | [啟動報告](companies/us-SSRM/initiation.html) |
| STNE | StoneCo Ltd. - Class A Common Share | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-STNE/summary.html) | [風險](companies/us-STNE/risk_plan.html) | [啟動報告](companies/us-STNE/initiation.html) |
| SUPN | Supernus Pharmaceuticals | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SUPN/summary.html) | [風險](companies/us-SUPN/risk_plan.html) | [啟動報告](companies/us-SUPN/initiation.html) |
| SYK | Stryker Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SYK/summary.html) | [風險](companies/us-SYK/risk_plan.html) | [啟動報告](companies/us-SYK/initiation.html) |
| TDC | Teradata Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TDC/summary.html) | [風險](companies/us-TDC/risk_plan.html) | [啟動報告](companies/us-TDC/initiation.html) |
| TENB | Tenable Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TENB/summary.html) | [風險](companies/us-TENB/risk_plan.html) | [啟動報告](companies/us-TENB/initiation.html) |
| TNDM | Tandem Diabetes Care | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TNDM/summary.html) | [風險](companies/us-TNDM/risk_plan.html) | [啟動報告](companies/us-TNDM/initiation.html) |
| TOST | Toast | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TOST/summary.html) | [風險](companies/us-TOST/risk_plan.html) | [啟動報告](companies/us-TOST/initiation.html) |
| TRU | TransUnion Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TRU/summary.html) | [風險](companies/us-TRU/risk_plan.html) | [啟動報告](companies/us-TRU/initiation.html) |
| TSN | Tyson Foods | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TSN/summary.html) | [風險](companies/us-TSN/risk_plan.html) | [啟動報告](companies/us-TSN/initiation.html) |
| TXT | Textron Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TXT/summary.html) | [風險](companies/us-TXT/risk_plan.html) | [啟動報告](companies/us-TXT/initiation.html) |
| U | Unity Software Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-U/summary.html) | [風險](companies/us-U/risk_plan.html) | [啟動報告](companies/us-U/initiation.html) |
| V | Visa Inc. | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-V/summary.html) | [風險](companies/us-V/risk_plan.html) | [啟動報告](companies/us-V/initiation.html) |
| VFC | V.F. Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-VFC/summary.html) | [風險](companies/us-VFC/risk_plan.html) | [啟動報告](companies/us-VFC/initiation.html) |
| VOR | Vor Biopharma Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-VOR/summary.html) | [風險](companies/us-VOR/risk_plan.html) | [啟動報告](companies/us-VOR/initiation.html) |
| WAY | Waystar Holding Corp. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-WAY/summary.html) | [風險](companies/us-WAY/risk_plan.html) | [啟動報告](companies/us-WAY/initiation.html) |
| WMT | Walmart Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-WMT/summary.html) | [風險](companies/us-WMT/risk_plan.html) | [啟動報告](companies/us-WMT/initiation.html) |
| XP | XP Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-XP/summary.html) | [風險](companies/us-XP/risk_plan.html) | [啟動報告](companies/us-XP/initiation.html) |
| YELP | Yelp Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 0.01 USD | 2026-06-26 market close | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-YELP/summary.html) | [風險](companies/us-YELP/risk_plan.html) | [啟動報告](companies/us-YELP/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| ADP | [摘要](companies/us-ADP/summary.html) | [公司摘要](companies/us-ADP/tearsheet.html) | [啟動報告](companies/us-ADP/initiation.html) | [風險](companies/us-ADP/risk_plan.html) |
| BMY | [摘要](companies/us-BMY/summary.html) | [公司摘要](companies/us-BMY/tearsheet.html) | [啟動報告](companies/us-BMY/initiation.html) | [風險](companies/us-BMY/risk_plan.html) |
| CCL | [摘要](companies/us-CCL/summary.html) | [公司摘要](companies/us-CCL/tearsheet.html) | [啟動報告](companies/us-CCL/initiation.html) | [風險](companies/us-CCL/risk_plan.html) |
| DDOG | [摘要](companies/us-DDOG/summary.html) | [公司摘要](companies/us-DDOG/tearsheet.html) | [啟動報告](companies/us-DDOG/initiation.html) | [風險](companies/us-DDOG/risk_plan.html) |
| DT | [摘要](companies/us-DT/summary.html) | [公司摘要](companies/us-DT/tearsheet.html) | [啟動報告](companies/us-DT/initiation.html) | [風險](companies/us-DT/risk_plan.html) |
| ELV | [摘要](companies/us-ELV/summary.html) | [公司摘要](companies/us-ELV/tearsheet.html) | [啟動報告](companies/us-ELV/initiation.html) | [風險](companies/us-ELV/risk_plan.html) |
| FLUT | [摘要](companies/us-FLUT/summary.html) | [公司摘要](companies/us-FLUT/tearsheet.html) | [啟動報告](companies/us-FLUT/initiation.html) | [風險](companies/us-FLUT/risk_plan.html) |
| FRSH | [摘要](companies/us-FRSH/summary.html) | [公司摘要](companies/us-FRSH/tearsheet.html) | [啟動報告](companies/us-FRSH/initiation.html) | [風險](companies/us-FRSH/risk_plan.html) |
| GILD | [摘要](companies/us-GILD/summary.html) | [公司摘要](companies/us-GILD/tearsheet.html) | [啟動報告](companies/us-GILD/initiation.html) | [風險](companies/us-GILD/risk_plan.html) |
| JKHY | [摘要](companies/us-JKHY/summary.html) | [公司摘要](companies/us-JKHY/tearsheet.html) | [啟動報告](companies/us-JKHY/initiation.html) | [風險](companies/us-JKHY/risk_plan.html) |
| LULU | [摘要](companies/us-LULU/summary.html) | [公司摘要](companies/us-LULU/tearsheet.html) | [啟動報告](companies/us-LULU/initiation.html) | [風險](companies/us-LULU/risk_plan.html) |
| MARA | [摘要](companies/us-MARA/summary.html) | [公司摘要](companies/us-MARA/tearsheet.html) | [啟動報告](companies/us-MARA/initiation.html) | [風險](companies/us-MARA/risk_plan.html) |
| MCO | [摘要](companies/us-MCO/summary.html) | [公司摘要](companies/us-MCO/tearsheet.html) | [啟動報告](companies/us-MCO/initiation.html) | [風險](companies/us-MCO/risk_plan.html) |
| MRCY | [摘要](companies/us-MRCY/summary.html) | [公司摘要](companies/us-MRCY/tearsheet.html) | [啟動報告](companies/us-MRCY/initiation.html) | [風險](companies/us-MRCY/risk_plan.html) |
| MRSH | [摘要](companies/us-MRSH/summary.html) | [公司摘要](companies/us-MRSH/tearsheet.html) | [啟動報告](companies/us-MRSH/initiation.html) | [風險](companies/us-MRSH/risk_plan.html) |
| MTCH | [摘要](companies/us-MTCH/summary.html) | [公司摘要](companies/us-MTCH/tearsheet.html) | [啟動報告](companies/us-MTCH/initiation.html) | [風險](companies/us-MTCH/risk_plan.html) |
| NTNX | [摘要](companies/us-NTNX/summary.html) | [公司摘要](companies/us-NTNX/tearsheet.html) | [啟動報告](companies/us-NTNX/initiation.html) | [風險](companies/us-NTNX/risk_plan.html) |
| NU | [摘要](companies/us-NU/summary.html) | [公司摘要](companies/us-NU/tearsheet.html) | [啟動報告](companies/us-NU/initiation.html) | [風險](companies/us-NU/risk_plan.html) |
| ORLY | [摘要](companies/us-ORLY/summary.html) | [公司摘要](companies/us-ORLY/tearsheet.html) | [啟動報告](companies/us-ORLY/initiation.html) | [風險](companies/us-ORLY/risk_plan.html) |
| PFG | [摘要](companies/us-PFG/summary.html) | [公司摘要](companies/us-PFG/tearsheet.html) | [啟動報告](companies/us-PFG/initiation.html) | [風險](companies/us-PFG/risk_plan.html) |
| RBLX | [摘要](companies/us-RBLX/summary.html) | [公司摘要](companies/us-RBLX/tearsheet.html) | [啟動報告](companies/us-RBLX/initiation.html) | [風險](companies/us-RBLX/risk_plan.html) |
| RIVN | [摘要](companies/us-RIVN/summary.html) | [公司摘要](companies/us-RIVN/tearsheet.html) | [啟動報告](companies/us-RIVN/initiation.html) | [風險](companies/us-RIVN/risk_plan.html) |
| SCHW | [摘要](companies/us-SCHW/summary.html) | [公司摘要](companies/us-SCHW/tearsheet.html) | [啟動報告](companies/us-SCHW/initiation.html) | [風險](companies/us-SCHW/risk_plan.html) |
| TTAN | [摘要](companies/us-TTAN/summary.html) | [公司摘要](companies/us-TTAN/tearsheet.html) | [啟動報告](companies/us-TTAN/initiation.html) | [風險](companies/us-TTAN/risk_plan.html) |
| UBER | [摘要](companies/us-UBER/summary.html) | [公司摘要](companies/us-UBER/tearsheet.html) | [啟動報告](companies/us-UBER/initiation.html) | [風險](companies/us-UBER/risk_plan.html) |
| VEEV | [摘要](companies/us-VEEV/summary.html) | [公司摘要](companies/us-VEEV/tearsheet.html) | [啟動報告](companies/us-VEEV/initiation.html) | [風險](companies/us-VEEV/risk_plan.html) |
| VRSK | [摘要](companies/us-VRSK/summary.html) | [公司摘要](companies/us-VRSK/tearsheet.html) | [啟動報告](companies/us-VRSK/initiation.html) | [風險](companies/us-VRSK/risk_plan.html) |
| VZ | [摘要](companies/us-VZ/summary.html) | [公司摘要](companies/us-VZ/tearsheet.html) | [啟動報告](companies/us-VZ/initiation.html) | [風險](companies/us-VZ/risk_plan.html) |
| ZS | [摘要](companies/us-ZS/summary.html) | [公司摘要](companies/us-ZS/tearsheet.html) | [啟動報告](companies/us-ZS/initiation.html) | [風險](companies/us-ZS/risk_plan.html) |
| ACGL | [摘要](companies/us-ACGL/summary.html) | [公司摘要](companies/us-ACGL/tearsheet.html) | [啟動報告](companies/us-ACGL/initiation.html) | [風險](companies/us-ACGL/risk_plan.html) |
| ADEA | [摘要](companies/us-ADEA/summary.html) | [公司摘要](companies/us-ADEA/tearsheet.html) | [啟動報告](companies/us-ADEA/initiation.html) | [風險](companies/us-ADEA/risk_plan.html) |
| AEVA | [摘要](companies/us-AEVA/summary.html) | [公司摘要](companies/us-AEVA/tearsheet.html) | [啟動報告](companies/us-AEVA/initiation.html) | [風險](companies/us-AEVA/risk_plan.html) |
| AIG | [摘要](companies/us-AIG/summary.html) | [公司摘要](companies/us-AIG/tearsheet.html) | [啟動報告](companies/us-AIG/initiation.html) | [風險](companies/us-AIG/risk_plan.html) |
| ALOY | [摘要](companies/us-ALOY/summary.html) | [公司摘要](companies/us-ALOY/tearsheet.html) | [啟動報告](companies/us-ALOY/initiation.html) | [風險](companies/us-ALOY/risk_plan.html) |
| AR | [摘要](companies/us-AR/summary.html) | [公司摘要](companies/us-AR/tearsheet.html) | [啟動報告](companies/us-AR/initiation.html) | [風險](companies/us-AR/risk_plan.html) |
| ASAN | [摘要](companies/us-ASAN/summary.html) | [公司摘要](companies/us-ASAN/tearsheet.html) | [啟動報告](companies/us-ASAN/initiation.html) | [風險](companies/us-ASAN/risk_plan.html) |
| ATRC | [摘要](companies/us-ATRC/summary.html) | [公司摘要](companies/us-ATRC/tearsheet.html) | [啟動報告](companies/us-ATRC/initiation.html) | [風險](companies/us-ATRC/risk_plan.html) |
| AVPT | [摘要](companies/us-AVPT/summary.html) | [公司摘要](companies/us-AVPT/tearsheet.html) | [啟動報告](companies/us-AVPT/initiation.html) | [風險](companies/us-AVPT/risk_plan.html) |
| AXSM | [摘要](companies/us-AXSM/summary.html) | [公司摘要](companies/us-AXSM/tearsheet.html) | [啟動報告](companies/us-AXSM/initiation.html) | [風險](companies/us-AXSM/risk_plan.html) |
| BA | [摘要](companies/us-BA/summary.html) | [公司摘要](companies/us-BA/tearsheet.html) | [啟動報告](companies/us-BA/initiation.html) | [風險](companies/us-BA/risk_plan.html) |
| BAND | [摘要](companies/us-BAND/summary.html) | [公司摘要](companies/us-BAND/tearsheet.html) | [啟動報告](companies/us-BAND/initiation.html) | [風險](companies/us-BAND/risk_plan.html) |
| BILL | [摘要](companies/us-BILL/summary.html) | [公司摘要](companies/us-BILL/tearsheet.html) | [啟動報告](companies/us-BILL/initiation.html) | [風險](companies/us-BILL/risk_plan.html) |
| BL | [摘要](companies/us-BL/summary.html) | [公司摘要](companies/us-BL/tearsheet.html) | [啟動報告](companies/us-BL/initiation.html) | [風險](companies/us-BL/risk_plan.html) |
| BOX | [摘要](companies/us-BOX/summary.html) | [公司摘要](companies/us-BOX/tearsheet.html) | [啟動報告](companies/us-BOX/initiation.html) | [風險](companies/us-BOX/risk_plan.html) |
| BRO | [摘要](companies/us-BRO/summary.html) | [公司摘要](companies/us-BRO/tearsheet.html) | [啟動報告](companies/us-BRO/initiation.html) | [風險](companies/us-BRO/risk_plan.html) |
| BTDR | [摘要](companies/us-BTDR/summary.html) | [公司摘要](companies/us-BTDR/tearsheet.html) | [啟動報告](companies/us-BTDR/initiation.html) | [風險](companies/us-BTDR/risk_plan.html) |
| BULL | [摘要](companies/us-BULL/summary.html) | [公司摘要](companies/us-BULL/tearsheet.html) | [啟動報告](companies/us-BULL/initiation.html) | [風險](companies/us-BULL/risk_plan.html) |
| CARG | [摘要](companies/us-CARG/summary.html) | [公司摘要](companies/us-CARG/tearsheet.html) | [啟動報告](companies/us-CARG/initiation.html) | [風險](companies/us-CARG/risk_plan.html) |
| CCC | [摘要](companies/us-CCC/summary.html) | [公司摘要](companies/us-CCC/tearsheet.html) | [啟動報告](companies/us-CCC/initiation.html) | [風險](companies/us-CCC/risk_plan.html) |
| CELC | [摘要](companies/us-CELC/summary.html) | [公司摘要](companies/us-CELC/tearsheet.html) | [啟動報告](companies/us-CELC/initiation.html) | [風險](companies/us-CELC/risk_plan.html) |
| CELH | [摘要](companies/us-CELH/summary.html) | [公司摘要](companies/us-CELH/tearsheet.html) | [啟動報告](companies/us-CELH/initiation.html) | [風險](companies/us-CELH/risk_plan.html) |
| CHDN | [摘要](companies/us-CHDN/summary.html) | [公司摘要](companies/us-CHDN/tearsheet.html) | [啟動報告](companies/us-CHDN/initiation.html) | [風險](companies/us-CHDN/risk_plan.html) |
| CL | [摘要](companies/us-CL/summary.html) | [公司摘要](companies/us-CL/tearsheet.html) | [啟動報告](companies/us-CL/initiation.html) | [風險](companies/us-CL/risk_plan.html) |
| CNM | [摘要](companies/us-CNM/summary.html) | [公司摘要](companies/us-CNM/tearsheet.html) | [啟動報告](companies/us-CNM/initiation.html) | [風險](companies/us-CNM/risk_plan.html) |
| CNX | [摘要](companies/us-CNX/summary.html) | [公司摘要](companies/us-CNX/tearsheet.html) | [啟動報告](companies/us-CNX/initiation.html) | [風險](companies/us-CNX/risk_plan.html) |
| CP | [摘要](companies/us-CP/summary.html) | [公司摘要](companies/us-CP/tearsheet.html) | [啟動報告](companies/us-CP/initiation.html) | [風險](companies/us-CP/risk_plan.html) |
| CPNG | [摘要](companies/us-CPNG/summary.html) | [公司摘要](companies/us-CPNG/tearsheet.html) | [啟動報告](companies/us-CPNG/initiation.html) | [風險](companies/us-CPNG/risk_plan.html) |
| CRNX | [摘要](companies/us-CRNX/summary.html) | [公司摘要](companies/us-CRNX/tearsheet.html) | [啟動報告](companies/us-CRNX/initiation.html) | [風險](companies/us-CRNX/risk_plan.html) |
| CYTK | [摘要](companies/us-CYTK/summary.html) | [公司摘要](companies/us-CYTK/tearsheet.html) | [啟動報告](companies/us-CYTK/initiation.html) | [風險](companies/us-CYTK/risk_plan.html) |
| DBX | [摘要](companies/us-DBX/summary.html) | [公司摘要](companies/us-DBX/tearsheet.html) | [啟動報告](companies/us-DBX/initiation.html) | [風險](companies/us-DBX/risk_plan.html) |
| DKNG | [摘要](companies/us-DKNG/summary.html) | [公司摘要](companies/us-DKNG/tearsheet.html) | [啟動報告](companies/us-DKNG/initiation.html) | [風險](companies/us-DKNG/risk_plan.html) |
| DOCS | [摘要](companies/us-DOCS/summary.html) | [公司摘要](companies/us-DOCS/tearsheet.html) | [啟動報告](companies/us-DOCS/initiation.html) | [風險](companies/us-DOCS/risk_plan.html) |
| DUOL | [摘要](companies/us-DUOL/summary.html) | [公司摘要](companies/us-DUOL/tearsheet.html) | [啟動報告](companies/us-DUOL/initiation.html) | [風險](companies/us-DUOL/risk_plan.html) |
| DV | [摘要](companies/us-DV/summary.html) | [公司摘要](companies/us-DV/tearsheet.html) | [啟動報告](companies/us-DV/initiation.html) | [風險](companies/us-DV/risk_plan.html) |
| DXCM | [摘要](companies/us-DXCM/summary.html) | [公司摘要](companies/us-DXCM/tearsheet.html) | [啟動報告](companies/us-DXCM/initiation.html) | [風險](companies/us-DXCM/risk_plan.html) |
| ELE | [摘要](companies/us-ELE/summary.html) | [公司摘要](companies/us-ELE/tearsheet.html) | [啟動報告](companies/us-ELE/initiation.html) | [風險](companies/us-ELE/risk_plan.html) |
| EQPT | [摘要](companies/us-EQPT/summary.html) | [公司摘要](companies/us-EQPT/tearsheet.html) | [啟動報告](companies/us-EQPT/initiation.html) | [風險](companies/us-EQPT/risk_plan.html) |
| FIVN | [摘要](companies/us-FIVN/summary.html) | [公司摘要](companies/us-FIVN/tearsheet.html) | [啟動報告](companies/us-FIVN/initiation.html) | [風險](companies/us-FIVN/risk_plan.html) |
| FLO | [摘要](companies/us-FLO/summary.html) | [公司摘要](companies/us-FLO/tearsheet.html) | [啟動報告](companies/us-FLO/initiation.html) | [風險](companies/us-FLO/risk_plan.html) |
| FTNT | [摘要](companies/us-FTNT/summary.html) | [公司摘要](companies/us-FTNT/tearsheet.html) | [啟動報告](companies/us-FTNT/initiation.html) | [風險](companies/us-FTNT/risk_plan.html) |
| GEN | [摘要](companies/us-GEN/summary.html) | [公司摘要](companies/us-GEN/tearsheet.html) | [啟動報告](companies/us-GEN/initiation.html) | [風險](companies/us-GEN/risk_plan.html) |
| GLIBK | [摘要](companies/us-GLIBK/summary.html) | [公司摘要](companies/us-GLIBK/tearsheet.html) | [啟動報告](companies/us-GLIBK/initiation.html) | [風險](companies/us-GLIBK/risk_plan.html) |
| GLXY | [摘要](companies/us-GLXY/summary.html) | [公司摘要](companies/us-GLXY/tearsheet.html) | [啟動報告](companies/us-GLXY/initiation.html) | [風險](companies/us-GLXY/risk_plan.html) |
| GME | [摘要](companies/us-GME/summary.html) | [公司摘要](companies/us-GME/tearsheet.html) | [啟動報告](companies/us-GME/initiation.html) | [風險](companies/us-GME/risk_plan.html) |
| GTLB | [摘要](companies/us-GTLB/summary.html) | [公司摘要](companies/us-GTLB/tearsheet.html) | [啟動報告](companies/us-GTLB/initiation.html) | [風險](companies/us-GTLB/risk_plan.html) |
| HAS | [摘要](companies/us-HAS/summary.html) | [公司摘要](companies/us-HAS/tearsheet.html) | [啟動報告](companies/us-HAS/initiation.html) | [風險](companies/us-HAS/risk_plan.html) |
| HDB | [摘要](companies/us-HDB/summary.html) | [公司摘要](companies/us-HDB/tearsheet.html) | [啟動報告](companies/us-HDB/initiation.html) | [風險](companies/us-HDB/risk_plan.html) |
| HQY | [摘要](companies/us-HQY/summary.html) | [公司摘要](companies/us-HQY/tearsheet.html) | [啟動報告](companies/us-HQY/initiation.html) | [風險](companies/us-HQY/risk_plan.html) |
| IBM | [摘要](companies/us-IBM/summary.html) | [公司摘要](companies/us-IBM/tearsheet.html) | [啟動報告](companies/us-IBM/initiation.html) | [風險](companies/us-IBM/risk_plan.html) |
| IBRX | [摘要](companies/us-IBRX/summary.html) | [公司摘要](companies/us-IBRX/tearsheet.html) | [啟動報告](companies/us-IBRX/initiation.html) | [風險](companies/us-IBRX/risk_plan.html) |
| IMNM | [摘要](companies/us-IMNM/summary.html) | [公司摘要](companies/us-IMNM/tearsheet.html) | [啟動報告](companies/us-IMNM/initiation.html) | [風險](companies/us-IMNM/risk_plan.html) |
| INTU | [摘要](companies/us-INTU/summary.html) | [公司摘要](companies/us-INTU/tearsheet.html) | [啟動報告](companies/us-INTU/initiation.html) | [風險](companies/us-INTU/risk_plan.html) |
| KOD | [摘要](companies/us-KOD/summary.html) | [公司摘要](companies/us-KOD/tearsheet.html) | [啟動報告](companies/us-KOD/initiation.html) | [風險](companies/us-KOD/risk_plan.html) |
| KVYO | [摘要](companies/us-KVYO/summary.html) | [公司摘要](companies/us-KVYO/tearsheet.html) | [啟動報告](companies/us-KVYO/initiation.html) | [風險](companies/us-KVYO/risk_plan.html) |
| LCID | [摘要](companies/us-LCID/summary.html) | [公司摘要](companies/us-LCID/tearsheet.html) | [啟動報告](companies/us-LCID/initiation.html) | [風險](companies/us-LCID/risk_plan.html) |
| LNC | [摘要](companies/us-LNC/summary.html) | [公司摘要](companies/us-LNC/tearsheet.html) | [啟動報告](companies/us-LNC/initiation.html) | [風險](companies/us-LNC/risk_plan.html) |
| LNG | [摘要](companies/us-LNG/summary.html) | [公司摘要](companies/us-LNG/tearsheet.html) | [啟動報告](companies/us-LNG/initiation.html) | [風險](companies/us-LNG/risk_plan.html) |
| LYFT | [摘要](companies/us-LYFT/summary.html) | [公司摘要](companies/us-LYFT/tearsheet.html) | [啟動報告](companies/us-LYFT/initiation.html) | [風險](companies/us-LYFT/risk_plan.html) |
| MA | [摘要](companies/us-MA/summary.html) | [公司摘要](companies/us-MA/tearsheet.html) | [啟動報告](companies/us-MA/initiation.html) | [風險](companies/us-MA/risk_plan.html) |
| MET | [摘要](companies/us-MET/summary.html) | [公司摘要](companies/us-MET/tearsheet.html) | [啟動報告](companies/us-MET/initiation.html) | [風險](companies/us-MET/risk_plan.html) |
| MOS | [摘要](companies/us-MOS/summary.html) | [公司摘要](companies/us-MOS/tearsheet.html) | [啟動報告](companies/us-MOS/initiation.html) | [風險](companies/us-MOS/risk_plan.html) |
| NCNO | [摘要](companies/us-NCNO/summary.html) | [公司摘要](companies/us-NCNO/tearsheet.html) | [啟動報告](companies/us-NCNO/initiation.html) | [風險](companies/us-NCNO/risk_plan.html) |
| NET | [摘要](companies/us-NET/summary.html) | [公司摘要](companies/us-NET/tearsheet.html) | [啟動報告](companies/us-NET/initiation.html) | [風險](companies/us-NET/risk_plan.html) |
| NKTR | [摘要](companies/us-NKTR/summary.html) | [公司摘要](companies/us-NKTR/tearsheet.html) | [啟動報告](companies/us-NKTR/initiation.html) | [風險](companies/us-NKTR/risk_plan.html) |
| NVCR | [摘要](companies/us-NVCR/summary.html) | [公司摘要](companies/us-NVCR/tearsheet.html) | [啟動報告](companies/us-NVCR/initiation.html) | [風險](companies/us-NVCR/risk_plan.html) |
| PAGS | [摘要](companies/us-PAGS/summary.html) | [公司摘要](companies/us-PAGS/tearsheet.html) | [啟動報告](companies/us-PAGS/initiation.html) | [風險](companies/us-PAGS/risk_plan.html) |
| PAY | [摘要](companies/us-PAY/summary.html) | [公司摘要](companies/us-PAY/tearsheet.html) | [啟動報告](companies/us-PAY/initiation.html) | [風險](companies/us-PAY/risk_plan.html) |
| PAYX | [摘要](companies/us-PAYX/summary.html) | [公司摘要](companies/us-PAYX/tearsheet.html) | [啟動報告](companies/us-PAYX/initiation.html) | [風險](companies/us-PAYX/risk_plan.html) |
| PINS | [摘要](companies/us-PINS/summary.html) | [公司摘要](companies/us-PINS/tearsheet.html) | [啟動報告](companies/us-PINS/initiation.html) | [風險](companies/us-PINS/risk_plan.html) |
| PM | [摘要](companies/us-PM/summary.html) | [公司摘要](companies/us-PM/tearsheet.html) | [啟動報告](companies/us-PM/initiation.html) | [風險](companies/us-PM/risk_plan.html) |
| PPC | [摘要](companies/us-PPC/summary.html) | [公司摘要](companies/us-PPC/tearsheet.html) | [啟動報告](companies/us-PPC/initiation.html) | [風險](companies/us-PPC/risk_plan.html) |
| PRGS | [摘要](companies/us-PRGS/summary.html) | [公司摘要](companies/us-PRGS/tearsheet.html) | [啟動報告](companies/us-PRGS/initiation.html) | [風險](companies/us-PRGS/risk_plan.html) |
| PURR | [摘要](companies/us-PURR/summary.html) | [公司摘要](companies/us-PURR/tearsheet.html) | [啟動報告](companies/us-PURR/initiation.html) | [風險](companies/us-PURR/risk_plan.html) |
| PWP | [摘要](companies/us-PWP/summary.html) | [公司摘要](companies/us-PWP/tearsheet.html) | [啟動報告](companies/us-PWP/initiation.html) | [風險](companies/us-PWP/risk_plan.html) |
| PYPL | [摘要](companies/us-PYPL/summary.html) | [公司摘要](companies/us-PYPL/tearsheet.html) | [啟動報告](companies/us-PYPL/initiation.html) | [風險](companies/us-PYPL/risk_plan.html) |
| QSR | [摘要](companies/us-QSR/summary.html) | [公司摘要](companies/us-QSR/tearsheet.html) | [啟動報告](companies/us-QSR/initiation.html) | [風險](companies/us-QSR/risk_plan.html) |
| QTWO | [摘要](companies/us-QTWO/summary.html) | [公司摘要](companies/us-QTWO/tearsheet.html) | [啟動報告](companies/us-QTWO/initiation.html) | [風險](companies/us-QTWO/risk_plan.html) |
| RBRK | [摘要](companies/us-RBRK/summary.html) | [公司摘要](companies/us-RBRK/tearsheet.html) | [啟動報告](companies/us-RBRK/initiation.html) | [風險](companies/us-RBRK/risk_plan.html) |
| RDDT | [摘要](companies/us-RDDT/summary.html) | [公司摘要](companies/us-RDDT/tearsheet.html) | [啟動報告](companies/us-RDDT/initiation.html) | [風險](companies/us-RDDT/risk_plan.html) |
| REXR | [摘要](companies/us-REXR/summary.html) | [公司摘要](companies/us-REXR/tearsheet.html) | [啟動報告](companies/us-REXR/initiation.html) | [風險](companies/us-REXR/risk_plan.html) |
| RHI | [摘要](companies/us-RHI/summary.html) | [公司摘要](companies/us-RHI/tearsheet.html) | [啟動報告](companies/us-RHI/initiation.html) | [風險](companies/us-RHI/risk_plan.html) |
| RLMD | [摘要](companies/us-RLMD/summary.html) | [公司摘要](companies/us-RLMD/tearsheet.html) | [啟動報告](companies/us-RLMD/initiation.html) | [風險](companies/us-RLMD/risk_plan.html) |
| RPRX | [摘要](companies/us-RPRX/summary.html) | [公司摘要](companies/us-RPRX/tearsheet.html) | [啟動報告](companies/us-RPRX/initiation.html) | [風險](companies/us-RPRX/risk_plan.html) |
| S | [摘要](companies/us-S/summary.html) | [公司摘要](companies/us-S/tearsheet.html) | [啟動報告](companies/us-S/initiation.html) | [風險](companies/us-S/risk_plan.html) |
| SCI | [摘要](companies/us-SCI/summary.html) | [公司摘要](companies/us-SCI/tearsheet.html) | [啟動報告](companies/us-SCI/initiation.html) | [風險](companies/us-SCI/risk_plan.html) |
| SE | [摘要](companies/us-SE/summary.html) | [公司摘要](companies/us-SE/tearsheet.html) | [啟動報告](companies/us-SE/initiation.html) | [風險](companies/us-SE/risk_plan.html) |
| SHOO | [摘要](companies/us-SHOO/summary.html) | [公司摘要](companies/us-SHOO/tearsheet.html) | [啟動報告](companies/us-SHOO/initiation.html) | [風險](companies/us-SHOO/risk_plan.html) |
| SIRI | [摘要](companies/us-SIRI/summary.html) | [公司摘要](companies/us-SIRI/tearsheet.html) | [啟動報告](companies/us-SIRI/initiation.html) | [風險](companies/us-SIRI/risk_plan.html) |
| SOFI | [摘要](companies/us-SOFI/summary.html) | [公司摘要](companies/us-SOFI/tearsheet.html) | [啟動報告](companies/us-SOFI/initiation.html) | [風險](companies/us-SOFI/risk_plan.html) |
| SRPT | [摘要](companies/us-SRPT/summary.html) | [公司摘要](companies/us-SRPT/tearsheet.html) | [啟動報告](companies/us-SRPT/initiation.html) | [風險](companies/us-SRPT/risk_plan.html) |
| SSRM | [摘要](companies/us-SSRM/summary.html) | [公司摘要](companies/us-SSRM/tearsheet.html) | [啟動報告](companies/us-SSRM/initiation.html) | [風險](companies/us-SSRM/risk_plan.html) |
| STNE | [摘要](companies/us-STNE/summary.html) | [公司摘要](companies/us-STNE/tearsheet.html) | [啟動報告](companies/us-STNE/initiation.html) | [風險](companies/us-STNE/risk_plan.html) |
| SUPN | [摘要](companies/us-SUPN/summary.html) | [公司摘要](companies/us-SUPN/tearsheet.html) | [啟動報告](companies/us-SUPN/initiation.html) | [風險](companies/us-SUPN/risk_plan.html) |
| SYK | [摘要](companies/us-SYK/summary.html) | [公司摘要](companies/us-SYK/tearsheet.html) | [啟動報告](companies/us-SYK/initiation.html) | [風險](companies/us-SYK/risk_plan.html) |
| TDC | [摘要](companies/us-TDC/summary.html) | [公司摘要](companies/us-TDC/tearsheet.html) | [啟動報告](companies/us-TDC/initiation.html) | [風險](companies/us-TDC/risk_plan.html) |
| TENB | [摘要](companies/us-TENB/summary.html) | [公司摘要](companies/us-TENB/tearsheet.html) | [啟動報告](companies/us-TENB/initiation.html) | [風險](companies/us-TENB/risk_plan.html) |
| TNDM | [摘要](companies/us-TNDM/summary.html) | [公司摘要](companies/us-TNDM/tearsheet.html) | [啟動報告](companies/us-TNDM/initiation.html) | [風險](companies/us-TNDM/risk_plan.html) |
| TOST | [摘要](companies/us-TOST/summary.html) | [公司摘要](companies/us-TOST/tearsheet.html) | [啟動報告](companies/us-TOST/initiation.html) | [風險](companies/us-TOST/risk_plan.html) |
| TRU | [摘要](companies/us-TRU/summary.html) | [公司摘要](companies/us-TRU/tearsheet.html) | [啟動報告](companies/us-TRU/initiation.html) | [風險](companies/us-TRU/risk_plan.html) |
| TSN | [摘要](companies/us-TSN/summary.html) | [公司摘要](companies/us-TSN/tearsheet.html) | [啟動報告](companies/us-TSN/initiation.html) | [風險](companies/us-TSN/risk_plan.html) |
| TXT | [摘要](companies/us-TXT/summary.html) | [公司摘要](companies/us-TXT/tearsheet.html) | [啟動報告](companies/us-TXT/initiation.html) | [風險](companies/us-TXT/risk_plan.html) |
| U | [摘要](companies/us-U/summary.html) | [公司摘要](companies/us-U/tearsheet.html) | [啟動報告](companies/us-U/initiation.html) | [風險](companies/us-U/risk_plan.html) |
| V | [摘要](companies/us-V/summary.html) | [公司摘要](companies/us-V/tearsheet.html) | [啟動報告](companies/us-V/initiation.html) | [風險](companies/us-V/risk_plan.html) |
| VFC | [摘要](companies/us-VFC/summary.html) | [公司摘要](companies/us-VFC/tearsheet.html) | [啟動報告](companies/us-VFC/initiation.html) | [風險](companies/us-VFC/risk_plan.html) |
| VOR | [摘要](companies/us-VOR/summary.html) | [公司摘要](companies/us-VOR/tearsheet.html) | [啟動報告](companies/us-VOR/initiation.html) | [風險](companies/us-VOR/risk_plan.html) |
| WAY | [摘要](companies/us-WAY/summary.html) | [公司摘要](companies/us-WAY/tearsheet.html) | [啟動報告](companies/us-WAY/initiation.html) | [風險](companies/us-WAY/risk_plan.html) |
| WMT | [摘要](companies/us-WMT/summary.html) | [公司摘要](companies/us-WMT/tearsheet.html) | [啟動報告](companies/us-WMT/initiation.html) | [風險](companies/us-WMT/risk_plan.html) |
| XP | [摘要](companies/us-XP/summary.html) | [公司摘要](companies/us-XP/tearsheet.html) | [啟動報告](companies/us-XP/initiation.html) | [風險](companies/us-XP/risk_plan.html) |
| YELP | [摘要](companies/us-YELP/summary.html) | [公司摘要](companies/us-YELP/tearsheet.html) | [啟動報告](companies/us-YELP/initiation.html) | [風險](companies/us-YELP/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
