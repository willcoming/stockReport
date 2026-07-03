# StockLoop PEI Workorder: batch-012

Use $stockloop-pei-batch-research at /Users/willcoming/code/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Users/willcoming/code/stockLoop/reports/public-equity-batch/2026-07-03/batches/batch-012.json`
- Output root: `/Users/willcoming/code/stockLoop/reports/public-equity-batch/2026-07-03`
- Quote ledger: `/Users/willcoming/code/stockLoop/reports/public-equity-batch/2026-07-03/quotes.json` if present
- Source reports: `["reports/news/2026-07-03_kol_news_decision_report.md"]`
- Do not edit source reports or unrelated files.
- Write artifacts only under the output root.
- Do not use personal holdings, `myStock/`, or brokerage data.

## Required Skill Sequence

Read `references/workflow-contract.md` before writing artifacts.
Load the Public Equity Investing router skill, then load each specialist skill before its step:

```text
company-tearsheet -> comps-valuation -> initiating-coverage -> portfolio-risk-management
```

For common equities, create:

- `companies/<output_subdir>/source_ledger.json`
- `companies/<output_subdir>/tearsheet.html`
- `companies/<output_subdir>/initiation.html`
- `companies/<output_subdir>/risk_plan.html`

Every `initiation.html` must include a visible `Research Snapshot` / `研究快照` section with:

- current price and price as-of timestamp
- source category and research posture
- 3-month, 12-month, and 3-year investment horizon view
- key triggers, risks, and missing evidence

Every `source_ledger.json` must include:

- `market_data.current_price.value`
- `market_data.current_price.currency`
- `market_data.current_price.as_of`
- `market_data.current_price.source`
- `research_status`
- if `research_status=complete`, a `research_underwrite` object with `summary`, `underwriting_status`, `thesis`, `key_debates`, `catalysts`, `risks`, `disconfirming_evidence`, `monitoring_items`, `as_of` or `retrieved_at`, and non-empty `source_register`
- `valuation_status` with value `not_run`, or `complete` only when `comps-valuation` or another downstream valuation workflow is explicitly run and sourced
- if `valuation_status=complete`, a `valuation` object with `summary`, `as_of` or `retrieved_at`, `posture`, and non-empty `methods`
- `risk_status` with value `not_run`, or `complete` only when `portfolio-risk-management` explicitly verifies implementation readiness, binding constraint, downside/stop distance, liquidity cap, sizing, max-loss posture, monitoring rules, and evidence
- if `risk_status=complete`, a `risk_assessment` object with `summary`, `implementation_readiness`, `binding_constraint`, `downside_or_stop_distance`, `liquidity_cap`, `recommended_size`, `max_loss_posture`, `monitoring_rules`, `as_of` or `retrieved_at`, and non-empty `evidence`
- `investment_horizon` with `near_term_3m`, `base_12m`, `long_term_3y`, `falsifiers`, `as_of`/`retrieved_at`, and `source_register` records covering all three horizon fields when specialist research is complete
- `missing_evidence` as a list

## Evidence Rules

- Do not create valuation model workbooks in this workflow unless the user explicitly asks; run `comps-valuation` in report/input mode and write the sourced valuation result into `source_ledger.json`.
- Fetch current primary/public sources for price, filings, thesis facts, risk inputs, and market data.
- Keep PEI independent from `stock-industry-report` / Deep Research reports. Do not copy a Deep Research rating, scenario, or conclusion into PEI `source_ledger.json` as gate evidence; use primary/public sources and PEI specialist outputs. Deep Research may be compared outside PEI readiness gates only.
- PEI horizon is 3 months to 3 years: short-term technical context may gate timing, but it must not replace the 3M/12M/3Y fundamental and valuation underwrite.
- If `quotes.json` is present in the output root, use it as the first price handoff and preserve its `source`, `as_of`, `retrieved_at`, and `warnings` in `source_ledger.json`.
- If `valuation_handoff.json` is present in the output root, use it as the first input to `comps-valuation`. It does not make `valuation_status=complete` without a sourced PEI valuation workflow.
- `valuation_status=complete` requires a peer set or relevant sector method, current price, input metrics, explicit valuation posture, source/as-of dates, and missing-evidence notes.
- If `official_evidence_handoff.json` is present in the output root, use it as official company/fundamental evidence input. It does not make `research_status=complete` without sourced PEI specialist research.
- `research_status=complete` requires a sourced initiating-coverage underwrite: thesis, key debates, catalysts, risks, disconfirming evidence, monitoring items, source register, data cut-off, and missing-evidence notes.
- If `risk_handoff.json` is present in the output root, use it as the first input to `portfolio-risk-management`. It may include local OHLCV, 20D average trade value, downside screen distance, and risk-budget inputs, but it does not make downside, liquidity, sizing, or implementation readiness complete by itself.
- `risk_status=complete` requires sourced PM risk work: implementation readiness, binding constraint, downside/stop distance, liquidity cap, recommended model size, max-loss posture, monitoring rules, source/as-of dates, and missing-evidence notes.
- If a `quotes.json` price uses stale/local fallback evidence, keep the item `Watch only` or `Not decision-ready` until a specialist source confirms current market data.
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
    "symbol": "ORCL",
    "company": "Oracle",
    "canonical_category": "wait_entry",
    "output_subdir": "us-ORCL",
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
    "symbol": "PLTR",
    "company": "Palantir",
    "canonical_category": "wait_entry",
    "output_subdir": "us-PLTR",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "theme_only",
    "industry_thesis_gate_label": "目前偏題材，缺公司級落地證據",
    "hype_risk": "medium",
    "hype_risk_label": "中",
    "industry_thesis_summary": "Gate=目前偏題材，缺公司級落地證據；炒作風險=中；成長驅動=庫存回補 / 週期復甦；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。",
    "industry_thesis_missing_evidence": [
      "SEC company tickers 未命中或 SEC_USER_AGENT 未設定",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少明確後續產業 KPI",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ]
  }
]
```

## Return Strict JSON

```json
{
  "batch_id": "batch-012",
  "items": [
    {
      "market_key": "us",
      "symbol": "ORCL",
      "output_subdir": "us-ORCL",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-07-03/companies/us-ORCL/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-07-03/companies/us-ORCL/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-07-03/companies/us-ORCL/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-07-03/companies/us-ORCL/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "theme_only",
      "hype_risk": "low",
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "PLTR",
      "output_subdir": "us-PLTR",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-07-03/companies/us-PLTR/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-07-03/companies/us-PLTR/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-07-03/companies/us-PLTR/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-07-03/companies/us-PLTR/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "theme_only",
      "hype_risk": "medium",
      "notes": ""
    }
  ],
  "portfolio_summary_updates": []
}
```
