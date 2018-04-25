import { TestBed, inject } from '@angular/core/testing';

import { ObjectgroupService } from './objectgroup.service';

describe('ObjectgroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectgroupService]
    });
  });

  it('should be created', inject([ObjectgroupService], (service: ObjectgroupService) => {
    expect(service).toBeTruthy();
  }));
});
