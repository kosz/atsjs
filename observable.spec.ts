import { describe, it, expect } from './testing';
import { Observable } from './observable';

describe('Observable', () => {

  it('can be instantiated', () => {
    const observable = new Observable();
    expect(observable).toBeDefined();
  });

  it('can keep a list of observer functions', () => {
    const observable = new Observable();

    function observer() { }

    observable.push(observer);

    expect(observable.length).toEqual(1);
  });

  it('will pass a new value to all it`s observers', () => {

    let obs1Value, obs2Value;
    function obs1(val) { obs1Value = val; }
    function obs2(val) { obs2Value = val; }
    
    const observable = new Observable();
    observable.push(obs1);
    observable.push(obs2);

    const theValue = 'Hello World';

    observable.next(theValue);

    expect(obs1Value).toEqual(theValue);
    expect(obs2Value).toEqual(theValue);

  });

});
