// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Sombra da Nébula",
  description: "Ficha e sorteador para o jogo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* Adicionamos a classe 'bg-slate-950' para o fundo escuro padrão */}
      <body className={`${inter.className} bg-slate-950`}>{children}</body>
    </html>
  );
}