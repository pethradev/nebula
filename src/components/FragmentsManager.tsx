// src/components/FragmentsManager.tsx
"use client";

import React, { useMemo } from "react";
import {
  FragCategory,
  FRAGMENTS,
  categorizeFragments,
  consumeForVaccines,
} from "@/constants/gameData";

export function FragmentsManager({
  fragCounts,
  setFragCounts,
  vaccines,
  setVaccines,
}: {
  fragCounts: Record<string, number>;
  setFragCounts: (fc: Record<string, number>) => void;
  vaccines: number;
  setVaccines: (n: number) => void;
}) {
  const add = (name: string) => {
    const next = { ...fragCounts, [name]: (fragCounts[name] || 0) + 1 };
    const { fragCounts: consumed, vaccinesGained } = consumeForVaccines(next);
    setFragCounts(consumed);
    if (vaccinesGained > 0) setVaccines(vaccines + vaccinesGained);
  };

  const remove = (name: string) => {
    const current = fragCounts[name] || 0;
    if (current <= 0) return;
    setFragCounts({ ...fragCounts, [name]: current - 1 });
  };

  const countsByCat = useMemo(() => categorizeFragments(fragCounts), [fragCounts]);
  const categoryColors: Record<FragCategory, string> = {
    "Básica": "border-sky-400",
    "Avançada": "border-amber-400",
    "Experimental/Alienígena": "border-fuchsia-400",
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-white/80">
        Vacinas Criadas:{" "}
        <span className="font-semibold text-2xl text-cyan-200">{vaccines}</span>
      </div>
      <p className="text-sm text-white/60 -mt-2">
        O sistema converte automaticamente 4 fragmentos (na proporção 2:1:1) em uma vacina.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {(["Básica", "Avançada", "Experimental/Alienígena"] as FragCategory[]).map(
          (cat) => (
            <div key={cat} className={`bg-white/5 rounded-2xl p-3 border ${categoryColors[cat]}`}>
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="text-lg font-semibold text-white">{cat}</h4>
                <span className="text-cyan-200 font-semibold">{countsByCat[cat] || 0}</span>
              </div>
              <div className="flex flex-col gap-2">
                {FRAGMENTS.filter((f) => f.category === cat).map((f) => (
                  <div key={f.name} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                    <span className="text-white/90 mr-2 text-sm">{f.name}</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => remove(f.name)} className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">-</button>
                      <span className="min-w-[2ch] text-center text-white font-semibold">{fragCounts[f.name] || 0}</span>
                      <button onClick={() => add(f.name)} className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}