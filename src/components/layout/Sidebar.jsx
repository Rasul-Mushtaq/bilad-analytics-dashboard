import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  MapPin,
  Settings,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";

const NAV_ITEMS = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "analytics", label: "Analytics", icon: BarChart3 },
  { key: "regions", label: "Regions / Governorates", icon: MapPin },
  { key: "settings", label: "Settings", icon: Settings },
];

const isActive = (key, activePage) => key === activePage;

export function Sidebar({ open, setOpen, activePage, setActivePage }) {
  const handleNavClick = (key) => {
    setActivePage(key);
    setOpen(false);
  };

  const navItem = (item, active) => {
    const Icon = item.icon;
    return (
      <button
        key={item.key}
        onClick={() => handleNavClick(item.key)}
        className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all border-transparent ${
          active
            ? "bg-bilad-card border-bilad-border/50 shadow-bilad text-bilad-accent"
            : "text-bilad-textMuted hover:text-bilad-accent hover:bg-bilad-surface/50"
        }`}
      >
        <Icon
          className={`w-4 h-4 ${active ? "text-bilad-accent" : "text-bilad-textMuted"}`}
        />
        <span
          className={
            active ? "font-bold text-bilad-text" : "font-medium text-bilad-textMuted"
          }
        >
          {item.label}
        </span>
        {active && (
          <ArrowRight className="ml-auto w-3 h-3 text-bilad-accent" />
        )}
      </button>
    );
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-bilad-border bg-bilad-surface/80 backdrop-blur z-30">
        <button
          onClick={() => setOpen(true)}
          className="text-bilad-text hover:text-bilad-accent transition-colors"
          aria-label="Open navigation"
        >
          <span className="sr-only">Open navigation</span>
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-bilad-accent to-bilad-glow flex items-center justify-center shadow-bilad-accent">
            <span className="text-[9px] font-black text-bilad-bg">B</span>
          </div>
          <span className="text-sm font-black text-bilad-text tracking-tighter hidden sm:inline">
            BILAD
          </span>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:border-r lg:border-bilad-border bg-bilad-surface/70 backdrop-blur-md z-30">
        <div className="flex h-full flex-col">
          <div className="p-6 border-b border-bilad-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-bilad-accent to-bilad-glow flex items-center justify-center shadow-bilad-accent">
                <span className="text-[10px] font-black text-bilad-bg">B</span>
              </div>
              <h1 className="text-xl font-black text-bilad-text tracking-tighter">
                BILAD
              </h1>
            </div>
            <p className="text-[10px] text-bilad-textMuted mt-1 uppercase tracking-widest">
              Tourism Analytics
            </p>
          </div>

          <nav className="flex-1 px-3 space-y-0.5">
            {NAV_ITEMS.map((item) => navItem(item, isActive(item.key, activePage)))}
          </nav>

          <div className="p-6 border-t border-bilad-border">
            <p className="text-[10px] text-bilad-textMuted uppercase tracking-wider mb-4">
              System
            </p>
            <button
              onClick={() => handleNavClick("settings")}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-bilad-textMuted hover:text-bilad-accent hover:bg-bilad-card border border-bilad-border"
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar panel */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-bilad-surface border-r border-bilad-border transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="p-6 border-b border-bilad-border">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setOpen(false)}
                className="text-bilad-textMuted hover:text-bilad-accent transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-bilad-accent/20 flex items-center justify-center text-bilad-accent">
                  <span className="text-[9px] font-black text-bilad-bg">B</span>
                </div>
                <span className="text-sm font-black text-bilad-text tracking-tighter">
                  BILAD
                </span>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-0.5">
            {NAV_ITEMS.map((item) => navItem(item, isActive(item.key, activePage)))}
          </nav>

          <div className="p-6 border-t border-bilad-border">
            <p className="text-[10px] text-bilad-textMuted uppercase tracking-wider mb-4">
              System
            </p>
            <button
              onClick={() => {
                setOpen(false);
                handleNavClick("settings");
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-bilad-textMuted hover:text-bilad-accent hover:bg-bilad-card border border-bilad-border"
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
