import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export function WorkforceChart({ data, height = 280 }) {
  return (
    <div className="w-full flex flex-col" style={{ height }}>
      <div className="mb-3">
        <h3 className="text-sm font-bold text-bilad-text">
          Hospitality Sector Workforce Density
        </h3>
        <p className="text-xs text-bilad-textMuted">
          Active employment per governorate
        </p>
      </div>
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 25 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1e3a5f"
              vertical={false}
            />
            <XAxis
              dataKey="governorate"
              stroke="#94a3b8"
              fontSize={10}
              angle={-30}
              textAnchor="end"
              interval={0}
            />
            <YAxis stroke="#94a3b8" fontSize={11} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#13294b",
                borderColor: "#1e3a5f",
                borderRadius: "12px",
                color: "#f1f5f9",
              }}
              formatter={(val) => [
                `${Number(val).toLocaleString()} personnel`,
                "Workforce",
              ]}
            />
            <Bar dataKey="workforce" fill="#4ade80" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
