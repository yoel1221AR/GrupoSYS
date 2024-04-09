import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySymbol',
})
export class CurrencySymbolPipe implements PipeTransform {
  transform(currencyCode: string | any): string {
    switch (currencyCode) {
      case 'USD':
        return 'USD';
      case 'ARS':
        return 'ARS';
      case 'EURO':
        return '€';
      case 'JPY':
        return '¥';
      default:
        return currencyCode;
    }
  }
}
