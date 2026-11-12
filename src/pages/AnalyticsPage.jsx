import React from "react";
import { BarChart3 } from "lucide-react";
import { GuestVolumeChart } from "../components/charts/GuestVolumeChart";
import { FinancialChart } from "../components/charts/FinancialChart";
import { WorkforceChart } from "../components/charts/WorkforceChart";
import { Dropdown } from "../components/ui/Dropdown";
import { GOVERNORATES, YEARS } from "../data/governorates";

export function AnalyticsPage({
  data,
  selectedGovernorate,
  onGovernorateChange,
  selectedYear,
  onYearChange,
}) {
  const governorateOptions = [
    { label: "All Governorates", value: "All" },
    ...GOVERNORATES.map((g) => ({ label: g.name, value: g.name })),
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Analytics
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Deep-dive visualizations across guest volume, financial performance,
            and workforce density.
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200/80">
          <BarChart3 className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-medium text-slate-900">Interactive charts</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-bilad">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-start lg:items-center gap-4">
            <Dropdown
              options={YEARS.map((y) => ({ label: String(y), value: y }))}
              value={selectedYear}
              onChange={onYearChange}
              label="Year"
              className="w-48"
            />
            <Dropdown
              options={governorateOptions}
              value={selectedGovernorate}
              onChange={onGovernorateChange}
              label="Governorate"
              className="w-72"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GuestVolumeChart data={data} height={420} className="lg:col-span-2" />
        <FinancialChart data={data} height={420} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <WorkforceChart data={data} height={400} className="lg:col-span-3" />
      </div>
    </div>
  );
}
