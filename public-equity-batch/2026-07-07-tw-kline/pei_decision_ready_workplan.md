# PEI Decision-ready Workplan

- 產出時間：2026-07-07 16:13:30
- Output root：reports/public-equity-batch/2026-07-07-tw-kline
- 標的數：10
- Decision-ready：0

## PEI Flow

1. Fetch current quotes and preserve source/as-of metadata.
2. Build input handoffs: `official_evidence_handoff.json`, `valuation_handoff.json`, and `risk_handoff.json`.
3. Run specialist work in order: `company-tearsheet -> comps-valuation -> initiating-coverage -> portfolio-risk-management`.
4. Write sourced `research_underwrite`, complete `investment_horizon`, `valuation`, and `risk_assessment` into each `source_ledger.json`.
5. Rebuild summaries, validate, then integrate the PEI section back into the source report.

PEI horizon is 3 months to 3 years. Complete research must separate the 3-month timing/catalyst view, 12-month base underwrite, and 3-year ownership thesis; short-term K-line or APEX context can gate execution but cannot replace the fundamental, valuation, and risk underwrite.

## Workflow Counts

- company-tearsheet + initiating-coverage: 10
- comps-valuation: 10
- portfolio-risk-management: 10

## Items

| Symbol | Company | Decision-ready | Research status | Next workflows | Required ledger objects | Handoff inputs |
| --- | --- | --- | --- | --- | --- | --- |
| 1476 | 儒鴻 | no | partial | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | research_underwrite; investment_horizon; valuation; risk_assessment | reports/public-equity-batch/2026-07-07-tw-kline/quotes.json; reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json |
| 2548 | 華固 | no | partial | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | research_underwrite; investment_horizon; valuation; risk_assessment | reports/public-equity-batch/2026-07-07-tw-kline/quotes.json; reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json |
| 2820 | 華票 | no | partial | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | research_underwrite; investment_horizon; valuation; risk_assessment | reports/public-equity-batch/2026-07-07-tw-kline/quotes.json; reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json |
| 3046 | 建碁 | no | partial | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | research_underwrite; investment_horizon; valuation; risk_assessment | reports/public-equity-batch/2026-07-07-tw-kline/quotes.json; reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json |
| 5388 | 中磊 | no | partial | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | research_underwrite; investment_horizon; valuation; risk_assessment | reports/public-equity-batch/2026-07-07-tw-kline/quotes.json; reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json |
| 5876 | 上海商銀 | no | partial | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | research_underwrite; investment_horizon; valuation; risk_assessment | reports/public-equity-batch/2026-07-07-tw-kline/quotes.json; reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json |
| 6414 | 樺漢 | no | partial | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | research_underwrite; investment_horizon; valuation; risk_assessment | reports/public-equity-batch/2026-07-07-tw-kline/quotes.json; reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json |
| 6757 | 台灣虎航 | no | partial | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | research_underwrite; investment_horizon; valuation; risk_assessment | reports/public-equity-batch/2026-07-07-tw-kline/quotes.json; reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json |
| 9933 | 中鼎 | no | partial | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | research_underwrite; investment_horizon; valuation; risk_assessment | reports/public-equity-batch/2026-07-07-tw-kline/quotes.json; reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json |
| 9939 | 宏全 | no | partial | company-tearsheet + initiating-coverage; comps-valuation; portfolio-risk-management | research_underwrite; investment_horizon; valuation; risk_assessment | reports/public-equity-batch/2026-07-07-tw-kline/quotes.json; reports/public-equity-batch/2026-07-07-tw-kline/official_evidence_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/valuation_handoff.json; reports/public-equity-batch/2026-07-07-tw-kline/risk_handoff.json |

## Completion Rule

This workplan is an execution checklist only. Do not mark an item decision-ready until validation confirms all required source-ledger objects are sourced and complete.
