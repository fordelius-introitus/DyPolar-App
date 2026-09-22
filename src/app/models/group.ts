export interface Post {
  autor: string;
  data: string;
  conteudo: string;
  curtidas?: number;
}

export interface Material {
  titulo: string;
  tipo: string;
  autor: string;
}

export interface Group {
  id: string;
  img: string;
  titulo: string;
  descricao: string;
  compatibilidade: number;
  membros: number;
  modalidade: string;
  tags: string[];
  userPertence: boolean;
  posts?: Post[];
  materiais?: Material[];
}