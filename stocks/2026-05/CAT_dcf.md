# CAT — DCF 估值報告 (2026-05-11)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $7.453B | [StockAnalysis Cash Flow / SEC filings](https://stockanalysis.com/stocks/cat/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 12.1% | 計算：FY2021 $4.726B → FY2025 $7.453B |
| Beta | 1.62 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/cat/statistics/) |
| Net Debt | $39.75B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/cat/statistics/) |
| 流通股數 | 460.59M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/cat/statistics/) |
| 無風險利率 (10Y) | 4.38% | [U.S. Treasury Daily Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 13.29% | 計算：4.38% + 1.62 × 5.5% |
| 現價 | $898.68 | [StockAnalysis quote, pre-market 2026-05-11](https://stockanalysis.com/stocks/cat/statistics/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 7.2% | 1.5% | 13.79% | $81.00 | $898.68 | -91.0% (高估) |
| 基準 | 12.1% | 2.5% | 13.29% | $137.58 | $898.68 | -84.7% (高估) |
| 樂觀 | 16.9% | 3.5% | 12.79% | $219.35 | $898.68 | -75.6% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：以 FY2021-FY2025 FCF CAGR 12.1% 作為基準情境；悲觀為 0.6 倍，樂觀為 1.4 倍。
- WACC 組成：無風險利率 4.38% + Beta 1.62 x 5.5% ERP = 13.29%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：65.0%（基準情境）。
- 樂觀情境終值佔總估值比重為 70.5%，結果對終值假設高度敏感，請謹慎解讀。
- Python 計算輸入：FCF base $7.453B、net debt $39.75B、shares 460.59M、projection years 5。

## 結論

基準情境下，CAT 的 DCF 內在價值約為 $137.58/股，較 $898.68 現價低約 84.7%，顯示在本模型假設下估值明顯偏高。主要不確定因子是高成長能否持續、終值假設，以及 CAT 目前市場估值是否反映了 DCF 未捕捉的結構性成長或週期性高峰。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
