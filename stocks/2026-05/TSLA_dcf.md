# TSLA — DCF 估值報告 (2026-05-11)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -3.76% | 1.5% | 14.74% | $18.12 | $419.22 | -95.7% (高估) |
| 基準 | -6.26% | 2.5% | 14.24% | $17.95 | $419.22 | -95.7% (高估) |
| 樂觀 | -8.77% | 3.5% | 13.74% | $17.85 | $419.22 | -95.7% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $6.22B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/TSLA/financials) |
| FCF 歷史 | 2022: $7.552B；2023: $4.357B；2024: $3.581B；2025: $6.220B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/TSLA/financials) |
| 5yr FCF CAGR | 資料不足；使用 3yr CAGR = -6.26% | 計算；基於 Yahoo Finance FCF |
| Beta | 1.793 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/TSLA) |
| Total Debt | $14.719B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/TSLA/balance-sheet) |
| Cash + Short-term Investments | $44.059B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/TSLA/balance-sheet) |
| Net Debt | -$29.340B | 計算；Total Debt - Cash + Short-term Investments |
| 流通股數 | 3.756B | [Yahoo Finance Summary](https://finance.yahoo.com/quote/TSLA) |
| 無風險利率 (10Y) | 4.38% | [Yahoo Finance ^TNX](https://finance.yahoo.com/quote/%5ETNX) |
| WACC | 悲觀 14.74%；基準 14.24%；樂觀 13.74% | 計算 |
| 現價 | $419.22 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/TSLA) |

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 僅取得 2022-2025 年 FCF，因此以 3yr FCF CAGR 計算；2022 年 $7.552B 至 2025 年 $6.220B，CAGR = -6.26%。
- WACC 組成：無風險利率 4.38% + Beta 1.793 x 5.5% ERP = 14.24%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：53.1%（基準情境）。
- 因歷史 FCF CAGR 為負值，依 skill 規則套用 `base_rate x 0.6 / 1.0 / 1.4` 時，FCF 成長率情境會呈現負成長倍率效果；結果主要由高 WACC、負 FCF CAGR、以及現價相對 DCF 現金流規模過高驅動。

## 結論

基準情境下，TSLA DCF 內在價值約為 $17.95/股，較現價 $419.22 低約 95.7%，安全邊際不足。最主要的不確定因子是未來 FCF 是否能脫離近年波動並重新進入高成長，以及 WACC/終值成長率假設對估值的敏感度。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
