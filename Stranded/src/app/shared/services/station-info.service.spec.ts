import { TestBed } from '@angular/core/testing';

import { StationInfoService } from './station-info.service';

describe('StationInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StationInfoService = TestBed.get(StationInfoService);
    expect(service).toBeTruthy();
  });
});
