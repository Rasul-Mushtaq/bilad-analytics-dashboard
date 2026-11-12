import React, { useState, useMemo } from "react";
import { Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

const REGIONS = ["All", "Central", "Northern", "Southern", "Western"];

const REGION_COLORS = {
  Central: "bg-blue-600/10 text-blue-600 border-blue-500/20",
  Northern: "bg-green-500/10 text-green-500 border-green-500/20",
  Southern: "bg-bilad-warning/10 text-bilad-warning border-bilad-warning/20",
  Western: "bg-red-500/10 text-red-500 border-red-500/20",
};

export function AnalyticsTable({ data, selectedRegion, setSelectedRegion }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("total_guests");
  const [sortDirection, setSortDirection] = useState("desc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const filteredData = useMemo(() => {
    return data
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
  }, [data, selectedRegion, searchTerm, sortField, sortDirection]);

  const sortIcon = (field) => {
    if (sortField !== field) return <ArrowUpDown className="w-3 h-3 text-slate-500" />;
    return sortDirection === "asc" ? (
      <ArrowUp className="w-3 h-3 text-blue-600" />
    ) : (
      <ArrowDown className="w-3 h-3 text-blue-600" />
    );
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-bilad overflow-hidden animate-fade-in">
      {/* Table Header & Controls */}
      <div className="p-6 border-b border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-4 bg-slate-100/50">
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Governorate Statistical Breakdown
          </h3>
          <p className="text-xs text-slate-500">
            Comprehensive metrics across all eighteen governorates in Iraq
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search governorate..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-bilad-accent transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200 w-full sm:w-auto">
            {REGIONS.map((region) => {
              const isActive = selectedRegion === region;
              return (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-2 text-xs rounded-lg transition-all font-medium ${
                    isActive
                      ? "bg-blue-600 text-bilad-bg shadow-bilad-accent"
                      : "text-slate-500 hover:text-blue-600 hover:bg-white"
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-y-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-slate-50/80 backdrop-blur z-10 border-b border-slate-200 text-xs text-slate-500 uppercase tracking-wider">
            <tr>
              <th
                onClick={() => handleSort("governorate")}
                className="py-4 px-6 cursor-pointer hover:text-blue-600 transition-colors"
              >
                <div className="flex items-center gap-2">
                  Governorate {sortIcon("governorate")}
                </div>
              </th>
              <th
                onClick={() => handleSort("region")}
                className="py-4 px-6 cursor-pointer hover:text-blue-600 transition-colors"
              >
                <div className="flex items-center gap-2">
                  Region {sortIcon("region")}
                </div>
              </th>
              <th
                onClick={() => handleSort("hotels_count")}
                className="py-4 px-6 cursor-pointer hover:text-blue-600 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2">
                  Hotels {sortIcon("hotels_count")}
                </div>
              </th>
              <th
                onClick={() => handleSort("total_guests")}
                className="py-4 px-6 cursor-pointer hover:text-blue-600 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2">
                  Total Guests {sortIcon("total_guests")}
                </div>
              </th>
              <th
                onClick={() => handleSort("overnight_stays")}
                className="py-4 px-6 cursor-pointer hover:text-blue-600 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2">
                  Overnight Stays {sortIcon("overnight_stays")}
                </div>
              </th>
              <th
                onClick={() => handleSort("workforce")}
                className="py-4 px-6 cursor-pointer hover:text-blue-600 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2">
                  Workforce {sortIcon("workforce")}
                </div>
              </th>
              <th
                onClick={() => handleSort("revenue_million_dinars")}
                className="py-4 px-6 cursor-pointer hover:text-blue-600 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2">
                  Revenue (IQD M) {sortIcon("revenue_million_dinars")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bilad-border/30 text-sm">
            {filteredData.length > 0 ? (
              filteredData.map((row, idx) => (
                <tr
                  key={row.id}
                  className={`transition-colors ${
                    idx % 2 === 0 ? "bg-slate-100/30" : "bg-transparent"
                  } hover:bg-bilad-border/20`}
                >
                  <td className="py-4 px-6 font-bold text-slate-900">
                    {row.governorate}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`text-xs px-3 py-1.5 rounded-md font-medium border ${
                        REGION_COLORS[row.region] ||
                        "text-slate-500 border-slate-200/50"
                      }`}
                    >
                      {row.region}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-right font-mono">
                    {row.hotels_count.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-slate-900 text-right font-mono font-bold">
                    {row.total_guests.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-right font-mono">
                    {row.overnight_stays.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-right font-mono">
                    {row.workforce.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-blue-600 text-right font-mono font-bold">
                    {row.revenue_million_dinars > 0
                      ? `${row.revenue_million_dinars.toLocaleString()}M`
                      : <span className="text-slate-500">N/A</span>}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="py-16 text-center text-slate-500 text-sm font-medium"
                >
                  No matching governorates found for your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-slate-100/50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>
          Displaying {filteredData.length} of {data.length} reporting governorates
        </span>
        <span>Click column headers to sort data dynamically</span>
      </div>
    </div>
  );
}
