import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { AlbumsService } from 'src/app/services/albums.service';
import { Album } from 'src/app/models/album';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  // https://stackoverflow.com/questions/47775608/angular-material-paginator-is-not-working
  displayedColumns: string[] = ['COVER_URL', 'TITLE', 'ARTIST_NAME', 'DATE'];
  dataSource: Album[] = [];
  loading = false;

  params = {
    page: 0,
    limit: 15,
    query: ''
  }

  constructor(
    private albumsService: AlbumsService
    ) { }


  ngOnInit() {
    this.loadAlbums();
  }


  loadAlbums(){
    this.loading = true;
    this.albumsService.getAll(this.params.page, this.params.limit, this.params.query).subscribe(
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
    this.loadAlbums();
  }

  
}