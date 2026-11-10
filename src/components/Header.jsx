import React from "react";

export function Header() {
  return (
    <header className="border-b border-bilad-border bg-bilad-card/50 backdrop-blur py-6 px-8 mb-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold tracking-[0.25em] text-bilad-accent mb-2">
          B I L A D
        </h1>
        <p className="text-sm text-slate-400 tracking-wide uppercase">
          National Tourism and Hotel Sector Analytics Dashboard
        </p>
      </div>
    </header>
  );
}
