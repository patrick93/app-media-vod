import { Movie } from './../shared/models/movie';
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
  movies: Movie[];

  constructor(
    private videosService: VideosService,
    private historyService: HistoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.videosService.getVideos().subscribe(data => {
      console.log(data);
      this.movies = data;
    });
  }

  play(movie: Movie) {
    this.historyService.addMovie(movie);
    this.router.navigate(['/play'], { queryParams: { url: movie.videoUrl } });
  }
}
