# StockLoop PEI Workorder: batch-020

Use $stockloop-pei-batch-research at /Volumes/T7/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-26-us-kline/batches/batch-020.json`
- Output root: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-26-us-kline`
- Source reports: `["reports/usStock/2026-06-26_us_kline_decision_report.md"]`
- Do not edit source reports or unrelated files.
- Write artifacts only under the output root.
- Do not use personal holdings, `myStock/`, or brokerage data.

## Required Skill Sequence

Read `references/workflow-contract.md` before writing artifacts.
Load the Public Equity Investing router skill, then load each specialist skill before its step:

```text
company-tearsheet -> initiating-coverage -> portfolio-risk-management
```

For common equities, create:

- `companies/<output_subdir>/source_ledger.json`
- `companies/<output_subdir>/tearsheet.html`
- `companies/<output_subdir>/initiation.html`
- `companies/<output_subdir>/risk_plan.html`

Every `initiation.html` must include a visible `Research Snapshot` / `研究快照` section with:

- current price and price as-of timestamp
- source category and research posture
- key triggers, risks, and missing evidence

Every `source_ledger.json` must include:

- `market_data.current_price.value`
- `market_data.current_price.currency`
- `market_data.current_price.as_of`
- `market_data.current_price.source`
- `research_status`
- `valuation_status` with value `not_run` unless a separate downstream valuation workflow is explicitly run
- `missing_evidence` as a list

## Evidence Rules

- Do not create valuation model workbooks in this workflow.
- Fetch current primary/public sources for price, filings, thesis facts, risk inputs, and market data.
- Put source and as-of or retrieved-at timestamp in each `source_ledger.json`.
- If critical facts are missing, mark the item `Not decision-ready`.
- Do not use blank placeholders such as empty strings, `N/A`, `待查`, or `資料不足` to pass validation. If evidence is unavailable, list it in `missing_evidence`.
- Wait-entry symbols default to `Wait for trigger` and pre-trigger model size 0%. Upgrade only when fundamentals, technical trigger, current price context, and risk/reward are all source-supported.
- Use `industry_thesis_gate` and `hype_risk` as company-level industry evidence. `theme_only`, `hype_or_crowded`, `insufficient_data`, or `high` hype risk must remain `Watch only` or `Not decision-ready` until official filings/revenue/orders close the missing-evidence gap.

## Symbols

```json
[
  {
    "market_key": "us",
    "symbol": "CRNX",
    "company": "Crinetics Pharmaceuticals",
    "canonical_category": "wait_entry",
    "output_subdir": "us-CRNX",
    "instrument_type": "common_equity",
    "industry_thesis_gate": null,
    "industry_thesis_gate_label": null,
    "hype_risk": null,
    "hype_risk_label": null,
    "industry_thesis_summary": "",
    "industry_thesis_missing_evidence": []
  },
  {
    "market_key": "us",
    "symbol": "CYTK",
    "company": "Cytokinetics",
    "canonical_category": "wait_entry",
    "output_subdir": "us-CYTK",
    "instrument_type": "common_equity",
    "industry_thesis_gate": null,
    "industry_thesis_gate_label": null,
    "hype_risk": null,
    "hype_risk_label": null,
    "industry_thesis_summary": "",
    "industry_thesis_missing_evidence": []
  },
  {
    "market_key": "us",
    "symbol": "DBX",
    "company": "Dropbox",
    "canonical_category": "wait_entry",
    "output_subdir": "us-DBX",
    "instrument_type": "common_equity",
    "industry_thesis_gate": null,
    "industry_thesis_gate_label": null,
    "hype_risk": null,
    "hype_risk_label": null,
    "industry_thesis_summary": "",
    "industry_thesis_missing_evidence": []
  }
]
```

## Return Strict JSON

```json
{
  "batch_id": "batch-020",
  "items": [
    {
      "market_key": "us",
      "symbol": "CRNX",
      "output_subdir": "us-CRNX",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-CRNX/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-CRNX/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-CRNX/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-CRNX/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": null,
      "hype_risk": null,
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "CYTK",
      "output_subdir": "us-CYTK",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-CYTK/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-CYTK/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-CYTK/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-CYTK/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": null,
      "hype_risk": null,
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "DBX",
      "output_subdir": "us-DBX",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-DBX/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-DBX/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-DBX/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-DBX/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": null,
      "hype_risk": null,
      "notes": ""
    }
  ],
  "portfolio_summary_updates": []
}
```
