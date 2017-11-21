import { HistoryService } from './../history/history.service';
import { VideosService } from './videos.service';
import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit, AfterViewInit {
  movies: any[] = [];
  focusIndex = 0;
  state: any = {
    selectedComponent: null,
    components: [
      {
        type: 0,
        focusIndex: 0
      },
      {
        type: 1,
        focusIndex: 0
      }
    ]
  };

  constructor(
    private videosService: VideosService,
    private historyService: HistoryService,
    private router: Router
  ) {
    [, this.state.selectedComponent] = this.state.components;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 37) {
      event.preventDefault();
      this.state.selectedComponent.focusIndex -= 1;
      if (this.state.selectedComponent.focusIndex < 0) {
        this.state.selectedComponent.focusIndex = this.movies.length - 1;
      }
    }

    if (event.keyCode === 38) {
      event.preventDefault();
      [this.state.selectedComponent] = this.state.components;
      console.log(this.state.selectedComponent);
    }

    if (event.keyCode === 39) {
      event.preventDefault();
      this.state.selectedComponent.focusIndex += 1;
    }

    if (event.keyCode === 40) {
      event.preventDefault();
      [ , this.state.selectedComponent] = this.state.components;
      console.log(this.state.selectedComponent);
    }
  }

  ngOnInit() {
    this.videosService.getVideos().subscribe(data => {
      this.movies = data;
    });
  }

  ngAfterViewInit(): void {
  }

  play(movie: any): void {
    this.historyService.addMovie(movie);
    const { contents: [{ url: videoUrl }] } = movie;
    this.router.navigate(['/play'], { queryParams: { url: videoUrl } });
  }

  hasFocus(index: number, type: number) {
    let result = false;
    if (this.state.selectedComponent.type === 0) {
      result = (index === (this.state.selectedComponent.focusIndex % 2));
    } else {
      result = (index === (this.state.selectedComponent.focusIndex % this.movies.length));
    }
    return this.state.selectedComponent.type === type && result;
  }
}
