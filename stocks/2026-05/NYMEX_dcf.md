# NYMEX — DCF 估值報告

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | 10.36% | N/A | N/A | N/A |
| 基準 | N/A | 2.5% | 9.86% | N/A | N/A | N/A |
| 樂觀 | N/A | 3.5% | 9.36% | N/A | N/A | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 最近一年 FCF | 資料不足 | [Yahoo Finance NYMEX 查詢](https://finance.yahoo.com/quote/NYMEX/financials) 無可用獨立上市公司財報；[CME Group](https://www.cmegroup.com/company/nymex.html) 說明 NYMEX 為 CME Group 旗下交易所 |
| 5yr FCF CAGR | 資料不足 | 無獨立 NYMEX 財報資料可計算 |
| Beta | 1.00（fallback） | Yahoo Finance 無可用 NYMEX beta；依 skill 規則 beta 不可用時預設 1.0 |
| Net Debt | 資料不足 | [Yahoo Finance NYMEX balance sheet](https://finance.yahoo.com/quote/NYMEX/balance-sheet) 無可用獨立資產負債表 |
| 流通股數 | 資料不足 | 無獨立 NYMEX 流通股數；[CFTC](https://www.cftc.gov/IndustryOversight/IndustryFilings/TradingOrganizations/74) 註明 NYMEX 於 2008-08-22 成為 CME Group Inc. 全資子公司 |
| 無風險利率 (10Y) | 4.36% | [Slickcharts / Treasury.gov data](https://www.slickcharts.com/treasury)，2026-05-06 最新可得 10Y |
| WACC | 基準 9.86% | 計算：4.36% + 1.00 x 5.5% |
| 現價 | 資料不足 | NYMEX 不是可取得現價的獨立上市 ticker |

## 關鍵假設說明

- FCF 成長率來源：資料不足；NYMEX 目前是 CME Group 旗下交易所，不是獨立上市 ticker，無法取得獨立 FCF 序列。
- WACC 組成：無風險利率 4.36% + Beta 1.00 x 5.5% ERP = 9.86%；悲觀/樂觀情境依 skill 規則分別加減 0.5%。
- 終值佔總估值比重：N/A（基準情境）。因 FCF、net debt、shares outstanding 與現價不可得，Python DCF 計算輸出為 null。
- EV/EBITDA fallback：不適用；缺少 NYMEX 獨立 EBITDA、market cap、net debt 與 shares outstanding。

## 結論

NYMEX 無法作為單一獨立上市 ticker 執行 DCF 估值；必要財務資料不足，因此本報告不產生內在價值或安全邊際判斷。若要估值其母公司，應另以 CME Group Inc. 的 ticker `CME` 重新執行獨立 DCF。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
