# AMD — DCF 估值報告

as_of_date: 2026-05-07  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $5.519B | [AMD IR FY2025 results](https://ir.amd.com/news-events/press-releases/detail/1276/amd-reports-fourth-quarter-and-full-year-2025-financial-results) |
| 5yr FCF CAGR | 14.4% | 計算：2021 FCF $3.220B 至 2025 FCF $5.519B；2021-2024 參考 [StockAnalysis cash flow](https://stockanalysis.com/stocks/amd/financials/cash-flow-statement/)，2025 參考 [AMD IR](https://ir.amd.com/news-events/press-releases/detail/1276/amd-reports-fourth-quarter-and-full-year-2025-financial-results) |
| Beta | 2.40 | [StockAnalysis / Yahoo Finance 口徑](https://stockanalysis.com/stocks/amd/) |
| Net Debt | -$6.705B | Total Debt $3.847B - Cash & short-term investments $10.552B；[StockAnalysis balance sheet](https://stockanalysis.com/stocks/amd/financials/balance-sheet/) |
| 流通股數 | 1.63B | [StockAnalysis statistics](https://stockanalysis.com/stocks/amd/statistics/) |
| 無風險利率 (10Y) | 4.36% | [Slickcharts / Treasury.gov, updated 2026-05-06](https://www.slickcharts.com/treasury) |
| WACC | 17.55% | 計算：4.36% + 2.399 × 5.5% |
| 現價 | $421.39 | [StockAnalysis, 2026-05-06 close](https://stockanalysis.com/stocks/amd/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 8.7% | 1.5% | 18.05% | $31.10 | $421.39 | -92.6% (高估) |
| 基準 | 14.4% | 2.5% | 17.55% | $39.86 | $421.39 | -90.5% (高估) |
| 樂觀 | 20.2% | 3.5% | 17.05% | $51.94 | $421.39 | -87.7% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：以 2021-2025 年 FCF CAGR 14.4% 作為基準情境；2025 使用 AMD 公告之 continuing operations free cash flow $5.519B，避免將已出售業務的一次性現金流完全外推。
- WACC 組成：無風險利率 4.36% + Beta 2.399 x 5.5% ERP = 17.55%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：56.3%（基準情境）。
- 終值佔比未超過 70%，但估值仍高度依賴 WACC、AI 資料中心成長率、FCF margin 能否維持改善。

## 結論

基準情境下，AMD DCF 內在價值約 $39.86/股，較 $421.39 現價低約 90.5%，此模型下沒有安全邊際。最主要不確定因子是 AI GPU 與資料中心業務能否把高營收成長轉化為可持續自由現金流；若未來 FCF 基準顯著高於 FY2025 continuing FCF，本估值會有重大上修空間。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
