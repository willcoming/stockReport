# PEI Specialist Input Packet: NFLX Netflix Inc

- State: awaiting_result
- Prompt: reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-NFLX.specialist.prompt.md
- Expected result JSON: reports/public-equity-batch/2026-08-06-inventory/specialist_workorders/us-NFLX.result.json
- Required workflows: official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management
- Required source-ledger objects: official_validation; research_underwrite; investment_horizon; valuation; risk_assessment
- Handoff statuses: {'quote': 'resolved', 'official_evidence': 'missing', 'valuation': 'input_partial', 'risk': 'input_partial'}
- Horizon rule: PEI horizon is 3 months to 3 years: 3M timing/catalyst, 12M base underwrite, and 3Y ownership thesis all require sourced specialist evidence.
- Completion rule: This packet is input only. It must not mark research_status, valuation_status, risk_status, investment_horizon, or decision-ready gates complete by itself.

## Existing PEI Ledger Gate State

- Ledger exists: True
- Research status: partial
- Valuation status: not_run
- Risk status: not_run
- Horizon status: partial

## Handoff Snapshot

- Quote: value=74.2 currency=USD as_of=2026-08-05T20:00:00Z source=yahoo_finance_chart_api:query2.finance.yahoo.com
- Official evidence status: missing
- Official validation: {'status': 'missing', 'sources': []}
- Valuation status: input_partial
- Valuation methods: []
- Risk status: input_partial
- Risk inputs: {'low_20d': None, 'high_60d': None, 'downside_reference': '', 'downside_distance_pct': None, 'drawdown_from_60d_high_pct': None, 'note': 'Risk inputs are screening inputs only; portfolio-risk-management must still verify downside, liquidity, and implementation readiness.'}
- Liquidity inputs: {'history_days': 0, 'latest_history_date': '', 'latest_volume': None, 'latest_trade_value': None, 'average_volume_20d': None, 'average_trade_value_20d': None, 'source': 'local_daily_bars'}

## Expected Specialist Return

Return strict JSON at the expected result path. The result must include a sourced `source_ledger_patch` for only the gate fields completed by PEI specialist work.
