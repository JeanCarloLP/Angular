import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [ ]
})
export class HeroesComponent implements OnInit {

  aHeroes: Heroe[] = [];

  constructor( private heroesService: HeroesService,
               private router: Router ) {
    // console.log('constructor');
  }

  ngOnInit() {
    this.aHeroes = this.heroesService.getHeroes();
    // console.log(this.aHeroes);
  }

  verHeroe( idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
