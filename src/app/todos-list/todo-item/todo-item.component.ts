import { Component, Input } from '@angular/core';
import { TodosService } from 'src/app/todo.service';
import { Todo } from '../../../app/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined;
  @Input() index: number | undefined;

  constructor(private todosService: TodosService) {}

  onRemove() {
    this.todosService.remove(this.index!);
  }
}
