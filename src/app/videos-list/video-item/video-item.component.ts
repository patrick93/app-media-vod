import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input() movie: any;
  @Input() focus: boolean;
  @Output() onMovieClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  play(movie: any): void {
    this.onMovieClick.emit(movie);
  }
}
