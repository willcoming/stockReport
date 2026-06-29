# PEI Handoff Bundle

- Generated at: 2026-06-30 06:52:20
- Output root: reports/public-equity-batch/2026-06-29-us-kline
- Universe: reports/public-equity-batch/2026-06-29-us-kline/universe.json
- Readiness cycle refreshed: True

## Files

- quotes_json: reports/public-equity-batch/2026-06-29-us-kline/quotes.json
- official_evidence_handoff_json: reports/public-equity-batch/2026-06-29-us-kline/official_evidence_handoff.json
- valuation_handoff_json: reports/public-equity-batch/2026-06-29-us-kline/valuation_handoff.json
- risk_handoff_json: reports/public-equity-batch/2026-06-29-us-kline/risk_handoff.json
- execution_queue_json: reports/public-equity-batch/2026-06-29-us-kline/specialist_workorders/execution_queue.json
- execution_queue_md: reports/public-equity-batch/2026-06-29-us-kline/specialist_workorders/execution_queue.md
- input_packets_manifest_json: reports/public-equity-batch/2026-06-29-us-kline/specialist_workorders/input_packets/manifest.json
- input_packets_manifest_md: reports/public-equity-batch/2026-06-29-us-kline/specialist_workorders/input_packets/manifest.md
- summary_json: reports/public-equity-batch/2026-06-29-us-kline/pei_handoff_bundle.json
- summary_md: reports/public-equity-batch/2026-06-29-us-kline/pei_handoff_bundle.md

## Counts

- quotes: {'item_count': 45, 'resolved_count': 45, 'missing_count': 0}
- official_evidence: {'item_count': 45, 'status_counts': {'missing': 45}}
- valuation: {'item_count': 45, 'status_counts': {'input_partial': 45}}
- risk: {'item_count': 45, 'status_counts': {'input_ready': 45}}

## Execution Queue

- item_count: 45
- state_counts: {'awaiting_result': 45}
- workflow_counts: {'company-tearsheet + initiating-coverage': 45, 'comps-valuation': 45, 'official-evidence review': 45, 'portfolio-risk-management': 45}
- handoff_status_counts: {'quote': {'resolved': 45}, 'official_evidence': {'missing': 45}, 'valuation': {'input_partial': 45}, 'risk': {'input_ready': 45}}

## Specialist Input Packets

- packet_count: 45
- state_counts: {'awaiting_result': 45}
- manifest: reports/public-equity-batch/2026-06-29-us-kline/specialist_workorders/input_packets/manifest.json

## Completion Rule

These handoffs are specialist inputs only. They must not mark PEI research, valuation, risk, or 3M/12M/3Y investment horizon gates complete by themselves.
