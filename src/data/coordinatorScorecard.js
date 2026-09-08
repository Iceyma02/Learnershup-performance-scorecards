// Transcribed from: Learnership Workplace Coordinator Performance Scorecard
export const coordinatorScorecard = {
  id: "coordinator",
  shortName: "Workplace Coordinator",
  title: "Learnership Workplace Coordinator Performance Scorecard",
  purpose:
    "Measures outcomes, not just activities — connecting the Workplace Coordinator's activities directly to learner retention, workplace success, host satisfaction, evidence completion and overall learnership outcomes.",
  frequency: "Monthly",
  evalueeLabel: "Workplace Coordinator",

  ratingScale: [
    { value: 5, label: "Exceptional", desc: "Consistently exceeds expectations and proactively improves processes" },
    { value: 4, label: "Very Good", desc: "Frequently exceeds expectations with minimal supervision" },
    { value: 3, label: "Meets Expectations", desc: "Delivers the required standard consistently" },
    { value: 2, label: "Needs Improvement", desc: "Performance is inconsistent and requires intervention" },
    { value: 1, label: "Unsatisfactory", desc: "Fails to meet the required standard" },
  ],

  classification: [
    { min: 90, max: 100, label: "Exceptional", action: "Recognition; increased responsibility; process improvement initiatives" },
    { min: 80, max: 89.999, label: "Very Good", action: "Maintain performance; identify development opportunities" },
    { min: 70, max: 79.999, label: "Meets Expectations", action: "Continue monitoring and targeted development" },
    { min: 60, max: 69.999, label: "Needs Improvement", action: "Formal improvement plan and closer monthly monitoring" },
    { min: 0, max: 59.999, label: "Unsatisfactory", action: "Immediate corrective action and performance intervention" },
  ],

  categories: [
    {
      id: "placement",
      name: "Workplace Placement Management",
      weightTotal: 15,
      kpis: [
        { id: "pl1", label: "Learners placed with suitable host employers", weight: 10, target: "\u226595% of learners appropriately placed" },
        { id: "pl2", label: "Placement documentation completed and filed", weight: 5, target: "100% complete" },
      ],
    },
    {
      id: "attendance",
      name: "Workplace Attendance Management",
      weightTotal: 15,
      kpis: [
        { id: "at1", label: "Workplace attendance monitored and updated", weight: 10, target: "\u226595% updated accurately/on time" },
        { id: "at2", label: "Absenteeism identified and escalated", weight: 5, target: "Issues escalated within 24\u201348 hrs" },
      ],
    },
    {
      id: "host",
      name: "Host Employer Engagement",
      weightTotal: 15,
      kpis: [
        { id: "h1", label: "Regular communication with workplace hosts", weight: 10, target: "100% active hosts contacted according to schedule" },
        { id: "h2", label: "Host queries/issues resolved or escalated", weight: 5, target: "\u226590% resolved within agreed SLA" },
      ],
    },
    {
      id: "learnersupport",
      name: "Learner Workplace Support",
      weightTotal: 15,
      kpis: [
        { id: "ls1", label: "Learner check-ins conducted", weight: 10, target: "100% according to agreed schedule" },
        { id: "ls2", label: "Learner workplace challenges identified and addressed", weight: 5, target: "Early intervention on identified risks" },
      ],
    },
    {
      id: "evidence",
      name: "Workplace Evidence / PoE",
      weightTotal: 15,
      kpis: [
        { id: "ev1", label: "Workplace evidence monitored and collected", weight: 10, target: "\u226595% evidence received according to schedule" },
        { id: "ev2", label: "Evidence quality/completeness checked", weight: 5, target: "\u226595% correctly completed" },
      ],
    },
    {
      id: "visits",
      name: "Workplace Visits & Monitoring",
      weightTotal: 10,
      kpis: [
        { id: "v1", label: "Workplace visits/check-ins completed", weight: 5, target: "100% according to monitoring plan" },
        { id: "v2", label: "Visit findings documented and actioned", weight: 5, target: "100% reports/action plans completed" },
      ],
    },
    {
      id: "reporting",
      name: "Reporting & Administration",
      weightTotal: 10,
      kpis: [
        { id: "r1", label: "Weekly/monthly workplace reports submitted", weight: 5, target: "100% on time" },
        { id: "r2", label: "Workplace tracker maintained accurately", weight: 5, target: "\u226598% data accuracy" },
      ],
    },
    {
      id: "compliance",
      name: "Compliance & Risk Management",
      weightTotal: 5,
      kpis: [
        { id: "c1", label: "Workplace compliance documentation maintained", weight: 3, target: "100% compliant" },
        { id: "c2", label: "Risks/escalations appropriately documented", weight: 2, target: "100% significant risks escalated" },
      ],
    },
  ],
};
