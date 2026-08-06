# PEI Handoff Bundle

- Generated at: 2026-08-06 08:49:20
- Output root: reports/public-equity-batch/2026-08-06-inventory
- Universe: reports/public-equity-batch/2026-08-06-inventory/universe.json
- Readiness cycle refreshed: False

## Files

- quotes_json: reports/public-equity-batch/2026-08-06-inventory/quotes.json
- official_evidence_handoff_json: reports/public-equity-batch/2026-08-06-inventory/official_evidence_handoff.json
- valuation_handoff_json: reports/public-equity-batch/2026-08-06-inventory/valuation_handoff.json
- risk_handoff_json: reports/public-equity-batch/2026-08-06-inventory/risk_handoff.json
- execution_queue_json: reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/execution_queue.json
- execution_queue_md: reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/execution_queue.md
- input_packets_manifest_json: reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/input_packets/manifest.json
- input_packets_manifest_md: reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/input_packets/manifest.md
- summary_json: reports/public-equity-batch/2026-08-06-inventory/pei_handoff_bundle.json
- summary_md: reports/public-equity-batch/2026-08-06-inventory/pei_handoff_bundle.md

## Counts

- quotes: {'item_count': 22, 'resolved_count': 22, 'missing_count': 0}
- official_evidence: {'item_count': 22, 'status_counts': {'input_ready': 9, 'missing': 13}}
- valuation: {'item_count': 22, 'status_counts': {'input_partial': 22}}
- risk: {'item_count': 22, 'status_counts': {'input_ready': 21, 'input_partial': 1}}

## Execution Queue

- item_count: 0
- state_counts: {}
- workflow_counts: {}
- handoff_status_counts: {'quote': {}, 'official_evidence': {}, 'valuation': {}, 'risk': {}}

## Specialist Input Packets

- packet_count: 0
- state_counts: {}
- manifest: reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/input_packets/manifest.json

## Completion Rule

These handoffs are specialist inputs only. They must not mark PEI research, valuation, risk, or 3M/12M/3Y investment horizon gates complete by themselves.
