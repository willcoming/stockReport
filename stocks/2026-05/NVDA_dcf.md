# NVDA — DCF 估值報告 (2026-05-06)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $96.676B | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/nvda/financials/cash-flow-statement/) |
| FY2022-FY2026 FCF CAGR | 85.7% | 以 StockAnalysis FY2022 $8.132B、FY2026 $96.676B 計算 |
| Beta | 2.24 | [StockAnalysis NVDA Overview](https://stockanalysis.com/stocks/nvda/) |
| Total Debt | $11.41B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/nvda/statistics/) |
| Cash & Equivalents | $62.56B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/nvda/statistics/) |
| Net Debt | -$51.15B | Total Debt - Cash，計算 |
| 流通股數 | 24.30B | [StockAnalysis NVDA Overview](https://stockanalysis.com/stocks/nvda/) |
| 無風險利率 (10Y) | 4.43% | [Slickcharts / Treasury.gov, 2026-05-05](https://www.slickcharts.com/treasury/10-year) |
| WACC | 16.75% | 4.43% + 2.24 x 5.5%，計算 |
| 現價 | $206.61 | [StockAnalysis NVDA Overview, 2026-05-06 11:31 AM EDT](https://stockanalysis.com/stocks/nvda/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 51.4% | 1.5% | 17.25% | $139.87 | $206.61 | -32.3% (高估) |
| 基準 | 85.7% | 2.5% | 16.75% | $391.68 | $206.61 | +89.6% (低估) |
| 樂觀 | 120.0% | 3.5% | 16.25% | $981.57 | $206.61 | +375.1% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：以 FY2022 FCF $8.132B 到 FY2026 FCF $96.676B 計算 CAGR，作為基準情境；悲觀為基準 x 0.6，樂觀為基準 x 1.4。
- WACC 組成：無風險利率 4.43% + Beta 2.24 x 5.5% ERP = 16.75%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：74.8%（基準情境）。
- 基準與樂觀情境終值佔比 >70%，結果對終值假設與高成長假設高度敏感，請謹慎解讀。
- 本模型使用 5 年 projection_years，且未做 EV/EBITDA fallback，因最近 5 個 fiscal years 的 FCF 未出現 3 年以上為負。

## 結論

基準情境下，NVDA 的 DCF 內在價值估算為 $391.68/股，較 $206.61 現價約有 +89.6% 安全邊際。主要不確定因子是 FY2022-FY2026 FCF CAGR 極高，若未來 AI 基礎設施需求、毛利率或資本支出循環降溫，估值結果可能大幅下修。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
