import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTripComponent } from './join-trip.component';

describe('JoinTripComponent', () => {
  let component: JoinTripComponent;
  let fixture: ComponentFixture<JoinTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
