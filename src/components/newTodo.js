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
var NewTodoInput = (function () {
    function NewTodoInput() {
        this.create = new core_1.EventEmitter();
    }
    NewTodoInput.prototype.saveTodo = function (obj) {
        this.create.emit(obj);
    };
    ;
    NewTodoInput.prototype.addFromList = function () {
        var _this = this;
        var tileData = [
            {
                _id: 1,
                tileImageId: 1,
                x: 0,
                y: 0,
                uId: 'MuSo4kl8M0ORZbZQaRKFGA',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 2,
                tileImageId: 2,
                x: 0,
                y: 0,
                uId: '6o0fb7U9ekq5PXbHeny5NQ',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 3,
                tileImageId: 3,
                x: 0,
                y: 0,
                uId: 'VGxzaNG5qUaMqv7cPmK_Sg',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 4,
                tileImageId: 4,
                x: 0,
                y: 0,
                uId: 'agpMhuZf4UWdaIS-EgHvsQ',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 5,
                tileImageId: 5,
                x: 0,
                y: 0,
                uId: 'pecw2bbEuUao896Rbwp1Hg',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 6,
                tileImageId: 6,
                x: 0,
                y: 0,
                uId: 'gbz2M5cB8kOhLvFtOTx3Gw',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 7,
                tileImageId: 7,
                x: 0,
                y: 0,
                uId: 'keTYkyxXf0yGmZV3MKryXg',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 8,
                tileImageId: 8,
                x: 0,
                y: 0,
                uId: 'cJFn61O5OEaEAYssvCcJlA',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 9,
                tileImageId: 9,
                x: 0,
                y: 0,
                uId: 'vBCnbvVROkuk5xkxbG9QYg',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 10,
                tileImageId: 10,
                x: 0,
                y: 0,
                uId: 'PdX-j9OU50CxLNWbv_ZhOA',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 11,
                tileImageId: 11,
                x: 0,
                y: 0,
                uId: 'fAmhHUMUbEeqaZ4DoxVPuQ',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 12,
                tileImageId: 12,
                x: 0,
                y: 0,
                uId: '95QNu7t1K0SEBkQ_ABE_sA',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 13,
                tileImageId: 13,
                x: 0,
                y: 0,
                uId: 'TnFOu2GZw0iDdt_4fuMV8g',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 14,
                tileImageId: 14,
                x: 0,
                y: 0,
                uId: 'JxRDSUzDT0uUIg8fCu7M2Q',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 15,
                tileImageId: 15,
                x: 0,
                y: 0,
                uId: '2ERIs8P0EkqMvUV0FjcC2g',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 16,
                tileImageId: 16,
                x: 0,
                y: 0,
                uId: '2b7hk8gZp0ankplcfMUZJg',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 17,
                tileImageId: 17,
                x: 0,
                y: 0,
                uId: 'PUgdU9BATk20LHvPwoD5yQ',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 18,
                tileImageId: 18,
                x: 0,
                y: 0,
                uId: '2xpIth7cvUyqEgUc7QE9Uw',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 19,
                tileImageId: 1,
                x: 0,
                y: 0,
                uId: 'MuSo4kl8M0ORZbZQaRKFGA',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 20,
                tileImageId: 2,
                x: 0,
                y: 0,
                uId: '6o0fb7U9ekq5PXbHeny5NQ',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 21,
                tileImageId: 3,
                x: 0,
                y: 0,
                uId: 'VGxzaNG5qUaMqv7cPmK_Sg',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 22,
                tileImageId: 4,
                x: 0,
                y: 0,
                uId: 'agpMhuZf4UWdaIS-EgHvsQ',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 23,
                tileImageId: 5,
                x: 0,
                y: 0,
                uId: 'pecw2bbEuUao896Rbwp1Hg',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 24,
                tileImageId: 6,
                x: 0,
                y: 0,
                uId: 'gbz2M5cB8kOhLvFtOTx3Gw',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 25,
                tileImageId: 7,
                x: 0,
                y: 0,
                uId: 'keTYkyxXf0yGmZV3MKryXg',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 26,
                tileImageId: 8,
                x: 0,
                y: 0,
                uId: 'cJFn61O5OEaEAYssvCcJlA',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 27,
                tileImageId: 9,
                x: 0,
                y: 0,
                uId: 'vBCnbvVROkuk5xkxbG9QYg',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 28,
                tileImageId: 10,
                x: 0,
                y: 0,
                uId: 'PdX-j9OU50CxLNWbv_ZhOA',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 29,
                tileImageId: 11,
                x: 0,
                y: 0,
                uId: 'fAmhHUMUbEeqaZ4DoxVPuQ',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 30,
                tileImageId: 12,
                x: 0,
                y: 0,
                uId: '95QNu7t1K0SEBkQ_ABE_sA',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 31,
                tileImageId: 13,
                x: 0,
                y: 0,
                uId: 'TnFOu2GZw0iDdt_4fuMV8g',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 32,
                tileImageId: 14,
                x: 0,
                y: 0,
                uId: 'JxRDSUzDT0uUIg8fCu7M2Q',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 33,
                tileImageId: 15,
                x: 0,
                y: 0,
                uId: '2ERIs8P0EkqMvUV0FjcC2g',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 34,
                tileImageId: 16,
                x: 0,
                y: 0,
                uId: '2b7hk8gZp0ankplcfMUZJg',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 35,
                tileImageId: 17,
                x: 0,
                y: 0,
                uId: 'PUgdU9BATk20LHvPwoD5yQ',
                isMatched: false,
                canFlip: true,
                coverId: 35
            },
            {
                _id: 36,
                tileImageId: 18,
                x: 0,
                y: 0,
                uId: '2xpIth7cvUyqEgUc7QE9Uw',
                isMatched: false,
                canFlip: true,
                coverId: 35
            }
        ];
        tileData.map(function (item) {
            _this.saveTodo(item);
        });
    };
    ;
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewTodoInput.prototype, "create", void 0);
    NewTodoInput = __decorate([
        core_1.Component({
            selector: 'new-todo-input',
            templateUrl: './src/components/newTodo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NewTodoInput);
    return NewTodoInput;
}());
exports.NewTodoInput = NewTodoInput;
