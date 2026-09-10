// Builds the suggested filename for a printed/exported evaluation, e.g.
// "J Moyo September 2026 Facilitator Scorecard".
export function buildReportFilename(evaluee, period, roleShortName) {
  const parts = [];
  if (evaluee && evaluee.trim()) parts.push(evaluee.trim());
  if (period && period.trim()) parts.push(period.trim());
  parts.push(roleShortName, "Scorecard");
  // strip characters that are invalid in file names on Windows/macOS
  return parts.join(" ").replace(/[\\/:*?"<>|]/g, "");
}
