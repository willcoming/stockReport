# PEI Specialist Result Validation

- Generated at: 2026-08-06 08:50:45
- Output root: reports/public-equity-batch/2026-08-06-inventory
- Manifest: reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/manifest.json
- Expected results: 22
- Ready to apply: 0
- Missing: 22
- Invalid: 0
- Templates: 0
- Gate incomplete: 0
- Unexpected results: 0

## Object Counts

- none

## Results

| Symbol | Company | Status | Incomplete objects | Expected result JSON | Issues |
| --- | --- | --- | --- | --- | --- |
| 1215 | 卜蜂 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/tw-1215.result.json | expected_result_json_missing |
| 1216 | 統一 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/tw-1216.result.json | expected_result_json_missing |
| 2330 | 台積電 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/tw-2330.result.json | expected_result_json_missing |
| 2354 | 鴻準 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/tw-2354.result.json | expected_result_json_missing |
| 2454 | 聯發科 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/tw-2454.result.json | expected_result_json_missing |
| 3605 | 宏致 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/tw-3605.result.json | expected_result_json_missing |
| 6695 | 芯鼎 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/tw-6695.result.json | expected_result_json_missing |
| 6770 | 力積電 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/tw-6770.result.json | expected_result_json_missing |
| 9910 | 豐泰 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/tw-9910.result.json | expected_result_json_missing |
| AAPL | Apple Inc | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-AAPL.result.json | expected_result_json_missing |
| BABA | 阿里巴巴 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-BABA.result.json | expected_result_json_missing |
| CPRT | Copart Inc | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-CPRT.result.json | expected_result_json_missing |
| CRCL | Circle Internet Group | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-CRCL.result.json | expected_result_json_missing |
| GOOGL | Alphabet 公司 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-GOOGL.result.json | expected_result_json_missing |
| LVS | Las Vegas Sands Corp | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-LVS.result.json | expected_result_json_missing |
| MU | Micron Technology | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-MU.result.json | expected_result_json_missing |
| NFLX | Netflix Inc | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-NFLX.result.json | expected_result_json_missing |
| PLTR | Palantir Technologies Inc | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-PLTR.result.json | expected_result_json_missing |
| SOFI | SoFi Technologies Inc | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-SOFI.result.json | expected_result_json_missing |
| SPCX | 太空探索科技公司 | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-SPCX.result.json | expected_result_json_missing |
| TSLA | 特斯拉 / Tesla | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-TSLA.result.json | expected_result_json_missing |
| TSM | Taiwan Semiconductor | missing |  | reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-TSM.result.json | expected_result_json_missing |

## Unexpected Results

- none

## Completion Rule

Only `ready_to_apply` results should be passed to `apply_pei_specialist_results.py`. Applying still must be followed by the readiness cycle and full validation before any item is decision-ready.
