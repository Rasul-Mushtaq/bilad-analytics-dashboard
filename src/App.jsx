import React, { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import { Header } from "./components/Header";
import { MetricCard } from "./components/MetricCard";
import { ChartsSection } from "./components/ChartsSection";
import { AnalyticsTable } from "./components/AnalyticsTable";

export function App() {
  const [tourismData, setTourismData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("annual_tourism_stats")
          .select(
            `
            id,
            year,
            hotels_count,
            total_guests,
            overnight_stays,
            workforce,
            revenue_million_dinars,
            expenses_million_dinars,
            governorates (
              name,
              region
            )
          `,
          )
          .eq("year", 2023);

        if (error) throw error;
        setTourismData(data || []);
      } catch (err) {
        console.error("Error fetching relational data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const totalHotels = tourismData.reduce(
    (acc, curr) => acc + curr.hotels_count,
    0,
  );
  const totalGuests = tourismData.reduce(
    (acc, curr) => acc + curr.total_guests,
    0,
  );
  const totalStays = tourismData.reduce(
    (acc, curr) => acc + curr.overnight_stays,
    0,
  );
  const totalRevenue = tourismData.reduce(
    (acc, curr) => acc + curr.revenue_million_dinars,
    0,
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-bilad-bg flex items-center justify-center text-bilad-accent font-medium">
        Connecting to Bilad Relational Database...
      </div>
    );
  }

  const flattenedTableData = tourismData.map((item) => ({
    id: item.id,
    governorate: item.governorates.name,
    region: item.governorates.region,
    hotels_count: item.hotels_count,
    total_guests: item.total_guests,
    overnight_stays: item.overnight_stays,
    workforce: item.workforce,
    revenue_million_dinars: item.revenue_million_dinars,
  }));

  return (
    <div className="min-h-screen bg-bilad-bg text-slate-100 pb-16">
      <Header />
      <main className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Accommodations"
            value={totalHotels.toLocaleString()}
            subtitle="Across all 18 governorates"
          />
          <MetricCard
            title="Total Guests"
            value={totalGuests.toLocaleString()}
            subtitle="Verified annual visitors"
          />
          <MetricCard
            title="Overnight Stays"
            value={totalStays.toLocaleString()}
            subtitle="Total bed nights utilized"
          />
          <MetricCard
            title="Total Revenue"
            value={`${totalRevenue.toLocaleString()}M`}
            subtitle="In Iraqi Dinars (IQD)"
          />
        </div>

        <ChartsSection data={tourismData} />

        <AnalyticsTable data={flattenedTableData} />
      </main>
    </div>
  );
}

export default App;
