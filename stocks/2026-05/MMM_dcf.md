# MMM — DCF 估值報告

## DCF 估值結果

估值基準日：2026-05-15；投影年期：5 年。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -18.1% | 1.5% | 10.96% | $-4.72 | $145.12 | -103.3% (高估) |
| 基準 | -30.1% | 2.5% | 10.46% | $-9.29 | $145.12 | -106.4% (高估) |
| 樂觀 | -42.2% | 3.5% | 9.95% | $-12.34 | $145.12 | -108.5% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $1.396B | [SEC 3M 2025 10-K / Companyfacts](https://data.sec.gov/api/xbrl/companyfacts/CIK0000066740.json)：2025 operating cash flow $2.306B - capex $0.910B |
| 5yr FCF CAGR | -30.1% | 計算；SEC FCF：2021 $5.851B、2022 $3.842B、2023 $5.065B、2024 $0.638B、2025 $1.396B |
| Beta | 1.09 | [StockAnalysis MMM Statistics](https://stockanalysis.com/stocks/mmm/statistics/) |
| Total Debt | $12.556B | [SEC 3M 2026 Q1 Companyfacts](https://data.sec.gov/api/xbrl/companyfacts/CIK0000066740.json)：DebtCurrent $1.650B + LongTermDebtNoncurrent $10.906B |
| Cash & Equivalents | $3.729B | [SEC 3M 2026 Q1 Companyfacts](https://data.sec.gov/api/xbrl/companyfacts/CIK0000066740.json) |
| Net Debt | $8.827B | 計算：$12.556B - $3.729B |
| 流通股數 | 521.567M | [SEC 3M 2026 Q1 Companyfacts](https://data.sec.gov/api/xbrl/companyfacts/CIK0000066740.json) |
| 無風險利率 (10Y) | 4.46% | [FRED DGS10](https://fred.stlouisfed.org/series/DGS10)，最新可得值 2026-05-13 |
| WACC | 10.46% | 計算：4.46% + 1.09 x 5.5% ERP |
| 現價 | $145.12 | [Yahoo Finance chart API](https://query1.finance.yahoo.com/v8/finance/chart/MMM?range=1d&interval=1m)，regularMarketPrice |

## 關鍵假設說明

- FCF 成長率來源：使用 2021-2025 年 SEC 現金流資料計算 5 年歷史 FCF CAGR，基準情境為 -30.1%；悲觀與樂觀情境依 skill 規則分別使用 base_rate x 0.6 與 base_rate x 1.4。
- WACC 組成：無風險利率 4.46% + Beta 1.09 x 5.5% ERP = 10.46%；悲觀情境加 0.50 個百分點，樂觀情境減 0.50 個百分點。
- 終值佔總估值比重：45.8%（基準情境）。
- 因 5 年歷史 FCF CAGR 為負，DCF 對最近一年 FCF 基準與未來 FCF 是否恢復高度敏感；終值佔比未超過 70%。

## 結論

基準情境下，MMM 的 DCF 內在價值為每股 $-9.29，相對現價 $145.12 的安全邊際為 -106.4%，模型顯示缺乏正向安全邊際。最主要的不確定因子是 2024-2025 年 FCF 大幅低於 2021-2023 年後，未來現金流是否能恢復到更正常化水準。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
