
import { obs } from './observable';

const weirdScopingThing = 'haha';

class MyClass () {

  myValue: any = weirdScopingThing;
  constructor() {
    console.log(weirdScopingThing);
    const aaa = 'aaa';
    function callback() {
      return aaa;
    }

    const obs = new MyObservable((val) => this.val = val);
  }
}

console.log(aaa); // this won't work 

class MyObservable {
  constructor(public subscriber: Function) {}
  onNewValue() {
    const bbb = 'bbb';
    subscriber(val);
  }
}

