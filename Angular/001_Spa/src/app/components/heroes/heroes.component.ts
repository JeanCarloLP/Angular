import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [ ]
})
export class HeroesComponent implements OnInit {

  aHeroes: Heroe[] = [];

  constructor( private heroesService: HeroesService ) {
    console.log('constructor');
  }

  ngOnInit() {
    this.aHeroes = this.heroesService.getHeroes();
    console.log(this.aHeroes);
  }

}
