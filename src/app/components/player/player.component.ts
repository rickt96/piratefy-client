import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @ViewChild('audioOption', {static: false}) audio: ElementRef;

  progress = 0;
  time = "00:00 / 00:00";
  playPauseIcon = "play_arrow";
  cursor = -1;
  playlist = [
    {
      "ALBUM_COVER": "https://i.scdn.co/image/219075f9160328bc5562ee9479325effa06c2367", 
      "ALBUM_ID": 6, 
      "ALBUM_NAME": "Back 2 Base X", 
      "ARTIST_COVER": "https://i.scdn.co/image/b69905deb74e5f5633979dd07171fd8ace3c9e5e", 
      "ARTIST_ID": 2, 
      "ARTIST_NAME": "(Hed) P.E.", 
      "LENGTH": 194, 
      "SONG_ID": 56, 
      "TITLE": "Novus Ordos Clitorus", 
      "TRACK_NO": 2
    },
    {
      "ALBUM_COVER": "https://i.scdn.co/image/c7a8dbe5fe398da91bb0e941930a55f89a5822e8", 
      "ALBUM_ID": 74, 
      "ALBUM_NAME": "Sinner", 
      "ARTIST_COVER": "https://i.scdn.co/image/8e286c03fa04254d98966b40e2d31549348a433c", 
      "ARTIST_ID": 22, 
      "ARTIST_NAME": "Drowning Pool", 
      "LENGTH": 229, 
      "SONG_ID": 876, 
      "TITLE": "I Am", 
      "TRACK_NO": 8
    },
    {
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
    }
  ];
  subscription: Subscription;
  
  constructor(
    private playerService: PlayerService
    ) { 

      
      //subscribe to service controller
      this.subscription = this.playerService.getCommand().subscribe(message => {
        if (message) {
          //this.messages.push(message);
          console.log("player component: ",message);
          this.executeCommand(message);
        } else {
          
        }
      });


    }


  ngOnInit() {

    /* this.audio.nativeElement.addEventListener('ontimeupdate', function() {
      console.log('update time');
   }); */
   
  }


  next(restart=true){
    if(this.cursor == this.playlist.length-1){
      this.cursor = 0;
    } else{
      this.cursor++;
    }
    this.play();
  }

  prev(){
    if(this.cursor == 0){
      this.cursor = this.playlist.length-1;
    } else{
      this.cursor--;
    }
    this.play();
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
        break;

      case "next":
        this.next();
        break;

      case "prev":
        this.prev();
        break;
      
    }
  }

  play(){
    this.audio.nativeElement.src = "http://localhost:5000/api/songs/play/"+this.playlist[this.cursor].SONG_ID;
    this.audio.nativeElement.load();
    
    this.audio.nativeElement.play();
  }

  toggle(){
    if(this.audio.nativeElement.paused){
      this.audio.nativeElement.play();
      this.playPauseIcon = "pause";
    } else{
      this.audio.nativeElement.pause();
      this.playPauseIcon = "play_arrow";
    }
  }

  updateProgress2(){
    console.log("progress");
  }


 
  

  updateProgress(){

    this.progress = (this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100;

    let ct = Number(this.audio.nativeElement.currentTime);
    let s = Math.floor(ct % 60);
    let m = Math.floor((ct / 60) % 60);
    this.time = m+":"+s+"/";
        //$('#spanSeek').html(m+":"+s);
    /* console.log(this.audio.nativeElement.currentTime / this.audio.nativeElement.duration);
       */
        /* let length = this.audio.nativeElement.duration;
        var current_time = this.audio.nativeElement.currentTime;

        this.time = (this.audio.nativeElement.currentTime / this.audio.nativeElement.duration); */
        //progressbar.addEventListener("click", seek);
    
        /* var ct = player.currentTime;
        var s = parseInt(ct % 60);
        var m = parseInt((ct / 60) % 60);
        $('#spanSeek').html(m+":"+s);

        function seek(event)
        {
            var percent = event.offsetX / this.offsetWidth;
            player.currentTime = percent * player.duration;
            progressbar.value = percent / 100;

            

        } */
    }
  

}
