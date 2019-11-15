import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {

  // you need to registrate on youtube development area
  youtubeUrl: string = 'https://www.googleapis.com/youtube/v3'; // use the url you want
  apikey: string = 'AIzaSyCj8TVKVS83Uua_Y4ZybTFpqwEnuekpLI8'; // use your apikey
  params = new HttpParams().set('part', 'snippet')
                           .set('maxResults', '10')
                           .set('playlistId', 'UUvosUrZ7hXpzAyobhfztg4w')
                           .set('key', this.apikey );

  nextPageToken: string = '';

  constructor( public http: HttpClient ) { }

  getVideos() {
    if (this.nextPageToken) {
      this.params = this.params.append( 'pageToken', this.nextPageToken );
    }

    let url: string = `${ this.youtubeUrl }/playlistItems`;

    return this.http.get( url, { params: this.params } ).pipe(map( ( res: any ) => {
      console.log(res);
      this.nextPageToken = res.nextPageToken;
      let videos: any[] = [];
      for ( let video of res.items ) {
        let snippet = video.snippet;
        videos.push( snippet );
      }
      return videos;
    }));
  }

}
