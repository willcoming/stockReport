# INTC — DCF 估值報告 (2026-05-07)

## DCF 估值結果

INTC 最近 5 年中有 3 年以上 FCF 為負，且 TTM FCF 仍為負，因此依 skill 規則改用 **EV/EBITDA fallback**；以下不是標準 DCF，而是 multiple-based fallback intrinsic value。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A（FCF 多年為負） | N/A | 16.91% | $75.94 | $113.01 | -32.8%（高估） |
| 基準 | N/A（FCF 多年為負） | N/A | 16.41% | $95.52 | $113.01 | -15.5%（高估） |
| 樂觀 | N/A（FCF 多年為負） | N/A | 15.90% | $115.10 | $113.01 | +1.9%（低估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | TTM -$3.12B；FY2025 -$4.949B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/intc/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 不適用；2022-2026 TTM 多數年份 FCF 為負 | 計算 |
| Beta | 2.19 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/intc/statistics/) |
| Net Debt | $11.93B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/intc/statistics/) |
| 流通股數 | 5.03B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/intc/statistics/) |
| TTM EBITDA | $14.17B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/intc/statistics/) |
| Semiconductor EV/EBITDA median | 34.75x | [Damodaran / NYU Stern](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/vebitda.html) |
| 無風險利率 (10Y) | 4.36% | [U.S. Treasury Daily Yield Curve](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value_month=202605) |
| WACC | 基準 16.41% | 計算：4.36% + 2.19 x 5.5% |
| 現價 | $113.01 | [Investing.com](https://www.investing.com/equities/intel-corp) / [FinanceCharts](https://www.financecharts.com/stocks/INTC/summary/price) |

## 關鍵假設說明

- FCF 成長率來源：不適用；INTC 的 FY2022、FY2023、FY2024、FY2025 與 TTM FCF 多數為負，標準 DCF 對終值與轉正假設高度失真。
- Fallback 估值：以 TTM EBITDA $14.17B，套用 Semiconductor EV/EBITDA median 34.75x；悲觀/樂觀情境分別使用 0.8x / 1.2x median。
- WACC 組成：無風險利率 4.36% + Beta 2.19 x 5.5% ERP = 16.41%（基準情境）。
- 終值佔總估值比重：N/A；本次因 FCF 多年為負改用 EV/EBITDA fallback，未計算 DCF terminal value。
- 現行市場 EV/EBITDA 約 40.91x，已高於 Damodaran Semiconductor median 34.75x。

## 結論

基準情境下，INTC 的 fallback 內在價值約 $95.52/股，較 $113.01 現價低約 15.5%，顯示目前估值缺乏明顯安全邊際。最大不確定因子是 Intel 能否把負 FCF 轉正，以及市場是否繼續給予高於半導體產業 median 的 EV/EBITDA multiple。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
