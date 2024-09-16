import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefCampManagerComponent } from './relief-camp-manager.component';

describe('ReliefCampManagerComponent', () => {
  let component: ReliefCampManagerComponent;
  let fixture: ComponentFixture<ReliefCampManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliefCampManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReliefCampManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
