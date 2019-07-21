import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio Spotify Listo.');
    console.log('No hace falta añadir en el provider del modulo.');
    console.log('Vamos a hacer la petición al servicio de spotify.');
  }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${ query }`;
    const HEADERS = new HttpHeaders({
      Authorization: 'Bearer BQBEU1ynTyRrQ9BoofPbHn3vyG9F9fqnKS5UUan5aLy0HXcMJrYNpfPdVM2sudfj9yJkOziRRJ6QENUVhPk'
    });
    return this.http.get( URL, { headers: HEADERS });
  }

  getNewReleases() {
    // tslint:disable-next-line:no-string-literal
    return this.getQuery('browse/new-releases?limit=21').pipe( map( (data: any) => data['albums'].items));
  }

  getArtista( termino: string ) {
    // tslint:disable-next-line:no-string-literal
    return this.getQuery(`search?q=${ termino }&type=artist&limit=10`).pipe( map( data => data['artists'].items));
  }

  // getQuery(query: string) {
  //   const URL = `https://api.spotify.com/v1/${ query }`;
  //   const HEADERS = new HttpHeaders({
  //     Authorization: 'Bearer BQBfbYWMSQP8e46nHOHpboNn6D1M4pOqtkjP9OYO0Q87MOODIB7ikrRgRLz7lcZfCS31E77prb9dC7JIFtk'
  //   });
  //   return this.http.get( URL, { headers: HEADERS });
  // }

  // getNewReleases() {
  //   return this.getQuery('browse/new-releases?limit=21').pipe( map( (data: any) => data['albums'].items));
  // }

  // getArtista( termino: string ) {
  //   return this.getQuery(`search?q=${ termino }&type=artist&limit=10`).pipe( map( data => data['artists'].items));
  // }

}
