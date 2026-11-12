import React from "react";
import { KpiCard } from "../components/ui/KpiCard";
import { GuestVolumeChart } from "../components/charts/GuestVolumeChart";
import { formatNumber, formatIQD } from "../components/ui/formatters";

const TRENDS = {
  accommodations: "+8.2%",
  guests: "+12.4%",
  stays: "+6.1%",
  revenue: "+14.7%",
};

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
    <div className="flex items-center gap-3">
      <div className="space-y-8 animate-fade-in">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Overview
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              National performance snapshot across all governorates.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard
            title="Total Accommodations"
            value={formatNumber(totalHotels)}
            subtitle="Active hotels &amp; lodging facilities"
            trend="up"
            trendLabel={TRENDS.accommodations}
          />
          <KpiCard
            title="Annual Guest Arrivals"
            value={formatNumber(totalGuests)}
            subtitle="Visitor arrivals"
            trend="up"
            trendLabel={TRENDS.guests}
          />
          <KpiCard
            title="Overnight Stays"
            value={formatNumber(totalStays)}
            subtitle="Total bed nights utilized"
            trend="up"
            trendLabel={TRENDS.stays}
          />
          <KpiCard
            title="Total Revenue"
            value={formatIQD(totalRevenue)}
            subtitle="Gross sector revenue"
            trend="up"
            trendLabel={TRENDS.revenue}
          />
        </div>
        <KpiCard
          title="Total Accommodations"
          value={formatNumber(totalHotels)}
          subtitle="Active hotels"
          trend="up"
          trendLabel="+8.2%"
        />
        <KpiCard
          title="Annual Guest Arrivals"
          value={formatNumber(totalGuests)}
          subtitle="Visitor arrivals"
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Top Performing Region
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-slate-900">
                {topRegion?.governorate}
              </p>
              <p className="text-xs text-slate-500">
                {topRegion?.region} region
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500 leading-relaxed">
            Highest annual guest volume with{" "}
            {topRegion?.total_guests?.toLocaleString()} visitors.
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Sector Workforce
          </h3>
          <div className="text-3xl font-black text-slate-900 mb-1">
            {totalWorkforce.toLocaleString()}
          </div>
          <p className="text-xs text-slate-500">
            Total employed across the national hospitality sector.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Coverage</h3>
          <div className="text-3xl font-black text-slate-900 mb-1">18</div>
          <p className="text-xs text-slate-500">Governorates reporting data.</p>
        </div>
      </div>

      <GuestVolumeChart data={data} height={350} />
    </div>
  );
}
