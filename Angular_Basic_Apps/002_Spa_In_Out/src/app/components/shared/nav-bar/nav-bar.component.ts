import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {
  aHeroes: Heroe[] = [];
  constructor( private heroesService: HeroesService,
               private router: Router ) {}

  ngOnInit() {
    this.aHeroes = this.heroesService.getHeroes();
  }

  buscarHeroe(termino: string) {
    let indexArray = -1;
    for ( let i = 0; i < this.aHeroes.length; i++ ) {
      if ( (this.aHeroes[i].nombre).toLowerCase() === termino.toLowerCase() ) {
        indexArray = i;
        break;
      }
    }

    if (indexArray !== -1) {
      this.router.navigate( ['/heroe', indexArray] );
    }
  }

  buscarHeroe2( termino: string ) {
    this.router.navigate( ['/buscar', termino] );
  }

}
