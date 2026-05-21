# HVDC — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 資料不足 | 1.5% | 10.57% | N/A | N/A | N/A |
| 基準 | 資料不足 | 2.5% | 10.07% | N/A | N/A | N/A |
| 樂觀 | 資料不足 | 3.5% | 9.57% | N/A | N/A | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | 資料不足 | [Yahoo Finance HVDC chart endpoint：No data found / symbol may be delisted](https://query1.finance.yahoo.com/v8/finance/chart/HVDC?range=5d&interval=1d) |
| 5yr FCF CAGR | 資料不足 | Yahoo Finance 無有效 HVDC 報價資料，無法計算 |
| Beta | 資料不足；WACC 暫以 1.00 作模型預設 | Yahoo Finance 無有效 HVDC 報價資料；依 skill 規則 Beta 不可用時預設 1.0 |
| Net Debt | 資料不足 | Yahoo Finance 無有效 HVDC balance sheet 資料 |
| 流通股數 | 資料不足 | Yahoo Finance 無有效 HVDC quote / key statistics 資料 |
| 無風險利率 (10Y) | 4.57% | [U.S. Treasury Daily Treasury Yield Curve Rates，最新可用資料為 2026-05-20](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026) |
| WACC | 基準 10.07% | 計算：4.57% + 1.00 × 5.5% |
| 現價 | 資料不足 | [Yahoo Finance HVDC chart endpoint：No data found / symbol may be delisted](https://query1.finance.yahoo.com/v8/finance/chart/HVDC?range=5d&interval=1d) |

## 關鍵假設說明

- FCF 成長率來源：資料不足；Yahoo Finance 查無有效 `HVDC` 報價、現價、FCF、負債、現金與股數資料，因此無法建立有效 DCF 現金流。
- WACC 組成：無風險利率 4.57% + Beta 1.00 x 5.5% ERP = 10.07%；悲觀 / 樂觀情境依 skill 規則分別加減 0.5%。
- 終值佔總估值比重：N/A（基準情境無可用 FCF、Net Debt、Shares Outstanding，無法計算）。
- EV/EBITDA fallback：無法套用，因為 `HVDC` 缺少有效 market cap、EBITDA、net debt 與 shares outstanding 資料。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。

## 結論

基準情境下，`HVDC` 因公開市場資料不足且 Yahoo Finance 查無有效報價，無法得出可驗證的 DCF 每股內在價值或安全邊際。若 `HVDC` 代表特定交易所的完整 ticker，需先補充正確後綴或上市市場後才能重新估算。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
