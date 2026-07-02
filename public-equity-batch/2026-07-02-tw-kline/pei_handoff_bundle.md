# PEI Handoff Bundle

- Generated at: 2026-07-02 16:15:06
- Output root: reports/public-equity-batch/2026-07-02-tw-kline
- Universe: reports/public-equity-batch/2026-07-02-tw-kline/universe.json
- Readiness cycle refreshed: False

## Files

- quotes_json: reports/public-equity-batch/2026-07-02-tw-kline/quotes.json
- official_evidence_handoff_json: reports/public-equity-batch/2026-07-02-tw-kline/official_evidence_handoff.json
- valuation_handoff_json: reports/public-equity-batch/2026-07-02-tw-kline/valuation_handoff.json
- risk_handoff_json: reports/public-equity-batch/2026-07-02-tw-kline/risk_handoff.json
- execution_queue_json: reports/public-equity-batch/2026-07-02-tw-kline/specialist_workorders/execution_queue.json
- execution_queue_md: reports/public-equity-batch/2026-07-02-tw-kline/specialist_workorders/execution_queue.md
- input_packets_manifest_json: reports/public-equity-batch/2026-07-02-tw-kline/specialist_workorders/input_packets/manifest.json
- input_packets_manifest_md: reports/public-equity-batch/2026-07-02-tw-kline/specialist_workorders/input_packets/manifest.md
- summary_json: reports/public-equity-batch/2026-07-02-tw-kline/pei_handoff_bundle.json
- summary_md: reports/public-equity-batch/2026-07-02-tw-kline/pei_handoff_bundle.md

## Counts

- quotes: {'item_count': 85, 'resolved_count': 85, 'missing_count': 0}
- official_evidence: {'item_count': 85, 'status_counts': {'input_ready': 85}}
- valuation: {'item_count': 85, 'status_counts': {'input_partial': 85}}
- risk: {'item_count': 85, 'status_counts': {'input_ready': 85}}

## Execution Queue

- item_count: 85
- state_counts: {'awaiting_result': 85}
- workflow_counts: {'company-tearsheet + initiating-coverage': 85, 'comps-valuation': 85, 'portfolio-risk-management': 85}
- handoff_status_counts: {'quote': {'resolved': 85}, 'official_evidence': {'input_ready': 85}, 'valuation': {'input_partial': 85}, 'risk': {'input_ready': 85}}

## Specialist Input Packets

- packet_count: 85
- state_counts: {'awaiting_result': 85}
- manifest: reports/public-equity-batch/2026-07-02-tw-kline/specialist_workorders/input_packets/manifest.json

## Completion Rule

These handoffs are specialist inputs only. They must not mark PEI research, valuation, risk, or 3M/12M/3Y investment horizon gates complete by themselves.
