# USDC — DCF 估值報告

As of date: 2026-05-09  
Projection years: 5

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 10.37% | N/A | $0.9999 | N/A |
| 基準 | N/A | 2.5% | 9.87% | N/A | $0.9999 | N/A |
| 樂觀 | N/A | 3.5% | 9.37% | N/A | $0.9999 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

Python 計算狀態：因 USDC 沒有可歸屬於代幣持有人的股東 FCF、Net Debt、普通股流通股數與有效 Beta，三情境 DCF 輸出均為 `null / N/A`。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的類型 | USDC 是由 Circle 發行的 fully reserved stablecoin，設計為 1:1 兌美元 | [Circle USDC](https://www.circle.com/usdc) |
| 最近一年 FCF | 資料不足 / 不適用 | [Yahoo Finance Financials](https://finance.yahoo.com/quote/USDC/financials)；USDC 不是普通股權標的 |
| 5yr FCF CAGR | 資料不足 / 不適用 | 無可用股東自由現金流序列 |
| Beta | 資料不足；DCF skill 預設缺值時 Beta=1.00，但本案不作為有效估值依據 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/USDC) |
| Net Debt | 資料不足 / 不適用 | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/USDC/balance-sheet) |
| 流通股數 | 資料不足 / 不適用；CoinGecko 顯示約 78B USDC 流通代幣，但這不是股東流通股 | [CoinGecko](https://www.coingecko.com/en/coins/usdc) |
| 無風險利率 (10Y) | 4.37%（2026-05-08 最新可得值） | [Trading Economics](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 機械式缺值預設：Bear 10.37%、Base 9.87%、Bull 9.37%；未用於有效估值 | 計算：4.37% + 1.00 x 5.5% ± 0.5% |
| 現價 | $0.9999 | [CoinGecko](https://www.coingecko.com/en/coins/usdc) |
| 市值 | 約 $78.37B | [CoinGecko](https://www.coingecko.com/en/coins/usdc) |

## 關鍵假設說明

- FCF 成長率來源：資料不足。USDC 是穩定幣，不是普通股；代幣持有人通常沒有 Circle 股東現金流請求權。
- WACC 組成：無風險利率 4.37% + 預設 Beta 1.00 x 5.5% ERP = 9.87%；悲觀/樂觀情境依 skill 規則加減 0.5%。此 WACC 只作為缺值預設展示，未形成有效 DCF。
- 終值佔總估值比重：N/A（基準情境無可折現 FCF 與有效 terminal value）。
- USDC 的核心經濟設計是 1:1 美元贖回與儲備支持；Circle 官方說明 USDC 以高流動性現金與現金等價物 100% 支持，並可 1:1 兌美元。這與普通股 DCF 估值邏輯不同。
- 若要估 Circle Internet Group, Inc. 的股權價值，應使用其上市股票 ticker `CRCL`，而不是 USDC 代幣代號。

## 結論

基準情境下，USDC 無法產生有效 DCF 內在價值/股，因為它不是擁有股東自由現金流請求權的普通股。以公開資料看，USDC 的價格判斷核心不是 DCF 安全邊際，而是 1:1 贖回能力、儲備品質、流動性、監管與脫鉤風險。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
