import { HistoryComponent } from './history/history.component';
import { PlayerComponent } from './player/player.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: VideosListComponent },
  { path: 'play', component: PlayerComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
