import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { mockBooks } from '../mock-data/placeholder-books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  websiteBooks: Book[] = mockBooks;

  getBookList(): Book[] {
    return mockBooks;
  }
}
