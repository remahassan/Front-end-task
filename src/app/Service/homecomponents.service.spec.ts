import { TestBed } from '@angular/core/testing';

import { HomecomponentsService } from './homecomponents.service';

describe('HomecomponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomecomponentsService = TestBed.get(HomecomponentsService);
    expect(service).toBeTruthy();
  });
});
