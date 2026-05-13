# BABA — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -2.8% | 1.5% | 7.68% | $58.29 | $134.78 | -56.7% (高估) |
| 基準 | -4.6% | 2.5% | 7.18% | $68.82 | $134.78 | -48.9% (高估) |
| 樂觀 | -6.5% | 3.5% | 6.68% | $90.17 | $134.78 | -33.1% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 估值日期 | 2026-05-13 | 使用者輸入 |
| 最近一年 FCF | RMB 77.5B / $11.4B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/BABA/financials/) |
| 可得歷史 FCF | FY2022 RMB 89.4B、FY2023 RMB 165.4B、FY2024 RMB 149.7B、FY2025 RMB 77.5B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/BABA/financials/) |
| 3yr FCF CAGR | -4.6% | 由 FY2022 至 FY2025 FCF 計算 |
| Beta | 0.494 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/BABA/) |
| Total Debt | RMB 248.1B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/BABA/balance-sheet/) |
| Cash & Equivalents | RMB 145.5B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/BABA/balance-sheet/) |
| Net Debt | RMB 102.6B / $15.1B | Total Debt - Cash & Equivalents |
| 流通股數 | 2.399B ADS | [Yahoo Finance Summary](https://finance.yahoo.com/quote/BABA/) |
| CNY/USD 匯率 | 6.7915 | [Yahoo Finance CNY=X](https://finance.yahoo.com/quote/CNY=X/) |
| 無風險利率 (10Y) | 4.46% | [U.S. Treasury Daily Treasury Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 悲觀 7.68% / 基準 7.18% / 樂觀 6.68% | 計算 |
| 現價 | $134.78 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/BABA/) |

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 可得 FY2022-FY2025 FCF；因不足 5 年，依 skill 規則改用 3 年 FCF CAGR，基準情境為 -4.6%。
- WACC 組成：無風險利率 4.46% + Beta 0.494 x 5.5% ERP = 7.18%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- FCF、Net Debt 先以 CNY 計算，再用 CNY/USD 6.7915 換算成 USD，並除以 BABA ADS 流通股數。
- 終值佔總估值比重：77.4%（基準情境）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。

## 結論

基準情境下，BABA 的 DCF 內在價值約為 $68.82/股，較現價 $134.78 低約 48.9%，安全邊際不足。主要不確定因子是未來 FCF 是否能由 FY2025 的下滑中恢復，以及終值成長率與折現率假設對估值的高敏感度。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
