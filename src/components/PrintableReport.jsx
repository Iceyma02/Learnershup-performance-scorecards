import { categorySubtotal, overallScore, classificationFor, weightedScore } from "../utils/calculations.js";

export default function PrintableReport({ scorecard, ratings, evaluee, period }) {
  const score = overallScore(scorecard.categories, ratings);
  const classification = classificationFor(scorecard.classification, score);
  const today = new Date().toLocaleDateString();

  return (
    <div className="print-report">
      <header className="print-report__header">
        <h1>{scorecard.title}</h1>
        <p>{scorecard.purpose}</p>
      </header>

      <table className="print-report__meta">
        <tbody>
          <tr>
            <th>{scorecard.evalueeLabel}</th>
            <td>{evaluee || "\u2014"}</td>
            <th>Review period</th>
            <td>{period || "\u2014"}</td>
          </tr>
          <tr>
            <th>Assessment frequency</th>
            <td>{scorecard.frequency}</td>
            <th>Report generated</th>
            <td>{today}</td>
          </tr>
        </tbody>
      </table>

      <div className="print-report__summary">
        <div>
          <span className="print-report__summary-label">Overall Score</span>
          <span className="print-report__summary-value">{score.toFixed(1)} / 100</span>
        </div>
        <div>
          <span className="print-report__summary-label">Classification</span>
          <span className="print-report__summary-value">{classification.label}</span>
        </div>
      </div>
      <p className="print-report__action"><strong>Recommended action:</strong> {classification.action}</p>

      {scorecard.categories.map((c) => {
        const subtotal = categorySubtotal(c, ratings);
        return (
          <table className="print-report__category" key={c.id}>
            <thead>
              <tr>
                <th colSpan={2}>{c.name}</th>
                <th className="align-right">{subtotal.toFixed(1)} / {c.weightTotal} pts</th>
              </tr>
            </thead>
            <tbody>
              {c.kpis.map((k) => (
                <tr key={k.id}>
                  <td className="print-report__kpi-label">
                    {k.label}
                    {k.target && <div className="print-report__kpi-target">Target: {k.target}</div>}
                  </td>
                  <td className="align-center">
                    Rating: {ratings[k.id] ?? "\u2014"}/5
                  </td>
                  <td className="align-right">
                    {weightedScore(k.weight, ratings[k.id]).toFixed(1)} / {k.weight}
                  </td>
                </tr>
              ))}
              {(c.note || c.evidence) && (
                <tr>
                  <td colSpan={3} className="print-report__note">
                    {c.evidence && <div><strong>Evidence:</strong> {c.evidence}</div>}
                    {c.note && <div>{c.note}</div>}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        );
      })}

      <footer className="print-report__footer">
        <div className="print-report__sign">
          <span>Evaluator signature</span>
          <div className="print-report__sign-line" />
        </div>
        <div className="print-report__sign">
          <span>{scorecard.evalueeLabel} signature</span>
          <div className="print-report__sign-line" />
        </div>
        <div className="print-report__sign">
          <span>Date</span>
          <div className="print-report__sign-line" />
        </div>
      </footer>
    </div>
  );
}
