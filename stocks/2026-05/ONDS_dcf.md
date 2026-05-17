# ONDS — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 19.15% | N/A | $10.62 | N/A |
| 基準 | N/A | 2.5% | 18.65% | N/A | $10.62 | N/A |
| 樂觀 | N/A | 3.5% | 18.15% | N/A | $10.62 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%  
> 本次未輸出有效 DCF 內在價值，原因是 ONDS 最近可得年度 FCF 連續為負，且 EBITDA 亦為負，依 skill 規則改用 EV/EBITDA fallback 時仍無可用正 EBITDA multiple。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$40.9M | [Yahoo Finance Financials](https://finance.yahoo.com/quote/ONDS/financials) |
| 歷史 FCF | 2025: -$40.9M；2024: -$35.2M；2023: -$34.3M；2022: -$40.9M | [Yahoo Finance Financials](https://finance.yahoo.com/quote/ONDS/financials) |
| 5yr FCF CAGR | N/A | FCF 多數年份為負，CAGR 不具經濟意義 |
| 2025 revenue | $50.7M | [Yahoo Finance Financials](https://finance.yahoo.com/quote/ONDS/financials) |
| EBITDA | -$47.3M | [Yahoo Finance Summary](https://finance.yahoo.com/quote/ONDS) |
| Beta | 2.556 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/ONDS) |
| Total debt | $25.2M | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/ONDS/balance-sheet) |
| Cash & equivalents | $572.5M | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/ONDS/balance-sheet) |
| Net debt | -$547.3M | Total debt - cash，以上述 Yahoo Finance 數據計算 |
| 流通股數 | 495.6M | [Yahoo Finance Summary](https://finance.yahoo.com/quote/ONDS) |
| 無風險利率 (10Y) | 4.59% | [U.S. Treasury Daily Treasury Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026) |
| WACC | 悲觀 19.15%；基準 18.65%；樂觀 18.15% | 計算：risk-free + Beta x 5.5% ERP，並依情境加減 0.5% |
| 現價 | $10.62 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/ONDS) |
| Market cap | $5.26B | [Yahoo Finance Summary](https://finance.yahoo.com/quote/ONDS) |

## 關鍵假設說明

- FCF 成長率來源：ONDS 最近可得年度 FCF 全部為負，2022-2025 分別為 -$40.9M、-$34.3M、-$35.2M、-$40.9M，因此 base growth rate 無法用 5yr 或 3yr FCF CAGR 合理推導。
- WACC 組成：無風險利率 4.59% + Beta 2.556 x 5.5% ERP = 18.65%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- EV/EBITDA fallback：因 FCF 多數年份為負，依 skill 規則切換至 multiple-based fallback；但 EBITDA 為 -$47.3M，EV/EBITDA multiple 不具可用性，因此本報告不輸出 implied equity value。
- 終值佔總估值比重：N/A（基準情境未產生有效 DCF enterprise value）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀；本次因缺乏正向可折現現金流，主要敏感性在「何時轉正 FCF」與「EBITDA 何時轉正」，而非終值成長率本身。

## 結論

基準情境下，ONDS 目前無法用標準 DCF 得出可靠每股內在價值；主要原因是最近年度 FCF 持續為負，且 EBITDA 亦為負，導致 DCF 與 EV/EBITDA fallback 都不具可用性。此類公司估值更依賴未來營收轉化為正自由現金流的時間點、融資稀釋、現金消耗速度與併購整合結果。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
