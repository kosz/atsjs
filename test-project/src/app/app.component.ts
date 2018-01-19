import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { store } from './myredux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = 'Cosmin';
  nr: number;

  ngOnInit() {
    store.subscribe((val) => this.nr = val.nr);
  }

  increment() {
    const incrementAction = { type: 'INCREMENT' };
    store.dispatch(incrementAction);
    //observable.next({ nr: 'haha i corrupted your state' });
    //state = { nr: 'asdflkasjdwe' };
    //
    //sorry, phone cut off. have a good enveing 
    //store.state = { aasdfas }

  }

  decrement() {
    store.dispatch({ type: 'DECREMENT' });
  }

}
