# SIMO — DCF 估值報告

as_of_date: 2026-05-10  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $6.30M | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/simo/financials/cash-flow-statement/) |
| 2021-2025 FCF | $150.04M / $50.95M / $98.77M / $32.74M / $6.30M | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/simo/financials/cash-flow-statement/) |
| 5yr FCF CAGR | -54.7% | 依 2021-2025 FCF 計算 |
| Beta | 1.67 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/simo/statistics/) |
| Net Debt | -$135.68M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/simo/statistics/) |
| 流通股數 | 33.98M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/simo/statistics/) |
| 無風險利率 (10Y) | 4.38% | [U.S. Treasury Daily Treasury Yield Curve, 2026-05-08](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value_month=202605) |
| WACC | 13.57% | 計算：4.38% + 1.67 x 5.5% |
| 現價 | $253.59 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/simo/statistics/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -76.6% | 1.5% | 14.07% | $4.04 | $253.59 | -98.4% (高估) |
| 基準 | -54.7% | 2.5% | 13.57% | $4.13 | $253.59 | -98.4% (高估) |
| 樂觀 | -32.8% | 3.5% | 13.07% | $4.39 | $253.59 | -98.3% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：以 FY2021 FCF $150.04M 至 FY2025 FCF $6.30M 計算，CAGR 為 -54.7%。因 CAGR 為負，悲觀情境使用更大的衰退幅度，樂觀情境使用較小的衰退幅度。
- WACC 組成：無風險利率 4.38% + Beta 1.67 x 5.5% ERP = 13.57%；悲觀 / 樂觀情境分別加減 0.5 個百分點。
- Net Debt：公司為淨現金狀態，Net Debt = -$135.68M，DCF equity value 因此加回淨現金。
- 終值佔總估值比重：12.4%（基準情境）。
- 終值佔比未超過 70%，但結果對「最近一年 FCF 基準值」高度敏感；SIMO FY2025 FCF 明顯低於 2021-2024 水準。

## 結論

基準情境下，SIMO 的 DCF 內在價值約為 $4.13/股，較 $253.59 現價低約 98.4%，安全邊際不足。此結果主要受 FY2025 FCF 大幅下降與負 FCF CAGR 影響；若未來 FCF 顯著恢復，估值結論可能大幅改變。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
