import React from "react";

export function Badge({ children, variant = "outline", className = "" }) {
  const base =
    "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold tracking-tight";
  const variants = {
    outline: "bg-bilad-surface text-bilad-text border border-bilad-border",
    default: "bg-bilad-card text-bilad-text border border-bilad-border",
    success:
      "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30",
    warning:
      "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30",
    danger:
      "bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30",
    accent:
      "bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30",
  };
  return (
    <span
      className={`${base} ${variants[variant] || variants.outline} ${className}`}
    >
      {children}
    </span>
  );
}
