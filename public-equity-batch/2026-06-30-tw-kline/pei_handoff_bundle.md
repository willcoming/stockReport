# PEI Handoff Bundle

- Generated at: 2026-06-30 16:13:57
- Output root: reports/public-equity-batch/2026-06-30-tw-kline
- Universe: reports/public-equity-batch/2026-06-30-tw-kline/universe.json
- Readiness cycle refreshed: True

## Files

- quotes_json: reports/public-equity-batch/2026-06-30-tw-kline/quotes.json
- official_evidence_handoff_json: reports/public-equity-batch/2026-06-30-tw-kline/official_evidence_handoff.json
- valuation_handoff_json: reports/public-equity-batch/2026-06-30-tw-kline/valuation_handoff.json
- risk_handoff_json: reports/public-equity-batch/2026-06-30-tw-kline/risk_handoff.json
- execution_queue_json: reports/public-equity-batch/2026-06-30-tw-kline/specialist_workorders/execution_queue.json
- execution_queue_md: reports/public-equity-batch/2026-06-30-tw-kline/specialist_workorders/execution_queue.md
- input_packets_manifest_json: reports/public-equity-batch/2026-06-30-tw-kline/specialist_workorders/input_packets/manifest.json
- input_packets_manifest_md: reports/public-equity-batch/2026-06-30-tw-kline/specialist_workorders/input_packets/manifest.md
- summary_json: reports/public-equity-batch/2026-06-30-tw-kline/pei_handoff_bundle.json
- summary_md: reports/public-equity-batch/2026-06-30-tw-kline/pei_handoff_bundle.md

## Counts

- quotes: {'item_count': 104, 'resolved_count': 104, 'missing_count': 0}
- official_evidence: {'item_count': 104, 'status_counts': {'missing': 104}}
- valuation: {'item_count': 104, 'status_counts': {'input_partial': 104}}
- risk: {'item_count': 104, 'status_counts': {'input_ready': 104}}

## Execution Queue

- item_count: 104
- state_counts: {'awaiting_result': 104}
- workflow_counts: {'company-tearsheet + initiating-coverage': 104, 'comps-valuation': 104, 'portfolio-risk-management': 104}
- handoff_status_counts: {'quote': {'resolved': 104}, 'official_evidence': {'missing': 104}, 'valuation': {'input_partial': 104}, 'risk': {'input_ready': 104}}

## Specialist Input Packets

- packet_count: 104
- state_counts: {'awaiting_result': 104}
- manifest: reports/public-equity-batch/2026-06-30-tw-kline/specialist_workorders/input_packets/manifest.json

## Completion Rule

These handoffs are specialist inputs only. They must not mark PEI research, valuation, risk, or 3M/12M/3Y investment horizon gates complete by themselves.
