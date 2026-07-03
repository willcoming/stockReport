# PEI Specialist Input Packet: AG First Majestic Silver Corp. Ordinary Shares

- State: awaiting_result
- Prompt: reports/public-equity-batch/2026-07-02-us-kline/specialist_workorders/us-AG.specialist.prompt.md
- Expected result JSON: reports/public-equity-batch/2026-07-02-us-kline/specialist_workorders/us-AG.result.json
- Required workflows: official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management
- Required source-ledger objects: official_validation; research_underwrite; investment_horizon; valuation; risk_assessment
- Handoff statuses: {'quote': 'resolved', 'official_evidence': 'missing', 'valuation': 'input_partial', 'risk': 'input_ready'}
- Horizon rule: PEI horizon is 3 months to 3 years: 3M timing/catalyst, 12M base underwrite, and 3Y ownership thesis all require sourced specialist evidence.
- Completion rule: This packet is input only. It must not mark research_status, valuation_status, risk_status, investment_horizon, or decision-ready gates complete by itself.

## Existing PEI Ledger Gate State

- Ledger exists: True
- Research status: partial
- Valuation status: not_run
- Risk status: not_run
- Horizon status: partial

## Handoff Snapshot

- Quote: value=17.82 currency=USD as_of=2026-07-02T20:00:03Z source=yahoo_finance_chart_api:query2.finance.yahoo.com
- Official evidence status: missing
- Official validation: {'status': 'missing', 'sources': []}
- Valuation status: input_partial
- Valuation methods: []
- Risk status: input_ready
- Risk inputs: {'low_20d': 15.619999885559082, 'high_60d': 24.510000228881836, 'downside_reference': '20d_low', 'downside_distance_pct': 12.3457, 'drawdown_from_60d_high_pct': 27.295, 'note': 'Risk inputs are screening inputs only; portfolio-risk-management must still verify downside, liquidity, and implementation readiness.'}
- Liquidity inputs: {'history_days': 60, 'latest_history_date': '2026-07-02', 'latest_volume': 12626500.0, 'latest_trade_value': 225004226.0, 'average_volume_20d': 12597355.0, 'average_trade_value_20d': 218516897.55, 'source': 'local_daily_bars'}

## Expected Specialist Return

Return strict JSON at the expected result path. The result must include a sourced `source_ledger_patch` for only the gate fields completed by PEI specialist work.
