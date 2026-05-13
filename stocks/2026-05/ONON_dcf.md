# ONON — DCF 估值報告

## DCF 估值結果

估值基準日：2026-05-13；projection_years=5。現價採用 ONON 於 2026-05-12 美股收盤價 $33.83。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 14.0% | 1.5% | 16.43% | $13.67 | $33.83 | -59.6%（高估） |
| 基準 | 23.3% | 2.5% | 15.93% | $19.76 | $33.83 | -41.6%（高估） |
| 樂觀 | 32.6% | 3.5% | 15.43% | $29.17 | $33.83 | -13.8%（高估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | CHF 280.9M；約 $360.0M | [On Holding AG 2025 Form 20-F / SEC](https://www.sec.gov/Archives/edgar/data/1858985/000185898526000008/onholdingag-20251231.htm)：2025 operating cash flow CHF 359.5M - capex/intangibles CHF 78.6M |
| FCF CAGR | 23.3% | 依 2023 FCF CHF 184.9M 與 2025 FCF CHF 280.9M 計算；5 年序列含負 FCF，因此使用 3 年正值區間 |
| Beta | 2.09 | [Yahoo Finance / ONON](https://finance.yahoo.com/quote/ONON/) 與 [StockAnalysis statistics](https://stockanalysis.com/stocks/onon/statistics/) |
| Net Debt | -$638.7M（淨現金） | [On Holding AG 2025 Form 20-F / SEC](https://www.sec.gov/Archives/edgar/data/1858985/000185898526000008/onholdingag-20251231.htm)：cash CHF 1,019.9M；lease liabilities CHF 521.5M |
| 流通股數 | 331.0M Class A 等值股 | [On Holding AG 2025 Form 20-F / SEC](https://www.sec.gov/Archives/edgar/data/1858985/000185898526000008/onholdingag-20251231.htm)：Class A 296.873M + Class B 341.242M / 10 |
| 無風險利率 (10Y) | 4.43% | WebSearch；[Trading Economics / U.S. 10Y Treasury](https://tradingeconomics.com/united-states/10-year-treasury-constant-maturity-rate-percent-d-na-fed-data.html) |
| CHF/USD | 1.2815 | [Yahoo Finance CHFUSD=X](https://finance.yahoo.com/quote/CHFUSD=X/) |
| WACC | 悲觀 16.43%；基準 15.93%；樂觀 15.43% | 計算：risk-free + beta x 5.5% ERP，悲觀 +0.5%，樂觀 -0.5% |
| 現價 | $33.83 | [Yahoo Finance / ONON historical data](https://finance.yahoo.com/quote/ONON/history/)；2026-05-12 close |

## 關鍵假設說明

- FCF 成長率來源：由 2023-2025 FCF CAGR 23.3% 推導；悲觀為 base x 0.6，基準為 base，樂觀為 base x 1.4。
- WACC 組成：無風險利率 4.43% + Beta 2.09 x 5.5% ERP = 15.93%（基準情境）。
- 終值成長率：悲觀 1.5%、基準 2.5%、樂觀 3.5%，採 skill 預設假設。
- 終值佔總估值比重：56.6%（悲觀）、63.2%（基準）、69.2%（樂觀）。基準情境未超過 70%，但樂觀情境接近 70%，結果仍對終值與 WACC 假設敏感。

## 結論

基準情境下，ONON 的 DCF 內在價值約為 $19.76/股，較 2026-05-12 收盤價 $33.83 低約 41.6%，本模型下安全邊際不足。主要不確定因子是未來 FCF 能否維持 20% 以上成長、CHF/USD 匯率，以及高 Beta 導致的折現率敏感度。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
