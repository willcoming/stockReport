# AAPL — DCF 估值報告

**估值基準日：2026-05-08**  
**Projection years：5 年**

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $98.8B | [StockAnalysis AAPL Cash Flow Statement](https://stockanalysis.com/stocks/aapl/financials/cash-flow-statement/) FY2025 Free Cash Flow |
| 5yr FCF CAGR | 6.13% | 計算：FY2020 $73.365B 至 FY2025 $98.767B；FY2020 參考 [Apple FY20 consolidated financial statements](https://www.apple.com/newsroom/pdfs/FY20_Q4_Consolidated_Financial_Statements.pdf)，FY2025 參考 StockAnalysis |
| Beta | 1.06 | [StockAnalysis AAPL Statistics](https://stockanalysis.com/stocks/aapl/statistics/) |
| Net Debt | -$61.9B | [StockAnalysis AAPL Balance Sheet](https://stockanalysis.com/stocks/aapl/financials/balance-sheet/)：Total Debt $84.71B，Cash & Marketable Securities $146.60B |
| 流通股數 | 14.69B | [StockAnalysis AAPL Statistics](https://stockanalysis.com/stocks/aapl/statistics/) |
| 無風險利率 (10Y) | 4.39% | [Trading Economics US 10Y Treasury](https://tradingeconomics.com/united-states/government-bond-yield)，2026-05-08 |
| WACC | 10.22% | 計算：4.39% + 1.06 x 5.5% ERP |
| 現價 | $287.44 | [StockAnalysis AAPL Statistics](https://stockanalysis.com/stocks/aapl/statistics/)，2026-05-07 收盤 |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 3.68% | 1.5% | 10.72% | $85.23 | $287.44 | -70.3% (高估) |
| 基準 | 6.13% | 2.5% | 10.22% | $108.16 | $287.44 | -62.4% (高估) |
| 樂觀 | 8.58% | 3.5% | 9.72% | $142.99 | $287.44 | -50.3% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：以 FY2020 FCF $73.365B 至 FY2025 FCF $98.767B 計算 5 年 CAGR，基準情境為 6.13%；悲觀與樂觀情境分別使用 base rate x 0.6 與 x 1.4。
- WACC 組成：無風險利率 4.39% + Beta 1.06 x 5.5% ERP = 10.22%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：71.1%（基準情境）。
- 基準情境終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- DCF 計算使用 Bash 執行 Python，輸入為 FY2025 FCF、5 年明確預測期、Net Debt = -$61.884B、流通股數 14.687B。

## 結論

在基準情境下，AAPL 的 DCF 內在價值約為 $108.16/股，較 2026-05-07 收盤價 $287.44 低約 62.4%。本模型最主要的不確定因子是終值假設與 WACC；由於終值佔比超過 70%，估值結果對長期成長率與折現率變化非常敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
