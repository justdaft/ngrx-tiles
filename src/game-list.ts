import { Component, Input, Output, EventEmitter} from 'angular2/core';
import { GameItem} from './game-item';

@Component({
  selector: 'game-list',
  templateUrl: './src/game-list.html',
  directives: [GameItem]
})

export class GameList {
  @Input() games;
  // @Output('matched') matchedTile = new EventEmitter();
  // @Output('delete') deleteTile = new EventEmitter();
}
