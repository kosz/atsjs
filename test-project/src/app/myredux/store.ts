import { Observable } from './observable';
import { counterReducer } from './counter-reducer';

export const store = {
  dispatch,
  subscribe
};

function dispatch(action) {
  const nextState = counterReducer(state, action);
  state = nextState;
  observable.next(state);
}

function subscribe(fun) {
  observable.push(fun);
}

let state = counterReducer(undefined, { type: '' });
const observable = new Observable();
