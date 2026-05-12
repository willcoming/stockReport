# UBER — DCF 估值報告 (2026-05-07)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 5.37% | 1.5% | 11.24% | $55.54 | $79.17 | -29.8% (高估) |
| 基準 | 8.95% | 2.5% | 10.74% | $74.85 | $79.17 | -5.5% (高估) |
| 樂觀 | 12.53% | 3.5% | 10.24% | $104.20 | $79.17 | +31.6% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $9.80B（TTM，截至 2026-03-31） | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/uber/financials/cash-flow-statement/) |
| 歷史 FCF | 2025: $9.763B；2024: $6.895B；2023: $3.362B；2022: $0.390B；2021: -$0.743B | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/uber/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（2021 FCF 為負，CAGR 不具經濟意義） | 計算 |
| 正常化 Base 成長率 | 8.95% | [StockAnalysis Analyst Forecast](https://stockanalysis.com/stocks/uber/statistics/) |
| Beta | 1.16 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/uber/statistics/) |
| Cash & Equivalents | $6.09B | [StockAnalysis Balance Sheet 摘要](https://stockanalysis.com/stocks/uber/statistics/) |
| Total Debt | $12.42B | [StockAnalysis Balance Sheet 摘要](https://stockanalysis.com/stocks/uber/statistics/) |
| Net Debt | $6.33B | 計算：$12.42B - $6.09B |
| 流通股數 | 2.04B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/uber/statistics/) |
| 無風險利率 (10Y) | 4.36%（2026-05-06，估值時最新可得） | [U.S. Treasury Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 悲觀 11.24%；基準 10.74%；樂觀 10.24% | 計算 |
| 現價 | $79.17（2026-05-06 close） | [StockAnalysis UBER](https://stockanalysis.com/stocks/uber/financials/cash-flow-statement/) |

## 關鍵假設說明

- FCF 成長率來源：2021 FCF 為負、2022 FCF 低基期，直接使用歷史 FCF CAGR 會嚴重扭曲，因此以公開的 5Y revenue growth forecast 8.95% 作為正常化 Base FCF 成長率；Bear / Bull 依 skill 規則分別為 Base x 0.6 / x 1.4。
- WACC 組成：無風險利率 4.36% + Beta 1.16 x 5.5% ERP = 10.74%；Bear 加 0.5%，Bull 減 0.5%。
- 終值佔總估值比重：70.7%（基準情境）。
- 基準情境終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀；樂觀情境終值佔比約 76.2%，敏感度更高。
- DCF 使用 $9.799B TTM FCF、$6.33B net debt、2.04B shares，並以 Bash / Python 依 5 年 projection_years 計算。

## 結論

基準情境下，UBER 內在價值約 $74.85/股，較 $79.17 現價低約 5.5%，安全邊際不足。主要不確定因子是 FCF 成長能否長期維持、Beta/WACC 變動，以及終值假設對估值結果的高度影響。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
