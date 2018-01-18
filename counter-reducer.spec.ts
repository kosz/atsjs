import { describe, it, expect } from './testing';
import { counterReducer } from './counter-reducer';

describe('counterReducer', () => {
  
  it('will have nr equal 0 if no state is passed', () => {
    const newState = counterReducer(undefined, { type: '' });
    expect(newState.nr).toEqual(0);
  });

  it('will add 1 if INCREMENT is received', () => {
    let newState = counterReducer(undefined, { type: '' });
    newState = counterReducer(newState, { type: 'INCREMENT' });
    expect(newState.nr).toEqual(1);
  });
  
  it('will subtract 1 if DECREMENT is received', () => {
    let newState = counterReducer(undefined, { type: '' });
    newState = counterReducer(newState, { type: 'DECREMENT' });
    expect(newState.nr).toEqual(-1);
  });


});
