import { TestBed } from '@angular/core/testing';

import { SHeroesService } from './s-heroes.service';

describe('SHeroesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SHeroesService = TestBed.get(SHeroesService);
    expect(service).toBeTruthy();
  });
});
