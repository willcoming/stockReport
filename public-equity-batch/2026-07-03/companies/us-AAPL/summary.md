# AAPL Apple PEI 摘要

## 研究快照

- 研究姿態：Wait for trigger
- 研究狀態：partial
- 估值狀態：not_run
- 風控狀態：not_run
- 目前價格：308.63 USD
- 價格時間：2026-07-02T20:00:01Z
- 價格來源：yahoo_finance_chart_api:query2.finance.yahoo.com
- 來源分類：wait_entry
- 3M/12M/3Y 研究狀態：partial

## KOL/news 來源脈絡

- 來源主觀看法：中性觀察
- 布局建議：等摺疊機與供應鏈驗證
- 持倉建議：觀望
- 追蹤指標：摺疊機、記憶體採購
- 風險：供應鏈爭議

## 產業前景與炒作風險

- 產業 Gate：目前偏題材，缺公司級落地證據
- 炒作風險：低
- 摘要：Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=庫存回補 / 週期復甦；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。
- 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定；近 7 日公開新聞熱度未命中或未抓取；缺少明確後續產業 KPI；缺少公司級官方營收、訂單、財報或法說支撐

## 3 個月到 3 年投資視角

- 3 個月：Report-scope artifact uses source-report setup, current quote handoff, and local StockLoop evidence as a timing/risk screen only; 3-month catalyst path is not fully underwritten.
- 12 個月：Requires official filings, earnings-call commentary, consensus/estimate context, and valuation work before a 12-month PEI view can be decision-ready.
- 3 年：Requires full PEI specialist research or source-backed company/industry underwrite before a 3-year ownership thesis can be decision-ready.
- 主要否定條件：Official revenue, margin, EPS, cash-flow, order, or management commentary contradicts the source-report setup.; Current valuation already prices the optimistic case without margin of safety.; Liquidity, downside distance, or risk budget cannot support model-portfolio sizing.

## 模型投組風險計畫

- 模型部位：0% pre-trigger; reassess only after trigger and full PEI evidence
- 風險預算：0.0
- 下檔/停損距離：20d_low distance 11.3%; 20D low 273.75 (input only; PM must verify)
- 流動性上限：20D avg trade value 20,168,108,186.05; PM must define liquidity cap
- 避險姿態：No hedge; model portfolio remains cash for this name until evidence clears
- 加碼規則：Open or add only after full PEI specialist workflow confirms thesis, trigger, current price context, liquidity, and risk/reward
- 減碼規則：Trim or keep watch-only if source thesis, price trigger, or company-level evidence weakens
- 退出規則：Exit/watch-only if thesis evidence fails, price trigger fails, or official evidence contradicts KOL/news setup
- 最大損失姿態：0 units at risk because model size is 0% in this partial artifact
- 追蹤頻率：Daily price and weekly fundamentals while in report-scope watch universe

## 缺失證據

- 本 report-scope PEI artifact 由 StockLoop 本地 KOL/news、industry thesis 與 quote ledger 生成；尚未逐檔執行完整 Public Equity Investing specialist research
- 尚缺官方 filings / 年報 / 法說 transcript / IR presentation 查核
- 尚缺 consensus、估值模型、流動性模型、downside/stop distance 與完整風險報酬 tie-out
- valuation_status=not_run；不得解讀為 decision-ready 或個人化投資建議
- 官方公司/證券身分驗證未完成
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐
- 估值 handoff 缺失：valuation multiples missing
- 官方證據 handoff 缺失：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 官方證據 handoff 缺失：缺少公司級官方營收、訂單、財報或法說支撐

## 原始檔案

- [source_ledger.json](source_ledger.json)
- [tearsheet.html](tearsheet.html)
- [initiation.html](initiation.html)
- [risk_plan.html](risk_plan.html)
