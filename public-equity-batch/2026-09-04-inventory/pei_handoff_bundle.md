# PEI Handoff Bundle

- Generated at: 2026-09-04 08:36:19
- Output root: reports/public-equity-batch/2026-09-04-inventory
- Universe: reports/public-equity-batch/2026-09-04-inventory/universe.json
- Readiness cycle refreshed: False

## Files

- quotes_json: reports/public-equity-batch/2026-09-04-inventory/quotes.json
- official_evidence_handoff_json: reports/public-equity-batch/2026-09-04-inventory/official_evidence_handoff.json
- valuation_handoff_json: reports/public-equity-batch/2026-09-04-inventory/valuation_handoff.json
- risk_handoff_json: reports/public-equity-batch/2026-09-04-inventory/risk_handoff.json
- execution_queue_json: reports/public-equity-batch/2026-09-04-inventory/specialist_workorders/execution_queue.json
- execution_queue_md: reports/public-equity-batch/2026-09-04-inventory/specialist_workorders/execution_queue.md
- input_packets_manifest_json: reports/public-equity-batch/2026-09-04-inventory/specialist_workorders/input_packets/manifest.json
- input_packets_manifest_md: reports/public-equity-batch/2026-09-04-inventory/specialist_workorders/input_packets/manifest.md
- summary_json: reports/public-equity-batch/2026-09-04-inventory/pei_handoff_bundle.json
- summary_md: reports/public-equity-batch/2026-09-04-inventory/pei_handoff_bundle.md

## Counts

- quotes: {'item_count': 27, 'resolved_count': 27, 'missing_count': 0}
- official_evidence: {'item_count': 27, 'status_counts': {'input_ready': 17, 'missing': 10}}
- valuation: {'item_count': 27, 'status_counts': {'input_ready': 17, 'input_partial': 10}}
- risk: {'item_count': 27, 'status_counts': {'input_ready': 25, 'input_partial': 2}}

## Completion Rule

These handoffs are specialist inputs only. They must not mark PEI research, valuation, risk, or 3M/12M/3Y investment horizon gates complete by themselves.
