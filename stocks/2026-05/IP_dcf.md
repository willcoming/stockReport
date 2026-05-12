# IP — DCF 估值報告 (2026-05-07)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -13.2% | 1.5% | 9.79% | -$17.61 | $33.52 | -152.5% (高估) |
| 基準 | -22.0% | 2.5% | 9.29% | -$17.14 | $33.52 | -151.1% (高估) |
| 樂觀 | -30.7% | 3.5% | 8.79% | -$16.77 | $33.52 | -150.0% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$0.159B（FY2025） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/ip/financials/cash-flow-statement/)；[Yahoo Finance Financials](https://finance.yahoo.com/quote/IP/financials) |
| 5yr FCF CAGR | N/M；模型採 FY2022-FY2024 可比正 FCF CAGR -22.0% | 由 FY2022 FCF $1.243B、FY2024 FCF $0.757B 計算；[StockAnalysis Cash Flow](https://stockanalysis.com/stocks/ip/financials/cash-flow-statement/) |
| Beta | 0.896（約 0.90） | [Yahoo Finance Summary](https://finance.yahoo.com/quote/IP)；[StockAnalysis Statistics](https://stockanalysis.com/stocks/ip/statistics/) |
| Net Debt | $8.31B | Total Debt $9.543B - Cash $1.236B；[StockAnalysis Statistics](https://stockanalysis.com/stocks/ip/statistics/) |
| 流通股數 | 529.52M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ip/statistics/) |
| 無風險利率 (10Y) | 4.36% | 2026-05-06 最新可得美國財政部 10Y；[U.S. Treasury Daily Rates CSV](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv) |
| WACC | 9.29%（基準） | 4.36% + 0.896 x 5.5% |
| 現價 | $33.52 | 2026-05-06 收盤；[StockAnalysis Statistics](https://stockanalysis.com/stocks/ip/statistics/)；[Yahoo Finance Summary](https://finance.yahoo.com/quote/IP) |

## 關鍵假設說明

- FCF 成長率來源：FY2025 FCF 為負，無法用 FY2021-FY2025 計算有意義的傳統 CAGR；模型改用 FY2022-FY2024 可比正 FCF CAGR -22.0%，並以 FY2025 FCF -$159M 作為起始 FCF。
- WACC 組成：無風險利率 4.36% + Beta 0.896 x 5.5% ERP = 9.29%（基準）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：58.0%（基準情境，以 PV terminal / enterprise value 計算）。
- FY2025 FCF 轉負使 DCF 結果高度受基準 FCF 與終值假設影響；雖然終值佔比未超過 70%，仍應謹慎解讀。

## 結論

基準情境下，IP 的 DCF 內在價值為 -$17.14/股，低於現價 $33.52，安全邊際為 -151.1%，模型顯示缺乏安全邊際。主要不確定因子是 FY2025 FCF 轉負是否為暫時性整合/資本支出影響，或代表長期自由現金流能力惡化。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
