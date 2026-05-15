# XYZ — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 21.47% | 1.5% | 19.10% | $46.18 | $71.53 | -35.44% (高估) |
| 基準 | 35.78% | 2.5% | 18.60% | $80.78 | $71.53 | +12.93% (低估) |
| 樂觀 | 50.09% | 3.5% | 18.10% | $138.64 | $71.53 | +93.82% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 估值日 | 2026-05-15 | 使用者指定 |
| 最近一年 FCF | $2.425B | [StockAnalysis Cash Flow Statement](https://stockanalysis.com/stocks/xyz/financials/cash-flow-statement/)：FY2025 Free Cash Flow |
| 5yr FCF CAGR | 35.78% | 以 FY2021 $713.51M 與 FY2025 $2.425B 計算；來源同上 |
| Beta | 2.57 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/xyz/statistics/) |
| Net Debt | $0.812B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/xyz/statistics/)：$8.13B debt - $7.32B cash |
| 流通股數 | 595.18M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/xyz/statistics/) |
| 無風險利率 (10Y) | 4.46% | Yahoo Finance `^TNX` latest close, 2026-05-14 |
| WACC | 18.60%（基準） | Bash/Python 計算：4.46% + 2.57 x 5.5% |
| 現價 | $71.53 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/xyz/statistics/)：At close May 14, 2026 |

## 關鍵假設說明

- FCF 成長率來源：FY2021-FY2025 Free Cash Flow CAGR；因 FY2022 FCF 接近零、FY2023 為負，歷史 CAGR 對起點高度敏感。
- WACC 組成：無風險利率 4.46% + Beta 2.57 x 5.5% ERP = 18.60%（基準情境）。
- 三情境假設：悲觀 = base_rate x 0.6；基準 = base_rate；樂觀 = base_rate x 1.4。
- 終值佔總估值比重：62.10%（基準情境）；未超過 70%，但仍是估值主要來源之一。
- DCF 計算已依 skill 要求透過 Bash 執行 Python，以最近一年 FCF、5 年預測、net debt 與 shares outstanding 推導每股內在價值。

## 結論

基準情境下，XYZ 內在價值約 $80.78，較 $71.53 現價高約 12.93%。主要不確定因子是 FCF 成長率：Block 近年 FCF 波動很大，導致 DCF 對成長假設高度敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
