// src/components/Section.tsx
import React from "react";

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="w-full bg-white/5 backdrop-blur rounded-2xl p-4 md:p-6 shadow-lg border border-white/10">
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-3 text-cyan-200">
      {title}
    </h2>
    {children}
  </div>
);