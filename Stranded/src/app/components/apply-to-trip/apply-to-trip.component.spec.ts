import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToTripComponent } from './apply-to-trip.component';

describe('ApplyToTripComponent', () => {
  let component: ApplyToTripComponent;
  let fixture: ComponentFixture<ApplyToTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyToTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyToTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
