// src/components/PlayersSetup.tsx
"use client";

import React, { useState } from "react";
import { Section } from "./Section";
import { Player } from "@/constants/gameData";
import { seededId } from "@/lib/utils";

export function PlayersSetup({
  players,
  setPlayers,
}: {
  players: Player[];
  setPlayers: (p: Player[]) => void;
}) {
  const [name, setName] = useState("");
  const addPlayer = () => {
    if (!name.trim()) return;
    setPlayers([...players, { id: seededId("p"), name: name.trim() }]);
    setName("");
  };
  const remove = (id: string) => setPlayers(players.filter((p) => p.id !== id));
  const rename = (id: string, newName: string) =>
    setPlayers(players.map((p) => (p.id === id ? { ...p, name: newName } : p)));

  return (
    <Section title="Jogadores da Partida">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addPlayer()}
            placeholder="Adicionar nome do jogador"
            className="flex-1 bg-white/10 border border-white/10 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/50"
          />
          <button
            onClick={addPlayer}
            className="px-4 py-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold shadow"
          >
            Adicionar
          </button>
        </div>
        {players.length === 0 ? (
          <p className="text-white/70">Nenhum jogador adicionado ainda.</p>
        ) : (
          <ul className="grid md:grid-cols-2 gap-2">
            {players.map((p) => (
              <li
                key={p.id}
                className="flex items-center gap-2 bg-white/5 rounded-xl p-2 border border-white/10"
              >
                <input
                  className="flex-1 bg-transparent outline-none text-white px-2 py-1 rounded-lg focus:ring-1 focus:ring-cyan-400 border border-white/10"
                  value={p.name}
                  onChange={(e) => rename(p.id, e.target.value)}
                />
                <button
                  onClick={() => remove(p.id)}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-white/80"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}