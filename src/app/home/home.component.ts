import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sortBy: string;
   selectedHero: Hero;
  
  changeSort(event: string) {
  this.sortBy = event;
  }

}
