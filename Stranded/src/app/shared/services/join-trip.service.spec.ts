import { TestBed } from '@angular/core/testing';

import { JoinTripService } from './join-trip.service';

describe('JoinTripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoinTripService = TestBed.get(JoinTripService);
    expect(service).toBeTruthy();
  });
});
