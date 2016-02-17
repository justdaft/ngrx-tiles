import { Injectable } from 'angular2/core';
import { Action, Reducer, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';
import { List, Map, Record, fromJS } from 'immutable';


export const LOADING_GAMES = 'LOADING_GAMES';
export const LOADED_GAMES = 'LOADED_GAMES';
export const LOADED_GAMES = 'LOADED_GAMES';
export const ADDING_GAME = 'ADDING_GAME';



const ADD_GAME = 'ADD_GAME';
const LOAD_GAME = 'LOAD_GAME';
const LOAD_GAMES = 'LOAD_GAMES';
const PATCH_GAME = 'PATCH_GAME';
const PATCH_TILE = 'PATCH_TILE';

export interface IGame {
  id?: number;
  playerName?: string;
  tiles?: any;
  matchedPairs?: number;
  turnsTaken?: number;
  dateCreated?: any;
};

export interface IGames extends Map<String, any> {
  entities: { games: Map<Number, IGame> };
  adding: boolean;
  loading: boolean;
};

export interface ITile {
  _id?: number;
  tileImageId?: number;
  uId?: any;
  isMatched?: boolean;
  x?: number;
  y?: number;
  isFlipped?: boolean;
  canFlip?: boolean;
  coverId?: number;
};

export const GameRecord: IGame = Record({
  id: null,
  playerName: null,
  tiles: null,
  matchedPairs: null,
  turnsTaken: null,
  dateCreated: null
});

@Injectable()
export class Games {
  loading$: Observable<Map<String, Boolean>>;
  adding$: Observable<Map<String, Boolean>>;
  games$: Observable<Map<String, any>>;

  private actions$ = new BehaviorSubject<Action>({ type: null, payload: null });

  constructor(private _store: Store<any>) {
    const store$ = this._store.select<IGames>('games');

    this.adding$ = store$.map(data => data.get('adding'));
    this.loading$ = store$.map(data => data.get('loading'));

    Observable
      .merge(adds, loads, loadsOne, patchesOne)
      .subscribe((action: Action) => _store.dispatch(action));

  }

  loadGames() {
    this.actions$.next({ type: LOADED_GAMES });
  }

  loadGame(id) {
    id = parseInt(id, 10);
    this.actions$.next({ type: LOAD_GAME, payload: id });
    return this.games$
      .map(data => data.find(item => item.id === id) || {});
  }

  patchGame(game) {
    this.actions$.next({ type: PATCH_GAME, payload: game });
  }

}