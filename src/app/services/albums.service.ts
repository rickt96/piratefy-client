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

/*   getAll() : Observable<Album[]> {
    return this.httpClient.get<Album[]>(environment.api + "albums");
  } */

  getAll(): any {
    this.httpClient.get<any>('http://127.0.0.1:5000/api/albums').subscribe(result => {
      console.log(result);
      for (let item of result){
        this.data.push({
          albumId: item["ALBUM_ID"],
          artistId: item["ARTIST_ID"],
          artist: null,
          coverUrl: item["COVER_URL"],
          title: item["TITLE"],
          year: item["YEAR"]
        });

        return this.data;
      }
    }, error => {
      console.log("errore");
    });
  }


}
