import { TestBed } from '@angular/core/testing';

import { Carousel } from './carousel';

describe('Carousel', () => {
  let service: Carousel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Carousel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
