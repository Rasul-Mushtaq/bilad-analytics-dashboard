import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function Shell({ children, activePage, setActivePage }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-bilad-bg">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="lg:pl-64 relative z-10">
        <Header onMenuToggle={() => setSidebarOpen((prev) => !prev)} />
        <main className="max-w-7xl mx-auto px-6 pt-8 pb-16 lg:pt-12 lg:pb-20">
          {children}
        </main>
      </div>
    </div>
  );
}