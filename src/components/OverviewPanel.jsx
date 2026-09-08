import ScoreGauge from "./ScoreGauge.jsx";
import CategoryBarChart from "./CategoryBarChart.jsx";
import {
  overallScore,
  classificationFor,
  completion,
} from "../utils/calculations.js";

export default function OverviewPanel({ scorecard, ratings, evaluee, period }) {
  const score = overallScore(scorecard.categories, ratings);
  const classification = classificationFor(scorecard.classification, score);
  const { done, total } = completion(scorecard.categories, ratings);

  return (
    <aside className="overview">
      <div className="overview__id">
        <span className="overview__id-label">{scorecard.evalueeLabel}</span>
        <span className="overview__id-name">{evaluee || "\u2014"}</span>
        {period && <span className="overview__id-period">{period}</span>}
      </div>

      <ScoreGauge percentage={score} classification={classification} />

      <p className="overview__action">{classification.action}</p>

      <div className="overview__progress">
        {done} of {total} KPIs rated
        <div className="overview__progress-track">
          <div
            className="overview__progress-fill"
            style={{ width: `${total ? (done / total) * 100 : 0}%` }}
          />
        </div>
      </div>

      <h4 className="overview__subhead">By performance area</h4>
      <CategoryBarChart categories={scorecard.categories} ratings={ratings} />
    </aside>
  );
}
