import {  Component,  Input,  OnChanges,  OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnChanges{
  heroes: Hero[];
  heroRate: number;
  @Input() passedSort :string;
  

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  ngOnChanges() {
    if(this.passedSort != null) {

      this.sortHeroes(this.passedSort);
    }
  }

  sortHeroes(sortBY: string) {
    if(sortBY == "Name") {
      this.heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    else{
      this.heroes.sort((a, b) => (a.powers.length > b.powers.length) ? 1 : -1);
    }
  }


  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => {this.heroes = heroes;this.sortHeroes("Name");});
    
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
