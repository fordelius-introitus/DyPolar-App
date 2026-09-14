import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-popup',
  imports: [],
  templateUrl: './logout-popup.html',
  styleUrl: './logout-popup.css',
})
export class LogoutPopup {
  constructor(private auth:AuthService, private router:Router) {}

  deslogar(): void {
    this.router.navigate(['/home']);
    this.auth.logout();
  }
}
