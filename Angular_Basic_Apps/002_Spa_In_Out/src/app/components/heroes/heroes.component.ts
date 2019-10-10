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
  }

  ngOnInit() {
    this.aHeroes = this.heroesService.getHeroes();
  }

  verHeroe( idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
