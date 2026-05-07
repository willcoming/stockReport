# SMCI — DCF 估值報告

as_of_date: 2026-05-07  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $1.53B（FY2025） | [SMCI 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1375365/000137536525000027/smci-20250630.htm)、[StockAnalysis Cash Flow](https://stockanalysis.com/stocks/smci/financials/cash-flow-statement/) |
| 歷史 FCF | 2021 $64.94M；2022 -$485.98M；2023 $626.79M；2024 -$2.61B；2025 $1.53B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/smci/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 120.40% | 計算：FY2021 至 FY2025 |
| Beta | 1.63 | [Yahoo Finance SMCI](https://finance.yahoo.com/quote/SMCI/)、[StockAnalysis Statistics](https://stockanalysis.com/stocks/smci/statistics/) |
| Total Debt | $4.88B | [SMCI Q2 FY2026 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1375365/000137536526000007/smci-20251231.htm) |
| Cash & Equivalents | $4.09B | [SMCI Q2 FY2026 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1375365/000137536526000007/smci-20251231.htm) |
| Net Debt | $0.79B | 計算：$4.88B - $4.09B |
| 流通股數 | 598.93M | [SMCI Q2 FY2026 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1375365/000137536526000007/smci-20251231.htm) |
| 無風險利率 (10Y) | 4.36% | [U.S. Treasury Daily Treasury Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 悲觀 13.83%；基準 13.33%；樂觀 12.83% | 計算 |
| 現價 | $34.93 | [Yahoo Finance Chart API](https://query1.finance.yahoo.com/v8/finance/chart/SMCI?interval=1d&range=1d) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 72.24% | 1.5% | 13.83% | $218.03 | $34.93 | +524.2% (低估) |
| 基準 | 120.40% | 2.5% | 13.33% | $813.50 | $34.93 | +2228.9% (低估) |
| 樂觀 | 168.56% | 3.5% | 12.83% | $2499.53 | $34.93 | +7055.8% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：依 skill 規則使用 FY2021 至 FY2025 歷史 FCF CAGR；SMCI FCF 波動極大，且 2022、2024 年為負值，因此 CAGR 對起點與終點高度敏感。
- WACC 組成：無風險利率 4.36% + Beta 1.63 x 5.5% ERP = 13.33%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- DCF 使用最近完整年度 FY2025 FCF $1.53B 作為起始 FCF，Net Debt 使用 2025-12-31 資產負債表數據。
- 終值佔總估值比重：82.7%（基準情境）。
- 終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- 本次估值未採用 EV/EBITDA fallback，因最近 5 個完整 fiscal years 中 FCF 為負的年份為 2 年，未達 skill 規定的「3 年以上 FCF 為負」門檻。

## 結論

基準情境下，DCF 估算的 SMCI 內在價值約為 $813.50/股，較 $34.93 現價高出約 2228.9%；但此結果主要由極高的歷史 FCF CAGR 與終值貢獻驅動。最主要不確定因子是 SMCI 的 FCF 是否能從高度波動的 working-capital cycle 中穩定下來，否則 DCF 結果可能大幅失真。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
