import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutPopup } from './logout-popup';

describe('LogoutPopup', () => {
  let component: LogoutPopup;
  let fixture: ComponentFixture<LogoutPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
