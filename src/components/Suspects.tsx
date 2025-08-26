// src/components/Suspects.tsx
"use client";

import React from "react";
import { Player } from "@/constants/gameData";

export function Suspects({
  players,
  suspects,
  setSuspects,
}: {
  players: Player[];
  suspects: Record<string, boolean>;
  setSuspects: (s: Record<string, boolean>) => void;
}) {
  const toggle = (id: string) => setSuspects({ ...suspects, [id]: !suspects[id] });
  return (
    <div className="grid md:grid-cols-3 gap-2">
      {players.map((p) => (
        <label
          key={p.id}
          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 cursor-pointer hover:bg-white/10"
        >
          <input
            type="checkbox"
            checked={!!suspects[p.id]}
            onChange={() => toggle(p.id)}
            className="w-4 h-4 accent-cyan-400"
          />
          <span className="text-white/90">{p.name}</span>
        </label>
      ))}
    </div>
  );
}