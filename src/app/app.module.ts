import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoItemComponent } from './todos-list/todo-item/todo-item.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { FormsModule } from '@angular/forms';
import { TodosService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodoItemComponent,
    NewTodoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
