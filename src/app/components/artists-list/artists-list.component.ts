import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumsService } from 'src/app/services/albums.service';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  displayedColumns: string[] = ['IMAGE_URL', 'NAME'];
  dataSource = [];
  page = 0;
  loading = false;


  constructor(
    private artistsService: ArtistsService
    ) { }


  ngOnInit() {
    this.loadArtists();
  }


  loadArtists(){
    this.loading = true;
    this.artistsService.getAll(this.page).subscribe(
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
