export function formatNumber(value) {
  return Number(value || 0).toLocaleString();
}

export function formatIQD(millionDinars) {
  const m = Number(millionDinars || 0);
  if (!Number.isFinite(m)) return "0 IQD";
  if (m >= 1000) return `${(m / 1000).toFixed(3)}B IQD`;
  return `${m.toLocaleString(undefined, { maximumFractionDigits: 0 })}M IQD`;
}

export function formatCompact(value) {
  const n = Number(value || 0);
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(2)}K`;
  return n.toLocaleString();
}