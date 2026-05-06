# AAPL — DCF 估值報告

as_of_date：2026-05-06  
projection_years：5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $98.767B | [Macrotrends — Apple Free Cash Flow 2012-2025](https://www.macrotrends.net/stocks/charts/AAPL/apple/free-cash-flow) |
| 5yr FCF CAGR | 6.13% | 以 2020 FCF $73.365B 與 2025 FCF $98.767B 計算 |
| Beta | 1.065 | [Yahoo Finance — AAPL](https://finance.yahoo.com/quote/AAPL/) |
| Total Debt | $84.711B | [Apple FY26 Q2 Consolidated Financial Statements](https://www.apple.com/newsroom/pdfs/fy2026q2/FY26_Q2_Consolidated_Financial_Statements.pdf) |
| Cash + Marketable Securities | $146.595B | [Apple FY26 Q2 Consolidated Financial Statements](https://www.apple.com/newsroom/pdfs/fy2026q2/FY26_Q2_Consolidated_Financial_Statements.pdf) |
| Net Debt | -$61.884B | Total Debt - Cash + Marketable Securities，計算 |
| 流通股數 | 14.667688B | [Apple FY26 Q2 Consolidated Financial Statements](https://www.apple.com/newsroom/pdfs/fy2026q2/FY26_Q2_Consolidated_Financial_Statements.pdf) |
| 無風險利率 (10Y) | 4.356% | [Yahoo Finance — ^TNX](https://finance.yahoo.com/quote/%5ETNX/) |
| WACC | 10.21% | 計算 |
| 現價 | $285.58 | [Yahoo Finance — AAPL](https://finance.yahoo.com/quote/AAPL/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 3.68% | 1.5% | 10.71% | $85.43 | $285.58 | -70.1% (高估) |
| 基準 | 6.13% | 2.5% | 10.21% | $108.45 | $285.58 | -62.0% (高估) |
| 樂觀 | 8.58% | 3.5% | 9.71% | $143.41 | $285.58 | -49.8% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：以 2020-2025 年 annual Free Cash Flow CAGR 6.13% 作為基準情境；悲觀情境為基準 x 0.6，樂觀情境為基準 x 1.4。
- WACC 組成：無風險利率 4.36% + Beta 1.065 x 5.5% ERP = 10.21%（基準情境）。
- Net Debt 使用 Total Debt $84.711B - Cash + Marketable Securities $146.595B = -$61.884B，代表淨現金。
- 終值佔總估值比重：71.1%（基準情境）。
- 終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。

## 結論

基準情境下，AAPL 估算內在價值為 $108.45/股，較 $285.58 現價低約 62.0%，本模型顯示安全邊際不足。主要不確定因子是長期 FCF 成長率、WACC、以及終值假設；尤其基準情境終值佔比超過 70%，估值對長期假設高度敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
