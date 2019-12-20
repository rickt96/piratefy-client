import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  public data: Album[] = [];

  constructor(private httpClient: HttpClient) { }

  getAll(page=0, limit=20, query=''): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.api + 'albums?page='+page+"&limit="+limit+"&query="+query);
  }


  getById(id): Observable<any> {
    return this.httpClient.get<any>(environment.api + 'albums/'+id);
  }


  getByArtist(artistId): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.api + 'albums/byartist/'+artistId);
  }


}
