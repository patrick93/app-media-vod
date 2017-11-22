import { KEY_CODE } from './../../models/keyboard.enum';
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
    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      event.preventDefault();
      this.state.selectedComponent.focusIndex -= 1;
      if (this.state.selectedComponent.focusIndex < 0) {
        this.state.selectedComponent.focusIndex = this.movies.length - 1;
      }
    }

    if (event.keyCode === KEY_CODE.UP_ARROW) {
      event.preventDefault();
      [this.state.selectedComponent] = this.state.components;
    }

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      event.preventDefault();
      this.state.selectedComponent.focusIndex += 1;
    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      event.preventDefault();
      [, this.state.selectedComponent] = this.state.components;
    }
  }

  onClick(event: any) {
    this.onMovieClick.emit(event);
  }

}
