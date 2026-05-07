# DIS — DCF 估值報告

as_of_date: 2026-05-07  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $10.077B | [Yahoo Finance Cash Flow](https://de.finance.yahoo.com/quote/DIS/cash-flow/)、[StockAnalysis Cash Flow](https://stockanalysis.com/stocks/dis/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 50.0% | 以 FY2021 $1.988B 至 FY2025 $10.077B 計算；[StockAnalysis Cash Flow](https://stockanalysis.com/stocks/dis/financials/cash-flow-statement/) |
| Beta | 1.42 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/dis/statistics/)、[Yahoo Finance Statistics](https://uk.finance.yahoo.com/quote/DIS/key-statistics/) |
| Total Debt | $47.358B | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/dis/financials/balance-sheet/) |
| Cash & Equivalents | $5.682B | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/dis/financials/balance-sheet/) |
| Net Debt | $41.676B | Total Debt $47.358B - Cash $5.682B；[StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/dis/financials/balance-sheet/) |
| 流通股數 | 1.74B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/dis/statistics/) |
| 無風險利率 (10Y) | 4.316% | [MarketScreener / Reuters US 10Y Cash, 2026-05-07](https://www.marketscreener.com/news/u-s-treasury-yields-hold-declines-after-data-yield-on-10-year-treasury-note-last-down-2-2-basis-po-ce7f58d3de88f020) |
| WACC | 12.13% | 4.316% + 1.42 x 5.5%；計算 |
| 現價 | $108.35 | [StockAnalysis Statistics, 2026-05-07 pre-market](https://stockanalysis.com/stocks/dis/statistics/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 30.0% | 1.5% | 12.63% | $129.90 | $108.35 | +19.9% (低估) |
| 基準 | 50.0% | 2.5% | 12.13% | $316.12 | $108.35 | +191.8% (低估) |
| 樂觀 | 70.1% | 3.5% | 11.63% | $703.03 | $108.35 | +548.9% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：FY2021-FY2025 FCF 從 $1.988B 增至 $10.077B，5 年資料點 CAGR 為 50.0%；悲觀 / 基準 / 樂觀分別使用 base_rate x 0.6 / 1.0 / 1.4。
- WACC 組成：無風險利率 4.316% + Beta 1.42 x 5.5% ERP = 12.13%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：77.8%（基準情境）。
- 終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- DIS 的 5yr FCF CAGR 受 FY2021-FY2022 低基期與 FY2025 復甦影響很大，因此本模型結果高度依賴「高速 FCF 成長能否延續」這一假設。

## 結論

基準情境下，DIS 的 DCF 內在價值為 $316.12/股，較 $108.35 現價高約 191.8%；但估值主要由終值貢獻，且 FY2021-FY2025 FCF CAGR 明顯受低基期影響，最主要不確定因子是未來 5 年 FCF 成長是否能接近歷史復甦期水準。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
