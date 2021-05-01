import {  Component,  OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[];
  heroRate: number;

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {this.getHeroes();}




  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.heroRate = hero.rate;
    console.log(this.selectedHero);
  }

  // stars=[1,2,3,4,5];
  // rating = 0;
  // hoverState = 0;
  // enter(i: any) {
  //   this.hoverState = i;
  // }

  // leave() {
  //   this.hoverState = 0;
  // }

  // updateRating(i:any) {
  //   this.rating = i;
  //   console.log(this.rating);
  // }

}
