import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sortby:string = "Name";

  switchCheckBox(){
    if(this.sortby=="Name"){
      this.sortby = "Power";
    }else{
      this.sortby = "Name";
    }
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
