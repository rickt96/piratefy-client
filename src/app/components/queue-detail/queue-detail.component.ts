import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-queue-detail',
  templateUrl: './queue-detail.component.html',
  styleUrls: ['./queue-detail.component.css']
})
export class QueueDetailComponent implements OnInit {

  playlist = [];

  constructor(
    public dialogRef: MatDialogRef<QueueDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {

    this.playlist = (data.playlist) ? data.playlist : [];
    console.log(data)

  }

  ngOnInit() {
  }

  moveDown(index){
    if(index == this.playlist.length-1){
      return;
    } else {

      let current_item = this.playlist[index];
      let tmp_item = this.playlist[index+1];

      this.playlist[index+1] = current_item;
      this.playlist[index] = tmp_item;
    }
  }

  
  moveUp(index){
    if(index == 0){
      return;
    } else {

      let current_item = this.playlist[index];
      let tmp_item = this.playlist[index-1];

      this.playlist[index-1] = current_item;
      this.playlist[index] = tmp_item;
    }
  }

  delete(index){
    this.playlist.splice(index, 1);
  }



  onAbort(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.playlist);
  }

  
}
