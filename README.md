# Learnership Performance Scorecards

A two-tab, executable scorecard dashboard for monthly performance evaluations:

- **Facilitator Quality Assurance & Development Scorecard** (8 performance areas, 100 pts)
- **Learnership Workplace Coordinator Performance Scorecard** (8 accountability areas, 100 pts)

Each tab lets you rate every KPI 1–5. Weights are baked in from the two source
scorecards, so category subtotals, the overall score/100, and the performance
classification (Exceptional / Strong / Competent / Needs Improvement /
Unsatisfactory, or the coordinator equivalents) all calculate live. Saved
evaluations are kept per-role in the browser (`localStorage`) so you build a
running history you can reload or delete.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: sanity-check the production build locally
```

Output goes to `dist/`.

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (Vercel detects these automatically).
4. Deploy — no environment variables required.

## Notes on the scoring model

Each KPI has a fixed point **weight** (transcribed from the source scorecards).
A 1–5 rating scores that weight proportionally:

```
weighted score = weight × (rating / 5)
```

A category's weights sum to its stated point total (e.g. 20 pts for
Facilitation Quality & Delivery), and all eight categories per role sum to
100, so the overall score is simply the sum of every KPI's weighted score.

## Data lives in one place

`src/data/facilitatorScorecard.js` and `src/data/coordinatorScorecard.js`
hold all KPI labels, weights, targets, rating-scale text, and classification
bands. Edit those files to adjust wording, add/remove KPIs, or rebalance
weights — the rest of the app (subtotals, gauge, chart, history) recalculates
automatically.
