# PEI Specialist Input Packet: NTSK Netskope

- State: awaiting_result
- Prompt: reports/public-equity-batch/2026-07-08-us-kline/specialist_workorders/us-NTSK.specialist.prompt.md
- Expected result JSON: reports/public-equity-batch/2026-07-08-us-kline/specialist_workorders/us-NTSK.result.json
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

- Quote: value=11.920000076293945 currency=USD as_of=2026-07-08 source=stockloop_us_kline_daily_report_close
- Official evidence status: missing
- Official validation: {'status': 'missing', 'sources': []}
- Valuation status: input_partial
- Valuation methods: []
- Risk status: input_ready
- Risk inputs: {'low_20d': 8.350000381469727, 'high_60d': 13.289999961853027, 'downside_reference': '20d_low', 'downside_distance_pct': 29.9497, 'drawdown_from_60d_high_pct': 10.3085, 'note': 'Risk inputs are screening inputs only; portfolio-risk-management must still verify downside, liquidity, and implementation readiness.'}
- Liquidity inputs: {'history_days': 60, 'latest_history_date': '2026-07-08', 'latest_volume': 5925844.0, 'latest_trade_value': 70636061.0, 'average_volume_20d': 7191982.2, 'average_trade_value_20d': 69116421.25, 'source': 'local_daily_bars'}

## Expected Specialist Return

Return strict JSON at the expected result path. The result must include a sourced `source_ledger_patch` for only the gate fields completed by PEI specialist work.
