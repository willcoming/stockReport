# 3231 緯創 PEI 摘要

## 研究快照

- 研究姿態：Watch only
- 研究狀態：partial
- 目前價格：153.5 TWD
- 價格時間：2026-06-26
- 來源：Stock inventory health-check current-price column (3231)

## PEI 做了什麼

- 這是 inventory-scope PEI artifact，庫存只定義研究宇宙。
- 模型投組基準為 100 units cash、long-only、no leverage。
- 沒有使用券商、股數、成本或個人持股比例做模型部位 sizing。
- 本檔尚未完成完整官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。

## 庫存健檢脈絡

- 健檢動作：減碼
- 健檢理由：價格進入 APEX warn 區或既有風控名單，反彈不追，先降低部位風險。
- 近一週觸發：2026-06-25 買進：LZEMA20/3MA；2026-06-23 賣出：觸及賣點數 2
- 短線情境：APEX 接近預警；多/空/震盪 30/30/40%；warn 160.5；break 150.5
- 失效條件：PEI：官方營收、毛利、估值或 thesis 證據轉弱需重估；APEX：warn 160.5；break 150.5；跌破 break 或低於 warn 後無法收復則提高風控。

## 產業前景與炒作風險

- 產業 Gate：尚未接入
- 炒作風險：未知
- 摘要：尚未產出公司級產業 thesis
- 缺失證據：無

## 模型投組風險計畫

- 模型部位：0%; watch only until thesis and risk evidence improve
- 風險預算：0.0
- 下檔/停損距離：not independently verified in inventory-scope batch
- 流動性上限：not independently verified
- 避險姿態：No hedge; model portfolio remains cash for this name until evidence clears
- 加碼規則：Open or add only after full PEI specialist workflow confirms thesis, trigger, price context, liquidity, and risk/reward
- 減碼規則：價格進入 APEX warn 區或既有風控名單，反彈不追，先降低部位風險。
- 退出規則：PEI：官方營收、毛利、估值或 thesis 證據轉弱需重估；APEX：warn 160.5；break 150.5；跌破 break 或低於 warn 後無法收復則提高風控。
- 最大損失姿態：0 units at risk because inventory-scope model size is 0%
- 追蹤頻率：Daily price and weekly fundamentals while held in inventory watch universe

## 缺失證據

- 本 inventory-scope PEI 批次未逐檔執行完整官方 filings、法說、consensus、估值模型與流動性模型查核
- 個人庫存僅用於定義研究宇宙；模型投組 sizing 未使用券商、股數或成本
- 需以公司公告、交易所/SEC 文件與正式 PEI specialist workflow 補強後，才可升級為 decision-ready
- 健康檢查已標示風險控管動作，模型投組維持 0%

## 原始檔案

- [source_ledger.json](source_ledger.json)
- [tearsheet.html](tearsheet.html)
- [initiation.html](initiation.html)
- [risk_plan.html](risk_plan.html)
