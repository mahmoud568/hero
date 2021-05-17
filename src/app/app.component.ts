import { Component } from '@angular/core';
import { Hero } from './heroes/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'U-N-I-S-H-F';
   sortBy: string;
   selectedHero: Hero;
  
  changeSort(event: string) {
  this.sortBy = event;
  }

}
