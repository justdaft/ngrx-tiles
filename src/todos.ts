//todos reducer

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MATCHED_TODO = 'MATCHED_TODO';

export const todos = (state = [], {type, payload}) => {

  console.log('ACTION:', type, payload);

  switch (type) {
    case ADD_TODO:
      return state.concat([Object.assign({}, payload, { id: state.length + 1 })]);
    case UPDATE_TODO:
      return state.map(todo => {
        return todo.id !== payload.id ?
          todo :
          Object.assign({}, todo, payload);
      });
    case MATCHED_TODO:
      return state.map(todo => {
        return todo.id !== payload.id ?
          todo :
          Object.assign({}, todo, { matchedd: true });
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== payload.id);
    default:
      return state;
  }
};

export const ALL = 'ALL';
export const MATCHED = 'MATCHED';
export const PENDING = 'PENDING';
export const MATCHED = 'MATCHED';

export const visibilityFilter = (state = (todo) => true, {type, payload}) => {
  switch (type) {
    case ALL:
      return (todo) => true;
    case MATCHED:
      return (todo) => todo.matchedd;
    case PENDING:
      return (todo) => !todo.matchedd;
    case MATCHED:
      return (todo) => !todo.isMatched;
    default:
      return state;
  }
};
