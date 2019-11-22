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
    this.actualSearch();

    // this.dummySearch();
  }

  actualSearch(): void {
    this.videos = [];
    this.youTubeService
      .search(this.artist)
      .subscribe(result => {
        for (let element of result["items"]) {
          this.videos.push(element)
        }

        this.getVideoViewCount();
      });
  }

  getVideoViewCount(): void {
    const videoIds = this.getVideoIds();

    this.youTubeService
      .getVideoStatistics(videoIds)
      .subscribe(result => {
        for (let index = 0; index < result["items"].length; index++) {
          this.videos[index].statistics = {};
          this.videos[index].statistics.viewCount = result["items"][index].statistics.viewCount;
        }
      });
  }

  getVideoIds(): string {
    let videoIds = '';

    for (let video of this.videos) {
      if (videoIds !== '') {
        videoIds += ',';
      }

      videoIds += video.id.videoId;
    }

    return videoIds;
  }

  dummySearch() {
    this.videos = this.youTubeService.dummySearch();

    this.dummyGetVideoViewCount();
  }

  dummyGetVideoViewCount(): void {
    const videoStatistics = this.youTubeService.dummyGetVideoStatistics();

    for (let index = 0; index < videoStatistics.length; index++) {
      this.videos[index].statistics = {};
      this.videos[index].statistics.viewCount = videoStatistics[index].statistics.viewCount;
    }
  }

  getDateUtc(input: string): Date {
    const dateValue = new Date(input);

    const dateUtc = new Date(
      dateValue.getUTCFullYear(),
      dateValue.getUTCMonth(),
      dateValue.getUTCDate()
    );

    return dateUtc;
  }
}
