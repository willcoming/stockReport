# ARM — DCF 估值報告 (2026-05-07)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $0.882B | [Arm FY2026 Q4 shareholder letter / SEC 6-K](https://www.sec.gov/Archives/edgar/data/1973239/000197323926000062/exhibit992fye26q431-marx26.htm) |
| 5yr FCF CAGR | 資料不足；改用 3yr CAGR 13.3% | FY2023-FY2025：[Arm FYE25 Q4 presentation](https://investors.arm.com/static-files/6bb3def3-ddce-4588-bf81-b5a718973274)；FY2026：[SEC 6-K](https://www.sec.gov/Archives/edgar/data/1973239/000197323926000062/exhibit992fye26q431-marx26.htm)；計算 |
| Beta | 3.41 | [StockAnalysis ARM statistics](https://stockanalysis.com/stocks/arm/statistics/) |
| Net Debt | -$2.319B | [SEC 6-K](https://www.sec.gov/Archives/edgar/data/1973239/000197323926000062/exhibit992fye26q431-marx26.htm)：Operating lease liabilities $0.432B - Cash $2.751B |
| 流通股數 | 1.064B | [SEC 6-K](https://www.sec.gov/Archives/edgar/data/1973239/000197323926000062/exhibit992fye26q431-marx26.htm) |
| 無風險利率 (10Y) | 4.36% | [Slickcharts / Treasury.gov data](https://www.slickcharts.com/treasury/10-year) |
| WACC | 23.12% | 計算：4.36% + 3.41 x 5.5% |
| 現價 | $237.30 | [MarketBeat](https://www.marketbeat.com/earnings/reports/2026-5-6-arm-holdings-plc-american-depositary-shares-stock/) / [StockAnalysis](https://stockanalysis.com/stocks/arm/statistics/)；2026-05-06 美股收盤價 |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 8.0% | 1.5% | 23.62% | $6.93 | $237.30 | -97.1% (高估) |
| 基準 | 13.3% | 2.5% | 23.12% | $8.16 | $237.30 | -96.6% (高估) |
| 樂觀 | 18.7% | 3.5% | 22.62% | $9.75 | $237.30 | -95.9% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：公開資料不足 5 年，因此依 skill 規則改用 FY2023-FY2026 的 3 年 FCF CAGR；計算式為 `(882 / 606)^(1/3) - 1 = 13.3%`。
- WACC 組成：無風險利率 4.36% + Beta 3.41 x 5.5% ERP = 23.12%；悲觀情境加 0.50 個百分點，樂觀情境減 0.50 個百分點。
- 終值佔總估值比重：45.6%（基準情境）。
- 終值佔比未超過 70%，但 ARM 的估值對 Beta、WACC、長期 FCF 成長率仍高度敏感。

## 結論

基準情境下，ARM 的 DCF 內在價值約為 $8.16/股，較 $237.30 現價低約 96.6%，顯示以此模型與高 Beta 折現率估算時，市場價格大幅高於 DCF 內在價值。主要不確定因子是 ARM AGI CPU 與資料中心業務能否讓未來 FCF 呈現遠高於歷史資料的成長，以及高 Beta 對 WACC 的放大效果。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
