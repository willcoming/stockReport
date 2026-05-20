# NEE — DCF 估值報告 (2026-05-20)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 21.2% | 1.5% | 9.08% | -$3.50 | $90.06 | -103.9% (高估) |
| 基準 | 35.3% | 2.5% | 8.58% | $44.64 | $90.06 | -50.4% (高估) |
| 樂觀 | 49.5% | 3.5% | 8.08% | $149.54 | $90.06 | +66.0% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $3.211B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/NEE/financials) |
| 5yr FCF CAGR | 資料不足；模型使用 2023-2025 正值 FCF CAGR 35.34% | [Yahoo Finance Financials](https://finance.yahoo.com/quote/NEE/financials)、計算 |
| Beta | 0.721 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/NEE) |
| Total Debt | $104.403B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/NEE/balance-sheet) |
| Cash & Equivalents | $1.998B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/NEE/balance-sheet) |
| Net Debt | $102.405B | Yahoo Finance Balance Sheet、計算 |
| 流通股數 | 2.085B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/NEE/balance-sheet) |
| 無風險利率 (10Y) | 4.61% | [FRED DGS10](https://fred.stlouisfed.org/series/DGS10) |
| WACC | 悲觀 9.08%；基準 8.58%；樂觀 8.08% | 計算 |
| 現價 | $90.06 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/NEE) |

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 年度 FCF；5 年資料不足且 2022 年 FCF 為負，因此使用 2023 年 $1.753B 至 2025 年 $3.211B 的正值 FCF CAGR 35.34% 作為 base rate。
- WACC 組成：無風險利率 4.61% + Beta 0.721 x 5.5% ERP = 8.58%（基準情境）。
- Bear / Base / Bull：FCF 成長率分別為 base rate x 0.6、base rate、base rate x 1.4；終值成長率分別為 1.5%、2.5%、3.5%。
- 終值佔總估值比重：83.3%（基準情境）。
- 終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。

## 結論

基準情境下，NEE 的 DCF 內在價值約為 $44.64/股，較現價 $90.06 低約 50.4%。主要不確定因子是 NEE 的 FCF 波動與資本支出週期；本模型的終值佔比偏高，因此估值對長期成長率與折現率非常敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
