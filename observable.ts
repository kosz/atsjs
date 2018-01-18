//export function makeObservable() {
//  const observers = [];
//  return {
//    subscribe: function(observer) {
//      observers.push(observer);
//    },
//    next: function(value) {
//      observers.forEach(obs => obs(value));
//    },
//    observers
//  };
//}

export class Observable extends Array<Function> {
  next = val => this.forEach(fn => fn(val));
}
