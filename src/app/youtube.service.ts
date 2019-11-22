import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'apikey';

  constructor(public http: HttpClient) { }

  search(query: string): Observable<Object> {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${this.apiKey}&maxResults=6&order=viewCount`;

    return this.http.get(url);
  }

  getVideoStatistics(videoIds: string): Observable<Object> {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${this.apiKey}`;

    return this.http.get(url);
  }

  dummySearch(): any[] {
    const videos = [];

    for (let element of this.sampleJsonSearchResult.items) {
      videos.push(element)
    }

    return videos;
  }

  dummyGetVideoStatistics(): any[] {
    const videoStatistics = [];

    for (let element of this.sampleJsonVideosResult.items) {
      videoStatistics.push(element)
    }

    return videoStatistics;
  }

  sampleJsonSearchResult = {
    "kind": "youtube#searchListResponse",
    "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/24XTnk8G66gkM34LwwiDk1HbJv0\"",
    "nextPageToken": "CAYQAA",
    "regionCode": "RO",
    "pageInfo": {
     "totalResults": 1000000,
     "resultsPerPage": 6
    },
    "items": [
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/lXBfw3rhoT-eNMjsUNEw6LSZG7A\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "X5kmM98iklo"
      },
      "snippet": {
       "publishedAt": "2010-12-07T17:51:34.000Z",
       "channelId": "UCJJXxWajEfPgDikZlgT8eRQ",
       "title": "Wir Sind Helden - Nur Ein Wort (Official Video)",
       "description": "Folge Wir Sind Helden: ▻ Facebook: https://www.facebook.com/wirsindhelden ▻ Website: https://www.wirsindhelden.com ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/X5kmM98iklo/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/X5kmM98iklo/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/X5kmM98iklo/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "WirsindHeldenVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/tSyuzlLykjy1Qm-A2F1NISiGyOs\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "aC872j2-PDw"
      },
      "snippet": {
       "publishedAt": "2009-02-28T09:47:24.000Z",
       "channelId": "UCJJXxWajEfPgDikZlgT8eRQ",
       "title": "Wir Sind Helden - Denkmal (Official Video)",
       "description": "Folge Wir Sind Helden: ▻ Facebook: https://www.facebook.com/wirsindhelden ▻ Website: https://www.wirsindhelden.com ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/aC872j2-PDw/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/aC872j2-PDw/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/aC872j2-PDw/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "WirsindHeldenVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/h92dlvlUZyjNHFG3D4R6BxbTRuY\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "XER2pm7UUv0"
      },
      "snippet": {
       "publishedAt": "2009-10-25T08:13:33.000Z",
       "channelId": "UCbnk_P2we3ttvu1aTWAvrfQ",
       "title": "Revolverheld - Helden 2008 (Videoclip)",
       "description": "Revolverhelds offizielles Video zu 'Helden 2008' Hier gibt's das MTV Unplugged von Revolverheld: https://lnk.to/Revolverheld_MTVUnplugged Abonniere jetzt ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/XER2pm7UUv0/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/XER2pm7UUv0/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/XER2pm7UUv0/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "RevolverheldVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/iE4SsnKdgCNmZlaR7JSj-35WFR4\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "kfyTS2tJu74"
      },
      "snippet": {
       "publishedAt": "2007-05-15T15:17:44.000Z",
       "channelId": "UChdK6YkIdmAZkBm5_zuMScQ",
       "title": "Wir sind Helden - Denkmal",
       "description": "Wir sind Helden - Denkmal.",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/kfyTS2tJu74/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/kfyTS2tJu74/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/kfyTS2tJu74/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "bigFM 2007-2010",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/nT9LEzFlsiEbsiAH0FVevpei00M\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "_KOUCOYVAos"
      },
      "snippet": {
       "publishedAt": "2010-12-07T16:17:34.000Z",
       "channelId": "UCJJXxWajEfPgDikZlgT8eRQ",
       "title": "Wir Sind Helden - Aurélie (Official Video)",
       "description": "Folge Wir Sind Helden: ▻ Facebook: https://www.facebook.com/wirsindhelden ▻ Website: https://www.wirsindhelden.com ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/_KOUCOYVAos/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/_KOUCOYVAos/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/_KOUCOYVAos/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "WirsindHeldenVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/A1s5CkejkttU5Sf9kLbj98KNHdY\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "h9IlWlZVuao"
      },
      "snippet": {
       "publishedAt": "2017-05-27T12:44:31.000Z",
       "channelId": "UCZ-JZCn0EjyYHRx5Md8yfEg",
       "title": "Wir sind Helden - Denkmal (Rock am Ring 2004) LIVE",
       "description": "Wir sind Helden LIVE - Denkmal (aus \"Die Reklamation\") Rock am Ring: Nürburgring, 06.06.2004 Komm mal ans Fenster komm her zu mir Siehst du da drüben ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/h9IlWlZVuao/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/h9IlWlZVuao/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/h9IlWlZVuao/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "Judith Holofernes & Wir sind Helden | heldenchannel",
       "liveBroadcastContent": "none"
      }
     }
    ]
   };

   sampleJsonVideosResult = {
    "kind": "youtube#videoListResponse",
    "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/-OB6YJZMfJ4ZkWgIsKNlc_z_Dzs\"",
    "pageInfo": {
     "totalResults": 6,
     "resultsPerPage": 6
    },
    "items": [
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/Eyi-qO02Wr5eOlVgrk_lmrFtO6M\"",
      "id": "X5kmM98iklo",
      "statistics": {
       "viewCount": "9486890",
       "likeCount": "46763",
       "dislikeCount": "1586",
       "favoriteCount": "0",
       "commentCount": "1685"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/RcCgBk9_xdPHnWRbOoUDotxJS8c\"",
      "id": "aC872j2-PDw",
      "statistics": {
       "viewCount": "7967257",
       "likeCount": "28636",
       "dislikeCount": "1357",
       "favoriteCount": "0",
       "commentCount": "891"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/k4Jrg-gNfO59xHHyIzxuz4uHtQU\"",
      "id": "XER2pm7UUv0",
      "statistics": {
       "viewCount": "1846567",
       "likeCount": "540",
       "dislikeCount": "16",
       "favoriteCount": "0",
       "commentCount": "22"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/TMw4q-ZIFMzQdKyfnqu2614W0-E\"",
      "id": "kfyTS2tJu74",
      "statistics": {
       "viewCount": "1576390",
       "likeCount": "1571",
       "dislikeCount": "77",
       "favoriteCount": "0",
       "commentCount": "191"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/0Mc1w2flOgDZvuVnROVQ1UeJoXg\"",
      "id": "_KOUCOYVAos",
      "statistics": {
       "viewCount": "1470547",
       "likeCount": "4450",
       "dislikeCount": "305",
       "favoriteCount": "0",
       "commentCount": "262"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/dBYzaWneoAu_WR7zUsie4VIIiLU\"",
      "id": "h9IlWlZVuao",
      "statistics": {
       "viewCount": "1471386",
       "likeCount": "5106",
       "dislikeCount": "325",
       "favoriteCount": "0",
       "commentCount": "419"
      }
     }
    ]
   };
}
