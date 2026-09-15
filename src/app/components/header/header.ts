import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { LogoutPopup } from '../logout-popup/logout-popup';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, LogoutPopup, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

  userLogged = false;
  isUserPremium = false;
  openPopup = false;

  isPremium(): void {
    let user = this.auth.getUser();

    if(user?.isMember) {
      this.isUserPremium = true;
    }
    else this.isUserPremium = false;
  }
  
  constructor(private router: Router, private auth:AuthService) {
    this.userLogged = this.auth.isLogged();
    this.isPremium();
  }

  irParaExplorar(): void {
    if(this.userLogged) {
      this.router.navigate(['/explorar']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  mudarPopup(): void {
    console.log("mudou popup")
    this.openPopup = !this.openPopup;
  }

  irParaLogin(): void {
    this.router.navigate(['/login']);
  }
}