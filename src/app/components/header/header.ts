import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth';
import { LogoutPopup } from '../logout-popup/logout-popup';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LogoutPopup],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  
  menuOpen: boolean = false;
  userLogged: boolean = false;
  isUserPremium: boolean = false;
  openPopup: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.userLogged = this.auth.isLogged();
    if (this.userLogged) {
      const user = this.auth.getUser();
      this.isUserPremium = user?.isMember ?? false; 
    }
  }

  mudarPopup(): void {
    this.openPopup = !this.openPopup;
  }

  // Ação de clique na logo
  irParaExplorar(): void {
    this.router.navigate(['/explorar']);
    this.menuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 768 && this.menuOpen) {
      this.menuOpen = false;
    }
  }
}