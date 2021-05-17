import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEREOS } from './mock-heroes';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[];
  selectedHero: any;
  constructor() { }

  // get heroes
  getHeroes():Observable<Hero[]> {
    return of(HEREOS);
  }

  getHero(id: number) {
    this.heroes = HEREOS;
    this.selectedHero = this.heroes.find(x => x.id == id);
    return this.selectedHero;
  }
  
}
