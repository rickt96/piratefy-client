import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Song } from '../models/song';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // https://codereview.stackexchange.com/questions/144052/audio-player-in-angular-2

  private commandSubject = new Subject<any>();
  

  constructor() { }

  public getCommand(): Observable<any> {
    return this.commandSubject.asObservable();
  }

  addToQueue(song){
    this.commandSubject.next({"command":"add", "value":song});
  }

  public play(song){
    this.commandSubject.next({"command":"play", "value":song});
  }
  
}
