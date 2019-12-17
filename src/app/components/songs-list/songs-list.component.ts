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
  loading = false;

  params = {
    page: 0,
    limit: 15,
    query: ''
  }


  constructor(
    private songService: SongsService,
    private router: Router
    ) { }


  ngOnInit() {
    this.loadSongs();
  }


  loadSongs(){
    this.loading = true;
    this.songService.getAll(this.params.page, this.params.limit, this.params.query).subscribe(
      result => {
        if(result.length > 0){
          this.dataSource = this.dataSource.concat(result);
          this.params.page++;
          this.loading = false;
        }
        else{
          alert("End record");
          this.loading = false;
        }
      },
      error => {
        alert("An error occourred: " + error.statusText);
        console.log(error);
        this.loading = false;
      }
  )};


  doSearch(event){
    this.dataSource = [];
    this.params.page = 0;
    this.params.query = event;
    this.loadSongs();
  }


}
