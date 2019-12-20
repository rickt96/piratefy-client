import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material';
import { QueueDetailComponent } from '../queue-detail/queue-detail.component';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @ViewChild('audioOption', {static: false}) audio: ElementRef;

  progress = 0;
  time = 0;
  max = 0;
  playPauseIcon = "play_arrow";
  cursor = -1;
  playlist = [
    /* {
      "ALBUM_COVER": "https://i.scdn.co/image/4a3684343d867b0f4728092d1c1197ca4ad4ea29", 
      "ALBUM_ID": 115, 
      "ALBUM_NAME": "Confession", 
      "ARTIST_COVER": "https://i.scdn.co/image/638b892aa10d2b27a3ef814946d3bcc6d813fb5f", 
      "ARTIST_ID": 27, 
      "ARTIST_NAME": "Ill Ni\u00f1o", 
      "LENGTH": 197, 
      "SONG_ID": 1384, 
      "TITLE": "How Can I Live", 
      "TRACK_NO": 2
    } */
  ];

  subscription: Subscription;
  
  constructor(
    private playerService: PlayerService,
    public dialog: MatDialog
    ) { 

    //find playlist in localstorage
    if(localStorage.getItem("queue")){
      this.playlist = JSON.parse(localStorage.getItem("queue"));
      console.log("playlist found")
    }
    
    //subscribe to service controller
    this.subscription = this.playerService.getCommand().subscribe(cmd => {
      if (cmd) {
        console.log("player component: ",cmd);
        this.executeCommand(cmd);
      }
    });
  }


  ngOnInit() {
   
  }


  seek($event){
    console.log("seek");
    /* let percent = $event.offsetX / this.offsetWidth;
    player.currentTime = percent * player.duration;
    progressbar.value = percent / 100; */
    //TODO

    //this.audio.nativeElement.currentTime = 10;
    console.log($event);
    this.audio.nativeElement.currentTime = $event.value;
  }


  /**
   * TODO play canzone successiva
   * @param restart   se true riparte da capo la playlist corrente, altrimenti si ferma quando è alla fine
   */
  next(restart=true){
    if(this.playlist.length != 0){
      if(this.cursor == this.playlist.length-1){
        this.cursor = 0;
      } else{
        this.cursor++;
      }
      this.play();
    }
    
  }


  /**
   * play della canzone precedente
   */
  prev(){
    if(this.playlist.length != 0){
      if(this.cursor == 0){
        this.cursor = this.playlist.length-1;
      } else{
        this.cursor--;
      }
      this.play();
    }
  }


  executeCommand(cmd){
    switch(cmd.command){
      case "play":
        this.playlist.unshift(cmd.value);
        this.cursor = 0;
        this.play();
        break;

      case "add":
        this.playlist.push(cmd.value);
        localStorage.setItem("queue", JSON.stringify(this.playlist));
        break;

      case "next":
        this.next();
        break;

      case "prev":
        this.prev();
        break;
      
    }
  }


  /**
   * riproduce la canzone corrente
   */
  play(){
    this.audio.nativeElement.src = environment.api + "songs/play/"+this.playlist[this.cursor].SONG_ID;
    this.audio.nativeElement.load();
    this.max = this.playlist[this.cursor].LENGTH;
    this.audio.nativeElement.play();
    this.playPauseIcon = "pause";
  }


  /**
   * switch play/pausa del player
   */
  toggle(){
    if(this.audio.nativeElement.paused){
      this.audio.nativeElement.play();
      this.playPauseIcon = "pause";
    } else{
      this.audio.nativeElement.pause();
      this.playPauseIcon = "play_arrow";
    }
  }


  /**
   * ad ogni tick della progress bar aggiorna il timer
   */
  updateProgress(){

    this.progress = this.audio.nativeElement.currentTime; //(this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100;

    //let ct = Number(this.audio.nativeElement.currentTime);
    /* let s = Math.floor(ct % 60);
    let m = Math.floor((ct / 60) % 60); */
    //this.time = m+":"+s+"/";
    this.time = Math.floor(this.progress); 
    //console.log(ct);
    }


    showQueue(): void {
      const dialogRef = this.dialog.open(QueueDetailComponent, {
        width: '500px',
        data: {playlist: this.playlist}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if(result){
          this.playlist = result;
        }
      });
    } 

}
