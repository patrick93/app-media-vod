import { Movie } from './../shared/models/movie';
import { HistoryService } from '../shared/services/history.service';
import { Router } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private historyService: HistoryService, private router: Router) {
  }

  ngOnInit() {
    this.movies = this.historyService.getMovies();
  }

  play(movie: Movie): void {
    this.router.navigate(['/play'], { queryParams: { url: movie.videoUrl } });
  }
}
