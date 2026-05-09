# IPO — DCF 估值報告

as_of_date: 2026-05-09  
projection_years: 5  
標的判定：IPO = Renaissance IPO ETF（NYSE Arca: IPO）。此標的是 ETF，不是單一營運公司，因此沒有可直接用於公司 DCF 的 Free Cash Flow、Total Debt、Cash 等公司財務項目。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | 資料不足 / 不適用（ETF 無公司型 FCF） | [Yahoo Finance IPO](https://uk.finance.yahoo.com/quote/IPO/)、[Renaissance Capital ETF 頁](https://etfs.renaissancecapital.com/us-ipo-etf) |
| 5yr FCF CAGR | N/A | 因 IPO 為 ETF，無公司 FCF 序列可計算 |
| Beta | 1.32 | [StockAnalysis IPO](https://stockanalysis.com/etf/ipo/) |
| Net Debt | 資料不足 / 不適用（ETF 無公司型 net debt） | [Renaissance Capital ETF 頁](https://etfs.renaissancecapital.com/us-ipo-etf) |
| 流通股數 | 2.85M | [StockAnalysis IPO](https://stockanalysis.com/etf/ipo/) |
| 無風險利率 (10Y) | 4.37% | [Trading Economics US 10Y, May 8 2026](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 悲觀 12.13% / 基準 11.63% / 樂觀 11.13% | 計算：4.37% + Beta 1.32 x 5.5% ERP，並依情境加減 0.5% |
| 現價 | $49.17 | [StockAnalysis IPO](https://stockanalysis.com/etf/ipo/) |
| ETF Assets / AUM | $148.96M | [StockAnalysis IPO](https://stockanalysis.com/etf/ipo/) |
| Expense Ratio | 0.60% | [Renaissance Capital ETF 頁](https://etfs.renaissancecapital.com/us-ipo-etf) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 12.13% | N/A | $49.17 | N/A |
| 基準 | N/A | 2.5% | 11.63% | N/A | $49.17 | N/A |
| 樂觀 | N/A | 3.5% | 11.13% | N/A | $49.17 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：N/A。IPO 是追蹤 Renaissance IPO Index 的 ETF，持有一籃子近期上市公司，不是單一營運公司，因此沒有公司層級的 annual Free Cash Flow 可用於 DCF。
- WACC 組成：無風險利率 4.37% + Beta 1.32 x 5.5% ERP = 11.63%（基準情境）；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：N/A（基準情境未能建立有效 DCF）。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。
- 因缺少 ETF 可用的公司型 FCF、net debt、cash 與營運公司 terminal value，本報告不輸出推導式每股內在價值，以避免捏造數字。

## 結論

基準情境下，IPO 無法用單一公司 DCF 模型得出可靠的每股內在價值，因此不能判定相對 $49.17 現價是高估或低估。若要評估此 ETF，更合適的方法通常是檢視 NAV 折溢價、持股估值、費用率、追蹤誤差、成分股品質與風險暴露，而不是單一公司 DCF。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
