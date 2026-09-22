import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from "../../components/footer/footer";
import { HeaderComponent } from "../../components/header/header";
import { CarouselService } from '../../services/carousel';
import { intervalProvider } from 'rxjs/internal/scheduler/intervalProvider';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, Footer, HeaderComponent, RouterLink],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class Landing implements OnInit {
  constructor(private router: Router, private carousel: CarouselService) {}

  image_srcs: string[] = [];
  curr_index: number = 0;

  private intervaloId: any;

  ngOnInit(): void {
    this.image_srcs = this.carousel.getImages();

    this.intervaloId = setInterval(() => {
      this.nextImage();
    }, 3000)
  }

  nextImage(): void {
    if (this.curr_index < this.image_srcs.length - 1) {
      this.curr_index++;
    } else {
      this.curr_index = 0;
    }
  }

  setImage(index: number): void {
    this.curr_index = index;
    if (this.intervaloId) {
        clearInterval(this.intervaloId);
        this.intervaloId = setInterval(() => {
            this.nextImage();
        }, 3000);
    }
}

  ngOnDestroy(): void {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
    }
  }

  irParaExplorar(): void {
    this.router.navigate(['/explorar']);
  }

  irParaPremium(): void {
    this.router.navigate(['/premium']);
  }
}