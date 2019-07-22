import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  public artista: any = {};
  public loading: boolean;
  public topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe( params => {
      // tslint:disable-next-line:no-string-literal
      this.getArtista( params['id'] );
      // tslint:disable-next-line:no-string-literal
      this.getTopTracks( params['id'] );
  });
  }

  getArtista( id: string ) {
    this.spotify.getArtista( id ).subscribe( artista => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks( id ).subscribe( topTracks => {
      this.topTracks = topTracks;
    });
  }
}
