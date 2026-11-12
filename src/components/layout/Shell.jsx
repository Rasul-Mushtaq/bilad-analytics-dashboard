import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function Shell({
  children,
  activePage,
  setActivePage,
  pageTitle,
  pageSubtitle,
  governorates,
  selectedGovernorate,
  onGovernorateChange,
}) {
  return (
    <div className="min-h-screen bg-bilad-bg text-bilad-text selection:bg-bilad-accent selection:text-bilad-bg">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="lg:pl-64 relative z-10">
        <Header
          pageTitle={pageTitle}
          pageSubtitle={pageSubtitle}
          governorates={governorates}
          selectedGovernorate={selectedGovernorate}
          onGovernorateChange={onGovernorateChange}
        />
        <main className="max-w-7xl mx-auto px-6 pt-8 pb-16 lg:pt-12 lg:pb-20">
          {children}
        </main>
      </div>
    </div>
  );
}