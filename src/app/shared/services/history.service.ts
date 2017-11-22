import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {

  constructor() { }

  getMovies(): any[] {
    return Object.keys(localStorage).map(movieId => {
      const movie = localStorage.getItem(movieId);
      return JSON.parse(movie);
    });
  }

  addMovie(movie: any): void {
    localStorage.setItem(movie.id, JSON.stringify(movie));
  }

}
