# StockLoop PEI Workorder: batch-003

Use $stockloop-pei-batch-research at /Volumes/T7/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/batches/batch-003.json`
- Output root: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory`
- Source reports: `["myStock/tw_stock_inventory.csv", "myStock/us_stock_inventory_cathay.csv", "myStock/us_stock_inventory_yuanta.csv", "/tmp/stockloop_inventory_merged.json", "reports/stock-inventory/2026-06-24-1107_inventory_health_check.md"]`
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

## Symbols

```json
[
  {
    "market_key": "tw",
    "symbol": "2408",
    "company": "南亞科",
    "canonical_category": "inventory_holding",
    "output_subdir": "tw-2408",
    "instrument_type": "common_equity"
  },
  {
    "market_key": "tw",
    "symbol": "2454",
    "company": "聯發科",
    "canonical_category": "inventory_holding",
    "output_subdir": "tw-2454",
    "instrument_type": "common_equity"
  },
  {
    "market_key": "tw",
    "symbol": "2618",
    "company": "長榮航",
    "canonical_category": "inventory_holding",
    "output_subdir": "tw-2618",
    "instrument_type": "common_equity"
  }
]
```

## Return Strict JSON

```json
{
  "batch_id": "batch-003",
  "items": [
    {
      "market_key": "tw",
      "symbol": "2408",
      "output_subdir": "tw-2408",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2408/source_ledger.json",
        "tearsheet": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2408/tearsheet.html",
        "initiation": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2408/initiation.html",
        "risk_plan": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2408/risk_plan.html"
      },
      "missing_evidence": [],
      "notes": ""
    },
    {
      "market_key": "tw",
      "symbol": "2454",
      "output_subdir": "tw-2454",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2454/source_ledger.json",
        "tearsheet": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2454/tearsheet.html",
        "initiation": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2454/initiation.html",
        "risk_plan": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2454/risk_plan.html"
      },
      "missing_evidence": [],
      "notes": ""
    },
    {
      "market_key": "tw",
      "symbol": "2618",
      "output_subdir": "tw-2618",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2618/source_ledger.json",
        "tearsheet": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2618/tearsheet.html",
        "initiation": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2618/initiation.html",
        "risk_plan": "/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-inventory/companies/tw-2618/risk_plan.html"
      },
      "missing_evidence": [],
      "notes": ""
    }
  ],
  "portfolio_summary_updates": []
}
```
