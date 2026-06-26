# GEN Gen Digital Inc. - Common Stock PEI 摘要

## Research Snapshot / 研究快照

- 研究標籤：Wait for trigger
- 研究狀態：partial
- 估值狀態：not_run
- Current price / 目前價格：0.01 USD
- 價格時間：2026-06-26 market close
- 價格來源：StockLoop source report; price numeric fallback for incomplete upstream quote
- 分類：現在不能買，但值得等買點名單
- 產出時間：2026-06-27 06:48:47

## PEI 做了什麼

- 讀取來源報告產生的 PEI universe item、source ledger、啟動覆蓋報告與風險計畫。
- 將每檔整理為可點擊摘要，連回 source_ledger、tearsheet、initiation 與 risk_plan。
- 研究標籤是模型投組研究姿態，不是個人化交易指示。

## 模型投組風險計畫

- 模型部位：0% pre-trigger; reassess after trigger and evidence review
- 風險預算：0.50% post-trigger risk budget only after evidence review
- 下檔/停損距離：未完成停損/下檔距離 tie-out，暫不計入可執行 sizing
- 流動性上限：未完成平均成交額與滑價上限 tie-out，暫不計入可執行 sizing
- 避險姿態：long-only model portfolio; no leverage
- 加碼規則：只有在官方證據、技術續強與風險報酬同時通過後才重新評估
- 減碼規則：若後續量價失效、題材證據未補齊或大盤風險升高，維持 0% 或移出候選
- 退出規則：本批次未建立模型部位；若已在其他流程持有，需另以持倉規則處理
- 最大損失姿態：本批次模型部位 0%，不設定個人化停損
- 追蹤頻率：下一個完整 K-line scan 後覆核

## 缺失證據

- 未執行完整 Public Equity Investing specialist 官方 filings 與財報逐項查核
- 未執行 consensus / valuation model tie-out，本流程 valuation_status=not_run
- 尚未取得公司級官方營收、訂單、法說或管理層證據來驗證題材
- 尚未完成流動性上限、停損距離與風險報酬的完整外部資料交叉驗證

## 來源

- StockLoop US K-line decision report（2026-06-26）：reports/usStock/2026-06-26_us_kline_decision_report.md
- StockLoop US K-line daily report（2026-06-26）：usStock/reports/2026-06-26.md

## 原始檔案

- [source_ledger.json](source_ledger.json)
- [tearsheet.html](tearsheet.html)
- [initiation.html](initiation.html)
- [risk_plan.html](risk_plan.html)
