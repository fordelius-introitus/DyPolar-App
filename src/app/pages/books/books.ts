import { Component, OnInit } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { HeaderComponent } from '../../components/header/header';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { User } from '../../models/user';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  imports: [HeaderComponent, Footer, CommonModule, RouterLink, FormsModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books implements OnInit {
  bookCatalog: Book[] = [];
  premiumBookCatalog: Book[] = [];
  filteredBookCatalog: Book[] = [];
  filteredPremiumBookCatalog: Book[] = [];
  
  localUser: User | null = null;
  filterSearch: string = '';

  categorias = {
    didatico: false,
    tecnico: false,
    artigo: false
  }

  area = {
    exatas: false,
    humanas: false,
    tecnologia: false,
    linguagens: false
  }

  nivel = {
    graduacao: false,
    mestrado: false,
    vestibular: false,
    posgraduacao: false
  }

  idioma = {
    portugues: false,
    ingles: false
  }

  constructor(private bookService: BookService, private auth: AuthService) {}

  ngOnInit(): void {
    this.bookCatalog = this.bookService.getBookList();
    this.premiumBookCatalog = this.bookService.getPremiumBookList();
    this.filteredBookCatalog = [...this.bookCatalog];
    this.filteredPremiumBookCatalog = [...this.premiumBookCatalog];
    
    this.localUser = this.auth.getUser();
  }

  aplicarFiltros(): void {
    const termo = (this.filterSearch || '').toLowerCase();

    const executarFiltro = (catalogo: Book[]) => {
      return catalogo.filter(book => {
        
        const matchBusca = termo === '' || 
          book.titulo.toLowerCase().includes(termo) || 
          (book.autor && book.autor.toLowerCase().includes(termo)) ||
          (book.tags && book.tags.some(tag => tag.toLowerCase().includes(termo)));

        let matchCategoria = true;
        const categoriasAtivas: string[] = [];
        if (this.categorias.didatico) categoriasAtivas.push('didático', 'didatico', 'apostila');
        if (this.categorias.tecnico) categoriasAtivas.push('técnico', 'tecnico');
        if (this.categorias.artigo) categoriasAtivas.push('artigo');

        if (categoriasAtivas.length > 0) {
          const bookCat = book.categoria ? book.categoria.toLowerCase() : '';
          matchCategoria = categoriasAtivas.some(cat => bookCat.includes(cat));
        }

        let matchArea = true;
        const areasAtivas: string[] = [];
        if (this.area.exatas) areasAtivas.push('física', 'matemática', 'cálculo', 'mecânica', 'termodinâmica', 'álgebra', 'geometria', 'exatas');
        if (this.area.humanas) areasAtivas.push('humanas', 'filosofia', 'sociologia', 'sociedade', 'ética');
        if (this.area.tecnologia) areasAtivas.push('tecnologia', 'computação', 'programação', 'inteligência artificial');
        if (this.area.linguagens) areasAtivas.push('linguagem', 'idioma');

        if (areasAtivas.length > 0) {
          const bookTagsStr = book.tags ? book.tags.join(' ').toLowerCase() : '';
          const bookCat = book.categoria ? book.categoria.toLowerCase() : '';
          matchArea = areasAtivas.some(area => bookTagsStr.includes(area) || bookCat.includes(area));
        }

        let matchNivel = true;
        const niveisAtivos: string[] = [];
        if (this.nivel.graduacao) niveisAtivos.push('graduação', 'superior', 'graduacao');
        if (this.nivel.mestrado) niveisAtivos.push('mestrado', 'pesquisa');
        if (this.nivel.vestibular) niveisAtivos.push('vestibular', 'avançado', 'intermediário', 'militar'); 
        if (this.nivel.posgraduacao) niveisAtivos.push('pós', 'pesquisa');

        if (niveisAtivos.length > 0) {
          const bookNivel = book.nivel ? book.nivel.toLowerCase() : '';
          const bookTagsStr = book.tags ? book.tags.join(' ').toLowerCase() : '';
          matchNivel = niveisAtivos.some(n => bookNivel.includes(n) || bookTagsStr.includes(n));
        }
        let matchIdioma = true;
        const idiomasAtivos: string[] = [];
        if (this.idioma.portugues) idiomasAtivos.push('português', 'portugues');
        if (this.idioma.ingles) idiomasAtivos.push('inglês', 'ingles');

        if (idiomasAtivos.length > 0) {
          const bookIdioma = book.idioma ? book.idioma.toLowerCase() : '';
          matchIdioma = idiomasAtivos.some(i => bookIdioma.includes(i));
        }
        return matchBusca && matchCategoria && matchArea && matchNivel && matchIdioma;
      });
    };

    this.filteredBookCatalog = executarFiltro(this.bookCatalog);
    this.filteredPremiumBookCatalog = executarFiltro(this.premiumBookCatalog);
  }
}