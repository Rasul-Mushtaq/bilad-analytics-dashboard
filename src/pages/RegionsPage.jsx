import React from "react";
import { AnalyticsTable } from "../components/ui/Table";

export function RegionsPage({ data, selectedRegion, setSelectedRegion }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <AnalyticsTable
        data={data}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </div>
  );
}
