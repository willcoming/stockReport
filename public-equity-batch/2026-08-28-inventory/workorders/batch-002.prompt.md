# StockLoop PEI Workorder: batch-002

Use $stockloop-pei-batch-research at /Users/willcoming/code/stockLoop/.agents/skills/stockloop-pei-batch-research.
Use @public-equity-investing for the research work.

## Scope

- Batch JSON: `/Users/willcoming/code/stockLoop/reports/public-equity-batch/2026-08-28-inventory/batches/batch-002.json`
- Output root: `/Users/willcoming/code/stockLoop/reports/public-equity-batch/2026-08-28-inventory`
- Quote ledger: `/Users/willcoming/code/stockLoop/reports/public-equity-batch/2026-08-28-inventory/quotes.json` if present
- Source reports: `["myStock/tw_stock_inventory_cathay.csv", "myStock/tw_stock_inventory_yuanta.csv", "myStock/tw_stock_inventory_ctbc.csv", "myStock/us_stock_inventory_cathay.csv", "myStock/us_stock_inventory_yuanta.csv", "/tmp/stockloop_inventory_merged.json", "reports/stock-inventory/2026-08-28-0847_inventory_health_check.md"]`
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
    "symbol": "2327",
    "company": "國巨*",
    "canonical_category": "inventory_holding",
    "output_subdir": "tw-2327",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "durable_tailwind",
    "industry_thesis_gate_label": "產業順風且公司證據較完整",
    "hype_risk": "low",
    "hype_risk_label": "低",
    "industry_thesis_summary": "Gate=產業順風且公司證據較完整；炒作風險=低；成長驅動=庫存回補 / 週期復甦；產業驅動與公司級官方資料同時支持，仍需追蹤估值與毛利是否兌現。",
    "industry_thesis_missing_evidence": [
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少明確後續產業 KPI"
    ],
    "research_source_plan": {
      "market_key": "tw",
      "symbol": "2327",
      "company": "國巨*",
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
          "search_hint": "公開資訊觀測站 2327 國巨* 最新財務報告 法說會"
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
          "search_hint": "國巨* 2327 投資人關係 財務報告 法說會 簡報"
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
          "search_hint": "TDCC IR 2327 國巨* 法說會"
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
          "url": "https://www.cmoney.tw/finance/2327/f00041",
          "search_hint": "CMoney 2327 國巨* 即時財報 新聞"
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
          "search_hint": "富果 2327 國巨* 法說會 備忘錄"
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
          "url": "https://statementdog.com/analysis/2327/e-report",
          "search_hint": "財報狗 2327 國巨* 財報 估值"
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
          "url": "https://www.wantgoo.com/stock/2327",
          "search_hint": "玩股網 2327 國巨* 股淨比 PB"
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
          "search_hint": "FactSet 2327 國巨* consensus valuation"
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
          "search_hint": "永豐金證券 2327 國巨* 法人 研究報告"
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
          "search_hint": "經濟日報 2327 國巨* 產業"
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
          "search_hint": "今周刊 2327 國巨* 產業 轉型"
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
          "search_hint": "口袋證券 2327 國巨* 研報"
        }
      ]
    }
  },
  {
    "market_key": "tw",
    "symbol": "2330",
    "company": "台積電",
    "canonical_category": "inventory_holding",
    "output_subdir": "tw-2330",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "durable_tailwind",
    "industry_thesis_gate_label": "產業順風且公司證據較完整",
    "hype_risk": "low",
    "hype_risk_label": "低",
    "industry_thesis_summary": "Gate=產業順風且公司證據較完整；炒作風險=低；成長驅動=庫存回補 / 週期復甦；產業驅動與公司級官方資料同時支持，仍需追蹤估值與毛利是否兌現。",
    "industry_thesis_missing_evidence": [
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少明確後續產業 KPI"
    ],
    "research_source_plan": {
      "market_key": "tw",
      "symbol": "2330",
      "company": "台積電",
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
          "search_hint": "公開資訊觀測站 2330 台積電 最新財務報告 法說會"
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
          "search_hint": "台積電 2330 投資人關係 財務報告 法說會 簡報"
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
          "search_hint": "TDCC IR 2330 台積電 法說會"
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
          "url": "https://www.cmoney.tw/finance/2330/f00041",
          "search_hint": "CMoney 2330 台積電 即時財報 新聞"
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
          "search_hint": "富果 2330 台積電 法說會 備忘錄"
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
          "url": "https://statementdog.com/analysis/2330/e-report",
          "search_hint": "財報狗 2330 台積電 財報 估值"
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
          "url": "https://www.wantgoo.com/stock/2330",
          "search_hint": "玩股網 2330 台積電 股淨比 PB"
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
          "search_hint": "FactSet 2330 台積電 consensus valuation"
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
          "search_hint": "永豐金證券 2330 台積電 法人 研究報告"
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
          "search_hint": "經濟日報 2330 台積電 產業"
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
          "search_hint": "今周刊 2330 台積電 產業 轉型"
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
          "search_hint": "口袋證券 2330 台積電 研報"
        }
      ]
    }
  },
  {
    "market_key": "tw",
    "symbol": "2354",
    "company": "鴻準",
    "canonical_category": "inventory_holding",
    "output_subdir": "tw-2354",
    "instrument_type": "common_equity",
    "industry_thesis_gate": "durable_tailwind",
    "industry_thesis_gate_label": "產業順風且公司證據較完整",
    "hype_risk": "medium",
    "hype_risk_label": "中",
    "industry_thesis_summary": "Gate=產業順風且公司證據較完整；炒作風險=中；成長驅動=庫存回補 / 週期復甦；產業驅動與公司級官方資料同時支持，仍需追蹤估值與毛利是否兌現。",
    "industry_thesis_missing_evidence": [
      "近 7 日公開新聞熱度未命中或未抓取",
      "缺少明確後續產業 KPI"
    ],
    "research_source_plan": {
      "market_key": "tw",
      "symbol": "2354",
      "company": "鴻準",
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
          "search_hint": "公開資訊觀測站 2354 鴻準 最新財務報告 法說會"
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
          "search_hint": "鴻準 2354 投資人關係 財務報告 法說會 簡報"
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
          "search_hint": "TDCC IR 2354 鴻準 法說會"
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
          "url": "https://www.cmoney.tw/finance/2354/f00041",
          "search_hint": "CMoney 2354 鴻準 即時財報 新聞"
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
          "search_hint": "富果 2354 鴻準 法說會 備忘錄"
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
          "url": "https://statementdog.com/analysis/2354/e-report",
          "search_hint": "財報狗 2354 鴻準 財報 估值"
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
          "url": "https://www.wantgoo.com/stock/2354",
          "search_hint": "玩股網 2354 鴻準 股淨比 PB"
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
          "search_hint": "FactSet 2354 鴻準 consensus valuation"
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
          "search_hint": "永豐金證券 2354 鴻準 法人 研究報告"
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
          "search_hint": "經濟日報 2354 鴻準 產業"
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
          "search_hint": "今周刊 2354 鴻準 產業 轉型"
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
          "search_hint": "口袋證券 2354 鴻準 研報"
        }
      ]
    }
  }
]
```

## Return Strict JSON

```json
{
  "batch_id": "batch-002",
  "items": [
    {
      "market_key": "tw",
      "symbol": "2327",
      "output_subdir": "tw-2327",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2327/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2327/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2327/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2327/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "durable_tailwind",
      "hype_risk": "low",
      "notes": ""
    },
    {
      "market_key": "tw",
      "symbol": "2330",
      "output_subdir": "tw-2330",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2330/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2330/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2330/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2330/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "durable_tailwind",
      "hype_risk": "low",
      "notes": ""
    },
    {
      "market_key": "tw",
      "symbol": "2354",
      "output_subdir": "tw-2354",
      "status": "complete|partial|blocked",
      "recommendation_label": "Model portfolio candidate|Wait for trigger|Watch only|Not decision-ready",
      "artifacts": {
        "source_ledger": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2354/source_ledger.json",
        "tearsheet": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2354/tearsheet.html",
        "initiation": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2354/initiation.html",
        "risk_plan": "reports/public-equity-batch/2026-08-28-inventory/companies/tw-2354/risk_plan.html"
      },
      "missing_evidence": [],
      "industry_thesis_gate": "durable_tailwind",
      "hype_risk": "medium",
      "notes": ""
    }
  ],
  "portfolio_summary_updates": []
}
```
