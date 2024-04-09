import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountFormatPipePipe implements PipeTransform {

  transform(value: number, decimals : number = 0): string {
    const parts = value.toFixed(2).toString().split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const decimalPart = parts.length > 1 ? ',' + parts[1] : '';
    return integerPart + decimalPart;
  }

}
