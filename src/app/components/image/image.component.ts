import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() url: string = "";
  default = 'https://static.thenounproject.com/png/340719-200.png';

  @Input() dimension = 40;


  constructor() { }


  ngOnInit() {
  }


  openCover(){
    if(this.url != this.default){
      window.open(this.url, "_blank");
    }
  }


 updateUrl($event){
   console.log($event);
   this.url = this.default;
 }

}
