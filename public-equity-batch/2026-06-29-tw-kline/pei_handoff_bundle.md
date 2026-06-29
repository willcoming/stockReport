# PEI Handoff Bundle

- Generated at: 2026-06-29 22:13:00
- Output root: reports/public-equity-batch/2026-06-29-tw-kline
- Universe: reports/public-equity-batch/2026-06-29-tw-kline/universe.json
- Readiness cycle refreshed: False

## Files

- quotes_json: reports/public-equity-batch/2026-06-29-tw-kline/quotes.json
- official_evidence_handoff_json: reports/public-equity-batch/2026-06-29-tw-kline/official_evidence_handoff.json
- valuation_handoff_json: reports/public-equity-batch/2026-06-29-tw-kline/valuation_handoff.json
- risk_handoff_json: reports/public-equity-batch/2026-06-29-tw-kline/risk_handoff.json
- execution_queue_json: reports/public-equity-batch/2026-06-29-tw-kline/specialist_workorders/execution_queue.json
- execution_queue_md: reports/public-equity-batch/2026-06-29-tw-kline/specialist_workorders/execution_queue.md
- input_packets_manifest_json: reports/public-equity-batch/2026-06-29-tw-kline/specialist_workorders/input_packets/manifest.json
- input_packets_manifest_md: reports/public-equity-batch/2026-06-29-tw-kline/specialist_workorders/input_packets/manifest.md
- summary_json: reports/public-equity-batch/2026-06-29-tw-kline/pei_handoff_bundle.json
- summary_md: reports/public-equity-batch/2026-06-29-tw-kline/pei_handoff_bundle.md

## Counts

- quotes: {'item_count': 54, 'resolved_count': 54, 'missing_count': 0}
- official_evidence: {'item_count': 54, 'status_counts': {'input_ready': 54}}
- valuation: {'item_count': 54, 'status_counts': {'input_partial': 54}}
- risk: {'item_count': 54, 'status_counts': {'input_ready': 52, 'input_partial': 2}}

## Execution Queue

- item_count: 54
- state_counts: {'awaiting_result': 54}
- workflow_counts: {'company-tearsheet + initiating-coverage': 54, 'comps-valuation': 54, 'portfolio-risk-management': 54}
- handoff_status_counts: {'quote': {'resolved': 54}, 'official_evidence': {'input_ready': 54}, 'valuation': {'input_partial': 54}, 'risk': {'input_partial': 2, 'input_ready': 52}}

## Specialist Input Packets

- packet_count: 54
- state_counts: {'awaiting_result': 54}
- manifest: reports/public-equity-batch/2026-06-29-tw-kline/specialist_workorders/input_packets/manifest.json

## Completion Rule

These handoffs are specialist inputs only. They must not mark PEI research, valuation, risk, or 3M/12M/3Y investment horizon gates complete by themselves.
