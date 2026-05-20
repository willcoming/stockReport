# GLD — DCF 估值報告 (2026-05-20)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 6.00% | N/A | $411.50 | N/A |
| 基準 | N/A | 2.5% | 5.50% | N/A | $411.50 | N/A |
| 樂觀 | N/A | 3.5% | 5.00% | N/A | $411.50 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

GLD 是實物黃金信託 ETF，不是營運型公司；其資產主要反映黃金價格扣除費用後的 NAV，沒有可用於傳統 DCF 的營收、EBITDA、CapEx 或可預測企業自由現金流。因此本次不產出每股 DCF 內在價值，避免將不適用模型強行套用。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | N/A；FY2025 Operating Cash Flow 為 $0，CapEx N/A，Free Cash Flow N/A | [StockTitan GLD Financials](https://www.stocktitan.net/financials/GLD/) |
| 5yr FCF CAGR | N/A | FCF 不可用，無法計算 |
| Beta | 0.15 | [StockAnalysis GLD](https://stockanalysis.com/etf/gld/) |
| Net Debt | $0 | [StockTitan GLD Financials](https://www.stocktitan.net/financials/GLD/) |
| 流通股數 | 362.50M | [StockAnalysis GLD](https://stockanalysis.com/etf/gld/) |
| 無風險利率 (10Y) | 4.67% | [U.S. Treasury Daily Treasury Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026) |
| WACC | 悲觀 6.00%；基準 5.50%；樂觀 5.00% | 計算 |
| 現價 | $411.50，2026-05-19 收盤 | [StockAnalysis GLD](https://stockanalysis.com/etf/gld/) |
| NAV / Share | $419.18，2026-05-18 | [SSGA GLD Fund Page](https://www.ssga.com/us/en/intermediary/etfs/spdr-gold-shares-gld) |
| AUM | $152,454.18M，2026-05-18 | [SSGA GLD Fund Page](https://www.ssga.com/us/en/intermediary/etfs/spdr-gold-shares-gld) |

## 關鍵假設說明

- FCF 成長率來源：N/A。GLD 沒有營運型公司自由現金流，FY2025 與近季 operating cash flow 均為 $0，Free Cash Flow 為 N/A。
- WACC 組成：無風險利率 4.67% + Beta 0.15 x 5.5% ERP = 5.50%（基準情境）；悲觀加 0.5%，樂觀減 0.5%。
- 終值佔總估值比重：N/A。因 FCF 基礎值不可用，未計算 terminal value。
- EV/EBITDA fallback：不適用。GLD 的 Revenue、EBITDA、CapEx 均為 N/A，且其價值來源是黃金持有量與金價，不是企業營運倍數。

## 結論

基準情境下，GLD 無法以傳統 DCF 合理估算每股內在價值；更合適的檢視方式是比較市價、NAV/share、黃金價格、費用率與追蹤誤差。截至可得資料，GLD 現價 $411.50 低於 2026-05-18 的 NAV/share $419.18，但這不是 DCF 安全邊際。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
