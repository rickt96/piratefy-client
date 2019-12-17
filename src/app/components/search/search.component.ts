import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  pattern = "";

  constructor() { }

  ngOnInit() {
  }

  doSearch(){
    if(this.pattern != ""){
      this.search.emit(this.pattern);
      
    }
  }

}
