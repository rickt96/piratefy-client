import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Album } from 'src/app/models/album';
import { Song } from 'src/app/models/song';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { AlbumsService } from 'src/app/services/albums.service';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() albumID;

  album: Album = null;
  songs: Song[] = null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  displayedColumns = ["TRACK_NO", "TITLE", "LENGTH", "ACTIONS"];
  dataSource;

  constructor(
    private route: ActivatedRoute,
    private songService: SongsService,
    private albumService: AlbumsService
  ) {
    this.albumID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    this.albumService.getById(this.albumID).subscribe(result => {
      this.album = result;
    });

    this.songService.getByAlbum(this.albumID).subscribe(result => {
      this.songs = result;
      this.dataSource = new MatTableDataSource(this.songs);
      this.dataSource.sort = this.sort;
      /* setTimeout(() => {
        
      }); */
      
    });


  }


}
