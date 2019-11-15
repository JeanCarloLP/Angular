import { Component } from '@angular/core';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtubeApp';
  constructor(public youtubeService: YoutubeService ) { }
}
