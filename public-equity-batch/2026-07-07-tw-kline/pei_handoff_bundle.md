# PEI Handoff Bundle

- Generated at: 2026-07-07 16:13:31
- Output root: reports/public-equity-batch/2026-07-07-tw-kline
- Universe: reports/public-equity-batch/2026-07-07-tw-kline/universe.json
- Readiness cycle refreshed: False

## Files

- quotes_json: reports/public-equity-batch/2026-07-07-tw-kline/quotes.json
- official_evidence_handoff_json: reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json
- valuation_handoff_json: reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json
- risk_handoff_json: reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json
- execution_queue_json: reports/public-equity-batch/2026-07-07-tw-kline/specialist_workorders/execution_queue.json
- execution_queue_md: reports/public-equity-batch/2026-07-07-tw-kline/specialist_workorders/execution_queue.md
- input_packets_manifest_json: reports/public-equity-batch/2026-07-07-tw-kline/specialist_workorders/input_packets/manifest.json
- input_packets_manifest_md: reports/public-equity-batch/2026-07-07-tw-kline/specialist_workorders/input_packets/manifest.md
- summary_json: reports/public-equity-batch/2026-07-07-tw-kline/pei_handoff_bundle.json
- summary_md: reports/public-equity-batch/2026-07-07-tw-kline/pei_handoff_bundle.md

## Counts

- quotes: {'item_count': 10, 'resolved_count': 10, 'missing_count': 0}
- official_evidence: {'item_count': 10, 'status_counts': {'missing': 10}}
- valuation: {'item_count': 10, 'status_counts': {'input_partial': 10}}
- risk: {'item_count': 10, 'status_counts': {'input_ready': 10}}

## Execution Queue

- item_count: 10
- state_counts: {'awaiting_result': 10}
- workflow_counts: {'company-tearsheet + initiating-coverage': 10, 'comps-valuation': 10, 'portfolio-risk-management': 10}
- handoff_status_counts: {'quote': {'resolved': 10}, 'official_evidence': {'missing': 10}, 'valuation': {'input_partial': 10}, 'risk': {'input_ready': 10}}

## Specialist Input Packets

- packet_count: 10
- state_counts: {'awaiting_result': 10}
- manifest: reports/public-equity-batch/2026-07-07-tw-kline/specialist_workorders/input_packets/manifest.json

## Completion Rule

These handoffs are specialist inputs only. They must not mark PEI research, valuation, risk, or 3M/12M/3Y investment horizon gates complete by themselves.
