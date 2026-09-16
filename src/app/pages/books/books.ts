import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { HeaderComponent } from '../../components/header/header';

@Component({
  selector: 'app-books',
  imports: [HeaderComponent, Footer],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  
}
