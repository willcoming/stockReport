# StockLoop PEI 批次摘要 2026-06-24 - US K-line

- 產出時間：2026-06-25 06:46:12
- 標的池檔數：88
- 已具備目前價格與研究狀態的列數：88
- 完整報告：[complete_report.md](complete_report.md) / [complete_report.html](complete_report.html)
- 驗證報告：[validation_report.json](validation_report.json)
- 標的池資料：[universe.json](universe.json)
- 批次：[batches/](batches/)

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

## 怎麼讀這份 PEI 輸出

- `recommendation_matrix.csv`：逐檔研究姿態與缺失證據摘要。
- `model_portfolio_risk_plan.csv`：逐檔模型投組部位、風險預算、加碼/減碼/退出規則。
- `companies/<market-symbol>/summary.html`：逐檔可點擊 HTML 摘要；這是最適合從本索引點進去看的版本。
- `companies/<market-symbol>/summary.md`：逐檔 Markdown 原始摘要。
- `companies/<market-symbol>/source_ledger.json`：逐檔來源台帳，記錄用了哪些本機證據與價格資料。
- `companies/<market-symbol>/initiation.html`：逐檔研究快照，包含目前價格、研究姿態、主要觸發、主要風險與缺失證據。
- `companies/<market-symbol>/risk_plan.html`：逐檔模型投組風險計畫。本批次多數為 0% 模型部位，代表還不能升級成 PEI decision-ready 候選。

## 研究狀態

- partial（證據仍不足）: 88

## 建議矩陣

| 代號 | 公司 | 分類 | 目前價格 | 價格時間 | 研究狀態 | 研究標籤 | PEI摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AON | Aon plc Class A Ordinary Shares | 現在可以買名單 | 325.48 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-AON/summary.html) |
| BLDR | Builders FirstSource | 現在可以買名單 | 85.41 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-BLDR/summary.html) |
| CMG | Chipotle Mexican Grill | 現在可以買名單 | 31.69 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-CMG/summary.html) |
| COHR | Coherent Corp. Common Stock | 現在可以買名單 | 392.5 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-COHR/summary.html) |
| DHR | Danaher Corporation Common Stock | 現在可以買名單 | 188.87 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-DHR/summary.html) |
| GDDY | GoDaddy Inc. Class A Common Stock | 現在可以買名單 | 81.33 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-GDDY/summary.html) |
| HON | Honeywell International Inc. - Common Stock | 現在可以買名單 | 227.42 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-HON/summary.html) |
| LOW | Lowe's Companies | 現在可以買名單 | 221.45 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-LOW/summary.html) |
| MA | Mastercard Incorporated Common Stock | 現在可以買名單 | 494.41 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-MA/summary.html) |
| QXO | QXO | 現在可以買名單 | 16.93 USD | 2026-06-24 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-QXO/summary.html) |
| SHOP | Shopify Inc. - Class A Subordinate Voting Shares | 現在可以買名單 | 114.17 USD | 2026-06-24 | partial（證據仍不足） | Not decision-ready（尚未達決策等級） | [摘要](companies/us-SHOP/summary.html) |
| TEM | Tempus AI | 現在可以買名單 | 51.94 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-TEM/summary.html) |
| UBER | Uber Technologies | 現在可以買名單 | 73.85 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-UBER/summary.html) |
| VRSK | Verisk Analytics | 現在可以買名單 | 180.06 USD | 2026-06-24 | partial（證據仍不足） | Watch only（僅觀察） | [摘要](companies/us-VRSK/summary.html) |
| A | Agilent Technologies | 現在不能買，但值得等買點名單 | 131.63 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-A/summary.html) |
| ACHC | Acadia Healthcare Company | 現在不能買，但值得等買點名單 | 24.96 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ACHC/summary.html) |
| AMRZ | Amrize Ltd Ordinary Shares | 現在不能買，但值得等買點名單 | 54.53 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-AMRZ/summary.html) |
| ARR | ARMOUR Residential REIT | 現在不能買，但值得等買點名單 | 16.95 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ARR/summary.html) |
| BBIO | BridgeBio Pharma | 現在不能買，但值得等買點名單 | 69.36 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BBIO/summary.html) |
| BIRK | Birkenstock Holding plc Ordinary Shares | 現在不能買，但值得等買點名單 | 45.09 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BIRK/summary.html) |
| BKNG | Booking Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | 181.25 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BKNG/summary.html) |
| BULL | Webull Corporation - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | 6.71 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-BULL/summary.html) |
| CAVA | CAVA Group | 現在不能買，但值得等買點名單 | 82.24 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CAVA/summary.html) |
| CC | Chemours Company  Common Stock | 現在不能買，但值得等買點名單 | 21.17 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CC/summary.html) |
| CHWY | Chewy | 現在不能買，但值得等買點名單 | 19.01 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CHWY/summary.html) |
| CLX | Clorox Company  Common Stock | 現在不能買，但值得等買點名單 | 95.38 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CLX/summary.html) |
| CNH | CNH Industrial N.V. Common Shares | 現在不能買，但值得等買點名單 | 10.31 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CNH/summary.html) |
| COO | The Cooper Companies | 現在不能買，但值得等買點名單 | 68.83 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-COO/summary.html) |
| CPB | The Campbell's Company - Common Stock | 現在不能買，但值得等買點名單 | 22.24 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CPB/summary.html) |
| CTRI | Centuri Holdings | 現在不能買，但值得等買點名單 | 31.45 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CTRI/summary.html) |
| CVNA | Carvana Co. Class A Common Stock | 現在不能買，但值得等買點名單 | 67.91 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CVNA/summary.html) |
| CVS | CVS Health Corporation Common Stock | 現在不能買，但值得等買點名單 | 101.87 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-CVS/summary.html) |
| DX | Dynex Capital | 現在不能買，但值得等買點名單 | 13.01 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-DX/summary.html) |
| ELAN | Elanco Animal Health Incorporated Common Stock | 現在不能買，但值得等買點名單 | 23.96 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-ELAN/summary.html) |
| EXEL | Exelixis | 現在不能買，但值得等買點名單 | 52.87 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-EXEL/summary.html) |
| FAST | Fastenal Company - Common Stock | 現在不能買，但值得等買點名單 | 46.26 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-FAST/summary.html) |
| FBIN | Fortune Brands Innovations | 現在不能買，但值得等買點名單 | 44.65 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-FBIN/summary.html) |
| FND | Floor & Decor Holdings | 現在不能買，但值得等買點名單 | 56.94 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-FND/summary.html) |
| FOUR | Shift4 Payments | 現在不能買，但值得等買點名單 | 44.22 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-FOUR/summary.html) |
| FRSH | Freshworks Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 9.37 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-FRSH/summary.html) |
| FWONK | Liberty Media Corporation - Series C Liberty Formula One Common Stock | 現在不能買，但值得等買點名單 | 90.03 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-FWONK/summary.html) |
| GNTX | Gentex Corporation - Common Stock | 現在不能買，但值得等買點名單 | 25.04 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GNTX/summary.html) |
| GPK | Graphic Packaging Holding Company | 現在不能買，但值得等買點名單 | 10.77 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GPK/summary.html) |
| GT | The Goodyear Tire & Rubber Company - Common Stock | 現在不能買，但值得等買點名單 | 6.29 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GT/summary.html) |
| GTLB | GitLab Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 28.27 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GTLB/summary.html) |
| GXO | GXO Logistics | 現在不能買，但值得等買點名單 | 49.98 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-GXO/summary.html) |
| HD | Home Depot | 現在不能買，但值得等買點名單 | 342.86 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-HD/summary.html) |
| HLN | Haleon plc American Depositary Shares | 現在不能買，但值得等買點名單 | 9.23 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-HLN/summary.html) |
| INMD | InMode Ltd. - Ordinary Shares | 現在不能買，但值得等買點名單 | 14.79 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-INMD/summary.html) |
| IR | Ingersoll Rand Inc. Common Stock | 現在不能買，但值得等買點名單 | 78.32 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-IR/summary.html) |
| KNX | Knight-Swift Transportation Holdings Inc. | 現在不能買，但值得等買點名單 | 74.52 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-KNX/summary.html) |
| LEN | Lennar Corporation Class A Common Stock | 現在不能買，但值得等買點名單 | 92.95 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-LEN/summary.html) |
| LIN | Linde plc - Ordinary Shares | 現在不能買，但值得等買點名單 | 515.73 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-LIN/summary.html) |
| LKQ | LKQ Corporation - Common Stock | 現在不能買，但值得等買點名單 | 26.23 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-LKQ/summary.html) |
| LULU | lululemon athletica inc. - Common Stock | 現在不能買，但值得等買點名單 | 113.09 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-LULU/summary.html) |
| LYFT | Lyft | 現在不能買，但值得等買點名單 | 14.4 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-LYFT/summary.html) |
| MKC | McCormick & Company | 現在不能買，但值得等買點名單 | 47.6 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-MKC/summary.html) |
| MNST | Monster Beverage Corporation - Common Stock | 現在不能買，但值得等買點名單 | 94.7 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-MNST/summary.html) |
| MTCH | Match Group | 現在不能買，但值得等買點名單 | 35.34 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-MTCH/summary.html) |
| NEE | NextEra Energy | 現在不能買，但值得等買點名單 | 87.62 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-NEE/summary.html) |
| NGG | National Grid Transco | 現在不能買，但值得等買點名單 | 82.83 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-NGG/summary.html) |
| NNE | Nano Nuclear Energy Inc. - common stock | 現在不能買，但值得等買點名單 | 23.15 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-NNE/summary.html) |
| OTIS | Otis Worldwide Corporation Common Stock | 現在不能買，但值得等買點名單 | 72.63 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-OTIS/summary.html) |
| PCAR | PACCAR Inc. - Common Stock | 現在不能買，但值得等買點名單 | 117.03 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PCAR/summary.html) |
| PDI | PIMCO Dynamic Income Fund Common Stock | 現在不能買，但值得等買點名單 | 16.4 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PDI/summary.html) |
| PINS | Pinterest | 現在不能買，但值得等買點名單 | 19.86 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PINS/summary.html) |
| PNR | Pentair plc. Ordinary Share | 現在不能買，但值得等買點名單 | 74.81 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PNR/summary.html) |
| PRIM | Primoris Services Corporation Common Stock | 現在不能買，但值得等買點名單 | 92.69 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PRIM/summary.html) |
| PTON | Peloton Interactive | 現在不能買，但值得等買點名單 | 5.73 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PTON/summary.html) |
| PYPL | PayPal Holdings | 現在不能買，但值得等買點名單 | 42.48 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-PYPL/summary.html) |
| RKT | Rocket Companies | 現在不能買，但值得等買點名單 | 14.73 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-RKT/summary.html) |
| RUN | Sunrun Inc. - Common Stock | 現在不能買，但值得等買點名單 | 14.42 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-RUN/summary.html) |
| SBRA | Sabra Health Care REIT | 現在不能買，但值得等買點名單 | 19.09 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SBRA/summary.html) |
| SBS | Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp American Depositary Shares | 現在不能買，但值得等買點名單 | 5.53 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-SBS/summary.html) |
| TAP | Molson Coors Beverage Company Class B Common Stock | 現在不能買，但值得等買點名單 | 40.53 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TAP/summary.html) |
| TCOM | Trip.com Group Limited - American Depositary Shares | 現在不能買，但值得等買點名單 | 46.3 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TCOM/summary.html) |
| TEVA | Teva Pharmaceutical Industries Limited American Depositary Shares | 現在不能買，但值得等買點名單 | 34.22 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TEVA/summary.html) |
| TOST | Toast | 現在不能買，但值得等買點名單 | 26.02 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TOST/summary.html) |
| TRMB | Trimble Inc. - Common Stock | 現在不能買，但值得等買點名單 | 50.14 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TRMB/summary.html) |
| TRU | TransUnion Common Stock | 現在不能買，但值得等買點名單 | 68 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-TRU/summary.html) |
| UAA | Under Armour | 現在不能買，但值得等買點名單 | 6.06 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-UAA/summary.html) |
| VFC | V.F. Corporation Common Stock | 現在不能買，但值得等買點名單 | 17.22 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-VFC/summary.html) |
| VRT | Vertiv Holdings | 現在不能買，但值得等買點名單 | 316.43 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-VRT/summary.html) |
| VTRS | Viatris Inc. - Common Stock | 現在不能買，但值得等買點名單 | 15.93 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-VTRS/summary.html) |
| WBD | Warner Bros. Discovery | 現在不能買，但值得等買點名單 | 27.2 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-WBD/summary.html) |
| WEN | Wendy's Company  - Common Stock | 現在不能買，但值得等買點名單 | 7.86 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-WEN/summary.html) |
| WRB | W.R. Berkley Corporation Common Stock | 現在不能買，但值得等買點名單 | 70.05 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-WRB/summary.html) |
| XP | XP Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | 15.56 USD | 2026-06-24 | partial（證據仍不足） | Wait for trigger（等待觸發） | [摘要](companies/us-XP/summary.html) |
