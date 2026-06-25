# StockLoop PEI 批次摘要 2026-06-25

- 產出時間：2026-06-25 08:02:33
- 標的池檔數：46
- 已具備目前價格與研究狀態的列數：46
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

## 這次 PEI 到底做了什麼

這次是 decision-report PEI：來源報告中的候選名單定義研究宇宙，模型投組仍以 100 units cash、long-only、no leverage 為基準。

PEI 在本批次實際完成的是「研究包與模型投組風險姿態整理」，不是完整逐檔基本面盡調，也不是下單建議：

- 建立研究宇宙：納入 46 檔標的；來源為 reports/news/2026-06-25_kol_news_decision_report.md。
- 讀入本機證據：庫存健檢動作、最新可得報價、近一週 K 線觸發、APEX 價格風控與既有 StockLoop 訊號。
- 逐檔產生 PEI artifact：每檔都有 `summary.html`、`summary.md`、`source_ledger.json`、`tearsheet.html`、`initiation.html`、`risk_plan.html`。
- 轉成模型投組語言：輸出 `recommendation_matrix.csv` 與 `model_portfolio_risk_plan.csv`，用 `Model portfolio candidate / Wait for trigger / Watch only / Not decision-ready` 表示研究姿態。
- 控制模型部位：46 檔模型部位為 0%，因為本批次沒有完成官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。
- 回寫庫存健檢：將 PEI 統計與逐檔摘要整合回庫存健檢報告，但最終庫存動作仍由庫存健檢整合 PEI、技術、分類與 APEX 後決定。

本批次統計：
- Not decision-ready（尚未達決策等級）：7 檔。尚未達決策等級：證據缺口或風險太高，不適合放入模型投組候選；在庫存健檢中通常對應賣出/排除風控。
- Wait for trigger（等待觸發）：39 檔。等待觸發：題材或持倉仍值得追蹤，但技術觸發、基本面證據或風險報酬尚未同時到位，模型投組觸發前維持 0%。
- 研究狀態 partial（證據仍不足）：46 檔。

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 46

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2312 | 金寶 | 現在可以買名單 | 38 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2312/summary.html) |
| 2317 | 鴻海 | 現在可以買名單 | 256 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2317/summary.html) |
| 2324 | 仁寶 | 現在可以買名單 | 37.9 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2324/summary.html) |
| 2327 | 國巨 | 現在可以買名單 | 1,050 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2327/summary.html) |
| 2330 | 台積電 | 現在可以買名單 | 2,390 TWD | 2026-06-24 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-2330/summary.html) |
| 2337 | 旺宏 | 現在可以買名單 | 172 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2337/summary.html) |
| 2344 | 華邦電 | 現在可以買名單 | 205 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2344/summary.html) |
| 2374 | 佳能 | 現在可以買名單 | 75.5 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2374/summary.html) |
| 2382 | 廣達 | 現在可以買名單 | 372 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2382/summary.html) |
| 2383 | 台光電 | 現在可以買名單 | 5,560 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2383/summary.html) |
| 2408 | 南亞科 | 現在可以買名單 | 443.5 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2408/summary.html) |
| 2454 | 聯發科 | 現在可以買名單 | 4,285 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2454/summary.html) |
| 3008 | 大立光 | 現在可以買名單 | 4,900 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3008/summary.html) |
| 3289 | 宜特 | 現在可以買名單 | 169.5 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3289/summary.html) |
| 3443 | 創意電子 | 現在可以買名單 | 4,880 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3443/summary.html) |
| 3481 | 群創光電 | 現在可以買名單 | 69.4 TWD | 2026-06-24 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-3481/summary.html) |
| 3556 | 禾瑞亞 | 現在可以買名單 | 72.5 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3556/summary.html) |
| 5285 | 界霖 | 現在可以買名單 | 110 TWD | 2026-06-24 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-5285/summary.html) |
| 5392 | 能率 | 現在可以買名單 | 42.4 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-5392/summary.html) |
| 6274 | 台燿 | 現在可以買名單 | 1,765 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-6274/summary.html) |
| 8040 | 九暘 | 現在可以買名單 | 125 TWD | 2026-06-24 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-8040/summary.html) |
| 8046 | 南電 | 現在可以買名單 | 955 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-8046/summary.html) |
| TSM | 台積電 | 現在可以買名單 | 440.83 USD | 2026-06-24 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/tw-TSM/summary.html) |
| MSFT | 微軟 | 現在可以買名單 | 365.46 USD | 2026-06-24 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-MSFT/summary.html) |
| MU | 美光科技 | 現在可以買名單 | 1,048.51 USD | 2026-06-24 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-MU/summary.html) |
| ORCL | 甲骨文 | 現在可以買名單 | 157.53 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ORCL/summary.html) |
| 000660 | SK 海力士 | 現在不能買，但值得等買點名單 | 2,621,000 KRW | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-000660/summary.html) |
| 005930 | 三星 | 現在不能買，但值得等買點名單 | 340,500 KRW | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-005930/summary.html) |
| 2313 | 華通 | 現在不能買，但值得等買點名單 | 240 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2313/summary.html) |
| 2351 | 順德 | 現在不能買，但值得等買點名單 | 217.5 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2351/summary.html) |
| 2485 | 兆赫 | 現在不能買，但值得等買點名單 | 58.8 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-2485/summary.html) |
| 3374 | 精材 | 現在不能買，但值得等買點名單 | 312 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3374/summary.html) |
| 3479 | 安勤 | 現在不能買，但值得等買點名單 | 135.5 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-3479/summary.html) |
| 6213 | 聯茂 | 現在不能買，但值得等買點名單 | 309 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-6213/summary.html) |
| 6285 | 啟碁 | 現在不能買，但值得等買點名單 | 255 TWD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/tw-6285/summary.html) |
| AAL | 美航 | 現在不能買，但值得等買點名單 | 17.44 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-AAL/summary.html) |
| ALK | 阿拉斯加航空 | 現在不能買，但值得等買點名單 | 51.56 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ALK/summary.html) |
| AMD | 超微半導體 | 現在不能買，但值得等買點名單 | 519.74 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-AMD/summary.html) |
| AVGO | 博通 | 現在不能買，但值得等買點名單 | 382.07 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-AVGO/summary.html) |
| BTC | 比特幣 | 現在不能買，但值得等買點名單 | 26.47 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BTC/summary.html) |
| CBRS | Cerebras | 現在不能買，但值得等買點名單 | 182.26 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CBRS/summary.html) |
| DAL | 達美航空 | 現在不能買，但值得等買點名單 | 90.65 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-DAL/summary.html) |
| LITETF | LIT 鋰電池與太陽能 ETF | 現在不能買，但值得等買點名單 | 78.91 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-LITETF/summary.html) |
| NFLX | 網飛 | 現在不能買，但值得等買點名單 | 71.84 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-NFLX/summary.html) |
| RCL | 皇家加勒比 | 現在不能買，但值得等買點名單 | 320.95 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-RCL/summary.html) |
| UAL | 美聯航 | 現在不能買，但值得等買點名單 | 130.54 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-UAL/summary.html) |
