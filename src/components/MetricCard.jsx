function MetricCard({ label, value, delta, deltaLabel }) {
  return (
    <div className="metric-card">
      <p className="metric-label">{label}</p>
      <p className="metric-value">{value}</p>
      {delta !== undefined && (
        <p
          className={`metric-delta ${delta >= 0 ? "delta-positive" : "delta-negative"}`}
        >
          {delta >= 0 ? "▲" : "▼"} {Math.abs(delta)}% {deltaLabel}
        </p>
      )}
    </div>
  );
}

export default MetricCard;
