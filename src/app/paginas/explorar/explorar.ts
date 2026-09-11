import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header";
import { Footer } from "../../componentes/footer/footer";
import { Group } from '../../models/group';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explorar',
  imports: [HeaderComponent, Footer, CommonModule],
  templateUrl: './explorar.html',
  styleUrl: './explorar.css',
})
export class Explorar {
  grupos: Group[] = [
    { 
      id: '1',
      img: 'img/physics.png',
      titulo: 'Preparação Militares',
      descricao: "Grupo focado em mecânica clássica, cinemática e termodinâmica para provas militares.",
      compatibilidade: 98,
      membros: 43778,
      modalidade: 'Online',
      tags: ['Ciências Exatas', 'Física', 'Militar']
    },
    {
      id: '2',
      img: 'img/robotica.png',
      titulo: 'Preparação Robótica Competitiva',
      descricao: 'Estudos e treinos para competições como OBR. Aprendizado sobre uso de microcontroladores e circuitos eletrônicos',
      compatibilidade: 67,
      membros: 1355,
      modalidade: 'Híbrido',
      tags: ['Olimpíadas', 'Robótica']
    },
    {
      id: '3',
      img: 'img/physics.png',
      titulo: 'Estudo da filosofia clássica',
      descricao: 'Rodas de estudos sobre filosofia clássica situada na grécia antiga. Platonismo, metafísica etc. Encontros presenciais na UFBA; acesse o grupo para mais informações.',
      compatibilidade: 30,
      membros: 1256,
      modalidade: 'Presencial',
      tags: ['Ciências Humanas', 'Filosofia', 'Vestibulares']
    },
  ];
}
