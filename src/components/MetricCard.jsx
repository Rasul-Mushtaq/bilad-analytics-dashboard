import React from "react";

const TREND_STYLES = {
  up: "text-green-500 bg-green-500/10 border-green-500/20",
  down: "text-red-500 bg-red-500/10 border-red-500/20",
  neutral: "text-slate-500 bg-white border-slate-200",
};

export function MetricCard({ title, value, subtitle, icon: Icon, trend, highlight }) {
  const trendClass = trend ? TREND_STYLES[trend] || TREND_STYLES.neutral : TREND_STYLES.neutral;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-bilad overflow-hidden relative group">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bilad-accent via-bilad-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              {title}
            </span>
            {Icon && (
              <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-blue-600 border border-slate-200/50">
                <Icon className="w-4 h-4" />
              </div>
            )}
          </div>
          <p className="text-3xl font-black text-slate-900 tracking-tight mb-1">
            {value}
          </p>
          <span className="text-xs text-slate-500">{subtitle}</span>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-200/30 flex items-center justify-between">
          <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold ${trendClass}`}>
            {trend && (
              <span className={`w-1 h-1 rounded-full ${trend === "up" ? "bg-green-500" : trend === "down" ? "bg-red-500" : "bg-bilad-textMuted"}`} />
            )}
            <span>{trend ? (trend === "up" ? "+12.4%" : trend === "down" ? "-4.1%" : "0.0%") : "--"}</span>
          </div>
          {highlight && (
            <span className="text-[10px] bg-slate-50 border border-slate-200 text-blue-600 px-2.5 py-0.5 rounded font-bold shadow-bilad-accent">
              {highlight}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
