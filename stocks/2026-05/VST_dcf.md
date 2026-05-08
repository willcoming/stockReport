# VST — DCF 估值報告 (2026-05-08)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $1.318B（FY2025，Operating Cash Flow $4.070B - CapEx $2.752B） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/vst/financials/cash-flow-statement/) |
| 歷史 FCF CAGR | -40.9%（2023-2025 正 FCF 年度 CAGR；5yr 因 2021/2022 FCF 為負不可直接計算） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/vst/financials/cash-flow-statement/)、計算 |
| Beta | 1.45 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/vst/statistics/) |
| Net Debt | $20.329B（Total Debt $21.000B - Cash $0.671B） | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/vst/financials/balance-sheet/) |
| 流通股數 | 338.55M | [StockAnalysis Overview](https://stockanalysis.com/stocks/vst/) |
| 無風險利率 (10Y) | 4.39% | [Trading Economics](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 12.37%（基準情境） | 計算 |
| 現價 | $150.50 | [StockAnalysis Balance Sheet page quote, May 8 2026](https://stockanalysis.com/stocks/vst/financials/balance-sheet/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -57.3% | 1.5% | 12.87% | -$57.43 | $150.50 | -138.2% (高估) |
| 基準 | -40.9% | 2.5% | 12.37% | -$54.28 | $150.50 | -136.1% (高估) |
| 樂觀 | -24.6% | 3.5% | 11.87% | -$46.39 | $150.50 | -130.8% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：FY2023 FCF $3.777B、FY2024 FCF $2.485B、FY2025 FCF $1.318B，使用 2023-2025 正 FCF 年度 CAGR = -40.9%；因 base_rate 為負，悲觀情境使用更大降幅、樂觀情境使用較小降幅。
- WACC 組成：無風險利率 4.39% + Beta 1.45 x 5.5% ERP = 12.37%（基準情境）。
- 終值佔總估值比重：28.2%（基準情境）。
- 終值佔比未超過 70%，但本次模型結果高度受 FCF 基期與未來 FCF 是否正常化影響；VST 的成長 CapEx、營運資金與發電/電力價格週期會使 GAAP FCF 波動很大。

## 結論

以嚴格的 GAAP FCF（Operating Cash Flow - CapEx）作為 DCF 基礎，VST 在基準情境下模型輸出為 -$54.28/股，代表在此組假設下 PV cash flows 低於 net debt，安全邊際為 -136.1%。最主要的不確定因子是 FY2025 FCF 是否代表可持續水準，或是否應以公司披露的 adjusted free cash flow before growth 作為另一套敏感度分析基礎。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
