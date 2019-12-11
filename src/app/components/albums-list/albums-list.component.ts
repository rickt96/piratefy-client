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
  displayedColumns: string[] = ['COVER_URL', 'TITLE', 'DATE', 'ARTIST_NAME'];
  dataSource = [];
  page = 0;
  loading = false;


  constructor(
    private albumsService: AlbumsService
    ) { }


  ngOnInit() {
    this.loadAlbums();
  }


  loadAlbums(){
    this.loading = true;
    this.albumsService.getAll(this.page).subscribe(
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