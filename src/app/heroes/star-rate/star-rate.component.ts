import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.scss']
})
export class StarRateComponent implements OnInit,OnChanges{

  @Input() heroRate:number;
  constructor() { }

  rating = 0;
  stars=[1,2,3,4,5];
  hoverState = 0;

  ngOnInit(): void {
  }

ngOnChanges(){
  this.rating = this.heroRate;
} 

  enter(i: any) {
      // this.hoverState = i;
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
