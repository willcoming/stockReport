# PE — DCF 估值報告

as_of_date: 2026-05-09  
projection_years: 5

## DCF 估值結果

| 情境 | FCF 成長率 (yr1-5) | 終值成長率 | WACC | 內在價值/股 | 現價 | 安全邊際 |
|------|-----------------|----------|------|-----------|------|---------|
| 悲觀 | N/A | 1.5% | N/A | N/A | N/A | N/A |
| 基準 | N/A | 2.5% | N/A | N/A | N/A | N/A |
| 樂觀 | N/A | 3.5% | N/A | N/A | N/A | N/A |

> 安全邊際 = (內在價值 - 現價) / 現價 x 100%

## 數據來源

| 項目 | 數值 | 來源 |
|------|------|------|
| 標的辨識 | Parsley Energy, Inc.，曾以 NYSE: PE 交易 | [SEC filing](https://www.sec.gov/Archives/edgar/data/1038357/000103835721000033/proformapxdpedpt2021.htm) |
| 上市狀態 | 已於 2021-01-12 被 Pioneer Natural Resources 收購，PE 不再是活躍上市 ticker | [BusinessWire](https://www.businesswire.com/news/home/20210112005984/en/Pioneer-Natural-Resources-Completes-Acquisition-of-Parsley-Energy-Following-Stockholder-Approvals), [SEC filing](https://www.sec.gov/Archives/edgar/data/1038357/000103835721000033/proformapxdpedpt2021.htm) |
| 最近一年 FCF | 資料不足 | PE 已不再有 2026 年獨立上市公司財報 |
| 5yr FCF CAGR | 資料不足 | 無可用的 2021-2025 獨立 PE FCF 序列 |
| Beta | 資料不足 | PE 已不再有有效上市交易資料 |
| Net Debt | 資料不足 | PE 已併入 Pioneer，無 2026 年獨立資產負債表 |
| 流通股數 | 資料不足 | PE 已不再有有效流通股數 |
| 無風險利率 (10Y) | 4.38% | [U.S. Treasury Daily Treasury Rates, 2026-05-08](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve) |
| WACC | 資料不足 | Beta 不可用，且標的非活躍上市公司 |
| 現價 | 資料不足 | PE 已不再是活躍上市 ticker |

## 關鍵假設說明

- FCF 成長率來源：資料不足。PE 已於 2021-01-12 被 Pioneer Natural Resources 收購，無法取得 2026-05-09 作為獨立上市公司的最近一年 FCF 與 5 年 FCF CAGR。
- WACC 組成：無風險利率 4.38% 可得，但 Beta 不可用；因此無法計算 risk_free + Beta x 5.5% ERP。
- 終值佔總估值比重：N/A。因 DCF 無法計算，無法評估 terminal value sensitivity。
- Bash/Python 計算結果：因 fcf_base、growth、wacc、net_debt、shares、price 均缺失，三情境 intrinsic value 回傳 N/A。

## 結論

PE 不是 2026-05-09 的活躍上市 ticker；它對應的 Parsley Energy 已於 2021 年被 Pioneer Natural Resources 收購。因此，本次無法建立可靠的獨立 DCF 或安全邊際判斷。若要估值目前可交易的相關資產，應改用有效上市 ticker。

---

⚠️ **免責聲明：** 本報告根據公開財務數據以 DCF 模型計算，為教育性研究，**不構成投資建議**、
不是招攬、不是交易指示。DCF 估值對假設高度敏感，實際結果可能大幅偏離。
請自行查證並諮詢合格理財顧問後再做任何投資決策。
