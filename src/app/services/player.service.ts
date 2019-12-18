import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Song } from '../models/song';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // https://codereview.stackexchange.com/questions/144052/audio-player-in-angular-2

  playlist: Song[];
  cursor = -1;


  //null: player inverte automaticamente lo stato
  //true: play
  //false: pausa
  private toggleSubject = new Subject<boolean>();
  private nextSubject = new Subject();
  private prevSubject = new Subject();
  private addSubject = new Subject<number>();

  private commandSubject = new Subject<any>();
  

  constructor() { }

  public getCommand(): Observable<any> {
    return this.commandSubject.asObservable();
  }

  addToQueue(song_id: number){
    this.addSubject.next(song_id);
  }


  public toggle() {
    this.commandSubject.next({"command":"next", "value":5});
  }


  public play(song){
    this.commandSubject.next({"command":"play", "value":song});
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
