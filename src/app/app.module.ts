import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
} from '@angular/material';

import { SongsListComponent } from './components/songs-list/songs-list.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { SongsService } from './services/songs.service';
import { ImageComponent } from './components/image/image.component';
import { SearchComponent } from './components/search/search.component';
import { MinuteSecondsPipe } from './pipes/minute-seconds.pipe';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { PlayerComponent } from './components/player/player.component';



@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    AlbumsListComponent,
    ArtistsListComponent,
    ImageComponent,
    SearchComponent,
    MinuteSecondsPipe,
    ArtistDetailComponent,
    AlbumDetailComponent,
    SongDetailComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [
    HttpClientModule,
    SongsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
