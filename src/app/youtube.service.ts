import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = ''; // 'YOUR-APIKEY-YOUTUBE';

  constructor(public http: HttpClient) { }

  search(query: string): Observable<Object> {

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${this.apiKey}&maxResults=6&order=viewCount`;

    return this.http.get(url);
  }
}
