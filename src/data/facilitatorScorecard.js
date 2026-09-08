// Transcribed from: Facilitator Quality Assurance & Development Scorecard
export const facilitatorScorecard = {
  id: "facilitator",
  shortName: "Facilitator",
  title: "Facilitator Quality Assurance & Development Scorecard",
  purpose:
    "Objectively measure facilitator performance, identify development gaps, improve learner outcomes, and support evidence-based facilitator performance management.",
  frequency: "Monthly, with a formal quarterly review",
  evalueeLabel: "Facilitator",

  ratingScale: [
    { value: 5, label: "Exceptional", desc: "Consistently exceeds expectations" },
    { value: 4, label: "Strong", desc: "Frequently exceeds expectations" },
    { value: 3, label: "Competent", desc: "Meets expected standard" },
    { value: 2, label: "Needs Improvement", desc: "Partially meets standard" },
    { value: 1, label: "Unsatisfactory", desc: "Does not meet standard" },
  ],

  classification: [
    { min: 90, max: 100, label: "Exceptional", action: "Recognise, retain and consider for mentoring/leadership opportunities" },
    { min: 80, max: 89.999, label: "Strong", action: "Maintain performance and identify opportunities for further development" },
    { min: 70, max: 79.999, label: "Competent", action: "Meets requirements; monitor identified gaps" },
    { min: 60, max: 69.999, label: "Needs Improvement", action: "Formal improvement plan and targeted coaching" },
    { min: 0, max: 59.999, label: "Unsatisfactory", action: "Immediate intervention, performance improvement plan and review" },
  ],

  categories: [
    {
      id: "delivery",
      name: "Facilitation Quality & Delivery",
      weightTotal: 20,
      evidence: "Class observations, learner feedback, facilitator preparation, attendance records.",
      kpis: [
        { id: "d1", label: "Demonstrates strong subject-matter knowledge", weight: 4 },
        { id: "d2", label: "Explains concepts clearly and accurately", weight: 4 },
        { id: "d3", label: "Uses appropriate facilitation methods and activities", weight: 4 },
        { id: "d4", label: "Manages learner participation and engagement", weight: 4 },
        { id: "d5", label: "Adjusts delivery according to learner needs", weight: 4 },
      ],
    },
    {
      id: "engagement",
      name: "Learner Engagement & Support",
      weightTotal: 15,
      kpis: [
        { id: "e1", label: "Creates an inclusive and respectful learning environment", weight: 3 },
        { id: "e2", label: "Encourages participation and discussion", weight: 3 },
        { id: "e3", label: "Provides appropriate learner support/coaching", weight: 3 },
        { id: "e4", label: "Identifies struggling or disengaged learners", weight: 3 },
        { id: "e5", label: "Follows up on learner challenges and referrals", weight: 3 },
      ],
    },
    {
      id: "outcomes",
      name: "Learner Performance & Outcomes",
      weightTotal: 15,
      note: "Should not be based solely on pass rates — a facilitator should not be penalised for appropriately identifying and supporting learners who genuinely require additional assistance.",
      kpis: [
        { id: "o1", label: "Learner competence/achievement rates", weight: 4 },
        { id: "o2", label: "Learner progress against programme milestones", weight: 3 },
        { id: "o3", label: "Supports learners requiring remediation", weight: 3 },
        { id: "o4", label: "Assignment/workbook completion and quality", weight: 2 },
        { id: "o5", label: "Exam/assessment readiness", weight: 3 },
      ],
    },
    {
      id: "planning",
      name: "Planning, Preparation & Curriculum Compliance",
      weightTotal: 10,
      kpis: [
        { id: "p1", label: "Arrives adequately prepared for sessions", weight: 2 },
        { id: "p2", label: "Follows approved curriculum/content", weight: 2 },
        { id: "p3", label: "Uses approved learning materials", weight: 2 },
        { id: "p4", label: "Maintains appropriate session plans/resources", weight: 2 },
        { id: "p5", label: "Covers required learning outcomes within schedule", weight: 2 },
      ],
    },
    {
      id: "assessment",
      name: "Assessment & Quality Assurance",
      weightTotal: 10,
      kpis: [
        { id: "a1", label: "Applies assessment requirements correctly", weight: 2 },
        { id: "a2", label: "Maintains assessment integrity", weight: 2 },
        { id: "a3", label: "Provides constructive learner feedback", weight: 2 },
        { id: "a4", label: "Completes assessment evidence accurately", weight: 2 },
        { id: "a5", label: "Submits assessment-related documentation on time", weight: 2 },
      ],
    },
    {
      id: "admin",
      name: "Administration, Attendance & Reporting",
      weightTotal: 10,
      kpis: [
        { id: "ad1", label: "Maintains accurate attendance records", weight: 2 },
        { id: "ad2", label: "Submits registers and required reports on time", weight: 2 },
        { id: "ad3", label: "Updates learner progress accurately", weight: 2 },
        { id: "ad4", label: "Escalates learner absenteeism/issues promptly", weight: 2 },
        { id: "ad5", label: "Complies with campus/LMS administrative requirements", weight: 2 },
      ],
    },
    {
      id: "professionalism",
      name: "Professionalism & Stakeholder Management",
      weightTotal: 10,
      kpis: [
        { id: "pr1", label: "Professional conduct and attitude", weight: 2 },
        { id: "pr2", label: "Timekeeping and attendance", weight: 2 },
        { id: "pr3", label: "Communication with LJC/management", weight: 2 },
        { id: "pr4", label: "Responsiveness to requests and corrective actions", weight: 2 },
        { id: "pr5", label: "Works effectively with the broader delivery team", weight: 2 },
      ],
    },
    {
      id: "development",
      name: "Continuous Development",
      weightTotal: 10,
      kpis: [
        { id: "cd1", label: "Participates in facilitator development activities", weight: 2 },
        { id: "cd2", label: "Acts on feedback from observations/VOC surveys", weight: 2 },
        { id: "cd3", label: "Demonstrates improvement in identified gaps", weight: 2 },
        { id: "cd4", label: "Keeps subject knowledge and facilitation practices current", weight: 2 },
        { id: "cd5", label: "Shares good practice/resources with other facilitators", weight: 2 },
      ],
    },
  ],
};
