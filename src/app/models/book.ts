export interface Book {
  id: string;
  img: string;
  titulo: string;
  descricao: string;
  autor: string;
  categoria: string;
  idioma: string;
  nivel: string;
  preco: number;
  tags: string[];
  isPremium: boolean;
  discount: number | null;
}