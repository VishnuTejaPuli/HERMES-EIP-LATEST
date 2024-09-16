import { TestBed } from '@angular/core/testing';

import { ReliefCampService } from './relief-camp.service';

describe('ReliefCampService', () => {
  let service: ReliefCampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReliefCampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
