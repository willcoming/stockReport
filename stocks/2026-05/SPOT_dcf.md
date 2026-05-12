# SPOT — DCF 估值報告 (2026-05-09)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 249.1% | 1.5% | 13.41% | $38,622.09 | $417.83 | +9,143.5% (低估) |
| 基準 | 415.2% | 2.5% | 12.91% | $307,409.10 | $417.83 | +73,472.8% (低估) |
| 樂觀 | 581.3% | 3.5% | 12.41% | $1,463,529.77 | $417.83 | +350,169.2% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $2.872B（FY2025） | [Yahoo Finance Financials](https://finance.yahoo.com/quote/SPOT/financials) |
| 5yr FCF CAGR | 資料不足；使用 2022-2025 3yr CAGR：415.2% | [Yahoo Finance Financials](https://finance.yahoo.com/quote/SPOT/financials)、計算 |
| Beta | 1.554 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/SPOT) |
| Net Debt | -$3.302B（Total Debt $1.956B - Cash $5.258B） | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/SPOT/balance-sheet) |
| 流通股數 | 205.62M | [Yahoo Finance Summary](https://finance.yahoo.com/quote/SPOT) |
| 無風險利率 (10Y) | 4.364%（2026-05-08 close） | [Yahoo Finance ^TNX](https://finance.yahoo.com/quote/%5ETNX) / WebSearch |
| WACC | 12.91%（基準情境） | 計算 |
| 現價 | $417.83（2026-05-08 close） | [Yahoo Finance Summary](https://finance.yahoo.com/quote/SPOT) |

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 顯示可用 annual FCF 為 2022 $0.021B、2023 $0.674B、2024 $2.284B、2025 $2.872B；5 年資料不足，因此依 skill 規則使用 2022-2025 3yr CAGR 415.2%。此 CAGR 受 2022 年極低 FCF 基期嚴重放大。
- WACC 組成：無風險利率 4.364% + Beta 1.554 x 5.5% ERP = 12.91%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：88.5%（基準情境）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。本次三個情境終值佔比皆高於 70%，且估值主要由高成長率與 terminal value 驅動。

## 結論

基準情境機械式 DCF 顯示 SPOT 內在價值遠高於現價，但此結果主要來自 2022 年低 FCF 基期推導出的極端 3yr CAGR，參考價值高度有限。最主要的不確定因子是未來 FCF 成長率能否接近歷史 CAGR，以及 terminal value 對總估值的高敏感度。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
