import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sortBy: string;
  selectedHero: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  changeSort(event: string) {
  this.sortBy = event;
  }

}
