// src/app/page.tsx
import { NebulaApp } from "@/components/NebulaApp";
import { StarfieldBG } from "@/components/StarfieldBG";

export default function HomePage() {
  return (
    // O div pai é opcional, mas ajuda a conter tudo
    <div className="min-h-screen text-white font-sans">
      <StarfieldBG />
      <NebulaApp />
    </div>
  );
}