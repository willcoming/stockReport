# RKLB Rocket Lab Corp PEI 摘要

## 研究快照

- 研究姿態：Wait for trigger
- 研究狀態：partial
- 估值狀態：not_run
- 風控狀態：not_run
- 目前價格：67.62 USD
- 價格時間：2026-07-17T20:00:00Z
- 來源：yahoo_finance_chart_api:query2.finance.yahoo.com (RKLB)
- 3M/12M/3Y 研究狀態：partial

## PEI 做了什麼

- 這是 inventory-scope PEI artifact，庫存只定義研究宇宙。
- 模型投組基準為 100 units cash、long-only、no leverage。
- 沒有使用券商、股數、成本或個人持股比例做模型部位 sizing。
- 本檔尚未完成完整官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。

## 庫存健檢脈絡

- 健檢動作：觀察
- 健檢理由：研究或產業證據不足以支持加碼，維持觀察。
- 近一週觸發：近一週未觸發買進/賣出
- 短線情境：APEX 價格監控：接近20日低點預警 80.64, 跌破20日低點 79.06。
- 失效條件：若 thesis/估值/技術證據轉弱，或後續 APEX 有有效破位價，需重估。

## 產業前景與炒作風險

- 產業 Gate：目前偏題材，缺公司級落地證據
- 炒作風險：低
- 摘要：Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=庫存回補 / 週期復甦；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。
- 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定；近 7 日公開新聞熱度未命中或未抓取；缺少明確後續產業 KPI；缺少公司級官方營收、訂單、財報或法說支撐

## 3 個月到 3 年投資視角

- 3 個月：Inventory-scope artifact uses health-check, K-line, and APEX context as a timing/risk screen only; 3-month thesis is not fully underwritten.
- 12 個月：Requires official filings, earnings-call commentary, consensus/estimate context, and valuation work before a 12-month PEI view can be decision-ready.
- 3 年：Requires full PEI specialist research or source-backed industry/company underwrite before a 3-year ownership thesis can be decision-ready.
- 主要否定條件：Official revenue, margin, EPS, cash-flow, order, or management commentary weakens the thesis.; Current valuation already prices the optimistic case without margin of safety.; Liquidity, downside distance, or risk budget cannot support model-portfolio sizing.

## 模型投組風險計畫

- 模型部位：0% pre-trigger; reassess after trigger and evidence review
- 風險預算：0.0
- 下檔/停損距離：20d_low distance 4.6%; 20D low 64.51 (input only; PM must verify)
- 流動性上限：20D avg trade value 2,378,145,000.65; PM must define liquidity cap
- 避險姿態：No hedge; model portfolio remains cash for this name until evidence clears
- 加碼規則：Open or add only after full PEI specialist workflow confirms thesis, trigger, price context, liquidity, and risk/reward
- 減碼規則：研究或產業證據不足以支持加碼，維持觀察。
- 退出規則：若 thesis/估值/技術證據轉弱，或後續 APEX 有有效破位價，需重估。
- 最大損失姿態：0 units at risk because inventory-scope model size is 0%
- 追蹤頻率：Daily price and weekly fundamentals while held in inventory watch universe

## 缺失證據

- 本 inventory-scope PEI 批次未逐檔執行完整官方 filings、法說、consensus、估值模型與流動性模型查核
- 個人庫存僅用於定義研究宇宙；模型投組 sizing 未使用券商、股數或成本
- 需以公司公告、交易所/SEC 文件與正式 PEI specialist workflow 補強後，才可升級為 decision-ready
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
