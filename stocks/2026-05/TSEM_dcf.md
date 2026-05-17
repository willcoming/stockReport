# TSEM — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 25.0% | 1.5% | 9.77% | $131.28 | $273.98 | -52.1% (高估) |
| 基準 | 41.7% | 2.5% | 9.27% | $270.33 | $273.98 | -1.3% (高估) |
| 樂觀 | 58.4% | 3.5% | 8.77% | $574.58 | $273.98 | +109.7% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一期 FCF | $433.5M TTM | [StockAnalysis TSEM Cash Flow Statement](https://stockanalysis.com/stocks/tsem/financials/cash-flow-statement/) |
| FY2025 FCF | -$48.94M | [StockAnalysis TSEM Cash Flow Statement](https://stockanalysis.com/stocks/tsem/financials/cash-flow-statement/) |
| FY2021 FCF | $107.49M | [StockAnalysis TSEM Cash Flow Statement](https://stockanalysis.com/stocks/tsem/financials/cash-flow-statement/) |
| FCF CAGR | 41.7%（FY2021 → TTM） | 由 $107.49M 與 $433.5M 計算 |
| Beta | 0.85 | [StockAnalysis TSEM Overview / Statistics](https://stockanalysis.com/stocks/tsem/) |
| Total Debt | $155.86M | [StockAnalysis TSEM Statistics](https://stockanalysis.com/stocks/tsem/statistics/) |
| Cash | $1.50B | [StockAnalysis TSEM Statistics](https://stockanalysis.com/stocks/tsem/statistics/) |
| Net Debt | -$1.34B（net cash） | Total Debt - Cash |
| 流通股數 | 112.74M | [StockAnalysis TSEM Statistics](https://stockanalysis.com/stocks/tsem/statistics/) |
| 無風險利率 (10Y) | 4.59% | [U.S. Treasury Daily Treasury Par Yield Curve Rates, 05/15/2026](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 9.27%（基準） | 4.59% + 0.85 x 5.5% |
| 現價 | $273.98（2026-05-15 收盤） | [StockAnalysis TSEM Overview](https://stockanalysis.com/stocks/tsem/) |

## 關鍵假設說明

- FCF 成長率來源：FY2025 FCF 為負，單用 FY2025 會使 CAGR 失真；本模型以截至 2026-03 的 TTM FCF $433.5M 作為 DCF 起點，並用 FY2021 FCF $107.49M 至 TTM FCF 的 implied CAGR 41.7% 作為基準情境。
- WACC 組成：無風險利率 4.59% + Beta 0.85 x 5.5% ERP = 9.27%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：75.8%（悲觀）、82.7%（基準）、87.9%（樂觀）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀；本次三個情境皆超過 70%，因此內在價值主要由第 5 年後的終值假設驅動。

## 結論

基準情境下，TSEM 的 DCF 內在價值約為 $270.33/股，較 2026-05-15 收盤價 $273.98 低約 1.3%，模型顯示安全邊際不足。最主要的不確定因子是 TTM FCF 是否可持續，以及終值成長率與 WACC 對估值的高度敏感性。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
