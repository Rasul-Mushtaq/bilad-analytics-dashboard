import React from "react";

export function ChartCard({ title, description, children, height = 340 }) {
  return (
    <div className="bg-bilad-card border border-bilad-border rounded-2xl p-6 shadow-bilad min-w-0">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-bilad-text mb-1">{title}</h3>
        {description && (
          <p className="text-xs text-bilad-textMuted mt-1">{description}</p>
        )}
      </div>
      <div className="w-full" style={{ height }}>
        {children}
      </div>
    </div>
  );
}