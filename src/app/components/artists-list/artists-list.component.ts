import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  data: Album[] = [];

  constructor( private albumService: AlbumsService ) { }

  load(){
    this.data = this.albumService.getAll();
  }
  ngOnInit() {
  }

}
