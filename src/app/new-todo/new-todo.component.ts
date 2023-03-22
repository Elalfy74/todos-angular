import { Component } from '@angular/core';
import { TodosService } from '../todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
})
export class NewTodoComponent {
  newTodo = '';

  constructor(private readonly todosService: TodosService) {}

  onCreateTodo() {
    this.todosService.create({
      title: this.newTodo,
    });
  }
}
