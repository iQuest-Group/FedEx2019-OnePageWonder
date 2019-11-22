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

  showSearchResults: boolean;
  showSelectedVideos: boolean;

  constructor(private youTubeService: YoutubeService) { }

  search(): void {
    this.showSearchResults = false;
    this.showSelectedVideos = false;

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

          if (index < 6) {
            this.videos[index].selected = true;
          }
        }

        this.showSearchResults = true;
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

  generatePage(): void {
    const selectedVideos= [];

    for (let video of this.videos) {
      if (video.selected) {
        selectedVideos.push(video);
      }
    }

    this.videos = selectedVideos;

    this.showSearchResults = false;
    this.showSelectedVideos = true;
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

      if (index < 6) {
        this.videos[index].selected = true;
      }
    }

    this.showSearchResults = true;
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
