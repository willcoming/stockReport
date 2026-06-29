# TSM TSMC ADR PEI 摘要

## 研究快照

- 研究姿態：Wait for trigger
- 研究狀態：partial
- 目前價格：432.35 USD
- 價格時間：2026-06-26T20:00:02Z
- 價格來源：yahoo_finance_chart_api:query2.finance.yahoo.com
- 來源分類：wait_entry

## KOL/news 來源脈絡

- 來源主觀看法：中性觀察
- 布局建議：等 7 月中旬法說會與 EPS/Capex 指引，不以高溢價追價
- 持倉建議：持有者需控管估值收斂風險；空手者等待明確回測或財報上修
- 追蹤指標：EPS 是否上修至 105-110 元區間、ADR 溢價、本益比
- 風險：若財報未超預期，ADR 25-30 倍估值可能收斂

## 產業前景與炒作風險

- 產業 Gate：目前偏題材，缺公司級落地證據
- 炒作風險：低
- 摘要：Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=AI / 資料中心、庫存回補 / 週期復甦；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。
- 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定；近 7 日公開新聞熱度未命中或未抓取；缺少明確後續產業 KPI；缺少公司級官方營收、訂單、財報或法說支撐

## 模型投組風險計畫

- 模型部位：0% pre-trigger; reassess only after trigger and full PEI evidence
- 風險預算：0.0
- 下檔/停損距離：not independently verified in report-scope PEI artifact
- 流動性上限：not independently verified
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
- 產業 thesis Gate=目前偏題材，缺公司級落地證據；炒作風險=低
- 產業 thesis 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 產業 thesis 缺失證據：缺少明確後續產業 KPI
- 產業 thesis 缺失證據：缺少公司級官方營收、訂單、財報或法說支撐

## 原始檔案

- [source_ledger.json](source_ledger.json)
- [tearsheet.html](tearsheet.html)
- [initiation.html](initiation.html)
- [risk_plan.html](risk_plan.html)
