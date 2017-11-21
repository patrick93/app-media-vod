import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VgAPI, VgStates, VgFullscreenAPI } from 'videogular2/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  videoSource: string;
  api: VgAPI;
  fullscreenApi: VgFullscreenAPI;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.videoSource = params['url'];
    });
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 32) {
      event.preventDefault();
      if (this.api.getDefaultMedia().state === VgStates.VG_PAUSED) {
        this.api.getDefaultMedia().play();
      } else {
        this.api.getDefaultMedia().pause();
      }
    }

    if (event.keyCode === 121) {
      event.preventDefault();
      this.fullscreenApi.toggleFullscreen();
    }

    if (event.keyCode === 119) {
      event.preventDefault();
      console.log(this.api.volume);
      if (this.api.volume > 0) {
        this.api.volume -= 0.1;
      }
    }

    if (event.keyCode === 120) {
      event.preventDefault();
      if (this.api.volume < 1) {
        this.api.volume += 0.1;
      }
    }
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.fullscreenApi = api.fsAPI;
    this.api.getDefaultMedia().play();
    this.api.getDefaultMedia().subscriptions.ended.subscribe(() => {
      this.location.back();
    });
  }
}
