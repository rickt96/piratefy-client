import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../models/song';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private httpClient: HttpClient) { 
  } 


  getAll(page=0, limit=15, q=''): Observable<Song[]> {
    return this.httpClient.get<Song[]>(environment.api + "songs?page="+page+"&limit="+limit+"&query="+q);
  } 


  getById(id): Observable<Song> {
    return this.httpClient.get<Song>(environment.api + "songs/"+id);
  }


  getByAlbum(albumId): Observable<Song[]> {
    return this.httpClient.get<Song[]>(environment.api + 'songs/byalbum/'+albumId);
  }
}
