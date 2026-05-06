# BRK.A — DCF 估值報告

As of: 2026-05-06  
Projection years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $25.04B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/BRK-A/financials) |
| FCF 歷史資料 | 2022: $21.89B；2023: $29.79B；2024: $11.62B；2025: $25.04B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/BRK-A/financials) |
| 3yr FCF CAGR | 4.59% | 由 2022-2025 FCF 計算；5 年資料不足 |
| Beta | 0.622 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/BRK-A) |
| Total Debt | $129.08B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/BRK-A/balance-sheet) |
| Cash & Equivalents | $51.88B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/BRK-A/balance-sheet) |
| Net Debt | $77.20B | Total Debt - Cash & Equivalents |
| 流通股數 | 1.438M BRK.A 等值股 | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/BRK-A/balance-sheet) |
| 無風險利率 (10Y) | 4.36% | [Investing.com U.S. 10-Year Bond Yield](https://www.investing.com/rates-bonds/u.s.-10-year-bond-yield) |
| WACC | 7.78% | 4.36% + 0.622 x 5.5% ERP |
| 現價 | $704,500.01 | Yahoo Finance / market data snapshot for BRK-A |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 2.76% | 1.5% | 8.28% | $221,582.20 | $704,500.01 | -68.5% (高估) |
| 基準 | 4.59% | 2.5% | 7.78% | $316,925.13 | $704,500.01 | -55.0% (高估) |
| 樂觀 | 6.43% | 3.5% | 7.28% | $489,627.41 | $704,500.01 | -30.5% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 可取得 2022-2025 年度 FCF，因此使用 3 年 CAGR 4.59%；5 年資料不足。
- WACC 組成：無風險利率 4.36% + Beta 0.622 x 5.5% ERP = 7.78%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- Net Debt 使用 Total Debt $129.08B - Cash & Equivalents $51.88B = $77.20B。
- 終值佔總估值比重：78.5%（基準情境）。
- 終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- BRK.A 為 Berkshire Hathaway A 股；Yahoo Finance ticker 對應為 BRK-A。Berkshire 是保險、鐵路、能源、製造與投資組合混合型公司，傳統 DCF 對其保險浮存金與投資資產價值的捕捉有限。

## 結論

基準情境下，BRK.A 估算內在價值約為 $316,925/股，較 $704,500.01 現價低約 55.0%，本模型顯示安全邊際不足。主要不確定因子是 Berkshire 投資組合、市場價格變動、保險浮存金經濟價值，以及終值假設對估值結果的高度影響。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
