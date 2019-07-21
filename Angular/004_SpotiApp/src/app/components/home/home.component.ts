import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  // // Ejemplode petición, en nuestro ejercicio haremos uso de un servicio
  // paises: any[] = [];

  // constructor( private http: HttpClient) {
  //   console.log('Constructor del Home, recibe el objeto de la petición a rest countries');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (resp: any) => {
  //     this.paises = resp;
  //     console.log( resp );
  //   });
  //  }

  // Variables
  nuevasCanciones: any[] = [];
  loading: boolean;
  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      });
  }

}
