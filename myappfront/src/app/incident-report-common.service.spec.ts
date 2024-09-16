import { TestBed } from '@angular/core/testing';

import { IncidentReportCommonService } from './incident-report-common.service';

describe('IncidentReportCommonService', () => {
  let service: IncidentReportCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentReportCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
