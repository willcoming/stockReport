# TMDX — DCF 估值報告 (2026-05-10)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 11.0% | 1.5% | 16.24% | $31.48 | $67.84 | -53.6% (高估) |
| 基準 | 18.4% | 2.5% | 15.74% | $49.77 | $67.84 | -26.6% (高估) |
| 樂觀 | 25.7% | 3.5% | 15.24% | $76.73 | $67.84 | +13.1% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $151.36M（TTM） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/tmdx/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 資料不足 / 不適用（2021-2024 多數年度 FCF 為負） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/tmdx/financials/cash-flow-statement/) |
| FCF 成長率 proxy | 18.38%（5Y revenue growth forecast） | [StockAnalysis Statistics](https://stockanalysis.com/stocks/tmdx/statistics/) |
| Beta | 2.06 | [StockAnalysis Overview](https://stockanalysis.com/stocks/tmdx/) |
| Net Debt | $401.68M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/tmdx/statistics/) |
| 流通股數 | 34.56M | [StockAnalysis Overview](https://stockanalysis.com/stocks/tmdx/) |
| 無風險利率 (10Y) | 4.41%（Fed H.15 latest available: 2026-05-07；release date 2026-05-08） | [Federal Reserve H.15](https://www.federalreserve.gov/RELEASES/H15/default.htm) |
| WACC | 15.74%（基準情境） | 計算：4.41% + 2.06 × 5.5% |
| 現價 | $67.84（2026-05-08 close；2026-05-10 為週日） | [StockAnalysis Overview](https://stockanalysis.com/stocks/tmdx/) |

## 關鍵假設說明

- FCF 成長率來源：TMDX 最近 5 年 FCF 中多數年度為負，因此 5yr FCF CAGR 不具經濟意義；本模型使用分析師 5Y revenue growth forecast 18.38% 作為 FCF growth proxy，並依 skill 規則建立 bear / base / bull：0.6x、1.0x、1.4x。
- WACC 組成：無風險利率 4.41% + Beta 2.06 x 5.5% ERP = 15.74%（基準情境）；悲觀情境 +0.5%，樂觀情境 -0.5%。
- 終值佔總估值比重：61.8%（基準情境）。
- 終值佔比未超過 70%，但 TMDX 的估值仍高度依賴 FCF 能否維持正值並延續高成長。
- 計算方式：已依 skill 要求使用 Bash 搭配 `python3 -c` 以 5 年投影、TTM FCF、net debt、shares outstanding 計算每股內在價值。

## 結論

基準情境下，TMDX 的 DCF 內在價值約為 $49.77/股，較 2026-05-08 收盤價 $67.84 低約 26.6%，在此假設組合下沒有足夠安全邊際。主要不確定因子是歷史 FCF 波動大且多數年度為負，模型結果對未來 FCF 轉正後的持續成長率與終值假設相當敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
