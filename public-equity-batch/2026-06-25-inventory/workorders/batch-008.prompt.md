# StockLoop PEI Workorder: batch-008

Use $stockloop-pei-batch-research at /Volumes/T7/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-25-inventory/batches/batch-008.json`
- Output root: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-25-inventory`
- Source reports: `["myStock/tw_stock_inventory.csv", "myStock/us_stock_inventory_cathay.csv", "myStock/us_stock_inventory_yuanta.csv", "/tmp/stockloop_inventory_merged.json", "reports/stock-inventory/2026-06-25-0810_inventory_health_check.md"]`
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
    "symbol": "DASH",
    "company": "DoorDash Inc",
    "canonical_category": "inventory_holding",
    "output_subdir": "us-DASH",
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
    "symbol": "ECHO",
    "company": "EchoStar Corporation",
    "canonical_category": "inventory_holding",
    "output_subdir": "us-ECHO",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "theme_only",
    "industry_thesis_gate_label": "目前偏題材，缺公司級落地證據",
    "hype_risk": "low",
    "hype_risk_label": "低",
    "industry_thesis_summary": "Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=庫存回補 / 週期復甦；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。",
    "industry_thesis_missing_evidence": [
      "SEC company tickers 未命中或 SEC_USER_AGENT 未設定",
      "OHLCV 價格脈絡未命中",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少明確後續產業 KPI",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ]
  },
  {
    "market_key": "us",
    "symbol": "GLW",
    "company": "康寧公司",
    "canonical_category": "inventory_holding",
    "output_subdir": "us-GLW",
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
  "batch_id": "batch-008",
  "items": [
    {
      "market_key": "us",
      "symbol": "DASH",
      "output_subdir": "us-DASH",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-25-inventory/companies/us-DASH/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-25-inventory/companies/us-DASH/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-25-inventory/companies/us-DASH/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-25-inventory/companies/us-DASH/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "theme_only",
      "hype_risk": "low",
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "ECHO",
      "output_subdir": "us-ECHO",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-25-inventory/companies/us-ECHO/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-25-inventory/companies/us-ECHO/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-25-inventory/companies/us-ECHO/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-25-inventory/companies/us-ECHO/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "theme_only",
      "hype_risk": "low",
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "GLW",
      "output_subdir": "us-GLW",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-25-inventory/companies/us-GLW/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-25-inventory/companies/us-GLW/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-25-inventory/companies/us-GLW/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-25-inventory/companies/us-GLW/risk_plan.html"
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
