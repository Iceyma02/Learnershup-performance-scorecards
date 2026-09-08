export default function EvaluationHistory({ history, onLoad, onDelete }) {
  if (history.length === 0) {
    return (
      <div className="history history--empty">
        <p>No evaluations saved yet. Rate the KPIs on the left, then use "Save evaluation" to log a record here.</p>
      </div>
    );
  }

  return (
    <div className="history">
      <table className="history__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Period</th>
            <th>Score</th>
            <th>Rating</th>
            <th>Saved</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {history
            .slice()
            .sort((a, b) => b.savedAt - a.savedAt)
            .map((rec) => (
              <tr key={rec.id}>
                <td>{rec.evaluee || "\u2014"}</td>
                <td>{rec.period || "\u2014"}</td>
                <td className="history__score">{rec.score.toFixed(1)}</td>
                <td>
                  <span className={`chip chip--${rec.classification.label.replace(/\s+/g, "-").toLowerCase()}`}>
                    {rec.classification.label}
                  </span>
                </td>
                <td>{new Date(rec.savedAt).toLocaleDateString()}</td>
                <td className="history__actions">
                  <button type="button" onClick={() => onLoad(rec)}>Load</button>
                  <button type="button" className="danger" onClick={() => onDelete(rec.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
