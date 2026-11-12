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

export function GuestVolumeChart({ data, height = 350 }) {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 25 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1e3a5f"
            vertical={false}
          />
          <XAxis
            dataKey="governorate"
            stroke="#94a3b8"
            fontSize={11}
            angle={-35}
            textAnchor="end"
            interval={0}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={11}
            tickFormatter={(val) =>
              val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val
            }
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#13294b",
              borderColor: "#1e3a5f",
              borderRadius: "12px",
              color: "#f1f5f9",
              fontSize: "12px",
            }}
            formatter={(value) => [
              Number(value).toLocaleString(),
              "Annual Guests",
            ]}
          />
          <Bar dataKey="total_guests" fill="#38bdf8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
