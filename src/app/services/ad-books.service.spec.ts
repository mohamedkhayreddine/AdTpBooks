import { TestBed, inject } from '@angular/core/testing';

import { AdBooksService } from './ad-books.service';

describe('AdBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdBooksService]
    });
  });

  it('should be created', inject([AdBooksService], (service: AdBooksService) => {
    expect(service).toBeTruthy();
  }));
});
