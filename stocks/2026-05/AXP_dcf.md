# AXP — DCF 估值報告

as_of_date：2026-05-06  
projection_years：5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $16.0B | [American Express 2025 Annual Report](https://s26.q4cdn.com/747928648/files/doc_financials/2025/ar/American-Express-Annual-Report-2025.pdf)：2025 CFO $18.428B - CapEx $2.425B |
| 5yr FCF CAGR | 5.1% | 以 2021-2025 FCF 計算；2021-2023 來自 [2023 Annual Report](https://materials.proxyvote.com/Approved/025816/20240308/AR_564457/images/American_Express-AR2023.pdf)，2024-2025 來自 2025 Annual Report |
| Beta | 1.13 | [Yahoo Finance](https://finance.yahoo.com/quote/AXP/) |
| Net Debt | $27.4B | Q1 2026 Total Debt $75.1B - Total Cash $47.6B；[MarketBeat financials](https://www.marketbeat.com/stocks/NYSE/AXP/financials/) / [Yahoo Finance](https://finance.yahoo.com/quote/AXP/) |
| 流通股數 | 686.6M | Yahoo Finance market cap $226.3B / price $329.59 反推 |
| 無風險利率 (10Y) | 4.43% | [U.S. Treasury Daily Treasury Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=202605&type=daily_treasury_yield_curve)，截至 2026-05-05 官方 10 Yr |
| WACC | 10.65% | 計算：4.43% + 1.13 x 5.5% |
| 現價 | $329.59 | [Yahoo Finance](https://finance.yahoo.com/quote/AXP/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 3.1% | 1.5% | 11.15% | $221.88 | $329.59 | -32.7% (高估) |
| 基準 | 5.1% | 2.5% | 10.65% | $287.57 | $329.59 | -12.8% (高估) |
| 樂觀 | 7.2% | 3.5% | 10.15% | $384.54 | $329.59 | +16.7% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：以 2021 FCF $13.095B 至 2025 FCF $16.003B 的 CAGR 作為 base rate；bear = base x 0.6，bull = base x 1.4。
- WACC 組成：無風險利率 4.43% + Beta 1.13 x 5.5% ERP = 10.65%；bear 加 0.5%，bull 減 0.5%。
- 終值佔總估值比重：69.4%（基準情境）。
- 樂觀情境終值佔比 74.7%，高於 70%，結果對終值假設高度敏感，請謹慎解讀。
- AXP 為金融控股與信用卡貸款公司，傳統 DCF 對營運資金、貸款成長與資本結構假設較敏感，本模型只作為簡化估值框架。

## 結論

基準情境下，AXP 內在價值估算為每股 $287.57，較 $329.59 現價約低 12.8%，顯示目前價格相對基準 DCF 假設偏高。主要不確定因子是信用週期、貸款成長、資金成本與終值假設；樂觀情境雖顯示上行空間，但終值佔比已高於 70%，敏感度較高。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
