import React from "react";
import { KpiCard } from "../components/ui/KpiCard";
import { GuestVolumeChart } from "../components/charts/GuestVolumeChart";
import { formatNumber, formatIQD } from "../components/ui/formatters";

export function OverviewPage({ data }) {
  const totalHotels = data.reduce((acc, curr) => acc + curr.hotels_count, 0);
  const totalGuests = data.reduce((acc, curr) => acc + curr.total_guests, 0);
  const totalStays = data.reduce((acc, curr) => acc + curr.overnight_stays, 0);
  const totalRevenue = data.reduce(
    (acc, curr) => acc + curr.revenue_million_dinars,
    0,
  );
  const totalWorkforce = data.reduce((acc, curr) => acc + curr.workforce, 0);

  const topRegion = [...data].sort(
    (a, b) => b.total_guests - a.total_guests,
  )[0];

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Accommodations"
          value={formatNumber(totalHotels)}
          subtitle="Active hotels"
          trend="up"
          trendLabel="+8.2%"
        />
        <KpiCard
          title="Guest Arrivals"
          value={formatNumber(totalGuests)}
          subtitle="Annual visitors"
          trend="up"
          trendLabel="+12.4%"
        />
        <KpiCard
          title="Overnight Stays"
          value={formatNumber(totalStays)}
          subtitle="Bed nights utilized"
          trend="up"
          trendLabel="+6.1%"
        />
        <KpiCard
          title="Total Revenue"
          value={formatIQD(totalRevenue)}
          subtitle="Gross sector revenue"
          trend="up"
          trendLabel="+14.7%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-bilad-card border border-bilad-border rounded-2xl p-5 shadow-bilad">
          <h3 className="text-sm font-bold text-bilad-text mb-2">
            Top Performing Region
          </h3>
          <p className="font-black text-lg text-bilad-accent">
            {topRegion?.governorate}
          </p>
          <p className="text-xs text-bilad-textMuted mt-1">
            {topRegion?.total_guests?.toLocaleString()} annual visitors (
            {topRegion?.region} region).
          </p>
        </div>

        <div className="bg-bilad-card border border-bilad-border rounded-2xl p-5 shadow-bilad">
          <h3 className="text-sm font-bold text-bilad-text mb-2">
            Sector Workforce
          </h3>
          <p className="font-black text-lg text-bilad-text">
            {totalWorkforce.toLocaleString()} Employed
          </p>
          <p className="text-xs text-bilad-textMuted mt-1">
            Total hospitality personnel nationwide.
          </p>
        </div>

        <div className="bg-bilad-card border border-bilad-border rounded-2xl p-5 shadow-bilad">
          <h3 className="text-sm font-bold text-bilad-text mb-2">
            Reporting Coverage
          </h3>
          <p className="font-black text-lg text-bilad-text">18 Governorates</p>
          <p className="text-xs text-bilad-textMuted mt-1">
            Full regional statistical survey scope.
          </p>
        </div>
      </div>

      <div className="bg-bilad-card border border-bilad-border rounded-2xl p-5 shadow-bilad">
        <h3 className="text-sm font-bold text-bilad-text mb-4">
          National Guest Volume Distribution
        </h3>
        <GuestVolumeChart data={data} height={280} />
      </div>
    </div>
  );
}
