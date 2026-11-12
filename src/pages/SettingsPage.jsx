import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function SettingsPage() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("bilad_theme") || "dark",
  );
  const [autoSync, setAutoSync] = useState(true);

  useEffect(() => {
    const root = document.body;
    if (theme === "light") {
      root.classList.add("light-theme");
      localStorage.setItem("bilad_theme", "light");
    } else {
      root.classList.remove("light-theme");
      localStorage.setItem("bilad_theme", "dark");
    }
  }, [theme]);

  return (
    <div className="space-y-6 max-w-2xl animate-fade-in pb-10">
      <div className="bg-bilad-card border border-bilad-border rounded-2xl p-6 shadow-bilad space-y-6">
        <h3 className="text-base font-bold text-bilad-text">
          Appearance & System Preferences
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-bilad-text">
              Interface Theme
            </p>
            <p className="text-xs text-bilad-textMuted">
              Toggle between dark and light mode
            </p>
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bilad-surface border border-bilad-border text-bilad-accent text-xs font-bold hover:bg-bilad-border/30 transition-colors cursor-pointer"
          >
            {theme === "dark" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>

        <div className="h-px bg-bilad-border" />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-bilad-text">
              Supabase Auto-Sync
            </p>
            <p className="text-xs text-bilad-textMuted">
              Automatically sync survey statistics on year selection
            </p>
          </div>
          <button
            onClick={() => setAutoSync(!autoSync)}
            className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${autoSync ? "bg-bilad-accent" : "bg-bilad-border"}`}
          >
            <span
              className={`absolute top-1 w-4 h-4 rounded-full bg-bilad-bg transition-transform ${autoSync ? "right-1" : "left-1"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
