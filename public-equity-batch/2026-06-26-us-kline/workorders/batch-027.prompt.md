# StockLoop PEI Workorder: batch-027

Use $stockloop-pei-batch-research at /Volumes/T7/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-26-us-kline/batches/batch-027.json`
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
    "symbol": "IBM",
    "company": "International Business Machines Corporation Common Stock",
    "canonical_category": "wait_entry",
    "output_subdir": "us-IBM",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "theme_only",
    "industry_thesis_gate_label": "目前偏題材，缺公司級落地證據",
    "hype_risk": "low",
    "hype_risk_label": "低",
    "industry_thesis_summary": "Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=庫存回補 / 週期復甦；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。",
    "industry_thesis_missing_evidence": [
      "SEC company tickers 未命中或 SEC_USER_AGENT 未設定",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少明確後續產業 KPI",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ]
  },
  {
    "market_key": "us",
    "symbol": "IBRX",
    "company": "ImmunityBio",
    "canonical_category": "wait_entry",
    "output_subdir": "us-IBRX",
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
    "symbol": "IMNM",
    "company": "Immunome",
    "canonical_category": "wait_entry",
    "output_subdir": "us-IMNM",
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
  "batch_id": "batch-027",
  "items": [
    {
      "market_key": "us",
      "symbol": "IBM",
      "output_subdir": "us-IBM",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IBM/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IBM/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IBM/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IBM/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "theme_only",
      "hype_risk": "low",
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "IBRX",
      "output_subdir": "us-IBRX",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IBRX/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IBRX/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IBRX/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IBRX/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": null,
      "hype_risk": null,
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "IMNM",
      "output_subdir": "us-IMNM",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IMNM/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IMNM/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IMNM/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-26-us-kline/companies/us-IMNM/risk_plan.html"
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
