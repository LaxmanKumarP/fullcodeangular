import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';



@NgModule({
  declarations: [
    TodoListComponent,
    AddEditTodoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ TodoListComponent,
    AddEditTodoComponent]
})
export class TodoModule { }
