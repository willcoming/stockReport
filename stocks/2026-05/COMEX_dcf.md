# COMEX — DCF 估值報告

as_of_date：2026-05-07  
projection_years：5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| Ticker 狀態 | `COMEX` 非可辨識上市股權 ticker；Yahoo Finance quoteSummary 回傳 `Quote not found for symbol: COMEX` | [Yahoo Finance Quote](https://finance.yahoo.com/quote/COMEX)；本地 Bash/yfinance 查詢 |
| 標的性質 | COMEX 是 CME Group 旗下 Designated Contract Market / exchange division，不是單一上市公司普通股 | [CME Group COMEX](https://www.cmegroup.com/company/comex.html) |
| 最近一年 FCF | 資料不足 | Yahoo Finance 無 `COMEX` 股權財務報表 |
| 5yr FCF CAGR | 資料不足 | 無可用 FCF 序列，未計算 |
| Beta | 資料不足 | Yahoo Finance 無 `COMEX` 股權 quote |
| Net Debt | 資料不足 | Yahoo Finance 無 `COMEX` balance sheet |
| 流通股數 | 資料不足 | Yahoo Finance 無 `COMEX` shares outstanding |
| 無風險利率 (10Y) | N/A | 因缺少股權 DCF 必要輸入，未納入估值 |
| WACC | N/A | 缺少 Beta 與可估值股權標的，未計算 |
| 現價 | 資料不足 | Yahoo Finance 無 `COMEX` 股權 quote |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | N/A | N/A | N/A | N/A |
| 基準 | N/A | 2.5% | N/A | N/A | N/A | N/A |
| 樂觀 | N/A | 3.5% | N/A | N/A | N/A | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：資料不足；`COMEX` 不是可直接取得 FCF、debt、shares outstanding 的上市股權 ticker。
- WACC 組成：未計算；缺少 Beta、股權現價、流通股數與可歸屬於單一上市公司的資本結構資料。
- 終值佔總估值比重：N/A；DCF 未能執行。
- Bash/Python 計算驗證結果：必要輸入缺少 `fcf_base`、`growth`、`terminal_g`、`wacc`、`net_debt`、`shares`，因此 `intrinsic_value_per_share = null`。
- 因 `COMEX` 指向交易所 division，而非股票 ticker，本報告不以 `CME` 替代估值；若要估 CME Group Inc.，需使用 ticker `CME` 重新執行。

## 結論

`COMEX` 目前無法作為單一上市公司股權 ticker 執行 DCF 估值；公開來源顯示它是 CME Group 旗下交易所 division，而非獨立上市公司普通股。因此本次不產生內在價值/股、安全邊際或高估/低估判斷。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
