import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-videos-container',
  templateUrl: './videos-container.component.html',
  styleUrls: ['./videos-container.component.css']
})
export class VideosContainerComponent implements OnInit {
  @Input() movies: any[];
  @Output() onMovieClick = new EventEmitter<any>();

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

  constructor() { }

  ngOnInit() {
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
      [, this.state.selectedComponent] = this.state.components;
      console.log(this.state.selectedComponent);
    }
  }

  onClick(event: any) {
    this.onMovieClick.emit(event);
  }

}
