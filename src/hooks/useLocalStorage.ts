// src/hooks/useLocalStorage.ts
"use client"; // ESSENCIAL: Este hook interage com APIs do navegador.

import { useState, useEffect } from "react";

// Hook para persistir estado no localStorage do navegador.
// Foi aprimorado para lidar com mudanças na estrutura dos dados entre versões.
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Para objetos, mescla com o valor inicial para garantir que todas as chaves existam.
        // Isso previne erros se a estrutura de dados mudou entre as versões.
        if (
          typeof initial === "object" &&
          initial !== null &&
          !Array.isArray(initial)
        ) {
          return { ...initial, ...parsed };
        }
        return parsed as T;
      }
      return initial;
    } catch {
      // Se houver qualquer erro ao ler ou analisar, retorna para o valor inicial.
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(
        `Não foi possível salvar no localStorage para a chave "${key}"`,
        error
      );
    }
  }, [key, value]);

  return [value, setValue] as const;
}