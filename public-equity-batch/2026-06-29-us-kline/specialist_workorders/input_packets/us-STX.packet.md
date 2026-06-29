# PEI Specialist Input Packet: STX Seagate Technology Holdings PLC - Ordinary Shares

- State: awaiting_result
- Prompt: reports/public-equity-batch/2026-06-29-us-kline/specialist_workorders/us-STX.specialist.prompt.md
- Expected result JSON: reports/public-equity-batch/2026-06-29-us-kline/specialist_workorders/us-STX.result.json
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

- Quote: value=968.530029296875 currency=USD as_of=2026-06-29 source=stockloop_kline_report_close_fallback
- Official evidence status: missing
- Official validation: {'status': 'missing', 'sources': []}
- Valuation status: input_partial
- Valuation methods: []
- Risk status: input_ready
- Risk inputs: {'low_20d': 801.8900146484375, 'high_60d': 1145.0, 'downside_reference': '20d_low', 'downside_distance_pct': 17.2055, 'drawdown_from_60d_high_pct': 15.4122, 'note': 'Risk inputs are screening inputs only; portfolio-risk-management must still verify downside, liquidity, and implementation readiness.'}
- Liquidity inputs: {'history_days': 60, 'latest_history_date': '2026-06-29', 'latest_volume': 5337614.0, 'latest_trade_value': 5169639444.0, 'average_volume_20d': 4555635.7, 'average_trade_value_20d': 4439391395.15, 'source': 'local_daily_bars'}

## Expected Specialist Return

Return strict JSON at the expected result path. The result must include a sourced `source_ledger_patch` for only the gate fields completed by PEI specialist work.
