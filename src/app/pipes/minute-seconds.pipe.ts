import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  //https://stackoverflow.com/questions/48032975/convert-minute-into-hhmmss-format-in-angular-2
  //https://gist.github.com/vankasteelj/74ab7793133f4b257ea3
  transform(value: number): string {
    
    var pad = function(num, size) { return ('000' + num).slice(size * -1); };
    var minutes = Math.floor(value / 60);
    var seconds = value - minutes * 60;

    return pad(minutes, 2) + ':' + pad(seconds, 2);
  }

}
