# IREN — DCF 估值報告 (2026-05-08)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$1.127B（FY2025） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/iren/financials/cash-flow-statement/)；Yahoo Finance via `yfinance` |
| TTM FCF | -$1.212B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/iren/financials/cash-flow-statement/) |
| FY2021-FY2025 FCF | -$0.079B / -$0.332B / -$0.110B / -$0.428B / -$1.127B | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/iren/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（FCF 全部為負，不適合 CAGR / DCF） | 計算 |
| TTM EBITDA | $194.25M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/iren/statistics/) |
| FY2025 Adj. EBITDA | $269.7M | [IREN FY25 Results](https://iren.gcs-web.com/news-releases/news-release-details/iren-reports-full-year-fy25-results) |
| Beta | 4.18 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/iren/statistics/)；Yahoo Finance via `yfinance` |
| Cash & Equivalents | $3.26B | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/iren/financials/balance-sheet/)；[IREN Q2 FY26 Results](https://iren.gcs-web.com/static-files/cb66edc1-790b-4460-8529-4f02c52217e0) |
| Total Debt | $3.84B | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/iren/financials/balance-sheet/) |
| Net Debt | $0.582B | 計算：$3.84B debt - $3.26B cash |
| 流通股數 | 332.28M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/iren/statistics/) |
| 無風險利率 (10Y) | 4.39% | [Investing.com 10Y Treasury historical data](https://www.investing.com/rates-bonds/u.s.-10-year-bond-yield-historical-data)；[Trading Economics](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC（基準） | 27.38% | 計算：4.39% + 4.18 × 5.5% |
| 現價 | $56.85（May 7, 2026 close；as of 2026-05-08 Asia/Taipei） | [StockAnalysis Statistics](https://stockanalysis.com/stocks/iren/statistics/) |

## DCF 估值結果

因 IREN 最近 5 年與 TTM FCF 均為負，傳統 DCF 對「最近 FCF 作為基準」不具可解釋性；依 skill 規則，本節改用 **EV/EBITDA multiple-based fallback**，不是標準 DCF。計算使用 TTM EBITDA $194.25M、Net Debt $0.582B、流通股數 332.28M。資料中心資產估值參考區間採 15x-25x EBITDA，基準使用 19x，來源為 [AlixPartners 2026 Data Center Outlook](https://www.alixpartners.com/media/k3xbcssw/2026-alixpartners-data-center-outlook-tmt02sig2025.pdf)。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | EV/EBITDA | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|-----------|------|---------|
| 悲觀 | N/A（FCF<0） | N/A | 27.88% | 15.0x | $7.02 | $56.85 | -87.7%（高估） |
| 基準 | N/A（FCF<0） | N/A | 27.38% | 19.0x | $9.36 | $56.85 | -83.5%（高估） |
| 樂觀 | N/A（FCF<0） | N/A | 26.88% | 25.0x | $12.86 | $56.85 | -77.4%（高估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：IREN 的 FY2021-FY2025 FCF 與 TTM FCF 全部為負，因此未使用 5yr CAGR；改用 EV/EBITDA fallback。
- WACC 組成：無風險利率 4.39% + Beta 4.18 × 5.5% ERP = 27.38%；悲觀/樂觀情境分別加減 0.5 個百分點。
- Multiple 假設：悲觀 15.0x、基準 19.0x、樂觀 25.0x，參考 2026 data center EBITDA valuation range；IREN 現行 EV/EBITDA 約 100.24x，明顯高於 fallback 估值區間。
- 終值佔總估值比重：N/A；本次因 FCF 為負，未使用 Gordon terminal value。
- 主要敏感性：結果高度受 EBITDA 口徑、AI data center 商業化進度、BTC mining 週期、資本支出、可轉債/股本稀釋與市場給予的 AI infrastructure multiple 影響。

## 結論

在基準 EV/EBITDA fallback 情境下，IREN 的估算內在價值約 $9.36/股，較 $56.85 現價低約 83.5%。此結果不代表股價必然回歸該估值，而是指出：以目前公開 TTM EBITDA 與資料中心行業 multiple 衡量，市場價格已反映非常高的未來 AI/HPC 成長與執行成功預期。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
