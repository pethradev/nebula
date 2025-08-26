// src/lib/utils.ts

// Função para juntar classes de CSS condicionalmente, removendo valores falsos.
export function classNames(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

// Função para gerar um ID aleatório simples.
export function seededId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}