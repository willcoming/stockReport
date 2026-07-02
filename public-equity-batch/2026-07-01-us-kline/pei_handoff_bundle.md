# PEI Handoff Bundle

- Generated at: 2026-07-02 06:51:50
- Output root: reports/public-equity-batch/2026-07-01-us-kline
- Universe: reports/public-equity-batch/2026-07-01-us-kline/universe.json
- Readiness cycle refreshed: True

## Files

- quotes_json: reports/public-equity-batch/2026-07-01-us-kline/quotes.json
- official_evidence_handoff_json: reports/public-equity-batch/2026-07-01-us-kline/official_evidence_handoff.json
- valuation_handoff_json: reports/public-equity-batch/2026-07-01-us-kline/valuation_handoff.json
- risk_handoff_json: reports/public-equity-batch/2026-07-01-us-kline/risk_handoff.json
- execution_queue_json: reports/public-equity-batch/2026-07-01-us-kline/specialist_workorders/execution_queue.json
- execution_queue_md: reports/public-equity-batch/2026-07-01-us-kline/specialist_workorders/execution_queue.md
- input_packets_manifest_json: reports/public-equity-batch/2026-07-01-us-kline/specialist_workorders/input_packets/manifest.json
- input_packets_manifest_md: reports/public-equity-batch/2026-07-01-us-kline/specialist_workorders/input_packets/manifest.md
- summary_json: reports/public-equity-batch/2026-07-01-us-kline/pei_handoff_bundle.json
- summary_md: reports/public-equity-batch/2026-07-01-us-kline/pei_handoff_bundle.md

## Counts

- quotes: {'item_count': 61, 'resolved_count': 0, 'missing_count': 61}
- official_evidence: {'item_count': 61, 'status_counts': {'missing': 61}}
- valuation: {'item_count': 61, 'status_counts': {'input_partial': 61}}
- risk: {'item_count': 61, 'status_counts': {'input_ready': 61}}

## Execution Queue

- item_count: 61
- state_counts: {'awaiting_result': 61}
- workflow_counts: {'company-tearsheet + initiating-coverage': 61, 'comps-valuation': 61, 'market-data refresh': 61, 'official-evidence review': 61, 'portfolio-risk-management': 61}
- handoff_status_counts: {'quote': {'item_missing': 61}, 'official_evidence': {'missing': 61}, 'valuation': {'input_partial': 61}, 'risk': {'input_ready': 61}}

## Specialist Input Packets

- packet_count: 61
- state_counts: {'awaiting_result': 61}
- manifest: reports/public-equity-batch/2026-07-01-us-kline/specialist_workorders/input_packets/manifest.json

## Completion Rule

These handoffs are specialist inputs only. They must not mark PEI research, valuation, risk, or 3M/12M/3Y investment horizon gates complete by themselves.
