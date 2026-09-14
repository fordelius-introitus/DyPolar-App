import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { PlaceholderUsers } from '../mock-data/placeholder-users';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUser: User | null = null;

  login(email: string, password: string): boolean {
    const user = PlaceholderUsers.find(
      user => {
        return user.email === email && user.password === password
      }
    );

    if (user) {
      this.loggedUser = user;

      localStorage.setItem(
        'user',
        JSON.stringify(user)
      );
      return true;
    }
    
    console.log("Usuário não encontrado.");
    return false;
  }

  logout(): void {
    this.loggedUser = null;
    localStorage.removeItem('user');
  }

  isLogged(): boolean {
    return localStorage.getItem('user') !== null;
  }

  getUser(): User | null {
    const user = localStorage.getItem('user');

    if (!user) {
      return null;
    }

    return JSON.parse(user);
  }
}
