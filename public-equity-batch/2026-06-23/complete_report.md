# StockLoop PEI 完整批次報告 2026-06-23

- 產出時間：2026-06-23 14:14:48
- 標的池檔數：65
- 已具備目前價格與研究狀態的列數：65
- 來源報告：reports/news/2026-06-23_kol_news_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | tw | 55 |
| 市場 | us | 10 |
| 分類 | 現在可以買名單 | 15 |
| 分類 | 現在不能買，但值得等買點名單 | 50 |
| 研究標籤 | Wait for trigger（等待觸發） | 50 |
| 研究標籤 | Watch only（僅觀察） | 15 |
| 研究狀態 | complete（研究檔案完整） | 65 |
| 估值狀態 | not_run（本流程未執行估值模型） | 65 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- 最新申報財務與現金流資料尚未完整匯入
- 本流程未執行估值模型，需另以公開資料補證據
- 管理層指引、市場共識與技術觸發條件尚未完成交叉驗證
- 資本結構、流動性與成交量資料尚未由公開文件完整驗證

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2303 | 聯電 | 現在可以買名單 | Watch only（僅觀察） | 171.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2303/risk_plan.html) | [啟動報告](companies/tw-2303/initiation.html) |
| 2330 | 台積電 | 現在可以買名單 | Watch only（僅觀察） | 2490.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2330/risk_plan.html) | [啟動報告](companies/tw-2330/initiation.html) |
| 2379 | 瑞昱 | 現在可以買名單 | Watch only（僅觀察） | 863.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2379/risk_plan.html) | [啟動報告](companies/tw-2379/initiation.html) |
| 2454 | 聯發科 | 現在可以買名單 | Watch only（僅觀察） | 4535.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2454/risk_plan.html) | [啟動報告](companies/tw-2454/initiation.html) |
| 2464 | 盟立 | 現在可以買名單 | Watch only（僅觀察） | 172.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2464/risk_plan.html) | [啟動報告](companies/tw-2464/initiation.html) |
| 2890 | 永豐金 | 現在可以買名單 | Watch only（僅觀察） | 39.8 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2890/risk_plan.html) | [啟動報告](companies/tw-2890/initiation.html) |
| 3008 | 大立光 | 現在可以買名單 | Watch only（僅觀察） | 5000.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3008/risk_plan.html) | [啟動報告](companies/tw-3008/initiation.html) |
| 3019 | 亞光 | 現在可以買名單 | Watch only（僅觀察） | 157.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3019/risk_plan.html) | [啟動報告](companies/tw-3019/initiation.html) |
| 3532 | 台勝科 | 現在可以買名單 | Watch only（僅觀察） | 376.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3532/risk_plan.html) | [啟動報告](companies/tw-3532/initiation.html) |
| 5347 | 世界先進 | 現在可以買名單 | Watch only（僅觀察） | 186.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-5347/risk_plan.html) | [啟動報告](companies/tw-5347/initiation.html) |
| 6488 | 環球晶 | 現在可以買名單 | Watch only（僅觀察） | 1020.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-6488/risk_plan.html) | [啟動報告](companies/tw-6488/initiation.html) |
| IBM | IBM | 現在可以買名單 | Watch only（僅觀察） | 252.22 USD | 2026-06-22 00:00:00-04:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/us-IBM/risk_plan.html) | [啟動報告](companies/us-IBM/initiation.html) |
| INTC | Intel | 現在可以買名單 | Watch only（僅觀察） | 140.94 USD | 2026-06-22 00:00:00-04:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/us-INTC/risk_plan.html) | [啟動報告](companies/us-INTC/initiation.html) |
| SNDK | SanDisk | 現在可以買名單 | Watch only（僅觀察） | 2273.73 USD | 2026-06-22 00:00:00-04:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/us-SNDK/risk_plan.html) | [啟動報告](companies/us-SNDK/initiation.html) |
| UMC | United Microelectronics ADR | 現在可以買名單 | Watch only（僅觀察） | 27.5 USD | 2026-06-22 00:00:00-04:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/us-UMC/risk_plan.html) | [啟動報告](companies/us-UMC/initiation.html) |
| 1802 | 台玻 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 69.9 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-1802/risk_plan.html) | [啟動報告](companies/tw-1802/initiation.html) |
| 2302 | 麗正 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 45.45 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2302/risk_plan.html) | [啟動報告](companies/tw-2302/initiation.html) |
| 2313 | 華通 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 243.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2313/risk_plan.html) | [啟動報告](companies/tw-2313/initiation.html) |
| 2342 | 茂矽 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 57.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2342/risk_plan.html) | [啟動報告](companies/tw-2342/initiation.html) |
| 2344 | 華邦電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 211.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2344/risk_plan.html) | [啟動報告](companies/tw-2344/initiation.html) |
| 2351 | 順德 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 195.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2351/risk_plan.html) | [啟動報告](companies/tw-2351/initiation.html) |
| 2375 | 凱美 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 200.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2375/risk_plan.html) | [啟動報告](companies/tw-2375/initiation.html) |
| 2408 | 南亞科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 454.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2408/risk_plan.html) | [啟動報告](companies/tw-2408/initiation.html) |
| 2449 | 京元電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 329.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2449/risk_plan.html) | [啟動報告](companies/tw-2449/initiation.html) |
| 2481 | 強茂 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 193.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2481/risk_plan.html) | [啟動報告](companies/tw-2481/initiation.html) |
| 2492 | 華新科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 577.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-2492/risk_plan.html) | [啟動報告](companies/tw-2492/initiation.html) |
| 3016 | 嘉晶 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 152.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3016/risk_plan.html) | [啟動報告](companies/tw-3016/initiation.html) |
| 3026 | 禾伸堂 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 808.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3026/risk_plan.html) | [啟動報告](companies/tw-3026/initiation.html) |
| 3034 | 聯詠 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 544.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3034/risk_plan.html) | [啟動報告](companies/tw-3034/initiation.html) |
| 3090 | 日電貿 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 302.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3090/risk_plan.html) | [啟動報告](companies/tw-3090/initiation.html) |
| 3149 | 正達 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 94.1 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3149/risk_plan.html) | [啟動報告](companies/tw-3149/initiation.html) |
| 3257 | 虹冠電 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 73.9 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3257/risk_plan.html) | [啟動報告](companies/tw-3257/initiation.html) |
| 3338 | 泰碩 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 74.7 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3338/risk_plan.html) | [啟動報告](companies/tw-3338/initiation.html) |
| 3362 | 先進光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 186.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3362/risk_plan.html) | [啟動報告](companies/tw-3362/initiation.html) |
| 3374 | 精材 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 303.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3374/risk_plan.html) | [啟動報告](companies/tw-3374/initiation.html) |
| 3537 | 堡達 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 81.2 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3537/risk_plan.html) | [啟動報告](companies/tw-3537/initiation.html) |
| 3675 | 德微 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 445.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3675/risk_plan.html) | [啟動報告](companies/tw-3675/initiation.html) |
| 3711 | 日月光投控 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 662.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-3711/risk_plan.html) | [啟動報告](companies/tw-3711/initiation.html) |
| 4923 | 力士 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 64.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-4923/risk_plan.html) | [啟動報告](companies/tw-4923/initiation.html) |
| 5285 | 界霖 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 100.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-5285/risk_plan.html) | [啟動報告](companies/tw-5285/initiation.html) |
| 5299 | 杰力 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 129.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-5299/risk_plan.html) | [啟動報告](companies/tw-5299/initiation.html) |
| 5425 | 台半 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 133.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-5425/risk_plan.html) | [啟動報告](companies/tw-5425/initiation.html) |
| 6147 | 頎邦 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 258.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-6147/risk_plan.html) | [啟動報告](companies/tw-6147/initiation.html) |
| 6182 | 合晶 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 113.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-6182/risk_plan.html) | [啟動報告](companies/tw-6182/initiation.html) |
| 6209 | 今國光 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 90.3 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-6209/risk_plan.html) | [啟動報告](companies/tw-6209/initiation.html) |
| 6213 | 聯茂 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 281.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-6213/risk_plan.html) | [啟動報告](companies/tw-6213/initiation.html) |
| 6435 | 大中 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 359.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-6435/risk_plan.html) | [啟動報告](companies/tw-6435/initiation.html) |
| 6525 | 捷敏-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 170.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-6525/risk_plan.html) | [啟動報告](companies/tw-6525/initiation.html) |
| 6573 | 虹揚-KY | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.55 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-6573/risk_plan.html) | [啟動報告](companies/tw-6573/initiation.html) |
| 6651 | 全宇昕 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 153.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-6651/risk_plan.html) | [啟動報告](companies/tw-6651/initiation.html) |
| 6693 | 廣閎科 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 238.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-6693/risk_plan.html) | [啟動報告](companies/tw-6693/initiation.html) |
| 7712 | 博盛半導體 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 199.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-7712/risk_plan.html) | [啟動報告](companies/tw-7712/initiation.html) |
| 7768 | 頌勝科技 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 360.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-7768/risk_plan.html) | [啟動報告](companies/tw-7768/initiation.html) |
| 7788 | 松川精密 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 281.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-7788/risk_plan.html) | [啟動報告](companies/tw-7788/initiation.html) |
| 8043 | 蜜望實 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 202.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-8043/risk_plan.html) | [啟動報告](companies/tw-8043/initiation.html) |
| 8096 | 擎亞 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 150.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-8096/risk_plan.html) | [啟動報告](companies/tw-8096/initiation.html) |
| 8162 | 微矽電子-創 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 81.9 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-8162/risk_plan.html) | [啟動報告](companies/tw-8162/initiation.html) |
| 8255 | 朋程 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 200.5 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-8255/risk_plan.html) | [啟動報告](companies/tw-8255/initiation.html) |
| 8261 | 富鼎 | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 260.0 TWD | 2026-06-23 00:00:00+08:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/tw-8261/risk_plan.html) | [啟動報告](companies/tw-8261/initiation.html) |
| GETY | Getty Images | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1.15 USD | 2026-06-22 00:00:00-04:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/us-GETY/risk_plan.html) | [啟動報告](companies/us-GETY/initiation.html) |
| LITE | Lumentum | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 893.93 USD | 2026-06-22 00:00:00-04:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/us-LITE/risk_plan.html) | [啟動報告](companies/us-LITE/initiation.html) |
| META | Meta | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 563.85 USD | 2026-06-22 00:00:00-04:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/us-META/risk_plan.html) | [啟動報告](companies/us-META/initiation.html) |
| MSFT | Microsoft | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 367.34 USD | 2026-06-22 00:00:00-04:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/us-MSFT/risk_plan.html) | [啟動報告](companies/us-MSFT/initiation.html) |
| MU | Micron | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 1211.38 USD | 2026-06-22 00:00:00-04:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/us-MU/risk_plan.html) | [啟動報告](companies/us-MU/initiation.html) |
| NVDA | NVIDIA | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 208.65 USD | 2026-06-22 00:00:00-04:00 | complete（研究檔案完整） | 0%；待研究證據與風險報酬達決策等級後再評估 | [風險](companies/us-NVDA/risk_plan.html) | [啟動報告](companies/us-NVDA/initiation.html) |

## 研究檔案索引

| 代號 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- |
| 2303 | [公司摘要](companies/tw-2303/tearsheet.html) | [啟動報告](companies/tw-2303/initiation.html) | [風險](companies/tw-2303/risk_plan.html) |
| 2330 | [公司摘要](companies/tw-2330/tearsheet.html) | [啟動報告](companies/tw-2330/initiation.html) | [風險](companies/tw-2330/risk_plan.html) |
| 2379 | [公司摘要](companies/tw-2379/tearsheet.html) | [啟動報告](companies/tw-2379/initiation.html) | [風險](companies/tw-2379/risk_plan.html) |
| 2454 | [公司摘要](companies/tw-2454/tearsheet.html) | [啟動報告](companies/tw-2454/initiation.html) | [風險](companies/tw-2454/risk_plan.html) |
| 2464 | [公司摘要](companies/tw-2464/tearsheet.html) | [啟動報告](companies/tw-2464/initiation.html) | [風險](companies/tw-2464/risk_plan.html) |
| 2890 | [公司摘要](companies/tw-2890/tearsheet.html) | [啟動報告](companies/tw-2890/initiation.html) | [風險](companies/tw-2890/risk_plan.html) |
| 3008 | [公司摘要](companies/tw-3008/tearsheet.html) | [啟動報告](companies/tw-3008/initiation.html) | [風險](companies/tw-3008/risk_plan.html) |
| 3019 | [公司摘要](companies/tw-3019/tearsheet.html) | [啟動報告](companies/tw-3019/initiation.html) | [風險](companies/tw-3019/risk_plan.html) |
| 3532 | [公司摘要](companies/tw-3532/tearsheet.html) | [啟動報告](companies/tw-3532/initiation.html) | [風險](companies/tw-3532/risk_plan.html) |
| 5347 | [公司摘要](companies/tw-5347/tearsheet.html) | [啟動報告](companies/tw-5347/initiation.html) | [風險](companies/tw-5347/risk_plan.html) |
| 6488 | [公司摘要](companies/tw-6488/tearsheet.html) | [啟動報告](companies/tw-6488/initiation.html) | [風險](companies/tw-6488/risk_plan.html) |
| IBM | [公司摘要](companies/us-IBM/tearsheet.html) | [啟動報告](companies/us-IBM/initiation.html) | [風險](companies/us-IBM/risk_plan.html) |
| INTC | [公司摘要](companies/us-INTC/tearsheet.html) | [啟動報告](companies/us-INTC/initiation.html) | [風險](companies/us-INTC/risk_plan.html) |
| SNDK | [公司摘要](companies/us-SNDK/tearsheet.html) | [啟動報告](companies/us-SNDK/initiation.html) | [風險](companies/us-SNDK/risk_plan.html) |
| UMC | [公司摘要](companies/us-UMC/tearsheet.html) | [啟動報告](companies/us-UMC/initiation.html) | [風險](companies/us-UMC/risk_plan.html) |
| 1802 | [公司摘要](companies/tw-1802/tearsheet.html) | [啟動報告](companies/tw-1802/initiation.html) | [風險](companies/tw-1802/risk_plan.html) |
| 2302 | [公司摘要](companies/tw-2302/tearsheet.html) | [啟動報告](companies/tw-2302/initiation.html) | [風險](companies/tw-2302/risk_plan.html) |
| 2313 | [公司摘要](companies/tw-2313/tearsheet.html) | [啟動報告](companies/tw-2313/initiation.html) | [風險](companies/tw-2313/risk_plan.html) |
| 2342 | [公司摘要](companies/tw-2342/tearsheet.html) | [啟動報告](companies/tw-2342/initiation.html) | [風險](companies/tw-2342/risk_plan.html) |
| 2344 | [公司摘要](companies/tw-2344/tearsheet.html) | [啟動報告](companies/tw-2344/initiation.html) | [風險](companies/tw-2344/risk_plan.html) |
| 2351 | [公司摘要](companies/tw-2351/tearsheet.html) | [啟動報告](companies/tw-2351/initiation.html) | [風險](companies/tw-2351/risk_plan.html) |
| 2375 | [公司摘要](companies/tw-2375/tearsheet.html) | [啟動報告](companies/tw-2375/initiation.html) | [風險](companies/tw-2375/risk_plan.html) |
| 2408 | [公司摘要](companies/tw-2408/tearsheet.html) | [啟動報告](companies/tw-2408/initiation.html) | [風險](companies/tw-2408/risk_plan.html) |
| 2449 | [公司摘要](companies/tw-2449/tearsheet.html) | [啟動報告](companies/tw-2449/initiation.html) | [風險](companies/tw-2449/risk_plan.html) |
| 2481 | [公司摘要](companies/tw-2481/tearsheet.html) | [啟動報告](companies/tw-2481/initiation.html) | [風險](companies/tw-2481/risk_plan.html) |
| 2492 | [公司摘要](companies/tw-2492/tearsheet.html) | [啟動報告](companies/tw-2492/initiation.html) | [風險](companies/tw-2492/risk_plan.html) |
| 3016 | [公司摘要](companies/tw-3016/tearsheet.html) | [啟動報告](companies/tw-3016/initiation.html) | [風險](companies/tw-3016/risk_plan.html) |
| 3026 | [公司摘要](companies/tw-3026/tearsheet.html) | [啟動報告](companies/tw-3026/initiation.html) | [風險](companies/tw-3026/risk_plan.html) |
| 3034 | [公司摘要](companies/tw-3034/tearsheet.html) | [啟動報告](companies/tw-3034/initiation.html) | [風險](companies/tw-3034/risk_plan.html) |
| 3090 | [公司摘要](companies/tw-3090/tearsheet.html) | [啟動報告](companies/tw-3090/initiation.html) | [風險](companies/tw-3090/risk_plan.html) |
| 3149 | [公司摘要](companies/tw-3149/tearsheet.html) | [啟動報告](companies/tw-3149/initiation.html) | [風險](companies/tw-3149/risk_plan.html) |
| 3257 | [公司摘要](companies/tw-3257/tearsheet.html) | [啟動報告](companies/tw-3257/initiation.html) | [風險](companies/tw-3257/risk_plan.html) |
| 3338 | [公司摘要](companies/tw-3338/tearsheet.html) | [啟動報告](companies/tw-3338/initiation.html) | [風險](companies/tw-3338/risk_plan.html) |
| 3362 | [公司摘要](companies/tw-3362/tearsheet.html) | [啟動報告](companies/tw-3362/initiation.html) | [風險](companies/tw-3362/risk_plan.html) |
| 3374 | [公司摘要](companies/tw-3374/tearsheet.html) | [啟動報告](companies/tw-3374/initiation.html) | [風險](companies/tw-3374/risk_plan.html) |
| 3537 | [公司摘要](companies/tw-3537/tearsheet.html) | [啟動報告](companies/tw-3537/initiation.html) | [風險](companies/tw-3537/risk_plan.html) |
| 3675 | [公司摘要](companies/tw-3675/tearsheet.html) | [啟動報告](companies/tw-3675/initiation.html) | [風險](companies/tw-3675/risk_plan.html) |
| 3711 | [公司摘要](companies/tw-3711/tearsheet.html) | [啟動報告](companies/tw-3711/initiation.html) | [風險](companies/tw-3711/risk_plan.html) |
| 4923 | [公司摘要](companies/tw-4923/tearsheet.html) | [啟動報告](companies/tw-4923/initiation.html) | [風險](companies/tw-4923/risk_plan.html) |
| 5285 | [公司摘要](companies/tw-5285/tearsheet.html) | [啟動報告](companies/tw-5285/initiation.html) | [風險](companies/tw-5285/risk_plan.html) |
| 5299 | [公司摘要](companies/tw-5299/tearsheet.html) | [啟動報告](companies/tw-5299/initiation.html) | [風險](companies/tw-5299/risk_plan.html) |
| 5425 | [公司摘要](companies/tw-5425/tearsheet.html) | [啟動報告](companies/tw-5425/initiation.html) | [風險](companies/tw-5425/risk_plan.html) |
| 6147 | [公司摘要](companies/tw-6147/tearsheet.html) | [啟動報告](companies/tw-6147/initiation.html) | [風險](companies/tw-6147/risk_plan.html) |
| 6182 | [公司摘要](companies/tw-6182/tearsheet.html) | [啟動報告](companies/tw-6182/initiation.html) | [風險](companies/tw-6182/risk_plan.html) |
| 6209 | [公司摘要](companies/tw-6209/tearsheet.html) | [啟動報告](companies/tw-6209/initiation.html) | [風險](companies/tw-6209/risk_plan.html) |
| 6213 | [公司摘要](companies/tw-6213/tearsheet.html) | [啟動報告](companies/tw-6213/initiation.html) | [風險](companies/tw-6213/risk_plan.html) |
| 6435 | [公司摘要](companies/tw-6435/tearsheet.html) | [啟動報告](companies/tw-6435/initiation.html) | [風險](companies/tw-6435/risk_plan.html) |
| 6525 | [公司摘要](companies/tw-6525/tearsheet.html) | [啟動報告](companies/tw-6525/initiation.html) | [風險](companies/tw-6525/risk_plan.html) |
| 6573 | [公司摘要](companies/tw-6573/tearsheet.html) | [啟動報告](companies/tw-6573/initiation.html) | [風險](companies/tw-6573/risk_plan.html) |
| 6651 | [公司摘要](companies/tw-6651/tearsheet.html) | [啟動報告](companies/tw-6651/initiation.html) | [風險](companies/tw-6651/risk_plan.html) |
| 6693 | [公司摘要](companies/tw-6693/tearsheet.html) | [啟動報告](companies/tw-6693/initiation.html) | [風險](companies/tw-6693/risk_plan.html) |
| 7712 | [公司摘要](companies/tw-7712/tearsheet.html) | [啟動報告](companies/tw-7712/initiation.html) | [風險](companies/tw-7712/risk_plan.html) |
| 7768 | [公司摘要](companies/tw-7768/tearsheet.html) | [啟動報告](companies/tw-7768/initiation.html) | [風險](companies/tw-7768/risk_plan.html) |
| 7788 | [公司摘要](companies/tw-7788/tearsheet.html) | [啟動報告](companies/tw-7788/initiation.html) | [風險](companies/tw-7788/risk_plan.html) |
| 8043 | [公司摘要](companies/tw-8043/tearsheet.html) | [啟動報告](companies/tw-8043/initiation.html) | [風險](companies/tw-8043/risk_plan.html) |
| 8096 | [公司摘要](companies/tw-8096/tearsheet.html) | [啟動報告](companies/tw-8096/initiation.html) | [風險](companies/tw-8096/risk_plan.html) |
| 8162 | [公司摘要](companies/tw-8162/tearsheet.html) | [啟動報告](companies/tw-8162/initiation.html) | [風險](companies/tw-8162/risk_plan.html) |
| 8255 | [公司摘要](companies/tw-8255/tearsheet.html) | [啟動報告](companies/tw-8255/initiation.html) | [風險](companies/tw-8255/risk_plan.html) |
| 8261 | [公司摘要](companies/tw-8261/tearsheet.html) | [啟動報告](companies/tw-8261/initiation.html) | [風險](companies/tw-8261/risk_plan.html) |
| GETY | [公司摘要](companies/us-GETY/tearsheet.html) | [啟動報告](companies/us-GETY/initiation.html) | [風險](companies/us-GETY/risk_plan.html) |
| LITE | [公司摘要](companies/us-LITE/tearsheet.html) | [啟動報告](companies/us-LITE/initiation.html) | [風險](companies/us-LITE/risk_plan.html) |
| META | [公司摘要](companies/us-META/tearsheet.html) | [啟動報告](companies/us-META/initiation.html) | [風險](companies/us-META/risk_plan.html) |
| MSFT | [公司摘要](companies/us-MSFT/tearsheet.html) | [啟動報告](companies/us-MSFT/initiation.html) | [風險](companies/us-MSFT/risk_plan.html) |
| MU | [公司摘要](companies/us-MU/tearsheet.html) | [啟動報告](companies/us-MU/initiation.html) | [風險](companies/us-MU/risk_plan.html) |
| NVDA | [公司摘要](companies/us-NVDA/tearsheet.html) | [啟動報告](companies/us-NVDA/initiation.html) | [風險](companies/us-NVDA/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
