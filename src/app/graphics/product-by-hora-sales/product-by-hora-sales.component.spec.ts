import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByHoraSalesComponent } from './product-by-hora-sales.component';

describe('ProductByHoraSalesComponent', () => {
  let component: ProductByHoraSalesComponent;
  let fixture: ComponentFixture<ProductByHoraSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductByHoraSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByHoraSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
