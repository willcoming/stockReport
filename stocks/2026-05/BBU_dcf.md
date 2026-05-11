# BBU — DCF 估值報告

as_of_date：2026-05-11  
projection_years：5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 公司 | Brookfield Business Partners LP | [Yahoo Finance](https://finance.yahoo.com/quote/BBU/) |
| 最近一年 FCF | $1.17B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/BBU/financials/) |
| 2020 FCF | $2.80B | [StockAnalysis / S&P Capital IQ](https://stockanalysis.com/stocks/bbu/financials/cash-flow-statement/) |
| 5yr FCF CAGR | -16.0% | 計算：$1.17B / $2.80B，5 年 CAGR |
| Beta | 1.322 | [Yahoo Finance](https://finance.yahoo.com/quote/BBU/) |
| Total Debt | $43.75B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/BBU/balance-sheet/) |
| Cash | $3.55B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/BBU/balance-sheet/) |
| Net Debt | $40.20B | 計算：Total Debt - Cash |
| 流通股數 | 88.68M | [Yahoo Finance](https://finance.yahoo.com/quote/BBU/) |
| 無風險利率 (10Y) | 4.38% | [U.S. Treasury Daily Treasury Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)，2026-05-08 最新官方 10Y |
| WACC | 11.65% | 計算：4.38% + 1.322 × 5.5% |
| 現價 | $31.46 | [Yahoo Finance](https://finance.yahoo.com/quote/BBU/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -22.4% | 1.5% | 12.15% | -$408.53 | $31.46 | -1398.6% (高估) |
| 基準 | -16.0% | 2.5% | 11.65% | -$387.36 | $31.46 | -1331.3% (高估) |
| 樂觀 | -9.6% | 3.5% | 11.15% | -$352.86 | $31.46 | -1221.6% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：使用 2020 FCF $2.80B 與 2025 FCF $1.17B 計算 5yr CAGR，得到 -16.0%。因 base_rate 為負，悲觀情境採較大收縮幅度，樂觀情境採較小收縮幅度。
- WACC 組成：無風險利率 4.38% + Beta 1.322 x 5.5% ERP = 11.65%。
- 終值佔總估值比重：53.9%（基準情境）。
- 基準情境下，DCF enterprise value 約 $5.85B，但低於 net debt $40.20B，因此 equity value 為負；此結果對 BBU 這類持有型、槓桿與少數股權結構複雜的公司解讀限制較大。

## 結論

基準情境下，BBU 的 DCF 內在價值為 -$387.36/股，低於現價 $31.46，依模型公式顯示安全邊際為 -1331.3%。主要不確定因子是 BBU 的 consolidated net debt、非經常性資產買賣、子公司槓桿與 FCF 波動，這些因素會使簡化 DCF 對估值非常敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
