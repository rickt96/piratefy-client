import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  constructor(private songService: SongsService) { }

  ngOnInit() {
    this.songService.getSong(2).subscribe(data => console.log(data));
  }

}
