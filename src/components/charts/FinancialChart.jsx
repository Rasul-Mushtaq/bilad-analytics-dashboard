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

export function FinancialChart({ data, height = 350 }) {
  return (
    <div className="bg-bilad-card border border-bilad-border rounded-2xl p-6 shadow-bilad flex flex-col">
      <h3 className="text-lg font-bold text-bilad-text mb-4">
        Revenue vs Expenses (IQD M)
      </h3>
      <div className="w-full flex-1" style={{ height }}>
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
              formatter={(val, name) => [
                `${Number(val).toLocaleString()}M`,
                name === "revenue_million_dinars" ? "Revenue" : "Expenses",
              ]}
            />
            <Bar
              dataKey="revenue_million_dinars"
              name="revenue"
              fill="#38bdf8"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expenses_million_dinars"
              name="expenses"
              fill="#f87171"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
