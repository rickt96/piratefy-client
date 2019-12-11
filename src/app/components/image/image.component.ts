import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() url: string = "";

  constructor() { }

  ngOnInit() {
  }

  openCover(){
    window.open(this.url, "_blank");
  }

}
