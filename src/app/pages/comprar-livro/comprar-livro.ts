import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-comprar-livro',
  imports: [HeaderComponent, Footer, RouterLink],
  templateUrl: './comprar-livro.html',
  styleUrl: './comprar-livro.css',
})
export class ComprarLivro implements OnInit {
  constructor(private bookService:BookService, private route:ActivatedRoute) {}

  pageBook: Book | undefined = undefined;
  bookId: string | null = null;

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');

    if(this.bookId) {
      this.pageBook = this.bookService.getBookByID(this.bookId);
    }
  }
}
