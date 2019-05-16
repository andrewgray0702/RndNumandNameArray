import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameArrayComponent } from './name-array.component';

describe('NameArrayComponent', () => {
  let component: NameArrayComponent;
  let fixture: ComponentFixture<NameArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
