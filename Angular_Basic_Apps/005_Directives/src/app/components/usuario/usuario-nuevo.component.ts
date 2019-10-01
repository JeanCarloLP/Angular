import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>usuario-nuevo works!</p>
    <p>Podemos obtener el id de los parametros del padre, en este caso es {{ variable }}</p>
  `
})
export class UsuarioNuevoComponent implements OnInit {
  variable = '';
  constructor( private router: ActivatedRoute ) {
    this.router.parent.params.subscribe( parametros => {
      this.variable = parametros.id;
    });
  }

  ngOnInit() {
  }

}
