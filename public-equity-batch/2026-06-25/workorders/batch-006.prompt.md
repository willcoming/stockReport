# StockLoop PEI Workorder: batch-006

Use $stockloop-pei-batch-research at /Volumes/T7/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-25/batches/batch-006.json`
- Output root: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-25`
- Source reports: `["reports/news/2026-06-25_kol_news_decision_report.md"]`
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
    "market_key": "tw",
    "symbol": "3481",
    "company": "群創光電",
    "canonical_category": "buy_now",
    "output_subdir": "tw-3481",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "hype_or_crowded",
    "industry_thesis_gate_label": "炒作或擁擠交易風險偏高",
    "hype_risk": "high",
    "hype_risk_label": "高",
    "industry_thesis_summary": "Gate=炒作或擁擠交易風險偏高；炒作風險=高；成長驅動=AI / 資料中心；題材/價格/新聞熱度偏熱，但缺少公司級官方營收、訂單或財報證據支撐。",
    "industry_thesis_missing_evidence": [
      "台股官方公司基本資料未命中",
      "月營收資料未命中或未接到此市場",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ]
  },
  {
    "market_key": "tw",
    "symbol": "3556",
    "company": "禾瑞亞",
    "canonical_category": "buy_now",
    "output_subdir": "tw-3556",
    "instrument_type": "common_equity",
    "industry_thesis_gate": null,
    "industry_thesis_gate_label": null,
    "hype_risk": null,
    "hype_risk_label": null,
    "industry_thesis_summary": "",
    "industry_thesis_missing_evidence": []
  },
  {
    "market_key": "tw",
    "symbol": "5285",
    "company": "界霖",
    "canonical_category": "buy_now",
    "output_subdir": "tw-5285",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "hype_or_crowded",
    "industry_thesis_gate_label": "炒作或擁擠交易風險偏高",
    "hype_risk": "high",
    "hype_risk_label": "高",
    "industry_thesis_summary": "Gate=炒作或擁擠交易風險偏高；炒作風險=高；成長驅動=800V 高壓直流電產品出貨進度 [23]。；題材/價格/新聞熱度偏熱，但缺少公司級官方營收、訂單或財報證據支撐。",
    "industry_thesis_missing_evidence": [
      "台股官方公司基本資料未命中",
      "月營收資料未命中或未接到此市場",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ]
  }
]
```

## Return Strict JSON

```json
{
  "batch_id": "batch-006",
  "items": [
    {
      "market_key": "tw",
      "symbol": "3481",
      "output_subdir": "tw-3481",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-25/companies/tw-3481/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-25/companies/tw-3481/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-25/companies/tw-3481/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-25/companies/tw-3481/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "hype_or_crowded",
      "hype_risk": "high",
      "notes": ""
    },
    {
      "market_key": "tw",
      "symbol": "3556",
      "output_subdir": "tw-3556",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-25/companies/tw-3556/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-25/companies/tw-3556/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-25/companies/tw-3556/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-25/companies/tw-3556/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": null,
      "hype_risk": null,
      "notes": ""
    },
    {
      "market_key": "tw",
      "symbol": "5285",
      "output_subdir": "tw-5285",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-25/companies/tw-5285/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-25/companies/tw-5285/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-25/companies/tw-5285/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-25/companies/tw-5285/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "hype_or_crowded",
      "hype_risk": "high",
      "notes": ""
    }
  ],
  "portfolio_summary_updates": []
}
```
