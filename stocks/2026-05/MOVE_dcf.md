# MOVE — DCF 估值報告 (2026-05-07)

## DCF 估值結果

由於 MOVE 最近年度 FCF 為負，且 2026 年剛完成從 Movano/legacy healthcare 到 Corvex AI infrastructure 的重大併購轉型，歷史 FCF CAGR 不具可用性。本次以 Python 跑 5 年 DCF 檢查後，模型輸出為負值，因此不採用為有效內在價值估算；EV/EBITDA fallback 也因 EBITDA / operating profit 為負而不適用。

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A（負 FCF） | 1.5% | 13.85% | N/A（Python 檢查值約 -$1.55，不具估值意義） | $13.93 | N/A |
| 基準 | N/A（負 FCF） | 2.5% | 13.35% | N/A（Python 檢查值約 -$1.74，不具估值意義） | $13.93 | N/A |
| 樂觀 | N/A（負 FCF） | 3.5% | 12.85% | N/A（Python 檢查值約 -$2.00，不具估值意義） | $13.93 | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 公司 | Corvex, Inc.，AI cloud computing company | [Robinhood](https://robinhood.com/us/en/stocks/MOVE/) |
| 最近一年 FCF | -$16.4M（估算：Corvex, Inc. -$11.3M + Corvex OpCo -$5.2M） | [SEC 2025 10-K](https://www.sec.gov/Archives/edgar/data/1734750/000121390026036609/ea0278320-10k_corvex.htm)、[8-K/A OpCo financials](https://www.stocktitan.net/sec-filings/MOVE/8-k-a-corvex-inc-amends-material-event-report-cd1db915ffe8.html) |
| 5yr FCF CAGR | 資料不足 / 不適用 | FCF 多期為負且公司於 2026 年完成重大併購轉型 |
| Beta | 1.64 | [Stock Data Analytics](https://www.stockdataanalytics.com/news/move-rounding-bottom-2026-04-08/) |
| Net Debt | -$23.8M（net cash；估算） | [8-K/A pro forma balance sheet](https://www.stocktitan.net/sec-filings/MOVE/8-k-a-corvex-inc-amends-material-event-report-cd1db915ffe8.html) |
| 流通股數 | 66.74M | [ChartExchange](https://chartexchange.com/symbol/nasdaq-move/) |
| 無風險利率 (10Y) | 4.33% | [MarketScreener / Reuters](https://www.marketscreener.com/news/u-s-treasury-yields-hold-declines-after-data-yield-on-10-year-treasury-note-last-down-2-2-basis-po-ce7f58d3de88f020)；U.S. Treasury 2026-05-06 最新官方 10Y 為 4.36% |
| WACC | 13.35%（基準） | 計算：4.33% + 1.64 × 5.5% |
| 現價 | $13.93 | [Robinhood](https://robinhood.com/us/en/stocks/MOVE/) |

## 關鍵假設說明

- FCF 成長率來源：資料不足；2025 pro forma/combined FCF 仍為負，且公司 2026 年完成重大併購轉型，歷史 CAGR 不適合外推。
- WACC 組成：無風險利率 4.33% + Beta 1.64 x 5.5% ERP = 13.35%；悲觀 / 樂觀情境分別加減 0.5%。
- 終值佔總估值比重：基準情境 Python 檢查約 59.1%，但因 FCF 為負，該比例不應解讀為有效估值敏感度。
- EV/EBITDA fallback：不採用，因公司仍處虧損階段，負 EBITDA / operating loss 使 multiple-based intrinsic value 不具經濟意義。
- 主要限制：MOVE 目前估值高度依賴併購後 AI infrastructure 業務能否轉正現金流，以及 preferred conversion / 股權稀釋後的實際 share count。

## 結論

基準情境下，MOVE 無法產生可用的 DCF 內在價值，原因是最近年度自由現金流為負且併購後營運歷史太短；因此不能從 DCF 模型得出「低估」結論。最主要的不確定因子是 AI cloud 業務能否快速轉為正 FCF，以及後續 preferred stock conversion 對每股價值的稀釋影響。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
