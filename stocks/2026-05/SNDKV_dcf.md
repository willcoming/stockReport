# SNDKV — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 34.0% | 1.5% | 10.60% | $1,177.58 | $1,407.61 | -16.3% (高估) |
| 基準 | 56.6% | 2.5% | 10.10% | $2,879.65 | $1,407.61 | +104.6% (低估) |
| 樂觀 | 79.3% | 3.5% | 9.60% | $6,837.78 | $1,407.61 | +385.8% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| as_of_date | 2026-05-17 | 使用者輸入 |
| Ticker 對應 | SNDKV 在 Yahoo Finance 查無有效財務資料；估值改用 Sandisk Corporation 現行代號 SNDK | [Yahoo Finance SNDK](https://finance.yahoo.com/quote/SNDK/) |
| 最近一年 FCF | $4.46B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/sndk/financials/cash-flow-statement/) |
| 近 5 期 FCF | FY2022 $0.741B；FY2023 -$0.932B；FY2024 -$0.475B；FY2025 -$0.120B；TTM $4.460B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/sndk/financials/cash-flow-statement/) |
| 近 5 期 FCF CAGR | 56.6% | 計算：FY2022 FCF 至 TTM FCF |
| Revenue | $13.184B TTM | [StockAnalysis Financials](https://stockanalysis.com/stocks/sndk/financials/) |
| Beta | Yahoo/StockAnalysis 無資料；依 skill 規則使用 1.00 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/sndk/statistics/) |
| Net Debt | -$3.528B（淨現金） | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/sndk/financials/balance-sheet/) |
| 流通股數 | 148.09M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/sndk/statistics/) |
| 無風險利率 (10Y) | 4.60% | [Kiplinger, May 15 2026](https://www.kiplinger.com/investing/stocks/stocks-sink-as-treasury-yields-spike-stock-market-today) |
| WACC | 悲觀 10.60%；基準 10.10%；樂觀 9.60% | 計算 |
| 現價 | $1,407.61 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/sndk/statistics/) |

## 關鍵假設說明

- FCF 成長率來源：以近 5 期 FCF（FY2022 至 TTM Apr 2026）計算 CAGR 為 56.6%；悲觀/基準/樂觀分別使用 base_rate x 0.6 / base_rate / base_rate x 1.4。
- WACC 組成：無風險利率 4.60% + Beta 1.00 x 5.5% ERP = 10.10%；悲觀加 0.5%，樂觀減 0.5%。
- 終值佔總估值比重：悲觀 75.9%；基準 82.9%；樂觀 87.8%。
- 終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- 近 5 期 FCF 中有 3 期為負，TTM FCF 又快速轉正，表示此 DCF 對記憶體週期、價格與 AI 需求假設高度敏感。

## 結論

基準情境下，SNDKV/SNDK 的 DCF 內在價值為 $2,879.65，較現價 $1,407.61 高約 104.6%。但估值主要由終值與 TTM FCF 急速改善推動，最主要不確定因子是 Sandisk 當前高 FCF 是否能在未來 5 年維持。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
