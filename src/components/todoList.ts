import {Component, Input, Output, EventEmitter} from 'angular2/core';

// id: number;
// playerName?: string;
// tiles?: any;
// matchedPairs?: number;
// turnsTaken?: number;
// dateCreated?: any;

@Component({
  selector: 'todo-list-item',
  template: `
    <li>
      <p><strong>Game Id:</strong> {{todo.id}}</p>
      <p [class.matchedd]="todo.matchedd">
      <strong>playerName:</strong> {{todo.playerName}}</p>
      <p><strong>matchedPairs:</strong> {{todo.matchedPairs}}</p>
      <p><strong>turnsTaken: </strong>{{todo.turnsTaken}}</p>
      <p><strong>dateCreated:</strong> {{todo.dateCreated}}</p>
      <p><button (click)="matched.emit(todo)"> Done </button>
      <button (click)="destroy.emit(todo)"> Delete </button></p>
    </li>
  `
})
class TodoListItem {
  @Input() todo;
  @Output() matched = new EventEmitter();
  @Output('delete') destroy = new EventEmitter();
}

@Component({
  selector: 'todo-list',
  template: `
    <div>
      <todo-list-item
        *ngFor="#todo of todos"
        [todo]="todo"
        (matched)="matchedTodo.emit($event)"
        (delete)="deleteTodo.emit($event)"
      ></todo-list-item>
    </div>
  `,
  directives: [TodoListItem]
})

export class TodoList {
  @Input() todos;
  @Output('matched') matchedTodo = new EventEmitter();
  @Output('delete') deleteTodo = new EventEmitter();
}
