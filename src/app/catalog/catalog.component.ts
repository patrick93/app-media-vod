import { Router } from '@angular/router';
import { HistoryService } from './../shared/services/history.service';
import { VideosService } from './../shared/services/videos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  movies: any[];

  constructor(
    private videosService: VideosService,
    private historyService: HistoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.videosService.getVideos().subscribe(data => {
      this.movies = data;
    });
  }

  play(movie: any) {
    this.historyService.addMovie(movie);
    const { contents: [{ url: videoUrl }] } = movie;
    this.router.navigate(['/play'], { queryParams: { url: videoUrl } });
  }
}
