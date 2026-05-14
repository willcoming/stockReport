# F — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 4.1% | 1.5% | 14.11% | -$7.65 | $13.57 | -156.3% (高估) |
| 基準 | 6.9% | 2.5% | 13.61% | -$1.28 | $13.57 | -109.4% (高估) |
| 樂觀 | 9.6% | 3.5% | 13.11% | $7.38 | $13.57 | -45.6% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $12.467B | [Macrotrends Ford Motor Free Cash Flow](https://www.macrotrends.net/stocks/charts/F/ford-motor/free-cash-flow)、[Yahoo Finance Cash Flow](https://finance.yahoo.com/quote/F/cash-flow/) |
| 2021-2025 FCF | 2021 $9.560B、2022 -$0.013B、2023 $6.682B、2024 $6.739B、2025 $12.467B | [Macrotrends Ford Motor Free Cash Flow](https://www.macrotrends.net/stocks/charts/F/ford-motor/free-cash-flow) |
| 5yr FCF CAGR | 6.86% | 計算：2021 $9.560B 至 2025 $12.467B |
| 2025 Revenue | $187.267B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/F/financials/) |
| Beta | 1.664 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/F/) |
| Total Debt | $159.511B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/F/balance-sheet/) |
| Cash & Equivalents | $17.649B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/F/balance-sheet/) |
| Net Debt | $141.862B | 計算：Total Debt - Cash & Equivalents |
| 流通股數 | 4.011B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/F/balance-sheet/) |
| 無風險利率 (10Y) | 4.46% | [U.S. Treasury Daily Treasury Yield Curve, 2026-05-13](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026) |
| 現價 | $13.57 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/F/) |
| Market Cap | $54.07B | [Yahoo Finance Summary](https://finance.yahoo.com/quote/F/) |

## 關鍵假設說明

- FCF 成長率來源：使用 2021-2025 年 FCF CAGR 6.86%；悲觀為 0.6x、基準為 1.0x、樂觀為 1.4x。2022 年 FCF 接近零，代表歷史 CAGR 對單一年波動敏感。
- WACC 組成：無風險利率 4.46% + Beta 1.664 x 5.5% ERP = 13.61%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：61.9%（基準情境），未超過 70%，但結果仍對 WACC、終值成長率與 Ford Credit 合併債務處理高度敏感。
- 本模型使用 consolidated Total Debt - Cash & Equivalents 計算 Net Debt；對 Ford 這類含金融業務的汽車公司，該處理方式可能壓低股權價值估算。

## 結論

基準情境下，F 的 DCF 內在價值為 -$1.28/股，相對現價 $13.57 顯示 -109.4% 安全邊際，模型結果偏向高估。最大不確定因子是 Ford Credit 相關合併債務、自由現金流循環性，以及終值假設對估值的影響。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
