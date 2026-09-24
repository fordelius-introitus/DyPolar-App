import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Group } from '../../models/group';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';
import { GroupService } from '../../services/group-service';
import { User } from '../../models/user';

@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [HeaderComponent, Footer, CommonModule, FormsModule, RouterLink],
  templateUrl: './explorar.html',
  styleUrl: './explorar.css',
})
export class Explorar implements OnInit {
  
  termoBusca: string = '';
  modalidadeSelecionada: string = 'Todas';

  loggedUser: User | null = null;
  
  constructor(private auth:AuthService, private router:Router, private groupService:GroupService) {}

  categorias = {
    vestibulares: false,
    faculdade: false,
    idiomas: false,
    programacao: false
  };

  site_grupos: Group[] = [];
  gruposFiltrados: Group[] = [];

  pertenceAoGrupo(tituloGrupo: string): boolean {
    return this.loggedUser?.groups?.includes(tituloGrupo) ?? false;
  }

  checarGrupos(): void {
    this.site_grupos.forEach(group => {
      group.userPertence = this.pertenceAoGrupo(group.titulo);
    });
  }

  ngOnInit(): void {
    this.loggedUser = this.auth.getUser();
    this.site_grupos = this.groupService.getGroups();
    
    this.checarGrupos(); 
    this.verificarCompatibilidade();

    this.gruposFiltrados = [...this.site_grupos];
  }

  verificarCompatibilidade(): void {
    const user = this.auth.getUser();

    if(user?.comp_rate) {
      this.site_grupos.forEach(grupo => {
        grupo.compatibilidade *= Math.round(user?.comp_rate)
      });
    }
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