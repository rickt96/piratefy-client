import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { componentFactoryName } from '@angular/compiler';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';

const routes: Routes = [
  { path: 'artists', component: ArtistsListComponent },
  { path: 'albums', component: AlbumsListComponent },
  { path: 'songs', component: SongsListComponent },
  { path: 'songs/:id', component: SongDetailComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'artists/:id', component: ArtistDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
