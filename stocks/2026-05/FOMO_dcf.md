# FOMO — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | N/A | N/A | N/A（最後可得成交價 $16.83） | N/A |
| 基準 | N/A | 2.5% | N/A | N/A | N/A（最後可得成交價 $16.83） | N/A |
| 樂觀 | N/A | 3.5% | N/A | N/A | N/A（最後可得成交價 $16.83） | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

FOMO 對應的是 AXS FOMO ETF，不是營運公司；ETF 本身沒有可用於公司 DCF 的營運 FCF、淨負債與公司流通股數。且 ETFDB/FactSet 資料顯示該基金最後交易日為 2023-01-13，因此截至 2026-05-13 無法產生有效 DCF 內在價值。

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的類型 | AXS FOMO ETF | [Yahoo Finance Quote](https://finance.yahoo.com/quote/FOMO), [ETFDB/FactSet report](https://etfdb.com/fs-insight-reports/FOMO_insight_report.pdf) |
| 最後交易日 | 2023-01-13 | [ETFDB/FactSet report](https://etfdb.com/fs-insight-reports/FOMO_insight_report.pdf) |
| 最近一年 FCF | 資料不足 / ETF 不適用 | [Yahoo Finance Financials](https://finance.yahoo.com/quote/FOMO/financials) |
| 5yr FCF CAGR | N/A | 因 FCF 資料不足，無法計算 |
| Beta | N/A | [MarketBeat](https://www.marketbeat.com/stocks/NYSEARCA/FOMO/) |
| Net Debt | 資料不足 / ETF 不適用 | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/FOMO/balance-sheet) |
| 流通股數 | 130,000（ETF outstanding shares；不適合作公司 DCF 分母） | [MarketBeat](https://www.marketbeat.com/stocks/NYSEARCA/FOMO/) |
| 無風險利率 (10Y) | 4.46%（2026-05-12） | [U.S. Treasury Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | N/A | 因 DCF 輸入資料不足，未套用 |
| 現價 | N/A；最後可得成交價 $16.83（2023-01-13） | [MarketBeat](https://www.marketbeat.com/stocks/NYSEARCA/FOMO/) |

## 關鍵假設說明

- FCF 成長率來源：資料不足；FOMO 是 ETF，Yahoo Finance 未提供可用的營運公司 FCF 序列。
- WACC 組成：無風險利率 4.46% 可取得，但 Beta / FCF / Net Debt / 公司流通股數等核心 DCF 輸入不可用，因此未計算 WACC 情境。
- 終值佔總估值比重：N/A（基準情境未能產生有效 enterprise value）。
- 因標的已停止交易且 ETF 不具備一般營運公司 DCF 輸入，本報告不將 EV/EBITDA fallback 視為有效替代估值。

## 結論

基準情境下，FOMO 無法以標準 DCF 判斷高估或低估；主要原因是該 ticker 對應已停止交易的 ETF，而非具備營運 FCF、淨負債與公司股本結構的上市公司。任何以最後成交價 $16.83 推導安全邊際的做法都缺乏有效 DCF 基礎。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
