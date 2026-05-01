# Support Analytics Dashboard

A polished, AI-powered support analytics dashboard built in React. It visualizes customer support metrics using mock data and includes a Claude-powered **Insights panel** that analyzes the data and surfaces real, actionable observations.

## What It Does

- Displays key support KPIs: ticket volume, resolution times, SLA compliance, CSAT score, and issue category breakdowns
- Charts trends over time using [Recharts](https://recharts.org)
- Feeds the mock data to Claude (Anthropic API) to generate a live Insights panel with meaningful analysis — not just summaries, but actual observations about performance, anomalies, and areas to watch

## Tech Stack

- **React 19** (via Vite)
- **Recharts** — charting library for all data visualizations
- **Claude API (Anthropic)** — powers the AI Insights panel
- HTML, CSS, JavaScript — no TypeScript, no UI framework

## Project Structure

```
src/
├── components/
│   └── Dashboard.jsx       # Main dashboard layout
├── data/
│   └── mockData.js         # Baked-in mock support metrics
├── App.jsx
├── main.jsx
└── index.css
```

## Mock Data

All data is baked in — no backend required. [`src/data/mockData.js`](src/data/mockData.js) exports:

| Export | Description |
|---|---|
| `ticketVolume` | Monthly ticket counts (Dec–May) |
| `resolutionTimes` | Avg resolution hours by category |
| `slaPerformance` | SLA target vs. met rate by tier |
| `issueCategories` | Ticket count by issue type |
| `satisfactionTrend` | Monthly CSAT scores |
| `metrics` | Top-level summary stats |

## Getting Started

```bash
npm install
npm run dev
```

To enable the AI Insights panel, add your Anthropic API key:

```bash
VITE_ANTHROPIC_API_KEY=your_key_here
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
