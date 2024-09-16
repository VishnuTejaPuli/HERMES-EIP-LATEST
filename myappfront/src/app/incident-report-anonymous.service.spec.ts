import { TestBed } from '@angular/core/testing';

import { IncidentReportAnonymousService } from './incident-report-anonymous.service';

describe('IncidentReportAnonymousService', () => {
  let service: IncidentReportAnonymousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentReportAnonymousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
