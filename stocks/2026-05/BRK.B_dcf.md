# BRK.B — DCF 估值報告

## DCF 估值結果

估值基準日：2026-05-16；投影年數：5 年。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 2.8% | 1.5% | 8.51% | $141.64 | $482.70 | -70.7% (高估) |
| 基準 | 4.6% | 2.5% | 8.01% | $200.84 | $482.70 | -58.4% (高估) |
| 樂觀 | 6.4% | 3.5% | 7.51% | $305.36 | $482.70 | -36.7% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $25.0B（2025） | [Yahoo Finance Financials](https://finance.yahoo.com/quote/BRK-B/financials) |
| FCF 歷史資料 | 2022 $21.9B、2023 $29.8B、2024 $11.6B、2025 $25.0B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/BRK-B/financials) |
| 5yr FCF CAGR | 資料不足；改用 2022-2025 3yr CAGR = 4.6% | Yahoo Finance FCF 資料計算 |
| Beta | 0.622 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/BRK-B) |
| Net Debt | $77.2B = Total Debt $129.1B - Cash & Equivalents $51.9B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/BRK-B/balance-sheet) |
| 流通股數 | 2.157B BRK.B 等值股數 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/BRK-B) |
| 無風險利率 (10Y) | 4.59%（2026-05-15 最新交易日） | [U.S. Treasury Daily Treasury Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value_month=202605) |
| WACC | 悲觀 8.51%、基準 8.01%、樂觀 7.51% | 計算 |
| 現價 | $482.70 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/BRK-B) |

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 可取得完整年度 FCF 為 2022-2025，因此未使用 5 年 CAGR，改用 2022-2025 的 3 年 FCF CAGR 4.6% 作為基準情境。
- WACC 組成：無風險利率 4.59% + Beta 0.622 x 5.5% ERP = 8.01%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：悲觀 72.1%、基準 77.7%、樂觀 83.5%。
- 終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- 本模型使用 Total Debt - Cash & Equivalents 的淨債務口徑；BRK.B 持有大量短期投資與保險投資資產，未在此簡化 DCF 中重新估值。

## 結論

基準情境下，BRK.B 的 DCF 內在價值為 $200.84/股，較 $482.70 現價低約 58.4%，安全邊際不足。主要不確定因子是 Berkshire 的 FCF 波動、龐大投資組合與保險浮存金價值未能由簡化 FCF DCF 完整反映。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
