# ROI — DCF 估值報告

as_of_date: 2026-05-09  
projection_years: 5  
公司識別：RiskOn International, Inc. 原 ticker `ROI`，Nasdaq 停牌後交易代號變為 `ROII`；本報告以 `ROI/ROII` 對應同一公司處理，依 SEC 10-K 說明。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$28.56M | [StockAnalysis Cash Flow / S&P Global Market Intelligence](https://stockanalysis.com/quote/otc/ROII/financials/cash-flow-statement/) |
| FY2020-FY2024 FCF | -$5.49M, -$18.74M, -$24.83M, -$14.26M, -$28.56M | [StockAnalysis Cash Flow](https://stockanalysis.com/quote/otc/ROII/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（5/5 年 FCF 為負，標準 CAGR 不適用） | 計算；原始 FCF 來自 [StockAnalysis Cash Flow](https://stockanalysis.com/quote/otc/ROII/financials/cash-flow-statement/) |
| Beta | -0.86 | [StockAnalysis Statistics](https://stockanalysis.com/quote/otc/ROII/statistics/) |
| Cash & Equivalents | $7.25M | [StockAnalysis Statistics](https://stockanalysis.com/quote/otc/ROII/statistics/) |
| Total Debt | $7.36M | [StockAnalysis Statistics](https://stockanalysis.com/quote/otc/ROII/statistics/) |
| Net Debt | $0.11M | 計算：$7.36M - $7.25M；來源同上 |
| 流通股數 | 33.02M | [StockAnalysis Statistics](https://stockanalysis.com/quote/otc/ROII/statistics/) |
| EBITDA | -$32.91M | [StockAnalysis Statistics / Income Statement](https://stockanalysis.com/quote/otc/ROII/statistics/) |
| 無風險利率 (10Y) | 4.38% | [U.S. Treasury Daily Treasury Par Yield Curve Rates, 2026-05-08](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC（基準公式） | -0.35% | 計算：4.38% + (-0.86 × 5.5%) |
| 現價 | $0.0001 | [StockAnalysis ROII delayed quote](https://stockanalysis.com/quote/otc/ROII/statistics/) |
| ROI → ROII ticker 說明 | 2024-02-28 Nasdaq 停牌後變為 ROII | [RiskOn International 10-K](https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/22199223/51944067.pdf) |
| Communication Services median EV/EBITDA | 13.38x | [Westmount Fundamentals 2026 Sector Medians](https://westmountfundamentals.com/ev-ebitda-sectors) |

## DCF 估值結果

因最近 5 年 FCF 全部為負，依 skill 規則觸發 EV/EBITDA fallback；但 EBITDA 亦為負，且負 EBITDA 的 EV/EBITDA multiple 被資料來源說明為通常不具估值意義。因此本次不輸出可投資判斷用的每股內在價值，避免捏造數字。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A（FCF 為負） | 1.5% | 0.15% | N/A | $0.0001 | N/A |
| 基準 | N/A（FCF 為負） | 2.5% | -0.35% | N/A | $0.0001 | N/A |
| 樂觀 | N/A（FCF 為負） | 3.5% | -0.85% | N/A | $0.0001 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

| Fallback 檢查項 | 數值 | 判斷 |
|---|---:|---|
| 最近一年 EBITDA | -$32.91M | 負值，EV/EBITDA multiple 不具估值意義 |
| Market Cap | 約 $0.0033M | $0.0001 × 33.02M shares |
| Enterprise Value | 約 $0.1133M | Market Cap + Net Debt |
| Sector median EV/EBITDA | 13.38x | 只適用於正 EBITDA 公司；不套用於 ROI/ROII |

## 關鍵假設說明

- FCF 成長率來源：最近 5 年 FCF 分別為 -$5.49M、-$18.74M、-$24.83M、-$14.26M、-$28.56M；全部為負，標準 5yr FCF CAGR 不適用。
- WACC 組成：無風險利率 4.38% + Beta -0.86 x 5.5% ERP = -0.35%；悲觀/樂觀情境分別加減 0.5%，得到 0.15%、-0.85%。
- 終值佔總估值比重：N/A；因 FCF 為負且 WACC 低於終值成長率，Gordon Growth DCF 終值公式不適合用於本案例。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀；本案例未產生有效終值，估值結果標記為 N/A。
- Multiple-based fallback：Communication Services median EV/EBITDA 為 13.38x，但 ROI/ROII EBITDA 為 -$32.91M；依資料來源說明，負 EBITDA multiple 通常不具意義，因此不套用 fallback 估值。

## 結論

基準情境下，ROI/ROII 無法產生可靠 DCF 每股內在價值：主要原因是最近 5 年 FCF 全部為負、EBITDA 亦為負，且 WACC/終值條件不適合套用標準 Gordon Growth 模型。最主要的不確定因子是公司能否停止現金流流出、改善營運 EBITDA，以及 OTC 交易流動性與潛在稀釋風險。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
