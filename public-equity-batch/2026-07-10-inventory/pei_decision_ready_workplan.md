# PEI Decision-ready Workplan

- 產出時間：2026-07-10 08:15:45
- Output root：reports/public-equity-batch/2026-07-10-inventory
- 標的數：0
- Decision-ready：0

## PEI Flow

1. Fetch current quotes and preserve source/as-of metadata.
2. Build input handoffs: `official_evidence_handoff.json`, `valuation_handoff.json`, and `risk_handoff.json`.
3. Run specialist work in order: `company-tearsheet -> comps-valuation -> initiating-coverage -> portfolio-risk-management`.
4. Write sourced `research_underwrite`, complete `investment_horizon`, `valuation`, and `risk_assessment` into each `source_ledger.json`.
5. Rebuild summaries, validate, then integrate the PEI section back into the source report.

PEI horizon is 3 months to 3 years. Complete research must separate the 3-month timing/catalyst view, 12-month base underwrite, and 3-year ownership thesis; short-term K-line or APEX context can gate execution but cannot replace the fundamental, valuation, and risk underwrite.

## Workflow Counts

- none: 0

## Items

| Symbol | Company | Decision-ready | Research status | Next workflows | Required ledger objects | Handoff inputs |
| --- | --- | --- | --- | --- | --- | --- |

## Completion Rule

This workplan is an execution checklist only. Do not mark an item decision-ready until validation confirms all required source-ledger objects are sourced and complete.
