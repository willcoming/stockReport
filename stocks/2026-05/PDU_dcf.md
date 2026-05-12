# PDU — DCF 估值報告

as_of_date: 2026-05-12  
projection_years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| Ticker 驗證 | 資料不足：未在 Yahoo Finance quote search 回傳股票報價 | [Yahoo Finance Search](https://query1.finance.yahoo.com/v1/finance/search?q=PDU&quotes_count=10&news_count=0) |
| 交易所符號驗證 | 資料不足：PDU 未出現在 Nasdaq Trader NASDAQ / Other Listed symbol directory | [Nasdaq Trader Symbol Directory](https://www.nasdaqtrader.com/Trader.aspx?id=symbollookup) |
| 最近一年 FCF | 資料不足 | [Yahoo Finance Financials](https://finance.yahoo.com/quote/PDU/financials) |
| 5yr FCF CAGR | 資料不足 | 計算不可用 |
| Beta | 資料不足 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/PDU/) |
| Net Debt | 資料不足 | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/PDU/balance-sheet) |
| 流通股數 | 資料不足 | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/PDU/balance-sheet) |
| 無風險利率 (10Y) | 4.42% | [U.S. Treasury Daily Treasury Yield Curve Rates, 2026-05-11 latest available](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026) |
| WACC | 資料不足 | Beta 與可驗證公司資料不足 |
| 現價 | 資料不足 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/PDU/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | N/A | N/A | N/A | N/A |
| 基準 | N/A | 2.5% | N/A | N/A | N/A | N/A |
| 樂觀 | N/A | 3.5% | N/A | N/A | N/A | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：資料不足，無法從可驗證公開資料取得 PDU 的 annual Free Cash Flow。
- WACC 組成：無風險利率 4.42% 可取得，但 Beta 資料不足，因此無法計算 WACC。
- Bash / Python DCF calculation：因 fcf_base、growth、wacc、net_debt、shares 缺失，計算結果為 N/A。
- 終值佔總估值比重：N/A；基準情境無法建立 enterprise value，因此無法判斷 terminal value sensitivity。
- 未使用 EV/EBITDA fallback：PDU 無法驗證為可交易單一股票 ticker，且 market cap、net debt、EBITDA 皆資料不足。

## 結論

PDU 在本次可查來源中無法被驗證為有效單一上市股票 ticker，因此無法建立符合資料來源要求的 DCF 估值。基準情境下內在價值、現價與安全邊際皆為 N/A；主要不確定因子是 ticker 本身與財務資料不可驗證。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
