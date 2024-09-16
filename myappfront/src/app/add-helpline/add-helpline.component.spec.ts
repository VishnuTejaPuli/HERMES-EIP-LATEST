import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelplineComponent } from './add-helpline.component';

describe('AddHelplineComponent', () => {
  let component: AddHelplineComponent;
  let fixture: ComponentFixture<AddHelplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHelplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
