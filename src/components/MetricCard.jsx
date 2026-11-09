import React from "react";

export function MetricCard({ title, value, subtitle }) {
  return (
    <div className="bg-bilad-card border border-bilad-border rounded-xl p-6 shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-3xl font-bold text-bilad-accent mt-3">{value}</p>
      </div>
      {subtitle && (
        <p className="text-xs text-slate-500 mt-4 pt-3 border-t border-bilad-border/50">
          {subtitle}
        </p>
      )}
    </div>
  );
}
