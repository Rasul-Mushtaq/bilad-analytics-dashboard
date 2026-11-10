import React from "react";

export function MetricCard({ title, value, subtitle, highlight }) {
  return (
    <div className="bg-bilad-card border border-bilad-border rounded-xl p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-bilad-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          {title}
        </span>
        <p className="text-3xl font-black text-white mt-3 tracking-tight">
          {value}
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-bilad-border/40 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">{subtitle}</span>
        {highlight && (
          <span className="text-[11px] bg-bilad-bg border border-bilad-border text-bilad-accent px-2.5 py-0.5 rounded font-bold">
            {highlight}
          </span>
        )}
      </div>
    </div>
  );
}
