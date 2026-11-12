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
        className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
          active
            ? "bg-bilad-card border border-bilad-border shadow-bilad text-bilad-accent"
            : "text-bilad-textMuted hover:text-bilad-text hover:bg-bilad-card/60 border border-transparent"
        }`}
      >
        <Icon
          className={`w-4 h-4 ${active ? "text-bilad-accent" : "text-bilad-textMuted"}`}
        />
        <span
          className={
            active
              ? "font-bold text-bilad-text"
              : "font-semibold text-bilad-textMuted"
          }
        >
          {item.label}
        </span>
        {active && <ArrowRight className="ml-auto w-3 h-3 text-bilad-accent" />}
      </button>
    );
  };

  return (
    <>
      {/* Mobile top bar toggle */}
      <div className="lg:hidden flex items-center justify-between px-6 py-4 border-b border-bilad-border bg-bilad-surface backdrop-blur z-30">
        <button
          onClick={() => setOpen(true)}
          className="text-bilad-text hover:text-bilad-accent transition-colors"
          aria-label="Open navigation"
        >
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
        <span className="text-sm font-black text-bilad-text tracking-tighter">
          Bilad
        </span>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 shrink-0 border-r border-bilad-border bg-bilad-surface backdrop-blur-md min-h-screen sticky top-0 z-30">
        <div className="flex h-full flex-col">
          <div className="p-6 border-b border-bilad-border">
            <h1 className="text-xl font-black text-bilad-text tracking-tight">
              Bilad
            </h1>
            <p className="text-[10px] font-bold text-bilad-textMuted mt-0.5 uppercase tracking-widest">
              Tourism Analytics
            </p>
          </div>

          <nav className="flex-1 px-3 space-y-1.5 mt-6">
            {NAV_ITEMS.map((item) => navItem(item, item.key === activePage))}
          </nav>
        </div>
      </aside>

      {/* Mobile drawer backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-bilad-surface border-r border-bilad-border transform transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="p-6 border-b border-bilad-border flex items-center justify-between">
            <h1 className="text-xl font-black text-bilad-text tracking-tight">
              Bilad
            </h1>
            <button
              onClick={() => setOpen(false)}
              className="text-bilad-textMuted hover:text-bilad-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-1.5 mt-6">
            {NAV_ITEMS.map((item) => navItem(item, item.key === activePage))}
          </nav>
        </div>
      </div>
    </>
  );
}
