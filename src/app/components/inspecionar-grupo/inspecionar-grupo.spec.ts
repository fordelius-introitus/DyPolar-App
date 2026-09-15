import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspecionarGrupo } from './inspecionar-grupo';

describe('InspecionarGrupo', () => {
  let component: InspecionarGrupo;
  let fixture: ComponentFixture<InspecionarGrupo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspecionarGrupo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspecionarGrupo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
