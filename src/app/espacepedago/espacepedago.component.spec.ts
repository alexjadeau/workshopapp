import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacepedagoComponent } from './espacepedago.component';

describe('EspacepedagoComponent', () => {
  let component: EspacepedagoComponent;
  let fixture: ComponentFixture<EspacepedagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacepedagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacepedagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
