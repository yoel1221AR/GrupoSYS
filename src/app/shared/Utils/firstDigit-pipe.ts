import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter',
})
export class FirstLetterPipe implements PipeTransform {
  transform(value: number | string): string {
    const stringValue = typeof value === 'number' ? value.toString() : value;
    if (stringValue.length > 0) {
      if(stringValue.split(' ').length > 1){
        return stringValue.split(' ').map((value: string)=>{
          return value.charAt(0);
        }).join('').toUpperCase();
      }
      return stringValue.charAt(0);
    } else {
      return stringValue;
    }
  }
}
