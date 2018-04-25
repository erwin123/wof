import { TestBed, inject } from '@angular/core/testing';

import { ObjectmodelService } from './objectmodel.service';

describe('ObjectmodelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectmodelService]
    });
  });

  it('should be created', inject([ObjectmodelService], (service: ObjectmodelService) => {
    expect(service).toBeTruthy();
  }));
});
