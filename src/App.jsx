import MetricCard from "./components/MetricCard";
import { metrics } from "./data/mockData";

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Support Analytics</h1>
          <p className="dashboard-sub">Customer support team · May 2026</p>
        </div>
        <span className="period-badge">Last 30 days</span>
      </header>

      <section className="metrics-grid">
        <MetricCard
          label="Total Tickets"
          value={metrics.totalTickets.toLocaleString()}
          delta={metrics.ticketsDelta}
          deltaLabel="vs last month"
        />
        <MetricCard
          label="Avg Resolution"
          value={`${metrics.avgResolutionHours}h`}
        />
        <MetricCard
          label="SLA Compliance"
          value={`${metrics.slaComplianceRate}%`}
        />
        <MetricCard label="CSAT Score" value={`${metrics.csatScore}%`} />
        <MetricCard
          label="Open Tickets"
          value={metrics.openTickets.toLocaleString()}
        />
      </section>
    </div>
  );
}

export default App;
