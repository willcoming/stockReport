# CDU — DCF 估值報告 (2026-05-21)

## DCF 估值結果

> 因 CDU（ELI:CDU，Conduril - Engenharia, S.A.）最近 5 年 FCF 中有 4 年為負，5yr FCF CAGR 無法定義；以下依 skill 規則改用 **EV/EBITDA multiple-based fallback，不是傳統 DCF**。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | EV/EBITDA fallback | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-------------------|-----------|------|---------|
| 悲觀 | N/A | N/A | 7.77%（參考） | 4.0x | €13.87 | €15.00 | -7.5%（高估） |
| 基準 | N/A | N/A | 7.27%（參考） | 5.8x | €33.94 | €15.00 | +126.3%（低估） |
| 樂觀 | N/A | N/A | 6.77%（參考） | 8.0x | €58.47 | €15.00 | +289.8%（低估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的識別 | Conduril - Engenharia, S.A.; Euronext Lisbon; ticker CDU; EUR | [StockAnalysis profile](https://stockanalysis.com/quote/eli/CDU/) |
| 最近一年 FCF | €28.50M | [StockAnalysis cash flow](https://stockanalysis.com/quote/eli/CDU/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（2021-2025 FCF 有 4 年為負） | [StockAnalysis cash flow](https://stockanalysis.com/quote/eli/CDU/financials/cash-flow-statement/) + 計算 |
| EBITDA | €20.07M | [StockAnalysis statistics](https://stockanalysis.com/quote/eli/CDU/statistics/) |
| Net Debt | €55.31M（Total Debt €92.44M - cash/short-term investments €37.13M） | [StockAnalysis balance sheet](https://stockanalysis.com/quote/eli/CDU/financials/balance-sheet/) |
| 流通股數 | 1.80M | [StockAnalysis balance sheet](https://stockanalysis.com/quote/eli/CDU/financials/balance-sheet/) |
| Beta | 0.49 | [StockAnalysis statistics](https://stockanalysis.com/quote/eli/CDU/statistics/) |
| 無風險利率 (10Y) | 4.57%（U.S. Treasury 2026-05-20 最新可得值） | [U.S. Treasury Daily Yield Curve](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026) |
| 估值倍數 | Construction median 5.8x；range 4.0x-8.0x | [ProCloser 2026 EBITDA multiples](https://procloser.ai/blog/ebitda-multiples-by-industry/) |
| 現價 | €15.00（最近可得市場價） | [StockAnalysis market cap](https://stockanalysis.com/quote/eli/CDU/market-cap/) |

## 關鍵假設說明

- FCF 成長率來源：2021-2025 FCF 分別為 €-26.87M、€-0.75M、€-17.95M、€-37.10M、€28.50M；因起點與多數年份為負，CAGR 不適用。
- WACC 組成：無風險利率 4.57% + Beta 0.49 x 5.5% ERP = 7.27%（基準參考值，fallback 模型未直接使用 WACC）。
- 終值佔總估值比重：N/A（使用 EV/EBITDA fallback，沒有 terminal value）。
- projection_years=5 未進入年度 DCF 展開，原因是 skill 規則要求在多數 FCF 為負時改用 multiple-based fallback。
- 本估值對 EBITDA multiple 極度敏感，且 CDU 流動性低、FCF 波動大；基準情境不應視為高信心點估值。

## 結論

基準 fallback 情境下，CDU 的 implied intrinsic value 約為 €33.94/股，較 €15.00 現價高約 126.3%。但由於這不是傳統 DCF，而是基於 EV/EBITDA 的 fallback，主要不確定因子是 FCF 可持續性、營運資金波動、以及小型低流動性股票適用的合理估值倍數。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
