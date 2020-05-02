import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitirVotoComponent } from './emitir-voto.component';

describe('EmitirVotoComponent', () => {
  let component: EmitirVotoComponent;
  let fixture: ComponentFixture<EmitirVotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitirVotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitirVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
