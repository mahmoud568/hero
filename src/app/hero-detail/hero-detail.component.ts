import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';
import { HEREOS } from '../heroes/mock-heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  heroes: Hero[];
  hero: Hero ;
  selectedId: number;

  constructor(private route: ActivatedRoute, private router: Router,
    private heroService: HeroService) 
  {   
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.heroes = HEREOS;
    this.selectedId = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedId = params['id'];
      }
    )
  
   this.hero = this.heroService.getHero(this.selectedId);  
  }

}
