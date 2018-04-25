import { TestBed, inject } from '@angular/core/testing';

import { ObjectbrandService } from './objectbrand.service';

describe('ObjectbrandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectbrandService]
    });
  });

  it('should be created', inject([ObjectbrandService], (service: ObjectbrandService) => {
    expect(service).toBeTruthy();
  }));
});
