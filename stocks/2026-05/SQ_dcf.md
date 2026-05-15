# SQ — DCF 估值報告 (2026-05-15)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 21.5% | 1.5% | 19.07% | $62.35 | $71.53 | -12.8% (高估) |
| 基準 | 35.8% | 2.5% | 18.57% | $108.95 | $71.53 | +52.3% (低估) |
| 樂觀 | 50.1% | 3.5% | 18.07% | $186.91 | $71.53 | +161.3% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%  
> 計算單位：除每股數字外，DCF 現金流、企業價值與淨債務皆以百萬美元計。  
> SQ 已更名為 Block 現行 NYSE ticker `XYZ`；Block 公告顯示 Class A common stock 自 2025-01-21 起以 `XYZ` 交易：[Block IR](https://investors.block.xyz/investor-news/news-details/2025/Block-Announces-Ticker-Symbol-Change-to-XYZ-To-Report-Fourth-Quarter-Results/default.aspx)。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $3.258B TTM | Block Q1 2026 shareholder letter：TTM Free Cash Flow $3,258M（[Block IR PDF](https://s29.q4cdn.com/628966176/files/doc_financials/2026/q1/Block_Q1-2026-Shareholder-Letter.pdf)） |
| 年度 FCF 序列 | FY2025 $2.425B、FY2024 $1.553B、FY2023 -$0.050B、FY2022 $0.005B、FY2021 $0.714B | [StockAnalysis cash flow](https://stockanalysis.com/stocks/xyz/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 35.78% | 以 FY2021 $0.714B 至 FY2025 $2.425B 計算 |
| Beta | 2.57 | [StockAnalysis statistics](https://stockanalysis.com/stocks/xyz/statistics/) |
| Cash & Equivalents | $6.858B | Block Q1 2026 balance sheet（[Block IR PDF](https://s29.q4cdn.com/628966176/files/doc_financials/2026/q1/Block_Q1-2026-Shareholder-Letter.pdf)） |
| Total Debt | $7.835B | Current portion of long-term debt + warehouse funding facilities + long-term debt，取自 Block Q1 2026 balance sheet（[Block IR PDF](https://s29.q4cdn.com/628966176/files/doc_financials/2026/q1/Block_Q1-2026-Shareholder-Letter.pdf)） |
| Net Debt | $0.977B | $7.835B - $6.858B，計算值 |
| 流通股數 | 595.271M | Class A 535.280M + Class B 59.991M，取自 Block Q1 2026 balance sheet（[Block IR PDF](https://s29.q4cdn.com/628966176/files/doc_financials/2026/q1/Block_Q1-2026-Shareholder-Letter.pdf)） |
| 無風險利率 (10Y) | 4.43% | Trading Economics / Federal Reserve 10-year constant maturity rate, May 2026（[Trading Economics](https://tradingeconomics.com/united-states/10-year-treasury-constant-maturity-rate-percent-d-na-fed-data.html)） |
| WACC | 悲觀 19.07%、基準 18.57%、樂觀 18.07% | 4.43% + Beta 2.57 x 5.5% ERP，再依情境加減 0.5% |
| 現價 | $71.53 | 2026-05-14 美股收盤價，as_of_date 2026-05-15 時最新收盤資料：[StockAnalysis overview](https://stockanalysis.com/stocks/xyz/) |

## 關鍵假設說明

- FCF 成長率來源：以 FY2021 至 FY2025 年度 FCF CAGR 35.78% 作為基準情境；悲觀情境為 0.6x，樂觀情境為 1.4x。
- WACC 組成：無風險利率 4.43% + Beta 2.57 x 5.5% ERP = 18.57%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- DCF 使用最近 TTM FCF $3.258B 作為起始 FCF，預測期間為 5 年。
- 終值佔總估值比重：54.6%（悲觀）、62.2%（基準）、68.4%（樂觀）。基準情境未超過 70%，但結果仍對終值成長率與 WACC 高度敏感。
- 由於 SQ / XYZ 近年 FCF 從 FY2023 負值轉為 FY2025 與 TTM 明顯正值，35.78% CAGR 反映的是修復期增長，未必能線性外推。

## 結論

基準情境下，SQ（現行 ticker：XYZ）的 DCF 內在價值約為 $108.95/股，較 $71.53 現價高約 52.3%。模型顯示有安全邊際，但主要不確定因子是 FCF 高成長是否可持續，以及 Cash App Borrow / Afterpay 等 lending products 對現金流與資本需求的影響。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
