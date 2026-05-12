# DELL — DCF 估值報告 (2026-05-10)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 2.0% | 1.5% | 10.74% | $116.67 | $260.46 | -55.2% (高估) |
| 基準 | 3.3% | 2.5% | 10.24% | $149.44 | $260.46 | -42.6% (高估) |
| 樂觀 | 4.6% | 3.5% | 9.74% | $198.17 | $260.46 | -23.9% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $8.55B | [StockAnalysis Cash Flow：FY2026 Free Cash Flow $8,552M](https://stockanalysis.com/stocks/dell/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 3.3% | 依 FY2022-FY2026 FCF $7,511M → $8,552M 計算 |
| Beta | 1.06 | [StockAnalysis Overview](https://stockanalysis.com/stocks/dell/) |
| Net Debt | $19.98B | [StockAnalysis Balance Sheet：Total Debt $31,503M、Cash $11,528M](https://stockanalysis.com/stocks/dell/financials/balance-sheet/) |
| 流通股數 | 650.19M | [StockAnalysis Overview](https://stockanalysis.com/stocks/dell/) |
| 無風險利率 (10Y) | 4.41% | [Federal Reserve H.15, 10-year Treasury, May 7 2026](https://www.federalreserve.gov/releases/h15/) |
| WACC | 10.24% | 計算：4.41% + 1.06 x 5.5% |
| 現價 | $260.46 | [StockAnalysis Overview：May 8, 2026 close](https://stockanalysis.com/stocks/dell/) |

## 關鍵假設說明

- FCF 成長率來源：使用 FY2022-FY2026 FCF CAGR 3.3% 作為基準情境；悲觀為 0.6x，樂觀為 1.4x。
- WACC 組成：無風險利率 4.41% + Beta 1.06 x 5.5% ERP = 10.24%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：69.8%（基準情境）。
- 樂觀情境終值佔總估值比重約 75.0%，高於 70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- 本模型已使用 Bash 搭配 Python 依 skill 指定公式計算三情境 DCF。

## 結論

基準情境下，DELL 估算內在價值為 $149.44/股，較 2026-05-08 收盤價 $260.46 低約 42.6%，目前 DCF 安全邊際不足。主要不確定因子是 AI server 需求能否持續轉化為穩定 FCF，以及高終值佔比下 WACC 與終值成長率的小幅變動會明顯影響估值。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
