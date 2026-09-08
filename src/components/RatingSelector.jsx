export default function RatingSelector({ value, onChange, scale }) {
  return (
    <div className="rating-selector" role="radiogroup">
      {scale.map((s) => (
        <button
          key={s.value}
          type="button"
          role="radio"
          aria-checked={value === s.value}
          className={`rating-btn${value === s.value ? " rating-btn--active" : ""}`}
          title={`${s.value} \u2014 ${s.label}: ${s.desc}`}
          onClick={() => onChange(value === s.value ? undefined : s.value)}
        >
          {s.value}
        </button>
      ))}
    </div>
  );
}
