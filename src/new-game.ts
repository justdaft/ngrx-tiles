let {List, Map, fromJS} = Immutable;

import {Component, Output, EventEmitter} from 'angular2/core';
import {IGame} from './game-models';
import {SeedTiles} from './seed-data.ts';


@Component({
  selector: 'new-game',
  templateUrl: './src/new-game.html'
})

export class NewGame {
  gameState: any;
  game: IGame;
  playerName: string;
  @Output() create = new EventEmitter();

  saveGame(obj) {
    this.create.emit(obj);
  };



createNewGame() {
  //   this.gameState = Immutable.Map({
  //     tiles: fromJS(SeedTiles)
  //
  // });

    // let newGame = new  NewGame(99, 'Billy', 'Flying');
    // console.log(newGame.name);

    let _seedTiles = SeedTiles.sort(function () { return Math.random() - 0.5; });

    this.game = {
      playerName: this.playerName,
      tiles: fromJS(_seedTiles),
      matchedPairs: 0,
      turnsTaken: 0,
      dateCreated: new Date()
    };

    this.gameState = Map({
                tiles: fromJS(_seedTiles),
                playerName: this.playerName,
                matchedPairs: 0,
                turnsTaken: 0,
                dateCreated: new Date()
            });

    this.saveGame(this.gameState);
    // tileData.map(item => {
    //   this.saveTile(item);
    // });
  };

  // get diagnostic() { return JSON.stringify(this.game); };
}
