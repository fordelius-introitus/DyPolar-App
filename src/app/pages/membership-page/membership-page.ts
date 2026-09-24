import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';
import { AuthService } from '../../services/auth';
import { User } from '../../models/user';

@Component({
  selector: 'app-membership-page',
  imports: [HeaderComponent, Footer, CommonModule],
  templateUrl: './membership-page.html',
  styleUrl: './membership-page.css',
})

export class MembershipPage implements OnInit{

  bookList: Book[] = [];
  localUser: User | null = null;

  constructor(private bookService: BookService, private auth: AuthService) {}

  ngOnInit(): void {
    this.localUser = this.auth.getUser();
    this.bookList = this.bookService.getBookList();
  }
}
