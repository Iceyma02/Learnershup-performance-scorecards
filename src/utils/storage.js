const KEY_PREFIX = "ljm-scorecards:";

export function loadHistory(roleId) {
  try {
    const raw = localStorage.getItem(KEY_PREFIX + roleId);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveHistory(roleId, history) {
  try {
    localStorage.setItem(KEY_PREFIX + roleId, JSON.stringify(history));
  } catch {
    // storage unavailable (e.g. private browsing) — fail silently
  }
}
