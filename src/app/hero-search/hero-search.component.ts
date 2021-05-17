import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes:Hero[];
  name: string;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  Search() {
    if(this.name != ""){
    this.heroes= this.heroes.filter(filter => {return filter.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())});
    } else if (this.name == "") {
      this.ngOnInit();
    }
  }

  
}
