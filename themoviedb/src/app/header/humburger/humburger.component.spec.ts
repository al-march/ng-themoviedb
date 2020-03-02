import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumburgerComponent } from './humburger.component';

describe('HumburgerComponent', () => {
  let component: HumburgerComponent;
  let fixture: ComponentFixture<HumburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
