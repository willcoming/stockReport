# PEI Handoff Bundle

- Generated at: 2026-07-07 06:44:24
- Output root: reports/public-equity-batch/2026-07-06-us-kline
- Universe: reports/public-equity-batch/2026-07-06-us-kline/universe.json
- Readiness cycle refreshed: False

## Files

- quotes_json: reports/public-equity-batch/2026-07-06-us-kline/quotes.json
- official_evidence_handoff_json: reports/public-equity-batch/2026-07-06-us-kline/official_evidence_handoff.json
- valuation_handoff_json: reports/public-equity-batch/2026-07-06-us-kline/valuation_handoff.json
- risk_handoff_json: reports/public-equity-batch/2026-07-06-us-kline/risk_handoff.json
- execution_queue_json: reports/public-equity-batch/2026-07-06-us-kline/specialist_workorders/execution_queue.json
- execution_queue_md: reports/public-equity-batch/2026-07-06-us-kline/specialist_workorders/execution_queue.md
- input_packets_manifest_json: reports/public-equity-batch/2026-07-06-us-kline/specialist_workorders/input_packets/manifest.json
- input_packets_manifest_md: reports/public-equity-batch/2026-07-06-us-kline/specialist_workorders/input_packets/manifest.md
- summary_json: reports/public-equity-batch/2026-07-06-us-kline/pei_handoff_bundle.json
- summary_md: reports/public-equity-batch/2026-07-06-us-kline/pei_handoff_bundle.md

## Counts

- quotes: {'item_count': 59, 'resolved_count': 59, 'missing_count': 0}
- official_evidence: {'item_count': 59, 'status_counts': {'missing': 59}}
- valuation: {'item_count': 59, 'status_counts': {'input_partial': 59}}
- risk: {'item_count': 59, 'status_counts': {'input_ready': 59}}

## Completion Rule

These handoffs are specialist inputs only. They must not mark PEI research, valuation, risk, or 3M/12M/3Y investment horizon gates complete by themselves.
