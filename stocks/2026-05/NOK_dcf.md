# NOK — DCF 估值報告

as_of_date: 2026-05-10  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | €1.465B | [Yahoo Finance Cash Flow](https://finance.yahoo.com/quote/NOK/cash-flow/)；[Nokia FY2025 release](https://www.nokia.com/newsroom/nokia-corporation-financial-report-for-q4-2025-and-full-year-2025/) |
| 3yr FCF CAGR | 18.8% | 以 2022 €0.873B 至 2025 €1.465B 計算；5 年 FCF 資料不完整，改用 3 年 |
| Beta | 0.77 | [StockAnalysis NOK overview](https://stockanalysis.com/stocks/nok/) / Yahoo Finance |
| Net Debt | -€1.63B | [StockAnalysis balance sheet](https://stockanalysis.com/stocks/nok/financials/balance-sheet/)：Total Debt €3.325B - Cash €4.951B |
| 流通股數 | 5.58B | [StockAnalysis NOK overview](https://stockanalysis.com/stocks/nok/) / Yahoo Finance |
| 無風險利率 (10Y) | 4.364% | [Investing.com U.S. 10Y, May 8 2026 close](https://www.investing.com/rates-bonds/u.s.-10-year-bond-yield-historical-data) |
| WACC | 8.60%（基準） | 計算：4.364% + 0.77 x 5.5% |
| 現價 | $12.82 | [StockAnalysis NOK overview](https://stockanalysis.com/stocks/nok/)，May 8 2026 close |
| EUR/USD | 1.1790 | [Exchange-rates.org EUR/USD](https://www.exchange-rates.org/converter/eur-usd) / Yahoo Finance |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 11.3% | 1.5% | 9.10% | $6.55 | $12.82 | -48.9% (高估) |
| 基準 | 18.8% | 2.5% | 8.60% | $10.54 | $12.82 | -17.8% (高估) |
| 樂觀 | 26.4% | 3.5% | 8.10% | $18.08 | $12.82 | +41.0% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance annual FCF；因 5 年完整資料不足，採用 2022-2025 3 年 CAGR。2022 基期偏低，會放大成長率假設。
- WACC 組成：無風險利率 4.364% + Beta 0.77 x 5.5% ERP = 8.60%（基準情境）；悲觀/樂觀分別加減 0.5 個百分點。
- DCF 以 EUR 現金流計算，內在價值再用 EUR/USD 1.1790 換算為 USD/ADR。
- 終值佔總估值比重：80.0%（基準情境）。
- 終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。

## 結論

基準情境下，NOK 的 DCF 內在價值約為 $10.54/股，較 $12.82 現價低約 17.8%，安全邊際不足。主要不確定因子是 2022 低基期導致的高 FCF CAGR、2026 後 AI/Cloud 網路需求能否轉化為穩定自由現金流，以及終值假設對估值的高敏感度。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
