# BRK — DCF 估值報告 (2026-05-06)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $25.0B | [SEC 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1067983/000119312526083899/brka-20251231.htm)：2025 OCF $46.0B - CapEx $20.9B |
| 5yr FCF CAGR | -1.3% | SEC 10-K 計算：2020 FCF $26.8B 至 2025 FCF $25.0B |
| Beta | 0.69 | [Yahoo Finance BRK-B](https://finance.yahoo.com/quote/BRK-B/) |
| Net Debt | -$244.8B | SEC 10-K：Debt $124.4B - Cash & equivalents / short-term U.S. Treasury Bills $369.2B |
| 流通股數 | 2.157B BRK-B 等價股 | SEC 10-K：Class A 511,820 x 1,500 + Class B 1,389,605,139 |
| 無風險利率 (10Y) | 4.43% | [U.S. Treasury Daily Yield Curve](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026)，2026-05-05 最新官方值 |
| WACC | 8.23% | 計算：4.43% + 0.69 x 5.5% |
| 現價 | $469.46 | [Yahoo Finance BRK-B chart](https://query1.finance.yahoo.com/v8/finance/chart/BRK-B?period1=1777939200&period2=1778112000&interval=1d)，2026-05-06 |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -0.8% | 1.5% | 8.73% | $261.07 | $469.46 | -44.4% (高估) |
| 基準 | -1.3% | 2.5% | 8.23% | $288.81 | $469.46 | -38.5% (高估) |
| 樂觀 | -1.8% | 3.5% | 7.73% | $336.30 | $469.46 | -28.4% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：使用 2020-2025 年 SEC 10-K 現金流資料，FCF = Operating Cash Flow - CapEx，5 年 CAGR 為 -1.3%。
- WACC 組成：無風險利率 4.43% + Beta 0.69 x 5.5% ERP = 8.23%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：74.7%（基準情境）。
- 基準與樂觀情境終值佔比超過 70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- BRK 在市場資料上通常分為 BRK-A / BRK-B；本報告用 BRK-B 等價股數與 BRK-B 現價計算每股估值。

## 結論

基準情境下，BRK 的 DCF 內在價值約為 $288.81 / BRK-B 等價股，較 2026-05-06 現價 $469.46 低約 38.5%。主要不確定因子是 Berkshire 現金與短期美債部位的估值口徑、保險 float 的資本成本處理，以及終值假設對總估值的高敏感度。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
