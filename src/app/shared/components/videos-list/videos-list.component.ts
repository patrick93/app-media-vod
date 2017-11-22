import { Movie } from './../../models/movie';
import { COMPONENTS } from './../../models/components.enum';
import { HistoryService } from '../../services/history.service';
import { Component, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() state: any;
  @Output() onMovieClick = new EventEmitter<Movie>();

  constructor() {
  }

  ngOnInit(): void {
    [, this.state.selectedComponent] = this.state.components;
  }

  play(movie: Movie): void {
    this.onMovieClick.emit(movie);
  }

  hasFocus(index: number) {
    const result = (index === (this.state.selectedComponent.focusIndex % this.movies.length));
    return this.state.selectedComponent.type === COMPONENTS.VIDEOS_LIST && result;
  }
}
