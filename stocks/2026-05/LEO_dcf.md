# LEO — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | -20.7% | 1.5% | 8.57% | -$1.19 | $6.24 | -119.1% (高估) |
| 基準 | -34.6% | 2.5% | 8.07% | -$1.64 | $6.24 | -126.3% (高估) |
| 樂觀 | -48.4% | 3.5% | 7.57% | -$1.92 | $6.24 | -130.7% (高估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的 | BNY Mellon Strategic Municipals, Inc.；封閉式市政債基金 | [Yahoo Finance - LEO](https://finance.yahoo.com/quote/LEO)、[BNY Investments fund page](https://www.bny.com/investments/us/en/intermediary/products/closed-end-funds/fund/bny-mellon-strategic-municipals-inc.shareclass.Common-Stock.html) |
| 最近一年 FCF | $12.65M | [Yahoo Finance Cash Flow](https://finance.yahoo.com/quote/LEO/cash-flow) |
| 3yr FCF CAGR | -34.6% | 以 Yahoo Finance 2022 FCF $45.19M 與 2025 FCF $12.65M 計算；5yr FCF 不完整 |
| Beta | 0.627 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/LEO) |
| Total Debt | $139.05M | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/LEO/balance-sheet) |
| Cash & Equivalents | $0.11M | [Yahoo Finance Balance Sheet](https://finance.yahoo.com/quote/LEO/balance-sheet) |
| Net Debt | $138.94M | Total Debt - Cash |
| 流通股數 | 62.29M | [Yahoo Finance Summary](https://finance.yahoo.com/quote/LEO) |
| 無風險利率 (10Y) | 4.623% | WebSearch / Yahoo Finance `^TNX`，2026-05-18 最近收盤 |
| WACC | 基準 8.07% | 無風險利率 4.623% + Beta 0.627 x 5.5% ERP |
| 現價 | $6.24 | [Yahoo Finance Summary](https://finance.yahoo.com/quote/LEO)，2026-05-19 查詢時最近價 |

## 關鍵假設說明

- FCF 成長率來源：Yahoo Finance 可取得的年度 FCF 僅有 2022-2025，因此依 skill 規則使用 3yr FCF CAGR；基準情境為 -34.6%。
- WACC 組成：無風險利率 4.623% + Beta 0.627 x 5.5% ERP = 8.07%；悲觀情境加 0.5%，樂觀情境減 0.5%。
- 終值佔總估值比重：51.5%（基準情境）。
- LEO 是封閉式基金，不是一般營運公司；Yahoo Finance 的 FCF 主要反映基金現金流與投資組合活動，DCF 解讀限制高於一般企業估值。
- 因基準 FCF CAGR 為負值，依 skill 的「base_rate x 0.6 / x 1.4」機械規則計算後，情境標籤的經濟直覺會被負成長率扭曲；結果應以敏感度參考，不宜視為精確估值。

## 結論

基準情境下，LEO 的 DCF 內在價值為 -$1.64/股，相對 $6.24 現價呈現 -126.3% 安全邊際，主要原因是近年 FCF 大幅下滑且 net debt 相對最近一年 FCF 偏高。最主要的不確定因子是：LEO 作為封閉式市政債基金，DCF 並非最適合的估值框架，NAV 折溢價與投資組合收益率通常更關鍵。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
