# CRM — DCF 估值報告

## DCF 估值結果

估值日期：2026-05-21；預測期間：5 年。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 17.1% | 1.5% | 11.34% | $327.02 | $180.10 | +81.6% (低估) |
| 基準 | 28.5% | 2.5% | 10.84% | $583.91 | $180.10 | +224.2% (低估) |
| 樂觀 | 39.9% | 3.5% | 10.34% | $1,053.00 | $180.10 | +484.7% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $14.402B | [Yahoo Finance Financials](https://finance.yahoo.com/quote/CRM/financials)、[StockAnalysis Cash Flow](https://stockanalysis.com/stocks/crm/financials/cash-flow-statement/) |
| FCF 歷史 | FY2022 $5.283B；FY2023 $6.313B；FY2024 $9.498B；FY2025 $12.434B；FY2026 $14.402B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/crm/financials/cash-flow-statement/)、[Macrotrends FCF](https://www.macrotrends.net/stocks/charts/CRM/salesforce/free-cash-flow/1000) |
| 5yr FCF CAGR | 28.5% | 以上 FCF 歷史計算 |
| Beta | 1.139 | [Yahoo Finance CRM](https://finance.yahoo.com/quote/CRM)、[StockAnalysis Statistics](https://stockanalysis.com/stocks/crm/statistics/) |
| Net Debt | $7.611B = Total Debt $17.176B - Cash & Short-Term Investments $9.565B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/CRM/balance-sheet)、[StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/crm/financials/balance-sheet/) |
| 流通股數 | 818.05M | [Yahoo Finance CRM](https://finance.yahoo.com/quote/CRM)、[StockAnalysis Statistics](https://stockanalysis.com/stocks/crm/statistics/) |
| 無風險利率 (10Y) | 4.572% | [Yahoo Finance ^TNX](https://finance.yahoo.com/quote/%5ETNX)、[AP market report](https://apnews.com/article/351c7434b9875516e61e8917f960fc13) |
| WACC | 悲觀 11.34%；基準 10.84%；樂觀 10.34% | 計算 |
| 現價 | $180.10 | [Yahoo Finance CRM](https://finance.yahoo.com/quote/CRM) |

## 關鍵假設說明

- FCF 成長率來源：以 FY2022-FY2026 五個年度 FCF，由 $5.283B 增至 $14.402B，計算 CAGR 為 28.5%；悲觀 / 基準 / 樂觀分別使用 base_rate x 0.6 / 1.0 / 1.4。
- WACC 組成：無風險利率 4.572% + Beta 1.139 x 5.5% ERP = 10.84%；悲觀情境加 0.50 個百分點，樂觀情境減 0.50 個百分點。
- 終值佔總估值比重：76.4%（基準情境）；悲觀 69.5%，樂觀 82.1%。
- 基準與樂觀情境終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。

## 結論

在此 skill 規則下，若嚴格外推 Salesforce 近年 FCF CAGR，基準情境內在價值為 $583.91，較 $180.10 現價高約 224.2%。主要不確定因子是 FY2022-FY2026 的高 FCF 成長是否可持續，以及終值假設對估值結果的放大效果。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
