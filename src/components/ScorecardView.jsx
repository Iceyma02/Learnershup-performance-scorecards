import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard.jsx";
import OverviewPanel from "./OverviewPanel.jsx";
import EvaluationHistory from "./EvaluationHistory.jsx";
import PrintableReport from "./PrintableReport.jsx";
import { overallScore, classificationFor } from "../utils/calculations.js";
import { loadHistory, saveHistory } from "../utils/storage.js";

export default function ScorecardView({ scorecard }) {
  const [evaluee, setEvaluee] = useState("");
  const [period, setPeriod] = useState("");
  const [ratings, setRatings] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(loadHistory(scorecard.id));
  }, [scorecard.id]);

  function handleRate(kpiId, value) {
    setRatings((prev) => ({ ...prev, [kpiId]: value }));
  }

  function handleReset() {
    setEvaluee("");
    setPeriod("");
    setRatings({});
  }

  function handleSave() {
    const score = overallScore(scorecard.categories, ratings);
    const classification = classificationFor(scorecard.classification, score);
    const record = {
      id: `${Date.now()}`,
      evaluee,
      period,
      ratings,
      score,
      classification,
      savedAt: Date.now(),
    };
    const next = [...history, record];
    setHistory(next);
    saveHistory(scorecard.id, next);
    handleReset();
  }

  function handleLoad(record) {
    setEvaluee(record.evaluee);
    setPeriod(record.period);
    setRatings(record.ratings);
  }

  function handleDelete(id) {
    const next = history.filter((r) => r.id !== id);
    setHistory(next);
    saveHistory(scorecard.id, next);
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="scorecard-view">
      <div className="scorecard-view__main no-print">
        <div className="ident-bar">
          <label>
            <span>{scorecard.evalueeLabel} name</span>
            <input
              type="text"
              value={evaluee}
              onChange={(e) => setEvaluee(e.target.value)}
              placeholder={`e.g. J. Moyo`}
            />
          </label>
          <label>
            <span>Review period</span>
            <input
              type="text"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              placeholder="e.g. September 2026"
            />
          </label>
          <div className="ident-bar__actions">
            <button type="button" className="btn-secondary" onClick={handleReset}>
              Reset
            </button>
            <button type="button" className="btn-secondary" onClick={handlePrint}>
              Print / Save as PDF
            </button>
            <button type="button" className="btn-primary" onClick={handleSave}>
              Save evaluation
            </button>
          </div>
        </div>

        {scorecard.categories.map((c) => (
          <CategoryCard
            key={c.id}
            category={c}
            ratings={ratings}
            onRate={handleRate}
            scale={scorecard.ratingScale}
          />
        ))}
      </div>

      <div className="scorecard-view__side no-print">
        <OverviewPanel
          scorecard={scorecard}
          ratings={ratings}
          evaluee={evaluee}
          period={period}
        />
      </div>

      <div className="scorecard-view__history no-print">
        <h4>Saved evaluations</h4>
        <EvaluationHistory history={history} onLoad={handleLoad} onDelete={handleDelete} />
      </div>

      <PrintableReport
        scorecard={scorecard}
        ratings={ratings}
        evaluee={evaluee}
        period={period}
      />
    </div>
  );
}
