import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {

  constructor() { }

  getMovies(): Movie[] {
    return Object.keys(localStorage).map(movieId => {
      const movie = localStorage.getItem(movieId);
      return JSON.parse(movie);
    });
  }

  addMovie(movie: Movie): void {
    localStorage.setItem(movie.id, JSON.stringify(movie));
  }

}
