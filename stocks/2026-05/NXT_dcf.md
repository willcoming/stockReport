# NXT — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 42.0% | 1.5% | 13.72% | $126.43 | $125.37 | +0.8%（接近合理） |
| 基準 | 70.0% | 2.5% | 13.22% | $319.68 | $125.37 | +155.0%（低估） |
| 樂觀 | 98.0% | 3.5% | 12.72% | $762.21 | $125.37 | +508.0%（低估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $513.634M | [Nextpower FY2026 Q4/FY results](https://www.advfn.com/stock-market/NASDAQ/NXT/stock-news/98507081/nextpower-reports-q4-and-fiscal-year-2026-financia) |
| 3yr positive FCF CAGR | 70.0% | FY2023 FCF $104.486M（[FinanceCharts](https://www.financecharts.com/stocks/NXT/growth/free-cash-flow)）至 FY2026 FCF $513.634M 計算 |
| Beta | 1.60 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/nxt/statistics/) |
| Net Debt | -$1.095B（淨現金） | [Nextpower FY2026 Q4/FY results](https://www.advfn.com/stock-market/NASDAQ/NXT/stock-news/98507081/nextpower-reports-q4-and-fiscal-year-2026-financia) |
| 稀釋股數 | 152.710M | [Nextpower FY2026 Q4/FY results](https://www.advfn.com/stock-market/NASDAQ/NXT/stock-news/98507081/nextpower-reports-q4-and-fiscal-year-2026-financia) |
| 無風險利率 (10Y) | 4.42% | [Slickcharts / Treasury.gov](https://www.slickcharts.com/treasury/10-year) |
| WACC | 13.22%（基準） | 計算：4.42% + 1.60 x 5.5% |
| 現價 | $125.37 | [Yahoo Finance NXT quote](https://finance.yahoo.com/quote/NXT/) |

## 關鍵假設說明

- FCF 成長率來源：FY2022 FCF 為負，5yr CAGR 不適合直接計算；改採 FY2023 至 FY2026 的 positive FCF CAGR，基準為 70.0%，悲觀/樂觀分別為 0.6x / 1.4x。
- WACC 組成：無風險利率 4.42% + Beta 1.60 x 5.5% ERP = 13.22%；悲觀加 0.5%，樂觀減 0.5%。
- 終值佔總估值比重：悲觀 71.2%、基準 78.6%、樂觀 83.7%。
- 終值佔比 >70%，結果對終值成長率、WACC、以及前五年 FCF 成長假設高度敏感，請謹慎解讀。
- DCF 以 projection_years=5、FCF base=$513.634M、net debt=-$1.095B、shares=152.710M，透過 Python 依 skill 公式折現計算。

## 結論

基準情境下，NXT 的 DCF 內在價值約為 $319.68/股，較現價 $125.37 高約 155.0%。但此結果主要由 FY2023-FY2026 的高 FCF CAGR 與高終值佔比驅動，最大不確定因子是未來 FCF 成長是否能維持接近歷史高增速。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
