# BRK.B — DCF 估值報告

估值基準日：2026-05-06  
Projection years：5 年

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $25.0B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/BRK-B/financials/)；FCF = Operating Cash Flow $45.969B + CapEx -$20.927B |
| 3yr FCF CAGR | 4.6% | 計算；Yahoo Finance 2022 FCF $21.886B 至 2025 FCF $25.042B。Yahoo 5yr FCF 資料不足，依 skill 改用 3yr |
| Beta | 0.62 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/BRK-B/) |
| Total Debt | $129.1B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/BRK-B/balance-sheet/) |
| Cash & Short-term Investments | $373.3B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/BRK-B/balance-sheet/) |
| Net Debt | -$244.2B | 計算；Total Debt - Cash & Short-term Investments |
| 流通股數 | 2.157B B-share equivalent | [Yahoo Finance Summary](https://finance.yahoo.com/quote/BRK-B/)；implied shares outstanding |
| 無風險利率 (10Y) | 4.43% | [U.S. Treasury Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)，2026-05-05 最新官方可得 10 Yr |
| WACC | 7.85% | 計算；4.43% + 0.62 x 5.5% |
| 現價 | $469.71 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/BRK-B/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 2.8% | 1.5% | 8.35% | $294.84 | $469.71 | -37.2% (高估) |
| 基準 | 4.6% | 2.5% | 7.85% | $357.01 | $469.71 | -24.0% (高估) |
| 樂觀 | 6.4% | 3.5% | 7.35% | $468.69 | $469.71 | -0.2% (接近公允/略高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 可得年度 FCF 為 2022-2025；2021 年 FCF 在 Yahoo 該介面不足，因此依 skill 使用 3yr CAGR。基準成長率為 4.6%，悲觀為 0.6x，樂觀為 1.4x。
- WACC 組成：無風險利率 4.43% + Beta 0.62 x 5.5% ERP = 7.85%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：78.3%（基準情境）。
- Terminal value sensitivity：悲觀、基準、樂觀情境終值佔比分別為 72.7%、78.3%、84.1%，均高於 70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- Berkshire Hathaway 持有大量現金與短期投資；本模型以 Cash & Short-term Investments 抵減 Total Debt，得到負 Net Debt，這會明顯提高股權價值估算。

## 結論

基準情境下，BRK.B 估算內在價值約 $357.01，較 $469.71 現價低約 24.0%，在此 DCF 假設下安全邊際不足。主要不確定因子是 Berkshire 的 FCF 波動、現金/投資資產處理方式，以及終值假設對結果的高度影響。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
