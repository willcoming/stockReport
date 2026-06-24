# StockLoop PEI Workorder: batch-003

Use $stockloop-pei-batch-research at /Volumes/T7/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Volumes/T7/stockLoop/reports/public-equity-batch/2026-06-24-us-kline/batches/batch-003.json`
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
    "symbol": "HON",
    "company": "Honeywell International Inc. - Common Stock",
    "canonical_category": "buy_now",
    "output_subdir": "us-HON",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "theme_only",
    "industry_thesis_gate_label": "目前偏題材，缺公司級落地證據",
    "hype_risk": "low",
    "hype_risk_label": "低",
    "industry_thesis_summary": "Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=雙策略整合：LZEMA20/3MA；收盤位置 72.7%；振幅 2.2%；buySources=LZEMA20/3MA；buyCount=2；entrySource=LZEMA20；entrySource=3MA；entryReason=多方趨勢開始；entryReason=空方趨勢結束 / 多方趨勢開始；buyCount 2；今日買點 LZEMA20/3MA；估算成交金額USD 897,222,835；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。",
    "industry_thesis_missing_evidence": [
      "SEC company tickers 未命中或 SEC_USER_AGENT 未設定",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ]
  },
  {
    "market_key": "us",
    "symbol": "LOW",
    "company": "Lowe's Companies",
    "canonical_category": "buy_now",
    "output_subdir": "us-LOW",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "theme_only",
    "industry_thesis_gate_label": "目前偏題材，缺公司級落地證據",
    "hype_risk": "low",
    "hype_risk_label": "低",
    "industry_thesis_summary": "Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=AI / 資料中心；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。",
    "industry_thesis_missing_evidence": [
      "SEC company tickers 未命中或 SEC_USER_AGENT 未設定",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ]
  },
  {
    "market_key": "us",
    "symbol": "MA",
    "company": "Mastercard Incorporated Common Stock",
    "canonical_category": "buy_now",
    "output_subdir": "us-MA",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "theme_only",
    "industry_thesis_gate_label": "目前偏題材，缺公司級落地證據",
    "hype_risk": "low",
    "hype_risk_label": "低",
    "industry_thesis_summary": "Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=雙策略整合：LZEMA20/3MA；收盤位置 67.0%；振幅 2.5%；buySources=LZEMA20/3MA；buyCount=2；entrySource=LZEMA20；entrySource=3MA；entryReason=空方趨勢結束；entryReason=空方趨勢結束 / 多方趨勢開始；buyCount 2；今日買點 LZEMA20/3MA；估算成交金額USD 1,707,486,972；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。",
    "industry_thesis_missing_evidence": [
      "SEC company tickers 未命中或 SEC_USER_AGENT 未設定",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ]
  }
]
```

## Return Strict JSON

```json
{
  "batch_id": "batch-003",
  "items": [
    {
      "market_key": "us",
      "symbol": "HON",
      "output_subdir": "us-HON",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-HON/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-HON/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-HON/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-HON/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "theme_only",
      "hype_risk": "low",
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "LOW",
      "output_subdir": "us-LOW",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-LOW/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-LOW/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-LOW/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-LOW/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "theme_only",
      "hype_risk": "low",
      "notes": ""
    },
    {
      "market_key": "us",
      "symbol": "MA",
      "output_subdir": "us-MA",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-MA/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-MA/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-MA/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-06-24-us-kline/companies/us-MA/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "theme_only",
      "hype_risk": "low",
      "notes": ""
    }
  ],
  "portfolio_summary_updates": []
}
```
