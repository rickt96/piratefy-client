import { Injectable } from '@angular/core';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playlist: Song[];
  cursor = -1;


  constructor() { }


  toggle() {
    // play - pause
  }

  next() {
    // prossima traccia della playlist
  }

  prev() {
    // traccia precedente della playlist
  }

  stop(){
    // stop play e ritorno al 0 della playlist
  }
}
