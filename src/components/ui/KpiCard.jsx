import React from "react";

const ICON_VARIANTS = {
  blue: "bg-bilad-accent/10 text-bilad-accent border border-bilad-accent/20",
  green: "bg-bilad-success/10 text-bilad-success border border-bilad-success/20",
  amber: "bg-bilad-warning/10 text-bilad-warning border border-bilad-warning/20",
  violet: "bg-bilad-accent/10 text-bilad-accent border border-bilad-accent/20",
  rose: "bg-bilad-danger/10 text-bilad-danger border border-bilad-danger/20",
};

const TREND_VARIANTS = {
  up: "text-bilad-success border-bilad-success/20 bg-bilad-success/10",
  down: "text-bilad-danger border-bilad-danger/20 bg-bilad-danger/10",
  neutral: "text-bilad-textMuted border-bilad-border bg-bilad-card",
};

const TREND_DOT = {
  up: "bg-bilad-success",
  down: "bg-bilad-danger",
  neutral: "bg-bilad-textMuted",
};

export function KpiCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconVariant = "blue",
  trend,
  trendLabel,
  highlight,
}) {
  const trendCfg = trend ? TREND_VARIANTS[trend] : TREND_VARIANTS.neutral;
  const dotCls = trend ? TREND_DOT[trend] : "bg-bilad-textMuted";

  return (
    <div className="relative bg-bilad-card border border-bilad-border rounded-2xl p-6 shadow-bilad overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bilad-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xs font-bold text-bilad-textMuted uppercase tracking-widest">
            {title}
          </h3>
          {Icon && (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ICON_VARIANTS[iconVariant] || ICON_VARIANTS.blue} shadow-sm`}>
              <Icon className="w-5 h-5" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <p className="text-3xl font-black text-bilad-text tracking-tight mb-1 leading-tight">
            {value}
          </p>
          <span className="text-xs text-bilad-textMuted">{subtitle}</span>
        </div>

        <div className="mt-6 pt-5 border-t border-bilad-border/30 flex items-center justify-between">
          {trend && (
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold ${trendCfg}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${dotCls}`} />
              <span>{trendLabel}</span>
            </div>
          )}
          {highlight && (
            <span className="text-[10px] font-bold text-bilad-accent bg-bilad-bg border border-bilad-border/40 px-2.5 py-1 rounded shadow-bilad-accent/30">
              {highlight}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}