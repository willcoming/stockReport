# GOOGL — DCF 估值報告

**as_of_date:** 2026-05-07  
**projection_years:** 5 年  
**價格基準:** $398.04（2026-05-06 美股 regular close；2026-05-07 台北時間可得的最新收盤資料）

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $73.266B（FY2025） | [Billiver / SEC 10-K derived data](https://billiver.com/company/google/cash-flow-statement)、[StockAnalysis Cash Flow](https://stockanalysis.com/stocks/googl/financials/cash-flow-statement/) |
| 2020 FCF | $42.843B | [Billiver / SEC 10-K derived data](https://billiver.com/company/google/cash-flow-statement)、[Finboard](https://finboard.net/companies/GOOGL/financials/FreeCashFlow) |
| 5yr FCF CAGR | 11.33% | 計算：2020 FCF $42.843B 至 2025 FCF $73.266B |
| Beta | 1.267 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/googl/statistics/) |
| Total Debt | $95.876B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/googl/statistics/) |
| Cash & Short-term Investments | $126.840B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/googl/statistics/) |
| Net Debt | -$30.964B（net cash） | 計算：$95.876B - $126.840B |
| 流通股數 | 12.12B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/googl/statistics/) |
| 無風險利率 (10Y) | 4.36%（2026-05-06） | [U.S. Treasury Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 悲觀 11.83%；基準 11.33%；樂觀 10.83% | 計算：risk-free + Beta × 5.5% ERP，悲觀/樂觀各加減 0.50% |
| 現價 | $398.04 | [StockAnalysis GOOGL Quote](https://stockanalysis.com/stocks/googl/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 6.8% | 1.5% | 11.83% | $76.12 | $398.04 | -80.9% (高估) |
| 基準 | 11.3% | 2.5% | 11.33% | $102.94 | $398.04 | -74.1% (高估) |
| 樂觀 | 15.9% | 3.5% | 10.83% | $143.71 | $398.04 | -63.9% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：使用 2020-2025 年 FCF CAGR，$42.843B 成長至 $73.266B，得到基準成長率 11.33%；悲觀為 0.6x，樂觀為 1.4x。
- WACC 組成：無風險利率 4.36% + Beta 1.267 x 5.5% ERP = 11.33%；悲觀情境加 0.50%，樂觀情境減 0.50%。
- 終值佔總估值比重：悲觀 64.1%；基準 69.9%；樂觀 75.5%。
- 樂觀情境終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- 本模型使用 FY2025 FCF 作為起始 FCF；若改用 2026 Q1 後 TTM FCF，估值會進一步受近期 AI CapEx 強度影響。

## 結論

基準情境下，GOOGL 估算內在價值為 $102.94/股，較 $398.04 現價低約 74.1%，此 DCF 框架下未呈現安全邊際。主要不確定因子是 AI 基礎建設 CapEx 對未來 FCF 的壓力、長期 FCF 成長率，以及終值假設。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
