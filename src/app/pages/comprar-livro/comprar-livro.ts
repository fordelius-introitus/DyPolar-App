import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-comprar-livro',
  standalone: true,
  imports: [HeaderComponent, Footer, RouterLink, CommonModule],
  templateUrl: './comprar-livro.html',
  styleUrl: './comprar-livro.css',
})
export class ComprarLivro implements OnInit {
  
  pageBook: Book | undefined = undefined;
  bookId: string | null = null;

  constructor(
    private bookService: BookService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');

    if(this.bookId) {
      this.pageBook = this.bookService.getBookByID(this.bookId);
    }
  }
  
  getPrecoComDesconto(): number {
    if (!this.pageBook || this.pageBook.preco === undefined) return 0;
    const preco = this.pageBook.preco;
    const desconto = this.pageBook.discount || 0;
    
    return preco * (1 - desconto / 100);
  }
}