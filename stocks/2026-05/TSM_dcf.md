# TSM — DCF 估值報告

as_of_date：2026-05-06  
projection_years：5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | NT$1,002.6B（FY2025，約 US$31.94B） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/tsm/financials/cash-flow-statement/)；匯率使用 Yahoo Finance `TWD=X` 2026-05-06 close 31.387 |
| 5yr FCF CAGR | 38.4% | 以 FY2021 NT$273.0B 至 FY2025 NT$1,002.6B 計算；[StockAnalysis Cash Flow](https://stockanalysis.com/stocks/tsm/financials/cash-flow-statement/) |
| Beta | 1.25 | [Yahoo Finance TSM](https://finance.yahoo.com/quote/TSM/) / [StockAnalysis Statistics](https://stockanalysis.com/stocks/tsm/statistics/) |
| Net Debt | NT$-2,019.4B（net cash） | MRQ Total Debt NT$1,016.3B - Cash & Equivalents NT$3,035.6B；[StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/tsm/financials/balance-sheet/) |
| 流通股數 | 25.93B common shares；約 5.19B ADS | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/tsm/financials/balance-sheet/)；每 1 ADS = 5 common shares，見 [TSMC Annual Report](https://investor.tsmc.com/static/annualReports/2024/english/ebook/files/basic-html/page84.html) |
| 無風險利率 (10Y) | 4.367% | WebSearch：2026-05-06 10-Year Treasury Yield；Treasury 最新官方頁面截至 2026-05-05 為 4.43%，見 [U.S. Treasury Daily Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | Base 11.24% | 計算：4.367% + 1.25 x 5.5% ERP |
| 現價 | US$415.73 | Yahoo Finance / yfinance historical close for TSM on 2026-05-06 |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 23.1% | 1.5% | 11.74% | US$152.80 | US$415.73 | -63.2% (高估) |
| 基準 | 38.4% | 2.5% | 11.24% | US$290.17 | US$415.73 | -30.2% (高估) |
| 樂觀 | 53.8% | 3.5% | 10.74% | US$559.04 | US$415.73 | +34.5% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：FY2021-FY2025 Free Cash Flow CAGR；FY2025 FCF 為 NT$1,002.6B，FY2021 FCF 為 NT$273.0B。
- WACC 組成：無風險利率 4.367% + Beta 1.25 x 5.5% ERP = 11.24%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 匯率與股數口徑：財務報表以 TWD 計算，最後以 31.387 TWD/USD 轉為美元，並用 1 ADS = 5 common shares 換算為 TSM ADS 每股價值。
- 終值佔總估值比重：悲觀 70.4%、基準 77.6%、樂觀 83.2%。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。

## 結論

基準情境下，TSM 的 DCF 內在價值約為 US$290.17/ADS，較 2026-05-06 現價 US$415.73 低約 30.2%，安全邊際不足。主要不確定因子是 FY2021-FY2025 FCF CAGR 極高，且終值佔比超過 70%，估值對長期成長率、WACC 與終值假設高度敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
