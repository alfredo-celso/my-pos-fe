import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldownMenuComponent } from './drilldown-menu.component';

describe('DrilldownMenuComponent', () => {
  let component: DrilldownMenuComponent;
  let fixture: ComponentFixture<DrilldownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrilldownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
