import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { AlbumsService } from 'src/app/services/albums.service';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  displayedColumns: string[] = ['IMAGE_URL', 'NAME'];
  dataSource: Artist[] = [];
  loading = false;

  params = {
    page: 0,
    limit: 15,
    query: ''
  }

  constructor(
    private artistsService: ArtistsService,
    private router: Router
    ) { }


  ngOnInit() {
    this.loadArtists();
  }


  loadArtists(){
    this.loading = true;
    this.artistsService.getAll(this.params.page, this.params.limit, this.params.query).subscribe(
      result => {
        if(result.length > 0){

          if(result.length == 1){
            this.router.navigate(['/artists', result[0].ARTIST_ID]);
          }
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
    this.loadArtists();
  }

  

}
