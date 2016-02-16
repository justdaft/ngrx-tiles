import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'game-item',
  templateUrl: './src/game-item.html'
})
export class GameItem {
  @Input() game;
  @Output() matched = new EventEmitter();
}
