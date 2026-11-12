import React from "react";

export function SettingsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Settings
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Configure platform preferences and display options.
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-bilad max-w-xl">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Appearance</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900">Color Theme</p>
              <p className="text-xs text-slate-500">Deep slate dark mode (active)</p>
            </div>
            <span className="text-xs font-bold text-blue-600">Dark</span>
          </div>
          <div className="h-px bg-bilad-border my-4" />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900">Data Refresh</p>
              <p className="text-xs text-slate-500">Auto-refresh survey data</p>
            </div>
            <div className="relative w-10 h-6 rounded-full bg-bilad-border">
              <span className="absolute left-[2px] top-[2px] w-4 h-4 rounded-full bg-white transition-all" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}