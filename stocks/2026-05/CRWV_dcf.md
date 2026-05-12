# CRWV — DCF 估值報告

as_of_date: 2026-05-10  
projection_years: 5  
註：2026-05-10 為週日，現價採用最近收盤日 2026-05-08。

## DCF 估值結果

CRWV 最近 3 年以上 FCF 為負，依 skill 規則改用 EV/EBITDA fallback；下表為 multiple-based fallback，不是標準 DCF 現金流折現結果。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | EV/EBITDA 假設 | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|---------------|-----------|------|---------|
| 悲觀 | N/A | N/A | 10.38% | 20.00x | $50.68 | $114.15 | -55.6%（高估） |
| 基準 | N/A | N/A | 9.88% | 24.48x | $75.60 | $114.15 | -33.8%（高估） |
| 樂觀 | N/A | N/A | 9.38% | 30.26x | $107.75 | $114.15 | -5.6%（高估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$7.251B（FY2025）；-$10.616B（TTM） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/crwv/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 資料不足 / 不適用（FCF 連續為負） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/crwv/financials/cash-flow-statement/) |
| TTM EBITDA | $3.02B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crwv/statistics/) |
| Beta | 資料不足；依 skill 規則採 1.00 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crwv/statistics/) |
| Cash & Equivalents | $2.27B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crwv/statistics/) |
| Total Debt | $35.15B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crwv/statistics/) |
| Net Debt | $32.88B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crwv/statistics/) |
| 流通股數 | 542.97M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crwv/statistics/) |
| 無風險利率 (10Y) | 4.38% | [U.S. Treasury Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 悲觀 10.38%；基準 9.88%；樂觀 9.38% | 計算：4.38% + Beta 1.00 × 5.5% ERP ± 0.5% |
| 現價 | $114.15 | [StockAnalysis CRWV](https://stockanalysis.com/stocks/crwv/financials/) |
| 目前 EV / EBITDA | 31.37x | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crwv/statistics/) |
| 產業 EV/EBITDA 參考 | Software System & Application 24.48x；Software Internet 30.26x | [Damodaran NYU Stern, Jan 2026](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/vebitda.html) |

## 關鍵假設說明

- FCF 成長率來源：CRWV FY2025 FCF 為 -$7.251B、TTM FCF 為 -$10.616B，且歷史 FCF 多數年份為負，因此 5 年 FCF CAGR 不具可用估值意義，改用 EV/EBITDA fallback。
- WACC 組成：無風險利率 4.38% + Beta 1.00 × 5.5% ERP = 9.88%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- Multiple 假設：悲觀採 20.00x；基準採 Damodaran Software (System & Application) EV/EBITDA 24.48x；樂觀採 Damodaran Software (Internet) EV/EBITDA 30.26x。
- 計算方式：Equity Value = TTM EBITDA × EV/EBITDA - Net Debt；內在價值/股 = Equity Value / Shares Outstanding。
- 終值佔總估值比重：N/A。此估值為 EV/EBITDA fallback，沒有 terminal value；但結果仍高度依賴 EBITDA multiple 與 CRWV 未來 capex / 融資需求。

## 結論

基準情境下，CRWV 估算內在價值約 $75.60/股，低於現價 $114.15，安全邊際為 -33.8%，顯示以目前 TTM EBITDA 與產業 multiple 估算時股價偏高。最主要不確定因子是 AI infrastructure 需求能否快速轉化為正向自由現金流，以及高槓桿與高 capex 對股東價值的稀釋風險。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
