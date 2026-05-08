# ANET — DCF 估值報告

as_of_date：2026-05-08  
projection_years：5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $4.252B | [StockAnalysis FY2025 Free Cash Flow](https://stockanalysis.com/stocks/anet/financials/)；[SEC 10-K cash flow](https://www.sec.gov/Archives/edgar/data/1596532/000159653226000013/anet-20251231.htm) |
| 5yr FCF CAGR | 45.4% | 以 FY2021 $0.951B 至 FY2025 $4.252B 計算；[StockAnalysis](https://stockanalysis.com/stocks/anet/financials/) |
| Beta | 1.67 | [StockAnalysis Beta (5Y)](https://stockanalysis.com/stocks/anet/statistics/) |
| Net Debt | -$12.35B | Cash $12.35B、Debt n/a；[StockAnalysis Balance Sheet statistics](https://stockanalysis.com/stocks/anet/statistics/) |
| 流通股數 | 1.26B | [StockAnalysis shares outstanding](https://stockanalysis.com/stocks/anet/statistics/) |
| 無風險利率 (10Y) | 4.39% | [Trading Economics US 10Y yield, latest as of May 7, 2026](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 13.58% | 計算：4.39% + 1.67 × 5.5% |
| 現價 | $140.25 | [StockAnalysis real-time price, May 8, 2026 10:40 AM EDT](https://stockanalysis.com/stocks/anet/statistics/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 27.2% | 1.5% | 14.08% | $80.52 | $140.25 | -42.6% (高估) |
| 基準 | 45.4% | 2.5% | 13.58% | $154.79 | $140.25 | +10.4% (低估) |
| 樂觀 | 63.6% | 3.5% | 13.08% | $299.06 | $140.25 | +113.2% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：使用 FY2021-FY2025 Free Cash Flow CAGR；FY2022 低基期使 CAGR 偏高，因此此模型對成長率假設高度敏感。
- WACC 組成：無風險利率 4.39% + Beta 1.67 x 5.5% ERP = 13.58%；悲觀/樂觀情境分別加減 0.5 個百分點。
- Net Debt：使用最新統計資料的 net cash $12.35B，因此 DCF equity value = enterprise value + net cash。
- 終值佔總估值比重：74.1%（基準情境）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。

## 結論

基準情境下，ANET 的 DCF 內在價值約為 $154.79/股，較 $140.25 現價高約 10.4%。但基準與樂觀情境的終值佔比超過 70%，且歷史 FCF CAGR 受 FY2022 低點影響明顯，主要不確定因子是未來 5 年 FCF 成長能否維持高水準。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
