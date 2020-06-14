import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByHoraQtyComponent } from './product-by-hora-qty.component';

describe('ProductByHoraQtyComponent', () => {
  let component: ProductByHoraQtyComponent;
  let fixture: ComponentFixture<ProductByHoraQtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductByHoraQtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByHoraQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
