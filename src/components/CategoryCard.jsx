import RatingSelector from "./RatingSelector.jsx";
import { categorySubtotal, weightedScore } from "../utils/calculations.js";

export default function CategoryCard({ category, ratings, onRate, scale }) {
  const subtotal = categorySubtotal(category, ratings);
  const pct = category.weightTotal ? (subtotal / category.weightTotal) * 100 : 0;

  return (
    <section className="cat-card">
      <header className="cat-card__head">
        <h3>{category.name}</h3>
        <div className="cat-card__subtotal">
          <span className="cat-card__subtotal-value">{subtotal.toFixed(1)}</span>
          <span className="cat-card__subtotal-max">/ {category.weightTotal} pts</span>
        </div>
      </header>

      <div className="cat-card__bar-track">
        <div
          className="cat-card__bar-fill"
          style={{ width: `${Math.min(pct, 100)}%` }}
          data-band={pct >= 80 ? "good" : pct >= 60 ? "watch" : "risk"}
        />
      </div>

      <div className="kpi-table">
        {category.kpis.map((k) => (
          <div className="kpi-row" key={k.id}>
            <div className="kpi-row__label">
              <span>{k.label}</span>
              {k.target && <span className="kpi-row__target">Target: {k.target}</span>}
            </div>
            <div className="kpi-row__weight">{k.weight}</div>
            <RatingSelector
              value={ratings[k.id]}
              onChange={(v) => onRate(k.id, v)}
              scale={scale}
            />
            <div className="kpi-row__score">
              {weightedScore(k.weight, ratings[k.id]).toFixed(1)}
            </div>
          </div>
        ))}
      </div>

      {category.note && <p className="cat-card__note">{category.note}</p>}
      {category.evidence && (
        <p className="cat-card__note">
          <strong>Evidence:</strong> {category.evidence}
        </p>
      )}
    </section>
  );
}
