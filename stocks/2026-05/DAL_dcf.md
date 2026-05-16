# DAL — DCF 估值報告 (2026-05-16)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 0.88% | 1.5% | 11.98% | $31.65 | $70.23 | -54.9% (高估) |
| 基準 | 1.47% | 2.5% | 11.48% | $40.61 | $70.23 | -42.2% (高估) |
| 樂觀 | 2.06% | 3.5% | 10.98% | $53.10 | $70.23 | -24.4% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $3.921B | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/dal/financials/cash-flow-statement/) |
| FY2025 FCF | $3.843B | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/dal/financials/cash-flow-statement/) |
| FY2024 FCF | $2.885B | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/dal/financials/cash-flow-statement/) |
| FY2023 FCF | $1.141B | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/dal/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 不採用；FY2021 FCF $0.017B、FY2022 FCF -$0.003B，CAGR 失真 | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/dal/financials/cash-flow-statement/) / 計算 |
| FCF 成長率基準假設 | 1.47% | [StockAnalysis Analyst Forecast](https://stockanalysis.com/stocks/dal/statistics/) |
| Beta | 1.25 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/dal/statistics/) |
| Total Debt | $21.40B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/dal/statistics/) |
| Cash & Equivalents | $5.05B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/dal/statistics/) |
| Net Debt | $16.35B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/dal/statistics/) / 計算 |
| 流通股數 | 653.44M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/dal/statistics/) |
| 無風險利率 (10Y) | 4.604% | [Sharecast, 2026-05-15 close](https://www.sharecast.com/news/market-report-us-close/us-close-stocks-tank-as-treasury-yields-hit-one-year-high--22502504.html) |
| 現價 | $70.23 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/dal/statistics/) |

## 關鍵假設說明

- FCF 成長率來源：因 DAL 的 2021-2022 FCF 受疫情後復甦與低基期影響，5yr FCF CAGR 不具可用的前瞻代表性；基準情境改用公開分析師 5 年營收成長預估 1.47% 作為保守 FCF 成長 proxy。
- WACC 組成：無風險利率 4.604% + Beta 1.25 x 5.5% ERP = 11.48%（基準情境）。
- 悲觀 / 樂觀 WACC：基準 WACC 分別加減 0.5 個百分點。
- 終值佔總估值比重：65.2%（基準情境）；樂觀情境為 69.9%，接近 70%，結果對終值成長率與 WACC 假設高度敏感。
- 折現計算：以最近一年 FCF $3.921B、projection_years=5、Net Debt $16.35B、流通股數 653.44M，透過 Bash/python3 依 skill DCF 公式計算。

## 結論

基準情境下，DAL 估算內在價值約 $40.61/股，較 $70.23 現價低約 42.2%，模型顯示缺乏安全邊際。最主要不確定因子是航空業 FCF 的景氣循環性、燃油成本、資本支出節奏，以及終值假設對估值的放大效果。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
