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
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${this.apiKey}&maxResults=12&order=viewCount`;

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
    "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/iM8gGT-rU1OGV7IE8_70BXwtrHQ\"",
    "nextPageToken": "CAwQAA",
    "regionCode": "RO",
    "pageInfo": {
     "totalResults": 1000000,
     "resultsPerPage": 12
    },
    "items": [
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/v_lunnZLaoQu_QubzlbpTQ4wDYI\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "hTWKbfoikeg"
      },
      "snippet": {
       "publishedAt": "2009-06-16T22:14:25.000Z",
       "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
       "title": "Nirvana - Smells Like Teen Spirit (Official Music Video)",
       "description": "REMASTERED IN HD! Read the story behind 'Nevermind' here: https://www.udiscovermusic.com/stories/nirvana-quiet-debut-nevermind/ Listen to more from ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/hTWKbfoikeg/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/hTWKbfoikeg/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/hTWKbfoikeg/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "NirvanaVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/QxbMTuckBNMdybbi1qyN6U2Dn0g\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "vabnZ9-ex7o"
      },
      "snippet": {
       "publishedAt": "2009-06-16T21:34:49.000Z",
       "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
       "title": "Nirvana - Come As You Are",
       "description": "As heard in Captain Marvel! Listen to more Nirvana here: https://Nirvana.lnk.to/Essentials Read the story behind 'Nevermind' here: ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/vabnZ9-ex7o/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/vabnZ9-ex7o/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/vabnZ9-ex7o/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "NirvanaVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/P0i0nOtt9iyLy2CRY0mRuaYfZwE\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "fregObNcHC8"
      },
      "snippet": {
       "publishedAt": "2009-06-16T22:56:31.000Z",
       "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
       "title": "Nirvana - The Man Who Sold The World (MTV Unplugged)",
       "description": "REMASTERED IN HD! Taken from the 25th Anniversary Editions of Nirvana – MTV Unplugged in New York Order Now: https://Nirvana.lnk.to/Unplugged25 ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/fregObNcHC8/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/fregObNcHC8/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/fregObNcHC8/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "NirvanaVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/DKQf5CsWGiJ5PAMdK8prCb7y9Ns\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "n6P0SitRwy8"
      },
      "snippet": {
       "publishedAt": "2009-06-16T22:03:01.000Z",
       "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
       "title": "Nirvana - Heart-Shaped Box",
       "description": "Read the story behind Nirvana's final studio album here: https://www.udiscovermusic.com/stories/utero-takes-bow-nirvana/ Listen to more from Nirvana: ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/n6P0SitRwy8/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/n6P0SitRwy8/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/n6P0SitRwy8/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "NirvanaVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/mUY5MvkEoZq9R_KAXSQo2Ed1WTQ\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "pkcJEvMcnEg"
      },
      "snippet": {
       "publishedAt": "2009-06-16T22:57:12.000Z",
       "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
       "title": "Nirvana - Lithium",
       "description": "Read the story behind 'Nevermind' here: https://www.udiscovermusic.com/stories/nirvana-quiet-debut-nevermind/ Listen to more from Nirvana: ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/pkcJEvMcnEg/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/pkcJEvMcnEg/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/pkcJEvMcnEg/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "NirvanaVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/YrzIh_ScLDU0CeuaAyaoPZh79pw\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "PbgKEjNBHqM"
      },
      "snippet": {
       "publishedAt": "2009-06-16T22:25:12.000Z",
       "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
       "title": "Nirvana - In Bloom (Official Video)",
       "description": "Read the story behind the seminal 'Nevermind' here: https://www.udiscovermusic.com/stories/nirvana-quiet-debut-nevermind/ Listen to more from Nirvana: ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/PbgKEjNBHqM/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/PbgKEjNBHqM/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/PbgKEjNBHqM/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "NirvanaVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/LIecB2kcOw6rPtP1KoET2SCGdDY\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "TjnYjsHPNK8"
      },
      "snippet": {
       "publishedAt": "2016-03-30T12:30:00.000Z",
       "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
       "title": "NIRVANA Video Song | LOVE GAMES | Gaurav Arora, Tara Alisha Berry, Patralekha | T-SERIES",
       "description": "Presenting NIRVANA Video Song from upcoming movie LOVE GAMES starring Patralekha, Gaurav Arora, Tara Alisha Berry in leading roles, written & directed ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/TjnYjsHPNK8/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/TjnYjsHPNK8/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/TjnYjsHPNK8/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "T-Series",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/kEr4loF4lABcIBIGIykfnI4B2qM\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "AhcttcXcRYY"
      },
      "snippet": {
       "publishedAt": "2009-06-17T00:49:23.000Z",
       "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
       "title": "Nirvana - About A Girl (MTV Unplugged)",
       "description": "REMASTERED IN HD! Taken from the 25th Anniversary Editions of Nirvana – MTV Unplugged in New York Order Now: https://Nirvana.lnk.to/Unplugged25 Read ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/AhcttcXcRYY/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/AhcttcXcRYY/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/AhcttcXcRYY/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "NirvanaVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/aKVZWKm59JunPyzR1chRiYXKBHM\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "zYxkezUr8MQ"
      },
      "snippet": {
       "publishedAt": "2008-11-25T00:27:45.000Z",
       "channelId": "UC57pVI4MFyGY2i_ESpUT3IA",
       "title": "Nirvana - Smells Like Teen Spirit (lyrics)",
       "description": "Load up on guns and bring your friends It's fun to lose and to pretend She's over bored and self assured Oh no, I know a dirty word Hello, hello, hello, how low?",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/zYxkezUr8MQ/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/zYxkezUr8MQ/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/zYxkezUr8MQ/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "jerry",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/YZA8XQZ4dNRZ9O9OkoNMNIQ9hMk\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "OfS1jFck8YQ"
      },
      "snippet": {
       "publishedAt": "2017-11-28T15:24:11.000Z",
       "channelId": "UCr8RbU-D7iSvpy0ZO-AasoQ",
       "title": "INNA - Nirvana | Official Music Video",
       "description": "Official music video by INNA performing the single \"Nirvana\". (C) & (P) 2017 Global Records Concerts: booking@innaofficial.com Licensing@globalrecords.com ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/OfS1jFck8YQ/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/OfS1jFck8YQ/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/OfS1jFck8YQ/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "INNA",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/AZpmIY-9bjGoOaURWGVbJTIj5SQ\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "aWmkuH1k7uA"
      },
      "snippet": {
       "publishedAt": "2009-06-17T01:36:28.000Z",
       "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
       "title": "Nirvana - All Apologies (MTV Unplugged) (Official Video)",
       "description": "Listen to more from Nirvana: https://Nirvana.lnk.to/essentials Subscribe for more videos: https://goo.gl/DS7Geg Facebook: https://www.facebook.com/Nirvana/ ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/aWmkuH1k7uA/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/aWmkuH1k7uA/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/aWmkuH1k7uA/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "NirvanaVEVO",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/heWPnnPgn-4CPuFqFlcGYNxvD7k\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "qv96yJYhk3M"
      },
      "snippet": {
       "publishedAt": "2009-12-25T01:05:48.000Z",
       "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
       "title": "Nirvana - You Know You&#39;re Right",
       "description": "Listen to more from Nirvana: https://Nirvana.lnk.to/essentials Subscribe for more videos: https://goo.gl/DS7Geg Facebook: https://www.facebook.com/Nirvana/ ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/qv96yJYhk3M/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/qv96yJYhk3M/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/qv96yJYhk3M/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "NirvanaVEVO",
       "liveBroadcastContent": "none"
      }
     }
    ]
   };

   sampleJsonVideosResult = {
    "kind": "youtube#videoListResponse",
    "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/DSK2fQAOYgqmbGcm7E82vf8lE8c\"",
    "pageInfo": {
     "totalResults": 12,
     "resultsPerPage": 12
    },
    "items": [
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/335EQYUWEwtF8M6Nmp0jH417g-E\"",
      "id": "hTWKbfoikeg",
      "statistics": {
       "viewCount": "983809038",
       "likeCount": "5678467",
       "dislikeCount": "174060",
       "favoriteCount": "0",
       "commentCount": "342987"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/wt6O4NAOSuurN8q2Rzf_wvdiV4Q\"",
      "id": "vabnZ9-ex7o",
      "statistics": {
       "viewCount": "331258225",
       "likeCount": "1692608",
       "dislikeCount": "45754",
       "favoriteCount": "0",
       "commentCount": "77057"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/R-pervAQaQfKSP_D_JPGOaRMUFc\"",
      "id": "fregObNcHC8",
      "statistics": {
       "viewCount": "278312175",
       "likeCount": "1257755",
       "dislikeCount": "36983",
       "favoriteCount": "0",
       "commentCount": "63972"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/ov7F0eIf0EzsGJpcW9vWJMGky38\"",
      "id": "n6P0SitRwy8",
      "statistics": {
       "viewCount": "172982675",
       "likeCount": "897139",
       "dislikeCount": "25187",
       "favoriteCount": "0",
       "commentCount": "67029"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/mNvsH_ZD8Wwn78BlERvgNinlG5c\"",
      "id": "pkcJEvMcnEg",
      "statistics": {
       "viewCount": "168922271",
       "likeCount": "858616",
       "dislikeCount": "20190",
       "favoriteCount": "0",
       "commentCount": "43027"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/hvUC0breyy689kBnLbWmcHxjP40\"",
      "id": "PbgKEjNBHqM",
      "statistics": {
       "viewCount": "117733223",
       "likeCount": "580872",
       "dislikeCount": "12298",
       "favoriteCount": "0",
       "commentCount": "41288"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/fvAMu25yYidgzPJ72KolXOlaulc\"",
      "id": "TjnYjsHPNK8",
      "statistics": {
       "viewCount": "116950696",
       "likeCount": "137395",
       "dislikeCount": "35468",
       "favoriteCount": "0",
       "commentCount": "3739"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/QdyCkcUOddp5EKn8Fa4RGTL--ks\"",
      "id": "AhcttcXcRYY",
      "statistics": {
       "viewCount": "102708896",
       "likeCount": "347033",
       "dislikeCount": "7976",
       "favoriteCount": "0",
       "commentCount": "16587"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/75YooZAd0A2cxx2dJHZg9a0Mb38\"",
      "id": "zYxkezUr8MQ",
      "statistics": {
       "viewCount": "93081312",
       "likeCount": "525829",
       "dislikeCount": "12668",
       "favoriteCount": "0",
       "commentCount": "45708"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/PwsKYuHBbOnXZYWbdGymydeToIk\"",
      "id": "OfS1jFck8YQ",
      "statistics": {
       "viewCount": "86202438",
       "likeCount": "687665",
       "dislikeCount": "23445",
       "favoriteCount": "0",
       "commentCount": "29370"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/ypkoffSTQPETI5J1AO0QjN5za40\"",
      "id": "aWmkuH1k7uA",
      "statistics": {
       "viewCount": "77497829",
       "likeCount": "266833",
       "dislikeCount": "6937",
       "favoriteCount": "0",
       "commentCount": "13509"
      }
     },
     {
      "kind": "youtube#video",
      "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/70Wc8aMBE-jHo4L1kw55P2avSw8\"",
      "id": "qv96yJYhk3M",
      "statistics": {
       "viewCount": "69002483",
       "likeCount": "414147",
       "dislikeCount": "7771",
       "favoriteCount": "0",
       "commentCount": "28837"
      }
     }
    ]
   };
}
