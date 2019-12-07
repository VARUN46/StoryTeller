import { TestBed } from '@angular/core/testing';

import { PersistanceStorageService } from './persistance-storage.service';

describe('PersistanceStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersistanceStorageService = TestBed.get(PersistanceStorageService);
    expect(service).toBeTruthy();
  });
});
