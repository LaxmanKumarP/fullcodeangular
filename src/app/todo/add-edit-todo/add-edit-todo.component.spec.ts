import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTodoComponent } from './add-edit-todo.component';

describe('AddEditTodoComponent', () => {
  let component: AddEditTodoComponent;
  let fixture: ComponentFixture<AddEditTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
