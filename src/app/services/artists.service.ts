import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album';
import { environment } from 'src/environments/environment';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private httpClient: HttpClient) { }

  public getAll(page=0, limit=20, query=''): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(environment.api + 'artists?page='+page+"&limit="+limit+"&query="+query);
  }


  public getById(id): Observable<Artist> {
    return this.httpClient.get<Artist>(environment.api + 'artists/'+id);
  }


  
}
