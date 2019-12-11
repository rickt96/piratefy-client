import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // https://codereview.stackexchange.com/questions/144052/audio-player-in-angular-2

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
