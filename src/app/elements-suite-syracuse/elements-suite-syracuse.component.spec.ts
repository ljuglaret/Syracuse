import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsSuiteSyracuseComponent } from './elements-suite-syracuse.component';

describe('ElementsSuiteSyracuseComponent', () => {
  let component: ElementsSuiteSyracuseComponent;
  let fixture: ComponentFixture<ElementsSuiteSyracuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsSuiteSyracuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsSuiteSyracuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
