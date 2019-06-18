import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';

const routes: Routes = [
  { path: 'artists', component: ArtistsListComponent },
  { path: 'albums', component: AlbumsListComponent},
  { path: 'songs', component: SongsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
