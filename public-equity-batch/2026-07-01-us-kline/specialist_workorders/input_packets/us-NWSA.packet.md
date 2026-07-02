# PEI Specialist Input Packet: NWSA News Corporation - Class A Common Stock

- State: awaiting_result
- Prompt: reports/public-equity-batch/2026-07-01-us-kline/specialist_workorders/us-NWSA.specialist.prompt.md
- Expected result JSON: reports/public-equity-batch/2026-07-01-us-kline/specialist_workorders/us-NWSA.result.json
- Required workflows: market-data refresh; official-evidence review; company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management
- Required source-ledger objects: market_data; official_validation; research_underwrite; investment_horizon; valuation; risk_assessment
- Handoff statuses: {'quote': 'item_missing', 'official_evidence': 'missing', 'valuation': 'input_partial', 'risk': 'input_ready'}
- Horizon rule: PEI horizon is 3 months to 3 years: 3M timing/catalyst, 12M base underwrite, and 3Y ownership thesis all require sourced specialist evidence.
- Completion rule: This packet is input only. It must not mark research_status, valuation_status, risk_status, investment_horizon, or decision-ready gates complete by itself.

## Existing PEI Ledger Gate State

- Ledger exists: True
- Research status: partial
- Valuation status: not_run
- Risk status: not_run
- Horizon status: partial

## Handoff Snapshot

- Quote: value= currency= as_of= source=
- Official evidence status: missing
- Official validation: {'status': 'missing', 'sources': []}
- Valuation status: input_partial
- Valuation methods: []
- Risk status: input_ready
- Risk inputs: {'low_20d': 24.350000381469727, 'high_60d': 27.729999542236328, 'downside_reference': '20d_low', 'downside_distance_pct': 5.5469, 'drawdown_from_60d_high_pct': 7.0321, 'note': 'Risk inputs are screening inputs only; portfolio-risk-management must still verify downside, liquidity, and implementation readiness.'}
- Liquidity inputs: {'history_days': 60, 'latest_history_date': '2026-07-01', 'latest_volume': 6838990.0, 'latest_trade_value': 176309167.0, 'average_volume_20d': 7009794.5, 'average_trade_value_20d': 179494193.65, 'source': 'local_daily_bars'}

## Expected Specialist Return

Return strict JSON at the expected result path. The result must include a sourced `source_ledger_patch` for only the gate fields completed by PEI specialist work.
