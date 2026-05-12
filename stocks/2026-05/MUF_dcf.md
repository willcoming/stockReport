# MUF — DCF 估值報告 (2026-05-09)

## DCF 估值結果

> 因 MUF 最近可得年度 FCF 多數為負，依 skill 規則改用 EV/EBITDA fallback；以下為 multiple-based fallback，不是標準 DCF。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | EV/EBITDA 倍數 | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|---------------|-----------|------|---------|
| 悲觀 | N/A | N/A | 8.12% | 10.56x | €11.22 | €16.17 | -30.6% (高估) |
| 基準 | N/A | N/A | 7.62% | 13.20x | €15.25 | €16.17 | -5.7% (高估) |
| 樂觀 | N/A | N/A | 7.12% | 15.84x | €19.29 | €16.17 | +19.3% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的辨識 | Manchester United plc；Frankfurt ticker：MUF.F | [Yahoo Finance](https://finance.yahoo.com/quote/MUF.F/) |
| 最近一年 FCF | -£250.8M（FY2025） | [Yahoo Finance Financials](https://finance.yahoo.com/quote/MUF.F/cash-flow/) |
| 5yr FCF CAGR | 不適用：2022-2025 共 4/4 年 FCF 為負 | Yahoo Finance FCF；計算 |
| 最近一年 EBITDA | £228.1M（FY2025） | [Yahoo Finance Financials](https://finance.yahoo.com/quote/MUF.F/financials/) |
| Beta | 0.59 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/MUF.F/) |
| Total Debt | £780.4M（2025-12-31） | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/MUF.F/balance-sheet/) |
| Cash & Equivalents | £44.4M（2025-12-31） | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/MUF.F/balance-sheet/) |
| Net Debt | £736.0M | Total Debt - Cash；計算 |
| 流通股數 | 172.43M | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/MUF.F/balance-sheet/) |
| GBP/EUR | 1.1561 | [Yahoo Finance GBPEUR=X](https://finance.yahoo.com/quote/GBPEUR=X/) |
| 無風險利率 (10Y) | 4.38%（2026-05-08；2026-05-09 為週六，採最近可得日） | [U.S. Treasury Daily Yield Curve](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026) |
| WACC | 悲觀 8.12%；基準 7.62%；樂觀 7.12% | 計算 |
| 現價 | €16.17 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/MUF.F/) |
| EV/EBITDA 參考倍數 | 基準 13.2x；悲觀 10.56x；樂觀 15.84x | Comparable / industry search；計算 |

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 顯示 FY2022-FY2025 FCF 皆為負，無法建立有意義的 5 年 FCF CAGR，因此觸發 EV/EBITDA fallback。
- WACC 組成：無風險利率 4.38% + Beta 0.59 x 5.5% ERP = 7.62%（基準情境）；悲觀/樂觀分別加減 0.5 個百分點。
- EV/EBITDA fallback：使用 FY2025 EBITDA £228.1M，扣除 Net Debt £736.0M，再除以 172.43M 股，最後以 GBP/EUR 1.1561 換算為 EUR 每股價值。
- 終值佔總估值比重：N/A。此估值未使用 Gordon terminal value；敏感度主要來自 EV/EBITDA 倍數與淨負債/匯率假設。
- 目前反推 EV/EBITDA 約 13.8x，接近基準倍數 13.2x，因此估值對倍數假設高度敏感。

## 結論

基準情境下，MUF 的估算內在價值約 €15.25/股，較現價 €16.17 低約 5.7%，安全邊際不足。最主要的不確定因子是 FCF 持續為負、球員交易與資本支出波動、以及 EV/EBITDA 倍數是否能維持在娛樂/體育資產的高區間。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
