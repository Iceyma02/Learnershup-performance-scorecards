import { categorySubtotal } from "../utils/calculations.js";

export default function CategoryBarChart({ categories, ratings }) {
  return (
    <div className="cat-chart">
      {categories.map((c) => {
        const subtotal = categorySubtotal(c, ratings);
        const pct = c.weightTotal ? (subtotal / c.weightTotal) * 100 : 0;
        const band = pct >= 80 ? "good" : pct >= 60 ? "watch" : "risk";
        return (
          <div className="cat-chart__row" key={c.id}>
            <span className="cat-chart__label">{c.name}</span>
            <div className="cat-chart__track">
              <div
                className="cat-chart__fill"
                data-band={band}
                style={{ width: `${Math.min(pct, 100)}%` }}
              />
            </div>
            <span className="cat-chart__value">{subtotal.toFixed(1)}/{c.weightTotal}</span>
          </div>
        );
      })}
    </div>
  );
}
