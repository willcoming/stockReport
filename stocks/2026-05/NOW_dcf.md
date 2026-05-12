# NOW — DCF 估值報告

as_of_date: 2026-05-12  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $4.533B | [Yahoo Finance / yfinance cash flow](https://finance.yahoo.com/quote/NOW/cash-flow) |
| 3yr FCF CAGR | 27.77% | 由 2022 FCF $2.173B 至 2025 FCF $4.533B 計算 |
| Beta | 0.819 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/NOW) |
| Net Debt | -$2.751B | Total Debt $2.431B - Total Cash $5.182B；[Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/NOW/balance-sheet) |
| 流通股數 | 1.031B | [Yahoo Finance Summary](https://finance.yahoo.com/quote/NOW) |
| 無風險利率 (10Y) | 4.38% | [Federal Reserve H.15, 10-year Treasury](https://www.federalreserve.gov/releases/h15/) |
| WACC | 8.88% | 4.38% + 0.819 x 5.5% |
| 現價 | $91.49 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/NOW) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 16.66% | 1.5% | 9.38% | $107.60 | $91.49 | +17.6% (低估) |
| 基準 | 27.77% | 2.5% | 8.88% | $196.27 | $91.49 | +114.5% (低估) |
| 樂觀 | 38.88% | 3.5% | 8.38% | $373.93 | $91.49 | +308.7% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance / yfinance 可得年度 FCF；因 5 年資料不足，依 skill 規則改用 3yr CAGR，從 2022 $2.173B 至 2025 $4.533B。
- WACC 組成：無風險利率 4.38% + Beta 0.819 x 5.5% ERP = 8.88%；悲觀 / 樂觀情境分別加減 0.5%。
- 終值佔總估值比重：81.2%（基準情境）。
- 終值佔比 >70%，結果對終值成長率、WACC 與高 FCF CAGR 假設高度敏感，請謹慎解讀。
- 最近可得 FCF 皆為正，未啟用 EV/EBITDA fallback。

## 結論

在基準情境下，NOW 的 DCF 內在價值為 $196.27/股，較 $91.49 現價高約 114.5%。主要不確定因子是以歷史 3yr FCF CAGR 延伸未來 5 年，以及終值佔比過高導致模型對 WACC 與終值成長率高度敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
