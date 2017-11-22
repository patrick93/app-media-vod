import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() state: any;

  constructor() { }

  ngOnInit() {
  }

  hasFocus(index: number) {
    const result = (index === (this.state.selectedComponent.focusIndex % 2));
    return this.state.selectedComponent.type === 0 && result;
  }

}
