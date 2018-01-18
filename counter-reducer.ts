// every time you want to make any changes to your app's state
// you dispatch a action object
// which gets sent to all the reducers
// the reducers which have matching action type cases
// will modify the state based on the logic which their cases contain

interface CounterStateShape {
  nr: number;
}

const INITIAL_STATE: CounterStateShape = {
  nr: 0
};

interface Action {
  type: string;
  payload?: Object;
}

export function counterReducer(
  state: CounterStateShape = INITIAL_STATE, 
  action: Action
) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,   
        nr: state.nr + 1
      }; 
    case 'DECREMENT':
      // anti pattern example
      //state.nr = state.nr - 1;
      //return state;
      return {
        ...state,
        nr: state.nr - 1
      };
    default:
      return state;
  }
}

// action + state = state
// action + curreState = newState
// currentState = newState;
// action + currentState = newState;
