import React, { useEffect, useState } from "react";
import { fetchTourismData } from "./lib/dataService";
import { Shell } from "./components/Shell";
import { OverviewPage } from "./pages/OverviewPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { RegionsPage } from "./pages/RegionsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { GOVERNORATES } from "./data/governorates";

const PAGE_CONFIG = {
  overview: {
    label: "Overview",
    title: "Overview",
    subtitle: "National performance snapshot across all 18 governorates.",
    component: OverviewPage,
  },
  analytics: {
    label: "Analytics",
    title: "Analytics",
    subtitle: "Deep-dive visualizations across guest volume, financial performance, and workforce density.",
    component: AnalyticsPage,
  },
  regions: {
    label: "Regions / Governorates",
    title: "Regions / Governorates",
    subtitle: "Detailed statistical breakdown by governorate with search, sort, and regional filtering.",
    component: RegionsPage,
  },
  settings: {
    label: "Settings",
    title: "Settings",
    subtitle: "Configure platform preferences and display options.",
    component: SettingsPage,
  },
};

export function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGovernorate, setSelectedGovernorate] = useState("All");
  const [selectedYear, setSelectedYear] = useState(2023);
  const [activePage, setActivePage] = useState("overview");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const rows = await fetchTourismData({ year: selectedYear });
        if (!cancelled) {
          setData(rows);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Error loading tourism data:", err);
          setError(err.message);
          setLoading(false);
        }
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [selectedYear]);

  const viewData =
    selectedGovernorate === "All"
      ? data
      : data.filter((row) => row.governorate === selectedGovernorate);

  const page = PAGE_CONFIG[activePage];
  const Page = page?.component;
  const title = page?.title || "BILAD";
  const subtitle =
    page?.subtitle || "National Tourism & Hotel Sector Analytics";

  if (loading) {
    return (
      <div className="min-h-screen bg-bilad-bg flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center">
            <div className="relative w-12 h-12 mx-auto">
              <svg
                className="w-full h-full animate-spin text-bilad-accent"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bilad-accent to-bilad-glow rounded-full blur opacity-15 animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-xl font-black text-bilad-text tracking-tight">
            Initializing BILAD Command Center…
          </h2>
          <p className="text-bilad-textMuted text-sm mt-1">
            Loading tourism analytics data from Supabase
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Shell>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-bilad-danger/20 text-bilad-danger flex items-center justify-center mx-auto">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-black text-bilad-text tracking-tight">
            Data Load Error
          </h2>
          <p className="text-bilad-textMuted text-sm max-w-xs mx-auto">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-xl bg-bilad-accent text-bilad-bg font-bold text-sm hover:bg-bilad-glow transition-colors shadow-bilad-accent"
          >
            Retry Connection
          </button>
        </div>
      </Shell>
    );
  }

  if (data.length === 0) {
    return (
      <Shell>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-bilad-border/30 text-bilad-textMuted flex items-center justify-center mx-auto">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-black text-bilad-text tracking-tight">
            No Data Available
          </h2>
          <p className="text-bilad-textMuted text-sm max-w-xs mx-auto">
            No tourism records found for the selected criteria.
          </p>
        </div>
      </Shell>
    );
  }

  return (
    <Shell
      activePage={activePage}
      setActivePage={setActivePage}
      pageTitle={title}
      pageSubtitle={subtitle}
      governorates={GOVERNORATES}
      selectedGovernorate={selectedGovernorate}
      onGovernorateChange={setSelectedGovernorate}
    >
      {error ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-bilad-danger/20 text-bilad-danger flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="text-xl font-black text-bilad-text tracking-tight">
            Data Load Error
          </h2>
          <p className="text-bilad-textMuted text-sm max-w-xs mx-auto">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-xl bg-bilad-accent text-bilad-bg font-bold text-sm hover:bg-bilad-glow transition-colors shadow-bilad-accent"
          >
            Retry Connection
          </button>
        </div>
      ) : data.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-bilad-border/30 text-bilad-textMuted flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-black text-bilad-text tracking-tight">
            No Data Available
          </h2>
          <p className="text-bilad-textMuted text-sm max-w-xs mx-auto">
            No tourism records found for the selected criteria.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {Page ? (
            <Page
              data={viewData}
              selectedGovernorate={selectedGovernorate}
              onGovernorateChange={setSelectedGovernorate}
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
              selectedRegion={selectedGovernorate}
              setSelectedRegion={setSelectedGovernorate}
            />
          ) : null}
        </div>
      )}
    </Shell>
  );
}

export default App;
