# CDMO — DCF 估值報告 (2026-05-08)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 公司狀態 | 已於 2025-02-05 完成收購並下市 | [Avid press release](https://avidbio.com/wp-content/uploads/2025/02/Exhibit-99.2-Avid-Press-Release-Fundamental-Change-and-Make-Whole-Fundamental-Change-Updated-2.1.25.pdf)、[PharmaSource](https://pharmasource.global/content/news/cdmo-news/avid-bioservices-acquired-by-gho-and-ampersand/) |
| 最近一年 FCF | -$9.68M（TTM） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/cdmo/financials/cash-flow-statement/) |
| 5yr FCF CAGR | N/A（FY2020–FY2024 正負交錯，且近 5 年有 3 年為負） | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/cdmo/financials/cash-flow-statement/) |
| DCF 用 FCF 基礎 | 2025E–2029E unlevered FCF：$10M / $13M / $19M / $28M / $37M | [Merger Proxy / Moelis projections](https://materials.proxyvote.com/Approved/05368M/20241211/NOMNP_592884.PDF) |
| Projection UFCF CAGR | 38.7% | Bash/Python 計算，基於 proxy 2025E $10M 至 2029E $37M |
| Beta | 1.39 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/cdmo/statistics/) |
| Net Debt | $171.91M（Debt $207.02M - Cash $35.12M） | [StockAnalysis Statistics](https://stockanalysis.com/stocks/cdmo/statistics/) |
| 流通股數 | 63.96M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/cdmo/statistics/) |
| 無風險利率 (10Y) | 4.36%（2026-05-06，Fed H.15 於 2026-05-07 發布的最新可用 10Y constant maturity） | [Federal Reserve H.15](https://www.federalreserve.gov/releases/h15/) |
| WACC | 悲觀 12.51% / 基準 12.01% / 樂觀 11.51% | Bash/Python 計算：risk-free + Beta x 5.5% ERP ± 0.5% |
| 現價 | N/A（已下市）；參考收購對價 $12.50 / last trade $12.49 | [Avid press release](https://avidbio.com/wp-content/uploads/2025/02/Exhibit-99.2-Avid-Press-Release-Fundamental-Change-and-Make-Whole-Fundamental-Change-Updated-2.1.25.pdf)、[StockAnalysis](https://stockanalysis.com/stocks/cdmo/financials/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 23.2% | 1.5% | 12.51% | $0.62 | $12.50（收購價參考） | -95.0%（高估） |
| 基準 | 38.7% | 2.5% | 12.01% | $3.77 | $12.50（收購價參考） | -69.8%（高估） |
| 樂觀 | 54.2% | 3.5% | 11.51% | $9.82 | $12.50（收購價參考） | -21.5%（高估） |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

補充參考：Avid merger proxy 披露的 Moelis DCF 參考區間為 $8.13–$11.89 / 股；Sensitivity A 為 $6.25–$9.68，Sensitivity B 為 $11.50–$16.07。上述表格為依本 skill 指定 WACC / terminal growth 架構重新用 Bash/Python 計算，未納入 Moelis 另行估算的 NOL 與 R&D tax credit 現值。

## 關鍵假設說明

- FCF 成長率來源：因歷史 FCF 不適合直接計算 CAGR（FY2020–FY2024：$2.02M、$21.32M、-$46.95M、-$90.53M、-$20.85M；TTM -$9.68M），本模型改用 merger proxy 披露的 2025E–2029E unlevered FCF projections，基準 CAGR = 38.7%；悲觀 / 樂觀依 skill 規則使用 base_rate x 0.6 / x 1.4。
- WACC 組成：無風險利率 4.36% + Beta 1.39 x 5.5% ERP = 12.01%（基準）。
- 終值佔總估值比重：75.97%（基準情境）。
- 基準與樂觀情境終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- 因 CDMO 已於 2025-02-05 完成現金收購並下市，截至 2026-05-08 不存在可交易的公開現價；表中安全邊際以 $12.50 收購對價作為比較基準，不代表可交易價格。

## 結論

基準情境下，依本模型計算的 CDMO standalone DCF 內在價值約 $3.77 / 股，較 $12.50 收購對價低約 69.8%。主要不確定因子是管理層 projection 能否實現、終值假設、WACC，以及 Moelis DCF 中另行納入的稅務屬性價值；此外，CDMO 已下市，該估值不適用於公開市場交易決策。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
