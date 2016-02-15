import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'todo-list-item',
  template: `
    <li>
      <p>_id: {{todo._id}}</p>
      <p [class.completed]="todo.completed">
      {{todo.uId}}</p>
      tileImageId: {{todo.tileImageId}}
      <p><button (click)="complete.emit(todo)"> Done </button>
      <button (click)="destroy.emit(todo)"> Delete </button></p>
    </li>
  `
})
class TodoListItem {
  @Input() todo;
  @Output() complete = new EventEmitter();
  @Output('delete') destroy = new EventEmitter();
}

@Component({
  selector: 'todo-list',
  template: `
    <div>
      <todo-list-item
        *ngFor="#todo of todos"
        [todo]="todo"
        (complete)="completeTodo.emit($event)"
        (delete)="deleteTodo.emit($event)"
      ></todo-list-item>
    </div>
  `,
  directives: [TodoListItem]
})

export class TodoList {
  @Input() todos;
  @Output('complete') completeTodo = new EventEmitter();
  @Output('delete') deleteTodo = new EventEmitter();
}
