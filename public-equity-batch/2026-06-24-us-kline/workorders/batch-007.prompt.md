# StockLoop PEI Workorder: batch-007

Use $stockloop-pei-batch-research at /Volumes/T7/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-us-kline/batches/batch-007.json`
- Output root: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-us-kline`
- Source reports: `["reports/usStock/2026-06-24_us_kline_decision_report.md"]`
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
    "symbol": "BBIO",
    "company": "BridgeBio Pharma",
    "canonical_category": "wait_entry",
    "output_subdir": "us-BBIO",
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
    "symbol": "BIRK",
    "company": "Birkenstock Holding plc Ordinary Shares",
    "canonical_category": "wait_entry",
    "output_subdir": "us-BIRK",
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
    "symbol": "BKNG",
    "company": "Booking Holdings Inc. - Common Stock",
    "canonical_category": "wait_entry",
    "output_subdir": "us-BKNG",
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
  "batch_id": "batch-007",
  "items": [
    {
      "market_key": "us",
      "symbol": "BBIO",
      "output_subdir": "us-BBIO",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BBIO/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BBIO/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BBIO/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BBIO/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": null,
      "hype_risk": null,
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "BIRK",
      "output_subdir": "us-BIRK",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BIRK/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BIRK/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BIRK/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BIRK/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": null,
      "hype_risk": null,
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "BKNG",
      "output_subdir": "us-BKNG",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BKNG/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BKNG/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BKNG/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-BKNG/risk_plan.html"
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
