# ASTS — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 19.22% | N/A | $73.45 | N/A |
| 基準 | N/A | 2.5% | 18.72% | N/A | $73.45 | N/A |
| 樂觀 | N/A | 3.5% | 18.22% | N/A | $73.45 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

ASTS 最近 5 年 FCF 全數為負，且 2025 EBITDA 亦為負，因此依 skill 規則改用 EV/EBITDA fallback；但負 EBITDA 無法產生具經濟意義的 EV/EBITDA 估值，故三情境內在價值標記為 N/A，而非捏造正值。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$1.136B | SEC Companyfacts：OCF -$71.5M、CapEx $1.065B（[SEC](https://data.sec.gov/api/xbrl/companyfacts/CIK0001780312.json)） |
| 5yr FCF CAGR | N/A | 2021-2025 FCF 均為負，傳統 CAGR 不適用（[SEC](https://data.sec.gov/api/xbrl/companyfacts/CIK0001780312.json)） |
| Beta | 2.60 | Yahoo Finance（[Yahoo Finance](https://finance.yahoo.com/quote/ASTS/)） |
| Net Debt | -$58.1M | Q1 2026 debt $2.972B - cash $3.030B（[SEC](https://data.sec.gov/api/xbrl/companyfacts/CIK0001780312.json)） |
| 流通股數 | 382.02M | StockAnalysis share statistics（[StockAnalysis](https://stockanalysis.com/stocks/asts/statistics/)） |
| 無風險利率 (10Y) | 4.42% | AhaSignals 10Y Treasury yield, May 11 2026（[AhaSignals](https://ahasignals.com/10y-treasury-yield-tracker/)） |
| WACC | 18.72% 基準 | 計算：4.42% + 2.60 x 5.5% |
| 現價 | $73.45 | May 12 2026 close reported by Weiss Ratings（[Weiss Ratings](https://weissratings.com/en/instant-news-alerts/ast-spacemobile-inc-asts-down-11-0-should-i-exit-before-things-get-worse)） |
| 2025 EBITDA | -$236.6M | StockAnalysis financials（[StockAnalysis](https://stockanalysis.com/stocks/asts/financials/)） |

## 關鍵假設說明

- FCF 成長率來源：N/A。ASTS 2021-2025 FCF 分別約為 -$95.2M、-$213.7M、-$267.7M、-$300.3M、-$1.136B，全部為負值，無法使用正 FCF DCF 的歷史 CAGR。
- WACC 組成：無風險利率 4.42% + Beta 2.60 x 5.5% ERP = 18.72%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：N/A（基準情境無有效 DCF 內在價值）。
- EV/EBITDA fallback：不適用，因 2025 EBITDA 為 -$236.6M；負 EBITDA 下套用產業 median EV/EBITDA multiple 會產生無經濟意義的估值。
- Python calculation 已確認：5 年 FCF 負值年數 = 5，EBITDA < 0，因此 `valuation_applicable = false`。

## 結論

基準情境下，ASTS 目前無法用傳統正 FCF DCF 或 EV/EBITDA fallback 得出可靠每股內在價值，因此安全邊際為 N/A。最主要不確定因子是商業化收入能否足以扭轉 EBITDA 與 FCF，否則估值高度依賴未來融資、衛星部署進度與長期收入假設。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
