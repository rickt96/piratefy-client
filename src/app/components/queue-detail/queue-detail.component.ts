import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-detail',
  templateUrl: './queue-detail.component.html',
  styleUrls: ['./queue-detail.component.css']
})
export class QueueDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];
  
}
