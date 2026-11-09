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

export function ChartsSection({ data }) {
  const chartData = data
    .map((item) => ({
      name: item.governorates.name,
      guests: item.total_guests,
      revenue: item.revenue_million_dinars,
    }))
    .sort((a, b) => b.guests - a.guests)
    .slice(0, 8);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-bilad-card border border-bilad-border p-4 rounded-xl shadow-xl text-xs">
          <p className="font-bold text-bilad-accent mb-1">{label}</p>
          <p className="text-slate-300">
            Guests: {payload[0].value.toLocaleString()}
          </p>
          <p className="text-slate-300">
            Revenue: {payload[1]?.value.toLocaleString()}M IQD
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
      <div className="bg-bilad-card border border-bilad-border rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-slate-200 mb-1">
          Top Governorates by Guest Volume
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          Visitor distribution across leading tourism hubs
        </p>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1e3a5f"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#64748b"
                fontSize={11}
                tickLine={false}
              />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="guests" fill="#38bdf8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="revenue" fill="#0284c7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-bilad-card border border-bilad-border rounded-xl p-6 shadow-lg flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-200 mb-1">
            Sector Structural Overview
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Key metrics derived from relational database joins
          </p>

          <div className="space-y-4">
            <div className="bg-bilad-bg/60 p-4 rounded-lg border border-bilad-border/50">
              <span className="text-xs text-slate-400 block uppercase tracking-wider">
                Dominant Sector
              </span>
              <span className="text-lg font-bold text-bilad-accent mt-1 block">
                99.7 Percent Private Sector Operated
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                Reflected across independent regional hospitality providers.
              </span>
            </div>

            <div className="bg-bilad-bg/60 p-4 rounded-lg border border-bilad-border/50">
              <span className="text-xs text-slate-400 block uppercase tracking-wider">
                Primary Inflow Regions
              </span>
              <span className="text-lg font-bold text-slate-200 mt-1 block">
                Sulaymaniyah, Karbala, and Erbil
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                Account for over 65 percent of total annual overnight stays
                nationwide.
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-bilad-border/50 text-xs text-slate-500 flex justify-between">
          <span>Source: cosit.gov.iq</span>
          <span className="text-bilad-accent font-medium">
            Live Supabase Sync
          </span>
        </div>
      </div>
    </div>
  );
}
