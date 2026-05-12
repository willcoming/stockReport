# SNDK — DCF 估值報告 (2026-05-10)

## DCF 估值結果

SNDK 最近 5 個 FCF 觀察值中有 3 個為負值，因此依 $dcf-valuation skill 規則觸發 EV/EBITDA fallback；下表為 multiple-based fallback，不是純 DCF。

| 情境 | 方法 | 終值成長率 | 參考 WACC | 估值倍數 | 內在價值/股 | 現價 | 安全邊際 |
|------|------|----------|----------|----------|-----------|------|---------|
| 悲觀 | EV/EBITDA fallback | N/A | 10.39% | 10.18x | $404.54 | $1,562.34 | -74.1%（高估） |
| 基準 | EV/EBITDA fallback | N/A | 9.89% | 15.33x | $596.43 | $1,562.34 | -61.8%（高估） |
| 樂觀 | EV/EBITDA fallback | N/A | 9.39% | 22.67x | $869.93 | $1,562.34 | -44.3%（高估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近 TTM FCF | $4.46B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/sndk/financials/cash-flow-statement/) |
| 最近 9 個月 FCF | $4.411B | [Sandisk Q3 FY2026 press release](https://www.sandisk.com/company/newsroom/press-releases/2026/2026-04-30-sandisk-reports-fiscal-third-quarter-2026-financial-results) |
| FY2022-FY2025/TTM FCF | $0.741B, -$0.932B, -$0.475B, -$0.120B, $4.460B | [StockAnalysis Financials](https://stockanalysis.com/stocks/sndk/financials/) |
| 5yr/TTM FCF CAGR | 56.6%（僅機械計算；未用於估值） | 計算 |
| Beta | 資料不足；Yahoo/StockAnalysis 顯示 N/A，依 skill 預設 1.00 | [Yahoo Finance search result](https://finance.yahoo.com/quote/SNDK/), [StockAnalysis Statistics](https://stockanalysis.com/stocks/sndk/statistics/) |
| Cash & Equivalents | $3.735B | [Sandisk Q3 FY2026 press release](https://www.sandisk.com/company/newsroom/press-releases/2026/2026-04-30-sandisk-reports-fiscal-third-quarter-2026-financial-results) |
| Total Debt | $0.0B | [Sandisk Q3 FY2026 press release](https://www.sandisk.com/company/newsroom/press-releases/2026/2026-04-30-sandisk-reports-fiscal-third-quarter-2026-financial-results) |
| Net Debt | -$3.735B（net cash） | 計算 |
| TTM EBITDA | $5.518B | [StockAnalysis Financials](https://stockanalysis.com/stocks/sndk/financials/) |
| 流通股數 | 148.09M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/sndk/statistics/) |
| 無風險利率 (10Y) | 4.39% | [Federal Reserve H.15, 2026-05-08](https://www.federalreserve.gov/releases/h15/) |
| WACC | 9.89%（base；Beta 1.00） | 計算 |
| 現價 | $1,562.34（2026-05-08 收盤） | [StockAnalysis Statistics](https://stockanalysis.com/stocks/sndk/statistics/) |
| 半導體 EV/EBITDA median | 15.33x | [CSIMarket Semiconductors Valuation](https://csimarket.com/Industry/Industry_Valuation.php?ind=1010) |

## 關鍵假設說明

- FCF 成長率來源：FY2022-FY2025/TTM FCF 機械 CAGR 約 56.6%，但因 3/5 個觀察值為負，未用於 DCF 成長假設。
- WACC 組成：無風險利率 4.39% + Beta 1.00 x 5.5% ERP = 9.89%。
- Fallback 估值公式：Equity Value = TTM EBITDA x EV/EBITDA multiple - Net Debt；因 Net Debt 為 -$3.735B，等同加回淨現金。
- 終值佔總估值比重：N/A，因本次觸發 EV/EBITDA fallback，沒有 terminal value。
- 敏感性：估值主要受 TTM EBITDA 是否可持續、半導體週期倍數、NAND/AI storage 價格週期與 SNDK 高毛利是否能延續影響。

## 結論

基準情境下，SNDK 的 fallback 內在價值約為 $596.43/股，較 2026-05-08 收盤價 $1,562.34 低約 61.8%。本次結果顯示市場價格已大幅反映高成長與高利潤率預期，最大不確定因子是 FY2026 暴增的 FCF/EBITDA 是否具備週期外的可持續性。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
