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


  getSong(id): Observable<Song> {
    return this.http.get(environment.api + "songs/"+id);
} 
}
