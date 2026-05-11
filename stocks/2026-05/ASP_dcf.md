# ASP — DCF 估值報告

as_of_date: 2026-05-11  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| ticker 驗證 | ASP 查無可用 Yahoo/yfinance 價格與財務資料；最接近公開標的為 ASP Isotopes Inc.，ticker 為 ASPI | Yahoo/yfinance 查詢；[StockAnalysis ASPI Overview](https://stockanalysis.com/stocks/aspi/) |
| 最近一年 FCF | -$47.43M | [StockAnalysis ASPI Cash Flow](https://stockanalysis.com/stocks/aspi/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/M（2022-2025 FCF 全為負值，CAGR 不具經濟意義） | [StockAnalysis ASPI Cash Flow](https://stockanalysis.com/stocks/aspi/financials/cash-flow-statement/) |
| Beta | 3.27 | [StockAnalysis ASPI Statistics](https://stockanalysis.com/stocks/aspi/statistics/) |
| Net Debt | -$118.65M（net cash） | [StockAnalysis ASPI Statistics](https://stockanalysis.com/stocks/aspi/statistics/) |
| 流通股數 | 125.90M | [StockAnalysis ASPI Statistics](https://stockanalysis.com/stocks/aspi/statistics/) |
| 無風險利率 (10Y) | 4.38%（2026-05-08，報告日前最近官方資料） | [U.S. Treasury Daily Treasury Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 悲觀 22.87%；基準 22.37%；樂觀 21.87% | 計算：4.38% + 3.27 × 5.5% ± 0.5% |
| 現價 | $5.56（ASPI，2026-05-11 9:41 AM EDT） | [StockAnalysis ASPI Overview](https://stockanalysis.com/stocks/aspi/) |
| EBITDA | -$55.88M | [StockAnalysis ASPI Statistics](https://stockanalysis.com/stocks/aspi/statistics/) |

## DCF 估值結果

由於最接近標的 ASPI 最近四個會計年度 FCF 皆為負值，且 EBITDA 亦為負值，DCF 與 EV/EBITDA fallback 均無法產生有經濟意義的正向內在價值估算。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 22.87% | N/A | $5.56 | N/A |
| 基準 | N/A | 2.5% | 22.37% | N/A | $5.56 | N/A |
| 樂觀 | N/A | 3.5% | 21.87% | N/A | $5.56 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：無法使用。ASPI FY2022-FY2025 Free Cash Flow 分別為 -$7.41M、-$7.74M、-$28.07M、-$47.43M，全部為負值。
- WACC 組成：無風險利率 4.38% + Beta 3.27 x 5.5% ERP = 22.37%（基準情境）。
- 終值佔總估值比重：N/A。因 FCF base 為負值，未建立 Gordon Growth terminal value。
- EV/EBITDA fallback：不可用。EBITDA 為 -$55.88M，EV/EBITDA multiple 無經濟意義。
- ticker 限制：使用者輸入 `ASP`，但公開資料源未找到有效單一股票 ticker；本報告僅以最接近公開標的 `ASPI` 作資料檢查，不將其視為對 `ASP` 的可交易估值結論。

## 結論

基準情境下無法給出可依賴的 DCF 內在價值/股，原因是可驗證標的的 FCF 與 EBITDA 皆為負值，且輸入 ticker `ASP` 本身未能對應到有效公開股票財務資料。此案目前較適合等待正向自由現金流、穩定 EBITDA 或更明確 ticker 後再重跑估值。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
