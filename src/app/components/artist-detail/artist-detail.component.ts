import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ArtistsService } from 'src/app/services/artists.service';
import { Album } from 'src/app/models/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  @Input() artistID;

  displayedColumns = ["COVER", "TITLE", "DATE"];
  dataSource = [];
  artist = null;
  albums = null;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistsService,
    private albumService: AlbumsService
  ) {
    this.artistID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    this.artistService.getById(this.artistID).subscribe(result => {
      this.artist = result;
    });

    this.albumService.getByArtist(this.artistID).subscribe(result => {
      this.albums = result;
      this.dataSource = this.albums;
    });


  }

}
