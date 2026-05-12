# POET — DCF 估值報告

as_of_date：2026-05-12  
projection_years：5 年  
幣別：USD；金額單位除每股外為百萬美元

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$33.34M | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/poet/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 資料不足；5 年 FCF 皆為負，傳統 CAGR 不適用 | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/poet/financials/cash-flow-statement/) |
| FCF cash-burn CAGR | 29.1% | 以 2021 FCF -$12.00M 至 2025 FCF -$33.34M 計算 |
| Beta | 0.54 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/poet/statistics/) |
| Total Debt | $7.07M | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/poet/financials/balance-sheet/) |
| Cash & Equivalents + Short-Term Investments | $313.40M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/poet/statistics/) |
| Net Debt | -$306.33M | Total Debt - Cash & Short-Term Investments |
| 流通股數 | 152.71M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/poet/statistics/) |
| 無風險利率 (10Y) | 4.42% | [U.S. Treasury Daily Treasury Par Yield Curve Rates, 2026-05-11](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 7.39% | 4.42% + 0.54 x 5.5% |
| 現價 | $13.90 | [StockAnalysis, 2026-05-11 close](https://stockanalysis.com/stocks/poet/) |

## DCF 估值結果

> POET 最近 5 年 FCF 全為負，且 EBITDA 也為負，因此 EV/EBITDA fallback 無法形成有效估值倍數。本表為以實際負 FCF 與淨現金部位跑出的機械式 DCF 敏感度，不代表成熟企業的穩態 DCF。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -17.5% | 1.5% | 7.89% | $0.57 | $13.90 | -95.9% (高估) |
| 基準 | -29.1% | 2.5% | 7.39% | $1.06 | $13.90 | -92.4% (高估) |
| 樂觀 | -40.7% | 3.5% | 6.89% | $1.40 | $13.90 | -89.9% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：因 POET 的 2021-2025 年 FCF 全為負，傳統正 FCF CAGR 不適用；此處以 FCF cash-burn CAGR 29.1% 作為基準，並把情境設為 cash burn 收斂率。
- WACC 組成：無風險利率 4.42% + Beta 0.54 x 5.5% ERP = 7.39%。
- 終值佔總估值比重：60.7%（基準情境，以 PV terminal / enterprise value 的絕對值估算）。
- 由於 FCF 與 EBITDA 均為負，本估值主要受「現金消耗速度是否收斂」與「淨現金是否足以支撐商業化」影響；若未能轉正 FCF，DCF 結果不具穩定參考性。

## 結論

基準情境下，POET 的機械式 DCF 內在價值約為 $1.06/股，較 $13.90 現價低約 92.4%，顯示目前股價主要反映未來商業化與成長選擇權，而非現有自由現金流。最大不確定因子是 POET 能否把目前負 FCF 與負 EBITDA 轉為可持續正現金流。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
