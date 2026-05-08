# RKLB — DCF 估值報告 (2026-05-08)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | -$321.8M | [Rocket Lab FY2025 10-K：Operating CF -$165.5M、CapEx $156.3M](https://www.sec.gov/Archives/edgar/data/1819994/000181999426000013/rklb-20251231.htm) |
| TTM FCF | -$316.3M | [StockAnalysis：TTM operating cash flow -$161.6M、CapEx -$154.7M、FCF -$316.3M](https://stockanalysis.com/stocks/rklb/statistics/) |
| 5yr FCF CAGR | N/A（2021-2025 FCF 皆為負） | [Billiver / SEC 10-K derived FCF history](https://billiver.com/company/rocket-lab/cash-flow-statement) |
| Beta | 2.31 | [StockAnalysis RKLB quote](https://stockanalysis.com/stocks/rklb/) |
| Net Debt | -$1.245B（Net Cash） | [StockAnalysis Balance Sheet](https://stockanalysis.com/stocks/rklb/financials/balance-sheet/) |
| 流通股數 | 575.8M | [Rocket Lab Q1 2026 results](https://investors.rocketlabcorp.com/news-releases/news-release-details/rocket-lab-announces-first-quarter-2026-financial-results) |
| 無風險利率 (10Y) | 4.39% | [Trading Economics / WebSearch](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 17.09%（基準） | 計算：4.39% + 2.31 x 5.5% |
| 現價 | $78.58 | [StockAnalysis：May 7, 2026 regular close](https://stockanalysis.com/stocks/rklb/) |
| EBITDA / EV/EBITDA | EBITDA -$176.0M；EV/EBITDA N/A | [StockAnalysis Statistics](https://stockanalysis.com/stocks/rklb/statistics/) |
| 5yr revenue growth forecast | 33.98% | [StockAnalysis Analyst Forecast](https://stockanalysis.com/stocks/rklb/statistics/) |

## DCF 估值結果

> RKLB 最近 5 年與 TTM FCF 均為負，依 skill 規則應啟用 EV/EBITDA fallback；但 RKLB TTM EBITDA 亦為負，因此 EV/EBITDA fallback 不具可用性。下表為使用 TTM FCF -$316.3M、以 5yr revenue growth forecast 33.98% 作為成長率 proxy 的機械式 DCF 壓力測試，不能視為穩健內在價值。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 20.4% | 1.5% | 17.59% | -$4.68 | $78.58 | -106.0%（高估；模型不適用） |
| 基準 | 34.0% | 2.5% | 17.09% | -$9.60 | $78.58 | -112.2%（高估；模型不適用） |
| 樂觀 | 47.6% | 3.5% | 16.59% | -$17.83 | $78.58 | -122.7%（高估；模型不適用） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：5yr FCF CAGR 因 FCF 全為負而不適用；本表改用 5yr revenue growth forecast 33.98% 作為壓力測試 proxy，悲觀 / 基準 / 樂觀分別為 0.6x / 1.0x / 1.4x。
- WACC 組成：無風險利率 4.39% + Beta 2.31 x 5.5% ERP = 17.09%（基準）；悲觀加 0.5%，樂觀減 0.5%。
- Net Debt 使用 -$1.245B，代表 RKLB 為 net cash position；此數值提高股權價值，但不足以抵消負 FCF DCF 的負企業價值。
- 終值佔總估值比重：64.4%（基準情境）；樂觀情境為 70.6%，超過 70%，結果對終值假設高度敏感，請謹慎解讀。
- 因 TTM EBITDA 為 -$176.0M，EV/EBITDA fallback 會得到無意義或 N/A 的 multiple-based valuation，因此未產生可解讀的 multiple-based intrinsic value。

## 結論

基準情境下，機械式 DCF 得出 -$9.60/股，遠低於現價 $78.58，但這主要反映 RKLB 仍處於負自由現金流與負 EBITDA 階段，而非穩健的可投資內在價值判斷。RKLB 的估值目前更依賴未來收入轉化為正 FCF、Neutron 執行、backlog 兌現、股本稀釋與資本支出路徑，而不是現有 FCF DCF 能可靠捕捉的現金流基礎。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
