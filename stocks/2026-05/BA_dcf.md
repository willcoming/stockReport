# BA — DCF 估值報告

as_of_date：2026-05-09  
projection_years：5 年

## DCF 估值結果

BA 最近 5 年有 3 年 FCF 為負，因此依 $dcf-valuation skill 規則使用 EV/EBITDA fallback；下表是 multiple-based fallback，不是標準 DCF。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | EV/EBITDA | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|-----------|------|---------|
| 悲觀 | N/A | N/A | N/A | 12.22x | $42.02 | $237.36 | -82.3% (高估) |
| 基準 | N/A | N/A | N/A | 15.27x | $66.23 | $237.36 | -72.1% (高估) |
| 樂觀 | N/A | N/A | N/A | 18.32x | $90.44 | $237.36 | -61.9% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$1.88B | [Boeing 2025 Form 10-K, SEC](https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm)；2025 operating cash flow $1.065B - capex $2.942B |
| 5yr FCF CAGR | 不適用 | 2021、2024、2025 FCF 為負，依 skill 規則觸發 EV/EBITDA fallback；[2022/2021 Boeing Q4 release](https://www.sec.gov/Archives/edgar/data/12927/000001292723000003/a202212dec318kprex991.htm)、[2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm) |
| Beta | 1.21 | [StockAnalysis BA quote](https://stockanalysis.com/stocks/ba/) |
| Net Debt | $43.18B | [Boeing 2025 Form 10-K, SEC](https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm)：Total debt $54.098B - cash $10.921B |
| 流通股數 | 785.35M | [Boeing 2025 Form 10-K, SEC](https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm) |
| 無風險利率 (10Y) | 4.37% | [Trading Economics, US 10Y, May 8 2026](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 11.03% | 計算：4.37% + 1.21 x 5.5% |
| 現價 | $237.36 | [StockAnalysis BA quote, May 8 2026 close](https://stockanalysis.com/stocks/ba/) |
| 2025 EBITDA | $6.23B | 計算：2025 operating earnings $4.281B + D&A $1.953B；[Boeing 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm) |
| Aerospace & Defense EV/EBITDA median | 15.27x | [CalcMastery 2025-2026 industry benchmark](https://www.calcmastery.com/benchmarks/ev-ebitda-by-industry/) |

## 關鍵假設說明

- FCF 成長率來源：不適用；BA 的 5 年 FCF 序列含 3 個負值年份，無法合理使用 FCF CAGR 建立標準 DCF。
- WACC 組成：無風險利率 4.37% + Beta 1.21 x 5.5% ERP = 11.03%；fallback 估值未直接使用 WACC。
- EV/EBITDA fallback：以 2025 EBITDA $6.234B，套用 Aerospace & Defense median 15.27x；悲觀/樂觀分別採約 -20% / +20% multiple range。
- 終值佔總估值比重：N/A；本次未使用 Gordon Growth terminal value，因此無 terminal value sensitivity。

## 結論

基準 fallback 情境估算 BA 內在價值約 $66.23/股，較 $237.36 現價低約 72.1%，安全邊際不足。最主要不確定因子是 Boeing 2025 EBITDA 包含重大處分收益與營運修復週期，若未來 normalized EBITDA / FCF 明顯改善，估值結果可能大幅改變。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
