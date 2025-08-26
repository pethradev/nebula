// src/components/NebulaApp.tsx
"use client";

// 👇 1. Importe useState e useEffect
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Player, SheetState, INITIAL_SHEET } from "@/constants/gameData";
import { classNames } from "@/lib/utils";

import { PlayersSetup } from "./PlayersSetup";
import { PlayerSheet } from "./PlayerSheet";
import { EventDrawers } from "./Drawer";

export function NebulaApp() {
  const [players, setPlayers] = useLocalStorage<Player[]>("nebula.players", []);
  const [sheet, setSheet] = useLocalStorage<SheetState>("nebula.sheet", INITIAL_SHEET);
  const [tab, setTab] = useLocalStorage<"setup" | "sheet" | "cards">("nebula.tab", "setup");

  // 👇 2. Crie um estado para saber se o componente está montado no cliente
  const [isClient, setIsClient] = useState(false);

  // 👇 3. Use useEffect para atualizar o estado APÓS a montagem no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-10 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            <div>
              <div className="text-lg md:text-xl font-bold tracking-tight">
                A Sombra da Nébula
              </div>
              <div className="text-xs text-white/60 -mt-0-5">
                Ficha • Sorteador • Tema espacial
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-1 sm:gap-2">
            {[
              { id: "setup", label: "Jogadores" },
              { id: "sheet", label: "Minha Ficha" },
              { id: "cards", label: "Cartas" },
            ].map((t: any) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={classNames(
                  "px-3 md:px-4 py-1.5 rounded-xl text-sm font-semibold border transition-colors",
                  tab === t.id
                    ? "bg-cyan-500/90 text-slate-900 border-cyan-300"
                    : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                )}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 md:py-10 flex flex-col gap-6">
        {/* 👇 4. Só renderize o conteúdo das abas se isClient for true */}
        {isClient && (
          <>
            {tab === "setup" && <PlayersSetup players={players} setPlayers={setPlayers} />}
            {tab === "sheet" && <PlayerSheet players={players} sheet={sheet} setSheet={setSheet} />}
            {tab === "cards" && <EventDrawers />}
          </>
        )}
      </main>

      <footer className="py-8 text-center text-white/50 text-sm">
        MVP — Tema espacial • Salva localmente (LocalStorage)
      </footer>
    </>
  );
}