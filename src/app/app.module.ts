import { HistoryService } from './history/history.service';
import { AppRoutingModule } from './app-routing.module';
import { VideosService } from './videos-list/videos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { HttpModule } from '@angular/http';
import { HistoryComponent } from './history/history.component';
import { VideoItemComponent } from './videos-list/video-item/video-item.component';
import { FocusDirective } from './shared/focus.directive';

@NgModule({
  declarations: [AppComponent, PlayerComponent, VideosListComponent, HistoryComponent, VideoItemComponent, FocusDirective],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [VideosService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
