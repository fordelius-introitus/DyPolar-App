import { Injectable } from '@angular/core';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {

  private mock_groups: Group[] = [
      { 
        id: '1',
        img: 'img/physics.png',
        titulo: 'Preparação ITA - Física',
        descricao: "Grupo focado em mecânica clássica, cinemática e termodinâmica para provas militares.",
        compatibilidade: 89,
        membros: 68,
        modalidade: 'Online',
        tags: ['Ciências Exatas', 'Física', 'Militar', 'Vestibulares'],
        userPertence: false,
        posts: [
          { autor: 'Marcos Braga', data: 'Ontem', conteudo: 'Alguém conseguiu resolver a questão 5 da última lista de dinâmica? Travei na decomposição das forças.' },
          { autor: 'Ana Lopes', data: 'Há 3 dias', conteudo: 'Subi o gabarito comentado da prova de 2023 na aba de materiais. Deem uma olhada!' }
        ],
        materiais: [
          { titulo: 'Lista Dinâmica Aprofundamento', tipo: 'PDF', autor: 'Marcos Braga' },
          { titulo: 'Resumo Cinemática Vetorial', tipo: 'PDF', autor: 'Ana Lopes' }
        ]
      },
      {
        id: '2',
        img: 'img/robotica.png',
        titulo: 'Preparação Robótica Competitiva',
        descricao: 'Estudos e treinos para competições como OBR. Aprendizado sobre uso de microcontroladores e circuitos eletrônicos.',
        compatibilidade: 61,
        membros: 83,
        modalidade: 'Híbrido',
        tags: ['Olimpíadas', 'Robótica'],
        userPertence: false,
        posts: [],
        materiais: []
      },
      {
        id: '3',
        img: 'img/filosofia.jpg',
        titulo: 'Estudo da filosofia clássica',
        descricao: 'Rodas de estudos sobre filosofia clássica situada na Grécia Antiga. Platonismo, metafísica etc. Encontros presenciais na UFBA.',
        compatibilidade: 40,
        membros: 45,
        modalidade: 'Presencial',
        tags: ['Ciências Humanas', 'Filosofia', 'Faculdade'],
        userPertence: false,
        posts: [],
        materiais: []
      },
      {
        id: '4',
        img: 'img/linalg.png',
        titulo: 'Álgebra Linear e Geometria Analítica',
        descricao: 'Resolução de problemas avançados de vetores e matrizes para alunos de Bacharelado Interdisciplinar e engenharias.',
        compatibilidade: 60,
        membros: 34,
        modalidade: 'Híbrido',
        tags: ['Matemática', 'Engenharia', 'Graduação'],
        userPertence: false,
        posts: [],
        materiais: []
      },
      {
        id: '5',
        img: 'img/aiethics.jpg',
        titulo: 'Ética e Viés Algorítmico em IA',
        descricao: 'Grupo de pesquisa focado na discriminação algorítmica, reconhecimento facial e impactos da Inteligência Artificial no Brasil.',
        compatibilidade: 36,
        membros: 18,
        modalidade: 'Online',
        tags: ['Tecnologia', 'Pesquisa Científica', 'IA'],
        userPertence: false,
        posts: [],
        materiais: []
      },
      {
        id: '6',
        img: 'img/cpp.jpg',
        titulo: 'Maratona de Programação',
        descricao: 'Treinamento de algoritmos, otimização de memória e estruturas de dados avançadas utilizando C, C++ e Java.',
        compatibilidade: 62,
        membros: 156,
        modalidade: 'Online',
        tags: ['Computação', 'Programação', 'Algoritmos'],
        userPertence: false,
        posts: [
          { autor: 'Carlos Eduardo', data: 'Hoje', conteudo: 'Galera, lembrando que hoje à noite tem treino de Two Pointers e Sliding Window no Codeforces.' }
        ],
        materiais: [
          { titulo: 'Guia de Alocação Dinâmica em C', tipo: 'PDF', autor: 'Monitoria' }
        ]
      },
      {
        id: '7',
        img: 'img/latin.jpg',
        titulo: 'Aulas de Latim',
        descricao: 'Estudo do Latim -- semântica, estrutura gramatical, vocabulário.',
        compatibilidade: 55,
        membros: 172,
        modalidade: 'Online',
        tags: ['Idiomas'],
        userPertence: false,
        posts: [],
        materiais: []
      }
    ];

    constructor() {}

    getGroups(): Group[] {
      return this.mock_groups;
    }

    getGroupById(id: string): Group | undefined {
      return this.mock_groups.find(group => group.id === id);
    }
}