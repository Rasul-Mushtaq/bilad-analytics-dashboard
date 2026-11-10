import React from "react";

export function Header() {
  return (
    <header className="border-b border-bilad-border bg-bilad-card/80 backdrop-blur-md sticky top-0 z-30 py-6 px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-[0.3em] text-bilad-accent text-center sm:text-left">
            B I L A D
          </h1>
          <p className="text-xs text-slate-400 tracking-wider uppercase mt-1">
            National Tourism and Hotel Sector Analytics
          </p>
        </div>
        <div className="flex items-center gap-3"></div>
      </div>
    </header>
  );
}
