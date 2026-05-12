# MU — DCF 估值報告

As of: 2026-05-07  
Projection years: 5

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 46.56% | 1.5% | 15.42% | $322.67 | $666.59 | -51.6% (高估) |
| 基準 | 77.60% | 2.5% | 14.92% | $868.45 | $666.59 | +30.3% (低估) |
| 樂觀 | 108.64% | 3.5% | 14.42% | $2,129.37 | $666.59 | +219.4% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $10.28B | [StockAnalysis — Cash Flow](https://stockanalysis.com/stocks/mu/statistics/)、[FinanceCharts — Free Cash Flow](https://www.financecharts.com/stocks/MU/growth/free-cash-flow) |
| 5yr FCF CAGR | 77.60% | [FinanceCharts — FCF CAGR](https://www.financecharts.com/stocks/MU/growth/free-cash-flow) |
| Beta | 1.92 | [StockAnalysis — Statistics](https://stockanalysis.com/stocks/mu/statistics/) |
| Net Debt | -$5.83B（Net Cash） | [StockAnalysis — Balance Sheet](https://stockanalysis.com/stocks/mu/statistics/) |
| 流通股數 | 1.13B | [StockAnalysis — Share Statistics](https://stockanalysis.com/stocks/mu/statistics/) |
| 無風險利率 (10Y) | 4.36% | [U.S. Treasury — Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 悲觀 15.42% / 基準 14.92% / 樂觀 14.42% | 計算：10Y + Beta × 5.5% ERP，情境調整 ±0.5% |
| 現價 | $666.59 | [StockAnalysis — MU close, May 6 2026](https://stockanalysis.com/stocks/mu/statistics/) |

## 關鍵假設說明

- FCF 成長率來源：採用 FinanceCharts 顯示的 5yr FCF CAGR 77.60%；MU 近年 FCF 波動極大，因此此成長率會顯著放大估值敏感度。
- WACC 組成：無風險利率 4.36% + Beta 1.92 x 5.5% ERP = 14.92%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：76.7%（基準情境）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- 本次估值透過 Bash 執行 Python DCF 計算；FCF 單位為十億美元，Net Debt 使用 net cash -$5.83B，流通股數使用 1.13B。

## 結論

基準情境下，MU 的 DCF 內在價值約為 $868.45/股，相對 $666.59 現價約有 +30.3% 安全邊際。不過估值高度依賴 77.60% 的 5yr FCF CAGR 與終值假設，且基準情境終值佔比 76.7%，因此主要不確定因子是 AI 記憶體景氣、資本支出強度與高 FCF 成長能否持續。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
