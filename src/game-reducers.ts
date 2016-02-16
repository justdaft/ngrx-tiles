//games reducer

export const ADD_GAME = 'ADD_GAME';
export const UPDATE_GAME = 'UPDATE_GAME';
export const DELETE_GAME = 'DELETE_GAME';
export const MATCHED_TILE = 'MATCHED_TILE';

export const games = (state = [], {type, payload}) => {
  console.log('ACTION:', type, payload);
  switch (type) {
    case ADD_GAME:
      return state.concat([Object.assign({}, payload, { id: state.length + 1 })]);
    case UPDATE_GAME:
      return state.map(game => {
        return game.id !== payload.id ?
          game :
          Object.assign({}, game, payload);
      });
    case MATCHED_TILE:
      return state.map(game => {
        return game.id !== payload.id ?
          game :
          Object.assign({}, game, { matched: true });
      });
    case DELETE_GAME:
      return state.filter(game => game.id !== payload.id);
    default:
      return state;
  }
};

export const ALL = 'ALL';
export const PENDING = 'PENDING';
export const MATCHED = 'MATCHED';

export const visibilityFilter = (state = (game) => true, {type, payload}) => {
  switch (type) {
    case ALL:
      return (game) => true;
    case MATCHED:
      return (game) => game.matched;
    case PENDING:
      return (game) => !game.matched;
    default:
      return state;
  }
};