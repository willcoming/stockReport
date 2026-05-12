# AAOI — DCF 估值報告 (2026-05-12)

## DCF 估值結果

AAOI 最近 5 個年度 FCF 全部為負，依 skill 規則觸發 EV/EBITDA fallback；但 TTM EBITDA 亦為負，EV/EBITDA 無法形成可解讀的正向倍數，因此本次不輸出捏造的每股內在價值。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 25.60% | N/A | $184.90 | N/A |
| 基準 | N/A | 2.5% | 25.10% | N/A | $184.90 | N/A |
| 樂觀 | N/A | 3.5% | 24.60% | N/A | $184.90 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 現價 | $184.90 | [StockAnalysis AAOI Statistics](https://stockanalysis.com/stocks/aaoi/statistics/) |
| 最近一年 FCF | -$353.58M | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/aaoi/financials/cash-flow-statement/) |
| TTM FCF | -$417.85M | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/aaoi/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A；2021-2025 全部為負 FCF，CAGR 不具經濟意義 | 計算 |
| Beta | 3.76 | [StockAnalysis AAOI Statistics](https://stockanalysis.com/stocks/aaoi/statistics/) |
| Cash & Equivalents | $439.71M | [StockAnalysis AAOI Statistics](https://stockanalysis.com/stocks/aaoi/statistics/) |
| Total Debt | $280.42M | [StockAnalysis AAOI Statistics](https://stockanalysis.com/stocks/aaoi/statistics/) |
| Net Debt | -$159.29M（net cash） | 計算：$280.42M - $439.71M |
| 流通股數 | 80.24M | [StockAnalysis AAOI Statistics](https://stockanalysis.com/stocks/aaoi/statistics/) |
| TTM EBITDA | -$27.46M | [StockAnalysis AAOI Statistics](https://stockanalysis.com/stocks/aaoi/statistics/) |
| Q1 2026 Adjusted EBITDA | $0.966M | [SEC Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1158114/000168316826003562/aaoi_ex9901.htm) |
| 無風險利率 (10Y) | 4.42% | [U.S. Treasury Daily Treasury Rates, 2026-05-11](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 悲觀 25.60%；基準 25.10%；樂觀 24.60% | 計算：4.42% + 3.76 x 5.5%，再依情境 +/-0.5% |

## 關鍵假設說明

- FCF 成長率來源：2021-2025 FCF 分別為 -$19.63M、-$17.23M、-$8.59M、-$112.93M、-$353.58M；因全部為負，歷史 FCF CAGR 不適用。
- WACC 組成：無風險利率 4.42% + Beta 3.76 x 5.5% ERP = 25.10%（基準情境）。
- EV/EBITDA fallback：TTM EBITDA 為 -$27.46M，EV/EBITDA 為 N/A；Q1 2026 Adjusted EBITDA 僅 $0.966M，單季年化後對 $14.68B EV 仍會產生極端倍數，不能作為穩健估值基礎。
- 終值佔總估值比重：N/A；未產生有效 DCF 企業價值，因此終值敏感度不適用。

## 結論

基準情境下，AAOI 目前不適合用傳統 FCF DCF 或 EV/EBITDA fallback 得出可靠每股內在價值；主要限制是自由現金流持續為負、TTM EBITDA 仍為負，且近期股價高度依賴未來產能爬坡與盈利轉正假設。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
