# PEI Specialist Result Template: TSM Taiwan Semiconductor Manufacturing Company Ltd.

- Expected result JSON: reports/public-equity-batch/2026-07-06-us-kline/specialist_workorders/us-TSM.result.json
- Source ledger: reports/public-equity-batch/2026-07-06-us-kline/companies/us-TSM/source_ledger.json
- Input packet: reports/public-equity-batch/2026-07-06-us-kline/specialist_workorders/input_packets/us-TSM.packet.json
- Required objects: research_underwrite; investment_horizon; valuation; risk_assessment
- Handoff statuses: {'quote': 'resolved', 'official_evidence': 'missing', 'valuation': 'input_partial', 'risk': 'input_ready'}

## Safety

- This template is not applyable as-is.
- Copy the completed payload to the expected `.result.json` path only after PEI specialist work is sourced.
- Replace `source_ledger_patch_template` with `source_ledger_patch` only in the completed result JSON.
- Use `resolved_missing_evidence` only for exact stale `missing_evidence` strings that the sourced specialist result has closed.

## Gate Checklist

### research_underwrite
- [ ] research_status=complete only if sourced initiating coverage is complete
- [ ] research_underwrite.summary
- [ ] research_underwrite.underwriting_status
- [ ] research_underwrite.thesis
- [ ] research_underwrite.key_debates
- [ ] research_underwrite.catalysts
- [ ] research_underwrite.risks
- [ ] research_underwrite.disconfirming_evidence
- [ ] research_underwrite.monitoring_items
- [ ] research_underwrite.as_of or retrieved_at
- [ ] research_underwrite.source_register non-empty
- [ ] each research_underwrite.source_register record has source/source_name/url/file_path and as_of or retrieved_at

### investment_horizon
- [ ] investment_horizon.status=complete
- [ ] investment_horizon.near_term_3m
- [ ] investment_horizon.base_12m
- [ ] investment_horizon.long_term_3y
- [ ] investment_horizon.falsifiers non-empty
- [ ] investment_horizon.as_of or retrieved_at
- [ ] investment_horizon.source_register non-empty
- [ ] investment_horizon.source_register covers near_term_3m, base_12m, and long_term_3y

### valuation
- [ ] valuation_status=complete only after sourced valuation work
- [ ] valuation.summary
- [ ] valuation.as_of or retrieved_at
- [ ] valuation.posture
- [ ] valuation.methods non-empty with peer/sector method, inputs, source dates, and gaps
- [ ] each valuation.methods record has method, source/source_name/url/file_path, and as_of or retrieved_at

### risk_assessment
- [ ] risk_status=complete only after sourced portfolio-risk-management work
- [ ] risk_assessment.summary
- [ ] risk_assessment.implementation_readiness
- [ ] risk_assessment.binding_constraint
- [ ] risk_assessment.downside_or_stop_distance
- [ ] risk_assessment.liquidity_cap
- [ ] risk_assessment.recommended_size
- [ ] risk_assessment.max_loss_posture
- [ ] risk_assessment.monitoring_rules
- [ ] risk_assessment.as_of or retrieved_at
- [ ] risk_assessment.evidence non-empty
- [ ] each risk_assessment.evidence record has source/source_name/url/file_path and as_of or retrieved_at

## Completion Rule

A returned result is complete only after it is applied, object gates pass, the readiness cycle reruns, and validation marks the item decision-ready.
