import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  Table,
  Settings,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";

const NAV_ITEMS = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "analytics", label: "Analytics", icon: BarChart3 },
  { key: "regions", label: "Regions", icon: Table },
  { key: "settings", label: "Settings", icon: Settings },
];

const isActive = (key, activePage) => key === activePage;

export function Sidebar({
  open,
  setOpen,
  activePage,
  setActivePage,
}) {
  const handleNavClick = (key) => {
    setActivePage(key);
    setOpen(false);
  };

  return (
    <>
      {/* Mobile header toggle */}
      <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-slate-200 bg-slate-100/80 backdrop-blur z-30">
        <button
          onClick={() => setOpen(true)}
          className="text-slate-900 hover:text-blue-600 transition-colors"
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
          <span className="text-sm font-black text-slate-900 tracking-tighter hidden sm:inline">
            BILAD
          </span>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:border-r lg:border-slate-200 bg-slate-100/70 backdrop-blur-md z-30">
        <div className="flex h-full flex-col">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-bilad-accent to-bilad-glow flex items-center justify-center shadow-bilad-accent">
                <span className="text-[10px] font-black text-bilad-bg">B</span>
              </div>
              <h1 className="text-xl font-black text-slate-900 tracking-tighter">
                BILAD
              </h1>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">
              Tourism Analytics
            </p>
          </div>

          <nav className="flex-1 px-3 space-y-0.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.key, activePage);
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all border-transparent ${
                    active
                      ? "bg-white border-slate-200/50 shadow-bilad text-blue-600"
                      : "text-slate-500 hover:text-blue-600 hover:bg-slate-100/50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-blue-600" : "text-slate-500"}`} />
                  <span className={active ? "font-bold text-slate-900" : "font-medium text-slate-500"}>
                    {item.label}
                  </span>
                  {active && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-slate-200/40">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">Admin User</span>
                <span className="text-[10px] text-slate-500">bilad.gov.iq</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar panel */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-100 border-r border-slate-200 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setOpen(false)}
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-600">
                  <span className="text-[9px] font-black text-bilad-bg">B</span>
                </div>
                <span className="text-sm font-black text-slate-900 tracking-tighter">
                  BILAD
                </span>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-0.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.key, activePage);
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all border-transparent ${
                    active
                      ? "bg-white border-slate-200/50 shadow-bilad text-blue-600"
                      : "text-slate-500 hover:text-blue-600 hover:bg-slate-100/50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-blue-600" : "text-slate-500"}`} />
                  <span className={active ? "font-bold text-slate-900" : "font-medium text-slate-500"}>
                    {item.label}
                  </span>
                  {active && (
                    <ArrowRight className="ml-auto w-3 h-3 text-blue-600" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="p-6 border-t border-slate-200">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-4">
              System
            </p>
            <button
              onClick={() => setOpen(false)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-white border border-slate-200"
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