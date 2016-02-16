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
var store_1 = require('@ngrx/store');
var devtools_1 = require('@ngrx/devtools');
var TodoActions = require('./todos');
var newTodo_1 = require('./components/newTodo');
var todoList_1 = require('./components/todoList');
var App = (function () {
    function App(store) {
        this.store = store;
        this.todos = store.select('todos')
            .combineLatest(store.select('visibilityFilter'), function (todos, visibilityFilter) {
            return todos.filter(visibilityFilter);
        });
    }
    App.prototype.addTodo = function (newTodo) {
        this.store.dispatch({
            type: TodoActions.ADD_TODO,
            payload: newTodo
        });
        console.log('addTodo(newTodo): ');
    };
    App.prototype.matchedTodo = function (todo) {
        this.store.dispatch({
            type: TodoActions.MATCHED_TODO,
            payload: todo
        });
    };
    App.prototype.deleteTodo = function (todo) {
        this.store.dispatch({
            type: TodoActions.DELETE_TODO,
            payload: todo
        });
    };
    App.prototype.show = function (filter) {
        this.store.dispatch({
            type: TodoActions[filter]
        });
    };
    App = __decorate([
        core_1.Component({
            selector: 'todo-app',
            providers: [],
            template: "\n    <div>\n      <log-monitor></log-monitor>\n      <h2>Todos</h2>\n      <new-todo-input (create)=\"addTodo($event)\"></new-todo-input>\n\n      =========\n      <todo-list\n        [todos]=\"todos | async\"\n        (matched)=\"matchedTodo($event)\"\n        (delete)=\"deleteTodo($event)\"\n      ></todo-list>\n      =========\n      <div>\n        <button (click)=\"show('ALL')\">All</button>\n        <button (click)=\"show('PENDING')\">Pending</button>\n        <button (click)=\"show('MATCHED')\">Matched</button>\n      </div>\n    </div>\n  ",
            directives: [devtools_1.LogMonitor, newTodo_1.NewTodoInput, todoList_1.TodoList],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _a) || Object])
    ], App);
    return App;
    var _a;
}());
exports.App = App;
