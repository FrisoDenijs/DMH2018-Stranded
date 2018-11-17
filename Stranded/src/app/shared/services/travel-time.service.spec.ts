import { TestBed } from '@angular/core/testing';

import { TravelTimeService } from './travel-time.service';

describe('TravelTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelTimeService = TestBed.get(TravelTimeService);
    expect(service).toBeTruthy();
  });
});
