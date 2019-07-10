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

  // Para buscar podemos hacer lo siguiente:
  // --------------------------------------------------------------------------------------------------------------------
  // La PRIMERA OPCION sería utilizar el enrutamiento que ya existe y navegar directamente a la busqueda deseada
  // ojo!!! aquí el término a localizar tiene que ser estricto y exacto para mostrar el template de heroe.component
  // --------------------------------------------------------------------------------------------------------------------
  buscarHeroe(termino: string) {
    let indexArray = -1;
    for ( let i = 0; i < this.aHeroes.length; i++ ) {
      if ( (this.aHeroes[i].nombre).toLowerCase() === termino.toLowerCase() ) {
        indexArray = i;
        break;
      }
    }
    // Otra forma más elegante sería la siguiente
    // let indexArray = -1;
    // const myFunction = this.aHeroes.find((value, index) => {
    //   if (value.nombre.toLowerCase() === termino.toLowerCase()) {
    //     indexArray = index;
    //   }
    // });
    if (indexArray !== -1) {
      this.router.navigate( ['/heroe', indexArray] );
    }
  }

  // --------------------------------------------------------------------------------------------------------------------
  // La SEGUNDA OPCION sería crear UN NUEVO TEMPLATE al que navegaremos en caso de  realizar busquedas.
  // en este nuevo template implementamos lógica que llame al servicio de heroes
  // --------------------------------------------------------------------------------------------------------------------
  buscarHeroe2( termino: string ) {
    this.router.navigate( ['/buscar', termino] );
  }
  // --------------------------------------------------------------------------------------------------------------------
  // La TRCERA OPCION sería crear nuestro propio pipe y filtrar los resultados de las cards en el mismo template.
  // --------------------------------------------------------------------------------------------------------------------



}
