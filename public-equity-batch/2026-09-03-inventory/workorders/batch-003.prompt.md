# StockLoop PEI Workorder: batch-003

Use $stockloop-pei-batch-research at /Users/willcoming/code/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Users/willcoming/code/stockLoop/reports/public-equity-batch/2026-09-03-inventory/batches/batch-003.json`
- Output root: `/Users/willcoming/code/stockLoop/reports/public-equity-batch/2026-09-03-inventory`
- Quote ledger: `/Users/willcoming/code/stockLoop/reports/public-equity-batch/2026-09-03-inventory/quotes.json` if present
- Source reports: `["myStock/tw_stock_inventory_cathay.csv", "myStock/tw_stock_inventory_yuanta.csv", "myStock/tw_stock_inventory_ctbc.csv", "myStock/us_stock_inventory_cathay.csv", "myStock/us_stock_inventory_yuanta.csv", "/tmp/stockloop_inventory_merged.json", "reports/stock-inventory/2026-09-03-0842_inventory_health_check.md"]`
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

- Treat each symbol's `research_source_plan.preferred_sources` as a prioritized lookup plan, not as evidence already used. Add a source to `source_ledger.json` only after retrieving it and recording its as-of or retrieved-at date.
- For Taiwan equities, official sources remain mandatory for instrument identity, statutory filings, and audited/reviewed financials. Two independent third-party sources that agree may mark valuation, consensus, industry, or operating context as `corroborated`; this does not make the item decision-ready by itself.
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
    "market_key": "tw",
    "symbol": "2467",
    "company": "志聖",
    "canonical_category": "inventory_holding",
    "output_subdir": "tw-2467",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "theme_only",
    "industry_thesis_gate_label": "目前偏題材，缺公司級落地證據",
    "hype_risk": "low",
    "hype_risk_label": "低",
    "industry_thesis_summary": "Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=庫存回補 / 週期復甦；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。",
    "industry_thesis_missing_evidence": [
      "台股官方公司基本資料未命中",
      "月營收資料未命中或未接到此市場",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少明確後續產業 KPI",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ],
    "research_source_plan": {
      "market_key": "tw",
      "symbol": "2467",
      "company": "志聖",
      "evidence_policy": {
        "official_required_for": [
          "instrument_identity",
          "statutory_filing",
          "audited_or_reviewed_financials"
        ],
        "third_party_corroboration": {
          "minimum_independent_sources": 2,
          "allowed_gate_scopes": [
            "valuation_context",
            "consensus_context",
            "industry_context",
            "operating_context"
          ],
          "result_status": "corroborated",
          "decision_ready": false
        }
      },
      "preferred_sources": [
        {
          "source_id": "mops",
          "name": "公開資訊觀測站",
          "category": "official_financial",
          "authority_level": "official",
          "access_mode": "public",
          "gate_scope": [
            "instrument_identity",
            "statutory_filing",
            "audited_or_reviewed_financials",
            "operating_context"
          ],
          "priority": 1,
          "status": "candidate_not_retrieved",
          "url": "https://mops.twse.com.tw/mops/web/index",
          "search_hint": "公開資訊觀測站 2467 志聖 最新財務報告 法說會"
        },
        {
          "source_id": "issuer_ir",
          "name": "發行公司投資人關係網站",
          "category": "official_financial",
          "authority_level": "official",
          "access_mode": "public",
          "gate_scope": [
            "statutory_filing",
            "audited_or_reviewed_financials",
            "operating_context"
          ],
          "priority": 2,
          "status": "candidate_not_retrieved",
          "search_hint": "志聖 2467 投資人關係 財務報告 法說會 簡報"
        },
        {
          "source_id": "tdcc_ir",
          "name": "TDCC 公司投資人關係整合平台",
          "category": "official_financial",
          "authority_level": "official_platform",
          "access_mode": "public",
          "gate_scope": [
            "operating_context"
          ],
          "priority": 3,
          "status": "candidate_not_retrieved",
          "url": "https://irplatform.tdcc.com.tw/ir/zh/event/list",
          "search_hint": "TDCC IR 2467 志聖 法說會"
        },
        {
          "source_id": "cmoney",
          "name": "CMoney",
          "category": "financial_aggregator",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "operating_context",
            "valuation_context"
          ],
          "priority": 4,
          "status": "candidate_not_retrieved",
          "url": "https://www.cmoney.tw/finance/2467/f00041",
          "search_hint": "CMoney 2467 志聖 即時財報 新聞"
        },
        {
          "source_id": "fugle",
          "name": "富果",
          "category": "earnings_and_market_context",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "operating_context",
            "consensus_context"
          ],
          "priority": 5,
          "status": "candidate_not_retrieved",
          "search_hint": "富果 2467 志聖 法說會 備忘錄"
        },
        {
          "source_id": "statementdog",
          "name": "財報狗",
          "category": "valuation_and_financial_analysis",
          "authority_level": "secondary_professional",
          "access_mode": "restricted",
          "gate_scope": [
            "valuation_context",
            "operating_context"
          ],
          "priority": 6,
          "status": "candidate_not_retrieved",
          "url": "https://statementdog.com/analysis/2467/e-report",
          "search_hint": "財報狗 2467 志聖 財報 估值"
        },
        {
          "source_id": "wantgoo",
          "name": "玩股網",
          "category": "valuation_and_financial_analysis",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "valuation_context"
          ],
          "priority": 7,
          "status": "candidate_not_retrieved",
          "url": "https://www.wantgoo.com/stock/2467",
          "search_hint": "玩股網 2467 志聖 股淨比 PB"
        },
        {
          "source_id": "factset",
          "name": "FactSet",
          "category": "institutional_consensus",
          "authority_level": "institutional",
          "access_mode": "restricted",
          "gate_scope": [
            "consensus_context",
            "valuation_context"
          ],
          "priority": 8,
          "status": "candidate_not_retrieved",
          "search_hint": "FactSet 2467 志聖 consensus valuation"
        },
        {
          "source_id": "sinopac_research",
          "name": "永豐金證券法人研究",
          "category": "institutional_consensus",
          "authority_level": "institutional",
          "access_mode": "restricted",
          "gate_scope": [
            "consensus_context",
            "valuation_context",
            "industry_context"
          ],
          "priority": 9,
          "status": "candidate_not_retrieved",
          "search_hint": "永豐金證券 2467 志聖 法人 研究報告"
        },
        {
          "source_id": "udn_money",
          "name": "經濟日報",
          "category": "industry_media",
          "authority_level": "secondary_media",
          "access_mode": "mixed",
          "gate_scope": [
            "industry_context",
            "operating_context"
          ],
          "priority": 10,
          "status": "candidate_not_retrieved",
          "url": "https://money.udn.com/",
          "search_hint": "經濟日報 2467 志聖 產業"
        },
        {
          "source_id": "business_today",
          "name": "今周刊",
          "category": "industry_media",
          "authority_level": "secondary_media",
          "access_mode": "mixed",
          "gate_scope": [
            "industry_context",
            "operating_context"
          ],
          "priority": 11,
          "status": "candidate_not_retrieved",
          "url": "https://www.businesstoday.com.tw/",
          "search_hint": "今周刊 2467 志聖 產業 轉型"
        },
        {
          "source_id": "pocket_tw",
          "name": "口袋證券",
          "category": "industry_research",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "industry_context",
            "valuation_context"
          ],
          "priority": 12,
          "status": "candidate_not_retrieved",
          "url": "https://www.pocket.tw/",
          "search_hint": "口袋證券 2467 志聖 研報"
        }
      ]
    }
  },
  {
    "market_key": "tw",
    "symbol": "2610",
    "company": "華航",
    "canonical_category": "inventory_holding",
    "output_subdir": "tw-2610",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "theme_only",
    "industry_thesis_gate_label": "目前偏題材，缺公司級落地證據",
    "hype_risk": "low",
    "hype_risk_label": "低",
    "industry_thesis_summary": "Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=庫存回補 / 週期復甦；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。",
    "industry_thesis_missing_evidence": [
      "台股官方公司基本資料未命中",
      "月營收資料未命中或未接到此市場",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少明確後續產業 KPI",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ],
    "research_source_plan": {
      "market_key": "tw",
      "symbol": "2610",
      "company": "華航",
      "evidence_policy": {
        "official_required_for": [
          "instrument_identity",
          "statutory_filing",
          "audited_or_reviewed_financials"
        ],
        "third_party_corroboration": {
          "minimum_independent_sources": 2,
          "allowed_gate_scopes": [
            "valuation_context",
            "consensus_context",
            "industry_context",
            "operating_context"
          ],
          "result_status": "corroborated",
          "decision_ready": false
        }
      },
      "preferred_sources": [
        {
          "source_id": "mops",
          "name": "公開資訊觀測站",
          "category": "official_financial",
          "authority_level": "official",
          "access_mode": "public",
          "gate_scope": [
            "instrument_identity",
            "statutory_filing",
            "audited_or_reviewed_financials",
            "operating_context"
          ],
          "priority": 1,
          "status": "candidate_not_retrieved",
          "url": "https://mops.twse.com.tw/mops/web/index",
          "search_hint": "公開資訊觀測站 2610 華航 最新財務報告 法說會"
        },
        {
          "source_id": "issuer_ir",
          "name": "發行公司投資人關係網站",
          "category": "official_financial",
          "authority_level": "official",
          "access_mode": "public",
          "gate_scope": [
            "statutory_filing",
            "audited_or_reviewed_financials",
            "operating_context"
          ],
          "priority": 2,
          "status": "candidate_not_retrieved",
          "search_hint": "華航 2610 投資人關係 財務報告 法說會 簡報"
        },
        {
          "source_id": "tdcc_ir",
          "name": "TDCC 公司投資人關係整合平台",
          "category": "official_financial",
          "authority_level": "official_platform",
          "access_mode": "public",
          "gate_scope": [
            "operating_context"
          ],
          "priority": 3,
          "status": "candidate_not_retrieved",
          "url": "https://irplatform.tdcc.com.tw/ir/zh/event/list",
          "search_hint": "TDCC IR 2610 華航 法說會"
        },
        {
          "source_id": "cmoney",
          "name": "CMoney",
          "category": "financial_aggregator",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "operating_context",
            "valuation_context"
          ],
          "priority": 4,
          "status": "candidate_not_retrieved",
          "url": "https://www.cmoney.tw/finance/2610/f00041",
          "search_hint": "CMoney 2610 華航 即時財報 新聞"
        },
        {
          "source_id": "fugle",
          "name": "富果",
          "category": "earnings_and_market_context",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "operating_context",
            "consensus_context"
          ],
          "priority": 5,
          "status": "candidate_not_retrieved",
          "search_hint": "富果 2610 華航 法說會 備忘錄"
        },
        {
          "source_id": "statementdog",
          "name": "財報狗",
          "category": "valuation_and_financial_analysis",
          "authority_level": "secondary_professional",
          "access_mode": "restricted",
          "gate_scope": [
            "valuation_context",
            "operating_context"
          ],
          "priority": 6,
          "status": "candidate_not_retrieved",
          "url": "https://statementdog.com/analysis/2610/e-report",
          "search_hint": "財報狗 2610 華航 財報 估值"
        },
        {
          "source_id": "wantgoo",
          "name": "玩股網",
          "category": "valuation_and_financial_analysis",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "valuation_context"
          ],
          "priority": 7,
          "status": "candidate_not_retrieved",
          "url": "https://www.wantgoo.com/stock/2610",
          "search_hint": "玩股網 2610 華航 股淨比 PB"
        },
        {
          "source_id": "factset",
          "name": "FactSet",
          "category": "institutional_consensus",
          "authority_level": "institutional",
          "access_mode": "restricted",
          "gate_scope": [
            "consensus_context",
            "valuation_context"
          ],
          "priority": 8,
          "status": "candidate_not_retrieved",
          "search_hint": "FactSet 2610 華航 consensus valuation"
        },
        {
          "source_id": "sinopac_research",
          "name": "永豐金證券法人研究",
          "category": "institutional_consensus",
          "authority_level": "institutional",
          "access_mode": "restricted",
          "gate_scope": [
            "consensus_context",
            "valuation_context",
            "industry_context"
          ],
          "priority": 9,
          "status": "candidate_not_retrieved",
          "search_hint": "永豐金證券 2610 華航 法人 研究報告"
        },
        {
          "source_id": "udn_money",
          "name": "經濟日報",
          "category": "industry_media",
          "authority_level": "secondary_media",
          "access_mode": "mixed",
          "gate_scope": [
            "industry_context",
            "operating_context"
          ],
          "priority": 10,
          "status": "candidate_not_retrieved",
          "url": "https://money.udn.com/",
          "search_hint": "經濟日報 2610 華航 產業"
        },
        {
          "source_id": "business_today",
          "name": "今周刊",
          "category": "industry_media",
          "authority_level": "secondary_media",
          "access_mode": "mixed",
          "gate_scope": [
            "industry_context",
            "operating_context"
          ],
          "priority": 11,
          "status": "candidate_not_retrieved",
          "url": "https://www.businesstoday.com.tw/",
          "search_hint": "今周刊 2610 華航 產業 轉型"
        },
        {
          "source_id": "pocket_tw",
          "name": "口袋證券",
          "category": "industry_research",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "industry_context",
            "valuation_context"
          ],
          "priority": 12,
          "status": "candidate_not_retrieved",
          "url": "https://www.pocket.tw/",
          "search_hint": "口袋證券 2610 華航 研報"
        }
      ]
    }
  },
  {
    "market_key": "tw",
    "symbol": "2753",
    "company": "八方雲集",
    "canonical_category": "inventory_holding",
    "output_subdir": "tw-2753",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "theme_only",
    "industry_thesis_gate_label": "目前偏題材，缺公司級落地證據",
    "hype_risk": "low",
    "hype_risk_label": "低",
    "industry_thesis_summary": "Gate=目前偏題材，缺公司級落地證據；炒作風險=低；成長驅動=庫存回補 / 週期復甦；目前主要是題材或來源敘事，尚未看到足夠公司級落地證據。",
    "industry_thesis_missing_evidence": [
      "台股官方公司基本資料未命中",
      "月營收資料未命中或未接到此市場",
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少明確後續產業 KPI",
      "缺少公司級官方營收、訂單、財報或法說支撐"
    ],
    "research_source_plan": {
      "market_key": "tw",
      "symbol": "2753",
      "company": "八方雲集",
      "evidence_policy": {
        "official_required_for": [
          "instrument_identity",
          "statutory_filing",
          "audited_or_reviewed_financials"
        ],
        "third_party_corroboration": {
          "minimum_independent_sources": 2,
          "allowed_gate_scopes": [
            "valuation_context",
            "consensus_context",
            "industry_context",
            "operating_context"
          ],
          "result_status": "corroborated",
          "decision_ready": false
        }
      },
      "preferred_sources": [
        {
          "source_id": "mops",
          "name": "公開資訊觀測站",
          "category": "official_financial",
          "authority_level": "official",
          "access_mode": "public",
          "gate_scope": [
            "instrument_identity",
            "statutory_filing",
            "audited_or_reviewed_financials",
            "operating_context"
          ],
          "priority": 1,
          "status": "candidate_not_retrieved",
          "url": "https://mops.twse.com.tw/mops/web/index",
          "search_hint": "公開資訊觀測站 2753 八方雲集 最新財務報告 法說會"
        },
        {
          "source_id": "issuer_ir",
          "name": "發行公司投資人關係網站",
          "category": "official_financial",
          "authority_level": "official",
          "access_mode": "public",
          "gate_scope": [
            "statutory_filing",
            "audited_or_reviewed_financials",
            "operating_context"
          ],
          "priority": 2,
          "status": "candidate_not_retrieved",
          "search_hint": "八方雲集 2753 投資人關係 財務報告 法說會 簡報"
        },
        {
          "source_id": "tdcc_ir",
          "name": "TDCC 公司投資人關係整合平台",
          "category": "official_financial",
          "authority_level": "official_platform",
          "access_mode": "public",
          "gate_scope": [
            "operating_context"
          ],
          "priority": 3,
          "status": "candidate_not_retrieved",
          "url": "https://irplatform.tdcc.com.tw/ir/zh/event/list",
          "search_hint": "TDCC IR 2753 八方雲集 法說會"
        },
        {
          "source_id": "cmoney",
          "name": "CMoney",
          "category": "financial_aggregator",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "operating_context",
            "valuation_context"
          ],
          "priority": 4,
          "status": "candidate_not_retrieved",
          "url": "https://www.cmoney.tw/finance/2753/f00041",
          "search_hint": "CMoney 2753 八方雲集 即時財報 新聞"
        },
        {
          "source_id": "fugle",
          "name": "富果",
          "category": "earnings_and_market_context",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "operating_context",
            "consensus_context"
          ],
          "priority": 5,
          "status": "candidate_not_retrieved",
          "search_hint": "富果 2753 八方雲集 法說會 備忘錄"
        },
        {
          "source_id": "statementdog",
          "name": "財報狗",
          "category": "valuation_and_financial_analysis",
          "authority_level": "secondary_professional",
          "access_mode": "restricted",
          "gate_scope": [
            "valuation_context",
            "operating_context"
          ],
          "priority": 6,
          "status": "candidate_not_retrieved",
          "url": "https://statementdog.com/analysis/2753/e-report",
          "search_hint": "財報狗 2753 八方雲集 財報 估值"
        },
        {
          "source_id": "wantgoo",
          "name": "玩股網",
          "category": "valuation_and_financial_analysis",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "valuation_context"
          ],
          "priority": 7,
          "status": "candidate_not_retrieved",
          "url": "https://www.wantgoo.com/stock/2753",
          "search_hint": "玩股網 2753 八方雲集 股淨比 PB"
        },
        {
          "source_id": "factset",
          "name": "FactSet",
          "category": "institutional_consensus",
          "authority_level": "institutional",
          "access_mode": "restricted",
          "gate_scope": [
            "consensus_context",
            "valuation_context"
          ],
          "priority": 8,
          "status": "candidate_not_retrieved",
          "search_hint": "FactSet 2753 八方雲集 consensus valuation"
        },
        {
          "source_id": "sinopac_research",
          "name": "永豐金證券法人研究",
          "category": "institutional_consensus",
          "authority_level": "institutional",
          "access_mode": "restricted",
          "gate_scope": [
            "consensus_context",
            "valuation_context",
            "industry_context"
          ],
          "priority": 9,
          "status": "candidate_not_retrieved",
          "search_hint": "永豐金證券 2753 八方雲集 法人 研究報告"
        },
        {
          "source_id": "udn_money",
          "name": "經濟日報",
          "category": "industry_media",
          "authority_level": "secondary_media",
          "access_mode": "mixed",
          "gate_scope": [
            "industry_context",
            "operating_context"
          ],
          "priority": 10,
          "status": "candidate_not_retrieved",
          "url": "https://money.udn.com/",
          "search_hint": "經濟日報 2753 八方雲集 產業"
        },
        {
          "source_id": "business_today",
          "name": "今周刊",
          "category": "industry_media",
          "authority_level": "secondary_media",
          "access_mode": "mixed",
          "gate_scope": [
            "industry_context",
            "operating_context"
          ],
          "priority": 11,
          "status": "candidate_not_retrieved",
          "url": "https://www.businesstoday.com.tw/",
          "search_hint": "今周刊 2753 八方雲集 產業 轉型"
        },
        {
          "source_id": "pocket_tw",
          "name": "口袋證券",
          "category": "industry_research",
          "authority_level": "secondary_professional",
          "access_mode": "mixed",
          "gate_scope": [
            "industry_context",
            "valuation_context"
          ],
          "priority": 12,
          "status": "candidate_not_retrieved",
          "url": "https://www.pocket.tw/",
          "search_hint": "口袋證券 2753 八方雲集 研報"
        }
      ]
    }
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
      "symbol": "2467",
      "output_subdir": "tw-2467",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2467/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2467/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2467/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2467/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "theme_only",
      "hype_risk": "low",
      "notes": ""
    },
    {
      "market_key": "tw",
      "symbol": "2610",
      "output_subdir": "tw-2610",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2610/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2610/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2610/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2610/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "theme_only",
      "hype_risk": "low",
      "notes": ""
    },
    {
      "market_key": "tw",
      "symbol": "2753",
      "output_subdir": "tw-2753",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2753/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2753/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2753/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-09-03-inventory/companies/tw-2753/risk_plan.html"
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
