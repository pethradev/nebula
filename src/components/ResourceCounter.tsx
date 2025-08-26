// src/components/ResourceCounter.tsx
"use client";

import React from "react";

export function ResourceCounter({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-3 py-2">
      <span className="text-white/90 mr-2">{label}</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onChange(Math.max(0, value - 1))}
          className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20"
        >
          -
        </button>
        <span className="min-w-[2ch] text-center text-white font-semibold">
          {value}
        </span>
        <button
          onClick={() => onChange(value + 1)}
          className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20"
        >
          +
        </button>
      </div>
    </div>
  );
}