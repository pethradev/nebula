// src/constants/gameData.ts

// ======================
// TYPES
// ======================
export type FragCategory = "Básica" | "Avançada" | "Experimental/Alienígena";
export type Player = { id: string; name: string };
export type ResourceState = Record<string, number>;
export type SheetState = {
  selectedRoles: string[];
  resources: ResourceState;
  fragCounts: Record<string, number>;
  vaccines: number;
  notes: string;
  suspects: Record<string, boolean>;
};

// ======================
// GAME DATA
// ======================
export const ROLES = [
  "Tripulante", "Capitão", "Diplomata", "Médico",
  "Engenheiro", "Cientista", "Hospedeiro",
];

export const RESOURCES = {
  vitais: ["Comida", "Água", "Oxigênio"],
  taticos: ["Traje Protetor", "Medicamentos", "Comunicação", "Carisma", "Kit de Emergência"],
  pressao: ["Eletricidade", "Pressão Atmosférica"],
};

export const FRAGMENTS: { name: string; category: FragCategory }[] = [
  { name: "Antígenos híbridos", category: "Básica" },
  { name: "RNA/DNA sintético modular", category: "Básica" },
  { name: "Nanopartículas adaptativas", category: "Básica" },
  { name: "Exopolissacarídeos bio-luminescentes", category: "Avançada" },
  { name: "Peptídeos defensivos universais", category: "Avançada" },
  { name: "Microbioma simbiótico encapsulado", category: "Avançada" },
  { name: "Nanobots neuroprotetores", category: "Avançada" },
  { name: "Peptídeos de estabilização sináptica", category: "Avançada" },
  { name: "Anticorpos sintéticos anti-neurotoxina", category: "Avançada" },
  { name: "Nanopartículas moduladoras de neurotransmissão", category: "Avançada" },
  { name: "Vacina com memória neuronal", category: "Experimental/Alienígena" },
  { name: "Nanobots imunológicos", category: "Experimental/Alienígena" },
  { name: "Proteínas quânticas dinâmicas", category: "Experimental/Alienígena" },
  { name: "IA de atualização da vacina", category: "Experimental/Alienígena" },
  { name: "Nanopartículas regenerativas", category: "Experimental/Alienígena" },
  { name: "Enzimas bio-sintéticas anti-apoptose", category: "Experimental/Alienígena" },
];

export const EVENT_CARDS: { id: string; title: string; narrative: string; effect: string; type: 'Nave' | 'Espacial'; category: string }[] = [
  // Cole aqui TODO o array EVENT_CARDS do código original
  // Crises na Nave
  { id: "crise-1", title: "Apagão no Reator", narrative: "As luzes da Helios se apagam. A escuridão favorece quem se esconde entre sombras…", effect: "O hospedeiro pode agir livremente nesta rodada. Todos descartam 1 energia.", type: 'Nave', category: "Crises na Nave" },
  { id: "crise-2", title: "Falha de Oxigênio", narrative: "Um vazamento inesperado ameaça o ar respirável. Cada jogador sente a pressão aumentando.", effect: "Cada jogador deve contribuir com 1 oxigênio ao estoque coletivo ou sofrer 1 dano.", type: 'Nave', category: "Crises na Nave" },
  { id: "crise-3", title: "Rachadura na Casca da Nave", narrative: "O casco da nave range e se abre. Quem estiver desprotegido corre risco de contaminação.", effect: "Perde-se 2 pontos de pressão atmosférica coletiva. Jogadores sem traje protetor sofrem penalidade de 1 oxigênio.", type: 'Nave', category: "Crises na Nave" },
  // Eventos de Contaminação
  { id: "cont-1", title: "Tripulante Morto Encontrado", narrative: "Um colega não resistiu. O medo e a incerteza corroem o grupo.", effect: "O médico penaliza os dois jogadores mais votados como contaminados, retirando deles 1 de cada um dos 3 recursos vitais.", type: 'Nave', category: "Eventos de Contaminação" },
  { id: "cont-2", title: "Falha nos Detectores Biomédicos", narrative: "Os sistemas de verificação falham. A Nébula aproveita a confusão.", effect: "Nenhum jogador pode verificar contaminação nesta rodada.", type: 'Nave', category: "Eventos de Contaminação" },
  // Conflitos Políticos e Sociais
  { id: "conf-1", title: "Motim", narrative: "O comando é questionado. A confiança se rompe.", effect: "Capitão deve negociar recursos ou perde autoridade temporária. Jogadores votam em líder interino (por 2 rodadas).", type: 'Nave', category: "Conflitos Políticos e Sociais" },
  // Golpes de Sorte
  { id: "sorte-1", title: "Descoberta Tecnológica", narrative: "Avanço inesperado na pesquisa. O futuro parece promissor.", effect: "Cientista pode duplicar 1 fragmento de cura.", type: 'Nave', category: "Golpes de Sorte" },
  { id: "sorte-2", title: "Suprimentos Perdidos Encontrados", narrative: "Estoques esquecidos trazem alívio temporário.", effect: "Jogador recebe 3 recursos aleatórios.", type: 'Nave', category: "Golpes de Sorte" },
  // Drenagem de Recursos Vitais
  { id: "dren-1", title: "Reator de O₂ em Pane", narrative: "O reator principal falha, ameaçando toda a nave.", effect: "O Engenheiro pode gastar 1 eletricidade para salvar o grupo; caso contrário, perde-se 3 oxigênios do estoque coletivo.", type: 'Nave', category: "Drenagem de Recursos Vitais" },
  // Eventos Súbitos
  { id: "sub-1", title: "Dia de Manutenção", narrative: "Manutenção emergencial exige consumo de recursos vitais para estabilizar sistemas.", effect: "Cada jogador descarta 1 recurso vital à escolha.", type: 'Nave', category: "Eventos Súbitos" },
  // Eventos de Exploração de Planetas
  { id: "exp-1", title: "Planeta Estéril", narrative: "Nada aqui tem valor. A viagem parece um desperdício de recursos.", effect: "Nenhum recurso ou fragmento de cura pode ser coletado nesta rodada.", type: 'Espacial', category: "Exploração de Planetas" },
  { id: "exp-2", title: "Fauna Hostil", narrative: "Predadores alienígenas cercam o grupo. Cada passo é um risco.", effect: "Para coletar cura, cada jogador descarta 1 comida ou sofre dano.", type: 'Espacial', category: "Exploração de Planetas" },
  { id: "exp-3", title: "Ingrediente Raro Encontrado", narrative: "Descoberta promissora! Um passo mais perto da cura.", effect: "Grupo coleta 1 fragmento de cura.", type: 'Espacial', category: "Exploração de Planetas" },
  // Eventos de Planetas
  { id: "planet-1", title: "D’rek-IV — Sopro Invisível", narrative: "Um vento sutil percorre a nave, trazendo consigo a ameaça silenciosa da Nébula.", effect: "Todos marquem quem suspeitam estar contaminado.", type: 'Espacial', category: "Planetas" },
  { id: "planet-2", title: "D’rek-IV — Planta Colossal", narrative: "Entre as raízes, um ingrediente raro para a cura brilha. Quem se aproximar sente o ar pesado, mas a recompensa é preciosa.", effect: "+1 fragmento de cura.", type: 'Espacial', category: "Planetas" },
  { id: "planet-3", title: "D’rek-IV — Raízes Tóxicas", narrative: "O solo treme sob os pés. Quem não estiver protegido sente a toxina invadir seus pulmões.", effect: "Perde 1 oxigênio.", type: 'Espacial', category: "Planetas" },
  { id: "planet-4", title: "Tarkon — Predadores Inteligentes", narrative: "O uivo distante ecoa. Criaturas caçam em bando.", effect: "Cada jogador deve descartar 1 comida ou sofrer dano físico.", type: 'Espacial', category: "Planetas" },
  { id: "planet-5", title: "Tarkon — Rastreamento Alienígena", narrative: "Rastros bioluminescentes indicam caminhos e armadilhas.", effect: "Um jogador deve revelar secretamente 1 carta tática.", type: 'Espacial', category: "Planetas" },
  { id: "planet-6", title: "Tarkon — Oásis Seguro", narrative: "No meio da floresta, uma clareira de água cristalina oferece alívio e nutrição.", effect: "Todos recuperam 1 recurso vital aleatório.", type: 'Espacial', category: "Planetas" },
  { id: "planet-7", title: "Ionis — Tempestade Forte", narrative: "Relâmpagos cortam o céu e bloqueiam sinais de rádio.", effect: "Nenhum jogador pode negociar nesta rodada.", type: 'Espacial', category: "Planetas" },
  { id: "planet-8", title: "Ionis — Descarga Eletrônica", narrative: "Uma onda elétrica percorre a expedição.", effect: "Cada jogador perde 1 energia, exceto o Engenheiro.", type: 'Espacial', category: "Planetas" },
  { id: "planet-9", title: "Ionis — Efeito Curativo", narrative: "Entre a fúria da tempestade, uma planta luminescente brilha.", effect: "O Cientista coleta 1 fragmento de cura.", type: 'Espacial', category: "Planetas" },
  { id: "planet-10", title: "Velaria — Lagoas Bio-luminescentes", narrative: "O brilho das lagoas revela um antígeno raro.", effect: "Fragmento de cura encontrado pelo grupo.", type: 'Espacial', category: "Planetas" },
  { id: "planet-11", title: "Velaria — Fungo Contaminante", narrative: "Esparsos pelos troncos, fungos soltam esporos que contaminam a água.", effect: "Cada jogador deve descartar 1 água ou sofrer risco de infecção.", type: 'Espacial', category: "Planetas" },
  { id: "planet-12", title: "Velaria — Descoberta Científica", narrative: "Um padrão microscópico sugere potencial para duplicar a pesquisa.", effect: "O Cientista pode copiar 1 fragmento de cura.", type: 'Espacial', category: "Planetas" },
  { id: "planet-13", title: "Cryonis — Neve Ácida", narrative: "Partículas ácidas se misturam à neve.", effect: "Todos perdem 1 oxigênio ao respirarem o ar frio e corrosivo.", type: 'Espacial', category: "Planetas" },
  { id: "planet-14", title: "Cryonis — Gelo Transparente", narrative: "Cristais translúcidos escondem fragmentos de cura.", effect: "Somente quem estiver atento com kit de emergência consegue coletar.", type: 'Espacial', category: "Planetas" },
  { id: "planet-15", title: "Cryonis — Avalanche Repentina", narrative: "O solo treme e gelo despenca.", effect: "Cada jogador perde 1 recurso vital aleatório.", type: 'Espacial', category: "Planetas" },
  { id: "planet-16", title: "Pyronis — Rios de Lava", narrative: "Fluxos incandescentes bloqueiam caminhos.", effect: "Todos perdem 1 comida e 1 energia tentando atravessar.", type: 'Espacial', category: "Planetas" },
  { id: "planet-17", title: "Pyronis — Cristais Minerais", narrative: "Depósitos de minerais raros podem ser transformados em ingredientes de cura.", effect: "Requer descartar 1 carta de recurso para coletar o fragmento.", type: 'Espacial', category: "Planetas" },
  { id: "planet-18", title: "Pyronis — Erupção Local", narrative: "O céu escurece com cinzas.", effect: "O Capitão deve negociar para manter autoridade, ou perderá controle temporário do grupo.", type: 'Espacial', category: "Planetas" },
  { id: "planet-19", title: "Verdantis — Rios e Florestas", narrative: "A vegetação abundante oferece sustento.", effect: "Todos recebem 1 recurso vital aleatório.", type: 'Espacial', category: "Planetas" },
  { id: "planet-20", title: "Verdantis — Espécie Curativa Alienígena", narrative: "Uma planta rara libera compostos poderosos.", effect: "Fragmento de cura raro encontrado.", type: 'Espacial', category: "Planetas" },
  { id: "planet-21", title: "Verdantis — Disputa por Recursos", narrative: "A abundância desperta conflitos.", effect: "Cada jogador deve doar 1 recurso vital ao estoque coletivo; quem não doar gera desconfiança.", type: 'Espacial', category: "Planetas" },
  { id: "planet-22", title: "Luminara — Cristais Energéticos", narrative: "Fragmentos luminosos contêm antígenos raros.", effect: "Cientista coleta 1 fragmento de cura.", type: 'Espacial', category: "Planetas" },
  { id: "planet-23", title: "Luminara — Reflexo Ofuscante", narrative: "A luz intensa desorienta a tripulação.", effect: "Cada jogador descarta 1 energia ou perde turno em movimentação.", type: 'Espacial', category: "Planetas" },
  { id: "planet-24", title: "Luminara — Caminhos Instáveis", narrative: "O solo cristalino se quebra facilmente.", effect: "Cada jogador deve descartar 1 recurso vital para atravessar seguro.", type: 'Espacial', category: "Planetas" },
  { id: "planet-25", title: "Nebiros — Névoa Tóxica", narrative: "O ar carregado de toxinas ameaça a tripulação.", effect: "Cada jogador descarta 1 oxigênio ou sofre risco de contaminação.", type: 'Espacial', category: "Planetas" },
  { id: "planet-26", title: "Nebiros — Raízes Ocultas", narrative: "Plantas estranhas escondem ingredientes para a cura.", effect: "Grupo coleta 1 fragmento de cura.", type: 'Espacial', category: "Planetas" },
  { id: "planet-27", title: "Nebiros — Ilusão da Névoa", narrative: "Formações enganam os sentidos.", effect: "O Diplomata deve negociar ou perderá controle temporário sobre a decisão coletiva.", type: 'Espacial', category: "Planetas" },
  { id: "planet-28", title: "Xyphera — Tempestade Cristalina", narrative: "Areia cortante fere a tripulação.", effect: "Cada jogador perde 1 comida ou oxigênio.", type: 'Espacial', category: "Planetas" },
  { id: "planet-29", title: "Xyphera — Oásis Oculto", narrative: "Um lago subterrâneo surge.", effect: "Todos recuperam 1 recurso vital aleatório.", type: 'Espacial', category: "Planetas" },
  { id: "planet-30", title: "Xyphera — Minerais Raros", narrative: "Cristais com propriedades curativas.", effect: "Fragmento de cura encontrado pelo grupo.", type: 'Espacial', category: "Planetas" },
  { id: "planet-31", title: "Zorath — Erupção Subterrânea", narrative: "Um tremor força todos a se equilibrar.", effect: "Cada jogador descarta 1 energia ou recurso vital.", type: 'Espacial', category: "Planetas" },
  { id: "planet-32", title: "Zorath — Caverna Misteriosa", narrative: "Dentro de uma caverna, compostos curativos brilham.", effect: "Fragmento de cura coletado pelo grupo.", type: 'Espacial', category: "Planetas" },
  { id: "planet-33", title: "Zorath — Rocha Instável", narrative: "Passagens fecham e bloqueiam rotas.", effect: "O Engenheiro deve gastar energia ou todos perdem 1 recurso vital.", type: 'Espacial', category: "Planetas" },
  { id: "planet-34", title: "Auroris — Aurora Bioluminescente", narrative: "Fragmentos de plantas brilham.", effect: "Cientista coleta 1 fragmento de cura.", type: 'Espacial', category: "Planetas" },
  { id: "planet-35", title: "Auroris — Hipnose da Luz", narrative: "A tripulação se distrai.", effect: "Cada jogador descarta 1 carta tática ou recurso vital.", type: 'Espacial', category: "Planetas" },
  { id: "planet-36", title: "Auroris — Corrente de Energia", narrative: "O campo magnético bloqueia sistemas de comunicação.", effect: "Diplomata e Cientista só podem agir parcialmente.", type: 'Espacial', category: "Planetas" },
  { id: "planet-37", title: "Pyxion — Vulcões Ativos", narrative: "Fluxos de lava bloqueiam caminhos.", effect: "Cada jogador perde 1 recurso vital para atravessar seguro.", type: 'Espacial', category: "Planetas" },
  { id: "planet-38", title: "Pyxion — Cristais de Lava", narrative: "Formações minerais contêm antígenos raros.", effect: "Fragmento de cura coletado.", type: 'Espacial', category: "Planetas" },
  { id: "planet-39", title: "Pyxion — Calor Extremo", narrative: "O calor desgasta a tripulação.", effect: "Cada jogador descarta 1 oxigênio ou comida.", type: 'Espacial', category: "Planetas" },
  { id: "planet-40", title: "Sylvaris — Floresta Abundante", narrative: "Recursos naturais fornecem comida e água.", effect: "Todos recuperam 1 recurso vital aleatório.", type: 'Espacial', category: "Planetas" },
  { id: "planet-41", title: "Sylvaris — Plantas Curativas", narrative: "Fragmentos de plantas raras podem gerar cura.", effect: "Fragmento de cura coletado.", type: 'Espacial', category: "Planetas" },
  { id: "planet-42", title: "Sylvaris — Predadores Ocultos", narrative: "Criaturas furtivas atacam.", effect: "Cada jogador deve descartar 1 comida ou oxigênio.", type: 'Espacial', category: "Planetas" },
  { id: "planet-43", title: "Nocteris — Escuridão Total", narrative: "O hospedeiro age livremente.", effect: "Todos marquem suspeitas na cartela de contaminação.", type: 'Espacial', category: "Planetas" },
  { id: "planet-44", title: "Nocteris — Frutos Luminescentes", narrative: "Frutos estranhos iluminam o caminho.", effect: "Fragmento de cura coletado pelo grupo.", type: 'Espacial', category: "Planetas" },
  { id: "planet-45", title: "Nocteris — Solo Traiçoeiro", narrative: "Fendas escondidas ameaçam a segurança.", effect: "Cada jogador descarta 1 recurso vital.", type: 'Espacial', category: "Planetas" },
  // ... e todos os outros 40+ eventos
];

// ======================
// INITIAL STATE & HELPERS
// ======================

// Função para inicializar o estado dos recursos com valor 0.
export function initResources(): ResourceState {
  const r: ResourceState = {};
  [...RESOURCES.vitais, ...RESOURCES.taticos, ...RESOURCES.pressao].forEach(
    (k) => (r[k] = 0)
  );
  return r;
}

// O estado inicial para a ficha de um jogador.
export const INITIAL_SHEET: SheetState = {
  selectedRoles: ["Tripulante"],
  resources: initResources(),
  fragCounts: {},
  vaccines: 0,
  notes: "",
  suspects: {},
};

// Função para contar quantos fragmentos de cada categoria existem.
export function categorizeFragments(fragCounts: Record<string, number>) {
  const counts: Record<FragCategory, number> = { "Básica": 0, "Avançada": 0, "Experimental/Alienígena": 0 };
  for (const [frag, qty] of Object.entries(fragCounts)) {
    const info = FRAGMENTS.find((f) => f.name === frag);
    if (info) counts[info.category] += qty;
  }
  return counts;
}

// Lógica de regras para consumir fragmentos e criar vacinas.
export function consumeForVaccines(fragCounts: Record<string, number>) {
  let vaccinesGained = 0;
  const currentFrags = { ...fragCounts };
  const fragsByCategory: Record<FragCategory, string[]> = {
    "Básica": FRAGMENTS.filter((f) => f.category === "Básica").map((f) => f.name),
    "Avançada": FRAGMENTS.filter((f) => f.category === "Avançada").map((f) => f.name),
    "Experimental/Alienígena": FRAGMENTS.filter((f) => f.category === "Experimental/Alienígena").map((f) => f.name),
  };

  const decrementFromCategory = (cat: FragCategory, amount: number) => {
    let remaining = amount;
    for (const fragName of fragsByCategory[cat]) {
      const currentAmount = currentFrags[fragName] || 0;
      if (currentAmount > 0) {
        const toTake = Math.min(remaining, currentAmount);
        currentFrags[fragName] -= toTake;
        remaining -= toTake;
        if (remaining === 0) break;
      }
    }
  };

  while (true) {
    const counts = categorizeFragments(currentFrags);
    const cB = counts["Básica"];
    const cA = counts["Avançada"];
    const cE = counts["Experimental/Alienígena"];

    let formed = false;
    if (cB >= 2 && cA >= 1 && cE >= 1) {
      decrementFromCategory("Básica", 2);
      decrementFromCategory("Avançada", 1);
      decrementFromCategory("Experimental/Alienígena", 1);
      vaccinesGained++;
      formed = true;
    } else if (cA >= 2 && cB >= 1 && cE >= 1) {
      decrementFromCategory("Avançada", 2);
      decrementFromCategory("Básica", 1);
      decrementFromCategory("Experimental/Alienígena", 1);
      vaccinesGained++;
      formed = true;
    } else if (cE >= 2 && cB >= 1 && cA >= 1) {
      decrementFromCategory("Experimental/Alienígena", 2);
      decrementFromCategory("Básica", 1);
      decrementFromCategory("Avançada", 1);
      vaccinesGained++;
      formed = true;
    }

    if (!formed) break;
  }
  return { fragCounts: currentFrags, vaccinesGained };
}