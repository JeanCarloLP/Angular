import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

    if ( localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem( 'email' );
      this.recordarme = true;
    }
  }

  onLogin(form) {
    if (form.invalid)
      return;

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    this.auth.login( this.usuario ).subscribe( resp => {

      Swal.close();

      if ( this.recordarme ) {
        localStorage.setItem( 'email', this.usuario.email );
      }

      this.router.navigateByUrl('/home');

    }, (err) => {
      Swal.fire({
        type: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message
      });
    });
  }

}
