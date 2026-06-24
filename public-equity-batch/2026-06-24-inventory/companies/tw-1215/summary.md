# 1215 卜蜂 PEI 摘要

## 研究快照

- 研究姿態：Watch only
- 研究狀態：partial
- 目前價格：115 TWD
- 價格時間：2026-06-24T00:00:00+08:00
- 來源：Yahoo Finance via yfinance (1215.TW)

## PEI 做了什麼

- 這是 inventory-scope PEI artifact，庫存只定義研究宇宙。
- 模型投組基準為 100 units cash、long-only、no leverage。
- 沒有使用券商、股數、成本或個人持股比例做模型部位 sizing。
- 本檔尚未完成完整官方 filings、法說、consensus、估值模型、流動性與風險報酬 tie-out。

## 庫存健檢脈絡

- 健檢動作：續抱
- 健檢理由：長期股息底倉規則未破，先續抱但不加碼。
- 近一週觸發：近一週未觸發買進/賣出
- 短線情境：APEX 震盪：多/空/震盪 35/25/40；warn 114.5；break 112
- 失效條件：PEI：股利政策或盈餘/現金流不足以支撐長期股息配置，或配置上限被明確觸發。；APEX：跌破 112，或反彈後仍無法重新站回 114.5 以上。

## 模型投組風險計畫

- 模型部位：0%; inventory-holding context only, no model position opened
- 風險預算：0.0
- 下檔/停損距離：not independently verified in inventory-scope batch
- 流動性上限：not independently verified
- 避險姿態：No hedge; model portfolio remains cash for this name until evidence clears
- 加碼規則：Open or add only after full PEI specialist workflow confirms thesis, trigger, price context, liquidity, and risk/reward
- 減碼規則：長期股息底倉規則未破，先續抱但不加碼。
- 退出規則：PEI：股利政策或盈餘/現金流不足以支撐長期股息配置，或配置上限被明確觸發。；APEX：跌破 112，或反彈後仍無法重新站回 114.5 以上。
- 最大損失姿態：0 units at risk because inventory-scope model size is 0%
- 追蹤頻率：Daily price and weekly fundamentals while held in inventory watch universe

## 缺失證據

- 本 inventory-scope PEI 批次未逐檔執行完整官方 filings、法說、consensus、估值模型與流動性模型查核
- 個人庫存僅用於定義研究宇宙；模型投組 sizing 未使用券商、股數或成本
- 需以公司公告、交易所/SEC 文件與正式 PEI specialist workflow 補強後，才可升級為 decision-ready

## 原始檔案

- [source_ledger.json](source_ledger.json)
- [tearsheet.html](tearsheet.html)
- [initiation.html](initiation.html)
- [risk_plan.html](risk_plan.html)
