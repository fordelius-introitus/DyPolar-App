import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header";
import { Footer } from "../../componentes/footer/footer";
import { Group } from '../../models/group';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [HeaderComponent, Footer, CommonModule, FormsModule],
  templateUrl: './explorar.html',
  styleUrl: './explorar.css',
})
export class Explorar implements OnInit {
  
  termoBusca: string = '';
  modalidadeSelecionada: string = 'Todas';

  loggedUser = false;
  
  constructor(private auth:AuthService, private router:Router) {}

  categorias = {
    vestibulares: false,
    faculdade: false,
    idiomas: false,
    programacao: false
  };
  site_grupos: Group[] = [
    { 
      id: '1',
      img: 'img/physics.png',
      titulo: 'Preparação Militares',
      descricao: "Grupo focado em mecânica clássica, cinemática e termodinâmica para provas militares.",
      compatibilidade: 98,
      membros: 43778,
      modalidade: 'Online',
      tags: ['Ciências Exatas', 'Física', 'Militar', 'Vestibulares'],
      userPertence: false
    },
    {
      id: '2',
      img: 'img/robotica.png',
      titulo: 'Preparação Robótica Competitiva',
      descricao: 'Estudos e treinos para competições como OBR. Aprendizado sobre uso de microcontroladores e circuitos eletrônicos.',
      compatibilidade: 67,
      membros: 1355,
      modalidade: 'Híbrido',
      tags: ['Olimpíadas', 'Robótica'],
      userPertence: false
    },
    {
      id: '3',
      img: 'img/filosofia.jpg',
      titulo: 'Estudo da filosofia clássica',
      descricao: 'Rodas de estudos sobre filosofia clássica situada na Grécia Antiga. Platonismo, metafísica etc. Encontros presenciais na UFBA.',
      compatibilidade: 30,
      membros: 1256,
      modalidade: 'Presencial',
      tags: ['Ciências Humanas', 'Filosofia', 'Faculdade'],
      userPertence: false
    },
    {
      id: '4',
      img: 'img/linalg.png',
      titulo: 'Álgebra Linear e Geometria Analítica',
      descricao: 'Resolução de problemas avançados de vetores e matrizes para alunos de Bacharelado Interdisciplinar e engenharias.',
      compatibilidade: 95,
      membros: 890,
      modalidade: 'Híbrido',
      tags: ['Matemática', 'Engenharia', 'Graduação'],
      userPertence: false
    },
    {
      id: '5',
      img: 'img/aiethics.jpg',
      titulo: 'Ética e Viés Algorítmico em IA',
      descricao: 'Grupo de pesquisa focado na discriminação algorítmica, reconhecimento facial e impactos da Inteligência Artificial no Brasil.',
      compatibilidade: 88,
      membros: 420,
      modalidade: 'Online',
      tags: ['Tecnologia', 'Pesquisa Científica', 'IA'],
      userPertence: false
    },
    {
      id: '6',
      img: 'img/cpp.jpg',
      titulo: 'Maratona de Programação',
      descricao: 'Treinamento de algoritmos, otimização de memória e estruturas de dados avançadas utilizando C, C++ e Java.',
      compatibilidade: 92,
      membros: 2150,
      modalidade: 'Online',
      tags: ['Computação', 'Programação', 'Algoritmos'],
      userPertence: false
    },
    {
      id: '7',
      img: 'img/latin.jpg',
      titulo: 'Aulas de Latim',
      descricao: 'Estudo do Latim -- semântica, estrutura gramatical, vocabulário.',
      compatibilidade: 55,
      membros: 560,
      modalidade: 'Online',
      tags: ['Idiomas'],
      userPertence: false
    }
  ];

  gruposFiltrados: Group[] = [];

  pertenceAoGrupo(tituloGrupo: string): boolean {
    const user = this.auth.getUser();
    return user?.groups?.includes(tituloGrupo) ?? false;
  }

  checarGrupos(): void {
    this.site_grupos.forEach(group => {
      group.userPertence = this.pertenceAoGrupo(group.titulo);
    });
  }

  ngOnInit(): void {
    this.loggedUser = this.auth.isLogged();
    this.gruposFiltrados = [...this.site_grupos];

    this.checarGrupos();
  }

  aplicarFiltros(): void {
    this.gruposFiltrados = this.site_grupos.filter(grupo => {
      
      const termo = this.termoBusca.toLowerCase();
      const bateComBusca = this.termoBusca === '' || 
                           grupo.titulo.toLowerCase().includes(termo) || 
                           grupo.tags.some(tag => tag.toLowerCase().includes(termo));

      const bateComModalidade = this.modalidadeSelecionada === 'Todas' || 
                                grupo.modalidade === this.modalidadeSelecionada;
      const palavrasChaveAtivas: string[] = [];
      
      if (this.categorias.vestibulares) palavrasChaveAtivas.push('vestibular');
      if (this.categorias.faculdade) palavrasChaveAtivas.push('graduação', 'pesquisa', 'faculdade');
      if (this.categorias.idiomas) palavrasChaveAtivas.push('idioma', 'inglês', 'espanhol');
      if (this.categorias.programacao) palavrasChaveAtivas.push('programação', 'robótica');

      let bateComCategoria = true;
      
      if (palavrasChaveAtivas.length > 0) {
        bateComCategoria = grupo.tags.some(tag => 
          palavrasChaveAtivas.some(palavra => tag.toLowerCase().includes(palavra))
        );
      }
      return bateComBusca && bateComModalidade && bateComCategoria;
    });
  }
}