import React from "react";
import { AnalyticsTable } from "../components/ui/Table";
import { MapPin } from "lucide-react";

export function RegionsPage({ data, selectedRegion, setSelectedRegion }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Regions / Governorates
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Detailed statistical breakdown by governorate with search, sort, and
            regional filtering.
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200/80">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-medium text-slate-900">Governorate data</span>
        </div>
      </div>

      <AnalyticsTable
        data={data}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </div>
  );
}