# AMZN — DCF 估值報告 (2026-05-12)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -25.8% | 1.5% | 13.01% | $-7.18 | $268.99 | -102.7% (高估) |
| 基準 | -18.4% | 2.5% | 12.51% | $-5.72 | $268.99 | -102.1% (高估) |
| 樂觀 | -11.1% | 3.5% | 12.01% | $-3.31 | $268.99 | -101.2% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $11.194B | [Amazon 2025 Annual Report](https://s2.q4cdn.com/299287126/files/doc_financials/2026/ar/Amazon-2025-Annual-Report.pdf) |
| 5yr FCF CAGR | -18.4% | [Macrotrends FCF history](https://www.macrotrends.net/stocks/charts/AMZN/amazon/free-cash-flow) + Amazon 2025 Annual Report；以 2020 FCF $31.020B 至 2025 FCF $11.194B 計算 |
| Beta | 1.47 | [StockAnalysis](https://stockanalysis.com/stocks/amzn/) |
| Net Debt | $108.072B | [Amazon Q1 2026 results](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000012/amzn-20260331xex991.htm)：Total debt $209.888B - cash & equivalents $101.816B |
| 流通股數 | 10.754B | [Amazon Q1 2026 results](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000012/amzn-20260331xex991.htm) |
| 無風險利率 (10Y) | 4.42% | [Slickcharts / Treasury.gov data](https://www.slickcharts.com/treasury/10-year) |
| WACC | 12.51% | 計算：4.42% + 1.47 x 5.5% |
| 現價 | $268.99 | [StockAnalysis](https://stockanalysis.com/stocks/amzn/)；May 11, 2026 close |

## 關鍵假設說明

- FCF 成長率來源：以 2020 FCF $31.020B 至 2025 FCF $11.194B 的 5yr CAGR 計算。因 base_rate 為負，悲觀情境採較深衰退、樂觀情境採較淺衰退。
- WACC 組成：無風險利率 4.42% + Beta 1.47 x 5.5% ERP = 12.51%；悲觀 / 樂觀情境各加減 0.5 個百分點。
- 終值佔總估值比重：49.3%（基準情境），未超過 70%。
- 最新 Q1 2026 公告的 TTM FCF 為 $1.232B，顯示 AI / infrastructure capex 對 FCF 壓力很大；本模型採 FY2025 年度 FCF 作為起點，因此結果對 FCF 是否回復高度敏感。
- 本次三情境 DCF 已用 Bash 搭配 `python3` 依 skill 公式計算。

## 結論

在基準情境下，AMZN 的 DCF 內在價值為每股 $-5.72，相對 $268.99 現價呈現 -102.1% 安全邊際。主要不確定因子是未來 capex 強度與 FCF 正常化速度；若 FCF 無法快速回升，DCF 對現價支持度不足。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
