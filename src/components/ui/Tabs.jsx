import React from "react";

export function TabsTrigger({ children, active, className = "" }) {
  return (
    <span
      className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${active
        ? "text-bilad-accent border-bilad-accent"
        : "text-bilad-textMuted hover:text-bilad-text border-transparent"} ${className}`}
    >
      {children}
    </span>
  );
}

export function TabsContent({ children, active, className = "" }) {
  return (
    <div className={`block ${active ? "" : "hidden"} ${className}`}>
      {children}
    </div>
  );
}