//our root app component
import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Store} from '@ngrx/store';
import {LogMonitor} from '@ngrx/devtools';
import * as GameActions from './game-reducers';
import {NewGame} from './new-game';
import {GameList} from './game-list';


@Component({
  selector: 'game-app',
  providers: [],
  templateUrl: './src/app.html',
  directives: [LogMonitor, NewGame, GameList],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class App {
  games: any;
  constructor(private store: Store) {
    this.games = store.select('games')
      .combineLatest(store.select('visibilityFilter'), (games, visibilityFilter) => {
      return games.filter(visibilityFilter);
    });
  }

  addGame(game) {
    this.store.dispatch({
      type: GameActions.ADD_GAME,
      payload: game
    });
    console.log('addGame(game): ');
  }

  matchedTile(game) {
    this.store.dispatch({
      type: GameActions.MATCHED_TILE,
      payload: game
    });
  }

  // deleteGame(tile) {
  //   this.store.dispatch({
  //     type: GameActions.DELETE_TODO,
  //     payload: tile
  //   });
  // }

  show(filter) {
    this.store.dispatch({
      type: GameActions[filter]
    });
  }
}
