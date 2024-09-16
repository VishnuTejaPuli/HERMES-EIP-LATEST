import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefCampSearchComponent } from './relief-camp-search.component';

describe('ReliefCampSearchComponent', () => {
  let component: ReliefCampSearchComponent;
  let fixture: ComponentFixture<ReliefCampSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliefCampSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReliefCampSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
