import React, { useState } from "react";
import { DollarSign } from "lucide-react";
import { HorizontalBarChart } from "./HorizontalBarChart";
import { formatIQD } from "../ui/formatters";

export function FinancialChart({ data, height = 400, className }) {
  const [activeTab, setActiveTab] = useState("revenue");

  const tabBtn = (label, value) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
        activeTab === value
          ? "text-bilad-accent border-bilad-accent"
          : "text-bilad-textMuted hover:text-bilad-text border-transparent"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className={`bg-bilad-card border border-bilad-border rounded-2xl p-6 shadow-bilad min-w-0 flex flex-col h-full ${className || ""}`}>
      <div className="mb-6 flex items-center gap-2">
        <DollarSign className="w-5 h-5 text-bilad-accent" />
        <h3 className="text-lg font-bold text-bilad-text">Financial Performance</h3>
      </div>

      <div className="flex w-[172px] flex-col rounded-xl bg-bilad-surface border border-bilad-border p-1 mb-6 shrink-0">
        {tabBtn("Gross Revenue", "revenue")}
        {tabBtn("Operating Expenses", "expenses")}
      </div>

      <div className="flex-1 min-h-0">
        {activeTab === "revenue" ? (
          <HorizontalBarChart
            data={data}
            dataKey="revenue_million_dinars"
            fill="#38bdf8"
            height={height}
            formatter={formatIQD}
          />
        ) : (
          <HorizontalBarChart
            data={data}
            dataKey="expenses_million_dinars"
            fill="#f87171"
            height={height}
            formatter={formatIQD}
          />
        )}
      </div>
    </div>
  );
}