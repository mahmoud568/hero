import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height:"200px",
        overflow: "hidden"
      })),
      state('closed', style({
        height:"20px",
        overflow: "hidden"
      })),
      transition('open => closed', [
        animate('.5s')
      ]),
      transition('closed => open', [
        animate('.5s')
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  sortby:string = "Name";
  colapsed:boolean = false;
  @Output() changedSort = new EventEmitter<string>();
 
  constructor() { }

  ngOnInit(): void {
  }

  switchCheckBox(){
    if(this.sortby=="Name"){
      this.sortby = "Power";
      this.changedSort.emit(this.sortby);
    }else{
      this.sortby = "Name";
      this.changedSort.emit(this.sortby);
    }
  }

  colapse(){
   this.colapsed = !this.colapsed;
  }

}
