import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  starClassName = "star-rating-blank";
  @Input() starId:any;
  @Input() rating:any;

  @Output() leave: EventEmitter<number> = new EventEmitter();
  @Output() enter: EventEmitter<number> = new EventEmitter();
  @Output() bigClick: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    
    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }
  }

  onenter() {
    this.enter.emit(this.starId);
  }

  onleave() {
    this.leave.emit(this.starId);
  }

  starClicked() {
    this.bigClick.emit(this.starId);
  }

}
