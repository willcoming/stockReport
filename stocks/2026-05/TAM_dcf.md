# TAM — DCF 估值報告 (2026-05-10)

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | 12.5% | 1.5% | 8.85% | £7.22 | £6.18 | +16.8% (低估) |
| 基準 | 20.9% | 2.5% | 8.35% | £11.93 | £6.18 | +93.0% (低估) |
| 樂觀 | 29.2% | 3.5% | 7.85% | £21.17 | £6.18 | +242.6% (低估) |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的判定 | Tatton Asset Management plc，LSE AIM:TAM / Yahoo: TAM.L | [StockAnalysis](https://stockanalysis.com/quote/aim/TAM/) |
| 最近一年 FCF | £18.68M（FY2025） | [StockAnalysis Cash Flow](https://stockanalysis.com/quote/aim/TAM/financials/cash-flow-statement/) |
| 5yr FCF CAGR | 20.9%（FY2021 £8.75M → FY2025 £18.68M） | [StockAnalysis Cash Flow](https://stockanalysis.com/quote/aim/TAM/financials/cash-flow-statement/) + 計算 |
| Beta | 0.72 | [StockAnalysis Statistics](https://stockanalysis.com/quote/aim/TAM/statistics/) |
| Net Debt | -£34.58M（Total Debt £0.72M - Cash £35.30M） | [StockAnalysis Statistics](https://stockanalysis.com/quote/aim/TAM/statistics/) |
| 流通股數 | 61.32M | [StockAnalysis Statistics](https://stockanalysis.com/quote/aim/TAM/statistics/) |
| 無風險利率 (10Y) | 4.39% | [DealPlexus US 10-Year Treasury Yield](https://www.dealplexus.com/markets/us-10-year-treasury-yield) |
| WACC | Bear 8.85% / Base 8.35% / Bull 7.85% | 計算 |
| 現價 | 618 GBX = £6.18（2026-05-08 close） | [StockAnalysis](https://stockanalysis.com/quote/aim/TAM/) |

## 關鍵假設說明

- FCF 成長率來源：使用 FY2021-FY2025 五個會計年度 FCF，從 £8.75M 成長至 £18.68M，計算 CAGR 為 20.9%；Bear/Base/Bull 分別套用 0.6x / 1.0x / 1.4x。
- WACC 組成：無風險利率 4.39% + Beta 0.72 x 5.5% ERP = 8.35%；Bear 加 0.5%，Bull 減 0.5%。
- 終值佔總估值比重：基準情境為 77.3%。
- 基準與樂觀情境終值佔比 >70%，結果對終值成長率與 WACC 假設高度敏感，請謹慎解讀。
- 本次以 Bash 執行 `python3 -c` 按 skill 指定 DCF 公式計算；所有金額以 GBP 為單位，股價由 GBX 換算為 £。

## 結論

基準情境下，TAM 的估算內在價值為 £11.93/股，較 2026-05-08 收盤價 £6.18 高約 93.0%。主要不確定因子是歷史 FCF CAGR 偏高且終值佔比達 77.3%，估值對長期成長與折現率假設非常敏感。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
