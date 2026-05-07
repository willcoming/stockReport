# QCOM — DCF 估值報告

As of date: 2026-05-07  
Projection years: 5

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $12.834B | [Macrotrends — QCOM Free Cash Flow](https://www.macrotrends.net/stocks/charts/QCOM/qualcomm/free-cash-flow/1000)；Yahoo Finance cash-flow 資料交叉檢查 |
| 5yr FCF CAGR | 10.36% | 計算：2021 FCF $8.651B → 2025 FCF $12.834B，來源同上 |
| Beta | 1.493 | [Yahoo Finance — QCOM Summary](https://finance.yahoo.com/quote/QCOM/) |
| Total Debt | $15.270B | [Yahoo Finance — QCOM Balance Sheet](https://finance.yahoo.com/quote/QCOM/balance-sheet/) |
| Total Cash | $9.799B | [Yahoo Finance — QCOM Balance Sheet](https://finance.yahoo.com/quote/QCOM/balance-sheet/) |
| Net Debt | $5.471B | 計算：$15.270B - $9.799B |
| 流通股數 | 1.054B | [Yahoo Finance — QCOM Summary](https://finance.yahoo.com/quote/QCOM/) |
| 無風險利率 (10Y) | 4.36% | [U.S. Treasury Daily Treasury Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 12.57% | 計算：4.36% + 1.493 × 5.5% |
| 現價 | $192.51 | [Yahoo Finance — QCOM Summary](https://finance.yahoo.com/quote/QCOM/) |

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 6.22% | 1.5% | 13.07% | $123.62 | $192.51 | -35.8% (高估) |
| 基準 | 10.36% | 2.5% | 12.57% | $164.46 | $192.51 | -14.6% (高估) |
| 樂觀 | 14.51% | 3.5% | 12.07% | $223.55 | $192.51 | +16.1% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 關鍵假設說明

- FCF 成長率來源：使用 2021-2025 年公開 FCF 序列計算 CAGR，基準情境為 10.36%；悲觀為基準 × 0.6，樂觀為基準 × 1.4。
- WACC 組成：無風險利率 4.36% + Beta 1.493 × 5.5% ERP = 12.57%；悲觀加 0.5%，樂觀減 0.5%。
- 終值佔總估值比重：基準情境約 66.2%。
- 樂觀情境終值佔總企業價值約 71.6%，超過 70%；該情境對 terminal growth rate 與 WACC 假設高度敏感，請謹慎解讀。
- DCF 計算使用 Bash 搭配 `python3` 依 skill 公式執行，並以最近一年 FCF $12.834B、Net Debt $5.471B、流通股數 1.054B 作為模型輸入。

## 結論

基準情境下，QCOM 的 DCF 內在價值約為 $164.46/股，較現價 $192.51 低約 14.6%，表示目前價格在此模型假設下偏高。主要不確定因子是未來 FCF 成長能否維持雙位數，以及終值假設對估值結果的影響。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
