// src/components/Drawer.tsx
"use client";

import React, { useMemo, useState } from "react";
import { EVENT_CARDS } from "@/constants/gameData";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Section } from "./Section";

function Drawer({
  title,
  eventType,
}: {
  title: string;
  eventType: "Nave" | "Espacial";
}) {
  const [filter, setFilter] = useLocalStorage<string | "Todas">(`nebula.filter.${eventType}`, "Todas");
  const [last, setLast] = useState<(typeof EVENT_CARDS)[0] | null>(null);

  const allCards = useMemo(() => EVENT_CARDS.filter((c) => c.type === eventType), [eventType]);
  const categories = useMemo(() => ["Todas", ...Array.from(new Set(allCards.map((c) => c.category)))], [allCards]);
  const pool = useMemo(() => (filter === "Todas" ? allCards : allCards.filter((c) => c.category === filter)), [filter, allCards]);

  const draw = () => {
    if (pool.length === 0) return;
    const idx = Math.floor(Math.random() * pool.length);
    setLast(pool[idx]);
  };

  return (
    <Section title={title}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <select value={filter} onChange={(e) => setFilter(e.target.value as any)} className="bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-white/95 focus:outline-none focus:ring-2 focus:ring-cyan-500">
            {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
          <button onClick={draw} className="px-4 py-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold shadow">
            Sortear Carta
          </button>
        </div>
        {last ? (
          <div className="relative mx-auto w-full md:w-2/3">
            <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl">
              <div className="text-sm uppercase tracking-wider text-white/70">{last.category}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{last.title}</h3>
              <p className="text-white/90 italic mb-3">“{last.narrative}”</p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-white/90">
                <span className="text-cyan-200 font-semibold">Efeito: </span>
                {last.effect}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white/70">
            Clique em{" "}
            <span className="text-cyan-200 font-semibold">Sortear Carta</span>{" "}
            para começar.
          </p>
        )}
      </div>
    </Section>
  );
}

export function EventDrawers() {
  return (
    <div className="flex flex-col gap-6">
      <Drawer title="Sorteador de Eventos da Nave" eventType="Nave" />
      <Drawer title="Sorteador de Eventos Espaciais" eventType="Espacial" />
    </div>
  );
}