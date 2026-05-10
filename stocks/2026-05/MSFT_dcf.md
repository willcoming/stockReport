# MSFT — DCF 估值報告 (2026-05-10)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近 12 個月 FCF | $72.916B | [StockAnalysis cash flow statement](https://stockanalysis.com/stocks/msft/financials/cash-flow-statement/) |
| FY2025 FCF | $71.611B | [StockAnalysis cash flow statement](https://stockanalysis.com/stocks/msft/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 9.62% | 以 FY2020 FCF $45.234B 與 FY2025 FCF $71.611B 計算；FY2020 來源：[MacroTrends](https://www.macrotrends.net/stocks/charts/MSFT/microsoft/free-cash-flow)，FY2025 來源：[StockAnalysis](https://stockanalysis.com/stocks/msft/financials/cash-flow-statement/) |
| Beta | 1.09 | [Yahoo Finance quote page](https://finance.yahoo.com/quote/MSFT/) |
| Cash + short-term investments | $78.272B | [Microsoft FY26 Q3 balance sheet](https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/balance-sheets) |
| Total debt | $40.262B | Current portion of long-term debt $8.839B + long-term debt $31.423B；[Microsoft FY26 Q3 balance sheet](https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/balance-sheets) |
| Net Debt | -$38.010B | Total debt $40.262B - cash & short-term investments $78.272B；計算 |
| 流通股數 | 7.429B | [Microsoft FY26 Q3 balance sheet](https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/balance-sheets) |
| 無風險利率 (10Y) | 4.36% | [Trading Economics US 10Y, May 8 2026](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 悲觀 10.86%；基準 10.36%；樂觀 9.86% | 4.36% + Beta 1.09 x 5.5% ERP，並依情境 +/-0.5%；計算 |
| 現價 | $415.12 | [Nasdaq quote API / MSFT quote](https://api.nasdaq.com/api/quote/MSFT/info?assetclass=stocks) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 5.77% | 1.5% | 10.86% | $132.00 | $415.12 | -68.2% (高估) |
| 基準 | 9.62% | 2.5% | 10.36% | $177.00 | $415.12 | -57.4% (高估) |
| 樂觀 | 13.47% | 3.5% | 9.86% | $247.42 | $415.12 | -40.4% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：以 Microsoft FY2020 FCF $45.234B 至 FY2025 FCF $71.611B 計算 5yr CAGR，得到基準情境 9.62%；悲觀為 base_rate x 0.6，樂觀為 base_rate x 1.4。
- WACC 組成：無風險利率 4.36% + Beta 1.09 x 5.5% ERP = 10.36%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- DCF 計算使用最近 12 個月 FCF $72.916B 作為起始 FCF、projection_years=5，Net Debt=-$38.010B，shares=7.429B。
- 終值佔總估值比重：悲觀 66.3%；基準 72.0%；樂觀 77.7%。
- 基準與樂觀情境終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。

## 結論

基準情境下，MSFT DCF 內在價值約為 $177.00/股，較現價 $415.12 低約 57.4%，此模型下安全邊際不足。主要不確定因子是 AI 與雲端資本支出對未來 FCF 的壓力、長期 FCF 成長是否能維持，以及 WACC/終值假設的敏感度。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
