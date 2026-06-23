# StockLoop PEI Workorder: batch-030

Use $stockloop-pei-batch-research at /Volumes/T7/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-22/batches/batch-030.json`
- Output root: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-22`
- Source reports: `["reports/twStock/2026-06-22_tw_kline_decision_report.md", "reports/usStock/2026-06-22_us_kline_decision_report.md"]`
- Do not edit source reports or unrelated files.
- Write artifacts only under the output root.
- Do not use personal holdings, `myStock/`, or brokerage data.

## Required Skill Sequence

Read `references/workflow-contract.md` before writing artifacts.
Load the Public Equity Investing router skill, then load each specialist skill before its step:

```text
company-tearsheet -> initiating-coverage -> dcf-model-builder -> portfolio-risk-management
```

For common equities, create:

- `companies/<output_subdir>/source_ledger.json`
- `companies/<output_subdir>/tearsheet.html`
- `companies/<output_subdir>/initiation.html`
- `companies/<output_subdir>/dcf/banker_formula_workbook.xlsx`
- `companies/<output_subdir>/risk_plan.html`

For ETF, bond ETF, leveraged ETF, or fund-like instruments, write `dcf_not_applicable.md` instead of a DCF workbook.

Every `initiation.html` must include a visible `Valuation Snapshot` / `估值快照` section with:

- current price and price as-of timestamp
- DCF implied value or range
- DCF upside/downside
- DCF status
- key missing valuation inputs

Every `source_ledger.json` must include:

- `market_data.current_price.value`
- `market_data.current_price.currency`
- `market_data.current_price.as_of`
- `market_data.current_price.source`
- `dcf_valuation.status`
- `dcf_valuation.workbook_path`
- `dcf_valuation.base_case_value_per_share`
- `dcf_valuation.bear_case_value_per_share`
- `dcf_valuation.bull_case_value_per_share`
- `dcf_valuation.upside_downside_pct`
- `dcf_valuation.as_of`
- `dcf_valuation.key_missing_inputs`

## Evidence Rules

- Treat `DFC` as a typo and use `DCF` consistently in files and fields.
- Fetch current primary/public sources for price, filings, financials, valuation inputs, and market data.
- Put source and as-of or retrieved-at timestamp in each `source_ledger.json`.
- If price, share count, net debt, WACC, or operating data is missing, DCF status is no higher than `screen-grade`.
- If critical facts are missing, mark the item `Not decision-ready`.
- Do not use blank placeholders such as empty strings, `N/A`, `待查`, or `資料不足` to pass validation. If an input is unavailable, list it in `dcf_valuation.key_missing_inputs`.
- Wait-entry symbols default to `Wait for trigger` and pre-trigger model size 0%. Upgrade only when valuation, fundamentals, technical trigger, and risk/reward are all source-supported.

## Symbols

```json
[
  {
    "market_key": "us",
    "symbol": "BCRX",
    "company": "BioCryst Pharmaceuticals",
    "canonical_category": "wait_entry",
    "output_subdir": "us-BCRX",
    "dcf_applicability": "required"
  },
  {
    "market_key": "us",
    "symbol": "BMRN",
    "company": "BioMarin Pharmaceutical Inc. - Common Stock",
    "canonical_category": "wait_entry",
    "output_subdir": "us-BMRN",
    "dcf_applicability": "required"
  },
  {
    "market_key": "us",
    "symbol": "BULL",
    "company": "Webull Corporation - Class A Ordinary Shares",
    "canonical_category": "wait_entry",
    "output_subdir": "us-BULL",
    "dcf_applicability": "required"
  }
]
```

## Return Strict JSON

```json
{
  "batch_id": "batch-030",
  "items": [
    {
      "market_key": "us",
      "symbol": "BCRX",
      "output_subdir": "us-BCRX",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-22/companies/us-BCRX/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-22/companies/us-BCRX/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-22/companies/us-BCRX/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-22/companies/us-BCRX/risk_plan.html",
        "dcf": "reports/public-equity-batch/2026-06-22/companies/us-BCRX/dcf/banker_formula_workbook.xlsx"
      },
      "missing_evidence": [],
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "BMRN",
      "output_subdir": "us-BMRN",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-22/companies/us-BMRN/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-22/companies/us-BMRN/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-22/companies/us-BMRN/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-22/companies/us-BMRN/risk_plan.html",
        "dcf": "reports/public-equity-batch/2026-06-22/companies/us-BMRN/dcf/banker_formula_workbook.xlsx"
      },
      "missing_evidence": [],
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "BULL",
      "output_subdir": "us-BULL",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-22/companies/us-BULL/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-22/companies/us-BULL/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-22/companies/us-BULL/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-22/companies/us-BULL/risk_plan.html",
        "dcf": "reports/public-equity-batch/2026-06-22/companies/us-BULL/dcf/banker_formula_workbook.xlsx"
      },
      "missing_evidence": [],
      "notes": ""
    }
  ],
  "portfolio_summary_updates": []
}
```
