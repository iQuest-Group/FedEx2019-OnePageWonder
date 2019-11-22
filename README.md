# OnePageWonder

A small web app that generates a page with the most viewed YouTube videos of a given artist, developed using Angular 8 (8.2.14) and YouTube API (Data API v3).

Because the initial search results, which are ordered by view count, might not contain exactly the videos we want on the artist page, there is a screen to select from the search results the desired videos.

The YouTube API key is not included, but if you want to test this out it's easy to get one, and then you have to put it in `src\app\youtube.service.ts`, in the `apiKey` variable.

### Screenshots

![](https://i.imgur.com/S0azU8H.png)

![](https://i.imgur.com/osZXw3k.png)

![](https://i.imgur.com/RSmrj2L.png)
