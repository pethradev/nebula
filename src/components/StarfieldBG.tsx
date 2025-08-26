// src/components/StarfieldBG.tsx
import React from "react";

export function StarfieldBG() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />
      <svg className="absolute inset-0 w-full h-full opacity-40">
        {[...Array(120)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            r={Math.random() * 1.1 + 0.2}
            fill="white"
          />
        ))}
      </svg>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-3xl bg-cyan-500/10" />
      <div className="absolute -bottom-32 right-1/2 translate-x-1/2 w-[70vw] h-[70vw] rounded-full blur-3xl bg-fuchsia-500/10" />
    </div>
  );
}