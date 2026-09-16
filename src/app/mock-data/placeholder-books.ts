import { Book } from '../models/book'; 

export const mockBooks: Book[] = [
  {
    id: 'b1',
    img: 'assets/img/books/fme_geometria.jpg',
    titulo: 'Fundamentos da Matemática Elementar - Vol 9: Geometria Plana',
    descricao: 'Obra clássica e indispensável para aprofundamento em geometria, cobrindo teoria completa, demonstrações e uma vasta gama de exercícios de vestibulares.',
    autor: 'Osvaldo Dolce e José Nicolau Pompeo',
    categoria: 'Livro Didático',
    idioma: 'Português',
    nivel: 'Avançado',
    preco: 140.00,
    tags: ['Matemática', 'Geometria', 'Militar'],
    isPremium: false,
    discount: null
  },
  {
    id: 'b2',
    img: 'assets/img/books/fundamentos_fisica.jpg',
    titulo: 'Fundamentos da Física - Vol 1: Mecânica',
    descricao: 'Referência no ensino de física. Aborda cinemática, dinâmica e estática com clareza, sendo ideal para a consolidação da base teórica.',
    autor: 'Ramalho, Nicolau e Toledo',
    categoria: 'Livro Didático',
    idioma: 'Português',
    nivel: 'Intermediário',
    preco: 185.00,
    tags: ['Física', 'Mecânica', 'Vestibular'],
    isPremium: true,
    discount: 15
  },
  {
    id: 'b3',
    img: 'assets/img/books/guidorizzi.jpg',
    titulo: 'Um Curso de Cálculo - Vol. 1',
    descricao: 'O livro de cálculo mais tradicional nas engenharias e cursos de exatas do Brasil. Focado em limites, derivadas e introdução a integrais.',
    autor: 'Hamilton Luiz Guidorizzi',
    categoria: 'Livro Técnico',
    idioma: 'Português',
    nivel: 'Ensino Superior',
    preco: 195.00,
    tags: ['Cálculo', 'Matemática', 'Engenharia'],
    isPremium: true,
    discount: 10
  },
  {
    id: 'b4',
    img: 'assets/img/books/caixas_pretas.jpg',
    titulo: 'A Sociedade das Caixas Pretas',
    descricao: 'Obra essencial para entender como algoritmos secretos controlam a informação, o dinheiro e impactam a sociedade através de discriminação algorítmica.',
    autor: 'Frank Pasquale',
    categoria: 'Ciências Humanas',
    idioma: 'Português',
    nivel: 'Pesquisa / Graduação',
    preco: 75.00,
    tags: ['Tecnologia', 'Ética', 'Sociedade'],
    isPremium: false,
    discount: null
  },
  {
    id: 'b5',
    img: 'assets/img/books/sociedade_cansaco.jpg',
    titulo: 'Sociedade do Cansaço',
    descricao: 'Uma análise filosófica sobre as doenças neuronais do século XXI, como depressão e burnout, causadas pela cobrança excessiva por desempenho.',
    autor: 'Byung-Chul Han',
    categoria: 'Filosofia',
    idioma: 'Português',
    nivel: 'Ensino Superior',
    preco: 45.00,
    tags: ['Filosofia', 'Sociologia', 'Humanas'],
    isPremium: false,
    discount: null
  },
  {
    id: 'b6',
    img: 'assets/img/books/clean_code.jpg',
    titulo: 'Código Limpo (Clean Code)',
    descricao: 'Habilidades práticas de software ágil. Aprenda a ler, escrever e refatorar códigos para torná-los robustos e manuteníveis no longo prazo.',
    autor: 'Robert C. Martin',
    categoria: 'Livro Técnico',
    idioma: 'Português',
    nivel: 'Intermediário',
    preco: 110.00,
    tags: ['Computação', 'Programação', 'Engenharia'],
    isPremium: true,
    discount: 20
  }
];