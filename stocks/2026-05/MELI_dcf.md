# MELI — DCF 估值報告

as_of_date：2026-05-09  
projection_years：5 年

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $10.77B | 2025 Form 10-K：Operating Cash Flow $12.116B - Productive Assets CapEx $1.343B（SEC） |
| 5yr FCF CAGR | 63.04% | 2020-2025 FCF CAGR：$0.935B → $10.773B（SEC company facts / 10-K） |
| Beta | 1.53 | Yahoo Finance |
| Total Debt | $12.00B | 2026 Q1 Form 10-Q：Long-term debt、notes payable、credit lines 合計（SEC） |
| Cash & Equivalents | $3.68B | 2026 Q1 Form 10-Q Cash and Cash Equivalents（SEC） |
| Net Debt | $8.32B | Total Debt - Cash & Equivalents |
| 流通股數 | 50.70M | 2026 Q1 Form 10-Q EntityCommonStockSharesOutstanding（SEC） |
| 無風險利率 (10Y) | 4.38% | U.S. Treasury Daily Treasury Par Yield Curve Rates，2026-05-08 |
| WACC | Bear 13.30% / Base 12.80% / Bull 12.30% | 4.38% + Beta 1.53 x 5.5% ERP，依情境 +/- 0.5% |
| 現價 | $1,632.52 | Yahoo Finance chart market data，2026-05-08 close |

來源連結：  
SEC 2025 10-K：https://www.sec.gov/Archives/edgar/data/1099590/000109959026000006/meli-20251231.htm  
SEC 2026 Q1 10-Q：https://www.sec.gov/Archives/edgar/data/1099590/000109959026000017/meli-20260331.htm  
Yahoo Finance：https://finance.yahoo.com/quote/MELI/  
U.S. Treasury：https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value_month=202605&type=daily_treasury_yield_curve

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 37.83% | 1.5% | 13.30% | $6,691.82 | $1,632.52 | +309.9% (低估) |
| 基準 | 63.04% | 2.5% | 12.80% | $16,838.84 | $1,632.52 | +931.5% (低估) |
| 樂觀 | 88.26% | 3.5% | 12.30% | $39,374.26 | $1,632.52 | +2,311.9% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：以 2020-2025 年 FCF CAGR 63.04% 作為 base rate；悲觀為 base x 0.6，樂觀為 base x 1.4。
- WACC 組成：無風險利率 4.38% + Beta 1.53 x 5.5% ERP = 12.80%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：悲觀 71.0%、基準 78.5%、樂觀 83.7%。
- 終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- MELI 近年 FCF 從低基期快速放大，機械套用 5yr CAGR 會大幅推高 DCF 結果；這是本模型最主要敏感點。

## 結論

基準情境下，DCF 內在價值為 $16,838.84/股，相對現價 $1,632.52 顯示 +931.5% 安全邊際；但估值高度依賴 63.04% 的歷史 FCF CAGR 能否延續。最主要不確定因子是 MELI 在高成長、金融業務擴張與物流投資下，未來 FCF 成長是否會快速均值回歸。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
