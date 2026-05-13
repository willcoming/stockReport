# UAA — DCF 估值報告 (2026-05-13)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 4.4% | 1.5% | 14.45% | -$7.57 | $5.03 | -250.6% (高估) |
| 基準 | 7.3% | 2.5% | 13.95% | -$8.67 | $5.03 | -272.4% (高估) |
| 樂觀 | 10.3% | 3.5% | 13.45% | -$10.16 | $5.03 | -302.0% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$228.0M | [Yahoo Finance Financials](https://finance.yahoo.com/quote/UAA/financials) |
| 3yr FCF 變化率 | 7.3% | 根據 FY2023 FCF -$198.0M 與 FY2025 FCF -$228.0M 計算；來源：[Yahoo Finance Financials](https://finance.yahoo.com/quote/UAA/financials) |
| Beta | 1.73 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/UAA/) |
| Total Debt | $1.689B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/UAA/balance-sheet) |
| Cash | $0.465B | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/UAA/balance-sheet) |
| Net Debt | $1.224B | Total Debt - Cash；來源：[Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/UAA/balance-sheet) |
| 流通股數 | 425.9M | [Yahoo Finance Summary](https://finance.yahoo.com/quote/UAA/) |
| 無風險利率 (10Y) | 4.43% | [Trading Economics / Federal Reserve 10Y Treasury Constant Maturity](https://tradingeconomics.com/united-states/10-year-treasury-constant-maturity-rate-percent-d-na-fed-data.html) |
| WACC | 13.95%（基準） | 計算：4.43% + 1.73 x 5.5% |
| 現價 | $5.03 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/UAA/) |

## 關鍵假設說明

- FCF 成長率來源：5 年 FCF CAGR 因 FY2021 為正、FY2025 為負，跨越正負號後不具可解釋性；本模型改用 FY2023 至 FY2025 的 3 年 FCF 惡化率 7.3%。由於基礎 FCF 為負，較高「成長率」代表負 FCF 擴大，不代表營運改善。
- WACC 組成：無風險利率 4.43% + Beta 1.73 x 5.5% ERP = 13.95%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：61.3%（基準情境）。
- 終值佔比未超過 70%，但因最新年度 FCF 為負，模型結果對 FCF 恢復假設高度敏感，請謹慎解讀。

## 結論

基準情境下，UAA 的 DCF 內在價值為 -$8.67/股，相對現價 $5.03 顯示安全邊際為 -272.4%。主要不確定因子是 UAA 能否把負自由現金流扭轉為可持續的正自由現金流；在最新 FCF 為負的狀態下，傳統 DCF 的解讀價值有限。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
