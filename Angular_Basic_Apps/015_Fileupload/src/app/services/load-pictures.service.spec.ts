import { TestBed } from '@angular/core/testing';

import { LoadPicturesService } from './load-pictures.service';

describe('LoadPicturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadPicturesService = TestBed.get(LoadPicturesService);
    expect(service).toBeTruthy();
  });
});
