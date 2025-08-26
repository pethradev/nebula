// src/components/RolesPicker.tsx
"use client";

import React from "react";
import { ROLES } from "@/constants/gameData";
import { classNames } from "@/lib/utils"; // Vamos criar este arquivo de utils em breve

export function RolesPicker({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (role: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {ROLES.map((r) => {
        const active = selected.includes(r);
        return (
          <button
            key={r}
            onClick={() => onToggle(r)}
            className={classNames(
              "rounded-2xl p-3 text-left border transition shadow",
              active
                ? "bg-cyan-500 text-slate-900 border-cyan-300"
                : "bg-white/5 text-white/90 border-white/10 hover:bg-white/10"
            )}
          >
            <div className="text-sm opacity-70">Função</div>
            <div className="text-lg font-semibold">{r}</div>
            {active && (
              <div className="mt-1 text-xs font-medium">Selecionado</div>
            )}
          </button>
        );
      })}
    </div>
  );
}