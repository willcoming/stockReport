# StockLoop PEI 完整批次報告 2026-06-22

- 產出時間：2026-06-23 08:06:07
- 標的池檔數：125
- 已具備目前價格與研究狀態的列數：125
- 來源報告：reports/twStock/2026-06-22_tw_kline_decision_report.md, reports/usStock/2026-06-22_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的皆已具備必要的公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

**決策解讀：** 目前沒有任何標的達到模型投組可配置狀態；「現在可以買」技術篩選標的維持 `Watch only`，「等待買點」標的維持 `Wait for trigger`；必須等基本面、技術觸發與風險報酬都具備來源支持後，才可升級研究標籤。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 64 |
| 市場 | us | 61 |
| 分類 | 現在可以買名單 | 26 |
| 分類 | 現在不能買，但值得等買點名單 | 99 |
| 研究標籤 | Wait for trigger（等待觸發） | 99 |
| 研究標籤 | Watch only（僅觀察） | 26 |
| 估值狀態 | not_run（本流程未執行估值模型） | 125 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- WACC、終值成長率與退出倍數假設尚未有來源支持
- 尚未取得以申報文件為基礎的稀釋股數與淨負債橋接
- 本次批次尚未匯入最新申報損益表、資產負債表與現金流量表
- 尚未取得管理層指引或市場共識預估路徑
- 尚未取得標準化營收、EBIT、稅率、折舊攤銷、資本支出、營運資金與自由現金流歷史

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 估值狀態 | 模型部位 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1717 | 長興 | 現在可以買名單 | Watch only（僅觀察） | 74.7 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-1717/risk_plan.html) | [啟動報告](companies/tw-1717/initiation.html) |
| 2301 | 光寶科 | 現在可以買名單 | Watch only（僅觀察） | 231.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-2301/risk_plan.html) | [啟動報告](companies/tw-2301/initiation.html) |
| 2345 | 智邦 | 現在可以買名單 | Watch only（僅觀察） | 2595.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-2345/risk_plan.html) | [啟動報告](companies/tw-2345/initiation.html) |
| 2609 | 陽明 | 現在可以買名單 | Watch only（僅觀察） | 52.3 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-2609/risk_plan.html) | [啟動報告](companies/tw-2609/initiation.html) |
| 3028 | 增你強 | 現在可以買名單 | Watch only（僅觀察） | 82.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-3028/risk_plan.html) | [啟動報告](companies/tw-3028/initiation.html) |
| 3135 | 凌航 | 現在可以買名單 | Watch only（僅觀察） | 207.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-3135/risk_plan.html) | [啟動報告](companies/tw-3135/initiation.html) |
| 4526 | 東台 | 現在可以買名單 | Watch only（僅觀察） | 43.05 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-4526/risk_plan.html) | [啟動報告](companies/tw-4526/initiation.html) |
| 4906 | 正文 | 現在可以買名單 | Watch only（僅觀察） | 47.65 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-4906/risk_plan.html) | [啟動報告](companies/tw-4906/initiation.html) |
| 5871 | 中租-KY | 現在可以買名單 | Watch only（僅觀察） | 118.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-5871/risk_plan.html) | [啟動報告](companies/tw-5871/initiation.html) |
| 6830 | 汎銓 | 現在可以買名單 | Watch only（僅觀察） | 608.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-6830/risk_plan.html) | [啟動報告](companies/tw-6830/initiation.html) |
| 8033 | 雷虎 | 現在可以買名單 | Watch only（僅觀察） | 142.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-8033/risk_plan.html) | [啟動報告](companies/tw-8033/initiation.html) |
| 8070 | 長華* | 現在可以買名單 | Watch only（僅觀察） | 56.9 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/tw-8070/risk_plan.html) | [啟動報告](companies/tw-8070/initiation.html) |
| ABBV | AbbVie Inc. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 230.01 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-ABBV/risk_plan.html) | [啟動報告](companies/us-ABBV/initiation.html) |
| AEP | American Electric Power Company | 現在可以買名單 | Watch only（僅觀察） | 130.3 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-AEP/risk_plan.html) | [啟動報告](companies/us-AEP/initiation.html) |
| AMGN | Amgen Inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 344.72 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-AMGN/risk_plan.html) | [啟動報告](companies/us-AMGN/initiation.html) |
| CWAN | Clearwater Analytics Holdings | 現在可以買名單 | Watch only（僅觀察） | 24.53 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-CWAN/risk_plan.html) | [啟動報告](companies/us-CWAN/initiation.html) |
| EA | Electronic Arts Inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 202.97 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-EA/risk_plan.html) | [啟動報告](companies/us-EA/initiation.html) |
| KMI | Kinder Morgan | 現在可以買名單 | Watch only（僅觀察） | 32.25 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-KMI/risk_plan.html) | [啟動報告](companies/us-KMI/initiation.html) |
| NOK | Nokia Corporation Sponsored American Depositary Shares | 現在可以買名單 | Watch only（僅觀察） | 14.43 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-NOK/risk_plan.html) | [啟動報告](companies/us-NOK/initiation.html) |
| NVO | Novo Nordisk A | 現在可以買名單 | Watch only（僅觀察） | 45.88 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-NVO/risk_plan.html) | [啟動報告](companies/us-NVO/initiation.html) |
| PLD | Prologis | 現在可以買名單 | Watch only（僅觀察） | 143.83 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-PLD/risk_plan.html) | [啟動報告](companies/us-PLD/initiation.html) |
| SMCI | Super Micro Computer | 現在可以買名單 | Watch only（僅觀察） | 35.46 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-SMCI/risk_plan.html) | [啟動報告](companies/us-SMCI/initiation.html) |
| VIAV | Viavi Solutions Inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 52.94 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-VIAV/risk_plan.html) | [啟動報告](companies/us-VIAV/initiation.html) |
| WBD | Warner Bros. Discovery | 現在可以買名單 | Watch only（僅觀察） | 26.95 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-WBD/risk_plan.html) | [啟動報告](companies/us-WBD/initiation.html) |
| WELL | Welltower Inc. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 211.45 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-WELL/risk_plan.html) | [啟動報告](companies/us-WELL/initiation.html) |
| XEL | Xcel Energy Inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 78.81 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-XEL/risk_plan.html) | [啟動報告](companies/us-XEL/initiation.html) |
| 1504 | 東元 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 72.2 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-1504/risk_plan.html) | [啟動報告](companies/tw-1504/initiation.html) |
| 1536 | 和大 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 51.6 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-1536/risk_plan.html) | [啟動報告](companies/tw-1536/initiation.html) |
| 1710 | 東聯 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.15 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-1710/risk_plan.html) | [啟動報告](companies/tw-1710/initiation.html) |
| 1711 | 永光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 49.55 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-1711/risk_plan.html) | [啟動報告](companies/tw-1711/initiation.html) |
| 1721 | 三晃 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 26.15 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-1721/risk_plan.html) | [啟動報告](companies/tw-1721/initiation.html) |
| 1727 | 中華化 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 102.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-1727/risk_plan.html) | [啟動報告](companies/tw-1727/initiation.html) |
| 1810 | 和成 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 21.35 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-1810/risk_plan.html) | [啟動報告](companies/tw-1810/initiation.html) |
| 2049 | 上銀 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 343.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2049/risk_plan.html) | [啟動報告](companies/tw-2049/initiation.html) |
| 2208 | 台船 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 18.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2208/risk_plan.html) | [啟動報告](companies/tw-2208/initiation.html) |
| 2233 | 宇隆 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 315.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2233/risk_plan.html) | [啟動報告](companies/tw-2233/initiation.html) |
| 2308 | 台達電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2150.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2308/risk_plan.html) | [啟動報告](companies/tw-2308/initiation.html) |
| 2317 | 鴻海 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 268.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2317/risk_plan.html) | [啟動報告](companies/tw-2317/initiation.html) |
| 2329 | 華泰 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 58.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2329/risk_plan.html) | [啟動報告](companies/tw-2329/initiation.html) |
| 2355 | 敬鵬 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 58.7 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2355/risk_plan.html) | [啟動報告](companies/tw-2355/initiation.html) |
| 2359 | 所羅門 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 136.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2359/risk_plan.html) | [啟動報告](companies/tw-2359/initiation.html) |
| 2360 | 致茂 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2310.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2360/risk_plan.html) | [啟動報告](companies/tw-2360/initiation.html) |
| 2371 | 大同 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 28.15 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2371/risk_plan.html) | [啟動報告](companies/tw-2371/initiation.html) |
| 2399 | 映泰 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 51.6 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2399/risk_plan.html) | [啟動報告](companies/tw-2399/initiation.html) |
| 2406 | 國碩 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.6 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2406/risk_plan.html) | [啟動報告](companies/tw-2406/initiation.html) |
| 2420 | 新巨 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 64.2 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2420/risk_plan.html) | [啟動報告](companies/tw-2420/initiation.html) |
| 2421 | 建準 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 150.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2421/risk_plan.html) | [啟動報告](companies/tw-2421/initiation.html) |
| 2474 | 可成 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 206.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2474/risk_plan.html) | [啟動報告](companies/tw-2474/initiation.html) |
| 2498 | 宏達電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 50.4 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2498/risk_plan.html) | [啟動報告](companies/tw-2498/initiation.html) |
| 2605 | 新興 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 31.95 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2605/risk_plan.html) | [啟動報告](companies/tw-2605/initiation.html) |
| 2630 | 亞航 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 42.9 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-2630/risk_plan.html) | [啟動報告](companies/tw-2630/initiation.html) |
| 3010 | 華立 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 131.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-3010/risk_plan.html) | [啟動報告](companies/tw-3010/initiation.html) |
| 3017 | 奇鋐 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 2420.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-3017/risk_plan.html) | [啟動報告](companies/tw-3017/initiation.html) |
| 3031 | 佰鴻 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 30.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-3031/risk_plan.html) | [啟動報告](companies/tw-3031/initiation.html) |
| 3338 | 泰碩 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 75.8 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-3338/risk_plan.html) | [啟動報告](companies/tw-3338/initiation.html) |
| 3376 | 新日興 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 209.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-3376/risk_plan.html) | [啟動報告](companies/tw-3376/initiation.html) |
| 3380 | 明泰 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 35.8 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-3380/risk_plan.html) | [啟動報告](companies/tw-3380/initiation.html) |
| 3518 | 柏騰 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 30.9 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-3518/risk_plan.html) | [啟動報告](companies/tw-3518/initiation.html) |
| 3645 | 達邁 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 96.1 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-3645/risk_plan.html) | [啟動報告](companies/tw-3645/initiation.html) |
| 4540 | 全球傳動 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 62.1 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-4540/risk_plan.html) | [啟動報告](companies/tw-4540/initiation.html) |
| 4576 | 大銀微系統 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 236.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-4576/risk_plan.html) | [啟動報告](companies/tw-4576/initiation.html) |
| 4763 | 材料*-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 45.6 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-4763/risk_plan.html) | [啟動報告](companies/tw-4763/initiation.html) |
| 4956 | 光鋐 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 39.65 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-4956/risk_plan.html) | [啟動報告](companies/tw-4956/initiation.html) |
| 4989 | 榮科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 94.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-4989/risk_plan.html) | [啟動報告](companies/tw-4989/initiation.html) |
| 5222 | 全訊 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 125.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-5222/risk_plan.html) | [啟動報告](companies/tw-5222/initiation.html) |
| 6205 | 詮欣 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 84.1 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-6205/risk_plan.html) | [啟動報告](companies/tw-6205/initiation.html) |
| 6206 | 飛捷 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 134.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-6206/risk_plan.html) | [啟動報告](companies/tw-6206/initiation.html) |
| 6282 | 康舒 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 63.9 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-6282/risk_plan.html) | [啟動報告](companies/tw-6282/initiation.html) |
| 6412 | 群電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 95.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-6412/risk_plan.html) | [啟動報告](companies/tw-6412/initiation.html) |
| 6426 | 統新 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 217.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-6426/risk_plan.html) | [啟動報告](companies/tw-6426/initiation.html) |
| 6579 | 研揚 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 167.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-6579/risk_plan.html) | [啟動報告](companies/tw-6579/initiation.html) |
| 6753 | 龍德造船 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 128.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-6753/risk_plan.html) | [啟動報告](companies/tw-6753/initiation.html) |
| 6768 | 志強-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 88.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-6768/risk_plan.html) | [啟動報告](companies/tw-6768/initiation.html) |
| 8028 | 昇陽半導體 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 322.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-8028/risk_plan.html) | [啟動報告](companies/tw-8028/initiation.html) |
| 8039 | 台虹 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 153.0 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-8039/risk_plan.html) | [啟動報告](companies/tw-8039/initiation.html) |
| 8422 | 可寧衛* | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 28.95 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-8422/risk_plan.html) | [啟動報告](companies/tw-8422/initiation.html) |
| 9914 | 美利達 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 73.4 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-9914/risk_plan.html) | [啟動報告](companies/tw-9914/initiation.html) |
| 9921 | 巨大 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 75.5 TWD | 2026-06-22 00:00:00+08:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/tw-9921/risk_plan.html) | [啟動報告](companies/tw-9921/initiation.html) |
| ACGL | Arch Capital Group Ltd. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 92.04 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-ACGL/risk_plan.html) | [啟動報告](companies/us-ACGL/initiation.html) |
| ADM | Archer-Daniels-Midland Company Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 76.29 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-ADM/risk_plan.html) | [啟動報告](companies/us-ADM/initiation.html) |
| AES | The AES Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.65 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-AES/risk_plan.html) | [啟動報告](companies/us-AES/initiation.html) |
| AIG | American International Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 76.37 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-AIG/risk_plan.html) | [啟動報告](companies/us-AIG/initiation.html) |
| AOS | A.O. Smith Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 58.69 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-AOS/risk_plan.html) | [啟動報告](companies/us-AOS/initiation.html) |
| AUR | Aurora Innovation | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.56 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-AUR/risk_plan.html) | [啟動報告](companies/us-AUR/initiation.html) |
| AXTI | AXT Inc - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 92.44 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-AXTI/risk_plan.html) | [啟動報告](companies/us-AXTI/initiation.html) |
| BB | BlackBerry Limited Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 8.79 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-BB/risk_plan.html) | [啟動報告](companies/us-BB/initiation.html) |
| BBIO | BridgeBio Pharma | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 68.92 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-BBIO/risk_plan.html) | [啟動報告](companies/us-BBIO/initiation.html) |
| BCRX | BioCryst Pharmaceuticals | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 9.14 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-BCRX/risk_plan.html) | [啟動報告](companies/us-BCRX/initiation.html) |
| BMRN | BioMarin Pharmaceutical Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 55.9 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-BMRN/risk_plan.html) | [啟動報告](companies/us-BMRN/initiation.html) |
| BULL | Webull Corporation - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.86 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-BULL/risk_plan.html) | [啟動報告](companies/us-BULL/initiation.html) |
| CCJ | Cameco Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 107.07 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-CCJ/risk_plan.html) | [啟動報告](companies/us-CCJ/initiation.html) |
| CDE | Coeur Mining | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 17.47 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-CDE/risk_plan.html) | [啟動報告](companies/us-CDE/initiation.html) |
| CNC | Centene Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 63.68 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-CNC/risk_plan.html) | [啟動報告](companies/us-CNC/initiation.html) |
| CNH | CNH Industrial N.V. Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.38 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-CNH/risk_plan.html) | [啟動報告](companies/us-CNH/initiation.html) |
| CRML | Critical Metals Corp. - Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.45 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-CRML/risk_plan.html) | [啟動報告](companies/us-CRML/initiation.html) |
| DOC | Healthpeak Properties | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.98 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-DOC/risk_plan.html) | [啟動報告](companies/us-DOC/initiation.html) |
| ED | Consolidated Edison | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 106.92 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-ED/risk_plan.html) | [啟動報告](companies/us-ED/initiation.html) |
| ENB | Enbridge Inc Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 54.8 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-ENB/risk_plan.html) | [啟動報告](companies/us-ENB/initiation.html) |
| HBM | Hudbay Minerals Inc. Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 27.91 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-HBM/risk_plan.html) | [啟動報告](companies/us-HBM/initiation.html) |
| HR | Healthcare Realty Trust Incorporated Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 20.16 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-HR/risk_plan.html) | [啟動報告](companies/us-HR/initiation.html) |
| HUT | Hut 8 Corp. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 121.04 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-HUT/risk_plan.html) | [啟動報告](companies/us-HUT/initiation.html) |
| IAG | Iamgold Corporation Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.91 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-IAG/risk_plan.html) | [啟動報告](companies/us-IAG/initiation.html) |
| INCY | Incyte Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 103.66 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-INCY/risk_plan.html) | [啟動報告](companies/us-INCY/initiation.html) |
| INFQ | Infleqtion | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.21 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-INFQ/risk_plan.html) | [啟動報告](companies/us-INFQ/initiation.html) |
| INSM | Insmed Incorporated - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 98.605 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-INSM/risk_plan.html) | [啟動報告](companies/us-INSM/initiation.html) |
| IVZ | Invesco Ltd Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 28.78 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-IVZ/risk_plan.html) | [啟動報告](companies/us-IVZ/initiation.html) |
| JBS | JBS N.V. Class A Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 11.92 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-JBS/risk_plan.html) | [啟動報告](companies/us-JBS/initiation.html) |
| JNJ | Johnson & Johnson Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 231.29 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-JNJ/risk_plan.html) | [啟動報告](companies/us-JNJ/initiation.html) |
| KIM | Kimco Realty Corporation  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 24.69 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-KIM/risk_plan.html) | [啟動報告](companies/us-KIM/initiation.html) |
| LITE | Lumentum Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 893.93 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-LITE/risk_plan.html) | [啟動報告](companies/us-LITE/initiation.html) |
| MARA | MARA Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.85 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-MARA/risk_plan.html) | [啟動報告](companies/us-MARA/initiation.html) |
| MO | Altria Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 69.51 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-MO/risk_plan.html) | [啟動報告](companies/us-MO/initiation.html) |
| MRK | Merck & Company | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 115.48 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-MRK/risk_plan.html) | [啟動報告](companies/us-MRK/initiation.html) |
| O | Realty Income Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 60.58 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-O/risk_plan.html) | [啟動報告](companies/us-O/initiation.html) |
| P | Everpure | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 77.04 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-P/risk_plan.html) | [啟動報告](companies/us-P/initiation.html) |
| PBA | Pembina Pipeline Corp. Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 46.42 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-PBA/risk_plan.html) | [啟動報告](companies/us-PBA/initiation.html) |
| PCG | Pacific Gas & Electric Co. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.63 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-PCG/risk_plan.html) | [啟動報告](companies/us-PCG/initiation.html) |
| PFE | Pfizer | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 25.08 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-PFE/risk_plan.html) | [啟動報告](companies/us-PFE/initiation.html) |
| Q | Qnity Electronics | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 175.64 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-Q/risk_plan.html) | [啟動報告](companies/us-Q/initiation.html) |
| SMMT | Summit Therapeutics Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.28 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-SMMT/risk_plan.html) | [啟動報告](companies/us-SMMT/initiation.html) |
| SWKS | Skyworks Solutions | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 76.18 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-SWKS/risk_plan.html) | [啟動報告](companies/us-SWKS/initiation.html) |
| TSEM | Tower Semiconductor Ltd. - Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 316.85 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-TSEM/risk_plan.html) | [啟動報告](companies/us-TSEM/initiation.html) |
| UPS | United Parcel Service | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 107.24 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-UPS/risk_plan.html) | [啟動報告](companies/us-UPS/initiation.html) |
| VLO | Valero Energy Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 243.78 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-VLO/risk_plan.html) | [啟動報告](companies/us-VLO/initiation.html) |
| XP | XP Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 15.99 USD | 2026-06-22 00:00:00-04:00 | not_run（本流程未執行估值模型） | 觸發前 0%；待技術觸發與研究證據確認後再評估 | [風險](companies/us-XP/risk_plan.html) | [啟動報告](companies/us-XP/initiation.html) |

## 研究檔案索引

| 代號 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- |
| 1717 | [公司摘要](companies/tw-1717/tearsheet.html) | [啟動報告](companies/tw-1717/initiation.html) | [風險](companies/tw-1717/risk_plan.html) |
| 2301 | [公司摘要](companies/tw-2301/tearsheet.html) | [啟動報告](companies/tw-2301/initiation.html) | [風險](companies/tw-2301/risk_plan.html) |
| 2345 | [公司摘要](companies/tw-2345/tearsheet.html) | [啟動報告](companies/tw-2345/initiation.html) | [風險](companies/tw-2345/risk_plan.html) |
| 2609 | [公司摘要](companies/tw-2609/tearsheet.html) | [啟動報告](companies/tw-2609/initiation.html) | [風險](companies/tw-2609/risk_plan.html) |
| 3028 | [公司摘要](companies/tw-3028/tearsheet.html) | [啟動報告](companies/tw-3028/initiation.html) | [風險](companies/tw-3028/risk_plan.html) |
| 3135 | [公司摘要](companies/tw-3135/tearsheet.html) | [啟動報告](companies/tw-3135/initiation.html) | [風險](companies/tw-3135/risk_plan.html) |
| 4526 | [公司摘要](companies/tw-4526/tearsheet.html) | [啟動報告](companies/tw-4526/initiation.html) | [風險](companies/tw-4526/risk_plan.html) |
| 4906 | [公司摘要](companies/tw-4906/tearsheet.html) | [啟動報告](companies/tw-4906/initiation.html) | [風險](companies/tw-4906/risk_plan.html) |
| 5871 | [公司摘要](companies/tw-5871/tearsheet.html) | [啟動報告](companies/tw-5871/initiation.html) | [風險](companies/tw-5871/risk_plan.html) |
| 6830 | [公司摘要](companies/tw-6830/tearsheet.html) | [啟動報告](companies/tw-6830/initiation.html) | [風險](companies/tw-6830/risk_plan.html) |
| 8033 | [公司摘要](companies/tw-8033/tearsheet.html) | [啟動報告](companies/tw-8033/initiation.html) | [風險](companies/tw-8033/risk_plan.html) |
| 8070 | [公司摘要](companies/tw-8070/tearsheet.html) | [啟動報告](companies/tw-8070/initiation.html) | [風險](companies/tw-8070/risk_plan.html) |
| ABBV | [公司摘要](companies/us-ABBV/tearsheet.html) | [啟動報告](companies/us-ABBV/initiation.html) | [風險](companies/us-ABBV/risk_plan.html) |
| AEP | [公司摘要](companies/us-AEP/tearsheet.html) | [啟動報告](companies/us-AEP/initiation.html) | [風險](companies/us-AEP/risk_plan.html) |
| AMGN | [公司摘要](companies/us-AMGN/tearsheet.html) | [啟動報告](companies/us-AMGN/initiation.html) | [風險](companies/us-AMGN/risk_plan.html) |
| CWAN | [公司摘要](companies/us-CWAN/tearsheet.html) | [啟動報告](companies/us-CWAN/initiation.html) | [風險](companies/us-CWAN/risk_plan.html) |
| EA | [公司摘要](companies/us-EA/tearsheet.html) | [啟動報告](companies/us-EA/initiation.html) | [風險](companies/us-EA/risk_plan.html) |
| KMI | [公司摘要](companies/us-KMI/tearsheet.html) | [啟動報告](companies/us-KMI/initiation.html) | [風險](companies/us-KMI/risk_plan.html) |
| NOK | [公司摘要](companies/us-NOK/tearsheet.html) | [啟動報告](companies/us-NOK/initiation.html) | [風險](companies/us-NOK/risk_plan.html) |
| NVO | [公司摘要](companies/us-NVO/tearsheet.html) | [啟動報告](companies/us-NVO/initiation.html) | [風險](companies/us-NVO/risk_plan.html) |
| PLD | [公司摘要](companies/us-PLD/tearsheet.html) | [啟動報告](companies/us-PLD/initiation.html) | [風險](companies/us-PLD/risk_plan.html) |
| SMCI | [公司摘要](companies/us-SMCI/tearsheet.html) | [啟動報告](companies/us-SMCI/initiation.html) | [風險](companies/us-SMCI/risk_plan.html) |
| VIAV | [公司摘要](companies/us-VIAV/tearsheet.html) | [啟動報告](companies/us-VIAV/initiation.html) | [風險](companies/us-VIAV/risk_plan.html) |
| WBD | [公司摘要](companies/us-WBD/tearsheet.html) | [啟動報告](companies/us-WBD/initiation.html) | [風險](companies/us-WBD/risk_plan.html) |
| WELL | [公司摘要](companies/us-WELL/tearsheet.html) | [啟動報告](companies/us-WELL/initiation.html) | [風險](companies/us-WELL/risk_plan.html) |
| XEL | [公司摘要](companies/us-XEL/tearsheet.html) | [啟動報告](companies/us-XEL/initiation.html) | [風險](companies/us-XEL/risk_plan.html) |
| 1504 | [公司摘要](companies/tw-1504/tearsheet.html) | [啟動報告](companies/tw-1504/initiation.html) | [風險](companies/tw-1504/risk_plan.html) |
| 1536 | [公司摘要](companies/tw-1536/tearsheet.html) | [啟動報告](companies/tw-1536/initiation.html) | [風險](companies/tw-1536/risk_plan.html) |
| 1710 | [公司摘要](companies/tw-1710/tearsheet.html) | [啟動報告](companies/tw-1710/initiation.html) | [風險](companies/tw-1710/risk_plan.html) |
| 1711 | [公司摘要](companies/tw-1711/tearsheet.html) | [啟動報告](companies/tw-1711/initiation.html) | [風險](companies/tw-1711/risk_plan.html) |
| 1721 | [公司摘要](companies/tw-1721/tearsheet.html) | [啟動報告](companies/tw-1721/initiation.html) | [風險](companies/tw-1721/risk_plan.html) |
| 1727 | [公司摘要](companies/tw-1727/tearsheet.html) | [啟動報告](companies/tw-1727/initiation.html) | [風險](companies/tw-1727/risk_plan.html) |
| 1810 | [公司摘要](companies/tw-1810/tearsheet.html) | [啟動報告](companies/tw-1810/initiation.html) | [風險](companies/tw-1810/risk_plan.html) |
| 2049 | [公司摘要](companies/tw-2049/tearsheet.html) | [啟動報告](companies/tw-2049/initiation.html) | [風險](companies/tw-2049/risk_plan.html) |
| 2208 | [公司摘要](companies/tw-2208/tearsheet.html) | [啟動報告](companies/tw-2208/initiation.html) | [風險](companies/tw-2208/risk_plan.html) |
| 2233 | [公司摘要](companies/tw-2233/tearsheet.html) | [啟動報告](companies/tw-2233/initiation.html) | [風險](companies/tw-2233/risk_plan.html) |
| 2308 | [公司摘要](companies/tw-2308/tearsheet.html) | [啟動報告](companies/tw-2308/initiation.html) | [風險](companies/tw-2308/risk_plan.html) |
| 2317 | [公司摘要](companies/tw-2317/tearsheet.html) | [啟動報告](companies/tw-2317/initiation.html) | [風險](companies/tw-2317/risk_plan.html) |
| 2329 | [公司摘要](companies/tw-2329/tearsheet.html) | [啟動報告](companies/tw-2329/initiation.html) | [風險](companies/tw-2329/risk_plan.html) |
| 2355 | [公司摘要](companies/tw-2355/tearsheet.html) | [啟動報告](companies/tw-2355/initiation.html) | [風險](companies/tw-2355/risk_plan.html) |
| 2359 | [公司摘要](companies/tw-2359/tearsheet.html) | [啟動報告](companies/tw-2359/initiation.html) | [風險](companies/tw-2359/risk_plan.html) |
| 2360 | [公司摘要](companies/tw-2360/tearsheet.html) | [啟動報告](companies/tw-2360/initiation.html) | [風險](companies/tw-2360/risk_plan.html) |
| 2371 | [公司摘要](companies/tw-2371/tearsheet.html) | [啟動報告](companies/tw-2371/initiation.html) | [風險](companies/tw-2371/risk_plan.html) |
| 2399 | [公司摘要](companies/tw-2399/tearsheet.html) | [啟動報告](companies/tw-2399/initiation.html) | [風險](companies/tw-2399/risk_plan.html) |
| 2406 | [公司摘要](companies/tw-2406/tearsheet.html) | [啟動報告](companies/tw-2406/initiation.html) | [風險](companies/tw-2406/risk_plan.html) |
| 2420 | [公司摘要](companies/tw-2420/tearsheet.html) | [啟動報告](companies/tw-2420/initiation.html) | [風險](companies/tw-2420/risk_plan.html) |
| 2421 | [公司摘要](companies/tw-2421/tearsheet.html) | [啟動報告](companies/tw-2421/initiation.html) | [風險](companies/tw-2421/risk_plan.html) |
| 2474 | [公司摘要](companies/tw-2474/tearsheet.html) | [啟動報告](companies/tw-2474/initiation.html) | [風險](companies/tw-2474/risk_plan.html) |
| 2498 | [公司摘要](companies/tw-2498/tearsheet.html) | [啟動報告](companies/tw-2498/initiation.html) | [風險](companies/tw-2498/risk_plan.html) |
| 2605 | [公司摘要](companies/tw-2605/tearsheet.html) | [啟動報告](companies/tw-2605/initiation.html) | [風險](companies/tw-2605/risk_plan.html) |
| 2630 | [公司摘要](companies/tw-2630/tearsheet.html) | [啟動報告](companies/tw-2630/initiation.html) | [風險](companies/tw-2630/risk_plan.html) |
| 3010 | [公司摘要](companies/tw-3010/tearsheet.html) | [啟動報告](companies/tw-3010/initiation.html) | [風險](companies/tw-3010/risk_plan.html) |
| 3017 | [公司摘要](companies/tw-3017/tearsheet.html) | [啟動報告](companies/tw-3017/initiation.html) | [風險](companies/tw-3017/risk_plan.html) |
| 3031 | [公司摘要](companies/tw-3031/tearsheet.html) | [啟動報告](companies/tw-3031/initiation.html) | [風險](companies/tw-3031/risk_plan.html) |
| 3338 | [公司摘要](companies/tw-3338/tearsheet.html) | [啟動報告](companies/tw-3338/initiation.html) | [風險](companies/tw-3338/risk_plan.html) |
| 3376 | [公司摘要](companies/tw-3376/tearsheet.html) | [啟動報告](companies/tw-3376/initiation.html) | [風險](companies/tw-3376/risk_plan.html) |
| 3380 | [公司摘要](companies/tw-3380/tearsheet.html) | [啟動報告](companies/tw-3380/initiation.html) | [風險](companies/tw-3380/risk_plan.html) |
| 3518 | [公司摘要](companies/tw-3518/tearsheet.html) | [啟動報告](companies/tw-3518/initiation.html) | [風險](companies/tw-3518/risk_plan.html) |
| 3645 | [公司摘要](companies/tw-3645/tearsheet.html) | [啟動報告](companies/tw-3645/initiation.html) | [風險](companies/tw-3645/risk_plan.html) |
| 4540 | [公司摘要](companies/tw-4540/tearsheet.html) | [啟動報告](companies/tw-4540/initiation.html) | [風險](companies/tw-4540/risk_plan.html) |
| 4576 | [公司摘要](companies/tw-4576/tearsheet.html) | [啟動報告](companies/tw-4576/initiation.html) | [風險](companies/tw-4576/risk_plan.html) |
| 4763 | [公司摘要](companies/tw-4763/tearsheet.html) | [啟動報告](companies/tw-4763/initiation.html) | [風險](companies/tw-4763/risk_plan.html) |
| 4956 | [公司摘要](companies/tw-4956/tearsheet.html) | [啟動報告](companies/tw-4956/initiation.html) | [風險](companies/tw-4956/risk_plan.html) |
| 4989 | [公司摘要](companies/tw-4989/tearsheet.html) | [啟動報告](companies/tw-4989/initiation.html) | [風險](companies/tw-4989/risk_plan.html) |
| 5222 | [公司摘要](companies/tw-5222/tearsheet.html) | [啟動報告](companies/tw-5222/initiation.html) | [風險](companies/tw-5222/risk_plan.html) |
| 6205 | [公司摘要](companies/tw-6205/tearsheet.html) | [啟動報告](companies/tw-6205/initiation.html) | [風險](companies/tw-6205/risk_plan.html) |
| 6206 | [公司摘要](companies/tw-6206/tearsheet.html) | [啟動報告](companies/tw-6206/initiation.html) | [風險](companies/tw-6206/risk_plan.html) |
| 6282 | [公司摘要](companies/tw-6282/tearsheet.html) | [啟動報告](companies/tw-6282/initiation.html) | [風險](companies/tw-6282/risk_plan.html) |
| 6412 | [公司摘要](companies/tw-6412/tearsheet.html) | [啟動報告](companies/tw-6412/initiation.html) | [風險](companies/tw-6412/risk_plan.html) |
| 6426 | [公司摘要](companies/tw-6426/tearsheet.html) | [啟動報告](companies/tw-6426/initiation.html) | [風險](companies/tw-6426/risk_plan.html) |
| 6579 | [公司摘要](companies/tw-6579/tearsheet.html) | [啟動報告](companies/tw-6579/initiation.html) | [風險](companies/tw-6579/risk_plan.html) |
| 6753 | [公司摘要](companies/tw-6753/tearsheet.html) | [啟動報告](companies/tw-6753/initiation.html) | [風險](companies/tw-6753/risk_plan.html) |
| 6768 | [公司摘要](companies/tw-6768/tearsheet.html) | [啟動報告](companies/tw-6768/initiation.html) | [風險](companies/tw-6768/risk_plan.html) |
| 8028 | [公司摘要](companies/tw-8028/tearsheet.html) | [啟動報告](companies/tw-8028/initiation.html) | [風險](companies/tw-8028/risk_plan.html) |
| 8039 | [公司摘要](companies/tw-8039/tearsheet.html) | [啟動報告](companies/tw-8039/initiation.html) | [風險](companies/tw-8039/risk_plan.html) |
| 8422 | [公司摘要](companies/tw-8422/tearsheet.html) | [啟動報告](companies/tw-8422/initiation.html) | [風險](companies/tw-8422/risk_plan.html) |
| 9914 | [公司摘要](companies/tw-9914/tearsheet.html) | [啟動報告](companies/tw-9914/initiation.html) | [風險](companies/tw-9914/risk_plan.html) |
| 9921 | [公司摘要](companies/tw-9921/tearsheet.html) | [啟動報告](companies/tw-9921/initiation.html) | [風險](companies/tw-9921/risk_plan.html) |
| ACGL | [公司摘要](companies/us-ACGL/tearsheet.html) | [啟動報告](companies/us-ACGL/initiation.html) | [風險](companies/us-ACGL/risk_plan.html) |
| ADM | [公司摘要](companies/us-ADM/tearsheet.html) | [啟動報告](companies/us-ADM/initiation.html) | [風險](companies/us-ADM/risk_plan.html) |
| AES | [公司摘要](companies/us-AES/tearsheet.html) | [啟動報告](companies/us-AES/initiation.html) | [風險](companies/us-AES/risk_plan.html) |
| AIG | [公司摘要](companies/us-AIG/tearsheet.html) | [啟動報告](companies/us-AIG/initiation.html) | [風險](companies/us-AIG/risk_plan.html) |
| AOS | [公司摘要](companies/us-AOS/tearsheet.html) | [啟動報告](companies/us-AOS/initiation.html) | [風險](companies/us-AOS/risk_plan.html) |
| AUR | [公司摘要](companies/us-AUR/tearsheet.html) | [啟動報告](companies/us-AUR/initiation.html) | [風險](companies/us-AUR/risk_plan.html) |
| AXTI | [公司摘要](companies/us-AXTI/tearsheet.html) | [啟動報告](companies/us-AXTI/initiation.html) | [風險](companies/us-AXTI/risk_plan.html) |
| BB | [公司摘要](companies/us-BB/tearsheet.html) | [啟動報告](companies/us-BB/initiation.html) | [風險](companies/us-BB/risk_plan.html) |
| BBIO | [公司摘要](companies/us-BBIO/tearsheet.html) | [啟動報告](companies/us-BBIO/initiation.html) | [風險](companies/us-BBIO/risk_plan.html) |
| BCRX | [公司摘要](companies/us-BCRX/tearsheet.html) | [啟動報告](companies/us-BCRX/initiation.html) | [風險](companies/us-BCRX/risk_plan.html) |
| BMRN | [公司摘要](companies/us-BMRN/tearsheet.html) | [啟動報告](companies/us-BMRN/initiation.html) | [風險](companies/us-BMRN/risk_plan.html) |
| BULL | [公司摘要](companies/us-BULL/tearsheet.html) | [啟動報告](companies/us-BULL/initiation.html) | [風險](companies/us-BULL/risk_plan.html) |
| CCJ | [公司摘要](companies/us-CCJ/tearsheet.html) | [啟動報告](companies/us-CCJ/initiation.html) | [風險](companies/us-CCJ/risk_plan.html) |
| CDE | [公司摘要](companies/us-CDE/tearsheet.html) | [啟動報告](companies/us-CDE/initiation.html) | [風險](companies/us-CDE/risk_plan.html) |
| CNC | [公司摘要](companies/us-CNC/tearsheet.html) | [啟動報告](companies/us-CNC/initiation.html) | [風險](companies/us-CNC/risk_plan.html) |
| CNH | [公司摘要](companies/us-CNH/tearsheet.html) | [啟動報告](companies/us-CNH/initiation.html) | [風險](companies/us-CNH/risk_plan.html) |
| CRML | [公司摘要](companies/us-CRML/tearsheet.html) | [啟動報告](companies/us-CRML/initiation.html) | [風險](companies/us-CRML/risk_plan.html) |
| DOC | [公司摘要](companies/us-DOC/tearsheet.html) | [啟動報告](companies/us-DOC/initiation.html) | [風險](companies/us-DOC/risk_plan.html) |
| ED | [公司摘要](companies/us-ED/tearsheet.html) | [啟動報告](companies/us-ED/initiation.html) | [風險](companies/us-ED/risk_plan.html) |
| ENB | [公司摘要](companies/us-ENB/tearsheet.html) | [啟動報告](companies/us-ENB/initiation.html) | [風險](companies/us-ENB/risk_plan.html) |
| HBM | [公司摘要](companies/us-HBM/tearsheet.html) | [啟動報告](companies/us-HBM/initiation.html) | [風險](companies/us-HBM/risk_plan.html) |
| HR | [公司摘要](companies/us-HR/tearsheet.html) | [啟動報告](companies/us-HR/initiation.html) | [風險](companies/us-HR/risk_plan.html) |
| HUT | [公司摘要](companies/us-HUT/tearsheet.html) | [啟動報告](companies/us-HUT/initiation.html) | [風險](companies/us-HUT/risk_plan.html) |
| IAG | [公司摘要](companies/us-IAG/tearsheet.html) | [啟動報告](companies/us-IAG/initiation.html) | [風險](companies/us-IAG/risk_plan.html) |
| INCY | [公司摘要](companies/us-INCY/tearsheet.html) | [啟動報告](companies/us-INCY/initiation.html) | [風險](companies/us-INCY/risk_plan.html) |
| INFQ | [公司摘要](companies/us-INFQ/tearsheet.html) | [啟動報告](companies/us-INFQ/initiation.html) | [風險](companies/us-INFQ/risk_plan.html) |
| INSM | [公司摘要](companies/us-INSM/tearsheet.html) | [啟動報告](companies/us-INSM/initiation.html) | [風險](companies/us-INSM/risk_plan.html) |
| IVZ | [公司摘要](companies/us-IVZ/tearsheet.html) | [啟動報告](companies/us-IVZ/initiation.html) | [風險](companies/us-IVZ/risk_plan.html) |
| JBS | [公司摘要](companies/us-JBS/tearsheet.html) | [啟動報告](companies/us-JBS/initiation.html) | [風險](companies/us-JBS/risk_plan.html) |
| JNJ | [公司摘要](companies/us-JNJ/tearsheet.html) | [啟動報告](companies/us-JNJ/initiation.html) | [風險](companies/us-JNJ/risk_plan.html) |
| KIM | [公司摘要](companies/us-KIM/tearsheet.html) | [啟動報告](companies/us-KIM/initiation.html) | [風險](companies/us-KIM/risk_plan.html) |
| LITE | [公司摘要](companies/us-LITE/tearsheet.html) | [啟動報告](companies/us-LITE/initiation.html) | [風險](companies/us-LITE/risk_plan.html) |
| MARA | [公司摘要](companies/us-MARA/tearsheet.html) | [啟動報告](companies/us-MARA/initiation.html) | [風險](companies/us-MARA/risk_plan.html) |
| MO | [公司摘要](companies/us-MO/tearsheet.html) | [啟動報告](companies/us-MO/initiation.html) | [風險](companies/us-MO/risk_plan.html) |
| MRK | [公司摘要](companies/us-MRK/tearsheet.html) | [啟動報告](companies/us-MRK/initiation.html) | [風險](companies/us-MRK/risk_plan.html) |
| O | [公司摘要](companies/us-O/tearsheet.html) | [啟動報告](companies/us-O/initiation.html) | [風險](companies/us-O/risk_plan.html) |
| P | [公司摘要](companies/us-P/tearsheet.html) | [啟動報告](companies/us-P/initiation.html) | [風險](companies/us-P/risk_plan.html) |
| PBA | [公司摘要](companies/us-PBA/tearsheet.html) | [啟動報告](companies/us-PBA/initiation.html) | [風險](companies/us-PBA/risk_plan.html) |
| PCG | [公司摘要](companies/us-PCG/tearsheet.html) | [啟動報告](companies/us-PCG/initiation.html) | [風險](companies/us-PCG/risk_plan.html) |
| PFE | [公司摘要](companies/us-PFE/tearsheet.html) | [啟動報告](companies/us-PFE/initiation.html) | [風險](companies/us-PFE/risk_plan.html) |
| Q | [公司摘要](companies/us-Q/tearsheet.html) | [啟動報告](companies/us-Q/initiation.html) | [風險](companies/us-Q/risk_plan.html) |
| SMMT | [公司摘要](companies/us-SMMT/tearsheet.html) | [啟動報告](companies/us-SMMT/initiation.html) | [風險](companies/us-SMMT/risk_plan.html) |
| SWKS | [公司摘要](companies/us-SWKS/tearsheet.html) | [啟動報告](companies/us-SWKS/initiation.html) | [風險](companies/us-SWKS/risk_plan.html) |
| TSEM | [公司摘要](companies/us-TSEM/tearsheet.html) | [啟動報告](companies/us-TSEM/initiation.html) | [風險](companies/us-TSEM/risk_plan.html) |
| UPS | [公司摘要](companies/us-UPS/tearsheet.html) | [啟動報告](companies/us-UPS/initiation.html) | [風險](companies/us-UPS/risk_plan.html) |
| VLO | [公司摘要](companies/us-VLO/tearsheet.html) | [啟動報告](companies/us-VLO/initiation.html) | [風險](companies/us-VLO/risk_plan.html) |
| XP | [公司摘要](companies/us-XP/tearsheet.html) | [啟動報告](companies/us-XP/initiation.html) | [風險](companies/us-XP/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷：`not-decision-ready` 估值狀態會阻擋任何模型投組候選標籤。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
