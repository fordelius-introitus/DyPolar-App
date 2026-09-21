import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarLivro } from './comprar-livro';

describe('ComprarLivro', () => {
  let component: ComprarLivro;
  let fixture: ComponentFixture<ComprarLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprarLivro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarLivro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
