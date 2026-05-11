# MCD — DCF 估值報告

估值基準日：2026-05-11  
預測年期：5 年

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $7.186B（FY2025） | [Yahoo Finance Cash Flow](https://finance.yahoo.com/quote/MCD/cash-flow/) |
| 5yr FCF CAGR | 資料不足；改用 3yr CAGR 9.4%（2022-2025） | [Yahoo Finance Cash Flow](https://finance.yahoo.com/quote/MCD/cash-flow/)、計算 |
| Beta | 0.436 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/MCD/) |
| Total Debt | $54.814B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/MCD/balance-sheet/) |
| Cash & Equivalents | $0.774B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/MCD/balance-sheet/) |
| Net Debt | $54.040B | 計算：Total Debt - Cash |
| 流通股數 | 710.6M | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/MCD/balance-sheet/) |
| 無風險利率 (10Y) | 4.41%（FRED 最新可得：2026-05-07） | [FRED DGS10](https://fred.stlouisfed.org/series/DGS10) |
| WACC | 悲觀 7.31% / 基準 6.81% / 樂觀 6.31% | 計算 |
| 現價 | $275.86 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/MCD/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 5.6% | 1.5% | 7.31% | $135.63 | $275.86 | -50.8%（高估） |
| 基準 | 9.4% | 2.5% | 6.81% | $249.60 | $275.86 | -9.5%（高估） |
| 樂觀 | 13.2% | 3.5% | 6.31% | $494.61 | $275.86 | +79.3%（低估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 年度 FCF；因 5 年 FCF 資料不完整，依 skill 規則改用 2022-2025 3yr CAGR，計算為 9.4%。
- WACC 組成：無風險利率 4.41% + Beta 0.436 x 5.5% ERP = 6.81%；悲觀情境加 0.50 個百分點，樂觀情境減 0.50 個百分點。
- 終值佔總估值比重：悲觀 77.2%、基準 83.3%、樂觀 89.3%。
- 終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。

## 結論

基準情境下，MCD 的 DCF 內在價值約為 $249.60/股，較現價 $275.86 低約 9.5%，顯示目前價格在此組假設下略高於估值。最主要不確定因子是終值佔比偏高，估值對長期成長率與 WACC 的小幅變動非常敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
