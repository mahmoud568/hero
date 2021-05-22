import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEREOS } from './mock-heroes';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[];
  selectedHero: any;
  filterdHeroes = new BehaviorSubject<Hero[]>(HEREOS);
  constructor() { }

  // get heroes
  getHeroes():Observable<Hero[]> {
    return this.filterdHeroes;
  }

  getHero(id: number) {
    this.heroes = HEREOS;
    this.selectedHero = this.heroes.find(x => x.id == id);
    return this.selectedHero;
  }
  
  heroSearch(name: string) {
    this.heroes = HEREOS;
    this.filterdHeroes.next( this.heroes.filter(filter => {return filter.name.toLocaleLowerCase().match(name.toLocaleLowerCase())}));
  }
}
