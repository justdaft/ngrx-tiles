"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var TodoListItem = (function () {
    function TodoListItem() {
        this.matched = new core_1.EventEmitter();
        this.destroy = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoListItem.prototype, "todo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoListItem.prototype, "matched", void 0);
    __decorate([
        core_1.Output('delete'), 
        __metadata('design:type', Object)
    ], TodoListItem.prototype, "destroy", void 0);
    TodoListItem = __decorate([
        core_1.Component({
            selector: 'todo-list-item',
            template: "\n    <li>\n      <p><strong>Game Id:</strong> {{todo.id}}</p>\n      <p [class.matchedd]=\"todo.matchedd\">\n      <strong>playerName:</strong> {{todo.playerName}}</p>\n      <p><strong>matchedPairs:</strong> {{todo.matchedPairs}}</p>\n      <p><strong>turnsTaken: </strong>{{todo.turnsTaken}}</p>\n      <p><strong>dateCreated:</strong> {{todo.dateCreated}}</p>\n      <p><button (click)=\"matched.emit(todo)\"> Done </button>\n      <button (click)=\"destroy.emit(todo)\"> Delete </button></p>\n    </li>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListItem);
    return TodoListItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.matchedTodo = new core_1.EventEmitter();
        this.deleteTodo = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "todos", void 0);
    __decorate([
        core_1.Output('matched'), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "matchedTodo", void 0);
    __decorate([
        core_1.Output('delete'), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "deleteTodo", void 0);
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n    <div>\n      <todo-list-item\n        *ngFor=\"#todo of todos\"\n        [todo]=\"todo\"\n        (matched)=\"matchedTodo.emit($event)\"\n        (delete)=\"deleteTodo.emit($event)\"\n      ></todo-list-item>\n    </div>\n  ",
            directives: [TodoListItem]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
