import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 

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
  MatListModule
} from '@angular/material';

import { SongsListComponent } from './components/songs-list/songs-list.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { SongsService } from './services/songs.service';



@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    AlbumsListComponent,
    ArtistsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

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
