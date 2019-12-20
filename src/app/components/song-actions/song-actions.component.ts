import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'song-actions',
  templateUrl: './song-actions.component.html',
  styleUrls: ['./song-actions.component.css']
})
export class SongActionsComponent implements OnInit {

  @Input() song;

  @Input() showPlay = true;
  @Input() showAdd = true;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }


  play(song){
    this.playerService.play(song);
  }


  add(song){
    this.playerService.addToQueue(song);
  }

}
