import React from "react";

export function Badge({ children, variant = "outline", className = "" }) {
  const base =
    "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-bold tracking-tighter uppercase";
  const variants = {
    outline:
      "bg-transparent text-bilad-textMuted border border-bilad-border/60",
    default:
      "bg-bilad-card text-bilad-textMuted border border-bilad-border/50",
    success:
      "bg-bilad-success/10 text-bilad-success border border-bilad-success/20",
    warning:
      "bg-bilad-warning/10 text-bilad-warning border border-bilad-warning/20",
    danger:
      "bg-bilad-danger/10 text-bilad-danger border border-bilad-danger/20",
    accent:
      "bg-bilad-accent/10 text-bilad-accent border border-bilad-accent/20",
  };
  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}