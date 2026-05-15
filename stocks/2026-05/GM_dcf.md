# GM — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 13.8% | 1.5% | 12.07% | $188.06 | $77.75 | +141.9% (低估) |
| 基準 | 23.0% | 2.5% | 11.57% | $374.12 | $77.75 | +381.2% (低估) |
| 樂觀 | 32.2% | 3.5% | 11.07% | $688.87 | $77.75 | +786.0% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| as_of_date | 2026-05-15 | 使用者輸入；美股價格採 2026-05-14 收盤 |
| projection_years | 5 年 | 使用者輸入 |
| 最近一年 FCF | $17.564B | [StockAnalysis GM Cash Flow](https://stockanalysis.com/stocks/gm/financials/cash-flow-statement/)、[MacroTrends GM Free Cash Flow](https://www.macrotrends.net/stocks/charts/GM/general-motors/free-cash-flow) |
| FY2021 FCF | $7.679B | [StockAnalysis GM Cash Flow](https://stockanalysis.com/stocks/gm/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 23.0% | 依 FY2021 $7.679B 至 FY2025 $17.564B 計算 |
| Beta | 1.29 | [StockAnalysis GM Statistics](https://stockanalysis.com/stocks/gm/statistics/) |
| Total Debt | $128.77B | [StockAnalysis GM Statistics](https://stockanalysis.com/stocks/gm/statistics/) |
| Cash & Cash Equivalents | $24.42B | [StockAnalysis GM Statistics](https://stockanalysis.com/stocks/gm/statistics/) |
| Net Debt | $104.36B | Total Debt - Cash & Cash Equivalents |
| 流通股數 | 901.67M | [StockAnalysis GM Statistics](https://stockanalysis.com/stocks/gm/statistics/) |
| 無風險利率 (10Y) | 4.47% | [U.S. Treasury Daily Treasury Rates, 2026-05-14](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 11.57%（基準） | 4.47% + 1.29 x 5.5% |
| 現價 | $77.75 | [StockAnalysis GM Statistics](https://stockanalysis.com/stocks/gm/statistics/) |

## 關鍵假設說明

- FCF 成長率來源：使用 FY2021 至 FY2025 annual Free Cash Flow CAGR，基準情境為 23.0%；悲觀與樂觀情境分別使用 base_rate x 0.6 與 base_rate x 1.4。
- WACC 組成：無風險利率 4.47% + Beta 1.29 x 5.5% ERP = 11.57%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：66.4%（悲觀）、73.1%（基準）、79.0%（樂觀）。
- 基準與樂觀情境終值佔比 >70%，結果對終值成長率、WACC 與高 FCF CAGR 假設高度敏感，請謹慎解讀。
- 本次 DCF 以 Bash 執行 `python3 -c` 計算，使用最近年度 FCF $17.564B、Net Debt $104.36B、流通股數 901.67M。

## 結論

基準情境下，GM 的 DCF 內在價值為 $374.12/股，相對 $77.75 現價顯示 +381.2% 安全邊際；但主要由 23.0% 歷史 FCF CAGR 與 73.1% 終值佔比推動，估值對成長與折現率假設高度敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
