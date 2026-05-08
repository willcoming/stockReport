# NET — DCF 估值報告

as_of_date: 2026-05-08  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $287.5M | [StockAnalysis cash flow / SEC filings](https://stockanalysis.com/stocks/net/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（2021、2022 FCF 為負，CAGR 不具意義） | [StockAnalysis cash flow](https://stockanalysis.com/stocks/net/financials/cash-flow-statement/) |
| 3yr FCF CAGR | 43.3% | 以 FY2023 $140.01M 至 FY2025 $287.5M 計算 |
| Beta | 1.67 | [StockAnalysis statistics](https://stockanalysis.com/stocks/net/statistics/) |
| Total Debt | $3.525B | [StockAnalysis balance sheet](https://stockanalysis.com/stocks/net/financials/balance-sheet/) |
| Cash & Short-Term Investments | $4.164B | [StockAnalysis balance sheet](https://stockanalysis.com/stocks/net/financials/balance-sheet/) |
| Net Debt | -$639.0M（net cash） | 計算：$3.525B - $4.164B |
| 流通股數 | 353.37M | [StockAnalysis statistics](https://stockanalysis.com/stocks/net/statistics/) |
| 無風險利率 (10Y) | 4.36% | [Trading Economics, 2026-05-08](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 悲觀 14.05% / 基準 13.55% / 樂觀 13.05% | 計算 |
| 現價 | $193.00 | [StockAnalysis statistics, 2026-05-08](https://stockanalysis.com/stocks/net/statistics/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 26.0% | 1.5% | 14.05% | $18.17 | $193.00 | -90.6% (高估) |
| 基準 | 43.3% | 2.5% | 13.55% | $34.59 | $193.00 | -82.1% (高估) |
| 樂觀 | 60.6% | 3.5% | 13.05% | $66.01 | $193.00 | -65.8% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：因 FY2021、FY2022 FCF 為負，5 年 CAGR 不具可用性；改用 FY2023 $140.01M 至 FY2025 $287.5M 的 3 年正 FCF CAGR，計算得基準成長率 43.3%。
- WACC 組成：無風險利率 4.36% + Beta 1.67 x 5.5% ERP = 13.55%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：悲觀 66.1%、基準 73.7%、樂觀 79.5%。
- 基準與樂觀情境終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- 本次 DCF 使用 FY2025 FCF $287.5M 作為起始 FCF，並以 5 年投影期計算。

## 結論

基準情境下，NET 的 DCF 內在價值約為 $34.59/股，較 2026-05-08 盤中現價 $193.00 低約 82.1%，顯示以此模型與假設計算時安全邊際為負。主要不確定因子是 Cloudflare 是否能長期維持高 FCF 成長，以及終值假設對估值的高度影響。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
