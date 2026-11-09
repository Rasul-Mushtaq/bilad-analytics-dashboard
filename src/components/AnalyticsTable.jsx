import React from "react";

export function AnalyticsTable({ data }) {
  return (
    <div className="bg-bilad-card border border-bilad-border rounded-xl shadow-lg overflow-hidden mt-8">
      <div className="p-6 border-b border-bilad-border flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-slate-200">
            Governorate Breakdown
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Complete statistics across all 18 governorates in Iraq
          </p>
        </div>
        <span className="text-xs bg-bilad-border px-3 py-1 rounded-full text-bilad-accent">
          {data.length} Governorates
        </span>
      </div>
      <div className="max-h-[500px] overflow-y-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-bilad-bg z-10">
            <tr className="border-b border-bilad-border text-xs text-slate-400 uppercase">
              <th className="py-4 px-6">Governorate</th>
              <th className="py-4 px-6">Hotels</th>
              <th className="py-4 px-6">Total Guests</th>
              <th className="py-4 px-6">Overnight Stays</th>
              <th className="py-4 px-6">Workforce</th>
              <th className="py-4 px-6">Revenue (IQD M)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bilad-border/50 text-sm">
            {data.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-bilad-border/20 transition-colors"
              >
                <td className="py-4 px-6 font-medium text-slate-200">
                  {row.governorate}
                </td>
                <td className="py-4 px-6 text-slate-300">
                  {row.hotels_count.toLocaleString()}
                </td>
                <td className="py-4 px-6 text-slate-300">
                  {row.total_guests.toLocaleString()}
                </td>
                <td className="py-4 px-6 text-slate-300">
                  {row.overnight_stays.toLocaleString()}
                </td>
                <td className="py-4 px-6 text-slate-300">
                  {row.workforce.toLocaleString()}
                </td>
                <td className="py-4 px-6 text-bilad-accent font-semibold">
                  {row.revenue_million_dinars > 0
                    ? row.revenue_million_dinars.toLocaleString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
