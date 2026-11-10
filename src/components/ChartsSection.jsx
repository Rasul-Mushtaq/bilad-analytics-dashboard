import React from "react";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ComposedChart,
  Line,
} from "recharts";

export function ChartsSection({ data }) {
  const sortedByGuests = [...data].sort(
    (a, b) => b.total_guests - a.total_guests,
  );
  const financialData = [...data]
    .filter((item) => item.revenue_million_dinars > 0)
    .sort((a, b) => b.revenue_million_dinars - a.revenue_million_dinars);

  const facilityData = [
    { name: "Baghdad", hotels: 394, workforce: 3100 },
    { name: "Erbil", hotels: 462, workforce: 3400 },
    { name: "Sulaymaniyah", hotels: 318, workforce: 2600 },
    { name: "Karbala", hotels: 643, workforce: 2100 },
    { name: "Najaf", hotels: 350, workforce: 1555 },
    { name: "Basrah", hotels: 75, workforce: 420 },
    { name: "Duhok", hotels: 62, workforce: 350 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-bilad-card border border-bilad-border p-4 rounded-xl shadow-2xl text-xs backdrop-blur-xl">
          <p className="font-bold text-bilad-accent mb-2 text-sm">{label}</p>
          {payload.map((entry, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-6 py-1"
            >
              <span className="text-slate-400 capitalize">{entry.name}:</span>
              <span className="font-bold text-white">
                {entry.value.toLocaleString()}{" "}
                {entry.dataKey === "revenue_million_dinars" ||
                entry.dataKey === "expenses_million_dinars"
                  ? "M IQD"
                  : ""}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 my-8">
      {/* Top Row: Two primary charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart 1: Guest Volume Distribution */}
        <div className="bg-bilad-card border border-bilad-border rounded-xl p-6 shadow-2xl min-w-0">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-100">
              Annual Guest Volume by Governorate
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Total visitor arrivals recorded across regional tourism hubs
            </p>
          </div>
          <div className="w-full" style={{ height: 340 }}>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart
                data={sortedByGuests}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e3a5f"
                  vertical={false}
                />
                <XAxis
                  dataKey="governorates.name"
                  stroke="#64748b"
                  fontSize={11}
                  tickLine={false}
                  interval={0}
                  angle={-30}
                  textAnchor="end"
                  height={50}
                />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="total_guests"
                  name="Guests"
                  fill="#38bdf8"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Financial Performance (Revenue vs Expenses) */}
        <div className="bg-bilad-card border border-bilad-border rounded-xl p-6 shadow-2xl min-w-0">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-100">
              Financial Performance Analysis
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Comparison of gross revenue and operating expenses in million IQD
            </p>
          </div>
          <div className="w-full" style={{ height: 340 }}>
            <ResponsiveContainer width="100%" height={340}>
              <ComposedChart
                data={financialData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e3a5f"
                  vertical={false}
                />
                <XAxis
                  dataKey="governorates.name"
                  stroke="#64748b"
                  fontSize={11}
                  tickLine={false}
                  interval={0}
                  angle={-30}
                  textAnchor="end"
                  height={50}
                />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="revenue_million_dinars"
                  name="Revenue"
                  fill="#0284c7"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="expenses_million_dinars"
                  name="Expenses"
                  stroke="#f43f5e"
                  strokeWidth={2.5}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row: Third Chart & Fixed Structural Summary Box */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart 3: Workforce & Hotel Infrastructure */}
        <div className="lg:col-span-2 bg-bilad-card border border-bilad-border rounded-xl p-6 shadow-2xl min-w-0">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-100">
              Infrastructure and Workforce Density
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Correlation between active hotel counts and employed workforce
            </p>
          </div>
          <div className="w-full" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={facilityData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorWorkforce"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
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
                <Area
                  type="monotone"
                  dataKey="workforce"
                  name="Workforce"
                  stroke="#38bdf8"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorWorkforce)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Structural Summary Box (Cleaned up formatting and spacing) */}
        <div className="bg-bilad-card border border-bilad-border rounded-xl p-6 shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-1">
              Sector Architecture
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Key structural takeaways from official survey data
            </p>

            <div className="space-y-4">
              <div className="bg-bilad-bg p-4 rounded-xl border border-bilad-border">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Private Sector Share
                </span>
                <span className="text-xl font-black text-bilad-accent mt-1 block">
                  99.7%
                </span>
                <span className="text-xs text-slate-300 mt-1.5 block leading-relaxed">
                  Dominated entirely by independent operators across all
                  governorates.
                </span>
              </div>

              <div className="bg-bilad-bg p-4 rounded-xl border border-bilad-border">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Top Inflow Corridor
                </span>
                <span className="text-xl font-black text-white mt-1 block">
                  Sulaymaniyah & Karbala
                </span>
                <span className="text-xs text-slate-300 mt-1.5 block leading-relaxed">
                  Comprising over half of national overnight bed nights.
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-bilad-border text-xs text-slate-400 flex justify-between items-center">
            <span>Survey Year: 2023</span>
            <span className="text-bilad-accent font-bold">Audited Dataset</span>
          </div>
        </div>
      </div>
    </div>
  );
}
