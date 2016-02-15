"use strict";
exports.ADD_TODO = 'ADD_TODO';
exports.UPDATE_TODO = 'UPDATE_TODO';
exports.DELETE_TODO = 'DELETE_TODO';
exports.COMPLETE_TODO = 'COMPLETE_TODO';
exports.todos = function (state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    console.log('ACTION:', type, payload);
    switch (type) {
        case exports.ADD_TODO:
            return state.concat([Object.assign({}, payload, { id: state.length + 1 })]);
        case exports.UPDATE_TODO:
            return state.map(function (todo) {
                return todo.id !== payload.id ?
                    todo :
                    Object.assign({}, todo, payload);
            });
        case exports.COMPLETE_TODO:
            return state.map(function (todo) {
                return todo.id !== payload.id ?
                    todo :
                    Object.assign({}, todo, { completed: true });
            });
        case exports.DELETE_TODO:
            return state.filter(function (todo) { return todo.id !== payload.id; });
        default:
            return state;
    }
};
exports.ALL = 'ALL';
exports.COMPLETE = 'COMPLETE';
exports.PENDING = 'PENDING';
exports.MATCHED = 'MATCHED';
exports.visibilityFilter = function (state, _a) {
    if (state === void 0) { state = function (todo) { return true; }; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case exports.ALL:
            return function (todo) { return true; };
        case exports.COMPLETE:
            return function (todo) { return todo.completed; };
        case exports.PENDING:
            return function (todo) { return !todo.completed; };
        case exports.MATCHED:
            return function (todo) { return !todo.isMatched; };
        default:
            return state;
    }
};
