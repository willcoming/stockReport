# StockLoop PEI 完整批次報告 2026-06-24 - US K-line

- 產出時間：2026-06-25 06:46:12
- 標的池檔數：88
- 已具備目前價格與研究狀態的列數：88
- 來源報告：reports/usStock/2026-06-24_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 88 檔標的；來源為 reports/usStock/2026-06-24_us_kline_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：88 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：2 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：74 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- Watch only（僅觀察）：12 檔。僅觀察：可保留在研究宇宙中追蹤，但目前不開模型部位；通常代表持倉健檢為續抱/減碼/需證據補強。
- 研究狀態 partial（證據仍不足）：88 檔。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | us | 88 |
| 分類 | 現在可以買名單 | 14 |
| 分類 | 現在不能買，但值得等買點名單 | 74 |
| 研究標籤 | Not decision-ready（尚未達決策等級） | 2 |
| 研究標籤 | Wait for trigger（等待觸發） | 74 |
| 研究標籤 | Watch only（僅觀察） | 12 |
| 研究狀態 | partial（證據仍不足） | 88 |
| 估值狀態 | not_run（本流程未執行估值模型） | 88 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- 本批次使用 StockLoop K-line report 與本機訊號作為來源，未完成完整 SEC filings、法說、consensus、估值模型與流動性模型查核
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 需以 Public Equity Investing specialist 的完整公司級研究補強後，才可升級為 decision-ready

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | PEI摘要 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AON | Aon plc Class A Ordinary Shares | 現在可以買名單 | Watch only（僅觀察） | 325.48 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-AON/summary.html) | [風險](companies/us-AON/risk_plan.html) | [啟動報告](companies/us-AON/initiation.html) |
| BLDR | Builders FirstSource | 現在可以買名單 | Watch only（僅觀察） | 85.41 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-BLDR/summary.html) | [風險](companies/us-BLDR/risk_plan.html) | [啟動報告](companies/us-BLDR/initiation.html) |
| CMG | Chipotle Mexican Grill | 現在可以買名單 | Watch only（僅觀察） | 31.69 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-CMG/summary.html) | [風險](companies/us-CMG/risk_plan.html) | [啟動報告](companies/us-CMG/initiation.html) |
| COHR | Coherent Corp. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 392.5 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-COHR/summary.html) | [風險](companies/us-COHR/risk_plan.html) | [啟動報告](companies/us-COHR/initiation.html) |
| DHR | Danaher Corporation Common Stock | 現在可以買名單 | Watch only（僅觀察） | 188.87 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-DHR/summary.html) | [風險](companies/us-DHR/risk_plan.html) | [啟動報告](companies/us-DHR/initiation.html) |
| GDDY | GoDaddy Inc. Class A Common Stock | 現在可以買名單 | Watch only（僅觀察） | 81.33 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-GDDY/summary.html) | [風險](companies/us-GDDY/risk_plan.html) | [啟動報告](companies/us-GDDY/initiation.html) |
| HON | Honeywell International Inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 227.42 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-HON/summary.html) | [風險](companies/us-HON/risk_plan.html) | [啟動報告](companies/us-HON/initiation.html) |
| LOW | Lowe's Companies | 現在可以買名單 | Watch only（僅觀察） | 221.45 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-LOW/summary.html) | [風險](companies/us-LOW/risk_plan.html) | [啟動報告](companies/us-LOW/initiation.html) |
| MA | Mastercard Incorporated Common Stock | 現在可以買名單 | Watch only（僅觀察） | 494.41 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-MA/summary.html) | [風險](companies/us-MA/risk_plan.html) | [啟動報告](companies/us-MA/initiation.html) |
| QXO | QXO | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 16.93 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-QXO/summary.html) | [風險](companies/us-QXO/risk_plan.html) | [啟動報告](companies/us-QXO/initiation.html) |
| SHOP | Shopify Inc. - Class A Subordinate Voting Shares | 現在可以買名單 | Not decision-ready（尚未達決策等級） | 114.17 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-SHOP/summary.html) | [風險](companies/us-SHOP/risk_plan.html) | [啟動報告](companies/us-SHOP/initiation.html) |
| TEM | Tempus AI | 現在可以買名單 | Watch only（僅觀察） | 51.94 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-TEM/summary.html) | [風險](companies/us-TEM/risk_plan.html) | [啟動報告](companies/us-TEM/initiation.html) |
| UBER | Uber Technologies | 現在可以買名單 | Watch only（僅觀察） | 73.85 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-UBER/summary.html) | [風險](companies/us-UBER/risk_plan.html) | [啟動報告](companies/us-UBER/initiation.html) |
| VRSK | Verisk Analytics | 現在可以買名單 | Watch only（僅觀察） | 180.06 USD | 2026-06-24 | partial（證據仍不足） | 0%; evidence not decision-ready | [摘要](companies/us-VRSK/summary.html) | [風險](companies/us-VRSK/risk_plan.html) | [啟動報告](companies/us-VRSK/initiation.html) |
| A | Agilent Technologies | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 131.63 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-A/summary.html) | [風險](companies/us-A/risk_plan.html) | [啟動報告](companies/us-A/initiation.html) |
| ACHC | Acadia Healthcare Company | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 24.96 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ACHC/summary.html) | [風險](companies/us-ACHC/risk_plan.html) | [啟動報告](companies/us-ACHC/initiation.html) |
| AMRZ | Amrize Ltd Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 54.53 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-AMRZ/summary.html) | [風險](companies/us-AMRZ/risk_plan.html) | [啟動報告](companies/us-AMRZ/initiation.html) |
| ARR | ARMOUR Residential REIT | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.95 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ARR/summary.html) | [風險](companies/us-ARR/risk_plan.html) | [啟動報告](companies/us-ARR/initiation.html) |
| BBIO | BridgeBio Pharma | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 69.36 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BBIO/summary.html) | [風險](companies/us-BBIO/risk_plan.html) | [啟動報告](companies/us-BBIO/initiation.html) |
| BIRK | Birkenstock Holding plc Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 45.09 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BIRK/summary.html) | [風險](companies/us-BIRK/risk_plan.html) | [啟動報告](companies/us-BIRK/initiation.html) |
| BKNG | Booking Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 181.25 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BKNG/summary.html) | [風險](companies/us-BKNG/risk_plan.html) | [啟動報告](companies/us-BKNG/initiation.html) |
| BULL | Webull Corporation - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.71 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-BULL/summary.html) | [風險](companies/us-BULL/risk_plan.html) | [啟動報告](companies/us-BULL/initiation.html) |
| CAVA | CAVA Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 82.24 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CAVA/summary.html) | [風險](companies/us-CAVA/risk_plan.html) | [啟動報告](companies/us-CAVA/initiation.html) |
| CC | Chemours Company  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 21.17 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CC/summary.html) | [風險](companies/us-CC/risk_plan.html) | [啟動報告](companies/us-CC/initiation.html) |
| CHWY | Chewy | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.01 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CHWY/summary.html) | [風險](companies/us-CHWY/risk_plan.html) | [啟動報告](companies/us-CHWY/initiation.html) |
| CLX | Clorox Company  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 95.38 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CLX/summary.html) | [風險](companies/us-CLX/risk_plan.html) | [啟動報告](companies/us-CLX/initiation.html) |
| CNH | CNH Industrial N.V. Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.31 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CNH/summary.html) | [風險](companies/us-CNH/risk_plan.html) | [啟動報告](companies/us-CNH/initiation.html) |
| COO | The Cooper Companies | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 68.83 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-COO/summary.html) | [風險](companies/us-COO/risk_plan.html) | [啟動報告](companies/us-COO/initiation.html) |
| CPB | The Campbell's Company - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 22.24 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CPB/summary.html) | [風險](companies/us-CPB/risk_plan.html) | [啟動報告](companies/us-CPB/initiation.html) |
| CTRI | Centuri Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 31.45 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CTRI/summary.html) | [風險](companies/us-CTRI/risk_plan.html) | [啟動報告](companies/us-CTRI/initiation.html) |
| CVNA | Carvana Co. Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 67.91 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CVNA/summary.html) | [風險](companies/us-CVNA/risk_plan.html) | [啟動報告](companies/us-CVNA/initiation.html) |
| CVS | CVS Health Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 101.87 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-CVS/summary.html) | [風險](companies/us-CVS/risk_plan.html) | [啟動報告](companies/us-CVS/initiation.html) |
| DX | Dynex Capital | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 13.01 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-DX/summary.html) | [風險](companies/us-DX/risk_plan.html) | [啟動報告](companies/us-DX/initiation.html) |
| ELAN | Elanco Animal Health Incorporated Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 23.96 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-ELAN/summary.html) | [風險](companies/us-ELAN/risk_plan.html) | [啟動報告](companies/us-ELAN/initiation.html) |
| EXEL | Exelixis | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 52.87 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-EXEL/summary.html) | [風險](companies/us-EXEL/risk_plan.html) | [啟動報告](companies/us-EXEL/initiation.html) |
| FAST | Fastenal Company - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 46.26 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-FAST/summary.html) | [風險](companies/us-FAST/risk_plan.html) | [啟動報告](companies/us-FAST/initiation.html) |
| FBIN | Fortune Brands Innovations | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 44.65 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-FBIN/summary.html) | [風險](companies/us-FBIN/risk_plan.html) | [啟動報告](companies/us-FBIN/initiation.html) |
| FND | Floor & Decor Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 56.94 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-FND/summary.html) | [風險](companies/us-FND/risk_plan.html) | [啟動報告](companies/us-FND/initiation.html) |
| FOUR | Shift4 Payments | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 44.22 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-FOUR/summary.html) | [風險](companies/us-FOUR/risk_plan.html) | [啟動報告](companies/us-FOUR/initiation.html) |
| FRSH | Freshworks Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 9.37 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-FRSH/summary.html) | [風險](companies/us-FRSH/risk_plan.html) | [啟動報告](companies/us-FRSH/initiation.html) |
| FWONK | Liberty Media Corporation - Series C Liberty Formula One Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 90.03 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-FWONK/summary.html) | [風險](companies/us-FWONK/risk_plan.html) | [啟動報告](companies/us-FWONK/initiation.html) |
| GNTX | Gentex Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 25.04 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-GNTX/summary.html) | [風險](companies/us-GNTX/risk_plan.html) | [啟動報告](companies/us-GNTX/initiation.html) |
| GPK | Graphic Packaging Holding Company | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.77 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-GPK/summary.html) | [風險](companies/us-GPK/risk_plan.html) | [啟動報告](companies/us-GPK/initiation.html) |
| GT | The Goodyear Tire & Rubber Company - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.29 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-GT/summary.html) | [風險](companies/us-GT/risk_plan.html) | [啟動報告](companies/us-GT/initiation.html) |
| GTLB | GitLab Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 28.27 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-GTLB/summary.html) | [風險](companies/us-GTLB/risk_plan.html) | [啟動報告](companies/us-GTLB/initiation.html) |
| GXO | GXO Logistics | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 49.98 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-GXO/summary.html) | [風險](companies/us-GXO/risk_plan.html) | [啟動報告](companies/us-GXO/initiation.html) |
| HD | Home Depot | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 342.86 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-HD/summary.html) | [風險](companies/us-HD/risk_plan.html) | [啟動報告](companies/us-HD/initiation.html) |
| HLN | Haleon plc American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 9.23 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-HLN/summary.html) | [風險](companies/us-HLN/risk_plan.html) | [啟動報告](companies/us-HLN/initiation.html) |
| INMD | InMode Ltd. - Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.79 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-INMD/summary.html) | [風險](companies/us-INMD/risk_plan.html) | [啟動報告](companies/us-INMD/initiation.html) |
| IR | Ingersoll Rand Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 78.32 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-IR/summary.html) | [風險](companies/us-IR/risk_plan.html) | [啟動報告](companies/us-IR/initiation.html) |
| KNX | Knight-Swift Transportation Holdings Inc. | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 74.52 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-KNX/summary.html) | [風險](companies/us-KNX/risk_plan.html) | [啟動報告](companies/us-KNX/initiation.html) |
| LEN | Lennar Corporation Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 92.95 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-LEN/summary.html) | [風險](companies/us-LEN/risk_plan.html) | [啟動報告](companies/us-LEN/initiation.html) |
| LIN | Linde plc - Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 515.73 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-LIN/summary.html) | [風險](companies/us-LIN/risk_plan.html) | [啟動報告](companies/us-LIN/initiation.html) |
| LKQ | LKQ Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 26.23 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-LKQ/summary.html) | [風險](companies/us-LKQ/risk_plan.html) | [啟動報告](companies/us-LKQ/initiation.html) |
| LULU | lululemon athletica inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 113.09 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-LULU/summary.html) | [風險](companies/us-LULU/risk_plan.html) | [啟動報告](companies/us-LULU/initiation.html) |
| LYFT | Lyft | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.4 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-LYFT/summary.html) | [風險](companies/us-LYFT/risk_plan.html) | [啟動報告](companies/us-LYFT/initiation.html) |
| MKC | McCormick & Company | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 47.6 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-MKC/summary.html) | [風險](companies/us-MKC/risk_plan.html) | [啟動報告](companies/us-MKC/initiation.html) |
| MNST | Monster Beverage Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 94.7 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-MNST/summary.html) | [風險](companies/us-MNST/risk_plan.html) | [啟動報告](companies/us-MNST/initiation.html) |
| MTCH | Match Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.34 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-MTCH/summary.html) | [風險](companies/us-MTCH/risk_plan.html) | [啟動報告](companies/us-MTCH/initiation.html) |
| NEE | NextEra Energy | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 87.62 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-NEE/summary.html) | [風險](companies/us-NEE/risk_plan.html) | [啟動報告](companies/us-NEE/initiation.html) |
| NGG | National Grid Transco | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 82.83 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-NGG/summary.html) | [風險](companies/us-NGG/risk_plan.html) | [啟動報告](companies/us-NGG/initiation.html) |
| NNE | Nano Nuclear Energy Inc. - common stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 23.15 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-NNE/summary.html) | [風險](companies/us-NNE/risk_plan.html) | [啟動報告](companies/us-NNE/initiation.html) |
| OTIS | Otis Worldwide Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 72.63 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-OTIS/summary.html) | [風險](companies/us-OTIS/risk_plan.html) | [啟動報告](companies/us-OTIS/initiation.html) |
| PCAR | PACCAR Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 117.03 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PCAR/summary.html) | [風險](companies/us-PCAR/risk_plan.html) | [啟動報告](companies/us-PCAR/initiation.html) |
| PDI | PIMCO Dynamic Income Fund Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.4 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PDI/summary.html) | [風險](companies/us-PDI/risk_plan.html) | [啟動報告](companies/us-PDI/initiation.html) |
| PINS | Pinterest | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.86 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PINS/summary.html) | [風險](companies/us-PINS/risk_plan.html) | [啟動報告](companies/us-PINS/initiation.html) |
| PNR | Pentair plc. Ordinary Share | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 74.81 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PNR/summary.html) | [風險](companies/us-PNR/risk_plan.html) | [啟動報告](companies/us-PNR/initiation.html) |
| PRIM | Primoris Services Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 92.69 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PRIM/summary.html) | [風險](companies/us-PRIM/risk_plan.html) | [啟動報告](companies/us-PRIM/initiation.html) |
| PTON | Peloton Interactive | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 5.73 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PTON/summary.html) | [風險](companies/us-PTON/risk_plan.html) | [啟動報告](companies/us-PTON/initiation.html) |
| PYPL | PayPal Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 42.48 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-PYPL/summary.html) | [風險](companies/us-PYPL/risk_plan.html) | [啟動報告](companies/us-PYPL/initiation.html) |
| RKT | Rocket Companies | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.73 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-RKT/summary.html) | [風險](companies/us-RKT/risk_plan.html) | [啟動報告](companies/us-RKT/initiation.html) |
| RUN | Sunrun Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.42 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-RUN/summary.html) | [風險](companies/us-RUN/risk_plan.html) | [啟動報告](companies/us-RUN/initiation.html) |
| SBRA | Sabra Health Care REIT | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.09 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SBRA/summary.html) | [風險](companies/us-SBRA/risk_plan.html) | [啟動報告](companies/us-SBRA/initiation.html) |
| SBS | Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 5.53 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-SBS/summary.html) | [風險](companies/us-SBS/risk_plan.html) | [啟動報告](companies/us-SBS/initiation.html) |
| TAP | Molson Coors Beverage Company Class B Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 40.53 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TAP/summary.html) | [風險](companies/us-TAP/risk_plan.html) | [啟動報告](companies/us-TAP/initiation.html) |
| TCOM | Trip.com Group Limited - American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 46.3 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TCOM/summary.html) | [風險](companies/us-TCOM/risk_plan.html) | [啟動報告](companies/us-TCOM/initiation.html) |
| TEVA | Teva Pharmaceutical Industries Limited American Depositary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 34.22 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TEVA/summary.html) | [風險](companies/us-TEVA/risk_plan.html) | [啟動報告](companies/us-TEVA/initiation.html) |
| TOST | Toast | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 26.02 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TOST/summary.html) | [風險](companies/us-TOST/risk_plan.html) | [啟動報告](companies/us-TOST/initiation.html) |
| TRMB | Trimble Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 50.14 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TRMB/summary.html) | [風險](companies/us-TRMB/risk_plan.html) | [啟動報告](companies/us-TRMB/initiation.html) |
| TRU | TransUnion Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 68 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-TRU/summary.html) | [風險](companies/us-TRU/risk_plan.html) | [啟動報告](companies/us-TRU/initiation.html) |
| UAA | Under Armour | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.06 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-UAA/summary.html) | [風險](companies/us-UAA/risk_plan.html) | [啟動報告](companies/us-UAA/initiation.html) |
| VFC | V.F. Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 17.22 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-VFC/summary.html) | [風險](companies/us-VFC/risk_plan.html) | [啟動報告](companies/us-VFC/initiation.html) |
| VRT | Vertiv Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 316.43 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-VRT/summary.html) | [風險](companies/us-VRT/risk_plan.html) | [啟動報告](companies/us-VRT/initiation.html) |
| VTRS | Viatris Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 15.93 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-VTRS/summary.html) | [風險](companies/us-VTRS/risk_plan.html) | [啟動報告](companies/us-VTRS/initiation.html) |
| WBD | Warner Bros. Discovery | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 27.2 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-WBD/summary.html) | [風險](companies/us-WBD/risk_plan.html) | [啟動報告](companies/us-WBD/initiation.html) |
| WEN | Wendy's Company  - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 7.86 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-WEN/summary.html) | [風險](companies/us-WEN/risk_plan.html) | [啟動報告](companies/us-WEN/initiation.html) |
| WRB | W.R. Berkley Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 70.05 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-WRB/summary.html) | [風險](companies/us-WRB/risk_plan.html) | [啟動報告](companies/us-WRB/initiation.html) |
| XP | XP Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 15.56 USD | 2026-06-24 | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [摘要](companies/us-XP/summary.html) | [風險](companies/us-XP/risk_plan.html) | [啟動報告](companies/us-XP/initiation.html) |

## 研究檔案索引

| 代號 | Markdown摘要 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- | --- |
| AON | [摘要](companies/us-AON/summary.html) | [公司摘要](companies/us-AON/tearsheet.html) | [啟動報告](companies/us-AON/initiation.html) | [風險](companies/us-AON/risk_plan.html) |
| BLDR | [摘要](companies/us-BLDR/summary.html) | [公司摘要](companies/us-BLDR/tearsheet.html) | [啟動報告](companies/us-BLDR/initiation.html) | [風險](companies/us-BLDR/risk_plan.html) |
| CMG | [摘要](companies/us-CMG/summary.html) | [公司摘要](companies/us-CMG/tearsheet.html) | [啟動報告](companies/us-CMG/initiation.html) | [風險](companies/us-CMG/risk_plan.html) |
| COHR | [摘要](companies/us-COHR/summary.html) | [公司摘要](companies/us-COHR/tearsheet.html) | [啟動報告](companies/us-COHR/initiation.html) | [風險](companies/us-COHR/risk_plan.html) |
| DHR | [摘要](companies/us-DHR/summary.html) | [公司摘要](companies/us-DHR/tearsheet.html) | [啟動報告](companies/us-DHR/initiation.html) | [風險](companies/us-DHR/risk_plan.html) |
| GDDY | [摘要](companies/us-GDDY/summary.html) | [公司摘要](companies/us-GDDY/tearsheet.html) | [啟動報告](companies/us-GDDY/initiation.html) | [風險](companies/us-GDDY/risk_plan.html) |
| HON | [摘要](companies/us-HON/summary.html) | [公司摘要](companies/us-HON/tearsheet.html) | [啟動報告](companies/us-HON/initiation.html) | [風險](companies/us-HON/risk_plan.html) |
| LOW | [摘要](companies/us-LOW/summary.html) | [公司摘要](companies/us-LOW/tearsheet.html) | [啟動報告](companies/us-LOW/initiation.html) | [風險](companies/us-LOW/risk_plan.html) |
| MA | [摘要](companies/us-MA/summary.html) | [公司摘要](companies/us-MA/tearsheet.html) | [啟動報告](companies/us-MA/initiation.html) | [風險](companies/us-MA/risk_plan.html) |
| QXO | [摘要](companies/us-QXO/summary.html) | [公司摘要](companies/us-QXO/tearsheet.html) | [啟動報告](companies/us-QXO/initiation.html) | [風險](companies/us-QXO/risk_plan.html) |
| SHOP | [摘要](companies/us-SHOP/summary.html) | [公司摘要](companies/us-SHOP/tearsheet.html) | [啟動報告](companies/us-SHOP/initiation.html) | [風險](companies/us-SHOP/risk_plan.html) |
| TEM | [摘要](companies/us-TEM/summary.html) | [公司摘要](companies/us-TEM/tearsheet.html) | [啟動報告](companies/us-TEM/initiation.html) | [風險](companies/us-TEM/risk_plan.html) |
| UBER | [摘要](companies/us-UBER/summary.html) | [公司摘要](companies/us-UBER/tearsheet.html) | [啟動報告](companies/us-UBER/initiation.html) | [風險](companies/us-UBER/risk_plan.html) |
| VRSK | [摘要](companies/us-VRSK/summary.html) | [公司摘要](companies/us-VRSK/tearsheet.html) | [啟動報告](companies/us-VRSK/initiation.html) | [風險](companies/us-VRSK/risk_plan.html) |
| A | [摘要](companies/us-A/summary.html) | [公司摘要](companies/us-A/tearsheet.html) | [啟動報告](companies/us-A/initiation.html) | [風險](companies/us-A/risk_plan.html) |
| ACHC | [摘要](companies/us-ACHC/summary.html) | [公司摘要](companies/us-ACHC/tearsheet.html) | [啟動報告](companies/us-ACHC/initiation.html) | [風險](companies/us-ACHC/risk_plan.html) |
| AMRZ | [摘要](companies/us-AMRZ/summary.html) | [公司摘要](companies/us-AMRZ/tearsheet.html) | [啟動報告](companies/us-AMRZ/initiation.html) | [風險](companies/us-AMRZ/risk_plan.html) |
| ARR | [摘要](companies/us-ARR/summary.html) | [公司摘要](companies/us-ARR/tearsheet.html) | [啟動報告](companies/us-ARR/initiation.html) | [風險](companies/us-ARR/risk_plan.html) |
| BBIO | [摘要](companies/us-BBIO/summary.html) | [公司摘要](companies/us-BBIO/tearsheet.html) | [啟動報告](companies/us-BBIO/initiation.html) | [風險](companies/us-BBIO/risk_plan.html) |
| BIRK | [摘要](companies/us-BIRK/summary.html) | [公司摘要](companies/us-BIRK/tearsheet.html) | [啟動報告](companies/us-BIRK/initiation.html) | [風險](companies/us-BIRK/risk_plan.html) |
| BKNG | [摘要](companies/us-BKNG/summary.html) | [公司摘要](companies/us-BKNG/tearsheet.html) | [啟動報告](companies/us-BKNG/initiation.html) | [風險](companies/us-BKNG/risk_plan.html) |
| BULL | [摘要](companies/us-BULL/summary.html) | [公司摘要](companies/us-BULL/tearsheet.html) | [啟動報告](companies/us-BULL/initiation.html) | [風險](companies/us-BULL/risk_plan.html) |
| CAVA | [摘要](companies/us-CAVA/summary.html) | [公司摘要](companies/us-CAVA/tearsheet.html) | [啟動報告](companies/us-CAVA/initiation.html) | [風險](companies/us-CAVA/risk_plan.html) |
| CC | [摘要](companies/us-CC/summary.html) | [公司摘要](companies/us-CC/tearsheet.html) | [啟動報告](companies/us-CC/initiation.html) | [風險](companies/us-CC/risk_plan.html) |
| CHWY | [摘要](companies/us-CHWY/summary.html) | [公司摘要](companies/us-CHWY/tearsheet.html) | [啟動報告](companies/us-CHWY/initiation.html) | [風險](companies/us-CHWY/risk_plan.html) |
| CLX | [摘要](companies/us-CLX/summary.html) | [公司摘要](companies/us-CLX/tearsheet.html) | [啟動報告](companies/us-CLX/initiation.html) | [風險](companies/us-CLX/risk_plan.html) |
| CNH | [摘要](companies/us-CNH/summary.html) | [公司摘要](companies/us-CNH/tearsheet.html) | [啟動報告](companies/us-CNH/initiation.html) | [風險](companies/us-CNH/risk_plan.html) |
| COO | [摘要](companies/us-COO/summary.html) | [公司摘要](companies/us-COO/tearsheet.html) | [啟動報告](companies/us-COO/initiation.html) | [風險](companies/us-COO/risk_plan.html) |
| CPB | [摘要](companies/us-CPB/summary.html) | [公司摘要](companies/us-CPB/tearsheet.html) | [啟動報告](companies/us-CPB/initiation.html) | [風險](companies/us-CPB/risk_plan.html) |
| CTRI | [摘要](companies/us-CTRI/summary.html) | [公司摘要](companies/us-CTRI/tearsheet.html) | [啟動報告](companies/us-CTRI/initiation.html) | [風險](companies/us-CTRI/risk_plan.html) |
| CVNA | [摘要](companies/us-CVNA/summary.html) | [公司摘要](companies/us-CVNA/tearsheet.html) | [啟動報告](companies/us-CVNA/initiation.html) | [風險](companies/us-CVNA/risk_plan.html) |
| CVS | [摘要](companies/us-CVS/summary.html) | [公司摘要](companies/us-CVS/tearsheet.html) | [啟動報告](companies/us-CVS/initiation.html) | [風險](companies/us-CVS/risk_plan.html) |
| DX | [摘要](companies/us-DX/summary.html) | [公司摘要](companies/us-DX/tearsheet.html) | [啟動報告](companies/us-DX/initiation.html) | [風險](companies/us-DX/risk_plan.html) |
| ELAN | [摘要](companies/us-ELAN/summary.html) | [公司摘要](companies/us-ELAN/tearsheet.html) | [啟動報告](companies/us-ELAN/initiation.html) | [風險](companies/us-ELAN/risk_plan.html) |
| EXEL | [摘要](companies/us-EXEL/summary.html) | [公司摘要](companies/us-EXEL/tearsheet.html) | [啟動報告](companies/us-EXEL/initiation.html) | [風險](companies/us-EXEL/risk_plan.html) |
| FAST | [摘要](companies/us-FAST/summary.html) | [公司摘要](companies/us-FAST/tearsheet.html) | [啟動報告](companies/us-FAST/initiation.html) | [風險](companies/us-FAST/risk_plan.html) |
| FBIN | [摘要](companies/us-FBIN/summary.html) | [公司摘要](companies/us-FBIN/tearsheet.html) | [啟動報告](companies/us-FBIN/initiation.html) | [風險](companies/us-FBIN/risk_plan.html) |
| FND | [摘要](companies/us-FND/summary.html) | [公司摘要](companies/us-FND/tearsheet.html) | [啟動報告](companies/us-FND/initiation.html) | [風險](companies/us-FND/risk_plan.html) |
| FOUR | [摘要](companies/us-FOUR/summary.html) | [公司摘要](companies/us-FOUR/tearsheet.html) | [啟動報告](companies/us-FOUR/initiation.html) | [風險](companies/us-FOUR/risk_plan.html) |
| FRSH | [摘要](companies/us-FRSH/summary.html) | [公司摘要](companies/us-FRSH/tearsheet.html) | [啟動報告](companies/us-FRSH/initiation.html) | [風險](companies/us-FRSH/risk_plan.html) |
| FWONK | [摘要](companies/us-FWONK/summary.html) | [公司摘要](companies/us-FWONK/tearsheet.html) | [啟動報告](companies/us-FWONK/initiation.html) | [風險](companies/us-FWONK/risk_plan.html) |
| GNTX | [摘要](companies/us-GNTX/summary.html) | [公司摘要](companies/us-GNTX/tearsheet.html) | [啟動報告](companies/us-GNTX/initiation.html) | [風險](companies/us-GNTX/risk_plan.html) |
| GPK | [摘要](companies/us-GPK/summary.html) | [公司摘要](companies/us-GPK/tearsheet.html) | [啟動報告](companies/us-GPK/initiation.html) | [風險](companies/us-GPK/risk_plan.html) |
| GT | [摘要](companies/us-GT/summary.html) | [公司摘要](companies/us-GT/tearsheet.html) | [啟動報告](companies/us-GT/initiation.html) | [風險](companies/us-GT/risk_plan.html) |
| GTLB | [摘要](companies/us-GTLB/summary.html) | [公司摘要](companies/us-GTLB/tearsheet.html) | [啟動報告](companies/us-GTLB/initiation.html) | [風險](companies/us-GTLB/risk_plan.html) |
| GXO | [摘要](companies/us-GXO/summary.html) | [公司摘要](companies/us-GXO/tearsheet.html) | [啟動報告](companies/us-GXO/initiation.html) | [風險](companies/us-GXO/risk_plan.html) |
| HD | [摘要](companies/us-HD/summary.html) | [公司摘要](companies/us-HD/tearsheet.html) | [啟動報告](companies/us-HD/initiation.html) | [風險](companies/us-HD/risk_plan.html) |
| HLN | [摘要](companies/us-HLN/summary.html) | [公司摘要](companies/us-HLN/tearsheet.html) | [啟動報告](companies/us-HLN/initiation.html) | [風險](companies/us-HLN/risk_plan.html) |
| INMD | [摘要](companies/us-INMD/summary.html) | [公司摘要](companies/us-INMD/tearsheet.html) | [啟動報告](companies/us-INMD/initiation.html) | [風險](companies/us-INMD/risk_plan.html) |
| IR | [摘要](companies/us-IR/summary.html) | [公司摘要](companies/us-IR/tearsheet.html) | [啟動報告](companies/us-IR/initiation.html) | [風險](companies/us-IR/risk_plan.html) |
| KNX | [摘要](companies/us-KNX/summary.html) | [公司摘要](companies/us-KNX/tearsheet.html) | [啟動報告](companies/us-KNX/initiation.html) | [風險](companies/us-KNX/risk_plan.html) |
| LEN | [摘要](companies/us-LEN/summary.html) | [公司摘要](companies/us-LEN/tearsheet.html) | [啟動報告](companies/us-LEN/initiation.html) | [風險](companies/us-LEN/risk_plan.html) |
| LIN | [摘要](companies/us-LIN/summary.html) | [公司摘要](companies/us-LIN/tearsheet.html) | [啟動報告](companies/us-LIN/initiation.html) | [風險](companies/us-LIN/risk_plan.html) |
| LKQ | [摘要](companies/us-LKQ/summary.html) | [公司摘要](companies/us-LKQ/tearsheet.html) | [啟動報告](companies/us-LKQ/initiation.html) | [風險](companies/us-LKQ/risk_plan.html) |
| LULU | [摘要](companies/us-LULU/summary.html) | [公司摘要](companies/us-LULU/tearsheet.html) | [啟動報告](companies/us-LULU/initiation.html) | [風險](companies/us-LULU/risk_plan.html) |
| LYFT | [摘要](companies/us-LYFT/summary.html) | [公司摘要](companies/us-LYFT/tearsheet.html) | [啟動報告](companies/us-LYFT/initiation.html) | [風險](companies/us-LYFT/risk_plan.html) |
| MKC | [摘要](companies/us-MKC/summary.html) | [公司摘要](companies/us-MKC/tearsheet.html) | [啟動報告](companies/us-MKC/initiation.html) | [風險](companies/us-MKC/risk_plan.html) |
| MNST | [摘要](companies/us-MNST/summary.html) | [公司摘要](companies/us-MNST/tearsheet.html) | [啟動報告](companies/us-MNST/initiation.html) | [風險](companies/us-MNST/risk_plan.html) |
| MTCH | [摘要](companies/us-MTCH/summary.html) | [公司摘要](companies/us-MTCH/tearsheet.html) | [啟動報告](companies/us-MTCH/initiation.html) | [風險](companies/us-MTCH/risk_plan.html) |
| NEE | [摘要](companies/us-NEE/summary.html) | [公司摘要](companies/us-NEE/tearsheet.html) | [啟動報告](companies/us-NEE/initiation.html) | [風險](companies/us-NEE/risk_plan.html) |
| NGG | [摘要](companies/us-NGG/summary.html) | [公司摘要](companies/us-NGG/tearsheet.html) | [啟動報告](companies/us-NGG/initiation.html) | [風險](companies/us-NGG/risk_plan.html) |
| NNE | [摘要](companies/us-NNE/summary.html) | [公司摘要](companies/us-NNE/tearsheet.html) | [啟動報告](companies/us-NNE/initiation.html) | [風險](companies/us-NNE/risk_plan.html) |
| OTIS | [摘要](companies/us-OTIS/summary.html) | [公司摘要](companies/us-OTIS/tearsheet.html) | [啟動報告](companies/us-OTIS/initiation.html) | [風險](companies/us-OTIS/risk_plan.html) |
| PCAR | [摘要](companies/us-PCAR/summary.html) | [公司摘要](companies/us-PCAR/tearsheet.html) | [啟動報告](companies/us-PCAR/initiation.html) | [風險](companies/us-PCAR/risk_plan.html) |
| PDI | [摘要](companies/us-PDI/summary.html) | [公司摘要](companies/us-PDI/tearsheet.html) | [啟動報告](companies/us-PDI/initiation.html) | [風險](companies/us-PDI/risk_plan.html) |
| PINS | [摘要](companies/us-PINS/summary.html) | [公司摘要](companies/us-PINS/tearsheet.html) | [啟動報告](companies/us-PINS/initiation.html) | [風險](companies/us-PINS/risk_plan.html) |
| PNR | [摘要](companies/us-PNR/summary.html) | [公司摘要](companies/us-PNR/tearsheet.html) | [啟動報告](companies/us-PNR/initiation.html) | [風險](companies/us-PNR/risk_plan.html) |
| PRIM | [摘要](companies/us-PRIM/summary.html) | [公司摘要](companies/us-PRIM/tearsheet.html) | [啟動報告](companies/us-PRIM/initiation.html) | [風險](companies/us-PRIM/risk_plan.html) |
| PTON | [摘要](companies/us-PTON/summary.html) | [公司摘要](companies/us-PTON/tearsheet.html) | [啟動報告](companies/us-PTON/initiation.html) | [風險](companies/us-PTON/risk_plan.html) |
| PYPL | [摘要](companies/us-PYPL/summary.html) | [公司摘要](companies/us-PYPL/tearsheet.html) | [啟動報告](companies/us-PYPL/initiation.html) | [風險](companies/us-PYPL/risk_plan.html) |
| RKT | [摘要](companies/us-RKT/summary.html) | [公司摘要](companies/us-RKT/tearsheet.html) | [啟動報告](companies/us-RKT/initiation.html) | [風險](companies/us-RKT/risk_plan.html) |
| RUN | [摘要](companies/us-RUN/summary.html) | [公司摘要](companies/us-RUN/tearsheet.html) | [啟動報告](companies/us-RUN/initiation.html) | [風險](companies/us-RUN/risk_plan.html) |
| SBRA | [摘要](companies/us-SBRA/summary.html) | [公司摘要](companies/us-SBRA/tearsheet.html) | [啟動報告](companies/us-SBRA/initiation.html) | [風險](companies/us-SBRA/risk_plan.html) |
| SBS | [摘要](companies/us-SBS/summary.html) | [公司摘要](companies/us-SBS/tearsheet.html) | [啟動報告](companies/us-SBS/initiation.html) | [風險](companies/us-SBS/risk_plan.html) |
| TAP | [摘要](companies/us-TAP/summary.html) | [公司摘要](companies/us-TAP/tearsheet.html) | [啟動報告](companies/us-TAP/initiation.html) | [風險](companies/us-TAP/risk_plan.html) |
| TCOM | [摘要](companies/us-TCOM/summary.html) | [公司摘要](companies/us-TCOM/tearsheet.html) | [啟動報告](companies/us-TCOM/initiation.html) | [風險](companies/us-TCOM/risk_plan.html) |
| TEVA | [摘要](companies/us-TEVA/summary.html) | [公司摘要](companies/us-TEVA/tearsheet.html) | [啟動報告](companies/us-TEVA/initiation.html) | [風險](companies/us-TEVA/risk_plan.html) |
| TOST | [摘要](companies/us-TOST/summary.html) | [公司摘要](companies/us-TOST/tearsheet.html) | [啟動報告](companies/us-TOST/initiation.html) | [風險](companies/us-TOST/risk_plan.html) |
| TRMB | [摘要](companies/us-TRMB/summary.html) | [公司摘要](companies/us-TRMB/tearsheet.html) | [啟動報告](companies/us-TRMB/initiation.html) | [風險](companies/us-TRMB/risk_plan.html) |
| TRU | [摘要](companies/us-TRU/summary.html) | [公司摘要](companies/us-TRU/tearsheet.html) | [啟動報告](companies/us-TRU/initiation.html) | [風險](companies/us-TRU/risk_plan.html) |
| UAA | [摘要](companies/us-UAA/summary.html) | [公司摘要](companies/us-UAA/tearsheet.html) | [啟動報告](companies/us-UAA/initiation.html) | [風險](companies/us-UAA/risk_plan.html) |
| VFC | [摘要](companies/us-VFC/summary.html) | [公司摘要](companies/us-VFC/tearsheet.html) | [啟動報告](companies/us-VFC/initiation.html) | [風險](companies/us-VFC/risk_plan.html) |
| VRT | [摘要](companies/us-VRT/summary.html) | [公司摘要](companies/us-VRT/tearsheet.html) | [啟動報告](companies/us-VRT/initiation.html) | [風險](companies/us-VRT/risk_plan.html) |
| VTRS | [摘要](companies/us-VTRS/summary.html) | [公司摘要](companies/us-VTRS/tearsheet.html) | [啟動報告](companies/us-VTRS/initiation.html) | [風險](companies/us-VTRS/risk_plan.html) |
| WBD | [摘要](companies/us-WBD/summary.html) | [公司摘要](companies/us-WBD/tearsheet.html) | [啟動報告](companies/us-WBD/initiation.html) | [風險](companies/us-WBD/risk_plan.html) |
| WEN | [摘要](companies/us-WEN/summary.html) | [公司摘要](companies/us-WEN/tearsheet.html) | [啟動報告](companies/us-WEN/initiation.html) | [風險](companies/us-WEN/risk_plan.html) |
| WRB | [摘要](companies/us-WRB/summary.html) | [公司摘要](companies/us-WRB/tearsheet.html) | [啟動報告](companies/us-WRB/initiation.html) | [風險](companies/us-WRB/risk_plan.html) |
| XP | [摘要](companies/us-XP/summary.html) | [公司摘要](companies/us-XP/tearsheet.html) | [啟動報告](companies/us-XP/initiation.html) | [風險](companies/us-XP/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
