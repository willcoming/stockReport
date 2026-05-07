# LITE — DCF 估值報告 (2026-05-07)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $0.114B（TTM，截至 Mar 28, 2026） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/lite/financials/cash-flow-statement/) |
| 5yr FCF CAGR | -29.5%（FY2021→TTM endpoint；未作為 DCF base rate） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/lite/financials/cash-flow-statement/) + Bash/Python 計算 |
| DCF 使用 FCF CAGR | 30.5%（FY2023 $51.3M → TTM $114.0M，3yr endpoint） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/lite/financials/cash-flow-statement/) + Bash/Python 計算 |
| Beta | 1.53 | [StockAnalysis Quote](https://stockanalysis.com/stocks/lite/) |
| Total Debt | $3.282B | [Lumentum Q3 FY2026 Results](https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-Third-Quarter-of-Fiscal-Year-2026-Financial-Results/default.aspx) |
| Cash + Short-term Investments | $3.172B | [Lumentum Q3 FY2026 Results](https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-Third-Quarter-of-Fiscal-Year-2026-Financial-Results/default.aspx) |
| Net Debt | $0.110B | Total Debt - Cash + Short-term Investments |
| 流通股數 | 71.7M | [StockAnalysis Quote](https://stockanalysis.com/stocks/lite/) / [Lumentum Q3 FY2026 Results](https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-Third-Quarter-of-Fiscal-Year-2026-Financial-Results/default.aspx) |
| 無風險利率 (10Y) | 4.43%（最新官方資料為 2026-05-05） | [FRED DGS10](https://fred.stlouisfed.org/series/DGS10) |
| WACC | 12.85%（基準） | 4.43% + 1.53 x 5.5% |
| 現價 | $879.00（2026-05-07 09:58 EDT） | [StockAnalysis Quote](https://stockanalysis.com/stocks/lite/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 18.3% | 1.5% | 13.35% | $24.40 | $879.00 | -97.2%（高估） |
| 基準 | 30.5% | 2.5% | 12.85% | $43.61 | $879.00 | -95.0%（高估） |
| 樂觀 | 42.7% | 3.5% | 12.35% | $77.21 | $879.00 | -91.2%（高估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：LITE 的 FY2024 與 FY2025 FCF 為負，TTM FCF 轉正，因此 5yr endpoint CAGR（-29.5%）對復甦期 DCF 不具代表性；本模型改用 FY2023 至 TTM 的 3yr endpoint CAGR 30.5% 作為 base growth rate。
- WACC 組成：無風險利率 4.43% + Beta 1.53 x 5.5% ERP = 12.85%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：72.2%（基準情境）。
- 終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- 股數採 71.7M common shares outstanding；Q3 FY2026 財報同時顯示 diluted shares used 為 96.2M，若採完全稀釋股數，內在價值/股會更低。

## 結論

基準情境下，LITE 的 DCF 內在價值約 $43.61/股，較 2026-05-07 現價 $879.00 低約 95.0%，模型顯示股價大幅高於以 TTM FCF 推導的 DCF 價值。主要不確定因子是 AI 光通訊需求能否把 FCF 迅速拉升至遠高於 TTM 水準，以及轉換債/稀釋股數對每股價值的影響。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
