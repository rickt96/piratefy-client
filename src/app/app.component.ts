import { Component } from '@angular/core';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piratefy';

  constructor(
    private platerService: PlayerService
  ){

  }

  test(){
    this.platerService.toggle();
  }
}
