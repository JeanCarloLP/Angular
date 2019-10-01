import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyD-boL5sgAeV4lZi7_DVaF_oJR4eHk2c84';
  public userToken: string;
  // Crear nuevo Usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login Usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient ) {
    this.getToken();
   }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel ) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }:signInWithPassword?key=${ this.apiKey }`,
      authData
    ).pipe(
      map( resp => {
        // tslint:disable-next-line:no-string-literal
        this.saveToken( resp['idToken']);
        return resp;
      })
    );
  }

  nuevoUsuario( usuario: UsuarioModel ) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    // para la petición post pasamos la url y mandar la información que mandamos al servidor
    return this.http.post(
      `${ this.url }:signUp?key=${ this.apiKey }`,
      authData
    ).pipe(
      map( resp => {
        // tslint:disable-next-line:no-string-literal
        this.saveToken( resp['idToken']);
        return resp;
      })
    );
  }

  private saveToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const HOY = new Date();
    HOY.setSeconds( 3600 ); // tiempo de expiracion dado por FIREBASE
    localStorage.setItem('expira', HOY.getTime().toString() );
  }

  private getToken() {
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  public loginCorrect(): boolean {

    if ( this.userToken.length < 2 )
      return false;

    const EXPIRA = Number(localStorage.getItem('expira'));
    const EXPIRADATE = new Date();
    EXPIRADATE.setTime(EXPIRA);

    if (EXPIRADATE > new Date() )
      return true;
    else
      return false;
  }
}
