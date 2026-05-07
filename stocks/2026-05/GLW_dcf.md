# GLW — DCF 估值報告

as_of_date: 2026-05-07  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $1.950B | [StockAnalysis Cash Flow, TTM Mar 2026](https://stockanalysis.com/stocks/glw/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 1.9% | 計算：TTM FCF $1.950B vs FY2021 FCF $1.775B，資料來自 [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/glw/financials/cash-flow-statement/) |
| Beta | 1.14 | [StockAnalysis Statistics, Beta 5Y](https://stockanalysis.com/stocks/glw/statistics/) |
| Net Debt | $7.218B | [StockAnalysis Balance Sheet, TTM Mar 2026](https://stockanalysis.com/stocks/glw/financials/balance-sheet/) |
| 流通股數 | 860.64M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/glw/statistics/) |
| 無風險利率 (10Y) | 4.36% | [U.S. Treasury Daily Par Yield Curve, 05/06/2026](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 10.63% | 計算：4.36% + 1.14 x 5.5% |
| 現價 | $181.57 | [StockAnalysis, May 6 2026 close](https://stockanalysis.com/stocks/glw/statistics/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 1.1% | 1.5% | 11.13% | $15.14 | $181.57 | -91.7% (高估) |
| 基準 | 1.9% | 2.5% | 10.63% | $19.46 | $181.57 | -89.3% (高估) |
| 樂觀 | 2.7% | 3.5% | 10.13% | $25.73 | $181.57 | -85.8% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：以最近 TTM FCF $1.950B 與 FY2021 FCF $1.775B 推算 5 年 CAGR 約 1.9%；悲觀 / 基準 / 樂觀分別套用 base_rate x 0.6 / 1.0 / 1.4。
- WACC 組成：無風險利率 4.36% + Beta 1.14 x 5.5% ERP = 10.63%；悲觀加 0.5 個百分點，樂觀減 0.5 個百分點。
- 終值佔總估值比重：68.0%（基準情境）。
- 樂觀情境終值佔總估值比重為 73.0%，超過 70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- 計算方式：依 skill 規定使用 Bash 搭配 `python3 -c` 執行 DCF 折現計算。

## 結論

在基準情境下，GLW 內在價值約為 $19.46/股，低於現價 $181.57，模型顯示約 -89.3% 安全邊際。主要不確定因子是近期股價大幅重估後，市場隱含的長期 AI / optical demand 成長假設遠高於本模型用歷史 FCF CAGR 推導出的現金流成長率。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
