import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReportCommonComponent } from './incident-report-common.component';

describe('IncidentReportCommonComponent', () => {
  let component: IncidentReportCommonComponent;
  let fixture: ComponentFixture<IncidentReportCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentReportCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentReportCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
