// src/components/PlayerSheet.tsx
"use client";

import React, { useState } from "react";
import { Player, SheetState, INITIAL_SHEET, initResources, RESOURCES } from "@/constants/gameData";
import { Section } from "./Section";
import { RolesPicker } from "./RolesPicker";
import { ResourceCounter } from "./ResourceCounter";
import { FragmentsManager } from "./FragmentsManager";
import { Suspects } from "./Suspects";

export function PlayerSheet({
  players,
  sheet,
  setSheet,
}: {
  players: Player[];
  sheet: SheetState;
  setSheet: (s: SheetState) => void;
}) {
  const [isResetModalOpen, setResetModalOpen] = useState(false);

  const toggleRole = (role: string) => {
    const has = sheet.selectedRoles.includes(role);
    setSheet({
      ...sheet,
      selectedRoles: has
        ? sheet.selectedRoles.filter((r) => r !== role)
        : [...sheet.selectedRoles, role],
    });
  };
  const setResource = (k: string, v: number) =>
    setSheet({ ...sheet, resources: { ...sheet.resources, [k]: v } });
  const setFragCounts = (fc: Record<string, number>) =>
    setSheet({ ...sheet, fragCounts: fc });
  const setVaccines = (n: number) => setSheet({ ...sheet, vaccines: n });
  const setSuspects = (s: Record<string, boolean>) =>
    setSheet({ ...sheet, suspects: s });

  const handleReset = (
    type: "all" | "resources" | "fragments" | "suspects" | "notes"
  ) => {
    if (type === "all") {
      setSheet(INITIAL_SHEET);
    } else {
      const newState = { ...sheet };
      if (type === "resources") newState.resources = initResources();
      if (type === "fragments") {
        newState.fragCounts = {};
        newState.vaccines = 0;
      }
      if (type === "suspects") newState.suspects = {};
      if (type === "notes") newState.notes = "";
      setSheet(newState);
    }
    setResetModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <Section title="Quem sou nesta rodada?">
        <RolesPicker selected={sheet.selectedRoles} onToggle={toggleRole} />
      </Section>

      <Section title="Recursos">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-white/80 mb-2 font-semibold">Vitais</h4>
            <div className="flex flex-col gap-2">
              {RESOURCES.vitais.map((k) => (
                <ResourceCounter
                  key={k}
                  label={k}
                  value={sheet.resources[k]}
                  onChange={(v) => setResource(k, v)}
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white/80 mb-2 font-semibold">Táticos</h4>
            <div className="flex flex-col gap-2">
              {RESOURCES.taticos.map((k) => (
                <ResourceCounter
                  key={k}
                  label={k}
                  value={sheet.resources[k]}
                  onChange={(v) => setResource(k, v)}
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white/80 mb-2 font-semibold">Pressão Externa</h4>
            <div className="flex flex-col gap-2">
              {RESOURCES.pressao.map((k) => (
                <ResourceCounter
                  key={k}
                  label={k}
                  value={sheet.resources[k]}
                  onChange={(v) => setResource(k, v)}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Fragmentos de Cura">
        <FragmentsManager
          fragCounts={sheet.fragCounts}
          setFragCounts={setFragCounts}
          vaccines={sheet.vaccines}
          setVaccines={setVaccines}
        />
      </Section>

      <Section title="Suspeitas de Contaminação">
        {players.length === 0 ? (
          <p className="text-white/70">
            Adicione jogadores na tela inicial para habilitar as suspeitas.
          </p>
        ) : (
          <Suspects
            players={players}
            suspects={sheet.suspects}
            setSuspects={setSuspects}
          />
        )}
      </Section>

      <Section title="Anotações da Rodada">
        <textarea
          className="w-full min-h-[140px] bg-white/10 border border-white/10 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-fuchsia-400 text-white placeholder-white/60"
          placeholder="Estratégias, pistas, combinações de fragmentos..."
          value={sheet.notes}
          onChange={(e) => setSheet({ ...sheet, notes: e.target.value })}
        />
      </Section>

      <Section title="Gerenciamento da Ficha">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setResetModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-red-500/80 hover:bg-red-500/100 text-white font-semibold shadow"
          >
            Resetar Ficha
          </button>
        </div>
      </Section>

      {isResetModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-white/20 rounded-2xl p-6 shadow-xl max-w-md w-full">
            <h3 className="text-xl font-semibold text-white mb-4">
              O que você deseja resetar?
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button onClick={() => handleReset("resources")} className="p-3 bg-white/10 hover:bg-white/20 rounded-lg">Recursos</button>
              <button onClick={() => handleReset("fragments")} className="p-3 bg-white/10 hover:bg-white/20 rounded-lg">Fragmentos</button>
              <button onClick={() => handleReset("suspects")} className="p-3 bg-white/10 hover:bg-white/20 rounded-lg">Suspeitas</button>
              <button onClick={() => handleReset("notes")} className="p-3 bg-white/10 hover:bg-white/20 rounded-lg">Anotações</button>
            </div>
            <button onClick={() => handleReset("all")} className="w-full p-3 bg-red-500/80 hover:bg-red-500/100 rounded-lg font-semibold mb-4">
              Resetar TUDO
            </button>
            <button onClick={() => setResetModalOpen(false)} className="w-full p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}