import { TestBed } from '@angular/core/testing';

import { DisruptionsService } from './disruptions.service';

describe('DisruptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisruptionsService = TestBed.get(DisruptionsService);
    expect(service).toBeTruthy();
  });
});
