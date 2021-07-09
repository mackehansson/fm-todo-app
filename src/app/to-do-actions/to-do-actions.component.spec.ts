import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoActionsComponent } from './to-do-actions.component';

describe('ToDoActionsComponent', () => {
  let component: ToDoActionsComponent;
  let fixture: ComponentFixture<ToDoActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
