import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  //TODO
  //https://stackoverflow.com/questions/48032975/convert-minute-into-hhmmss-format-in-angular-2
  transform(value: number): string {
    let  temp = value * 60;
    let hours = Math.floor((temp/3600));
    let minutes = Math.floor((temp/ 60)/60);
    let seconds=Math.floor(temp % 3600 % 60);


    /* if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;} */
    let time = hours + ':' + minutes + ':' + seconds;
    return time;
  }

}
