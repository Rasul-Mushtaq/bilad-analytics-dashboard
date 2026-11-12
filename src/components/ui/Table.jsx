import React, { useState, useMemo } from "react";
import { Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { Dropdown } from "./Dropdown";
import { Badge } from "./Badge";
import { REGIONS } from "../../data/governorates";
import { formatNumber, formatIQD } from "./formatters";

const REGION_VARIANT = {
  Central: "accent",
  Northern: "success",
  Southern: "warning",
  Western: "danger",
};

const COLUMNS = [
  { key: "governorate", label: "Governorate", numeric: false },
  { key: "region", label: "Region", numeric: false },
  { key: "hotels_count", label: "Accommodations", numeric: true },
  { key: "total_guests", label: "Annual Guests", numeric: true },
  { key: "overnight_stays", label: "Overnight Stays", numeric: true },
  { key: "workforce", label: "Workforce", numeric: true },
  { key: "revenue_million_dinars", label: "Revenue (IQD)", numeric: true },
];

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
    if (sortField !== field) {
      return <ArrowUpDown className="w-3 h-3 text-bilad-textMuted" />;
    }
    return sortDirection === "asc" ? (
      <ArrowUp className="w-3 h-3 text-bilad-accent" />
    ) : (
      <ArrowDown className="w-3 h-3 text-bilad-accent" />
    );
  };
  return (
    <div className="bg-bilad-card border border-bilad-border rounded-2xl shadow-bilad overflow-hidden animate-fade-in">
      <div className="p-6 border-b border-bilad-border flex flex-col lg:flex-row justify-between items-center gap-4 bg-bilad-surface/50">
        <div>
          <h3 className="text-lg font-bold text-bilad-text mb-1">
            Governorate Statistical Breakdown
          </h3>
          <p className="text-xs text-bilad-textMuted">
            Comprehensive metrics across all eighteen governorates of Iraq.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          <div className="relative w-full sm:w-72">
            <Search
              className="absolute left-3.5 top-3 h-4 w-4 text-bilad-textMuted"
            />
            <input
              type="text"
              placeholder="Search governorate..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-bilad-bg border border-bilad-border rounded-xl pl-10 pr-4 py-3 text-sm text-bilad-text focus:outline-none focus:border-bilad-accent focus:ring-1 focus:ring-bilad-accent transition-colors"
            />
          </div>
          <Dropdown
            options={REGIONS.map((r) => ({ label: r, value: r }))}
            value={selectedRegion}
            onChange={setSelectedRegion}
            label="Region"
            className="w-full sm:w-56"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-bold text-bilad-textMuted uppercase tracking-wider bg-bilad-surface/40">
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className={`py-4 px-6 cursor-pointer hover:text-bilad-accent transition-colors ${col.numeric ? "text-right" : ""}`}
                  scope="col"
                >
                  <div className="flex items-center justify-end gap-2">
                    {col.label} {sortIcon(col.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-bilad-border/30 text-sm">
            {filteredData.length > 0 ? (
              filteredData.map((row, idx) => (
                <tr
                  key={row.id}
                  className={`transition-colors ${
                    idx % 2 === 0 ? "bg-bilad-surface/30" : "bg-transparent"
                  } hover:bg-bilad-border/20`}
                >
                  <td className="py-4 px-6 font-bold text-bilad-text">
                    {row.governorate}
                  </td>
                  <td className="py-4 px-6">
                    <Badge variant={REGION_VARIANT[row.region] || "outline"}>
                      {row.region}
                    </Badge>
                  </td>
                  <td className="py-4 px-6 text-bilad-textMuted text-right font-mono">
                    {formatNumber(row.hotels_count)}
                  </td>
                  <td className="py-4 px-6 text-bilad-text text-right font-mono font-bold">
                    {formatNumber(row.total_guests)}
                  </td>
                  <td className="py-4 px-6 text-bilad-textMuted text-right font-mono">
                    {formatNumber(row.overnight_stays)}
                  </td>
                  <td className="py-4 px-6 text-bilad-textMuted text-right font-mono">
                    {formatNumber(row.workforce)}
                  </td>
                  <td className="py-4 px-6 text-bilad-accent text-right font-mono font-bold">
                    {row.revenue_million_dinars > 0 ? (
                      formatIQD(row.revenue_million_dinars)
                    ) : (
                      <span className="text-bilad-textMuted">N/A</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={COLUMNS.length}
                  className="py-16 text-center text-bilad-textMuted text-sm font-medium"
                >
                  No matching governorates found for your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-bilad-surface/50 border-t border-bilad-border flex items-center justify-between text-xs text-bilad-textMuted font-medium">
        <span>
          Displaying {filteredData.length} of {data.length} reporting governorates
        </span>
        <span>Click column headers to sort</span>
      </div>
    </div>
  );
}
