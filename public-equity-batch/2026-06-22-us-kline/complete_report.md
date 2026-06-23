# StockLoop PEI 完整批次報告 2026-06-22 - US K-line

- 產出時間：2026-06-23 16:03:50
- 標的池檔數：72
- 已具備目前價格與研究狀態的列數：72
- 來源報告：reports/usStock/2026-06-22_us_kline_decision_report.md
- 驗證報告：[validation_report.json](validation_report.json)
- 建議矩陣：[recommendation_matrix.csv](recommendation_matrix.csv)
- 模型投組風險計畫：[model_portfolio_risk_plan.csv](model_portfolio_risk_plan.csv)

## 執行摘要

本報告將 StockLoop PEI 批次輸出整合為單一可閱讀報告。報告明確區分「研究包檔案完整」與「投資決策已就緒」：每檔標的需具備公司摘要、啟動覆蓋報告、風險計畫、來源台帳與投組摘要列；研究標籤仍需依來源證據、技術觸發與風險報酬覆核。

## 批次統計

| 維度 | 值 | 檔數 |
| --- | --- | ---: |
| 市場 | us | 72 |
| 分類 | 現在可以買名單 | 15 |
| 分類 | 現在不能買，但值得等買點名單 | 57 |
| 研究標籤 | Wait for trigger（等待觸發） | 57 |
| 研究標籤 | Watch only（僅觀察） | 15 |
| 研究狀態 | partial（證據仍不足） | 72 |
| 估值狀態 | not_run（本流程未執行估值模型） | 72 |

## 模型投組規則

- 投組基準：100 單位，僅做多，不使用槓桿。
- 單一標的上限：0.05。
- 「現在可以買」初始風險預算：0.0075。
- 「等待買點」觸發前部位：0.0。
- 「等待買點」觸發後風險預算：0.005。
- 部位公式：`min(single-name cap, risk budget / downside_or_stop_distance, liquidity cap)`。

## 缺失研究證據

- business quality, balance sheet, segment, and catalyst underwriting not complete
- latest SEC filings / 10-K / 10-Q and earnings call evidence not reviewed in this scoped K-line PEI pass
- sell-side consensus, ownership, short interest, and positioning context missing
- technical follow-through / entry trigger still pending for wait-entry candidate
- valuation and peer multiple support not run

## 投組行動摘要

| 代號 | 公司 | 分類 | 研究標籤 | 目前價格 | 價格時間 | 研究狀態 | 模型部位 | 風險計畫 | 啟動報告 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABBV | AbbVie Inc. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 230.00999450683594 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-ABBV/risk_plan.html) | [啟動報告](companies/us-ABBV/initiation.html) |
| AEP | American Electric Power Company | 現在可以買名單 | Watch only（僅觀察） | 130.3000030517578 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-AEP/risk_plan.html) | [啟動報告](companies/us-AEP/initiation.html) |
| AMGN | Amgen Inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 344.7200012207031 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-AMGN/risk_plan.html) | [啟動報告](companies/us-AMGN/initiation.html) |
| CNC | Centene Corporation Common Stock | 現在可以買名單 | Watch only（僅觀察） | 63.68000030517578 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-CNC/risk_plan.html) | [啟動報告](companies/us-CNC/initiation.html) |
| CWAN | Clearwater Analytics Holdings | 現在可以買名單 | Watch only（僅觀察） | 24.530000686645508 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-CWAN/risk_plan.html) | [啟動報告](companies/us-CWAN/initiation.html) |
| EA | Electronic Arts Inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 202.97000122070312 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-EA/risk_plan.html) | [啟動報告](companies/us-EA/initiation.html) |
| KMI | Kinder Morgan | 現在可以買名單 | Watch only（僅觀察） | 32.25 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-KMI/risk_plan.html) | [啟動報告](companies/us-KMI/initiation.html) |
| NOK | Nokia Corporation Sponsored American Depositary Shares | 現在可以買名單 | Watch only（僅觀察） | 14.430000305175781 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-NOK/risk_plan.html) | [啟動報告](companies/us-NOK/initiation.html) |
| NVO | Novo Nordisk A | 現在可以買名單 | Watch only（僅觀察） | 45.880001068115234 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-NVO/risk_plan.html) | [啟動報告](companies/us-NVO/initiation.html) |
| PLD | Prologis | 現在可以買名單 | Watch only（僅觀察） | 143.8300018310547 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-PLD/risk_plan.html) | [啟動報告](companies/us-PLD/initiation.html) |
| SMCI | Super Micro Computer | 現在可以買名單 | Watch only（僅觀察） | 35.459999084472656 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-SMCI/risk_plan.html) | [啟動報告](companies/us-SMCI/initiation.html) |
| VIAV | Viavi Solutions Inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 52.939998626708984 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-VIAV/risk_plan.html) | [啟動報告](companies/us-VIAV/initiation.html) |
| WBD | Warner Bros. Discovery | 現在可以買名單 | Watch only（僅觀察） | 26.950000762939453 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-WBD/risk_plan.html) | [啟動報告](companies/us-WBD/initiation.html) |
| WELL | Welltower Inc. Common Stock | 現在可以買名單 | Watch only（僅觀察） | 211.4499969482422 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-WELL/risk_plan.html) | [啟動報告](companies/us-WELL/initiation.html) |
| XEL | Xcel Energy Inc. - Common Stock | 現在可以買名單 | Watch only（僅觀察） | 78.80999755859375 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 0%；待基本面證據達決策等級後，才可依 5% 單一標的上限重新評估 | [風險](companies/us-XEL/risk_plan.html) | [啟動報告](companies/us-XEL/initiation.html) |
| ACGL | Arch Capital Group Ltd. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 92.04000091552734 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-ACGL/risk_plan.html) | [啟動報告](companies/us-ACGL/initiation.html) |
| ADM | Archer-Daniels-Midland Company Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 76.29000091552734 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-ADM/risk_plan.html) | [啟動報告](companies/us-ADM/initiation.html) |
| AEE | Ameren Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 109.69999694824219 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-AEE/risk_plan.html) | [啟動報告](companies/us-AEE/initiation.html) |
| AES | The AES Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.649999618530273 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-AES/risk_plan.html) | [啟動報告](companies/us-AES/initiation.html) |
| AFL | AFLAC Incorporated Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 116.55000305175781 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-AFL/risk_plan.html) | [啟動報告](companies/us-AFL/initiation.html) |
| AIG | American International Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 76.37000274658203 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-AIG/risk_plan.html) | [啟動報告](companies/us-AIG/initiation.html) |
| AMH | American Homes 4 Rent Common Shares of Beneficial Interest | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 31.639999389648438 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-AMH/risk_plan.html) | [啟動報告](companies/us-AMH/initiation.html) |
| AOS | A.O. Smith Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 58.689998626708984 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-AOS/risk_plan.html) | [啟動報告](companies/us-AOS/initiation.html) |
| AUR | Aurora Innovation | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.559999942779541 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-AUR/risk_plan.html) | [啟動報告](companies/us-AUR/initiation.html) |
| AXTI | AXT Inc - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 92.44000244140625 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-AXTI/risk_plan.html) | [啟動報告](companies/us-AXTI/initiation.html) |
| BB | BlackBerry Limited Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 8.789999961853027 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-BB/risk_plan.html) | [啟動報告](companies/us-BB/initiation.html) |
| BBIO | BridgeBio Pharma | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 68.91999816894531 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-BBIO/risk_plan.html) | [啟動報告](companies/us-BBIO/initiation.html) |
| BCRX | BioCryst Pharmaceuticals | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 9.140000343322754 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-BCRX/risk_plan.html) | [啟動報告](companies/us-BCRX/initiation.html) |
| BMRN | BioMarin Pharmaceutical Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 55.900001525878906 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-BMRN/risk_plan.html) | [啟動報告](companies/us-BMRN/initiation.html) |
| BRX | Brixmor Property Group Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 31.18000030517578 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-BRX/risk_plan.html) | [啟動報告](companies/us-BRX/initiation.html) |
| BULL | Webull Corporation - Class A Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 6.860000133514404 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-BULL/risk_plan.html) | [啟動報告](companies/us-BULL/initiation.html) |
| CCJ | Cameco Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 107.06999969482422 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-CCJ/risk_plan.html) | [啟動報告](companies/us-CCJ/initiation.html) |
| CDE | Coeur Mining | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 17.469999313354492 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-CDE/risk_plan.html) | [啟動報告](companies/us-CDE/initiation.html) |
| CNH | CNH Industrial N.V. Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.380000114440918 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-CNH/risk_plan.html) | [啟動報告](companies/us-CNH/initiation.html) |
| CRML | Critical Metals Corp. - Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 10.449999809265137 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-CRML/risk_plan.html) | [啟動報告](companies/us-CRML/initiation.html) |
| DNOW | DNOW Inc. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 13.710000038146973 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-DNOW/risk_plan.html) | [啟動報告](companies/us-DNOW/initiation.html) |
| DOC | Healthpeak Properties | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 19.979999542236328 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-DOC/risk_plan.html) | [啟動報告](companies/us-DOC/initiation.html) |
| ED | Consolidated Edison | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 106.91999816894531 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-ED/risk_plan.html) | [啟動報告](companies/us-ED/initiation.html) |
| ENB | Enbridge Inc Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 54.79999923706055 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-ENB/risk_plan.html) | [啟動報告](companies/us-ENB/initiation.html) |
| EVRG | Evergy | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 83.25 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-EVRG/risk_plan.html) | [啟動報告](companies/us-EVRG/initiation.html) |
| HBM | Hudbay Minerals Inc. Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 27.90999984741211 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-HBM/risk_plan.html) | [啟動報告](companies/us-HBM/initiation.html) |
| HR | Healthcare Realty Trust Incorporated Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 20.15999984741211 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-HR/risk_plan.html) | [啟動報告](companies/us-HR/initiation.html) |
| HUT | Hut 8 Corp. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 121.04000091552734 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-HUT/risk_plan.html) | [啟動報告](companies/us-HUT/initiation.html) |
| IAG | Iamgold Corporation Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.90999984741211 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-IAG/risk_plan.html) | [啟動報告](companies/us-IAG/initiation.html) |
| INCY | Incyte Corporation - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 103.66000366210938 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-INCY/risk_plan.html) | [啟動報告](companies/us-INCY/initiation.html) |
| INFQ | Infleqtion | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.210000038146973 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-INFQ/risk_plan.html) | [啟動報告](companies/us-INFQ/initiation.html) |
| INSM | Insmed Incorporated - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 98.61000061035156 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-INSM/risk_plan.html) | [啟動報告](companies/us-INSM/initiation.html) |
| IVZ | Invesco Ltd Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 28.780000686645508 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-IVZ/risk_plan.html) | [啟動報告](companies/us-IVZ/initiation.html) |
| JBS | JBS N.V. Class A Common Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 11.920000076293945 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-JBS/risk_plan.html) | [啟動報告](companies/us-JBS/initiation.html) |
| JNJ | Johnson & Johnson Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 231.2899932861328 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-JNJ/risk_plan.html) | [啟動報告](companies/us-JNJ/initiation.html) |
| KIM | Kimco Realty Corporation  Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 24.690000534057617 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-KIM/risk_plan.html) | [啟動報告](companies/us-KIM/initiation.html) |
| LITE | Lumentum Holdings Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 893.9299926757812 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-LITE/risk_plan.html) | [啟動報告](companies/us-LITE/initiation.html) |
| MARA | MARA Holdings | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.850000381469727 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-MARA/risk_plan.html) | [啟動報告](companies/us-MARA/initiation.html) |
| MO | Altria Group | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 69.51000213623047 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-MO/risk_plan.html) | [啟動報告](companies/us-MO/initiation.html) |
| MRK | Merck & Company | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 115.4800033569336 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-MRK/risk_plan.html) | [啟動報告](companies/us-MRK/initiation.html) |
| NUE | Nucor Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 244.92999267578125 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-NUE/risk_plan.html) | [啟動報告](companies/us-NUE/initiation.html) |
| O | Realty Income Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 60.58000183105469 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-O/risk_plan.html) | [啟動報告](companies/us-O/initiation.html) |
| P | Everpure | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 77.04000091552734 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-P/risk_plan.html) | [啟動報告](companies/us-P/initiation.html) |
| PBA | Pembina Pipeline Corp. Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 46.41999816894531 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-PBA/risk_plan.html) | [啟動報告](companies/us-PBA/initiation.html) |
| PCG | Pacific Gas & Electric Co. Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 16.6299991607666 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-PCG/risk_plan.html) | [啟動報告](companies/us-PCG/initiation.html) |
| PFE | Pfizer | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 25.079999923706055 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-PFE/risk_plan.html) | [啟動報告](companies/us-PFE/initiation.html) |
| Q | Qnity Electronics | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 175.63999938964844 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-Q/risk_plan.html) | [啟動報告](companies/us-Q/initiation.html) |
| SMMT | Summit Therapeutics Inc. - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 14.279999732971191 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-SMMT/risk_plan.html) | [啟動報告](companies/us-SMMT/initiation.html) |
| SRE | DBA Sempra Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 91.62000274658203 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-SRE/risk_plan.html) | [啟動報告](companies/us-SRE/initiation.html) |
| SWKS | Skyworks Solutions | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 76.18000030517578 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-SWKS/risk_plan.html) | [啟動報告](companies/us-SWKS/initiation.html) |
| TPG | TPG Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 41.189998626708984 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-TPG/risk_plan.html) | [啟動報告](companies/us-TPG/initiation.html) |
| TRP | TC Energy Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 68.43000030517578 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-TRP/risk_plan.html) | [啟動報告](companies/us-TRP/initiation.html) |
| TSEM | Tower Semiconductor Ltd. - Ordinary Shares | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 316.8500061035156 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-TSEM/risk_plan.html) | [啟動報告](companies/us-TSEM/initiation.html) |
| UPS | United Parcel Service | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 107.23999786376953 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-UPS/risk_plan.html) | [啟動報告](companies/us-UPS/initiation.html) |
| VLO | Valero Energy Corporation Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 243.77999877929688 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-VLO/risk_plan.html) | [啟動報告](companies/us-VLO/initiation.html) |
| VRTX | Vertex Pharmaceuticals Incorporated - Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 466.7900085449219 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-VRTX/risk_plan.html) | [啟動報告](companies/us-VRTX/initiation.html) |
| XP | XP Inc. - Class A Common Stock | 現在不能買，但值得等買點名單 | Wait for trigger（等待觸發） | 15.989999771118164 USD | 2026-06-22 market close America/New_York | partial（證據仍不足） | 觸發前 0%；待技術觸發與證據覆核後再評估 | [風險](companies/us-XP/risk_plan.html) | [啟動報告](companies/us-XP/initiation.html) |

## 研究檔案索引

| 代號 | 公司摘要 | 啟動報告 | 風險計畫 |
| --- | --- | --- | --- |
| ABBV | [公司摘要](companies/us-ABBV/tearsheet.html) | [啟動報告](companies/us-ABBV/initiation.html) | [風險](companies/us-ABBV/risk_plan.html) |
| AEP | [公司摘要](companies/us-AEP/tearsheet.html) | [啟動報告](companies/us-AEP/initiation.html) | [風險](companies/us-AEP/risk_plan.html) |
| AMGN | [公司摘要](companies/us-AMGN/tearsheet.html) | [啟動報告](companies/us-AMGN/initiation.html) | [風險](companies/us-AMGN/risk_plan.html) |
| CNC | [公司摘要](companies/us-CNC/tearsheet.html) | [啟動報告](companies/us-CNC/initiation.html) | [風險](companies/us-CNC/risk_plan.html) |
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
| ACGL | [公司摘要](companies/us-ACGL/tearsheet.html) | [啟動報告](companies/us-ACGL/initiation.html) | [風險](companies/us-ACGL/risk_plan.html) |
| ADM | [公司摘要](companies/us-ADM/tearsheet.html) | [啟動報告](companies/us-ADM/initiation.html) | [風險](companies/us-ADM/risk_plan.html) |
| AEE | [公司摘要](companies/us-AEE/tearsheet.html) | [啟動報告](companies/us-AEE/initiation.html) | [風險](companies/us-AEE/risk_plan.html) |
| AES | [公司摘要](companies/us-AES/tearsheet.html) | [啟動報告](companies/us-AES/initiation.html) | [風險](companies/us-AES/risk_plan.html) |
| AFL | [公司摘要](companies/us-AFL/tearsheet.html) | [啟動報告](companies/us-AFL/initiation.html) | [風險](companies/us-AFL/risk_plan.html) |
| AIG | [公司摘要](companies/us-AIG/tearsheet.html) | [啟動報告](companies/us-AIG/initiation.html) | [風險](companies/us-AIG/risk_plan.html) |
| AMH | [公司摘要](companies/us-AMH/tearsheet.html) | [啟動報告](companies/us-AMH/initiation.html) | [風險](companies/us-AMH/risk_plan.html) |
| AOS | [公司摘要](companies/us-AOS/tearsheet.html) | [啟動報告](companies/us-AOS/initiation.html) | [風險](companies/us-AOS/risk_plan.html) |
| AUR | [公司摘要](companies/us-AUR/tearsheet.html) | [啟動報告](companies/us-AUR/initiation.html) | [風險](companies/us-AUR/risk_plan.html) |
| AXTI | [公司摘要](companies/us-AXTI/tearsheet.html) | [啟動報告](companies/us-AXTI/initiation.html) | [風險](companies/us-AXTI/risk_plan.html) |
| BB | [公司摘要](companies/us-BB/tearsheet.html) | [啟動報告](companies/us-BB/initiation.html) | [風險](companies/us-BB/risk_plan.html) |
| BBIO | [公司摘要](companies/us-BBIO/tearsheet.html) | [啟動報告](companies/us-BBIO/initiation.html) | [風險](companies/us-BBIO/risk_plan.html) |
| BCRX | [公司摘要](companies/us-BCRX/tearsheet.html) | [啟動報告](companies/us-BCRX/initiation.html) | [風險](companies/us-BCRX/risk_plan.html) |
| BMRN | [公司摘要](companies/us-BMRN/tearsheet.html) | [啟動報告](companies/us-BMRN/initiation.html) | [風險](companies/us-BMRN/risk_plan.html) |
| BRX | [公司摘要](companies/us-BRX/tearsheet.html) | [啟動報告](companies/us-BRX/initiation.html) | [風險](companies/us-BRX/risk_plan.html) |
| BULL | [公司摘要](companies/us-BULL/tearsheet.html) | [啟動報告](companies/us-BULL/initiation.html) | [風險](companies/us-BULL/risk_plan.html) |
| CCJ | [公司摘要](companies/us-CCJ/tearsheet.html) | [啟動報告](companies/us-CCJ/initiation.html) | [風險](companies/us-CCJ/risk_plan.html) |
| CDE | [公司摘要](companies/us-CDE/tearsheet.html) | [啟動報告](companies/us-CDE/initiation.html) | [風險](companies/us-CDE/risk_plan.html) |
| CNH | [公司摘要](companies/us-CNH/tearsheet.html) | [啟動報告](companies/us-CNH/initiation.html) | [風險](companies/us-CNH/risk_plan.html) |
| CRML | [公司摘要](companies/us-CRML/tearsheet.html) | [啟動報告](companies/us-CRML/initiation.html) | [風險](companies/us-CRML/risk_plan.html) |
| DNOW | [公司摘要](companies/us-DNOW/tearsheet.html) | [啟動報告](companies/us-DNOW/initiation.html) | [風險](companies/us-DNOW/risk_plan.html) |
| DOC | [公司摘要](companies/us-DOC/tearsheet.html) | [啟動報告](companies/us-DOC/initiation.html) | [風險](companies/us-DOC/risk_plan.html) |
| ED | [公司摘要](companies/us-ED/tearsheet.html) | [啟動報告](companies/us-ED/initiation.html) | [風險](companies/us-ED/risk_plan.html) |
| ENB | [公司摘要](companies/us-ENB/tearsheet.html) | [啟動報告](companies/us-ENB/initiation.html) | [風險](companies/us-ENB/risk_plan.html) |
| EVRG | [公司摘要](companies/us-EVRG/tearsheet.html) | [啟動報告](companies/us-EVRG/initiation.html) | [風險](companies/us-EVRG/risk_plan.html) |
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
| NUE | [公司摘要](companies/us-NUE/tearsheet.html) | [啟動報告](companies/us-NUE/initiation.html) | [風險](companies/us-NUE/risk_plan.html) |
| O | [公司摘要](companies/us-O/tearsheet.html) | [啟動報告](companies/us-O/initiation.html) | [風險](companies/us-O/risk_plan.html) |
| P | [公司摘要](companies/us-P/tearsheet.html) | [啟動報告](companies/us-P/initiation.html) | [風險](companies/us-P/risk_plan.html) |
| PBA | [公司摘要](companies/us-PBA/tearsheet.html) | [啟動報告](companies/us-PBA/initiation.html) | [風險](companies/us-PBA/risk_plan.html) |
| PCG | [公司摘要](companies/us-PCG/tearsheet.html) | [啟動報告](companies/us-PCG/initiation.html) | [風險](companies/us-PCG/risk_plan.html) |
| PFE | [公司摘要](companies/us-PFE/tearsheet.html) | [啟動報告](companies/us-PFE/initiation.html) | [風險](companies/us-PFE/risk_plan.html) |
| Q | [公司摘要](companies/us-Q/tearsheet.html) | [啟動報告](companies/us-Q/initiation.html) | [風險](companies/us-Q/risk_plan.html) |
| SMMT | [公司摘要](companies/us-SMMT/tearsheet.html) | [啟動報告](companies/us-SMMT/initiation.html) | [風險](companies/us-SMMT/risk_plan.html) |
| SRE | [公司摘要](companies/us-SRE/tearsheet.html) | [啟動報告](companies/us-SRE/initiation.html) | [風險](companies/us-SRE/risk_plan.html) |
| SWKS | [公司摘要](companies/us-SWKS/tearsheet.html) | [啟動報告](companies/us-SWKS/initiation.html) | [風險](companies/us-SWKS/risk_plan.html) |
| TPG | [公司摘要](companies/us-TPG/tearsheet.html) | [啟動報告](companies/us-TPG/initiation.html) | [風險](companies/us-TPG/risk_plan.html) |
| TRP | [公司摘要](companies/us-TRP/tearsheet.html) | [啟動報告](companies/us-TRP/initiation.html) | [風險](companies/us-TRP/risk_plan.html) |
| TSEM | [公司摘要](companies/us-TSEM/tearsheet.html) | [啟動報告](companies/us-TSEM/initiation.html) | [風險](companies/us-TSEM/risk_plan.html) |
| UPS | [公司摘要](companies/us-UPS/tearsheet.html) | [啟動報告](companies/us-UPS/initiation.html) | [風險](companies/us-UPS/risk_plan.html) |
| VLO | [公司摘要](companies/us-VLO/tearsheet.html) | [啟動報告](companies/us-VLO/initiation.html) | [風險](companies/us-VLO/risk_plan.html) |
| VRTX | [公司摘要](companies/us-VRTX/tearsheet.html) | [啟動報告](companies/us-VRTX/initiation.html) | [風險](companies/us-VRTX/risk_plan.html) |
| XP | [公司摘要](companies/us-XP/tearsheet.html) | [啟動報告](companies/us-XP/initiation.html) | [風險](companies/us-XP/risk_plan.html) |

## 完整性解讀

- 檔案完整代表批次研究包具備所有必要檔案，且通過驗證。
- 投資決策就緒度仍需獨立判斷；研究標籤只代表模型投組研究姿態，不是個人化交易指示。
- 「等待買點」標的在觸發前必須維持 0% 部位，直到技術觸發與研究證據都被確認。
- 「現在可以買」標的只有在基本面、技術觸發與風險報酬皆有來源支持後，才可升級為模型投組候選。
