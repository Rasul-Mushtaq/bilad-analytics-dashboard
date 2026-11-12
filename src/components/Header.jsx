import React from "react";
import { Bell, Sun, Moon, User } from "lucide-react";

export function Header({ onMenuToggle }) {
  return (
    <header className="border-b border-slate-200 bg-slate-100/80 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-bilad-accent to-bilad-glow flex items-center justify-center shadow-bilad-accent">
              <span className="text-xs font-black text-bilad-bg">B</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-900 tracking-tight">
                BILAD
              </h1>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider">
                National Tourism &amp; Hotel Sector Analytics
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto justify-end">
            <div className="hidden lg:flex items-center gap-8 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span>Data live · 2023</span>
              </div>
              <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                <span>Last updated</span>
                <span className="text-slate-900">Today</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-white transition-colors"
                aria-label="Toggle theme"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-white transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
                <div className="w-8 h-8 rounded-full bg-bilad-border overflow-hidden border border-slate-200/60">
                  <User className="w-4 h-4 text-slate-500" />
                </div>
                <span className="text-sm font-medium text-slate-900 hidden sm:block">
                  Admin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
