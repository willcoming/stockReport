# INTEL — DCF 估值報告

as_of_date: 2026-05-08  
實際上市代號：Intel Corporation (`INTC`)

## DCF 估值結果

由於 Intel 最近 5 個年度中有 4 年 FCF 為負，依 `$dcf-valuation` skill 規則，本次不使用標準 DCF 終值模型，改採 EV/EBITDA multiple-based fallback；下表不是標準 DCF。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 估值方法 / 倍數 | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|----------------|-----------|------|---------|
| 悲觀 | N/A | N/A | 16.91% | EV/EBITDA 20.9x | $56.44 | $116.97 | -51.7% (高估) |
| 基準 | N/A | N/A | 16.41% | EV/EBITDA 26.35x | $71.80 | $116.97 | -38.6% (高估) |
| 樂觀 | N/A | N/A | 15.91% | EV/EBITDA 31.8x | $87.15 | $116.97 | -25.5% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$4.949B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/intc/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（2021 正、2022-2025 連續為負，CAGR 不適用） | 計算，基於 [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/intc/financials/cash-flow-statement/) |
| TTM EBITDA | $14.17B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/intc/statistics/) |
| Beta | 2.19 | [StockAnalysis Overview](https://stockanalysis.com/stocks/intc/) |
| Total Debt / Cash | $45.03B / $32.79B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/intc/statistics/) |
| Net Debt | $12.24B | 計算：$45.03B - $32.79B |
| 流通股數 | 5.03B | [StockAnalysis Overview](https://stockanalysis.com/stocks/intc/) |
| 無風險利率 (10Y) | 4.36% | [Trading Economics US 10Y](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 16.41%（基準） | 計算：4.36% + 2.19 × 5.5% |
| 現價 | $116.97 | [StockAnalysis Overview](https://stockanalysis.com/stocks/intc/) |
| 半導體 EV/EBITDA median | NTM 20.9x / LTM 31.8x | [Pendo Advisors Market Multiples, Feb 2026](https://www.pendoadvisors.com/wp-content/uploads/2026/03/Pendo-Market-Multiples-2026_2.pdf) |

## 關鍵假設說明

- FCF 成長率來源：不適用。Intel FY2021-FY2025 FCF 分別為 $9.127B、-$9.411B、-$14.279B、-$15.656B、-$4.949B；多數年份為負，無法用 5yr CAGR 建立可靠 DCF。
- WACC 組成：無風險利率 4.36% + Beta 2.19 × 5.5% ERP = 16.41%；悲觀/樂觀情境分別加減 0.50%。
- EV/EBITDA fallback：悲觀使用半導體 NTM median 20.9x，樂觀使用 LTM median 31.8x，基準使用兩者中點 26.35x。
- 計算式：Equity Value = EBITDA × EV/EBITDA multiple - Net Debt；Intrinsic Value / Share = Equity Value / Shares Outstanding。
- 終值佔總估值比重：N/A。本次採 multiple-based fallback，不產生 DCF terminal value。

## 結論

基準情境下，INTC 的估算內在價值約為 $71.80/股，低於現價 $116.97，安全邊際為 -38.6%。最大不確定因子是 Intel 能否把高資本支出週期轉化為穩定正 FCF；在 FCF 尚未正常化前，估值對 EBITDA 與市場倍數假設高度敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
