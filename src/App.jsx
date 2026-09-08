import { useState } from "react";
import ScorecardView from "./components/ScorecardView.jsx";
import { facilitatorScorecard } from "./data/facilitatorScorecard.js";
import { coordinatorScorecard } from "./data/coordinatorScorecard.js";
import { ljcScorecard } from "./data/ljcScorecard.js";

const ROLES = [facilitatorScorecard, coordinatorScorecard, ljcScorecard];

export default function App() {
  const [activeId, setActiveId] = useState(facilitatorScorecard.id);
  const active = ROLES.find((r) => r.id === activeId);

  return (
    <div className="app">
      <header className="app__header no-print">
        <div className="app__header-text">
          <p className="app__eyebrow">Learning Journey Management</p>
          <h1>Performance Scorecards</h1>
          <p className="app__subtitle">{active.purpose}</p>
        </div>
        <nav className="tabs" role="tablist">
          {ROLES.map((r) => (
            <button
              key={r.id}
              role="tab"
              aria-selected={activeId === r.id}
              className={`tabs__btn${activeId === r.id ? " tabs__btn--active" : ""}`}
              onClick={() => setActiveId(r.id)}
            >
              {r.shortName}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <ScorecardView key={active.id} scorecard={active} />
      </main>

      <footer className="app__footer no-print">
        <span>Assessment frequency: {active.frequency}</span>
        <span>Overall score: 100 points</span>
      </footer>
    </div>
  );
}
