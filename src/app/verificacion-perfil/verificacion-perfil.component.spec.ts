import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionPerfilComponent } from './verificacion-perfil.component';

describe('VerificacionPerfilComponent', () => {
  let component: VerificacionPerfilComponent;
  let fixture: ComponentFixture<VerificacionPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificacionPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
