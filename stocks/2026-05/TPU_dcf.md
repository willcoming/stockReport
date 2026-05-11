# TPU — DCF 估值報告 (2026-05-11)

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的識別 | `TPU` 在 Yahoo chart endpoint 顯示為 `ECNQUOTE`，無普通股財務資料；最接近的 `TPU.TO` 是 TD U.S. Equity Index ETF | [Yahoo Finance TPU](https://query1.finance.yahoo.com/v8/finance/chart/TPU?range=1d&interval=1d), [Yahoo Finance TPU.TO](https://query1.finance.yahoo.com/v8/finance/chart/TPU.TO?range=1d&interval=1d) |
| 最近一年 FCF | 資料不足 | Yahoo Finance 未提供可用公司現金流資料 |
| 5yr FCF CAGR | 資料不足 | 無可用 FCF 歷史序列 |
| Beta | 資料不足；模型規則預設 1.00，但未用於估值 | Yahoo Finance 資料不足 |
| Net Debt | 資料不足 | Yahoo Finance 未提供可用公司資產負債表資料 |
| 流通股數 | 資料不足 | Yahoo Finance 未提供可用普通股股數 |
| 無風險利率 (10Y) | 4.38%（2026-05-08，2026-05-11 尚無官方日資料） | [U.S. Treasury Daily Treasury Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 資料不足；若僅用預設 Beta 1.00，基準 WACC = 9.88% | 計算：4.38% + 1.00 x 5.5% |
| 現價 | 資料不足；`TPU.TO` ETF 價格為 CAD 57.59，但非本 DCF 採用標的 | [Yahoo Finance TPU.TO](https://query1.finance.yahoo.com/v8/finance/chart/TPU.TO?range=1d&interval=1d) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | N/A | N/A | N/A | N/A |
| 基準 | N/A | 2.5% | N/A | N/A | N/A | N/A |
| 樂觀 | N/A | 3.5% | N/A | N/A | N/A | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：資料不足；`TPU` 未確認為具備 Yahoo Finance 公司財務報表的營運公司 ticker，無法取得 annual FCF 或 5yr FCF CAGR。
- WACC 組成：若依 skill 規則在 Beta 不可用時預設 Beta 1.00，基準 WACC = 無風險利率 4.38% + Beta 1.00 x 5.5% ERP = 9.88%；但因缺少 FCF、Net Debt、Shares，不執行內在價值估算。
- 終值佔總估值比重：N/A（基準情境未能計算）。
- Python calculation 已執行；結果因 `fcf_base`、`net_debt`、`shares` 等必要輸入缺失而回傳 N/A，避免捏造估值數字。

## 結論

基準情境下，`TPU` 無法產生可靠 DCF 內在價值或安全邊際，主因是該 ticker 未對應到可取得公司 FCF、負債、現金與股數資料的普通股標的。若實際目標是 `TPU.TO`，它是 ETF，傳統單一公司 DCF 模型不適用。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
