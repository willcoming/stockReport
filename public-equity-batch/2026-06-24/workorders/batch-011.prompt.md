# StockLoop PEI Workorder: batch-011

Use $stockloop-pei-batch-research at /Volumes/T7/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24/batches/batch-011.json`
- Output root: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24`
- Source reports: `["reports/news/2026-06-24_kol_news_decision_report.md"]`
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
    "symbol": "3711",
    "company": "日月光投控",
    "canonical_category": "wait_entry",
    "output_subdir": "tw-3711",
    "instrument_type": "common_equity"
  },
  {
    "market_key": "tw",
    "symbol": "3715",
    "company": "定穎投控",
    "canonical_category": "wait_entry",
    "output_subdir": "tw-3715",
    "instrument_type": "common_equity"
  },
  {
    "market_key": "tw",
    "symbol": "6116",
    "company": "彩晶",
    "canonical_category": "wait_entry",
    "output_subdir": "tw-6116",
    "instrument_type": "common_equity"
  }
]
```

## Return Strict JSON

```json
{
  "batch_id": "batch-011",
  "items": [
    {
      "market_key": "tw",
      "symbol": "3711",
      "output_subdir": "tw-3711",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-24/companies/tw-3711/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-24/companies/tw-3711/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-24/companies/tw-3711/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-24/companies/tw-3711/risk_plan.html"
      },
      "missing_evidence": [],
      "notes": ""
    },
    {
      "market_key": "tw",
      "symbol": "3715",
      "output_subdir": "tw-3715",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-24/companies/tw-3715/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-24/companies/tw-3715/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-24/companies/tw-3715/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-24/companies/tw-3715/risk_plan.html"
      },
      "missing_evidence": [],
      "notes": ""
    },
    {
      "market_key": "tw",
      "symbol": "6116",
      "output_subdir": "tw-6116",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-24/companies/tw-6116/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-24/companies/tw-6116/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-24/companies/tw-6116/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-24/companies/tw-6116/risk_plan.html"
      },
      "missing_evidence": [],
      "notes": ""
    }
  ],
  "portfolio_summary_updates": []
}
```
