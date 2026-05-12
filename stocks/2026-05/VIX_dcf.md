# VIX — DCF 估值報告

as_of_date: 2026-05-11  
projection_years: 5

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | N/A | N/A | N/A | N/A |
| 基準 | N/A | 2.5% | N/A | N/A | N/A | N/A |
| 樂觀 | N/A | 3.5% | N/A | N/A | N/A | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的性質 | Cboe Volatility Index，不是公司股權 | [Cboe VIX Index Dashboard](https://www.cboe.com/us/indices/dashboard/vix/)；[Yahoo Finance ^VIX](https://finance.yahoo.com/quote/%5EVIX/) |
| 最近一年 FCF | 資料不足／不適用 | VIX 為指數，無公司自由現金流 |
| 5yr FCF CAGR | 資料不足／不適用 | 無 FCF 序列可計算 |
| Beta | 資料不足／不適用 | VIX 為波動率指數，非普通股 |
| Net Debt | 資料不足／不適用 | 無公司資產負債表 |
| 流通股數 | 資料不足／不適用 | 無公司股本 |
| 無風險利率 (10Y) | 4.39% | [Trading Economics, 2026-05-11](https://tradingeconomics.com/united-states/government-bond-yield) |
| WACC | 資料不足／不適用 | 缺 Beta 與公司資本結構 |
| 現價 | 不適用於 DCF；Yahoo 顯示 ^VIX 指數值 17.39（2026-05-06 close） | [Yahoo Finance ^VIX](https://finance.yahoo.com/quote/%5EVIX/) |

## 關鍵假設說明

- FCF 成長率來源：資料不足。VIX 是由 S&P 500 options prices 推導的波動率指數，不是產生自由現金流的營運公司。
- WACC 組成：無風險利率 4.39% 可取得，但 Beta、資本結構、FCF 與股數皆不適用，因此 WACC 無法合理計算。
- 終值佔總估值比重：N/A。因無可折現的公司 FCF，Python DCF 計算結果為 `intrinsic = null`。
- EV/EBITDA fallback：不適用。VIX 沒有 EBITDA、market cap、net debt 或 shares outstanding，不能使用公司倍數法估每股內在價值。

## 結論

基準情境下，VIX 無法以 DCF 估算每股內在價值；它是波動率指數，不是有現金流、負債與股本的公司。任何以 DCF 對 VIX 產生的「內在價值/股」都會是模型誤用，因此本報告不給出估值數字或安全邊際判斷。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
