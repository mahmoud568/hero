import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './heroes/star/star.component';
import { RatingModule } from 'ng-starrating';
import { StarRateComponent } from './heroes/star-rate/star-rate.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesStartComponent } from './heroes/heroes-start/heroes-start.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    HomeComponent,
    StarComponent,
    StarRateComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
