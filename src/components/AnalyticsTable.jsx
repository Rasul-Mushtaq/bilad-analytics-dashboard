import React, { useState } from "react";
import { Search, ArrowUpDown } from "lucide-react";

export function AnalyticsTable({ data, selectedRegion, setSelectedRegion }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("total_guests");
  const [sortDirection, setSortDirection] = useState("desc");

  const regions = ["All", "Central", "Northern", "Southern", "Western"];

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const filteredData = data
    .filter((item) => {
      const matchesRegion =
        selectedRegion === "All" || item.region === selectedRegion;
      const matchesSearch = item.governorate
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesRegion && matchesSearch;
    })
    .sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];
      if (typeof aVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
    });

  return (
    <div className="bg-bilad-card border border-bilad-border rounded-xl shadow-2xl overflow-hidden mt-8">
      {/* Table Header & Controls */}
      <div className="p-6 border-b border-bilad-border flex flex-col lg:flex-row justify-between items-center gap-4 bg-bilad-card">
        <div>
          <h3 className="text-lg font-bold text-slate-100">
            Governorate Statistical Breakdown
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Comprehensive metrics across all eighteen governorates in Iraq
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search governorate..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-bilad-bg border border-bilad-border rounded-lg pl-10 pr-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-bilad-accent transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-1 bg-bilad-bg p-1 rounded-lg border border-bilad-border w-full sm:w-auto">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-2 text-xs rounded-md transition-all font-semibold ${
                  selectedRegion === region
                    ? "bg-bilad-accent text-bilad-bg shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="max-h-[560px] overflow-y-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-bilad-bg z-10 border-b border-bilad-border text-xs text-slate-400 uppercase tracking-wider">
            <tr>
              <th
                onClick={() => handleSort("governorate")}
                className="py-4 px-6 cursor-pointer hover:text-bilad-accent transition-colors"
              >
                <div className="flex items-center gap-2">
                  Governorate <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort("region")}
                className="py-4 px-6 cursor-pointer hover:text-bilad-accent transition-colors"
              >
                <div className="flex items-center gap-2">
                  Region <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort("hotels_count")}
                className="py-4 px-6 cursor-pointer hover:text-bilad-accent transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2">
                  Hotels <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort("total_guests")}
                className="py-4 px-6 cursor-pointer hover:text-bilad-accent transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2">
                  Total Guests <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort("overnight_stays")}
                className="py-4 px-6 cursor-pointer hover:text-bilad-accent transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2">
                  Overnight Stays <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort("workforce")}
                className="py-4 px-6 cursor-pointer hover:text-bilad-accent transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2">
                  Workforce <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort("revenue_million_dinars")}
                className="py-4 px-6 cursor-pointer hover:text-bilad-accent transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2">
                  Revenue (IQD M) <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bilad-border/40 text-sm">
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-bilad-border/20 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-slate-100">
                    {row.governorate}
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-xs bg-bilad-bg border border-bilad-border px-3 py-1 rounded-md text-slate-300 font-medium">
                      {row.region}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-300 text-right font-mono">
                    {row.hotels_count.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-slate-100 text-right font-mono font-bold">
                    {row.total_guests.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-slate-300 text-right font-mono">
                    {row.overnight_stays.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-slate-300 text-right font-mono">
                    {row.workforce.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-bilad-accent text-right font-mono font-bold">
                    {row.revenue_million_dinars > 0
                      ? `${row.revenue_million_dinars.toLocaleString()}M`
                      : "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="py-16 text-center text-slate-400 text-sm font-medium"
                >
                  No matching governorates found for your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-bilad-bg border-t border-bilad-border flex items-center justify-between text-xs text-slate-400 font-medium">
        <span>
          Displaying {filteredData.length} of 18 reporting governorates
        </span>
        <span>Click column headers to sort data dynamically</span>
      </div>
    </div>
  );
}
