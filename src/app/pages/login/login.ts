import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  constructor(private authService:AuthService, private router:Router) {}

  email = '';
  password = '';

  login(event: Event): void {
    const success = this.authService.login(
      this.email,
      this.password
    )

    if (success) {
      this.router.navigate(['/explorar'])
      console.log('Login realizado');
    } else {
      console.log('Email ou senha inválidos');
    }
  }
}