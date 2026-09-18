import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-membership-page',
  imports: [HeaderComponent, Footer, CommonModule],
  templateUrl: './membership-page.html',
  styleUrl: './membership-page.css',
})

export class MembershipPage implements OnInit{

  bookList: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookList = this.bookService.getBookList();
  }
}
