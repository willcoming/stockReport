# AMSSY — DCF 估值報告

## DCF 估值結果

估值基準日：2026-05-14；projection years：5 年。內在價值以 AMSSY ADS 計算，並以 EUR/USD 1.1719 換算為美元。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -65.8% | 1.5% | 14.27% | $-6.25 | $11.96 | -152.3% (高估) |
| 基準 | -47.0% | 2.5% | 13.77% | $-6.11 | $11.96 | -151.1% (高估) |
| 樂觀 | -28.2% | 3.5% | 13.27% | $-5.76 | $11.96 | -148.2% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | EUR 38m | [ams OSRAM Annual Report 2025](https://ams-osram.com/documents/d/ams-osram/eng-geschafts-und-nachhaltigkeitsbericht-ams-osram-2025)：Operating cash flow EUR 237m - additions to intangible assets/PPE EUR 199m |
| 5yr FCF CAGR | -47.0% | 由 FCF 2021 EUR 482m 至 2025 EUR 38m 計算；歷史 FCF 2021-2024 參考 [StockAnalysis AMSSY Cash Flow](https://stockanalysis.com/quote/otc/AMSSY/financials/cash-flow-statement/) |
| Beta | 1.693 | [Yahoo Finance AMSSY](https://finance.yahoo.com/quote/AMSSY) quote API / yfinance |
| Net Debt | EUR 1.078B | [ams OSRAM Annual Report 2025](https://ams-osram.com/documents/d/ams-osram/eng-geschafts-und-nachhaltigkeitsbericht-ams-osram-2025) |
| 流通股數 | 199.1m ADS 等價股 | Yahoo Finance / yfinance；ordinary shares 98.85m，ADS ratio 2 ADS = 1 ordinary share，參考 [BNY ADR notice](https://www.adrbny.com/content/dam/adr/documents/corporate-actions-dr/files/AD2000021.pdf) |
| 無風險利率 (10Y) | 4.46% | [U.S. Treasury Daily Treasury Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026)，2026-05-13 最新可得 10Y |
| WACC | 13.77% (基準) | 計算：4.46% + 1.693 x 5.5% |
| 現價 | $11.96 | [Yahoo Finance AMSSY](https://finance.yahoo.com/quote/AMSSY) quote API / yfinance |
| EUR/USD | 1.1719 | Yahoo Finance EURUSD=X / yfinance |

## 關鍵假設說明

- FCF 成長率來源：以 2021-2025 年標準 FCF CAGR 計算，2021 EUR 482m 下降至 2025 EUR 38m，得到 -47.0%。因歷史 CAGR 為負，情境排序改以「悲觀 = 衰退更深、樂觀 = 衰退較緩」處理。
- WACC 組成：無風險利率 4.46% + Beta 1.693 x 5.5% ERP = 13.77%；悲觀加 0.5%，樂觀減 0.5%。
- 終值佔總估值比重：18.9%（基準情境）。
- 終值佔比未超過 70%，但結果仍高度受 FCF 起點與淨負債假設影響。
- 使用公司披露的淨負債 EUR 1.078B，不含 Malaysia sale-and-leaseback；若納入該項，估值會更低。

## 結論

基準情境下，AMSSY 的 DCF 內在價值為 $-6.11/ADS，低於現價 $11.96，安全邊際為 -151.1%，顯示以目前 FCF 起點與淨負債結構衡量，DCF 不支持現價。最主要不確定因子是 2026 之後自由現金流能否因資產出售、降本與去槓桿而明顯修復。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
