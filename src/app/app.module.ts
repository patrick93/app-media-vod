import { HistoryService } from './shared/services/history.service';
import { AppRoutingModule } from './app-routing.module';
import { VideosService } from './shared/services/videos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { VideosListComponent } from './shared/components/videos-list/videos-list.component';
import { HttpModule } from '@angular/http';
import { HistoryComponent } from './history/history.component';
import { VideoItemComponent } from './shared/components/videos-list/video-item/video-item.component';
import { FocusDirective } from './shared/directives/focus.directive';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { VideosContainerComponent } from './shared/components/videos-container/videos-container.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    VideosListComponent,
    HistoryComponent,
    VideoItemComponent,
    FocusDirective,
    NavbarComponent,
    VideosContainerComponent,
    CatalogComponent
  ],
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
