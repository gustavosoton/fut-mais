export interface Times {
  nomeTime: string;
  brasao: string;
  jogadores: Jogadores[];
}

export interface Jogadores {
  nome: string;
  idade: number;
  nacionalidade: string;
  posicao: string;
  pontuacao: number;
  foto: string;
}
