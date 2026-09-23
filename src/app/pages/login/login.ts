import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  constructor(private authService:AuthService, private router:Router) {}

  email = '';
  password = '';
  invalidLogin: boolean = false;

  login(event: Event): void {
    const success = this.authService.login(
      this.email,
      this.password
    )

    if (success) {
      this.router.navigate(['/explorar'])
      console.log('Login realizado');
    } else {
      this.invalidLogin = true;
      console.log('Email ou senha inválidos');
      const counter = setInterval(() => {
        this.invalidLogin = true;
      }, 1000);

      setTimeout(() => {
        clearInterval(counter);
        this.invalidLogin = false;
      }, 5000)
    }
  }
}