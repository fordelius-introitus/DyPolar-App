import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { PlaceholderUsers } from '../mock-data/placeholder-users';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUser: User | null = null;

  @Injectable({
  providedIn: 'root'
})

  adicionarGrupoAoUtilizador(tituloGrupo: string): void {
    const user = this.getUser();
    
    if (user) {
      if (!user.groups) {
        user.groups = [];
      }
      
      if (!user.groups.includes(tituloGrupo)) {
        user.groups.push(tituloGrupo);
        localStorage.setItem('userLogado', JSON.stringify(user));
      }
    }
  }

  removerGrupoDoUtilizador(tituloGrupo: string): void {
    const user = this.getUser(); 
    
    if (user && user.groups) {
      user.groups = user.groups.filter(titulo => titulo !== tituloGrupo);
      localStorage.setItem('userLogado', JSON.stringify(user)); 
    }
  }


  login(email: string, password: string): boolean {
    const user = PlaceholderUsers.find(
      user => {
        return user.email === email && user.password === password
      }
    );

    if (user) {
      this.loggedUser = user;

      localStorage.setItem(
        'userLogado',
        JSON.stringify(user)
      );
      return true;
    }
    
    console.log("Usuário não encontrado.");
    return false;
  }

  logout(): void {
    this.loggedUser = null;
    localStorage.removeItem('userLogado');
  }

  isLogged(): boolean {
    return localStorage.getItem('userLogado') !== null;
  }

  getUser(): User | null {
    const user = localStorage.getItem('userLogado');

    if (!user) {
      return null;
    }

    return JSON.parse(user);
  }
}
