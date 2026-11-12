import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { formatNumber } from "../ui/formatters";

const CUSTOM_TOOLTIP = ({ active, payload, label, formatter = formatNumber }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-bilad-card border border-bilad-border p-4 rounded-2xl shadow-bilad-lg text-xs backdrop-blur-xl w-60">
      <p className="font-bold text-bilad-accent mb-2 text-sm">{label}</p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center justify-between gap-6 py-1">
          <span className="text-bilad-textMuted capitalize">{entry.name}:</span>
          <span className="font-bold text-bilad-text">{formatter(entry.value)}</span>
        </div>
      ))}
    </div>
  );
};

export function HorizontalBarChart({
  data,
  dataKey,
  fill = "#38bdf8",
  height = 340,
  formatter = formatNumber,
  className,
}) {
  const sorted = [...data]
    .filter((d) => (d[dataKey] || 0) > 0)
    .sort((a, b) => b[dataKey] - a[dataKey]);

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={sorted} margin={{ top: 20, right: 24, left: 88, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" vertical={false} />
          <XAxis type="number" stroke="#64748b" fontSize={11} tickLine={false} />
          <YAxis
            dataKey="governorate"
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            interval={0}
          />
          <Tooltip content={<CUSTOM_TOOLTIP formatter={formatter} />} />
          <Bar dataKey={dataKey} fill={fill} radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}