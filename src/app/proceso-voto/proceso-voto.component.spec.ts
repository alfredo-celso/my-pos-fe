import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoVotoComponent } from './proceso-voto.component';

describe('ProcesoVotoComponent', () => {
  let component: ProcesoVotoComponent;
  let fixture: ComponentFixture<ProcesoVotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoVotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
