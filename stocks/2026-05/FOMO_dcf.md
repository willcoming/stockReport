# FOMO — DCF 估值報告

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的類型 | ETF：AXS FOMO ETF | [Yahoo Finance](https://finance.yahoo.com/quote/FOMO)、[ETFdb](https://etfdb.com/etf/FOMO/) |
| 最近一年 FCF | 資料不足 / 不適用 | Yahoo Finance financials 無公司營運 FCF |
| 5yr FCF CAGR | N/A | FCF 資料不足，無法計算 |
| Beta | 資料不足 | Yahoo Finance summary |
| Net Debt | 資料不足 / 不適用 | Yahoo Finance balance sheet 無 ETF 公司負債/現金欄位 |
| 流通股數 | 資料不足 | Yahoo Finance summary；ETFdb 顯示約 0.1M shares 但非公司流通股數 |
| 無風險利率 (10Y) | 約 4.37% | WebSearch：2026-05-06 10Y Treasury yield 查詢結果 |
| WACC | N/A | Beta 與公司資本結構資料不足 |
| 現價 | 約 $16.83 | [Yahoo Finance](https://finance.yahoo.com/quote/FOMO)、[Investing.com](https://www.investing.com/etfs/fomo) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | N/A | N/A | $16.83 | N/A |
| 基準 | N/A | 2.5% | N/A | N/A | $16.83 | N/A |
| 樂觀 | N/A | 3.5% | N/A | N/A | $16.83 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：資料不足。FOMO 是 ETF，不是單一營運公司；Yahoo Finance 未提供可用於公司 DCF 的 annual Free Cash Flow。
- WACC 組成：無法計算。雖可取得 10Y Treasury 約 4.37%，但 Beta、公司資本結構與公司層級現金流資料不足。
- 終值佔總估值比重：N/A。DCF 未成立，因此無法計算 terminal value sensitivity。
- EV/EBITDA fallback：不適用。ETF 沒有公司層級 EBITDA，不能用營運公司 multiple 估值框架替代。

## 結論

FOMO 為 AXS FOMO ETF，缺少公司 DCF 所需的 FCF、Net Debt、Beta 與公司流通股數，因此無法產生有效的 DCF 內在價值。對 ETF 較合理的分析通常應改看 NAV、持倉、費用率、流動性、折溢價與資產配置，而不是公司 DCF。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
