import { Component, OnInit } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { HeaderComponent } from '../../components/header/header';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { User } from '../../models/user';

@Component({
  selector: 'app-books',
  imports: [HeaderComponent, Footer, CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books implements OnInit {
  bookCatalog: Book[] = [];
  premiumBookCatalog: Book[] = [];
  
  localUser: User | null = null;

  constructor(private bookService: BookService, private auth: AuthService) {}

  ngOnInit(): void {
    this.bookCatalog = this.bookService.getBookList();
    this.premiumBookCatalog = this.bookService.getPremiumBookList();
    
    this.localUser = this.auth.getUser();
  }
}
