# AVGO — DCF 估值報告

as_of_date: 2026-05-08  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $26.914B | [Broadcom FY2025 results](https://investors.broadcom.com/node/63716/pdf)；FY2025 FCF $26.914B |
| 5yr FCF CAGR | 資料不足；改用 3yr CAGR 18.2% | [Yahoo Finance cash flow](https://finance.yahoo.com/quote/AVGO/cash-flow/)；FY2022 $16.312B 至 FY2025 $26.914B 計算 |
| Beta | 1.44 | [Yahoo Finance summary](https://finance.yahoo.com/quote/AVGO/) |
| Total Debt | $66.057B | [Broadcom Q1 FY2026 results](https://www.nasdaq.com/press-release/broadcom-inc-announces-first-quarter-fiscal-year-2026-financial-results-and-quarterly)：Short-term debt $2.252B + Long-term debt $63.805B |
| Cash & Equivalents | $14.174B | [Broadcom Q1 FY2026 results](https://www.nasdaq.com/press-release/broadcom-inc-announces-first-quarter-fiscal-year-2026-financial-results-and-quarterly) |
| Net Debt | $51.883B | 計算：$66.057B - $14.174B |
| 流通股數 | 4.735B | [Yahoo Finance summary](https://finance.yahoo.com/quote/AVGO/) |
| 無風險利率 (10Y) | 4.39% | [Trading Economics — US 10Y Treasury](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 悲觀 12.81%；基準 12.31%；樂觀 11.81% | 計算：risk-free + Beta x 5.5% ERP，情境調整 +/-0.5% |
| 現價 | $412.56 | [Yahoo Finance summary](https://finance.yahoo.com/quote/AVGO/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 10.9% | 1.5% | 12.81% | $62.89 | $412.56 | -84.8% (高估) |
| 基準 | 18.2% | 2.5% | 12.31% | $98.81 | $412.56 | -76.0% (高估) |
| 樂觀 | 25.4% | 3.5% | 11.81% | $155.49 | $412.56 | -62.3% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance annual cash flow 可用序列為 FY2022-FY2025，因此依 skill 規則改用 3yr CAGR；FY2022 FCF $16.312B，FY2025 FCF $26.914B，CAGR = 18.2%。
- WACC 組成：無風險利率 4.39% + Beta 1.44 x 5.5% ERP = 12.31%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：69.8%（基準情境）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀；本次樂觀情境終值佔比為 75.6%，已超過 70%。

## 結論

基準情境下，AVGO 內在價值估算為 $98.81/股，較現價 $412.56 低約 76.0%，模型顯示安全邊際不足。主要不確定因子是 AVGO 的 AI 相關 FCF 成長能否長期維持高於歷史 CAGR，以及高成長終值假設對估值的放大效果。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
