import {
  Directive,
  ElementRef,
  OnInit,
  Renderer,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit, OnChanges {
  @Input() appFocus: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.appFocus) {
      this.el.nativeElement.focus();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appFocus.currentValue) {
      this.el.nativeElement.focus();
    }
  }
}
