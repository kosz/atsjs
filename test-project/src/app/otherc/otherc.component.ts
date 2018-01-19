import { Component, OnInit } from '@angular/core';

import { store } from '../myredux/store';

@Component({
  selector: 'app-otherc',
  templateUrl: './otherc.component.html',
  styleUrls: ['./otherc.component.css']
})
export class OthercComponent implements OnInit {

  counterSlice: any; 
  constructor() { }

  ngOnInit() {
    store.subscribe((val) => {
      this.counterSlice = val
    });
  }

}
