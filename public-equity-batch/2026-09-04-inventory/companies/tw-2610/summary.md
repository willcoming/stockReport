# 2610 華航 PEI 摘要

## 研究快照

- 研究姿態：Wait for trigger
- 研究狀態：partial
- 估值狀態：not_run
- 風控狀態：not_run
- 目前價格：20.55 TWD
- 價格時間：2026-09-03
- 來源：twse_official_latest_close (2610)
- 3M/12M/3Y 研究狀態：partial

## PEI 做了什麼

- 這是 inventory-scope PEI artifact，庫存只定義研究宇宙。
- 模型投組基準為 100 units cash、long-only、no leverage。
- 沒有使用券商、股數、成本或個人持股比例做模型部位 sizing。
- 本檔尚未完成完整官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。

## 庫存健檢脈絡

- 健檢動作：觀察
- 健檢理由：觀察評級；產業月營收改善不足以解除油價與資本開支風險
- 近一週觸發：2026-09-03 買進：3MA；2026-08-28 賣出：觸及賣點數 2
- 短線情境：warn；現價 20.55；20K high 22.55／5%觀察 21.42／10%停損 20.30；價格來源 twse_official_latest_close 2026-09-03
- 失效條件：評級下調訊號：載客率與票價同降；貨運量價轉弱；油價與工資無法轉嫁；事故／停飛或地緣事件；FCF 長期為負且增發／高成本融資。；価格監控：跌破 21.42 為觀察、20.30 為停損警示；價格狀態本身不改變研究評級

## 產業前景與炒作風險

- 產業 Gate：產業順風且公司證據較完整
- 炒作風險：低
- 摘要：Gate=產業順風且公司證據較完整；炒作風險=低；成長驅動=庫存回補 / 週期復甦；產業驅動與公司級官方資料同時支持，仍需追蹤估值與毛利是否兌現。
- 缺失證據：近 7 日公開新聞熱度未命中或未抓取；缺少明確後續產業 KPI

## 3 個月到 3 年投資視角

- 3 個月：Inventory-scope artifact uses health-check, K-line, and APEX context as a timing/risk screen only; 3-month thesis is not fully underwritten.
- 12 個月：Requires official filings, earnings-call commentary, consensus/estimate context, and valuation work before a 12-month PEI view can be decision-ready.
- 3 年：Requires full PEI specialist research or source-backed industry/company underwrite before a 3-year ownership thesis can be decision-ready.
- 主要否定條件：Official revenue, margin, EPS, cash-flow, order, or management commentary weakens the thesis.; Current valuation already prices the optimistic case without margin of safety.; Liquidity, downside distance, or risk budget cannot support model-portfolio sizing.

## 模型投組風險計畫

- 模型部位：0% pre-trigger; reassess after trigger and evidence review
- 風險預算：0.0
- 下檔/停損距離：20d_low distance 3.41%; 20D low 19.85 (input only; PM must verify)
- 流動性上限：20D avg trade value 669,038,022.85; PM must define liquidity cap
- 避險姿態：No hedge; model portfolio remains cash for this name until evidence clears
- 加碼規則：Open or add only after full PEI specialist workflow confirms thesis, trigger, price context, liquidity, and risk/reward
- 減碼規則：觀察評級；產業月營收改善不足以解除油價與資本開支風險
- 退出規則：評級下調訊號：載客率與票價同降；貨運量價轉弱；油價與工資無法轉嫁；事故／停飛或地緣事件；FCF 長期為負且增發／高成本融資。；価格監控：跌破 21.42 為觀察、20.30 為停損警示；價格狀態本身不改變研究評級
- 最大損失姿態：0 units at risk because inventory-scope model size is 0%
- 追蹤頻率：Daily price and weekly fundamentals while held in inventory watch universe

## 缺失證據

- 本 inventory-scope PEI 批次未逐檔執行完整官方 filings、法說、consensus、估值模型與流動性模型查核
- 個人庫存僅用於定義研究宇宙；模型投組 sizing 未使用券商、股數或成本
- 需以公司公告、交易所/SEC 文件與正式 PEI specialist workflow 補強後，才可升級為 decision-ready
- 產業 thesis Gate=產業順風且公司證據較完整；炒作風險=低
- 產業 thesis 缺失證據：近 7 日公開新聞熱度未命中或未抓取
- 產業 thesis 缺失證據：缺少明確後續產業 KPI

## 原始檔案

- [source_ledger.json](source_ledger.json)
- [tearsheet.html](tearsheet.html)
- [initiation.html](initiation.html)
- [risk_plan.html](risk_plan.html)
