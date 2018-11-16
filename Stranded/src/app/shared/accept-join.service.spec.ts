import { TestBed } from '@angular/core/testing';

import { AcceptJoinService } from './accept-join.service';

describe('AcceptJoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcceptJoinService = TestBed.get(AcceptJoinService);
    expect(service).toBeTruthy();
  });
});
