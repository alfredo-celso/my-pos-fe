import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTimeRegressionComponent } from './delivery-time-regression.component';

describe('DeliveryTimeRegressionComponent', () => {
  let component: DeliveryTimeRegressionComponent;
  let fixture: ComponentFixture<DeliveryTimeRegressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryTimeRegressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTimeRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
