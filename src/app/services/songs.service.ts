import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../models/song';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { 
  } 


  getAll(page=0, limit=15): Observable<Song[]> {
    return this.http.get<Song[]>(environment.api + "songs?page="+page+"&limit="+limit);
  } 


  getById(id): Observable<Song> {
    return this.http.get<Song>(environment.api + "songs/"+id);
  } 
}
