# CEG — DCF 估值報告 (2026-05-12)

## DCF 估值結果

因 2022-2025 年度 FCF 中 3 年為負，且 FCF CAGR 不具可解釋性，本次依 skill 規則觸發 EV/EBITDA fallback；以下為 multiple-based fallback，不是標準 5 年 DCF。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | EV/EBITDA 倍數 | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|---------------|-----------|------|---------|
| 悲觀 | N/A | N/A | N/A | 12.45x | $188.56 | $299.69 | -37.1% (高估) |
| 基準 | N/A | N/A | N/A | 13.83x | $211.31 | $299.69 | -29.5% (高估) |
| 樂觀 | N/A | N/A | N/A | 15.21x | $234.06 | $299.69 | -21.9% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $1.288B | [Yahoo Finance Cash Flow](https://finance.yahoo.com/quote/CEG/cash-flow/) |
| 2022-2025 FCF | 2025: $1.288B；2024: -$5.029B；2023: -$7.723B；2022: -$4.042B | [Yahoo Finance Cash Flow](https://finance.yahoo.com/quote/CEG/cash-flow/) |
| 5yr FCF CAGR | 資料不足 / 不適用 | CEG 可得 FCF 年度不足 5 年，且 4 年中 3 年為負 |
| 最近一年 EBITDA | $5.959B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/CEG/financials/) |
| Beta | 1.155 | [Yahoo Finance Quote](https://finance.yahoo.com/quote/CEG/) |
| Total Debt | $9.497B | [Yahoo Finance / StockAnalysis validation](https://stockanalysis.com/stocks/ceg/statistics/) |
| Cash & Equivalents | $3.641B | [Yahoo Finance / StockAnalysis validation](https://stockanalysis.com/stocks/ceg/statistics/) |
| Net Debt | $5.856B | 計算：Total Debt - Cash |
| 流通股數 | 362.295M | [Yahoo Finance Quote](https://finance.yahoo.com/quote/CEG/)；[CEG 2026 Proxy](https://investors.constellationenergy.com/static-files/e80c197b-759b-4e96-9f69-be9d924d29d3) |
| 無風險利率 (10Y) | 4.36% | [FRED DGS10](https://fred.stlouisfed.org/series/DGS10) |
| WACC | Bear: 11.21%；Base: 10.71%；Bull: 10.21% | 計算：10Y + Beta × 5.5% ERP ± 0.5% |
| 現價 | $299.69 | [Yahoo Finance Quote](https://finance.yahoo.com/quote/CEG/) |
| Utilities median EV/EBITDA | 13.83x | [Westmount Fundamentals](https://westmountfundamentals.com/ev-ebitda-sectors) |

## 關鍵假設說明

- FCF 成長率來源：不採用。CEG 可得年度 FCF 僅 2022-2025，且 4 年中 3 年為負，因此依規則改用 EV/EBITDA fallback。
- WACC 組成：無風險利率 4.36% + Beta 1.155 x 5.5% ERP = 10.71%（基準情境）；但 fallback 估值未使用 WACC 折現。
- EV/EBITDA 假設：基準情境採 Utilities sector median 13.83x；悲觀與樂觀分別為基準倍數的 0.9x / 1.1x。
- 目前市場隱含 EV/EBITDA 約 19.20x，高於本報告採用的 sector median 13.83x。
- 終值佔總估值比重：N/A。因本次使用 EV/EBITDA fallback，沒有 terminal value；主要敏感度來自 EBITDA multiple 與 EBITDA 基準值。

## 結論

基準情境下，CEG 的 fallback 內在價值約為 $211.31/股，較現價 $299.69 低約 29.5%，顯示目前股價相對 sector median EV/EBITDA 假設偏高。最大不確定因子是 CEG 的 FCF 波動、Calpine 相關整合後資本結構，以及市場是否願意長期給予 CEG 高於公用事業同業的估值倍數。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
