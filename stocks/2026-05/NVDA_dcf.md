# NVDA — DCF 估值報告 (2026-05-08)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $96.68B | [StockAnalysis Cash Flow：FY2026 OCF $102.72B - CapEx $6.04B](https://stockanalysis.com/stocks/nvda/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 85.7% | 計算：FY2022 $8.132B → FY2026 $96.676B，資料來自 [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/nvda/financials/cash-flow-statement/) |
| Beta | 2.24 | [StockAnalysis Overview / Statistics](https://stockanalysis.com/stocks/nvda/) |
| Net Debt | -$51.15B | 計算：Total Debt $11.41B - Cash $62.56B，資料來自 [StockAnalysis Statistics](https://stockanalysis.com/stocks/nvda/statistics/) |
| 流通股數 | 24.30B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/nvda/statistics/) |
| 無風險利率 (10Y) | 4.39% | [Trading Economics：US 10Y May 8, 2026](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 16.71% | 計算：4.39% + 2.24 x 5.5% |
| 現價 | $211.50 | [StockAnalysis：May 7, 2026 close](https://stockanalysis.com/stocks/nvda/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 51.4% | 1.5% | 17.21% | $140.32 | $211.50 | -33.7% (高估) |
| 基準 | 85.7% | 2.5% | 16.71% | $393.13 | $211.50 | +85.9% (低估) |
| 樂觀 | 120.0% | 3.5% | 16.21% | $985.67 | $211.50 | +366.0% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：依 skill 規則採用歷史 FCF CAGR；以 FY2022-FY2026 五個財年 FCF 序列計算，基準成長率為 85.7%，悲觀/樂觀分別為基準的 0.6x / 1.4x。
- WACC 組成：無風險利率 4.39% + Beta 2.24 x 5.5% ERP = 16.71%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：74.8%（基準情境）。
- 基準與樂觀情境終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- 本模型直接套用歷史高成長期 FCF CAGR，因此估值結果會高度依賴 NVIDIA 是否能延續 FY2024-FY2026 的 AI 需求與高 FCF margin。

## 結論

基準情境下，DCF 內在價值約為 $393.13/股，相對 $211.50 現價顯示約 +85.9% 安全邊際；但該結論主要由極高歷史 FCF CAGR 與終值假設驅動。最主要不確定因子是 AI 加速器需求、毛利率、競爭格局，以及高成長 FCF 是否能持續 5 年。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
