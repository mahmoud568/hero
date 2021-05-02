import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'U-N-I-S-H-F';
   sortBy: string;
  
  changeSort(event: string) {
  this.sortBy = event;
  }
}
