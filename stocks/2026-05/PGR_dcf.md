# PGR — DCF 估值報告 (2026-05-06)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $17.2B | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/pgr/financials/cash-flow-statement/) |
| FY2021-FY2025 FCF | $7.518B → $17.200B | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/pgr/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 23.0% | 計算：FY2021 至 FY2025 FCF CAGR |
| Beta | 0.37 | [Yahoo Finance PGR Summary](https://finance.yahoo.com/quote/PGR) |
| Total Debt | $8.386B | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/pgr/financials/balance-sheet/) |
| Cash & Equivalents | $0.138B | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/pgr/financials/balance-sheet/) |
| Net Debt | $8.248B | 計算：Total Debt - Cash |
| 流通股數 | 584.96M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/pgr/statistics/) |
| 無風險利率 (10Y) | 4.367% | [YieldView U.S. 10Y Treasury Yield](https://www.yieldview.io/treasuries/us10y) |
| WACC | 6.40% | 計算：4.367% + 0.37 × 5.5% |
| 現價 | $199.31 | [StockAnalysis PGR Quote](https://stockanalysis.com/stocks/pgr/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 13.8% | 1.5% | 6.90% | $918.89 | $199.31 | +361.0% (低估) |
| 基準 | 23.0% | 2.5% | 6.40% | $1,811.30 | $199.31 | +808.8% (低估) |
| 樂觀 | 32.2% | 3.5% | 5.90% | $4,123.87 | $199.31 | +1,969.1% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：使用 FY2021-FY2025 Free Cash Flow，從 $7.518B 成長至 $17.200B，計算 CAGR 為 23.0%；悲觀 / 基準 / 樂觀情境分別使用 base_rate × 0.6、base_rate、base_rate × 1.4。
- WACC 組成：無風險利率 4.367% + Beta 0.37 × 5.5% ERP = 6.40%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：悲觀 80.9%、基準 87.3%、樂觀 92.7%。
- 終值佔比 >70%，本次結果對 terminal growth、WACC、以及近年保險公司 FCF 波動高度敏感，請謹慎解讀。
- DCF 由 Bash/Python 依 skill 指定公式計算；金額單位除每股價格外均為 USD millions。

## 結論

基準情境下，PGR 的 DCF 內在價值估算為 $1,811.30/股，較 $199.31 現價高約 808.8%。但此結果主要由近年 FCF 高 CAGR 與高終值佔比驅動，對 WACC、終值成長率及保險業現金流週期性非常敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
