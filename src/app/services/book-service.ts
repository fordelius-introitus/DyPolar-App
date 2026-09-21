import { Injectable, OnInit } from '@angular/core';
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

  getBookByID(id: string): Book | undefined {
    const livroEncontrado = this.websiteBooks.find(book => book.id === id) ||
                            this.websitePremiumBooks.find(book => book.id === id);

    if(livroEncontrado) {
      return livroEncontrado;
    } else {
      return undefined;
    }
  }
}
