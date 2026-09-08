export default function ScoreGauge({ percentage, classification }) {
  const clamped = Math.max(0, Math.min(100, percentage));
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);

  const band =
    clamped >= 90 ? "band-1" :
    clamped >= 80 ? "band-2" :
    clamped >= 70 ? "band-3" :
    clamped >= 60 ? "band-4" : "band-5";

  return (
    <div className="gauge">
      <svg viewBox="0 0 170 170" width="170" height="170">
        <circle cx="85" cy="85" r={radius} className="gauge__track" />
        <circle
          cx="85"
          cy="85"
          r={radius}
          className={`gauge__fill gauge__fill--${band}`}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 85 85)"
        />
      </svg>
      <div className="gauge__center">
        <span className="gauge__value">{clamped.toFixed(1)}</span>
        <span className="gauge__suffix">/ 100</span>
      </div>
      <div className={`gauge__badge gauge__badge--${band}`}>{classification.label}</div>
    </div>
  );
}
