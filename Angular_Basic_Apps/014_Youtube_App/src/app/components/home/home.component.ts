import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  videoArray: any[] = [];
  selectedVideo: any;
  secureVideo: string = '';

  constructor( public youtubeService: YoutubeService ) {
  }

  ngOnInit() {
    this.youtubeService.getVideos().subscribe( data => this.videoArray = data );
  }

  playVideo( video: any ) {
    this.selectedVideo = video;
    $('#myModal').modal();
  }

  closeModal() {
    this.selectedVideo = null;
    $('#myModal').modal('hide');
  }

  moreVideos() {
    this.youtubeService.getVideos().subscribe( data => this.videoArray.push.apply(this.videoArray, data) );
  }

}
