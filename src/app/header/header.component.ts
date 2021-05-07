import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sortby:string = "Name";

  @Output() changedSort = new EventEmitter<string>();
  @Output() selectedHero = new EventEmitter<Hero>();
 
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

  selecteHero(hero: Hero){
    this.selectedHero.emit(hero);
  }

}
