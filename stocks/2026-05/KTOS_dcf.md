# KTOS — DCF 估值報告

as_of_date：2026-05-08  
projection_years：5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$137.4M | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/ktos/financials/cash-flow-statement/) |
| 過去 5 年 FCF | 2025 -$137.4M；2024 -$8.5M；2023 +$12.8M；2022 -$71.1M；2021 -$51.0M | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/ktos/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（起訖與多數年份為負，CAGR 不具經濟意義） | 計算 |
| TTM EBITDA | $81.2M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ktos/statistics/) |
| Beta | 1.06 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ktos/statistics/) |
| Cash | $1.46B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ktos/statistics/) |
| Total Debt | $185.4M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ktos/statistics/) |
| Net Debt | -$1.279B（net cash） | 計算；Cash - Debt 來源同上 |
| 流通股數 | 187.52M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/ktos/statistics/) |
| 無風險利率 (10Y) | 4.35% | [Investing.com 10Y Treasury, May 8 2026](https://www.investing.com/rates-bonds/u.s.-10-year-bond-yield-historical-data) |
| WACC | Bear 10.68%；Base 10.18%；Bull 9.68% | 計算：10Y + Beta x 5.5% ERP ± 0.5% |
| 現價 | $57.25 | [StockAnalysis Statistics, May 8 2026 10:59 AM EDT](https://stockanalysis.com/stocks/ktos/statistics/) |
| 產業 TEV/EBITDA median | 18.87x | [PCE Aerospace & Government M&A Update, Apr 15 2026](https://www.pcecompanies.com/resources/industry-reports/aerospace-government-ma-update?hs_amp=true) |

## DCF 估值結果

KTOS 最近 5 個年度 FCF 有 4 年為負，依 skill 規則改用 EV/EBITDA fallback；下表不是標準 FCF DCF，而是 multiple-based fallback。

| 情境 | 估值方法 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | EV/EBITDA 假設 | 內在價值/股 | 現價 | 安全邊際 |
|------|----------|-----------------|----------|------|---------------|-----------|------|---------|
| 悲觀 | EV/EBITDA fallback | N/A | N/A | 10.68% | 15.10x | $13.36 | $57.25 | -76.7% (高估) |
| 基準 | EV/EBITDA fallback | N/A | N/A | 10.18% | 18.87x | $14.99 | $57.25 | -73.8% (高估) |
| 樂觀 | EV/EBITDA fallback | N/A | N/A | 9.68% | 22.64x | $16.63 | $57.25 | -71.0% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：KTOS 過去 5 年 FCF 為 -$137.4M、-$8.5M、+$12.8M、-$71.1M、-$51.0M，其中 4 年為負，標準 FCF CAGR 不適用。
- WACC 組成：無風險利率 4.35% + Beta 1.06 x 5.5% ERP = 10.18%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- Fallback 估值公式：Equity Value = TTM EBITDA x EV/EBITDA multiple + Net Cash；內在價值/股 = Equity Value / Shares Outstanding。
- 基準情境使用 Aerospace & Government Q1 2026 LTM median TEV/EBITDA 18.87x；悲觀與樂觀情境分別用 0.8x 與 1.2x 的敏感度。
- 終值佔總估值比重：N/A（本次因 FCF 多數年份為負，使用 EV/EBITDA fallback，未建立 terminal value）。

## 結論

在基準 EV/EBITDA fallback 下，KTOS 估算內在價值約 $14.99/股，較 2026-05-08 現價 $57.25 低約 73.8%。最大不確定因子是 KTOS 是否能把營收成長與國防/UAS 需求轉化為可持續正 FCF；在目前 FCF 記錄下，標準 DCF 模型不具穩定可解讀性。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
