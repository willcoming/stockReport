# DBC — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 5.77% | N/A | $31.38 | N/A |
| 基準 | N/A | 2.5% | 5.27% | N/A | $31.38 | N/A |
| 樂觀 | N/A | 3.5% | 4.77% | N/A | $31.38 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | 資料不足 / 不適用 | DBC 是商品期貨 ETF；SEC 10-Q 說明其目標是追蹤商品期貨指數，績效主要由期貨策略驅動，不是營運公司自由現金流：[SEC 10-Q](https://www.sec.gov/Archives/edgar/data/1328237/000119312526209724/dbc-20260331.htm) |
| 5yr FCF CAGR | N/A | 因無可用、可比的營運公司 FCF，未計算 |
| Beta | 0.12 | [StockAnalysis DBC quote](https://stockanalysis.com/etf/dbc/) |
| Net Debt | 資料不足 / 不適用 | SEC 10-Q 顯示總負債 $26.63M、現金期末 $0，但這是基金資產負債與保證金/交易結算結構，不是公司債務資本結構：[SEC 10-Q](https://www.sec.gov/Archives/edgar/data/1328237/000119312526209724/dbc-20260331.htm) |
| 流通股數 | 58.45M（2026-03-31） | [SEC 10-Q](https://www.sec.gov/Archives/edgar/data/1328237/000119312526209724/dbc-20260331.htm) |
| 無風險利率 (10Y) | 4.61%（2026-05-18） | [yieldcurve.pro](https://www.yieldcurve.pro/yields/10-year) |
| WACC | 悲觀 5.77% / 基準 5.27% / 樂觀 4.77% | 公式計算：4.61% + Beta 0.12 × 5.5%，再依情境 +/- 0.5% |
| 現價 | $31.38（2026-05-18 US close） | [StockAnalysis DBC quote](https://stockanalysis.com/etf/dbc/) |

## 關鍵假設說明

- FCF 成長率來源：無法建立。DBC 是商品期貨 ETF，不是以營運自由現金流創造企業價值的公司；SEC 10-Q 說明其主要 cash flow activity 是向 Authorized Participants 發行 Shares 並配置到美債、貨幣市場基金、T-Bill ETF 與期貨保證金，非公司營運 FCF。
- WACC 組成：無風險利率 4.61% + Beta 0.12 × 5.5% ERP = 5.27%（基準）。此為 skill 公式的機械計算，但未用於產生內在價值，因 DBC 缺乏可用 DCF 輸入。
- 終值佔總估值比重：N/A（基準情境未產生 DCF enterprise value）。
- EV/EBITDA fallback：不適用。DBC 是基金/商品池，並非可用 EBITDA multiple 估值的營運公司。

## 結論

基準情境下無法計算 DBC 的 DCF 內在價值或安全邊際，原因是 DBC 為商品期貨 ETF，其價值主要由 NAV、期貨曝險、抵押資產收益、費用與追蹤誤差決定，而非可折現的企業自由現金流。以 DCF 對 DBC 估值會產生不具經濟意義的結果。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
