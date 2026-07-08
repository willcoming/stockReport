# PEI Specialist Workorder: AXTI AXT Inc

Use $stockloop-pei-batch-research at /Users/willcoming/code/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work. Load the Public Equity Investing router skill, then load each required specialist skill before its step.

## Scope

- Symbol：`AXTI`
- Company：`AXT Inc`
- Output root：`reports/public-equity-batch/2026-07-08-inventory`
- Company directory：`reports/public-equity-batch/2026-07-08-inventory/companies/us-AXTI`
- Existing source ledger：`reports/public-equity-batch/2026-07-08-inventory/companies/us-AXTI/source_ledger.json`
- Expected result JSON：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/us-AXTI.result.json`
- Edit only files under the company directory unless rebuilding portfolio summaries after all specialist work is complete.
- Do not edit source reports or unrelated files.
- Use model-portfolio assumptions, not personal holdings, shares, broker data, cost basis, or portfolio weights.
- Keep this PEI work independent from `stock-industry-report` / Deep Research reports. Do not use a Deep Research rating, scenario, or conclusion as PEI source-ledger gate evidence.

## Specialist Execution Inputs

- Workorder manifest：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/manifest.json`
- Execution queue JSON：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/execution_queue.json`
- Execution queue MD：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/execution_queue.md`
- Input packet JSON：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/input_packets/us-AXTI.packet.json`
- Input packet MD：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/input_packets/us-AXTI.packet.md`
- Result template JSON：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/result_templates/us-AXTI.result.template.json`
- Result template MD：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/result_templates/us-AXTI.result.template.md`
- Specialist gap ledger JSON：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/specialist_gap_ledger.json`
- Specialist gap ledger MD：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/specialist_gap_ledger.md`
- Specialist gap ledger CSV：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/specialist_gap_ledger.csv`
- Result validator report JSON：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/validate_results_report.json`
- Result validator report MD：`reports/public-equity-batch/2026-07-08-inventory/specialist_workorders/validate_results_report.md`

Read the input packet first, then use the result template and specialist gap ledger as the checklist for what evidence still needs to be sourced. The template files are scaffolds only; save the completed payload to the expected `.result.json` path.

## Required Specialist Sequence

```text
company-tearsheet -> comps-valuation -> initiating-coverage -> portfolio-risk-management
```

## Required Ledger Objects

- `market_data`
- `official_validation`
- `research_underwrite`
- `investment_horizon`
- `valuation`
- `risk_assessment`

## Input Handoffs

- `reports/public-equity-batch/2026-07-08-inventory/quotes.json`
- `reports/public-equity-batch/2026-07-08-inventory/official_evidence_handoff.json`
- `reports/public-equity-batch/2026-07-08-inventory/valuation_handoff.json`
- `reports/public-equity-batch/2026-07-08-inventory/risk_handoff.json`

## Completion Contract

- PEI horizon is 3 months to 3 years.
- Complete `investment_horizon` must include `status=complete`, `near_term_3m`, `base_12m`, `long_term_3y`, non-empty `falsifiers`, `as_of`/`retrieved_at`, and `source_register` records that cover all three horizon fields.
- Complete `market_data` must include `market_data.current_price.value`, `currency`, `as_of`, and `source` from quote handoff or another PEI-accepted market-data source.
- Complete `research_underwrite` must include thesis, key debates, catalysts, risks, disconfirming evidence, monitoring items, data cut-off, and source-register records with source and as-of/retrieved-at.
- Complete `valuation` must include sourced current price, peer set or relevant sector method, input metrics, valuation posture, remaining evidence gaps, and method records with method, source, and as-of/retrieved-at.
- Complete `risk_assessment` must include implementation readiness, binding constraint, downside/stop distance, liquidity cap, recommended model size, max-loss posture, monitoring rules, and evidence records with source and as-of/retrieved-at.
- `source_ledger_patch.sources`, `research_underwrite.source_register`, `valuation.methods`, and `risk_assessment.evidence` must cite PEI primary/public evidence, not `reports/stock-industry-research` or `stock-industry-report` outputs.
- If a specialist step cannot source the required evidence, keep the corresponding status partial/not_run and list the missing evidence; do not use placeholders to pass validation.
- Use `source_ledger_patch.resolved_missing_evidence` only for exact stale `missing_evidence` strings that this sourced result has closed.
- Return a `source_ledger_patch` object that can be applied by `apply_pei_specialist_result.py` for one file or `apply_pei_specialist_results.py` for a completed batch; include only the sourced fields you are updating.
- After saving the expected result JSON, run the read-only result validator before applying source-ledger patches.

## After This Workorder

After all specialist workorders for the output root finish, run:

```bash
python3 .agents/skills/stockloop-pei-batch-research/scripts/validate_pei_specialist_results.py \
  --output-root reports/public-equity-batch/2026-07-08-inventory
python3 .agents/skills/stockloop-pei-batch-research/scripts/apply_pei_specialist_results.py \
  --output-root reports/public-equity-batch/2026-07-08-inventory \
  --require-all-results
python3 .agents/skills/stockloop-pei-batch-research/scripts/run_pei_readiness_cycle.py \
  --universe-json reports/public-equity-batch/2026-07-08-inventory/universe.json \
  --output-root reports/public-equity-batch/2026-07-08-inventory
```

## Return Strict JSON

```json
{
  "symbol": "AXTI",
  "company": "AXT Inc",
  "output_subdir": "us-AXTI",
  "status": "complete|partial|blocked",
  "completed_specialist_skills": [
    "company-tearsheet",
    "comps-valuation",
    "initiating-coverage",
    "portfolio-risk-management"
  ],
  "updated_source_ledger": "reports/public-equity-batch/2026-07-08-inventory/companies/us-AXTI/source_ledger.json",
  "updated_objects": [
    "market_data",
    "official_validation",
    "research_underwrite",
    "investment_horizon",
    "valuation",
    "risk_assessment"
  ],
  "source_ledger_patch": {
    "market_data": {
      "current_price": {
        "value": "",
        "currency": "",
        "as_of": "",
        "source": ""
      }
    },
    "research_status": "complete|partial|blocked",
    "research_underwrite": {
      "summary": "",
      "underwriting_status": "",
      "thesis": "",
      "key_debates": "",
      "catalysts": "",
      "risks": "",
      "disconfirming_evidence": "",
      "monitoring_items": "",
      "as_of": "",
      "source_register": [
        {
          "source": "",
          "as_of": "",
          "notes": ""
        }
      ]
    },
    "investment_horizon": {
      "status": "complete|partial",
      "near_term_3m": "",
      "base_12m": "",
      "long_term_3y": "",
      "falsifiers": [],
      "as_of": "",
      "source_register": [
        {
          "source": "",
          "as_of": "",
          "horizon_fields": [
            "near_term_3m",
            "base_12m",
            "long_term_3y"
          ],
          "notes": ""
        }
      ]
    },
    "valuation_status": "not_run|complete",
    "valuation": {
      "summary": "",
      "as_of": "",
      "posture": "",
      "methods": [
        {
          "method": "",
          "source": "",
          "as_of": "",
          "inputs": {},
          "gaps": []
        }
      ]
    },
    "risk_status": "not_run|complete",
    "risk_assessment": {
      "summary": "",
      "implementation_readiness": "",
      "binding_constraint": "",
      "downside_or_stop_distance": "",
      "liquidity_cap": "",
      "recommended_size": "",
      "max_loss_posture": "",
      "monitoring_rules": "",
      "as_of": "",
      "evidence": [
        {
          "source": "",
          "as_of": "",
          "notes": ""
        }
      ]
    },
    "missing_evidence": [],
    "resolved_missing_evidence": [],
    "sources": []
  },
  "missing_evidence": [],
  "notes": ""
}
```
