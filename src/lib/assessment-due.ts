/**
 * Most assessments have one due week; Weekly Misbehaviour runs across the
 * whole semester instead, so its frontmatter carries a `dueLabel` override
 * (an extra key the assessments schema passes through) rather than a single
 * week number reading as a hard deadline.
 */
export function dueLabel(data: { week: number; dueLabel?: unknown }): string {
  return typeof data.dueLabel === "string" ? data.dueLabel : `Week ${data.week}`;
}
