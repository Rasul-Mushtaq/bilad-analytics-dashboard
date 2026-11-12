import React from "react";
import { ChevronDown } from "lucide-react";

export function Dropdown({ options, value, onChange, label, className = "" }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-xs font-bold text-bilad-textMuted uppercase tracking-wider">
          {label}
        </span>
      )}
      <div className="relative">
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bilad-textMuted pointer-events-none"
        />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-bilad-bg border border-bilad-border rounded-xl pl-9 pr-4 py-3 text-sm text-bilad-text focus:outline-none focus:border-bilad-accent focus:ring-1 focus:ring-bilad-accent transition-colors appearance-none cursor-pointer ${className}`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}