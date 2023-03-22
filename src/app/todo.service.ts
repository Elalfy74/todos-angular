import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo, TodoStatus } from './todo.model';

@Injectable()
export class TodosService {
  private readonly _todos: Todo[] = [];

  onChange = new Subject<Todo[]>();

  get todos() {
    return [...this._todos];
  }

  create({ title, status }: { title: string; status?: TodoStatus }) {
    this._todos.push(new Todo(title, status));

    this.onChange.next(this.todos);
  }

  remove(index: number) {
    this._todos.splice(index, 1);

    this.onChange.next(this.todos);
  }
}
