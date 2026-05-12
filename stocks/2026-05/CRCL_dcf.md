# CRCL — DCF 估值報告 (2026-05-10)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 57.2% | 1.5% | 10.38% | $187.81 | $113.67 | +65.2% (低估) |
| 基準 | 95.3% | 2.5% | 9.88% | $627.41 | $113.67 | +452.0% (低估) |
| 樂觀 | 133.4% | 3.5% | 9.38% | $1,884.10 | $113.67 | +1,557.5% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | $529.7M | [StockAnalysis Cash Flow](https://stockanalysis.com/stocks/crcl/financials/cash-flow-statement/) |
| 2023-2025 FCF CAGR | 95.3% | 由 2023 FCF $138.91M 與 2025 FCF $529.7M 計算 |
| Revenue | $2.75B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crcl/statistics/) |
| Beta | 資料不足；依 skill 規則預設 1.00 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crcl/statistics/) |
| Cash | $1.53B | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crcl/statistics/) |
| Total Debt | $51.49M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crcl/statistics/) |
| Net Debt | -$1.48B | Cash 與 Total Debt 計算 |
| 流通股數 | 242.52M | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crcl/statistics/) |
| 無風險利率 (10Y) | 4.38% | [U.S. Treasury Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 9.88% | 4.38% + 1.00 x 5.5% ERP |
| 現價 | $113.67 | [StockAnalysis Statistics](https://stockanalysis.com/stocks/crcl/statistics/)；May 8, 2026 close |

## 關鍵假設說明

- FCF 成長率來源：CRCL 可用正 FCF 年份主要為 2023-2025，因此依 skill 規則使用 3 年資料計算 CAGR；2023 FCF $138.91M、2025 FCF $529.7M，推得基準成長率 95.3%。此成長率極高，主要反映早期上市公司與業務高速擴張階段，不能視為穩態成長。
- WACC 組成：無風險利率 4.38% + Beta 1.00 x 5.5% ERP = 9.88%；因公開來源顯示 Beta 為 N/A，依 skill 規則預設 Beta = 1.00。
- Net Debt：Total Debt $51.49M - Cash $1.53B = -$1.48B，代表淨現金。
- DCF 計算已透過 Bash / Python 執行，projection_years = 5。
- 終值佔總估值比重：悲觀 80.4%、基準 86.6%、樂觀 90.5%。
- 若終值佔比 >70%，結果對終值假設高度敏感，請謹慎解讀。CRCL 三個情境皆超過 70%，因此本估值更像是高成長假設敏感度測試，而不是穩定成熟企業的精準估值。

## 結論

基準情境下，CRCL 的 DCF 內在價值為 $627.41/股，較 May 8, 2026 收盤價 $113.67 顯示 +452.0% 安全邊際；但此結果高度依賴 2023-2025 FCF CAGR 延續五年的假設，且終值佔比達 86.6%，估值對成長率、WACC 與終值成長率極度敏感。主要不確定因子是 CRCL 的 FCF 是否能維持早期高速增長，以及穩定幣利率環境、監管與競爭格局是否改變其長期現金流能力。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
