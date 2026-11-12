import React, { useState } from "react";
import { Sidebar } from "./Sidebar";

export function Shell({
  children,
  activePage,
  setActivePage,
  pageTitle,
  pageSubtitle,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bilad-bg text-bilad-text flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <main className="max-w-7xl w-full mx-auto px-6 py-8 lg:py-10">
          {pageTitle && (
            <div className="mb-6">
              <h1 className="text-2xl lg:text-3xl font-black text-bilad-text tracking-tight">
                {pageTitle}
              </h1>
              {pageSubtitle && (
                <p className="text-bilad-textMuted text-xs lg:text-sm mt-1">
                  {pageSubtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}
