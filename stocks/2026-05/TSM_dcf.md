# TSM — DCF 估值報告 (2026-05-07)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | NT$1,002.6B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/tsm/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 38.4% | 由 FY2021 NT$273.0B 至 FY2025 NT$1,002.6B 計算；[StockAnalysis Cash Flow](https://stockanalysis.com/stocks/tsm/financials/cash-flow-statement/) |
| Beta | 1.26 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/tsm/statistics/) / [Yahoo Finance](https://finance.yahoo.com/quote/TSM/) |
| Net Debt | -NT$2,367.3B（淨現金） | Total Debt NT$1,016.3B - Cash & Short-term Investments NT$3,383.6B；[StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/tsm/financials/balance-sheet/) |
| 流通股數 | 5.186B ADS-equivalent | [StockAnalysis Financials](https://stockanalysis.com/stocks/tsm/financials/)；每 ADS 代表 5 普通股：[TSMC](https://pr.tsmc.com/chinese/news/2232) |
| 無風險利率 (10Y) | 4.36% | [U.S. Treasury Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 11.29%（基準） | 計算：4.36% + 1.26 x 5.5% |
| 現價 | $419.50 | [StockAnalysis](https://stockanalysis.com/stocks/tsm/statistics/) / [Yahoo Finance](https://finance.yahoo.com/quote/TSM/) |
| 匯率 | 31.299 TWD/USD | Yahoo Finance `TWD=X` |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 23.1% | 1.5% | 11.79% | $154.66 | $419.50 | -63.1% (高估) |
| 基準 | 38.4% | 2.5% | 11.29% | $291.42 | $419.50 | -30.5% (高估) |
| 樂觀 | 53.8% | 3.5% | 10.79% | $558.68 | $419.50 | +33.2% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：使用 FY2021-FY2025 年度 FCF CAGR，從 NT$273.0B 成長至 NT$1,002.6B，計算得 38.4%；悲觀/基準/樂觀分別使用 base_rate x 0.6、base_rate、base_rate x 1.4。
- WACC 組成：無風險利率 4.36% + Beta 1.26 x 5.5% ERP = 11.29%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- DCF 口徑：以 NT$ FCF 與 NT$ net debt 計算 equity value，除以 5.186B ADS-equivalent shares，再用 31.299 TWD/USD 換算為每 ADS 美元內在價值。
- 終值佔總估值比重：77.5%（基準情境）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀；本次三個情境終值佔比皆高於 70%。

## 結論

基準情境下，TSM 的 DCF 內在價值約為每 ADS $291.42，較現價 $419.50 低約 30.5%，模型顯示安全邊際不足。主要不確定因子是 FY2021-FY2025 FCF CAGR 偏高且終值佔比高，使估值對長期成長率、WACC 與終值成長率非常敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
