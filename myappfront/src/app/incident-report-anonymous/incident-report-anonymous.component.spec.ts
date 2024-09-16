import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReportAnonymousComponent } from './incident-report-anonymous.component';

describe('IncidentReportAnonymousComponent', () => {
  let component: IncidentReportAnonymousComponent;
  let fixture: ComponentFixture<IncidentReportAnonymousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentReportAnonymousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentReportAnonymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
