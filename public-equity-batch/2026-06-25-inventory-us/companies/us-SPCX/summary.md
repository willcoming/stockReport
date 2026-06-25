# SPCX 太空探索科技公司 PEI 摘要

## 研究快照

- 研究姿態：Not decision-ready
- 研究狀態：partial
- 目前價格：158.02 USD
- 價格時間：2026-06-25
- 來源：Stock inventory health-check current-price column (SPCX)

## PEI 做了什麼

- 這是 inventory-scope PEI artifact，庫存只定義研究宇宙。
- 模型投組基準為 100 units cash、long-only、no leverage。
- 沒有使用券商、股數、成本或個人持股比例做模型部位 sizing。
- 本檔尚未完成完整官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。

## 庫存健檢脈絡

- 健檢動作：賣出
- 健檢理由：低流動性/事件交易與估值風險高，PEI 風控為 exit。
- 近一週觸發：近一週未觸發買進/賣出
- 短線情境：APEX 偏空：多/空/震盪 15/45/40；warn 172.11；break 149.34
- 失效條件：PEI：估值與現金流無法由官方資料支持，或低流動性導致無法控風險。；APEX：收盤跌破 149.34；低於 172.11 後無法收復則提高風控。

## 產業前景與炒作風險

- 產業 Gate：目前偏題材，缺公司級落地證據
- 炒作風險：低
- 摘要：Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=庫存回補 / 週期復甦；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。
- 缺失證據：SEC company tickers 未命中或 SEC_USER_AGENT 未設定；近 7 日公開新聞熱度未命中或未抓取；缺少明確後續產業 KPI；缺少公司級官方營收、訂單、財報或法說支撐

## 模型投組風險計畫

- 模型部位：0%; not decision-ready for model portfolio
- 風險預算：0.0
- 下檔/停損距離：not independently verified in inventory-scope batch
- 流動性上限：not independently verified
- 避險姿態：No hedge; model portfolio remains cash for this name until evidence clears
- 加碼規則：Open or add only after full PEI specialist workflow confirms thesis, trigger, price context, liquidity, and risk/reward
- 減碼規則：低流動性/事件交易與估值風險高，PEI 風控為 exit。
- 退出規則：PEI：估值與現金流無法由官方資料支持，或低流動性導致無法控風險。；APEX：收盤跌破 149.34；低於 172.11 後無法收復則提高風控。
- 最大損失姿態：0 units at risk because inventory-scope model size is 0%
- 追蹤頻率：Daily price and weekly fundamentals while held in inventory watch universe

## 缺失證據

- 本 inventory-scope PEI 批次未逐檔執行完整官方 filings、法說、consensus、估值模型與流動性模型查核
- 個人庫存僅用於定義研究宇宙；模型投組 sizing 未使用券商、股數或成本
- 需以公司公告、交易所/SEC 文件與正式 PEI specialist workflow 補強後，才可升級為 decision-ready
- 健康檢查已標示風險控管動作，模型投組維持 0%
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
