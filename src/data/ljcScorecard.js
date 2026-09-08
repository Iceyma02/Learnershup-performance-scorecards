// Transcribed from: Learning Journey Coordinator Scorecard
// Source document expresses the overall result as a 1.00-5.00 weighted
// average rating. That is mathematically the same scale used by the other
// two scorecards, just before being expressed out of 100
// (weighted-average-rating / 5 * 100 = points-out-of-100), so this file
// reuses the same weight*(rating/5) engine and states its classification
// bands in the equivalent 0-100 terms for a consistent dashboard.
export const ljcScorecard = {
  id: "ljc",
  shortName: "Learning Journey Coordinator",
  title: "Learning Journey Coordinator Scorecard",
  purpose:
    "Measures the LJC role across learner engagement, communication, compliance, feedback, escalation management, workplace alignment, stipend/leave management, and qualitative performance.",
  frequency: "Monthly",
  evalueeLabel: "Learning Journey Coordinator",

  ratingScale: [
    { value: 5, label: "Excellent", desc: "Consistently exceeds target; proactive follow-up and strong evidence available." },
    { value: 4, label: "Good", desc: "Meets target with minor gaps that do not affect overall learner or programme outcomes." },
    { value: 3, label: "Satisfactory", desc: "Generally meets expectations but requires follow-up, reminders, or improvement in consistency." },
    { value: 2, label: "Needs Improvement", desc: "Below target; recurring gaps affect service delivery, compliance, or reporting quality." },
    { value: 1, label: "Unsatisfactory", desc: "Major gaps; targets not met and corrective action is required." },
  ],

  // Bands below are the source document's 1.00-5.00 scale converted to
  // 0-100 (x / 5 * 100), e.g. 4.50-5.00 -> 90-100.
  classification: [
    { min: 90, max: 100, label: "Excellent", action: "Recognise performance and consider stretch objectives or leadership opportunities." },
    { min: 70, max: 89.999, label: "Good", action: "Maintain performance and agree minor improvement actions where needed." },
    { min: 50, max: 69.999, label: "Satisfactory", action: "Agree targeted support actions and review progress in the next cycle." },
    { min: 30, max: 49.999, label: "Needs Improvement", action: "Create a formal improvement plan with clear deadlines and follow-up dates." },
    { min: 0, max: 29.999, label: "Unsatisfactory", action: "Immediate corrective action required with manager oversight." },
  ],

  categories: [
    {
      id: "engagement",
      name: "Learner Engagement & Retention",
      weightTotal: 15,
      evidence: "Intervention logs, attendance registers, follow-up records.",
      kpis: [
        {
          id: "eng1",
          label: "At-risk learner interventions logged and attendance tracking accuracy",
          weight: 15,
          target: "100% of at-risk learners supported; attendance records updated accurately and on time.",
        },
      ],
    },
    {
      id: "communication",
      name: "Communication & Responsiveness",
      weightTotal: 10,
      evidence: "Email trails, query logs, learner communication records.",
      kpis: [
        {
          id: "com1",
          label: "Response time to learner queries and stakeholder communication quality",
          weight: 10,
          target: "Queries responded to within 2 business days.",
        },
      ],
    },
    {
      id: "compliance",
      name: "Compliance & Reporting",
      weightTotal: 20,
      evidence: "Learner files, attendance records, leave records, termination logs, monthly reports.",
      kpis: [
        {
          id: "comp1",
          label: "Learner record accuracy and monthly campus report submission",
          weight: 20,
          target: "100% compliant learner records; monthly reports submitted on time and complete.",
        },
      ],
    },
    {
      id: "feedback",
      name: "Learner Feedback & Satisfaction",
      weightTotal: 10,
      evidence: "Survey results, action plans, learner feedback summaries.",
      kpis: [
        {
          id: "fb1",
          label: "Feedback analysis, action logging, and survey completion",
          weight: 10,
          target: "100% of surveys completion monthly; all new cohort surveys conducted.",
        },
      ],
    },
    {
      id: "escalation",
      name: "Behaviour & Escalation Management",
      weightTotal: 15,
      evidence: "Incident logs, escalation records, disciplinary documentation.",
      kpis: [
        {
          id: "esc1",
          label: "Incident resolution time and consistency of behavioural documentation",
          weight: 15,
          target: "Incidents resolved within agreed timeframe; 100% policy-aligned documentation.",
        },
      ],
    },
    {
      id: "workplace",
      name: "Workplace & Programme Alignment",
      weightTotal: 5,
      evidence: "Workplace logbooks, submission trackers, facilitator updates.",
      kpis: [
        {
          id: "wp1",
          label: "Workplace logbooks submitted on time",
          weight: 5,
          target: "At least 95% of learners submit workplace documentation as scheduled.",
        },
      ],
    },
    {
      id: "readiness",
      name: "Campus Readiness Inspection & Reporting",
      weightTotal: 5,
      evidence: "Campus readiness inspection checklist, monthly readiness report, action tracker, evidence of resolved findings.",
      kpis: [
        {
          id: "cr1",
          label: "Monthly campus readiness inspections completed and readiness reports submitted",
          weight: 5,
          target: "100% monthly inspections completed; reports submitted on time with corrective actions tracked to closure.",
        },
      ],
    },
    {
      id: "stipend",
      name: "Stipend and Leave Management",
      weightTotal: 15,
      evidence: "Payroll submissions, ESS training registers, leave forms and supporting documents.",
      kpis: [
        {
          id: "st1",
          label: "Stipend submissions, ESS/leave training completion, and leave compliance",
          weight: 15,
          target: "100% stipend submissions on time; 100% new learners trained; at least 98% leave accuracy.",
        },
      ],
    },
    {
      id: "qualitative",
      name: "Qualitative Performance Review",
      weightTotal: 5,
      evidence: "Manager notes, peer/facilitator input, development plan updates.",
      kpis: [
        {
          id: "ql1",
          label: "Manager feedback, peer/facilitator input, and self-reflection/development goals",
          weight: 5,
          target: "Reliable, professional, collaborative, and progressing against development goals.",
        },
      ],
    },
  ],
};
