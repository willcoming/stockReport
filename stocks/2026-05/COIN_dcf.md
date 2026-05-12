# COIN — DCF 估值報告

as_of_date：2026-05-09  
projection_years：5 年

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -16.74% | 1.5% | 23.45% | $32.46 | $201.16 | -83.9%（高估） |
| 基準 | -11.96% | 2.5% | 22.95% | $37.65 | $201.16 | -81.3%（高估） |
| 樂觀 | -7.18% | 3.5% | 22.45% | $44.32 | $201.16 | -78.0%（高估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $2.426B（FY2025） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/coin/financials/cash-flow-statement/1000/) |
| 5yr FCF CAGR | -11.96%（FY2021 $4.038B → FY2025 $2.426B） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/coin/financials/cash-flow-statement/1000/)；Bash/Python 計算 |
| Beta | 3.38 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/coin/statistics/) |
| Net Debt | -$2.662B（net cash；Total Debt $7.776B - Cash & ST Investments $10.438B） | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/coin/financials/balance-sheet/) |
| 流通股數 | 263.45M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/coin/statistics/) |
| 無風險利率 (10Y) | 4.36%（2026-05-08 close；2026-05-09 為週末） | [DealPlexus US 10-Year Treasury Yield](https://www.dealplexus.com/markets/us-10-year-treasury-yield) |
| WACC | 22.95%（基準情境） | 4.36% + 3.38 × 5.5%；Bash/Python 計算 |
| 現價 | $201.16（2026-05-08 close） | [StockAnalysis Statistics](https://stockanalysis.com/stocks/coin/statistics/) |

## 關鍵假設說明

- FCF 成長率來源：FY2021-FY2025 FCF CAGR 為 -11.96%，基於 StockAnalysis 的 annual free cash flow 序列：$4.038B、-$1.585B、$0.673B、$3.104B、$2.426B。
- 因歷史 FCF CAGR 為負，為維持悲觀/基準/樂觀的語義排序，悲觀情境採更負的 -16.74%，樂觀情境採較溫和的 -7.18%。COIN 近 5 年僅 1 年 FCF 為負，因此未使用 EV/EBITDA fallback。
- WACC 組成：無風險利率 4.36% + Beta 3.38 x 5.5% ERP = 22.95%；悲觀情境 +0.5%，樂觀情境 -0.5%。
- 終值佔總估值比重：31.6%（基準情境）。
- 終值佔比未超過 70%，但 COIN 的估值仍高度受 FCF 週期性、crypto trading volume、監管環境與 WACC 假設影響。

## 結論

基準情境下，COIN 的 DCF 內在價值約為 $37.65/股，較 2026-05-08 收盤價 $201.16 低約 81.3%，此模型下安全邊際不足。主要不確定因子是 COIN 的 FCF 高度週期性，若未來交易量、USDC 收益、利率或監管結果與歷史趨勢大幅不同，估值結果可能顯著偏離。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
