// Weighted-score model shared by both scorecards:
// each KPI has a point weight; a 1-5 rating scores that weight proportionally
// (rating 5 = full weight, rating 3 = 60% of weight, etc.)
export function weightedScore(weight, rating) {
  if (!rating) return 0;
  return (weight * (rating / 5));
}

export function categorySubtotal(category, ratings) {
  return category.kpis.reduce(
    (sum, k) => sum + weightedScore(k.weight, ratings[k.id]),
    0
  );
}

export function overallScore(categories, ratings) {
  return categories.reduce(
    (sum, c) => sum + categorySubtotal(c, ratings),
    0
  );
}

export function totalWeight(categories) {
  return categories.reduce((sum, c) => sum + c.weightTotal, 0);
}

export function classificationFor(scale, percentage) {
  return (
    scale.find((s) => percentage >= s.min && percentage <= s.max) ||
    scale[scale.length - 1]
  );
}

export function completion(categories, ratings) {
  const total = categories.reduce((n, c) => n + c.kpis.length, 0);
  const done = categories.reduce(
    (n, c) => n + c.kpis.filter((k) => ratings[k.id]).length,
    0
  );
  return { done, total };
}

export function round1(n) {
  return Math.round(n * 10) / 10;
}
