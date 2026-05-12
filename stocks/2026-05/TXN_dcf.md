# TXN — DCF 估值報告 (2026-05-12)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -27.7% | 1.5% | 12.07% | $-0.56 | $297.76 | -100.2% (高估) |
| 基準 | -19.8% | 2.5% | 11.57% | $5.77 | $297.76 | -98.1% (高估) |
| 樂觀 | -11.9% | 3.5% | 11.07% | $16.79 | $297.76 | -94.4% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $3.72B（TTM，截至 2026-03-31） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/txn/financials/cash-flow-statement/) |
| FY2021-FY2025 FCF | $6.294B / $5.923B / $1.349B / $1.498B / $2.603B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/txn/financials/cash-flow-statement/) |
| 5yr FCF CAGR | -19.8% | 計算：FY2021 至 FY2025 FCF CAGR |
| Beta | 1.30 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/txn/statistics/) |
| Total Debt | $14.05B | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/txn/financials/balance-sheet/) |
| Cash & Equivalents | $3.55B | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/txn/financials/balance-sheet/) |
| Net Debt | $10.50B | 計算：$14.05B - $3.55B |
| 流通股數 | 910.09M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/txn/statistics/) |
| 無風險利率 (10Y) | 4.42%（2026-05-11，2026-05-12 前最新可得值） | [U.S. Treasury Daily Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 悲觀 12.07% / 基準 11.57% / 樂觀 11.07% | 計算 |
| 現價 | $297.76（2026-05-11 收盤） | [StockAnalysis Statistics](https://stockanalysis.com/stocks/txn/statistics/) |

## 關鍵假設說明

- FCF 成長率來源：以 FY2021-FY2025 年度 FCF 計算 CAGR，結果為 -19.8%；因 base_rate 為負，悲觀情境使用更深衰退（base_rate x 1.4），樂觀情境使用較淺衰退（base_rate x 0.6）。
- WACC 組成：無風險利率 4.42% + Beta 1.30 x 5.5% ERP = 11.57%；悲觀情境 +0.50%，樂觀情境 -0.50%。
- DCF 計算：已用 Bash 執行 Python，projection_years=5，FCF base=$3.721B，net debt=$10.501B，shares=910.09M。
- 終值佔總估值比重：51.2%（基準情境）。
- 終值佔比未超過 70%；但估值仍高度受 FCF 復甦速度與資本支出週期影響。

## 結論

基準情境下，TXN 的 DCF 內在價值約為 $5.77/股，較 $297.76 現價低約 98.1%。本模型最主要的不確定因子是 TXN 近年高資本支出導致 FCF 大幅下滑；若未來 FCF 回升速度顯著高於歷史 CAGR，估值結果會大幅改變。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
