import React from "react";
import { Bell, User, MapPin } from "lucide-react";

export function Header({
  pageTitle,
  pageSubtitle,
  governorates,
  selectedGovernorate,
  onGovernorateChange,
}) {
  const governorateOptions = [
    { label: "All Governorates", value: "All" },
    ...governorates.map((g) => ({ label: g.name, value: g.name })),
  ];

  return (
    <header className="border-b border-bilad-border bg-bilad-surface/80 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-5">
          {/* Brand + breadcrumb */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-bilad-accent to-bilad-glow flex items-center justify-center shadow-bilad-accent">
              <span className="text-xs font-black text-bilad-bg">B</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-bilad-text tracking-tight">
                {pageTitle}
              </h1>
              <p className="text-[11px] text-bilad-textMuted uppercase tracking-wider">
                {pageSubtitle}
              </p>
            </div>
          </div>

          {/* Center: system status + global governorate filter */}
          <div className="flex items-center gap-6 w-full lg:w-auto max-w-md lg:max-w-none">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-bilad-card border border-bilad-border/50">
              <span className="w-2 h-2 rounded-full bg-bilad-success animate-pulse" />
              <span className="text-xs font-bold text-bilad-text">System Operational</span>
            </div>
            <div className="relative w-full lg:w-72">
              <MapPin
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bilad-textMuted"
              />
              <select
                value={selectedGovernorate}
                onChange={(e) => onGovernorateChange(e.target.value)}
                className="w-full bg-bilad-bg border border-bilad-border rounded-xl pl-9 pr-4 py-3 text-sm text-bilad-text focus:outline-none focus:border-bilad-accent focus:ring-1 focus:ring-bilad-accent transition-colors appearance-none cursor-pointer"
              >
                {governorateOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right: notifications + admin profile */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 rounded-lg text-bilad-textMuted hover:text-bilad-accent hover:bg-bilad-card transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-bilad-border">
              <div className="w-8 h-8 rounded-full bg-bilad-border overflow-hidden border border-bilad-border/60 flex items-center justify-center">
                <User className="w-4 h-4 text-bilad-textMuted" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-sm font-medium text-bilad-text">Admin</span>
                <span className="text-[10px] text-bilad-textMuted">bilad.gov.iq</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}