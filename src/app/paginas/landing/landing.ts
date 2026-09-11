import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from "../../componentes/footer/footer";
import { HeaderComponent } from "../../componentes/header/header";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, Footer, HeaderComponent],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class Landing {
  
  constructor(private router: Router) {}

  irParaExplorar(): void {
    this.router.navigate(['/explorar']);
  }

  irParaPremium(): void {
    this.router.navigate(['/premium']);
  }
}