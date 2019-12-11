import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  displayedColumns: string[] = ['ARTIST_COVER', 'TITLE', 'ALBUM_NAME', 'ARTIST_NAME', 'LENGTH', 'FUNCTIONS'];
  dataSource = [];
  page = 0;
  loading = false;


  constructor(
    private songService: SongsService,
    private router: Router
    ) { }


  ngOnInit() {
    this.loadSongs();
  }


  loadSongs(){
    this.loading = true;
    this.songService.getAll(this.page).subscribe(
      result => {
        this.dataSource = this.dataSource.concat(result);
        this.page++;
        this.loading = false;
      },
      error => {
        alert("An error occourred: " + error.statusText);
        console.log(error);
        this.loading = false;
      });
  }


}
