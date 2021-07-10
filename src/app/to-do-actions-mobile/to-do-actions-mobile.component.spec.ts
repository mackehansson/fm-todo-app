import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoActionsMobileComponent } from './to-do-actions-mobile.component';

describe('ToDoActionsMobileComponent', () => {
  let component: ToDoActionsMobileComponent;
  let fixture: ComponentFixture<ToDoActionsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoActionsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoActionsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
