import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { mockBooks, mockPremiumBooks } from '../mock-data/placeholder-books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  websiteBooks: Book[] = mockBooks;
  websitePremiumBooks: Book[] = mockPremiumBooks;

  getBookList(): Book[] {
    return mockBooks;
  }

  getPremiumBookList(): Book[] {
    return mockPremiumBooks;
  }
}
