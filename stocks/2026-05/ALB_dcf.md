# ALB — DCF 估值報告 (2026-05-07)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $0.69B | [SEC FY2025 10-K](https://www.sec.gov/Archives/edgar/data/915913/000091591326000018/alb-20251231.htm)：Operating Cash Flow $1.28B - CapEx $0.59B |
| 3yr FCF CAGR | 2.33% | 計算：FY2022 FCF $0.65B 至 FY2025 FCF $0.69B |
| Beta | 1.365 | [Yahoo Finance](https://finance.yahoo.com/quote/ALB/) / yfinance |
| Net Debt | $0.79B | [SEC Q1 2026 10-Q](https://www.sec.gov/Archives/edgar/data/915913/000091591326000072/alb-20260331.htm)：Debt $1.88B - Cash $1.09B |
| 流通股數 | 117.93M | [SEC Q1 2026 10-Q](https://www.sec.gov/Archives/edgar/data/915913/000091591326000072/alb-20260331.htm)，2026-04-29 outstanding shares |
| 無風險利率 (10Y) | 4.36% | [U.S. Treasury Daily Treasury Yield Curve](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value_month=202605)，2026-05-06 最新可得 10Y |
| WACC | 11.87% | 計算：4.36% + 1.365 x 5.5% |
| 現價 | $192.61 | [Yahoo Finance](https://finance.yahoo.com/quote/ALB/) / yfinance |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 1.40% | 1.5% | 12.37% | $47.90 | $192.61 | -75.1% (高估) |
| 基準 | 2.33% | 2.5% | 11.87% | $57.09 | $192.61 | -70.4% (高估) |
| 樂觀 | 3.26% | 3.5% | 11.37% | $69.77 | $192.61 | -63.8% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：ALB 2021–2025 年度 FCF 波動大且含負值年份，因此未使用 5yr CAGR；改用 FY2022 正 FCF $646.2M 至 FY2025 正 FCF $692.5M 推導 3yr CAGR 2.33%。
- WACC 組成：無風險利率 4.36% + Beta 1.365 x 5.5% ERP = 11.87%；悲觀/樂觀情境分別加減 0.5 個百分點。
- 終值佔總估值比重：64.5%（基準情境）。
- 樂觀情境終值佔比約 69.2%，接近 70% 敏感區間；若長期成長率或 WACC 小幅變動，估值結果可能明顯改變。
- ALB 的歷史 FCF 受鋰價、產能投資與資本支出周期影響很大，本模型對 2025 年正 FCF 是否可延續高度敏感。

## 結論

基準情境下，ALB 的 DCF 內在價值約為 $57.09/股，較 $192.61 現價低約 70.4%，模型顯示目前價格相對 DCF 假設偏高。最大不確定因子是鋰價周期、資本支出回落後的可持續 FCF，以及終值假設。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
