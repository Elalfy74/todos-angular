import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodosService } from '../todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private readonly todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.todos;

    this.todosService.onChange.subscribe((newTodos) => {
      this.todos = newTodos;
    });
  }
}
