# WOLF — DCF 估值報告

## DCF 估值結果

as_of_date：2026-05-17；projection_years：5 年。由於 WOLF 最近 5 年 FCF 多數為負，且最新季度 Adjusted EBITDA 仍為負，本次依 skill 規則觸發 EV/EBITDA fallback；但負 EBITDA 使 multiple-based equity value 不具可解讀性，因此不輸出有效正向內在價值。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/M | N/M | 10.60% | N/M（fallback raw: -$72.76） | $62.13 | N/M |
| 基準 | N/M | N/M | 10.10% | N/M（fallback raw: -$96.76） | $62.13 | N/M |
| 樂觀 | N/M | N/M | 9.60% | N/M（fallback raw: -$120.76） | $62.13 | N/M |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%。本次因 FCF 與 EBITDA 為負，安全邊際不具經濟意義。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | FY2025: -$1.983B；最近季度 Q3 FY2026: -$90.0M | [StockAnalysis cash flow](https://stockanalysis.com/stocks/wolf/financials/cash-flow-statement/)；[Wolfspeed Q3 FY2026 release](https://www.sec.gov/Archives/edgar/data/895419/000089541926000024/ex991q3-26.htm) |
| 5yr FCF CAGR | N/M（FY2021-FY2025 FCF 均為負，CAGR 不適用） | [StockAnalysis cash flow](https://stockanalysis.com/stocks/wolf/financials/cash-flow-statement/) |
| Beta | Yahoo Finance 顯示「--」；依 skill 規則用 1.00 | [Yahoo Finance WOLF](https://finance.yahoo.com/quote/WOLF/) |
| Total Debt | $1.7205B | [SEC 10-Q, March 29 2026](https://www.sec.gov/Archives/edgar/data/895419/000089541926000030/wolf-20260329.htm) |
| Cash + Short-term Investments | $1.1648B | [Wolfspeed Q3 FY2026 release](https://www.sec.gov/Archives/edgar/data/895419/000089541926000024/ex991q3-26.htm) |
| Net Debt | $0.5557B | 計算：$1.7205B - $1.1648B |
| 流通股數 | 48.339M | [SEC 10-Q, May 1 2026 shares outstanding](https://www.sec.gov/Archives/edgar/data/895419/000089541926000030/wolf-20260329.htm) |
| Adjusted EBITDA | Q3 FY2026: -$61.7M；annualized: -$246.8M | [Wolfspeed Q3 FY2026 release](https://www.sec.gov/Archives/edgar/data/895419/000089541926000024/ex991q3-26.htm) |
| 無風險利率 (10Y) | 4.601%（2026-05-15，2026-05-17 為週日） | [Kiplinger market recap](https://www.kiplinger.com/investing/stocks/stocks-sink-as-treasury-yields-spike-stock-market-today) |
| WACC | 悲觀 10.60%；基準 10.10%；樂觀 9.60% | 計算：4.601% + 1.00 x 5.5%，情境加減 0.5% |
| 現價 | $62.13 | [Yahoo Finance WOLF](https://finance.yahoo.com/quote/WOLF/) |

## 關鍵假設說明

- FCF 成長率來源：WOLF FY2021-FY2025 FCF 全為負，且 Q3 FY2026 FCF 仍為 -$90.0M，因此 5 年 DCF CAGR 不適用。
- Fallback 方法：因多數年份 FCF 為負，依 skill 規則改用 EV/EBITDA fallback；但 Q3 FY2026 Adjusted EBITDA 為 -$61.7M，annualized EBITDA 為 -$246.8M，EV/EBITDA multiple 估值會產生負 equity value，故標示為 N/M。
- WACC 組成：無風險利率 4.601% + Beta 1.00 x 5.5% ERP = 10.10%（基準情境）。
- 終值佔總估值比重：N/M。本次未使用有效 DCF 終值，因 FCF 為負且無法建立可靠正向現金流基準。
- Terminal value sensitivity：N/M；本次估值主要風險不是終值敏感度，而是公司尚未證明可持續正 FCF / EBITDA。

## 結論

基準情境下，WOLF 因歷史 FCF 多年為負、最新季度 Adjusted EBITDA 仍為負，DCF 與 EV/EBITDA fallback 都無法形成可解讀的正向每股內在價值。最主要的不確定因子是重整後資本結構、產能利用率、毛利率修復速度，以及公司能否在未來年度轉為穩定正自由現金流。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
