import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RndNumberComponent } from './rnd-number.component';

describe('RndNumberComponent', () => {
  let component: RndNumberComponent;
  let fixture: ComponentFixture<RndNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RndNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RndNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
