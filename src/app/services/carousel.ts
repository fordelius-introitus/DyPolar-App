import { Injectable, numberAttribute, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  Carousel_images: string[] = [
    'carousel-images/banner-1.png',
    'carousel-images/banner-2.png',
    'carousel-images/banner-3.png'
  ];

  getImages(): string[] {
    return this.Carousel_images;
  }
}
