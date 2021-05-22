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
  Search(name: string) {
   this.heroService.heroSearch(name);
  //  this.heroes = this.heroService.filterdHeroes;
  }

  
}
