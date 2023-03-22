export type TodoStatus = 'pending' | 'completed';

export class Todo {
  constructor(public title: string, public status: TodoStatus = 'pending') {}
}
