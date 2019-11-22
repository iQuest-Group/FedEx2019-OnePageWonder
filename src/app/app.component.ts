import { Component } from '@angular/core';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'one-page-wonder';
  artist: string;
  videos: any[];

  constructor(private youTubeService: YoutubeService) { }

  search(): void {
    this.videos = [];
    this.youTubeService
      .search(this.artist)
      .subscribe(result => {
        for (let element of result["items"]) {
          this.videos.push(element)
        }
      });
  }
}
