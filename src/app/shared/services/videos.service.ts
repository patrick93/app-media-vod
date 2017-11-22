import { Movie } from './../models/movie';
import { environment } from './../../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

@Injectable()
export class VideosService {
  constructor(private http: Http) {}

  getVideos(): Observable<Movie[]> {
    return this.http
      .get(environment.movies_path)
      .mergeMap((res: any) => res.json().entries)
      .map((data: any) => {
        return {
          id: data.id,
          title: data.title,
          videoUrl: data.contents[0].url,
          imageUrl: data.images[0].url
        };
      }).toArray();
  }
}
