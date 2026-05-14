# FRVO — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 10.46% | N/A | $36.54 | N/A |
| 基準 | N/A | 2.5% | 9.96% | N/A | $36.54 | N/A |
| 樂觀 | N/A | 3.5% | 9.46% | N/A | $36.54 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

FRVO 可取得的 annual FCF 只有 FY2024 與 FY2025，且兩年皆為負值；因此 5 年 FCF CAGR 不具經濟意義，無法產生可信的 terminal-value DCF。依 skill fallback 檢查 EV/EBITDA，但 EBITDA 亦為負值，因此 EV/EBITDA fallback 也不適用。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$497.42M | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/frvo/financials/cash-flow-statement/) |
| FY2024 FCF | -$233.44M | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/frvo/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 資料不足 / N/A | 計算：可用 FCF 僅 2 年且皆為負值 |
| Beta | 資料不足；模型預設 1.00 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/frvo/statistics/) 顯示 Beta (5Y) n/a |
| Total Debt | $250.30M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/frvo/statistics/) |
| Cash & Equivalents | $461.84M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/frvo/statistics/) |
| Net Debt | -$211.54M | 計算：$250.30M - $461.84M |
| 流通股數 | 283.56M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/frvo/statistics/) |
| EBITDA | -$48.52M | [StockAnalysis Financials](https://stockanalysis.com/stocks/frvo/financials/) |
| 無風險利率 (10Y) | 4.46% | [U.S. Treasury Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve), 2026-05-13 10 Yr |
| WACC | 悲觀 10.46% / 基準 9.96% / 樂觀 9.46% | Python 計算：4.46% + 1.00 x 5.5% ERP，再依情境 +/- 0.5% |
| 現價 | $36.54 | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/frvo/financials/cash-flow-statement/), 2026-05-13 close |

## 關鍵假設說明

- FCF 成長率來源：無法使用；FRVO 可取得年度 FCF 為 FY2024 -$233.44M、FY2025 -$497.42M，兩期皆為負值，不能計算有意義的正向 FCF CAGR。
- WACC 組成：無風險利率 4.46% + Beta 1.00 x 5.5% ERP = 9.96%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：N/A（基準情境未產生可信 DCF 內在價值）。
- EV/EBITDA fallback：不適用，因 FRVO EBITDA 為 -$48.52M，EV/EBITDA multiple 不具可解讀性。

## 結論

基準情境下，FRVO 目前無法用 skill 規定的 FCF-based DCF 產生可信的每股內在價值，因為可用 FCF 歷史短且全部為負，fallback 的 EBITDA 也為負。主要不確定因子是公司仍處於高資本支出與商業化早期階段，未來自由現金流轉正時間與規模尚無法由現有歷史財務資料可靠外推。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
