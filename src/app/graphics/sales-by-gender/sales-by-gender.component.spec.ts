import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByGenderComponent } from './sales-by-gender.component';

describe('SalesByGenderComponent', () => {
  let component: SalesByGenderComponent;
  let fixture: ComponentFixture<SalesByGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesByGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
