import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgDeliveryTimeComponent } from './avg-delivery-time.component';

describe('AvgDeliveryTimeComponent', () => {
  let component: AvgDeliveryTimeComponent;
  let fixture: ComponentFixture<AvgDeliveryTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgDeliveryTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgDeliveryTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
