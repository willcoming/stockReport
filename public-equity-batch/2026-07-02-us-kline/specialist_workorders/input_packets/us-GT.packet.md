# PEI Specialist Input Packet: GT The Goodyear Tire & Rubber Company - Common Stock

- State: awaiting_result
- Prompt: reports/public-equity-batch/2026-07-02-us-kline/specialist_workorders/us-GT.specialist.prompt.md
- Expected result JSON: reports/public-equity-batch/2026-07-02-us-kline/specialist_workorders/us-GT.result.json
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

- Quote: value=6.59 currency=USD as_of=2026-07-02T20:00:01Z source=yahoo_finance_chart_api:query2.finance.yahoo.com
- Official evidence status: missing
- Official validation: {'status': 'missing', 'sources': []}
- Valuation status: input_partial
- Valuation methods: []
- Risk status: input_ready
- Risk inputs: {'low_20d': 5.610000133514404, 'high_60d': 7.480000019073486, 'downside_reference': '20d_low', 'downside_distance_pct': 14.871, 'drawdown_from_60d_high_pct': 11.8984, 'note': 'Risk inputs are screening inputs only; portfolio-risk-management must still verify downside, liquidity, and implementation readiness.'}
- Liquidity inputs: {'history_days': 60, 'latest_history_date': '2026-07-02', 'latest_volume': 54347800.0, 'latest_trade_value': 358152010.0, 'average_volume_20d': 12172320.0, 'average_trade_value_20d': 77124208.95, 'source': 'local_daily_bars'}

## Expected Specialist Return

Return strict JSON at the expected result path. The result must include a sourced `source_ledger_patch` for only the gate fields completed by PEI specialist work.
