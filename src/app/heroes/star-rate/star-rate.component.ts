import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.scss']
})
export class StarRateComponent implements OnInit {

  @Input() heroRate:number;
  constructor() { }

  rating = 0;
  stars=[1,2,3,4,5];
  hoverState = 0;

  ngOnInit(): void {
    console.log(this.heroRate);
    this.rating = this.heroRate;
  }

  enter(i: any) {
    if (this.heroRate == null) {
      this.hoverState = i;
    }
  }

  leave() {
    this.hoverState = 0;
  }

  updateRating(i:any) {
    if (this.heroRate == null) {
      this.rating = i;
    }
  }
}
