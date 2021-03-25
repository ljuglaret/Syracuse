import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MathjaxComponent } from './mathjax.component';

describe('MathjaxComponent', () => {
  let component: MathjaxComponent;
  let fixture: ComponentFixture<MathjaxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MathjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});