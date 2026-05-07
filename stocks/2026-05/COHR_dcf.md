# COHR — DCF 估值報告

As of: 2026-05-07  
Ticker: COHR  
Projection years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $0.193B | [Coherent FY2025 Annual Report](https://www.coherent.com/content/dam/coherent/site/en/documents/investors/annual-filings/2025/coherent-annual-report-2025.pdf)：Operating cash flow $633.6M - CapEx $440.8M |
| 5yr FCF CAGR | 3.74% | [Macrotrends COHR Free Cash Flow](https://www.macrotrends.net/stocks/charts/COHR/coherent/free-cash-flow)：2020 $160.42M → 2025 $192.76M，計算 |
| Beta | 2.05 | [StockAnalysis COHR Statistics](https://stockanalysis.com/stocks/cohr/statistics/) |
| Net Debt | $1.01B | [StockAnalysis COHR Statistics](https://stockanalysis.com/stocks/cohr/statistics/)：Total Debt $3.43B - Cash $2.42B |
| 流通股數 | 195.27M | [StockAnalysis COHR Statistics](https://stockanalysis.com/stocks/cohr/statistics/) |
| 無風險利率 (10Y) | 4.36% | [U.S. Treasury Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)，2026-05-06 最新可得 10Y |
| WACC | 15.64% | 計算：4.36% + 2.05 × 5.5% |
| 現價 | $344.67 | [StockAnalysis COHR Statistics](https://stockanalysis.com/stocks/cohr/statistics/)，2026-05-06 收盤價 |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 2.24% | 1.5% | 16.13% | $1.87 | $344.67 | -99.5% (高估) |
| 基準 | 3.74% | 2.5% | 15.63% | $2.91 | $344.67 | -99.2% (高估) |
| 樂觀 | 5.24% | 3.5% | 15.13% | $4.23 | $344.67 | -98.8% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：使用 2020-2025 annual FCF CAGR，從 $160.42M 增至 $192.76M，CAGR 為 3.74%。
- WACC 組成：無風險利率 4.36% + Beta 2.05 x 5.5% ERP = 15.64%；情境 WACC 依 skill 規則調整為悲觀 +0.5%、樂觀 -0.5%。
- 終值佔總估值比重：55.4%（基準情境）。
- 終值佔比未超過 70%，但由於 COHR 現價遠高於以歷史 FCF 推導的 DCF 值，結果仍對未來 FCF 大幅擴張假設高度敏感。

## 結論

基準情境下，COHR 以歷史 annual FCF 為基礎推導的內在價值約為 $2.91/股，較 $344.67 現價低約 99.2%，顯示此簡化 DCF 模型無法支持目前股價。主要不確定因子是 AI/datacenter 光通訊需求能否讓未來 FCF 出現非線性成長，遠高於過去 5 年歷史 CAGR。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
