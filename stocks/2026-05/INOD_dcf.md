# INOD — DCF 估值報告

as_of_date：2026-05-11  
projection_years：5 年

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近完整年度 FCF | $35.65M（FY2025） | StockAnalysis cash flow table；FY2025 Free Cash Flow = 35.65M |
| FCF 歷史 | FY2021 $0.78M、FY2022 -$7.74M、FY2023 $0.34M、FY2024 $27.12M、FY2025 $35.65M | StockAnalysis cash flow table |
| 5yr FCF CAGR | 160.0% | 由 FY2021 $0.78M 至 FY2025 $35.65M 計算 |
| Beta | 2.40 | StockAnalysis statistics |
| Total Debt | $15.95M | StockAnalysis balance sheet |
| Cash & Equivalents | $117.37M | StockAnalysis balance sheet |
| Net Debt | -$101.42M（淨現金） | Total Debt - Cash & Equivalents；StockAnalysis balance sheet |
| 流通股數 | 32.66M | StockAnalysis statistics |
| 無風險利率 (10Y) | 4.36% | Trading Economics U.S. 10Y Government Bond value 4.3590% |
| WACC | 悲觀 18.06% / 基準 17.56% / 樂觀 17.06% | 計算：risk-free 4.36% + Beta 2.40 x 5.5% ERP，再依情境 +/-0.5% |
| 現價 | $84.89 | StockAnalysis close price, May 8, 2026 |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 96.0% | 1.5% | 18.06% | $119.38 | $84.89 | +40.6%（低估） |
| 基準 | 160.0% | 2.5% | 17.56% | $499.79 | $84.89 | +488.8%（低估） |
| 樂觀 | 224.0% | 3.5% | 17.06% | $1,632.88 | $84.89 | +1,823.5%（低估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：依 skill 規則使用 5 年歷史 FCF CAGR；FY2021 FCF 基數僅 $0.78M，且 FY2022 為負值，因此 160.0% CAGR 具高度機械性放大效果。
- WACC 組成：無風險利率 4.36% + Beta 2.40 x 5.5% ERP = 17.56%（基準情境）。
- 終值佔總估值比重：悲觀 72.6%、基準 79.2%、樂觀 83.1%。
- 終值佔比 >70%，結果對終值成長率、WACC、以及高成長期 FCF 假設高度敏感，請謹慎解讀。

## 結論

基準情境下，模型估算 INOD 內在價值為 $499.79/股，較 $84.89 現價高 488.8%。但此結果主要由極高歷史 FCF CAGR 與高終值佔比驅動，最主要不確定因子是 INOD 是否能在未來 5 年維持接近此模型所需的 FCF 成長率。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
