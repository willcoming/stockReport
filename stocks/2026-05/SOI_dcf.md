# SOI — DCF 估值報告 (2026-05-17)

## DCF 估值結果

SOI 已於 2024-09-12 更名並改交易代號為 SEI；以下以承繼上市代號 SEI 的公開資料估算。因最近可得年度 FCF 多數為負，依 skill 規則改用 EV/EBITDA fallback；此表不是傳統 DCF 折現結果。

| 情境 | 模型 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | EV/EBITDA | 內在價值/股 | 現價 | 安全邊際 |
|------|------|-----------------|----------|------|-----------|-----------|------|---------|
| 悲觀 | EV/EBITDA fallback | N/A | N/A | 12.00%（參考） | 5.7x | $6.08 | $78.58 | -92.3% (高估) |
| 基準 | EV/EBITDA fallback | N/A | N/A | 11.50%（參考） | 7.1x | $11.87 | $78.58 | -84.9% (高估) |
| 樂觀 | EV/EBITDA fallback | N/A | N/A | 11.00%（參考） | 8.3x | $16.83 | $78.58 | -78.6% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 交易代號變更 | SOI → SEI，2024-09-12 生效 | [MIAX corporate action](https://www.miaxglobal.com/alert/2024/09/11/miax-exchange-group-options-markets-corporate-action-alert-solaris-oilfield-0) |
| 最近一年 FCF | -$437.7M | [Yahoo Finance SEI Financials](https://finance.yahoo.com/quote/SEI/financials) |
| 最近年度 FCF | 2022: -$13.4M；2023: $25.0M；2024: -$129.1M；2025: -$437.7M | [Yahoo Finance SEI Cash Flow](https://finance.yahoo.com/quote/SEI/cash-flow) |
| 5yr FCF CAGR | N/A，FCF 多年為負且 2021 資料不足 | 計算 |
| Q1 2026 EBITDA | $74.1M | [Solaris Q1 2026 results / SEC exhibit](https://www.sec.gov/Archives/edgar/data/1697500/000162828026027520/sei-ex99x3312026.htm) |
| Annualized EBITDA | $296.2M | Q1 2026 EBITDA x 4，計算 |
| Beta | 1.26 | [Yahoo Finance SEI Quote](https://finance.yahoo.com/quote/SEI/) |
| Total Debt | $1.5967B | [Solaris Q1 2026 results / SEC exhibit](https://www.sec.gov/Archives/edgar/data/1697500/000162828026027520/sei-ex99x3312026.htm) |
| Cash | $344.5M | [Solaris Q1 2026 results / SEC exhibit](https://www.sec.gov/Archives/edgar/data/1697500/000162828026027520/sei-ex99x3312026.htm) |
| Net Debt | $1.2522B | Total Debt - Cash，計算 |
| 流通股數 | 71.709M diluted shares | [Solaris Q1 2026 results / SEC exhibit](https://www.sec.gov/Archives/edgar/data/1697500/000162828026027520/sei-ex99x3312026.htm) |
| 無風險利率 (10Y) | 4.59% | [U.S. Treasury daily rates, 2026-05-15](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 基準 11.50% | 4.59% + 1.26 x 5.5%，計算 |
| 現價 | $78.58 | [Yahoo Finance SEI Quote](https://finance.yahoo.com/quote/SEI/) |
| 2026 Oilfield Services EV/EBITDA | NTM 平均 7.1x；Machinery & Equipment 5.7x；高端 peer range 約 8x+ | [MNP Q1 2026 Oilfield Services update](https://www.mnp.ca/-/media/files/mnp/pdf/service/corporate-finance/middle-market-m-and-a-update/2026/oilfield-services-quarterly-update-q1-2026.pdf) |

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 年度 FCF 顯示 2022、2024、2025 為負值，最近可得年度資料中多數年份為負，因此依 skill 規則改用 EV/EBITDA fallback。
- WACC 組成：無風險利率 4.59% + Beta 1.26 x 5.5% ERP = 11.50%；悲觀/樂觀情境分別加減 0.5 個百分點，僅作參考，未用於 fallback 估值。
- EV/EBITDA fallback：以 Q1 2026 EBITDA $74.1M 年化為 $296.2M，套用 5.7x / 7.1x / 8.3x 情境倍數，再扣除 Net Debt $1.2522B，除以 71.709M diluted shares。
- 終值佔總估值比重：N/A；本次不是 DCF 終值模型，無 terminal value sensitivity 可計算。
- 現價使用 2026-05-15 最近交易日價格，因 as_of_date 2026-05-17 為週日。

## 結論

基準情境下，EV/EBITDA fallback 推得內在價值約 $11.87/股，較 $78.58 現價低約 84.9%。主要不確定因子是 Solaris 的 data-center power 合約能否把 EBITDA 顯著拉高；若市場已用未來高成長 run-rate 定價，歷史/年化 EBITDA fallback 會偏保守。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
