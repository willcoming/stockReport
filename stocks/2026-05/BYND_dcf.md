# BYND — DCF 估值報告 (2026-05-08)

## DCF 估值結果

BYND 最近 5 年 FCF 皆為負，且 TTM EBITDA 亦為負，因此標準 DCF 與 EV/EBITDA fallback 都不具備可靠估值意義。下表為按 skill 要求透過 Bash/Python 執行的機械式診斷結果，FCF 成長率以 0.0% 作為中性占位，不應視為可投資內在價值。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/M（診斷用 0.0%） | 1.5% | 20.57% | N/M（機械值 -$1.91） | $0.8928 | N/M（機械值 -313.9%） |
| 基準 | N/M（診斷用 0.0%） | 2.5% | 20.06% | N/M（機械值 -$1.99） | $0.8928 | N/M（機械值 -322.9%） |
| 樂觀 | N/M（診斷用 0.0%） | 3.5% | 19.56% | N/M（機械值 -$2.08） | $0.8928 | N/M（機械值 -333.0%） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$134.16M | [StockAnalysis TTM FCF](https://stockanalysis.com/stocks/bynd/statistics/)；OCF -$123.81M、CapEx -$10.35M |
| FY2021-FY2025 FCF | -$437.33M / -$393.54M / -$118.39M / -$109.83M / -$157.24M | [StockAnalysis cash flow](https://stockanalysis.com/stocks/bynd/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/M | FCF 全部為負，CAGR 不具經濟意義 |
| Beta | 2.85 | [StockAnalysis statistics](https://stockanalysis.com/stocks/bynd/statistics/) |
| Net Debt | 約 $205.84M | [SEC Q1 2026 release](https://www.sec.gov/Archives/edgar/data/1655210/000165521026000033/ex991pressrelease-q12026ea.htm)：debt $411.6M、cash incl. restricted cash $205.756M |
| 流通股數 | 463.20M | [SEC Q1 2026 release](https://www.sec.gov/Archives/edgar/data/1655210/000165521026000033/ex991pressrelease-q12026ea.htm) |
| 無風險利率 (10Y) | 4.39% | [Trading Economics, May 8 2026](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 20.06% | 計算：4.39% + 2.85 × 5.5% |
| 現價 | $0.8928 | [StockAnalysis, latest available close May 7 2026](https://stockanalysis.com/stocks/bynd/statistics/) |
| EBITDA fallback | 不適用 | TTM EBITDA -$134.89M；[Natural Foods median LTM EV/EBITDA 10.6x](https://www.mnp.ca/-/media/files/mnp/pdf/service/corporate-finance/middle-market-m-and-a-update/2026/food-and-beverage-quarterly-update-q1-2026.pdf) 不能套用於負 EBITDA |

## 關鍵假設說明

- FCF 成長率來源：FY2021-FY2025 與 TTM FCF 均為負，無法計算有經濟意義的 5yr FCF CAGR；因此 DCF 結果標記為 N/M。
- WACC 組成：無風險利率 4.39% + Beta 2.85 x 5.5% ERP = 20.06%；悲觀 / 樂觀情境分別加減 0.5%。
- 終值佔總估值比重：基準情境機械計算為 43.9%，但因 enterprise value 為負，此比例僅為診斷值。
- EV/EBITDA fallback：BYND TTM EBITDA 與調整後 EBITDA 皆為負，產業 median multiple 無法產生有意義的正向企業價值。

## 結論

基準情境下，BYND 的公開財務資料不支持有效的正向 DCF 內在價值估算；主要原因是持續負 FCF、負 EBITDA、較高槓桿與顯著稀釋風險。此案的核心不確定因子不是折現率微調，而是公司能否先恢復正 EBITDA 與正自由現金流。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
