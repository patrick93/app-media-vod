import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VideosService {
  constructor(private http: Http) {}

  getVideos(): Observable<any[]> {
    return this.http
      .get('./assets/movies.json')
      .map((res: any) => res.json().entries);
  }
}
