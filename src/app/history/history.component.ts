import { HistoryService } from './history.service';
import { Router } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  movies: any = [];
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

  constructor(private historyService: HistoryService, private router: Router) {
    [, this.state.selectedComponent] = this.state.components;
  }

  ngOnInit() {
    this.movies = this.historyService.getHistory();
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

  play(movie: any): void {
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
