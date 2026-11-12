import React from "react";
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
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="bg-bilad-card border border-bilad-border rounded-2xl p-4 shadow-bilad">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Dropdown
            options={YEARS.map((y) => ({ label: String(y), value: y }))}
            value={selectedYear}
            onChange={onYearChange}
            label="Survey Year"
            className="w-full sm:w-48"
          />
          <Dropdown
            options={governorateOptions}
            value={selectedGovernorate}
            onChange={onGovernorateChange}
            label="Governorate Filter"
            className="w-full sm:w-72"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-bilad-card border border-bilad-border rounded-2xl p-5 shadow-bilad">
          <h3 className="text-sm font-bold text-bilad-text mb-4">
            Guest Volume by Governorate
          </h3>
          <GuestVolumeChart data={data} height={300} />
        </div>
        <FinancialChart data={data} height={300} />
      </div>

      <div className="bg-bilad-card border border-bilad-border rounded-2xl p-5 shadow-bilad">
        <WorkforceChart data={data} height={280} />
      </div>
    </div>
  );
}
