import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEREOS } from './mock-heroes';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // search by name
  // searchHeroes(term: string): Observable<Hero[]> {
  //   if(!term.trim()) {
  //     return of([]);
  //   }
  //   return this
  // }

  // get heroes
  getHeroes():Observable<Hero[]> {
    return of(HEREOS);
  }

  
}
